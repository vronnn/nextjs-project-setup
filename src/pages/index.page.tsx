import AOS from 'aos';
import Image from 'next/image';
import * as React from 'react';
import { HiOutlineArrowSmRight } from 'react-icons/hi';

import Layout from '@/components/layout/Layout';
import BaseLink from '@/components/links/BaseLink';
import ButtonLink from '@/components/links/ButtonLink';

export default function Home() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout>
      <main className='overflow-hidden bg-theme-dark text-white'>
        <section className='relative grid min-h-[calc(100vh-4rem)] -translate-y-10 place-items-center'>
          <Image
            src='/images/tailwindcss-logotype-white.svg'
            alt='tailwind'
            width={250}
            height={250}
            className='absolute left-[18%] top-[28%] w-[15%] min-w-[8rem] opacity-80 drop-shadow'
            data-aos='fade-right'
            data-aos-duration='500'
            data-aos-delay='900'
          />
          <Image
            src='/images/prettier-logo-light.svg'
            alt='prettier'
            width={200}
            height={200}
            className='absolute right-[38%] top-[20%] w-[14%] min-w-[7rem] opacity-80 drop-shadow md:right-[43%]'
            data-aos='fade-down'
            data-aos-duration='500'
            data-aos-delay='1100'
            data-aos-easing='ease-out-sine'
          />
          <div
            className='absolute right-[18%] top-[27.5%] w-[15%] min-w-[6rem] max-w-[11rem] opacity-80 drop-shadow md:top-[28%]'
            data-aos='fade-left'
            data-aos-duration='500'
            data-aos-delay='1300'
          >
            <div className='relative flex'>
              <Image
                src='/images/eslint-logo-color.svg'
                alt='ESLint'
                width={200}
                height={200}
              />
              <span className='absolute left-[40%] top-1/2 -translate-y-1/2 text-base font-semibold md:text-2xl'>
                ESLint
              </span>
            </div>
          </div>
          <Image
            src='/images/ts-logo-256.svg'
            alt='typescript'
            width={60}
            height={60}
            className='absolute bottom-[25%] left-[25%] w-[4%] min-w-[2rem] opacity-80 drop-shadow md:bottom-[30%]'
            data-aos='fade-right'
            data-aos-duration='500'
            data-aos-delay='1900'
          />
          <Image
            src='/images/jest-logo-svg-vector.svg'
            alt='tailwind'
            width={60}
            height={60}
            className='absolute bottom-[22%] right-[45%] w-[4%] min-w-[2rem] translate-x-1/2 opacity-80 drop-shadow md:bottom-[20%] md:right-[48%]'
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-delay='1700'
          />
          <Image
            src='/images/github-action.png'
            alt='tailwind'
            width={60}
            height={60}
            className='absolute bottom-[25%] right-[25%] w-[4%] min-w-[2rem] opacity-80 drop-shadow md:bottom-[32%]'
            data-aos='fade-left'
            data-aos-duration='500'
            data-aos-delay='1500'
          />
          <section className='px-4'>
            <div className='space-y-4'>
              <div
                className='flex flex-col items-center gap-x-4 gap-y-4 text-center text-3xl font-bold md:flex-row md:justify-center md:text-6xl'
                data-aos='zoom-in'
                data-aos-duration='1000'
                data-aos-delay='200'
              >
                <div className="after:from-white-200 after:dark:from-white-900 relative flex w-fit place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
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
              <p
                className='text-center text-sm text-gray-300 md:text-lg'
                data-aos='zoom-in'
                data-aos-delay='400'
                data-aos-duration='1000'
              >
                Initiate your NextJs project with the setups!{' '}
                <BaseLink
                  href='https://yarnpkg.com/'
                  openNewTab
                  className='font-mono tracking-tight text-theme-saxe'
                >
                  &#40;using yarn&#41;
                </BaseLink>
              </p>
              <div className='flex items-center justify-center'>
                <ButtonLink
                  href='/docs'
                  variant='outline'
                  rightIcon={HiOutlineArrowSmRight}
                  data-aos='fade-in'
                  data-aos-delay='800'
                  data-aos-duration='1500'
                  data-aos-easing='ease-out-sine'
                >
                  Get Started
                </ButtonLink>
              </div>
            </div>
          </section>
        </section>
      </main>
    </Layout>
  );
}
