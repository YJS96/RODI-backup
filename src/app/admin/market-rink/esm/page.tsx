'use client';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Flex } from '@/components/ui/flex';
import { Input, InputBox, InputContent, InputTitle } from '@/components/ui/input';
import { Text } from '@/components/ui/text';

export default function EsmTab() {
  return (
    <section id="esm-gmarket-auction" className="tabpage box_width">
      <Text as="h3" size="headline" weight="semibold" className="mt-7 text-gray-600">
        ESM 2.0 (지마켓/옥션) 연동
      </Text>
      <div className="mt-3 rounded-md border border-border p-5">
        <InputBox state="default" size="default">
          <InputTitle>옥션 아이디</InputTitle>
          <InputContent>
            <Input placeholder="입력"></Input>
          </InputContent>
        </InputBox>
        <InputBox state="default" size="default" className="mt-3">
          <InputTitle>지마켓 아이디</InputTitle>
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
    </section>
  );
}
