import _map from 'lodash/map';
import _size from 'lodash/size';
import { API_URL } from '@/config/index';
import Layout from '@/components/Layout';
import EventItem from '@/components/EventItem';

export default function EventsPage(props) {
  console.log('prps ', props);
  const { events } = props;

  const renderEvents = (events) => {
    if (_size(events) > 0) {
      return _map(events, (evt) => {
        return (
          <div key={evt.id}>
            <EventItem event={evt} />
          </div>
        );
      });
    } else {
      return (
        <>
          <h3> There are no events!</h3>
        </>
      );
    }
  };

  return (
    <Layout>
      <div className='flex flex-col justify-center text-center w-full'>
        <h1 className='text-3xl p-3'>Events</h1>
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
