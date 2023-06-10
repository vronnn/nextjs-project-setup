import * as React from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { RxCopy } from 'react-icons/rx';

import Button from '@/components/buttons/Button';
import clsxm from '@/lib/clsxm';

type CodeBlockProps = {
  children: React.ReactNode;
  title?: string;
  withCopy?: boolean;
};

export default function CodeBlock({
  children,
  title,
  withCopy = true,
}: CodeBlockProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isCopying, setIsCopying] = React.useState(false);
  const handleCopy = async (text: string) => {
    try {
      setIsCopying(true);
      await navigator.clipboard.writeText(text);
      setTimeout(() => {
        setIsCopying(false);
      }, 3000);
    } catch (error) {
      setIsCopying(false);
    }
  };
  return (
    <div className='group relative w-full'>
      <div className='code'>
        {title && (
          <div className='bg-[#3d4967] bg-opacity-40 px-4 py-2.5 text-xs text-[#d3d8e4]'>
            {title}
          </div>
        )}
        {withCopy && (
          <div
            className={clsxm(
              'absolute right-0 top-0 rounded-md bg-base-subtle p-[.6rem]',
              title && 'top-9 bg-transparent',
              'transition-opacity duration-200',
              'md:opacity-0 md:group-hover:opacity-100'
            )}
          >
            <Button
              variant='transdark'
              size='small'
              onClick={() => handleCopy(ref.current?.innerText || '')}
              icon={isCopying ? BsCheckLg : RxCopy}
              className={clsxm('px-3 py-1')}
            />
          </div>
        )}
        <div ref={ref} className='inline-block space-y-1 whitespace-nowrap p-4'>
          {children}
        </div>
      </div>
    </div>
  );
}
