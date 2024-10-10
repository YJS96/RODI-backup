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

export default function CoupangTab() {
  /// 출고지
  const shipplingAddress = ['서울 특별시'];
  /// 반품지
  const returnAddress = ['서울 특별시'];
  return (
    <section id="coupang" className="tabpage box_width">
      <Text as="h3" size="headline" weight="semibold" className="mt-7 text-gray-600">
        쿠팡 연동
      </Text>
      <div className="mt-3 rounded-md border border-border p-5">
        <InputBox state="default" size="default">
          <InputTitle>쿠팡판매자 ID</InputTitle>
          <InputContent>
            <Input placeholder="입력"></Input>
          </InputContent>
        </InputBox>
        <InputBox state="default" size="default" className="mt-3">
          <InputTitle>업체코드</InputTitle>
          <InputContent>
            <Input placeholder="입력"></Input>
          </InputContent>
        </InputBox>
        <InputBox state="default" size="default" className="mt-3">
          <InputTitle>Access key</InputTitle>
          <InputContent>
            <Input placeholder="입력"></Input>
          </InputContent>
        </InputBox>
        <InputBox state="default" size="default" className="mt-3">
          <InputTitle>Secret key</InputTitle>
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
      </div>
      <Text as="h3" size="headline" weight="semibold" className="mt-6 text-gray-600">
        출고지/반품지 설정
      </Text>
      <div className="mt-3 rounded-md border border-border p-5">
        <Flex gap="1">
          <span>
            <Select>
              <SelectTrigger className="w-[340px]" title="출고지">
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
          </span>
          <span>
            <Select>
              <SelectTrigger className="w-[340px]" title="반품지">
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
          </span>
        </Flex>
      </div>
    </section>
  );
}
