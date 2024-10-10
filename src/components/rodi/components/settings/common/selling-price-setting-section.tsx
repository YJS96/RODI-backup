'use client';
import React from 'react';

import SectionBox from '@/components/rodi/ui/section-box';
import { Button } from '@/components/ui/button';
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
import MultipleIcon from 'public/images/icon-16-close.svg';
import EqualIcon from 'public/images/icon-16-duo.svg';
import PlusIcon from 'public/images/icon-16-plus.svg';
import DivideIcon from 'public/images/icon-16-slash.svg';
import StraightIcon from 'public/images/icon-straight.svg';

export default function SellingPriceSettingSection() {
  return (
    <SectionBox title="판매가 설정">
      <Text as="h3" size="subhead-03" weight="bold" className="">
        환율
      </Text>
      <Flex align="center" gap="1.25" className="pt-2">
        <Select className="basis-1/5">
          <SelectTrigger>
            <SelectValue placeholder="옵션을 선택해주세요" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem key={0} value={'고정 환율'}>
                고정 환율
              </SelectItem>
              <SelectItem key={1} value={'합산하기'}>
                합산하기
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <InputBox state="default" size="default" className="basis-1/5">
          <InputContent>
            <Input placeholder="고정환율(위안)"></Input>
            <InputAffix>원</InputAffix>
          </InputContent>
        </InputBox>
      </Flex>
      <Text as="h3" size="subhead-03" weight="bold" className="mt-6">
        마진율 기본설정
      </Text>
      <Flex align="start" child="auto" gap="0.25" className="pt-2">
        <InputBox state="muted" size="default">
          <InputTitle>중국 원가</InputTitle>
          <InputContent>
            <Input placeholder="고정환율(위안)"></Input>
          </InputContent>
          <Text size="caption" weight="medium" className="m-1 text-gray-500">
            위안가X환율
          </Text>
        </InputBox>
        <MultipleIcon className="mt-11 w-7" />
        <InputBox state="default" size="default">
          <InputTitle asChild>
            <Text size="subhead-02" weight="semibold">
              소싱 수수료
            </Text>
          </InputTitle>
          <InputContent>
            <Input placeholder="입력"></Input>
            <InputAffix>1.25%</InputAffix>
          </InputContent>
          <Text size="caption" weight="medium" className="m-1 text-gray-500">
            브랜드수수료+카드수수료
          </Text>
        </InputBox>
        <PlusIcon className="mt-11 w-7" />
        <InputBox state="default" size="default">
          <InputTitle asChild>
            <Text size="subhead-02" weight="semibold">
              해외 배송비
            </Text>
          </InputTitle>
          <InputContent>
            <Input placeholder="입력"></Input>
            <InputAffix>원</InputAffix>
          </InputContent>
          <Text size="caption" weight="medium" className="m-1 text-gray-500">
            배대지
          </Text>
        </InputBox>
        <EqualIcon className="mt-11 w-7" />
        <InputBox state="muted" size="default">
          <InputTitle>기본 구매가</InputTitle>
          <InputContent>
            <Input placeholder=""></Input>
          </InputContent>
        </InputBox>
        <StraightIcon className="mx-2 mt-11 w-20" />
        <InputBox state="muted" size="default">
          <InputTitle>기본 구매가</InputTitle>
          <InputContent>
            <Input placeholder=""></Input>
          </InputContent>
        </InputBox>
        <DivideIcon className="mt-11 w-7" />
        <InputBox state="default" size="default">
          <InputTitle asChild>
            <Text size="subhead-02" weight="semibold">
              마진율
            </Text>
          </InputTitle>
          <InputContent>
            <Input placeholder="입력"></Input>
            <InputAffix>30%</InputAffix>
          </InputContent>
        </InputBox>
        <PlusIcon className="mt-11 w-7" />
        <InputBox state="default" size="default">
          <InputTitle asChild>
            <Text size="subhead-02" weight="semibold">
              기본마진
            </Text>
          </InputTitle>
          <InputContent>
            <Input placeholder="입력"></Input>
            <InputAffix>원</InputAffix>
          </InputContent>
        </InputBox>
        <EqualIcon className="mt-11 w-7" />
        <InputBox state="muted" size="default">
          <InputTitle>1차 판매가</InputTitle>
          <InputContent>
            <Input placeholder=""></Input>
          </InputContent>
        </InputBox>
        <InputBox state="muted" size="default">
          <InputTitle>마진부가세</InputTitle>
          <InputContent>
            <Input placeholder=""></Input>
          </InputContent>
        </InputBox>
        <InputBox state="muted" size="default">
          <InputTitle>총 마진</InputTitle>
          <InputContent>
            <Input placeholder=""></Input>
          </InputContent>
        </InputBox>
      </Flex>
      <Flex align="start" child="auto" gap="0.25" className="pt-2">
        <InputBox state="muted" size="default">
          <InputTitle>기본 구매가</InputTitle>
          <InputContent>
            <Input placeholder="고정환율(위안)"></Input>
          </InputContent>
        </InputBox>
        <PlusIcon className="mt-11 w-7" />
        <InputBox state="muted" size="default">
          <InputTitle>총 마진</InputTitle>
          <InputContent>
            <Input placeholder="입력"></Input>
          </InputContent>
        </InputBox>
        <PlusIcon className="mt-11 w-7" />
        <InputBox state="muted" size="default">
          <InputTitle>마진 부가세</InputTitle>
          <InputContent>
            <Input placeholder="입력"></Input>
          </InputContent>
        </InputBox>
        <EqualIcon className="mt-11 w-7" />
        <InputBox state="muted" size="default">
          <InputTitle>2차 판매가</InputTitle>
          <InputContent>
            <Input placeholder=""></Input>
          </InputContent>
        </InputBox>
        <StraightIcon className="mx-2 mt-11 w-20" />
        <InputBox state="muted" size="default">
          <InputTitle>2차 판매가</InputTitle>
          <InputContent>
            <Input placeholder=""></Input>
          </InputContent>
        </InputBox>
        <DivideIcon className="mt-11 w-7" />
        <InputBox state="muted" size="default">
          <InputTitle> 오픈마켓 수수료</InputTitle>
          <InputContent>
            <Input placeholder="입력"></Input>
            <InputAffix>30%</InputAffix>
          </InputContent>
        </InputBox>
        <EqualIcon className="mt-11 w-7" />
        <InputBox state="muted" size="default">
          <InputTitle> 3차 판매가</InputTitle>
          <InputContent>
            <Input placeholder="입력"></Input>
            <InputAffix>원</InputAffix>
          </InputContent>
        </InputBox>
        <div className="w-[45%] opacity-0">여백</div>
      </Flex>
      <Flex align="center" justify="center" gap="0.25" className="my-5 bg-gray-200 p-5">
        <InputBox state="muted" size="default" className="w-[140px]">
          <InputTitle>3차 판매가</InputTitle>
          <InputContent>
            <Input placeholder="고정환율(위안)"></Input>
          </InputContent>
        </InputBox>
        <StraightIcon className="mx-2 mt-7" />
        <Select title="단위 올림" className="w-[140px]">
          <SelectTrigger>
            <SelectValue placeholder="옵션" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem key={0} value={'10원'}>
                10원
              </SelectItem>
              <SelectItem key={0} value={'100원'}>
                100원
              </SelectItem>
              <SelectItem key={0} value={'1000원'}>
                1000원
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <StraightIcon className="mx-2 mt-7" />
        <InputBox state="muted" size="default" className="w-[140px]">
          <InputTitle>최종 판매가</InputTitle>
          <InputContent>
            <Input placeholder=""></Input>
          </InputContent>
        </InputBox>
        <InputBox state="muted" size="default" className="w-[140px]">
          <InputTitle>판매가 할인율</InputTitle>
          <InputContent>
            <Input placeholder=""></Input>
            <InputAffix>%</InputAffix>
          </InputContent>
        </InputBox>
      </Flex>
      <Text as="h3" size="subhead-03" weight="bold" className="mt-6">
        오픈마켓 수수료
      </Text>
      <Flex align="start" child="flex" gap="1" className="pt-2">
        <InputBox state="default" size="default">
          <InputTitle>스마트스토어</InputTitle>
          <InputContent>
            <Input placeholder="입력" value={0} className="text-right" />
            <InputAffix>%</InputAffix>
          </InputContent>
        </InputBox>
        <InputBox state="default" size="default">
          <InputTitle>쿠팡</InputTitle>
          <InputContent>
            <Input placeholder="입력" value={0} className="text-right" />
            <InputAffix>%</InputAffix>
          </InputContent>
        </InputBox>
        <InputBox state="default" size="default">
          <InputTitle>ESM 2.0(옥션/지마켓)</InputTitle>
          <InputContent>
            <Input placeholder="입력" value={0} className="text-right" />
            <InputAffix>%</InputAffix>
          </InputContent>
        </InputBox>
        <InputBox state="default" size="default">
          <InputTitle>11번가 글로벌</InputTitle>
          <InputContent>
            <Input placeholder="입력" value={0} className="text-right" />
            <InputAffix>%</InputAffix>
          </InputContent>
        </InputBox>
        <InputBox state="default" size="default">
          <InputTitle>11번가 국내</InputTitle>
          <InputContent>
            <Input placeholder="입력" value={0} className="text-right" />
            <InputAffix>%</InputAffix>
          </InputContent>
        </InputBox>
        <InputBox state="default" size="default">
          <InputTitle>롯데온</InputTitle>
          <InputContent>
            <Input placeholder="입력" value={0} className="text-right" />
            <InputAffix>%</InputAffix>
          </InputContent>
        </InputBox>
        <InputBox state="default" size="default">
          <InputTitle>인터파크</InputTitle>
          <InputContent>
            <Input placeholder="입력" value={0} className="text-right" />
            <InputAffix>%</InputAffix>
          </InputContent>
        </InputBox>
      </Flex>
      <Flex align="center" justify="center" className="mt-5">
        <Button variant="secondary">
          <Text size="body-02" weight="medium">
            변경사항 저장
          </Text>
        </Button>
      </Flex>
    </SectionBox>
  );
}
