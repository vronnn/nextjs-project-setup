import * as React from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { RxCopy } from 'react-icons/rx';

import Button from '@/components/buttons/Button';

type CodeBlockProps = {
  children: React.ReactNode;
  withCopy?: boolean;
};

export default function CodeBlock({
  children,
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
    <div className='relative w-full'>
      {withCopy && (
        <div className='absolute right-0 top-0 rounded-bl-md bg-base-navbarhover p-[.6rem]'>
          <Button
            variant='transdark'
            size='small'
            onClick={() => handleCopy(ref.current?.innerText || '')}
            icon={isCopying ? BsCheckLg : RxCopy}
            className='px-3 py-1'
          />
        </div>
      )}
      <div className='code' ref={ref}>
        <div className='inline-block space-y-1 whitespace-nowrap'>
          {children}
        </div>
      </div>
    </div>
  );
}
