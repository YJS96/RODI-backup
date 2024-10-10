import { Flex } from '@/components/ui/flex';
import { Text } from '@/components/ui/text';
import InformationIcon from 'public/images/icon-16-information-gray.svg';

type InformationProps = {} & React.ComponentProps<'span'>;

const Information = ({ children, className, ...props }: InformationProps) => {
  return (
    <Flex align="center" gap="0.25">
      <InformationIcon />
      <Text as="p" size="caption" weight="regular" className="text-colors-gray-500">
        {children}
      </Text>
    </Flex>
  );
};

export { Information };
