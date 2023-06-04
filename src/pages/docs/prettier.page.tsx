import * as React from 'react';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import DashboardLayout from '@/components/layout/DashboarLayout';
import BaseLink from '@/components/links/BaseLink';
import Skeleton from '@/components/Skeleton';

export default function PrettierPage() {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return (
    <DashboardLayout>
      <div className='box-border w-full overflow-y-auto py-6 pl-16 pr-10'>
        <div className='space-y-4'>
          {isLoading ? (
            <Skeleton className='h-4 w-52' />
          ) : (
            <div className='flex items-center gap-x-1 text-sm text-base-stealth'>
              <span>Docs</span>
              <FiChevronRight />
              <span className='text-theme-nav'>Prettier Configuration</span>
            </div>
          )}
          <div className='space-y-4'>
            {isLoading ? (
              <Skeleton className=' h-12 w-72' />
            ) : (
              <h1 className='text-[2rem] font-semibold'>Setting Up Prettier</h1>
            )}
            {isLoading ? (
              <Skeleton className=' h-40 w-full' />
            ) : (
              <div className='space-y-4'>
                <p className='leading-relaxed text-gray-300'>
                  The first step you have to do is obviously{' '}
                  <strong>creating the Next.Js app</strong>.
                </p>
                <p className='leading-relaxed text-gray-300'>
                  There are several different starting ways you can do to create
                  your own app. The first one is using{' '}
                  <span className='tag'>npm</span> and the other way is using{' '}
                  <span className='tag'>yarn</span>. Both ways works perfectly
                  fine, but in this tutorial, we will use{' '}
                  <span className='tag'>yarn</span> to do everything, including
                  creating our next app.
                </p>
                <p className='leading-relaxed text-gray-300'>
                  This below is how you can do it using yarn package manager,
                </p>
              </div>
            )}

            <div className='space-y-3 py-8' id='quickstart'>
              {isLoading ? (
                <Skeleton className='h-8 w-32' />
              ) : (
                <h2 className='text-2xl font-medium'>Quickstart</h2>
              )}
              <div className='h-[.8px] w-full bg-base-navbarhover'></div>
              <div className='space-y-6'>
                {isLoading ? (
                  <Skeleton className='h-12 w-full' />
                ) : (
                  <p className='leading-relaxed text-gray-300'>
                    First off, open your project folder or project repo in your
                    vscode, and then open the terminal and type this in to
                    create a next app.
                  </p>
                )}
                {isLoading ? (
                  <Skeleton className='h-12 w-full' />
                ) : (
                  <div className='code'>yarn create next-app@latest</div>
                )}
                {isLoading ? (
                  <Skeleton className=' h-56 w-full' />
                ) : (
                  <div className='space-y-4'>
                    <p className='leading-relaxed text-gray-300'>
                      After that, you are going to answer some questions
                      regarding your app&rsquo;s basic setup. All you have to do
                      is just follow this answer for our objectives earlier,
                    </p>
                    <div className='code space-y-1'>
                      <div className='flex items-center gap-x-2'>
                        <span className='text-cyan-600'>?</span>
                        <span>What is your project named?</span>
                        <FiChevronRight />
                        <span>.</span>
                      </div>
                      <div className='flex items-center gap-x-2'>
                        <span className='text-cyan-600'>?</span>
                        <span>
                          Would you like to use{' '}
                          <span className='font-semibold text-sky-600'>
                            Typescript
                          </span>{' '}
                          with this project?
                        </span>
                        <FiChevronRight />
                        <span className='text-cyan-600 underline'>Yes</span>
                      </div>
                      <div className='flex items-center gap-x-2'>
                        <span className='text-cyan-600'>?</span>
                        <span>
                          Would you like to use{' '}
                          <span className='font-semibold text-sky-600'>
                            ESLint
                          </span>{' '}
                          with this project?
                        </span>
                        <FiChevronRight />
                        <span className='text-cyan-600 underline'>Yes</span>
                      </div>
                      <div className='flex items-center gap-x-2'>
                        <span className='text-cyan-600'>?</span>
                        <span>
                          Would you like to use{' '}
                          <span className='font-semibold text-sky-600'>
                            `src/` directory
                          </span>{' '}
                          with this project?
                        </span>
                        <FiChevronRight />
                        <span className='text-cyan-600 underline'>Yes</span>
                      </div>
                      <div className='flex items-center gap-x-2'>
                        <span className='text-cyan-600'>?</span>
                        <span>
                          Use{' '}
                          <span className='font-semibold text-sky-600'>
                            App Router
                          </span>{' '}
                          <span className='font-medium'>
                            &#40;recommended&#41;
                          </span>
                          ?
                        </span>
                        <FiChevronRight />
                        <span className='text-cyan-600 underline'>No</span>
                      </div>
                      <div className='flex items-center gap-x-2'>
                        <span className='text-cyan-600'>?</span>
                        <span>
                          Would you like to customize the default{' '}
                          <span className='font-semibold text-sky-600'>
                            import alias
                          </span>
                          ?
                        </span>
                        <FiChevronRight />
                        <span className='text-cyan-600 underline'>No</span>
                      </div>
                    </div>
                    <p className='leading-relaxed text-gray-300'>
                      And that&rsquo;s it, you have created your own Next.Js
                      application.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='h-[.8px] w-full bg-base-navbarhover'></div>
        <div className='flex justify-between py-6 text-theme-navhover'>
          {isLoading ? (
            <Skeleton className='h-8 w-32' />
          ) : (
            <BaseLink
              href='/docs'
              className='flex items-center gap-x-2 py-3 pr-6 text-lg'
            >
              <FiChevronLeft size={25} />
              Create Next App
            </BaseLink>
          )}
          {isLoading ? (
            <Skeleton className='h-8 w-32' />
          ) : (
            <BaseLink
              href='/docs/eslint'
              className='flex items-center gap-x-2 py-3 pl-6 text-lg'
            >
              ESLint
              <FiChevronRight size={25} />
            </BaseLink>
          )}
        </div>
      </div>
      <div className='sticky top-[4rem] hidden max-h-[calc(100vh-4rem)] min-w-[16rem] max-w-[16rem] px-4 py-8 xl:block'>
        {isLoading ? (
          <Skeleton className='h-40 w-full' />
        ) : (
          <div className='relative space-y-4'>
            <div className='space-y-2'>
              <h3 className='font-semibold'>On This Page</h3>
              <div>
                <BaseLink
                  href='#quickstart'
                  className='flex items-center gap-x-1 text-[.95rem] text-theme-nav hover:text-theme-navhover'
                >
                  <span>Quickstart</span>
                </BaseLink>
              </div>
            </div>
            <div className='h-[.8px] w-full bg-base-stealth'></div>
            <div className='space-y-2'>
              <BaseLink
                href=''
                className='flex items-center gap-x-1 text-[.8rem] text-theme-nav hover:text-theme-navhover'
              >
                <span>Question? Give me feedback</span>
                <FiArrowRight />
              </BaseLink>
              <BaseLink
                href=''
                className='flex items-center gap-x-1 text-[.8rem] text-theme-nav hover:text-theme-navhover'
              >
                <span>See the repository</span>
              </BaseLink>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
