import type { Meta, StoryObj } from '@storybook/react';

import { Information } from '@/components/ui/information';

const meta: Meta<typeof Information> = {
  title: 'Information',
  component: Information,
  args: {},
};

type Story = StoryObj<typeof Information>;

export const Default: Story = {
  render: (args) => (
    <Information>11번가, 롯데온, 인터파크는 별도의 추가 설정이 필요하지 않습니다.</Information>
  ),
};

export default meta;
