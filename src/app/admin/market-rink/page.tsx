'use client';
import { NextPage } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { match } from 'ts-pattern';

import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Text } from '@/components/ui/text';
import { CommonNextPageProps } from '@/lib/nextjs/type';
import { createQueryString } from '@/lib/string';

import { tabContent, tabGuard, tabList } from './tab';


const MarketRink: NextPage<CommonNextPageProps> = ({ searchParams }) => {
  const tab = tabGuard(searchParams.tab) ? searchParams.tab : tabList[0];
  const searchParamsByHook = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  return (
    <div>
      <Text as="h2" weight="bold" size="display-01">
        오픈마켓 연동
      </Text>
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
              <Text as="h2" size="subhead-03" weight="semibold">
                {match(tab)
                  .with('SmartStoreTab', () => '스마트스토어')
                  .with('CoupangTab', () => '쿠팡')
                  .with('ESMTab', () => 'ESM 2.0(지마켓, 옥션)')
                  .with('ElevenStreetGlobalTab', () => '11번가 (글로벌)')
                  .with('ElevenStreetKoreaTab', () => '11번가 (국내)')
                  .with('LotteonTab', () => '롯데온')
                  .with('InterparkTab', () => '인터파크')
                  .exhaustive()}
              </Text>
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

export default MarketRink;
