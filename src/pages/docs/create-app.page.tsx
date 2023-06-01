import { FiChevronRight } from 'react-icons/fi';

export default function CreateAppPage() {
  return (
    <div className='space-y-4'>
      <div className='flex items-center gap-x-1 text-sm text-base-stealth'>
        <span>Docs</span>
        <FiChevronRight />
        <span className='text-theme-nav'>Create Next App</span>
      </div>
      <div className='space-y-4'>
        <h1 className='text-[2rem] font-semibold'>Creating Next App</h1>
        <p className='leading-relaxed text-gray-300'>
          The first step you have to do is obviously{' '}
          <strong>creating the Next.Js app</strong>.
        </p>
        <p className='leading-relaxed text-gray-300'>
          There are several different starting ways you can do to create your
          own app. The first one is using <span className='tag'>npm</span> and
          the other way is using <span className='tag'>yarn</span>. Both ways
          works perfectly fine, but in this tutorial, we will use{' '}
          <span className='tag'>yarn</span> to do everything, including creating
          our next app.
        </p>
        <p className='leading-relaxed text-gray-300'>
          This below is how you can do it using yarn package manager,
        </p>
        <div className='space-y-3 py-8'>
          <h2 className='text-2xl font-medium'>Quickstart</h2>
          <div className='h-[.8px] w-full bg-base-navbarhover'></div>
          <div className='space-y-6'>
            <p className='leading-relaxed text-gray-300'>
              First off, open your project folder or project repo in your
              vscode, and then open the terminal and type this in to create a
              next app.
            </p>
            <div className='code'>yarn create next-app@latest</div>
            <p className='leading-relaxed text-gray-300'>
              After that, you are going to answer some questions regarding your
              app. All you have to do is just follow this answer for our
              objectives earlier,
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
                  <span className='font-medium text-sky-600'>Typescript</span>{' '}
                  with this project?
                </span>
                <FiChevronRight />
                <span className='text-cyan-600 underline'>Yes</span>
              </div>
              <div className='flex items-center gap-x-2'>
                <span className='text-cyan-600'>?</span>
                <span>
                  Would you like to use{' '}
                  <span className='font-medium text-sky-600'>ESLint</span> with
                  this project?
                </span>
                <FiChevronRight />
                <span className='text-cyan-600 underline'>Yes</span>
              </div>
              <div className='flex items-center gap-x-2'>
                <span className='text-cyan-600'>?</span>
                <span>
                  Would you like to use{' '}
                  <span className='font-medium text-sky-600'>
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
                  <span className='font-medium text-sky-600'>
                    `src/` directory
                  </span>{' '}
                  <span className='font-medium'>&#40;recommended&#41;</span>?
                </span>
                <FiChevronRight />
                <span className='text-cyan-600 underline'>No</span>
              </div>
              <div className='flex items-center gap-x-2'>
                <span className='text-cyan-600'>?</span>
                <span>
                  Would you like to customize the default{' '}
                  <span className='font-medium text-sky-600'>import alias</span>
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
        </div>
      </div>
    </div>
  );
}
