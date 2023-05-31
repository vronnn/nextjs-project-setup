import Image from 'next/image';

export default function Home() {
  return (
    <main className='relative grid min-h-screen place-items-center bg-theme-dark text-white'>
      <Image
        src='/images/tailwindcss-logotype-white.svg'
        alt='tailwind'
        width={250}
        height={250}
        className='absolute left-[20%] top-[30%] drop-shadow'
      />
      <Image
        src='/images/prettier-logo-light.svg'
        alt='prettier'
        width={200}
        height={200}
        className='absolute right-1/2 top-[25%] translate-x-1/2 drop-shadow'
      />
      <div className='absolute right-[20%] top-[32%] drop-shadow'>
        <div className='relative flex'>
          <Image
            src='/images/eslint-logo-color.svg'
            alt='ESLint'
            width={200}
            height={200}
          />
          <span className='absolute right-1/4 top-1/2 -translate-y-1/2 text-2xl font-semibold'>
            ESLint
          </span>
        </div>
      </div>
      <Image
        src='/images/ts-logo-256.svg'
        alt='typescript'
        width={60}
        height={60}
        className='absolute bottom-[30%] left-[25%] drop-shadow'
      />
      <Image
        src='/images/jest-logo-svg-vector.svg'
        alt='tailwind'
        width={60}
        height={60}
        className='absolute bottom-[25%] right-1/2 translate-x-1/2 drop-shadow'
      />
      <Image
        src='/images/github-action.png'
        alt='tailwind'
        width={60}
        height={60}
        className='absolute bottom-[32%] right-[25%] drop-shadow'
      />
      <section className=''>
        <div className='space-y-4'>
          <div className='flex gap-x-4 text-center text-6xl font-bold'>
            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
              <Image
                className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
                src='/next.svg'
                alt='Next.js Logo'
                width={180}
                height={37}
                priority
              />
            </div>{' '}
            Project Setup
          </div>
          <p className='text-center text-lg text-gray-300'>
            Initiate your NextJs project with the setups!{' '}
            <a
              href='https://yarnpkg.com/'
              className='font-mono leading-tight text-theme-blue'
            >
              &#40;using yarn&#41;
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
