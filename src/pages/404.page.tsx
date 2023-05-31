import { MdWbTwilight } from 'react-icons/md';

export default function NotFoundPage() {
  return (
    <main>
      <section className='bg-white'>
        <div className='min-h-screen w-full flex flex-col justify-center items-center gap-y-2 text-black'>
          <MdWbTwilight
            size={70}
            className='text-red-500 animate-pulse drop-shadow-glow'
          />
          <h1 className='text-4xl font-extrabold'>Page Not Found</h1>
        </div>
      </section>
    </main>
  );
}
