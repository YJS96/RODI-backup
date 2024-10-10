import React from 'react';

import { Text } from '@/components/ui/text';

export interface SectionBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

const SectionBox: React.FC<SectionBoxProps> = ({ children, title, ...props }) => {
  return (
    <div {...props}>
      <Text as="h3" size="headline" weight="semibold" className="mt-6 text-gray-600">
        {title}
      </Text>
      <div className="mt-3 rounded-md border border-border p-6">{children}</div>
    </div>
  );
};
SectionBox.displayName = 'SectionBox';

export default SectionBox;
