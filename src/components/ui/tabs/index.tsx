'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

import { TabsListContextValue, TabsListProvider, useTabsListContext } from './tabs-list-context';

// create context for tabs

const Tabs = TabsPrimitive.Root;

const tabListVariant = cva(
  ['inline-flex items-center justify-center bg-muted text-muted-foreground'],
  {
    variants: {
      type: {
        segmented: 'h-10 rounded-md p-1',
        branch: 'h-auto gap-6 bg-transparent p-0 rounded-none',
      },
    },
  },
);

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & Partial<TabsListContextValue>
>(
  (
    {
      // context value
      type = 'segmented',
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <TabsListProvider type={type}>
        <TabsPrimitive.List
          ref={ref}
          className={cn(tabListVariant({ type }), className)}
          {...props}
        />
      </TabsListProvider>
    );
  },
);
TabsList.displayName = TabsPrimitive.List.displayName;

const tabsTriggerVariant = cva(
  [
    'inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-muted-foreground data-[state=active]:text-foreground data-[state=active]:bg-background',
  ],
  {
    variants: {
      type: {
        segmented: 'px-3 py-1.5 data-[state=active]:shadow-sm',
        branch:
          'rounded-none px-0 py-3 data-[state=active]:border-b-[3px] data-[state=active]:border-b-gray-900 data-[state=active]:shadow-none',
      },
    },
  },
);

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const { type } = useTabsListContext('TabsTrigger');

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(tabsTriggerVariant({ type }), className)}
      {...props}
    />
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
