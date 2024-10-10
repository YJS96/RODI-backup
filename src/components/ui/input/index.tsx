import { F } from '@mobily/ts-belt';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import React, { ReactNode } from 'react';

import { Flex } from '@/components/ui/flex';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';

import { InputProvider, useInputContext } from './input-context';

export interface InputBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  state?: 'default' | 'disabled' | 'muted' | 'error';
  size?: 'default' | 'small-38' | 'small-28';
}

const InputBox: React.FC<InputBoxProps> = ({
  children,
  state = 'default',
  size = 'default',
  ...props
}) => {
  return (
    <div {...props}>
      <InputProvider state={state} size={size}>
        {children}
      </InputProvider>
    </div>
  );
};
InputBox.displayName = 'InputBox';

const inputTitleVariants = cva('mb-2', {
  variants: {
    state: {
      default: 'text-colors-gray-900',
      disabled: 'text-colors-gray-500',
      muted: 'text-colors-gray-700',
      error: 'text-colors-gray-900',
    },
  },
  defaultVariants: {
    state: 'default',
  },
});

export interface InputBoxTitleVariantsProps extends React.HTMLAttributes<HTMLHeadElement> {
  asChild?: boolean;
}

const InputTitle: React.FC<InputBoxTitleVariantsProps> = ({
  asChild = false,
  children,
  className,
  ...props
}) => {
  const { state, size } = useInputContext('InputTitle');
  const Comp = asChild ? Slot : Text;
  return (
    <>
      {!F.equals(size, 'small-28') && (
        <Comp
          as="h3"
          size="body-02"
          weight="medium"
          className={cn(inputTitleVariants({ state }), className)}
          {...props}
        >
          {children}
        </Comp>
      )}
    </>
  );
};
InputTitle.displayName = 'InputTitle';

export const inputContentVariants = cva(
  'w-full min-w-0 text-color-gray-900 border border-input bg-background px-3 ring-offset-background',
  {
    variants: {
      state: {
        default: 'border-border focus-within:border-gray-900',
        disabled: 'border-gray-400 opacity-50',
        muted: 'border-border bg-gray-300',
        error: 'border-border focus-within:border-destructive',
      },
      size: {
        default: 'h-[46px] py-2 rounded-md',
        'small-38': 'h-[36px] py-1 rounded-md',
        'small-28': 'h-[28px] py-1 rounded-sm',
      },
    },
    defaultVariants: {
      state: 'default',
      size: 'default',
    },
  },
);

interface InputContentVariantsProps extends React.HTMLAttributes<HTMLDivElement> {}

const InputContent: React.FC<InputContentVariantsProps> = ({ children, className, ...props }) => {
  const { state, size } = useInputContext('InputContent');
  return (
    <Flex align="center" className={cn(inputContentVariants({ state, size }))} {...props}>
      {children}
    </Flex>
  );
};
InputContent.displayName = 'InputContent';

const inputTextVariants = cva('font-pretendard pr-2 text-gray-400 bg-transparent', {
  variants: {
    size: {
      default: 'text-[14px]',
      'small-38': 'text-[13px]',
      'small-28': 'text-[12px]',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const { state, size } = useInputContext('Input');
    return (
      <input
        type={type}
        disabled={F.equals(state, 'disabled') || F.equals(state, 'muted')}
        className={cn(
          inputTextVariants({ size }),
          'w-full text-sm text-gray-900 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export interface InputAffixProps extends React.HTMLAttributes<HTMLSpanElement> {}

const InputAffix = React.forwardRef<HTMLSpanElement, InputAffixProps>(
  ({ children, className, ...props }, ref) => {
    const { size } = useInputContext('InputAffix');
    return (
      <span className={cn(inputTextVariants({ size }), 'shrink-0')} ref={ref} {...props}>
        {children}
      </span>
    );
  },
);
InputAffix.displayName = 'InputAffix';

export interface InputErrorTextProps extends React.HTMLAttributes<HTMLElement> {}

const InputErrorText = React.forwardRef<HTMLSpanElement, InputErrorTextProps>(
  ({ children, className, ...props }, ref) => {
    const { state, size } = useInputContext('InputErrorText');
    return (
      <>
        {F.equals(state, 'error') && !F.equals(size, 'small-28') && (
          <Text
            as="p"
            size="body-01"
            weight="regular"
            className={cn('ml-2 mt-1 text-destructive')}
            ref={ref}
            {...props}
          >
            {children}
          </Text>
        )}
      </>
    );
  },
);
InputErrorText.displayName = 'InputErrorText';

export { InputBox, InputTitle, InputContent, Input, InputAffix, InputErrorText };
