'use client';
import { NextPage } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { match } from 'ts-pattern';

import { Flex } from '@/components/ui/flex';
import { Information } from '@/components/ui/information';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Text } from '@/components/ui/text';
import { CommonNextPageProps } from '@/lib/nextjs/type';
import { createQueryString } from '@/lib/string';

import { tabContent, tabGuard, tabList } from './tab';

const SettingPage: NextPage<CommonNextPageProps> = ({ searchParams }) => {
  const tab = tabGuard(searchParams.tab) ? searchParams.tab : tabList[0];
  const searchParamsByHook = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  return (
    <div>
      <Flex align="center" gap="1">
        <Text as="h2" weight="bold" size="display-01">
          설정
        </Text>
        <Information>11번가, 롯데온, 인터파크는 별도의 추가 설정이 필요하지 않습니다.</Information>
      </Flex>
      <Tabs defaultValue={tab}>
        <TabsList type="branch" className="mt-5">
          {tabList.map((tab) => (
            <TabsTrigger
              key={`tab-trigger-${tab}`}
              value={tab}
              onClick={() => {
                replace(
                  pathname + '?' + createQueryString(searchParamsByHook, 'tab', tab),
                  // to prevent scroll to top
                  {
                    scroll: false,
                  },
                );
              }}
            >
              {match(tab)
                .with('CommonTab', () => '공통')
                .with('SmartStoreTab', () => '스마트스토어')
                .with('CoupangTab', () => '쿠팡')
                .with('ESMTab', () => 'ESM 2.0(지마켓, 옥션)')
                .exhaustive()}
            </TabsTrigger>
          ))}
        </TabsList>
        <Separator className="absolute w-full" />
        {Object.entries(tabContent).map(([key, Component]) => (
          <TabsContent key={key} value={key}>
            <Component />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default SettingPage;
