'use-client';

import * as React from 'react';
import { IconType } from 'react-icons';
import { ImSpinner2 } from 'react-icons/im';

import clsxm from '@/lib/clsxm';

enum ButtonVariant {
  'primary',
  'secondary',
  'outline',
}

enum ButtonSize {
  'base',
}

export type ButtonProps = {
  variant?: keyof typeof ButtonVariant;
  size?: keyof typeof ButtonSize;
  isLoading?: boolean;
  iconClassName?: string;
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
  textClassName?: string;
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = 'primary',
      size = 'base',
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      leftIconClassName,
      rightIconClassName,
      textClassName,
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        className={clsxm(
          'inline-flex items-center justify-center gap-1',
          'rounded-md font-medium',

          [
            size === 'base' && [
              'min-h-[2.25rem] px-4 md:min-h-[2.5rem]',
              'text-sm md:text-base',
              RightIcon && 'pr-3',
              LeftIcon && 'pl-3',
            ],
          ],
          [
            variant === 'primary' && [
              'bg-[#438e96] text-white',
              'border border-[#438e96]',
              'hover:bg-[#3b757f]',
              'active:bg-[#356169]',
              'disabled:bg-[#356169]',
              'focus-visible:ring-[#bfe0e2]',
            ],
            variant === 'secondary' && [
              'bg-[#d45f5f] text-white',
              'border border-[#d45f5f]',
              'hover:bg-[#bf4343]',
              'active:bg-[#a03535]',
              'disabled:bg-[#a03535]',
              'focus-visible:ring-[#f6d2d2]',
            ],
            variant === 'outline' && [
              'bg-white text-[#1F1F1F]',
              'border border-gray-300',
              'hover:bg-[#d5d5d5]',
              'disabled:bg-[#F5F5F5]',
            ],
          ],
          'disabled:cursor-not-allowed',
          isLoading && [
            'relative transition-none disabled:cursor-wait',
            '!text-transparent hover:!text-transparent active:!text-transparent disabled:!text-transparent',
          ],
          className
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsxm(
              'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white',
              [variant === 'outline' && '!text-black']
            )}
          >
            <ImSpinner2 className='animate-spin' />
          </div>
        )}

        {LeftIcon && (
          <LeftIcon
            className={clsxm(
              [size === 'base' && 'text-lg md:text-xl'],
              leftIconClassName
            )}
          />
        )}
        <p className={textClassName}>{children}</p>
        {RightIcon && (
          <RightIcon
            className={clsxm(
              [size === 'base' && 'text-lg md:text-xl'],
              rightIconClassName
            )}
          />
        )}
      </button>
    );
  }
);

export default Button;
