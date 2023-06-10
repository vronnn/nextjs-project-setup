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

  const eslint = {
    extends: ['next/core-web-vitals', 'prettier'],
    plugins: ['prettier'],
  };

  const eslintRules = {
    extends: ['next', 'next/core-web-vitals', 'prettier'],
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': 'warn',
      'no-console': 'warn',
    },
  };

  const prettierIgnore = `.prettierrc.js tailwind.config.js`
    .split(' ')
    .join(',\n');

  const prettier = {
    arrowParens: 'always',
    singleQuote: true,
    jsxSingleQuote: true,
    bracketSpacing: true,
    tabWidth: 2,
    semi: true,
  };

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
                  <strong>Adding prettier to your project</strong>.
                </p>
              )}
              {isLoading ? (
                <Skeleton className='h-24 w-full' />
              ) : (
                <p className='leading-relaxed text-gray-300'>
                  Since everyone has their own style and preference in writing
                  their code, you have to declare the one style and preference
                  used for your own project to make sure that there are no
                  conflicts occured just because of it.
                </p>
              )}
              {isLoading ? (
                <Skeleton className='h-12 w-full' />
              ) : (
                <p className='leading-relaxed text-gray-300' id='install'>
                  So to make that happen, you can add your own prettier
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
                    First off, we need to install prettier and some dev
                    dependencies by typing this into the terminal
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
                    <span className='tag'>prettier</span> into your project and
                    three other development dependencies next to it, which are :
                  </p>
                )}
                {isLoading ? (
                  <Skeleton className='h-32 w-full lg:w-[40rem]' />
                ) : (
                  <div className='space-y-2'>
                    <div className='flex items-center gap-x-2'>
                      <TbPoint />
                      <span className='tag'>eslint-plugin-prettier</span> for
                      prettier eslint&rsquo;s plugins,{' '}
                    </div>
                    <div className='flex items-center gap-x-2'>
                      <TbPoint />
                      <span className='tag'>eslint-config-prettier</span> for
                      prettier eslint&rsquo;s extends, and{' '}
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
                    Now to setup and enable the prettier, you need to create a{' '}
                    <span className='tag'>.prettier.js</span> file as a top
                    level file &#40; at the root &#41; and your own custom
                    configuration like this,
                  </p>
                )}
                {isLoading ? (
                  <Skeleton className='h-48 w-full' />
                ) : (
                  <CodeBlock title='.prettierrc.js'>
                    <pre>{`module.exports = ${JSON.stringify(
                      prettier,
                      null,
                      2
                    )}`}</pre>
                  </CodeBlock>
                )}
                {isLoading ? (
                  <Skeleton className='h-36 w-full' />
                ) : (
                  <p className='leading-relaxed text-gray-300'>
                    After setting the above configuration, your project is
                    actually already comply to it right now. But to make the
                    prettier work with ESlint, you need to add{' '}
                    <span className='tag'>&ldquo;prettier&rdquo;</span> to the{' '}
                    <span className='tag'>extends</span> and the{' '}
                    <span className='tag'>plugins</span> array in the{' '}
                    <span className='tag'>.eslintrc.json</span> file.
                  </p>
                )}
                {isLoading ? (
                  <Skeleton className='h-28 w-full' />
                ) : (
                  <CodeBlock title='.eslintrc.json'>
                    <pre>{JSON.stringify(eslint, null, 2)}</pre>
                  </CodeBlock>
                )}
                {isLoading ? (
                  <Skeleton className='h-8 w-full lg:w-[40rem]' />
                ) : (
                  <p className='leading-relaxed text-gray-300'>
                    You can also define some rules regarding prettier in this
                    file like this below,
                  </p>
                )}
                {isLoading ? (
                  <Skeleton className='h-48 w-full' />
                ) : (
                  <CodeBlock title='.eslintrc.json' withCopy={true}>
                    <pre>{JSON.stringify(eslintRules, null, 2)}</pre>
                  </CodeBlock>
                )}
                {isLoading ? (
                  <Skeleton className='h-8 w-full lg:w-[40rem]' />
                ) : (
                  <p className='leading-relaxed text-gray-300'>
                    And for the last step, you can create a{' '}
                    <span className='tag'>.prettierignore</span> file to exclude
                    any files or directory that doesn&apos;t seem necessary to
                    be made up by your prettier configurations,
                  </p>
                )}
                {isLoading ? (
                  <Skeleton className='h-48 w-full' />
                ) : (
                  <CodeBlock title='.prettierignore'>
                    <div className='whitespace-pre-line'>{prettierIgnore}</div>
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
