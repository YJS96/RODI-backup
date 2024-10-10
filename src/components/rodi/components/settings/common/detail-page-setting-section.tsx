'use client';
import React from 'react';

import ImageInput from '@/components/rodi/ui/image-input';
import SectionBox from '@/components/rodi/ui/section-box';
import { Button } from '@/components/ui/button';
import { Flex } from '@/components/ui/flex';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Text } from '@/components/ui/text';

export default function DetailPageSettingSection() {
  return (
    <SectionBox title="상세페이지">
      <Flex gap="1" className="mt-3">
        <div>
          <Text as="h3" size="subhead-02" weight="bold" className="">
            상단이미지
          </Text>
          <ImageInput />
        </div>

        <div>
          <Text as="h3" size="subhead-02" weight="bold" className="">
            하단이미지
          </Text>
          <ImageInput />
        </div>
      </Flex>
      <Flex align="start" child="flex" gap="1" className="mt-3 pt-2">
        <Select title="텍스트 수집">
          <SelectTrigger>
            <SelectValue placeholder="선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem key={0} value={'수집하지 않기'}>
                수집하지 않기
              </SelectItem>
              <SelectItem key={1} value={'수집하기'}>
                수집하기
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select title="동영상 수집">
          <SelectTrigger>
            <SelectValue placeholder="선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem key={0} value={'수집하지 않기'}>
                수집하지 않기
              </SelectItem>
              <SelectItem key={1} value={'수집하기'}>
                수집하기
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select title="옵션이미지 위치">
          <SelectTrigger>
            <SelectValue placeholder="선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem key={0} value={'상단'}>
                상단
              </SelectItem>
              <SelectItem key={1} value={'하단'}>
                하단
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select title="옵션 이미지 배열">
          <SelectTrigger>
            <SelectValue placeholder="선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem key={0} value={'1단'}>
                1단
              </SelectItem>
              <SelectItem key={1} value={'2단'}>
                2단
              </SelectItem>
              <SelectItem key={2} value={'3단'}>
                3단
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select title="옵션 이미지를 썸네일로">
          <SelectTrigger>
            <SelectValue placeholder="선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem key={0} value={'썸네일로 지정'}>
                썸네일로 지정
              </SelectItem>
              <SelectItem key={1} value={'미지정'}>
                미지정
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
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
