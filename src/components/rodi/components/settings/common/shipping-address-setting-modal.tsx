'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Flex } from '@/components/ui/flex';
import PlanTag from '@/components/ui/plan-tag';
import { Text } from '@/components/ui/text';
import DuoIcon from 'public/images/icon-16-duo.svg';

import ShippingAddressAddModal from './shipping-address-add-modal';

export default function ShippingAddressSettingModal() {
  const address = [
    {
      name: '해외 배대지',
      tag: '출고지',
      address:
        'Xinen Supply Chain Warehouse A, West of 11-A, Haibu Road, Crown Street, Weihai City, Shandong Province, 264200',
      phoneNumber: '(+84) 156839293999',
      ownerName: 'Jungran Kim',
    },
    {
      name: '우리집',
      tag: '반품/교환지',
      address: '서울시 행복구 행복동 100-11 101호 (03032)',
      phoneNumber: '(+82) 010-1234-1234',
      ownerName: '김정란',
    },
    {
      name: '부모님댁',
      address: '경기도 성남시 분당구 203-44 (분당, 제일풍경채 12단지) 102-1005호 (03423)',
      phoneNumber: '(+82) 010-1004-8282',
      ownerName: '김00',
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="transparent" size="small-rounded">
          <DuoIcon />
          <Text size="caption" className="text-gray-800">
            주소록
          </Text>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[600px] p-0">
        <DialogHeader className="px-6 pb-1 pt-5">
          <DialogTitle>
            <Flex align="center" gap="0.5">
              <Text size="headline" weight="bold">
                주소록
              </Text>
            </Flex>
          </DialogTitle>
        </DialogHeader>
        <div className="border-b border-b-border"></div>
        <div className="px-6 pb-5 pt-0">
          {address.map((item, index) => (
            <Flex
              key={index}
              direction="column"
              gap="0.25"
              className="mt-3 rounded-sm bg-gray-200 p-5 "
            >
              <Flex align="center" gap="0.5">
                <Text as="h4" size="subhead-03" weight="bold">
                  {item.name}
                </Text>
                {item.tag && <PlanTag variant="address">{item.tag}</PlanTag>}
              </Flex>
              <Text as="h4" size="body-01" weight="medium" className="mt-1 text-gray-600">
                {item.address}
              </Text>
              <Flex gap="0.75">
                <Text as="h4" size="body-01" weight="medium" className="text-gray-600">
                  {item.phoneNumber}
                </Text>
                <span className="border-l border-border"></span>
                <Text as="h4" size="body-01" weight="medium" className="text-gray-600">
                  {item.ownerName}
                </Text>
              </Flex>
            </Flex>
          ))}
        </div>
        <DialogFooter className="sm:justify-start">
          <ShippingAddressAddModal />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
