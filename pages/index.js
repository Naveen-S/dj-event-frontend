import _map from 'lodash/map';
import _size from 'lodash/size';
import { API_URL } from '@/config/index';
import Layout from '@/components/Layout';

export default function Home(props) {
  console.log('prps ', props);
  const { events } = props;

  const renderEvents = (events) => {
    if (_size(events) > 0) {
      return _map(events, (evt) => {
        return (
          <div key={evt.id}>
            <h3>{evt.name}</h3>
          </div>
        );
      });
    } else {
      return (
        <>
          <h3> There are no upcoming events!</h3>
        </>
      );
    }
  };

  return (
    <Layout>
      <div className='flex flex-col justify-center text-center'>
        <h1 className='text-3xl p-3'>Home</h1>
        <div className='flex flex-col'>{renderEvents(events)}</div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const data = await res.json();
  console.log('evts ', data);
  return {
    props: {
      events: data,
      revalidate: 1, // Refresh after 1 sec if data has changed.
    },
  };
}
