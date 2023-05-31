import { MdWbTwilight } from 'react-icons/md';

export default function NotFoundPage() {
  return (
    <main>
      <section className='bg-white'>
        <div className='flex min-h-screen w-full flex-col items-center justify-center gap-y-2 text-black'>
          <MdWbTwilight
            size={70}
            className='drop-shadow-glow animate-pulse text-red-500'
          />
          <h1 className='text-4xl font-extrabold'>Page Not Found</h1>
        </div>
      </section>
    </main>
  );
}
