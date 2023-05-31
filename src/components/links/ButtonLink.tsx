import { LinkProps } from 'next/link';
import * as React from 'react';

import Button, { ButtonProps } from '../buttons/Button';
import BaseLink from './BaseLink';

export type ButtonLinkProps = {
  href: string;
  openNewTab?: boolean;
  nextLinkProps?: Omit<LinkProps, 'href'>;
} & ButtonProps &
  React.ComponentPropsWithRef<'a'>;

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ href, openNewTab, nextLinkProps, children, target, ...rest }, ref) => {
    return (
      <BaseLink
        ref={ref}
        href={href}
        target={target}
        openNewTab={openNewTab}
        nextLinkProps={nextLinkProps}
      >
        <Button {...rest}>{children}</Button>
      </BaseLink>
    );
  }
);

export default ButtonLink;
