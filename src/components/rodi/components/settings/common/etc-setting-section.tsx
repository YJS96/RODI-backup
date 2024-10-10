import React from 'react';

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

export default function EtcSettingSection() {
  return (
    <SectionBox title="기타">
      <Flex child="flex" gap="1">
        <InputBox state="default" size="default">
          <InputTitle>제조사</InputTitle>
          <InputContent>
            <Input placeholder="입력" className="" />
          </InputContent>
        </InputBox>
        <InputBox state="default" size="default">
          <InputTitle>브랜드</InputTitle>
          <InputContent>
            <Input placeholder="입력" className="" />
          </InputContent>
        </InputBox>
        <InputBox state="default" size="default">
          <InputTitle>인당 최대 구매 가능 수량</InputTitle>
          <InputContent>
            <Input placeholder="입력" className="" />
            <InputAffix>개</InputAffix>
          </InputContent>
        </InputBox>
        <Select title="미성년자 구매">
          <SelectTrigger>
            <SelectValue placeholder="선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem key={0} value={'가능'}>
                가능
              </SelectItem>
              <SelectItem key={0} value={'불가능'}>
                불가능
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Flex>
      <Flex child="flex" gap="1" className="mt-3">
        <InputBox state="default" size="default">
          <InputTitle>AS 설명</InputTitle>
          <InputContent>
            <Input placeholder="입력" className="" />
          </InputContent>
        </InputBox>
        <InputBox state="default" size="default">
          <InputTitle>AS 연락처</InputTitle>
          <InputContent>
            <Input placeholder="입력" className="" />
          </InputContent>
        </InputBox>
        <Select title="원산지 코드">
          <SelectTrigger>
            <SelectValue placeholder="선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem key={0} value={'중국(12345)'}>
                중국(12345)
              </SelectItem>
              <SelectItem key={0} value={'국산'}>
                국산
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <InputBox state="default" size="default">
          <InputTitle>수입사</InputTitle>
          <InputContent>
            <Input placeholder="입력" className="" />
          </InputContent>
        </InputBox>
      </Flex>
    </SectionBox>
  );
}
