import * as React from 'react';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';

import CodeBlock from '@/components/Codeblock';
import DashboardLayout from '@/components/layout/DashboarLayout';
import BaseLink from '@/components/links/BaseLink';
import Skeleton from '@/components/Skeleton';

export default function CreateAppPage() {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <DashboardLayout>
      <div className='box-border w-full overflow-y-auto px-7 py-7 md:px-12 xl:pl-16 xl:pr-10'>
        <div className='space-y-4'>
          {isLoading ? (
            <Skeleton className='h-4 w-52' />
          ) : (
            <div className='flex items-center gap-x-1 text-sm text-base-stealth'>
              <span>Docs</span>
              <FiChevronRight />
              <span className='text-theme-nav'>Create Next App</span>
            </div>
          )}
          <div className='space-y-4'>
            {isLoading ? (
              <Skeleton className=' h-12 w-72' />
            ) : (
              <h1 className='text-[2rem] font-semibold'>Creating Next App</h1>
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
                <p className='leading-relaxed text-gray-300' id='quickstart'>
                  If you haven&apos;t installed Yarn on your laptop, you can
                  install it first by referring to their documentation. But if
                  you have, here is how you can create your app using the Yarn
                  package manager.
                </p>
              </div>
            )}

            <div className='space-y-3 py-8'>
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
                  <CodeBlock>
                    <div>yarn create next-app@latest</div>
                  </CodeBlock>
                )}
                {isLoading ? (
                  <Skeleton className='h-56 w-full' />
                ) : (
                  <div className='space-y-4'>
                    <p className='leading-relaxed text-gray-300'>
                      After that, you are going to answer some questions
                      regarding your app&rsquo;s basic setup. All you have to do
                      is just follow this answer for our objectives earlier,
                    </p>
                    <CodeBlock withCopy={false}>
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
                            Tailwind CSS
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
                    </CodeBlock>
                  </div>
                )}
                {isLoading ? (
                  <Skeleton className='h-12 w-full' />
                ) : (
                  <p className='leading-relaxed text-gray-300'>
                    After answering those questions, you should already have{' '}
                    <span className='tag'>.eslintrc.json</span> file in your
                    project folder structure that prepares you with the default
                    ESLint configurations.
                  </p>
                )}
                {isLoading ? (
                  <Skeleton className='h-8 w-full lg:w-[30rem]' />
                ) : (
                  <p className='leading-relaxed text-gray-300'>
                    Congrats! you have created your own Next.Js application.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='h-[.8px] w-full bg-base-navbarhover'></div>
        <div className='flex justify-between py-6 text-theme-navhover'>
          <div></div>
          {isLoading ? (
            <Skeleton className='h-8 w-32' />
          ) : (
            <BaseLink
              href='/docs/prettier'
              className='flex items-center gap-x-2 py-3 pl-6 text-lg'
            >
              Prettier
              <FiChevronRight size={25} />
            </BaseLink>
          )}
        </div>
      </div>
      <div className='sticky top-[4rem] hidden max-h-[calc(100vh-4rem)] min-w-[16rem] max-w-[16rem] px-4 py-8 xl:block'>
        <div className='relative space-y-4'>
          <div className='space-y-2'>
            {isLoading ? (
              <Skeleton className='h-8 w-32' />
            ) : (
              <h3 className='font-semibold'>On This Page</h3>
            )}
            {isLoading ? (
              <Skeleton className='h-6 w-24' />
            ) : (
              <div>
                <BaseLink
                  href='#quickstart'
                  className='flex items-center gap-x-1 text-[.95rem] text-theme-nav hover:text-theme-navhover'
                >
                  <span>Quickstart</span>
                </BaseLink>
              </div>
            )}
          </div>
          {isLoading ? (
            <Skeleton className='h-20 w-full' />
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
