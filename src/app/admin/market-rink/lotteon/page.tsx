'use client';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Flex } from '@/components/ui/flex';
import { Input, InputBox, InputContent, InputTitle } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Text } from '@/components/ui/text';

export default function LotteonTab() {
  /// 출고지
  const shipplingAddress = ['서울 특별시'];
  /// 반품지
  const returnAddress = ['서울 특별시'];
  /// 택배사
  const deliveryServiceProvider = ['CJ 대한통운', '한진 택배', '로젠 택배']; // FIXME: 임시

  return (
    <section id="lotteon" className="tabpage box_width">
      <Text as="h3" size="headline" weight="semibold" className="mt-7 text-gray-600">
        롯데온 연동
      </Text>
      <Flex direction="column" gap="1" className="mt-3 rounded-md border border-border p-5">
        <InputBox state="default" size="default">
          <InputTitle>Open API Key</InputTitle>
          <InputContent>
            <Input placeholder="입력"></Input>
          </InputContent>
        </InputBox>
        <InputBox state="default" size="default">
          <InputTitle>거래처번호</InputTitle>
          <InputContent>
            <Input placeholder="입력"></Input>
          </InputContent>
        </InputBox>
        <Flex align="center" justify="center" className="mt-5">
          <Button variant="secondary">
            <Text size="body-02" weight="medium">
              API 연동하기
            </Text>
          </Button>
        </Flex>
      </Flex>
      <Text as="h3" size="headline" weight="semibold" className="mt-6 text-gray-600">
        출고지/반품지 설정
      </Text>
      <div className="mt-3 rounded-md border border-border p-5">
        <Flex gap="1">
          <Select title="출고지">
            <SelectTrigger className="w-[340px]">
              <SelectValue placeholder="옵션을 선택해주세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {shipplingAddress.map((option, index) => (
                  <SelectItem key={index} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select title="반품지">
            <SelectTrigger className="w-[340px]">
              <SelectValue placeholder="옵션을 선택해주세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {returnAddress.map((option, index) => (
                  <SelectItem key={index} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select title="택배사">
            <SelectTrigger className="w-[340px]">
              <SelectValue placeholder="옵션을 선택해주세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {deliveryServiceProvider.map((option, index) => (
                  <SelectItem key={index} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Flex>
      </div>
    </section>
  );
}
