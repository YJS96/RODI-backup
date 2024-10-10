'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import { match } from 'ts-pattern';

import RoundCheckBlack from 'public/images/icon-20-roundcheck-black.svg';
import RoundCheckBlue from 'public/images/icon-20-roundcheck-color.svg';
import RoundCheckMain from 'public/images/icon-20-roundcheck-main.svg';
import RoundCheckWhite from 'public/images/icon-20-roundcheck-white.svg';
import RoundCheckUnsel from 'public/images/icon-20-roundcheckUnsel.svg';

export interface CheckIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'white' | 'blue' | 'gray' | 'black' | 'deep-gray';
}

const CheckIcon = React.forwardRef<HTMLButtonElement, CheckIconProps>(
  ({ variant, ...props }, ref) => {
    // Here, match returns a JSX element appropriate for the variant
    const iconContent = match(variant)
      .with('primary', () => <RoundCheckMain />)
      .with('white', () => <RoundCheckWhite />)
      .with('blue', () => <RoundCheckBlue />)
      .with('gray', () => <RoundCheckUnsel />)
      .with('black', () => <RoundCheckBlack />)
      .otherwise(() => null);

    return (
      <Slot {...props} ref={ref}>
        {iconContent}
      </Slot>
    );
  },
);
CheckIcon.displayName = CheckboxPrimitive.Root.displayName;

export { CheckIcon };
