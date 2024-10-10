import type { Meta, StoryObj } from '@storybook/react';

import DragDropFileInput from '@/components/rodi/ui/drag-drop-file-input';

const meta: Meta<typeof DragDropFileInput> = {
  title: 'DragDropFileInput',
  component: DragDropFileInput,
  args: {},
};

type Story = StoryObj<typeof DragDropFileInput>;

export const Default: Story = {
  render: ({ ...args }) => <DragDropFileInput {...args} />,
};

export default meta;
