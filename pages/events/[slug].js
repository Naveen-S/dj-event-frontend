import _map from 'lodash/map';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { TiEdit, TiTimes, TiArrowBack } from 'react-icons/ti';
import { API_URL } from '@/config/index';
import Layout from '../../components/Layout';

export default function Event(props) {
  console.log(props.event);
  const { event } = props;
  const router = useRouter();
  console.log(router);

  const deleteEvent = () => {
    console.log('deleteEvent');
  };

  const renderEventDetail = (heading, subHeading) => {
    return (
      <div className='py-2 '>
        <p className='font-bold text-xl'>{heading}</p>
        <p className='px-2 py-1 font-light text-gray-700'>{subHeading}</p>
      </div>
    );
  };

  /* 
  address: "919 3rd Ave New York, New York(NY), 10022"
  date: "June 09, 2021"
  description: "Featuring deep cuts, party anthems and remixes nostalgic songs from two of the best decades of music with the very best music from the 90's and 2000's"
  id: "1"
  image: "/images/sample/event1.jpg"
  name: "Throwback Thursdays with DJ Manny Duke"
  performers: "DJ Manny Duke"
  slug: "throwback-thursdays-with-dj-manny-duke"
  time: "10:00 PM EST"
  venue: "Horizon Club"
  */
  return (
    <Layout>
      <div className='w-full flex-col p-8'>
        {/* controls */}
        <div className='flex justify-end w-full pb-6'>
          <div
            className='flex items-center mx-4 cursor-pointer text-blue-500'
            onClick={() => {
              router.push(`/events/edit/${event.id}`);
            }}>
            <TiEdit size='1.5rem' />
            <span className='mx-1'>Edit</span>
          </div>
          <div
            className='flex items-center mx-4 cursor-pointer text-red-500'
            onClick={deleteEvent}>
            <TiTimes size='1.5rem' />
            <span className='mx-1'>Delete</span>
          </div>
        </div>
        {/* Body */}
        <div className='sm:px-4 sm:py-6'>
          <p className='text-sm text-gray-500 py-2'>{`${event.date} at ${event.time}`}</p>
          <p className='font-extrabold text-2xl py-2'> {event.name}</p>
          <div className='py-2'>
            {event.image && (
              <Image src={event.image} width={1260} height={600} />
            )}
          </div>
          {renderEventDetail('Performers', event.performers)}
          {renderEventDetail('Description', event.description)}
          {renderEventDetail(`Venue: ${event.venue}`, event.address)}
        </div>
        {/* Go back */}
        <div className='flex items-center text-indigo-500 py-2 cursor-pointer'>
          <TiArrowBack size='1.5rem' />
          <Link href='/events'>
            <span className='mx-1'>Go back</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

/* Alternate way of doing */
// export async function getServerSideProps({ query: { slug } }) {
//   console.log('whats the props here ', slug);
//   const res = await fetch(`${API_URL}/api/events/${slug}`);
//   const evt = await res.json();
//   console.log(evt);
//   return {
//     props: {
//       event: evt[0],
//     },
//   };
// }
export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  const paths = _map(events, (evt) => {
    return {
      params: { slug: evt.slug },
    };
  });
  return { paths, fallback: true };
}

export async function getStaticProps({ params: { slug } }) {
  console.log('whats the props here ', slug);
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const evt = await res.json();
  console.log(evt);
  return {
    props: {
      event: evt[0],
    },
  };
}
