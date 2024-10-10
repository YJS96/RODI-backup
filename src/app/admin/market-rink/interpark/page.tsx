'use client';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Flex } from '@/components/ui/flex';
import { Input, InputBox, InputContent, InputTitle } from '@/components/ui/input';
import { Text } from '@/components/ui/text';

export default function Interpark() {
  return (
    <section id="interpark" className="tabpage box_width">
      <Text as="h3" size="headline" weight="semibold" className="mt-7 text-gray-600">
        인터파크 연동
      </Text>
      <Flex direction="column" gap="1" className="mt-3 rounded-md border border-border p-5">
        <Flex justify="between" gap="1.5">
          <InputBox state="default" size="default" className="grow">
            <InputTitle>상품상태재고수정 인증키</InputTitle>
            <InputContent>
              <Input placeholder="입력"></Input>
            </InputContent>
          </InputBox>
          <InputBox state="default" size="default" className="grow">
            <InputTitle>상품상태재고수정 비밀키</InputTitle>
            <InputContent>
              <Input placeholder="입력"></Input>
            </InputContent>
          </InputBox>
        </Flex>
        <Flex justify="between" gap="1.5">
          <InputBox state="default" size="default" className="grow">
            <InputTitle>상품재고조회 인증키</InputTitle>
            <InputContent>
              <Input placeholder="입력"></Input>
            </InputContent>
          </InputBox>
          <InputBox state="default" size="default" className="grow">
            <InputTitle>상품재고조회 비밀키</InputTitle>
            <InputContent>
              <Input placeholder="입력"></Input>
            </InputContent>
          </InputBox>
        </Flex>
        <Flex justify="between" gap="1.5">
          <InputBox state="default" size="default" className="grow">
            <InputTitle>상품정보조회 인증키</InputTitle>
            <InputContent>
              <Input placeholder="입력"></Input>
            </InputContent>
          </InputBox>
          <InputBox state="default" size="default" className="grow">
            <InputTitle>상품정보조회 비밀키</InputTitle>
            <InputContent>
              <Input placeholder="입력"></Input>
            </InputContent>
          </InputBox>
        </Flex>
        <Flex justify="between" gap="1.5">
          <InputBox state="default" size="default" className="grow">
            <InputTitle>상품수정 인증키</InputTitle>
            <InputContent>
              <Input placeholder="입력"></Input>
            </InputContent>
          </InputBox>
          <InputBox state="default" size="default" className="grow">
            <InputTitle>상품수정 비밀키</InputTitle>
            <InputContent>
              <Input placeholder="입력"></Input>
            </InputContent>
          </InputBox>
        </Flex>
        <Flex justify="between" gap="1.5">
          <InputBox state="default" size="default" className="grow">
            <InputTitle>상품등록 인증키</InputTitle>
            <InputContent>
              <Input placeholder="입력"></Input>
            </InputContent>
          </InputBox>
          <InputBox state="default" size="default" className="grow">
            <InputTitle>상품등록 비밀키</InputTitle>
            <InputContent>
              <Input placeholder="입력"></Input>
            </InputContent>
          </InputBox>
        </Flex>
        <Flex justify="between" gap="1.5">
          <InputBox state="default" size="default" className="grow">
            <InputTitle>반품배송지조회 인증키</InputTitle>
            <InputContent>
              <Input placeholder="입력"></Input>
            </InputContent>
          </InputBox>
          <InputBox state="default" size="default" className="grow">
            <InputTitle>반품배송지조회 비밀키</InputTitle>
            <InputContent>
              <Input placeholder="입력"></Input>
            </InputContent>
          </InputBox>
        </Flex>
        <Flex justify="between" gap="1.5">
          <InputBox state="default" size="default" className="grow">
            <InputTitle>반품배송지등록 인증키</InputTitle>
            <InputContent>
              <Input placeholder="입력"></Input>
            </InputContent>
          </InputBox>
          <InputBox state="default" size="default" className="grow">
            <InputTitle>반품배송지등록 비밀키</InputTitle>
            <InputContent>
              <Input placeholder="입력"></Input>
            </InputContent>
          </InputBox>
        </Flex>
        <Flex justify="between" gap="1.5">
          <InputBox state="default" size="default" className="grow">
            <InputTitle>업체번호</InputTitle>
            <InputContent>
              <Input placeholder="입력"></Input>
            </InputContent>
          </InputBox>
          <InputBox state="default" size="default" className="grow">
            <InputTitle>공급계약일련번호</InputTitle>
            <InputContent>
              <Input placeholder="입력"></Input>
            </InputContent>
          </InputBox>
        </Flex>
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
