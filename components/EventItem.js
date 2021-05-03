import Link from 'next/link';
import Image from 'next/image';

export default function EventItem(props) {
  const { event } = props;
  return (
    <div className='flex my-2 justify-between items-center shadow-md'>
      <div className=''>
        <Image
          src={event?.image || '/images/event-default.png'}
          width={170}
          height={100}
        />
      </div>
      <div className='flex flex-col justify-center items-center'>
        <span className='text-gray-500 text-sm'>
          {`${event?.date} at ${event?.time}`}
        </span>
        <p className='font-bold text-xl'> {event?.name} </p>
        <p className='text-purple-700 text-opacity-25'> {event?.venue} </p>
      </div>
      <div className='flex items-center w-30 h-8 px-4 mx-3 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 cursor-pointer transition duration-200 ease-in'>
        <Link href={`/events/${event?.slug}`}>Details</Link>
      </div>
    </div>
  );
}
