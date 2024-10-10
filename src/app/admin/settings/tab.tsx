import { D, G } from '@mobily/ts-belt';
import React from 'react';

import {
  BusinessAuthenticationSection,
  DetailPageSettingSection,
  EmployeeSettingSection,
  EtcSettingSection,
  SellingPriceSettingSection,
  ShippingSettingSection,
} from '@/components/rodi/components/settings/common';
import SectionBox from '@/components/rodi/ui/section-box';
import { Flex } from '@/components/ui/flex';
import { Input, InputAffix, InputBox, InputContent, InputTitle } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Text } from '@/components/ui/text';
import { Toggle } from '@/components/ui/toggle';

const CommonTab = () => {
  return (
    <>
      <BusinessAuthenticationSection />
      <SectionBox title="이미지 자동 번역">
        <Flex align="center" gap="0.75">
          <Text size="subhead-02" weight="semibold">
            이미지를 한글 번역 후 가져오기 ON
          </Text>
          <Toggle></Toggle>
        </Flex>
      </SectionBox>
      <ShippingSettingSection />
      <SellingPriceSettingSection />
      <DetailPageSettingSection />
      <EmployeeSettingSection />
      <EtcSettingSection />
    </>
  );
};

const CoupangTab = () => {
  return (
    <>
      <SectionBox title="쿠팡 설정">
        <Select title="검색필터 자동완성" className="w-[300px]">
          <SelectTrigger>
            <SelectValue placeholder="옵션을 선택해주세요" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem key={0} value={'사용하기'}>
                사용하기
              </SelectItem>
              <SelectItem key={1} value={'사용하지 않기'}>
                사용하지 않기
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </SectionBox>
    </>
  );
};

const ESMTab = () => {
  return (
    <>
      <SectionBox title="ESM 2.0 설정">
        <Select title="사이트부담 지원할인" className="w-[300px]">
          <SelectTrigger>
            <SelectValue placeholder="옵션을 선택해주세요" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem key={0} value={'허용하기'}>
                허용하기
              </SelectItem>
              <SelectItem key={1} value={'허용하지 않기'}>
                허용하지 않기
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </SectionBox>
    </>
  );
};

const SmartStoreTab = () => {
  return (
    <>
      <SectionBox title="스마트스토어 설정">
        <Text as="h3" size="subhead-03" weight="bold" className="">
          옵션 이미지 설정
        </Text>
        <Select className="mt-3 w-[300px]">
          <SelectTrigger>
            <SelectValue placeholder="옵션을 선택해주세요" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem key={0} value={'사용하기'}>
                사용하기
              </SelectItem>
              <SelectItem key={1} value={'사용하지 않기'}>
                사용하지 않기
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Text as="h3" size="subhead-03" weight="bold" className="mt-6">
          리뷰 포인트
        </Text>
        <Flex gap="1" className="mt-3">
          <InputBox>
            <InputTitle>텍스트</InputTitle>
            <InputContent>
              <Input />
              <InputAffix>원</InputAffix>
            </InputContent>
          </InputBox>
          <InputBox>
            <InputTitle>포토/동영상</InputTitle>
            <InputContent>
              <Input />
              <InputAffix>원</InputAffix>
            </InputContent>
          </InputBox>
          <InputBox>
            <InputTitle>한달사용 텍스트</InputTitle>
            <InputContent>
              <Input />
              <InputAffix>원</InputAffix>
            </InputContent>
          </InputBox>
          <InputBox>
            <InputTitle>한달사용 포토/동영상</InputTitle>
            <InputContent>
              <Input />
              <InputAffix>원</InputAffix>
            </InputContent>
          </InputBox>
          <InputBox>
            <InputTitle>톡톡친구/스토어찜</InputTitle>
            <InputContent>
              <Input />
              <InputAffix>원</InputAffix>
            </InputContent>
          </InputBox>
        </Flex>
      </SectionBox>
    </>
  );
};

export const tabContent = {
  CommonTab,
  SmartStoreTab,
  CoupangTab,
  ESMTab,
};

export const tabList = D.keys(tabContent);
export type TabList = (typeof tabList)[number];

export const tabGuard = (tab: unknown): tab is TabList => G.isString(tab) && tabList.includes(tab);
