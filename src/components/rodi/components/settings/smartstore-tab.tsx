'use client';
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

export default function SmartStoreTab() {
  return (
    <section id="setting-smartstore">
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
    </section>
  );
}
