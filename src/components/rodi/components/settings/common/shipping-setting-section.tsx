import SectionBox from '@/components/rodi/ui/section-box';
import { Button } from '@/components/ui/button';
import { Flex } from '@/components/ui/flex';
import { Input, InputAffix, InputBox, InputContent, InputTitle } from '@/components/ui/input';
import PlanTag from '@/components/ui/plan-tag';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Text } from '@/components/ui/text';

import ShippingAddressSettingModal from './shipping-address-setting-modal';

export default function ShippingSettingSection() {
  return (
    <SectionBox title="배송 설정">
      <Flex justify="between">
        <Text as="h3" size="subhead-03" weight="bold">
          출고지/반품교환지
        </Text>
        <ShippingAddressSettingModal />
      </Flex>
      <Flex direction="column" gap="0.25" className="mt-3 rounded-sm bg-gray-200 p-5 ">
        <Flex align="center" gap="0.5">
          <Text as="h4" size="subhead-03" weight="bold">
            해외 배대지
          </Text>
          <PlanTag variant="address">출고지</PlanTag>
        </Flex>
        <Text as="h4" size="body-01" weight="medium" className="mt-1 text-gray-600">
          Xinen Supply Chain Warehouse A, West of 11-A, Haibu Road, Crown Street, Weihai City,
          Shandong Province, 264200
        </Text>
        <Flex gap="0.75">
          <Text as="h4" size="body-01" weight="medium" className="text-gray-600">
            (+84) 156839293999
          </Text>
          <span className="border-l border-border"></span>
          <Text as="h4" size="body-01" weight="medium" className="text-gray-600">
            Jungran Kim
          </Text>
        </Flex>
      </Flex>
      <Flex direction="column" gap="0.25" className="mt-3 rounded-sm bg-gray-200 p-5 ">
        <Flex align="center" gap="0.5">
          <Text as="h4" size="subhead-03" weight="bold">
            우리집
          </Text>
          <PlanTag variant="address">반품/교환지</PlanTag>
        </Flex>
        <Text as="h4" size="body-01" weight="medium" className="mt-1 text-gray-600">
          서울시 행복구 행복동 100-11 101호 (03032)
        </Text>
        <Flex gap="0.75">
          <Text as="h4" size="body-01" weight="medium" className="text-gray-600">
            (+82) 010-1234-1234
          </Text>
          <span className="border-l border-border"></span>
          <Text as="h4" size="body-01" weight="medium" className="text-gray-600">
            김정란
          </Text>
        </Flex>
      </Flex>
      <Text as="h3" size="subhead-03" weight="bold" className="mt-6">
        배송비 설정
      </Text>
      <Flex gap="1" className="mt-3">
        <Select title="배송비 종류" className="basis-1/5">
          <SelectTrigger>
            <SelectValue placeholder="옵션을 선택해주세요" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem key={0} value={'조건부 무료'}>
                조건부 무료
              </SelectItem>
              <SelectItem key={1} value={'무료'}>
                무료
              </SelectItem>
              <SelectItem key={2} value={'유료'}>
                유료
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <InputBox state="default" size="default" className="basis-1/5">
          <InputTitle>기본 배송비</InputTitle>
          <InputContent>
            <Input placeholder="입력"></Input>
            <InputAffix>원</InputAffix>
          </InputContent>
        </InputBox>
        <InputBox state="default" size="default" className="basis-1/5">
          <InputTitle>무료배송 조건</InputTitle>
          <InputContent>
            <Input placeholder="입력"></Input>
            <InputAffix>원 이상</InputAffix>
          </InputContent>
        </InputBox>
        <InputBox state="default" size="default" className="basis-1/5">
          <InputTitle>반품 배송비(편도)</InputTitle>
          <InputContent>
            <Input placeholder="입력"></Input>
            <InputAffix>원</InputAffix>
          </InputContent>
        </InputBox>
        <InputBox state="default" size="default" className="basis-1/5">
          <InputTitle>교환 배송비(왕복)</InputTitle>
          <InputContent>
            <Input placeholder="입력"></Input>
            <InputAffix>원</InputAffix>
          </InputContent>
        </InputBox>
      </Flex>
      <Flex gap="1" className="mt-3">
        <InputBox state="default" size="default" className="basis-1/5">
          <InputTitle>제주 추가 배송비</InputTitle>
          <InputContent>
            <Input placeholder="입력"></Input>
            <InputAffix>원</InputAffix>
          </InputContent>
        </InputBox>
        <InputBox state="default" size="default" className="basis-1/5">
          <InputTitle>도서산간 추가 배송비 배송비</InputTitle>
          <InputContent>
            <Input placeholder="입력"></Input>
            <InputAffix>원</InputAffix>
          </InputContent>
        </InputBox>
        <InputBox state="default" size="default" className="basis-1/5">
          <InputTitle>배송출고 소요기간</InputTitle>
          <InputContent>
            <Input placeholder="입력"></Input>
            <InputAffix>일</InputAffix>
          </InputContent>
        </InputBox>
        <Select title="묶음배송 여부" className="basis-1/5">
          <SelectTrigger>
            <SelectValue placeholder="옵션을 선택해주세요" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem key={0} value={'묶음배송 가능'}>
                묶음배송 가능
              </SelectItem>
              <SelectItem key={1} value={'묶음배송 불가'}>
                묶음배송 불가
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select title="판매가에 배송비 합산" className="basis-1/5">
          <SelectTrigger>
            <SelectValue placeholder="옵션을 선택해주세요" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem key={0} value={'합산하지 않기'}>
                합산하지 않기
              </SelectItem>
              <SelectItem key={1} value={'합산하기'}>
                합산하기
              </SelectItem>
            </SelectGroup>
          </SelectContent>
          <Text size="subhead-00" weight="medium" className="m-1 text-gray-500">
            무료배송이 유리한 쿠팡/11번가/ESM에서만 적용됩니다.
          </Text>
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
