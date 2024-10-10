'use client';
import React, { useRef } from 'react';

import DragDropFileInput from '@/components/rodi/ui/drag-drop-file-input';
import SectionBox from '@/components/rodi/ui/section-box';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
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
import InformationGray from 'public/images/icon-16-information-gray.svg';
import ShieldCheckIcon from 'public/images/icon-24-shieldcheck.svg';

export default function BusinessAuthenticationSection() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function submit() {
    console.log(fileInputRef.current?.value);
  }

  return (
    <>
      <SectionBox title="사업자 인증">
        <Text as="h3" size="subhead-03" weight="bold">
          계정 설정
        </Text>
        <Flex gap="0.75" align="center" className="mt-2 rounded-sm bg-gray-200 px-4 py-3">
          <Text size="subhead-02" weight="semibold" className="text-gray-600">
            사업자등록번호
          </Text>
          <Text size="subhead-02" weight="bold">
            123-43-4444
          </Text>
          <span className="border-l border-border"></span>
          <Text size="subhead-02" weight="semibold" className="text-gray-600">
            계정 상태
          </Text>
          <Flex gap="0.25" align="center">
            <InformationGray />
            <Text size="subhead-02" weight="bold">
              미설정
            </Text>
          </Flex>
        </Flex>
        <Dialog>
          <DialogTrigger asChild>
            <Flex align="center" justify="center" className="mt-5">
              <Button variant="secondary">
                <Text size="body-02" weight="medium">
                  사업자 인증하기
                </Text>
              </Button>
            </Flex>
          </DialogTrigger>
          <DialogContent className="w-[600px] p-0">
            <DialogHeader className="px-6 pb-1 pt-5">
              <DialogTitle>
                <Flex align="center" gap="0.5">
                  <ShieldCheckIcon />
                  <Text size="headline" weight="bold">
                    사업자 인증
                  </Text>
                </Flex>
              </DialogTitle>
            </DialogHeader>
            <div className="border-b border-b-border"></div>
            <div className="px-6 pb-5 pt-1">
              <DialogDescription>사업자 인증을 위해 아래의 정보를 입력해주세요</DialogDescription>
              <InputBox className="mt-6">
                <InputTitle>사업자등록번호</InputTitle>
                <InputContent>
                  <Input placeholder="입력" />
                </InputContent>
              </InputBox>
              <Text as="h3" size="body-02" weight="medium" className="mt-6">
                사업자등록증 첨부
              </Text>
              <DragDropFileInput ref={fileInputRef} />
              <Select title="계정상태" className="mt-6">
                <SelectTrigger>
                  <SelectValue placeholder="선택해주세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem key={0} value={'대표계정'}>
                      대표계정
                    </SelectItem>
                    <SelectItem key={1} value={'직원계정'}>
                      직원계정
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Flex align="center" justify="center" className="mb-8 w-full">
                  <Button variant="default" className="px-10" onClick={submit}>
                    등록
                  </Button>
                </Flex>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </SectionBox>
    </>
  );
}
