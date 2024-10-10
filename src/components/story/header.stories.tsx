import type { Meta, StoryObj } from '@storybook/react';

import Header from '../rodi/layout/header';

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
};

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => <Header />,
};

export default meta;
