import * as React from 'react';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { TbPoint } from 'react-icons/tb';

import CodeBlock from '@/components/Codeblock';
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
      <div className='box-border w-full overflow-y-auto px-7 py-7 md:px-12 xl:pl-16 xl:pr-10'>
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
            <div className='space-y-4'>
              {isLoading ? (
                <Skeleton className=' h-8 w-full lg:w-[33rem]' />
              ) : (
                <p className='leading-relaxed text-gray-300'>
                  The next step you want to do is{' '}
                  <strong>setting up your prettier configuration</strong>.
                </p>
              )}
              {isLoading ? (
                <Skeleton className='h-24 w-full' />
              ) : (
                <p className='leading-relaxed text-gray-300'>
                  Since everyone has their own style and preference in writing
                  their code, you have to declare the one styles and preferences
                  used for your own project. Because sometimes, it gets on
                  everyone&apos;s nerve when you got a lot of conflict after
                  pull and rebasing other people&rsquo;s work just because of
                  the different preference on tab width.
                </p>
              )}
              {isLoading ? (
                <Skeleton className='h-12 w-full' />
              ) : (
                <p className='leading-relaxed text-gray-300' id='install'>
                  So to fix this issue, you need to add your own prettier
                  configuration for your workspace by the help of some
                  dependencies we&rsquo;re about to install.
                </p>
              )}
            </div>
            <div className='space-y-3 py-8'>
              {isLoading ? (
                <Skeleton className='h-8 w-72' />
              ) : (
                <h2 className='text-2xl font-medium'>
                  Installing Dependencies
                </h2>
              )}
              <div className='h-[.8px] w-full bg-base-navbarhover'></div>
              <div className='space-y-6'>
                {isLoading ? (
                  <Skeleton className='h-8 w-full lg:w-[44rem]' />
                ) : (
                  <p className='leading-relaxed text-gray-300'>
                    First off, we need to install prettier and some of
                    it&rsquo;s dependencies by typing this into the terminal
                  </p>
                )}
                {isLoading ? (
                  <Skeleton className='h-12 w-full' />
                ) : (
                  <CodeBlock>
                    <p>
                      yarn add --dev prettier eslint-plugin-prettier
                      eslint-config-prettier prettier-plugin-tailwindcss
                    </p>
                  </CodeBlock>
                )}
                {isLoading ? (
                  <Skeleton className='h-12 w-full' />
                ) : (
                  <p className='leading-relaxed text-gray-300'>
                    The above code is basically installing{' '}
                    <span className='tag'>prettier</span> into your project for
                    enabling the other three development dependencies next to
                    it, which are :
                  </p>
                )}
                {isLoading ? (
                  <Skeleton className='h-32 w-full lg:w-[40rem]' />
                ) : (
                  <div className='space-y-2'>
                    <div className='flex items-center gap-x-2'>
                      <TbPoint />
                      <span className='tag'>eslint-plugin-prettier</span> for
                      eslint&rsquo;s plugin,{' '}
                    </div>
                    <div className='flex items-center gap-x-2'>
                      <TbPoint />
                      <span className='tag'>eslint-config-prettier</span> for
                      eslint&rsquo;s extend, and{' '}
                    </div>
                    <div className='flex items-center gap-x-2' id='config'>
                      <TbPoint />
                      <span className='tag'>
                        prettier-plugin-tailwindcss
                      </span>{' '}
                      to sort all tailwind classes used on your elements
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className='space-y-3 py-8'>
              {isLoading ? (
                <Skeleton className='h-8 w-72' />
              ) : (
                <h2 className='text-2xl font-medium'>Add Configuration</h2>
              )}
              <div className='h-[.8px] w-full bg-base-navbarhover'></div>
              <div className='space-y-6'>
                {isLoading ? (
                  <Skeleton className='h-8 w-full' />
                ) : (
                  <p className='leading-relaxed text-gray-300'>
                    The next thing is, create a{' '}
                    <span className='tag'>.prettier.js</span> file as a top
                    level file &#40; at the root &#41; and your own custom
                    configuration like this,
                  </p>
                )}
                {isLoading ? (
                  <Skeleton className='h-48 w-full' />
                ) : (
                  <CodeBlock withCopy={false}>
                    <div>module.export = &#123;</div>
                    <div className='pl-4'>
                      <div>
                        arrowParens:{' '}
                        <span className='text-code-state'>
                          &apos;always&apos;
                        </span>
                        ,
                      </div>
                      <div>
                        singleQuote:{' '}
                        <span className='text-code-bool'>true</span>,
                      </div>
                      <div>
                        jsxSingleQuote:{' '}
                        <span className='text-code-bool'>true</span>,
                      </div>
                      <div>
                        bracketSpacing:{' '}
                        <span className='text-code-bool'>true</span>,
                      </div>
                      <div>tabWidth: 2,</div>
                      <div>
                        semi: <span className='text-code-bool'>true</span>,
                      </div>
                    </div>
                    <div>&#125;;</div>
                  </CodeBlock>
                )}
                {isLoading ? (
                  <Skeleton className='h-12 w-full' />
                ) : (
                  <p className='leading-relaxed text-gray-300'>
                    But the above configuration wont applied in your project if
                    you haven&apos;t update the ESLint configuration. So to make
                    this prettier works, you need to add{' '}
                    <span className='tag'>&ldquo;prettier&rdquo;</span>
                    to the <span className='tag'>extends</span> and the{' '}
                    <span className='tag'>plugins</span> array in the
                    .eslintrc.json file.
                  </p>
                )}
                {isLoading ? (
                  <Skeleton className='h-28 w-full' />
                ) : (
                  <CodeBlock withCopy={false}>
                    <div>&#123;</div>
                    <div className='pl-4'>
                      <div>
                        &ldquo;extends&rdquo; : &#91;
                        <span className='text-theme-lightsaxe'>
                          &ldquo;next/core-web-vitals&rdquo;
                        </span>
                        ,
                        <span className='text-theme-lightsaxe'>
                          &ldquo;prettier&rdquo;
                        </span>
                        &#93;
                      </div>
                      <div>
                        &ldquo;plugins&rdquo; : &#91;
                        <span className='text-theme-lightsaxe'>
                          &ldquo;prettier&rdquo;
                        </span>
                        &#93;
                      </div>
                    </div>
                    <div>&#125;;</div>
                  </CodeBlock>
                )}
                {isLoading ? (
                  <Skeleton className='h-8 w-full lg:w-[40rem]' />
                ) : (
                  <p className='leading-relaxed text-gray-300'>
                    And that&apos;s it, now your project has it&apos;s own
                    styles and preferences thanks to prettier!
                  </p>
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
        <div className='relative space-y-4'>
          <div className='space-y-2'>
            {isLoading ? (
              <Skeleton className='h-8 w-32' />
            ) : (
              <h3 className='font-semibold'>On This Page</h3>
            )}
            {isLoading ? (
              <Skeleton className='h-12 w-48' />
            ) : (
              <>
                <BaseLink
                  href='#install'
                  className='flex items-center gap-x-1 text-[.95rem] text-theme-nav hover:text-theme-navhover'
                >
                  <span>Installing Dependencies</span>
                </BaseLink>
                <BaseLink
                  href='#config'
                  className='flex items-center gap-x-1 text-[.95rem] text-theme-nav hover:text-theme-navhover'
                >
                  <span>Add Configuration</span>
                </BaseLink>
              </>
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
