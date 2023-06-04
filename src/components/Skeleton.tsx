import * as React from 'react';

import clsxm from '@/lib/clsxm';

type SkeletonProps = React.ComponentPropsWithoutRef<'div'>;

export default function Skeleton({ className, ...rest }: SkeletonProps) {
  return (
    <div
      className={clsxm('animate-shimmer rounded bg-[#343941]', className)}
      style={{
        backgroundImage:
          'linear-gradient(to right, #343941 0%, #4c4c55 20%, #343941 40%, #343941 100%)',
        backgroundSize: '700px 100%',
        backgroundRepeat: 'no-repeat',
      }}
      {...rest}
    />
  );
}
