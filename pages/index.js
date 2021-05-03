import Link from 'next/link';

import _map from 'lodash/map';
import _size from 'lodash/size';

import { API_URL } from '@/config/index';
import Layout from '@/components/Layout';
import EventItem from '@/components/EventItem';

export default function Home(props) {
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
          <h3> There are no upcoming events!</h3>
        </>
      );
    }
  };

  return (
    <Layout>
      <div className='flex flex-col mx-32 justify-center w-full'>
        <h1 className='text-3xl py-3 font-extrabold flex justify-center'>
          Upcoming Events
        </h1>
        <div className='flex flex-col'>{renderEvents(events)}</div>
        {_size(events) && (
          <div className='my-2'>
            <Link href='/events'>
              <a className='w-40 py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-gray-500 hover:bg-gray-700'>
                View all Events
              </a>
            </Link>
          </div>
        )}
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
      events: data.slice(0, 3),
      revalidate: 1, // Refresh after 1 sec if data has changed.
    },
  };
}
