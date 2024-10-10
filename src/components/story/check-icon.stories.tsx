import type { Meta, StoryObj } from '@storybook/react';

import { CheckIcon } from '@/components/rodi/ui/check-icon';

const meta: Meta<typeof CheckIcon> = {
  title: 'CheckIcon',
  component: CheckIcon,
  args: {
    variant: 'primary',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'white', 'blue', 'gray', 'black'],
    },
  },
};

type Story = StoryObj<typeof CheckIcon>;

export const Default: Story = {
  render: ({ ...args }) => <CheckIcon {...args}></CheckIcon>,
};

export default meta;
