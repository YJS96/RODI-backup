'use client';
import React, { useState } from 'react';
import { match } from 'ts-pattern';

import {
  CommonTab,
  CoupangTab,
  EsmTab,
  SmartStoreTab,
} from '@/components/rodi/components/settings';
import { Flex } from '@/components/ui/flex';
import { Information } from '@/components/ui/information';
import { Menu, MenuContent, MenuItem, MenuLink } from '@/components/ui/menu';
import { Text } from '@/components/ui/text';

interface market {
  name: string;
  engName: string;
}

export default function Setting() {
  const markets: market[] = [
    { name: '공통설정', engName: 'common' },
    { name: '스마트스토어', engName: 'smartstore' },
    { name: '쿠팡', engName: 'coupang' },
    { name: 'ESM 2.0(지마켓, 옥션)', engName: 'esm' },
  ];

  const [currentMarket, setCurrentMarket] = useState('common');

  return (
    <div>
      <Flex align="center" gap="1">
        <Text as="h2" weight="bold" size="display-01">
          설정
        </Text>
        <Information>11번가, 롯데온, 인터파크는 별도의 추가 설정이 필요하지 않습니다.</Information>
      </Flex>
      <Menu className="mt-5 border-b border-b-border">
        <MenuContent>
          {markets.map((market, index) => (
            <MenuItem
              key={index}
              isActive={currentMarket === market.engName}
              onClick={() => {
                setCurrentMarket(market.engName);
              }}
            >
              <MenuLink>{market.name}</MenuLink>
            </MenuItem>
          ))}
        </MenuContent>
      </Menu>
      {match(currentMarket)
        .with('common', () => <CommonTab />)
        .with('smartstore', () => <SmartStoreTab />)
        .with('coupang', () => <CoupangTab />)
        .with('esm', () => <EsmTab />)
        .otherwise(() => null)}
    </div>
  );
}
