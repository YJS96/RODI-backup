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

export default function ElevenStreetKoreaTab() {
  const shippingDateTemplate = ['3일내', '5일내']; // 정확한 형태 XX
  return (
    <section id="eleven-street-global" className="tabpage box_width">
      <Text as="h3" size="headline" weight="semibold" className="mt-7 text-gray-600">
        11번가 국내 연동
      </Text>
      <Flex direction="column" gap="1" className="mt-3 rounded-md border border-border p-5">
        <InputBox state="default" size="default">
          <InputTitle>11번가 Open API Key</InputTitle>
          <InputContent>
            <Input placeholder="입력"></Input>
          </InputContent>
        </InputBox>
        <Select title="발송예정일 템플릿 선택">
          <SelectTrigger className="w-[340px]">
            <SelectValue placeholder="옵션을 선택해주세요" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {shippingDateTemplate.map((option, index) => (
                <SelectItem key={index} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Flex align="center" justify="center" className="mt-5">
          <Button variant="secondary">
            <Text size="body-02" weight="medium">
              API 연동하기
            </Text>
          </Button>
        </Flex>
      </Flex>
    </section>
  );
}
