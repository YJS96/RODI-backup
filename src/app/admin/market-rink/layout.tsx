'use client';
import { usePathname } from 'next/navigation';
import React from 'react';

import { Menu, MenuContent, MenuItem, MenuLink } from '@/components/ui/menu';
import { Text } from '@/components/ui/text';

interface MarketRinkProps {
  children: React.ReactNode;
}

interface market {
  name: string;
  engName: string;
}

export default function MarketRink({ children }: MarketRinkProps) {
  const pathname = usePathname();

  const markets: market[] = [
    { name: '스마트스토어', engName: 'smart-store' },
    { name: '쿠팡', engName: 'coupang' },
    { name: 'ESM 2.0 (지마켓/옥션)', engName: 'esm' },
    { name: '11번가 글로벌', engName: 'elevenstreet-global' },
    { name: '11번가 국내', engName: 'elevenstreet-korea' },
    { name: '롯데온', engName: 'lotteon' },
    { name: '인터파크', engName: 'interpark' },
  ];

  return (
    <div>
      <Text as="h2" weight="bold" size="display-01">
        오픈마켓 연동
      </Text>
      <Menu className="mt-5 border-b border-border">
        <MenuContent>
          {markets.map((market, index) => (
            <MenuItem
              key={index}
              isActive={pathname === `/admin/market-rink/${market.engName}`}
              onClick={() => {}}
            >
              <MenuLink href={`/admin/market-rink/${market.engName}`}>{market.name}</MenuLink>
            </MenuItem>
          ))}
        </MenuContent>
      </Menu>
      {children}
    </div>
  );
}
