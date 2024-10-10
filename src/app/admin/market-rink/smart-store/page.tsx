'use client';
import { F } from '@mobily/ts-belt';
import React, { useState } from 'react';

import { CheckIcon } from '@/components/rodi/ui/check-icon';
import { Button } from '@/components/ui/button';
import { Flex } from '@/components/ui/flex';
import { Input, InputBox, InputContent, InputTitle } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Text } from '@/components/ui/text';

type ProductNoticeOptions = 'law' | 'product' | 'none';

export default function SmartStoreTab() {
  /// 출고지
  const shipplingAddress = ['서울 특별시'];
  /// 반품지
  const returnAddress = ['서울 특별시'];

  const [productNoticeOptions, setProductNoticeOptions] = useState<ProductNoticeOptions>('none');

  return (
    <section id="naver-smart-store" className="tabpage box_width">
      <Text as="h3" size="headline" weight="semibold" className="mt-7 text-gray-600">
        스마트스토어 연동
      </Text>
      <div className="mt-3 rounded-md border border-border p-5">
        <InputBox state="default" size="default">
          <InputTitle>애플리케이션 ID</InputTitle>
          <InputContent>
            <Input placeholder="입력"></Input>
          </InputContent>
        </InputBox>
        <InputBox state="default" size="default" className="mt-3">
          <InputTitle>애플리케이션 시크릿</InputTitle>
          <InputContent>
            <Input placeholder="입력"></Input>
          </InputContent>
        </InputBox>
        <Flex align="center" justify="center" className="mt-5">
          <Button>
            <CheckIcon variant="white" />
            <Text size="body-02" weight="medium">
              연동 완료
            </Text>
          </Button>
        </Flex>
      </div>
      <Text as="h3" size="headline" weight="semibold" className="mt-6 text-gray-600">
        스마트스토어 상품정보제공고시 공통사항
      </Text>
      <div className="mt-3 rounded-md border border-border p-5">
        <Flex gap="1">
          <Button
            variant={F.equals(productNoticeOptions, 'law') ? 'default' : 'ghost'}
            size="small"
            onClick={() => {
              if (F.equals(productNoticeOptions, 'law')) {
                setProductNoticeOptions('none');
              } else {
                setProductNoticeOptions('law');
              }
            }}
          >
            <CheckIcon variant={F.equals(productNoticeOptions, 'law') ? 'white' : 'gray'} />
            <Text size="subhead-02" weight="bold">
              모두 관계법령에 따름
            </Text>
          </Button>
          <Button
            variant={F.equals(productNoticeOptions, 'product') ? 'default' : 'ghost'}
            size="small"
            onClick={() => {
              if (F.equals(productNoticeOptions, 'product')) {
                setProductNoticeOptions('none');
              } else {
                setProductNoticeOptions('product');
              }
            }}
          >
            <CheckIcon variant={F.equals(productNoticeOptions, 'product') ? 'white' : 'gray'} />
            <Text size="subhead-02" weight="bold">
              모두 상품상세 참조
            </Text>
          </Button>
        </Flex>
        <div className={!F.equals(productNoticeOptions, 'none') ? 'opacity-50' : ''}>
          <Text size="subhead-02" weight="bold" className="mt-5 text-gray-700">
            제품하자·오배송 등에 따른 청약철회 등의 경우 청약철회 등의 기한 및 통신판매업자가
            부담하는 반품비용 등에 관한 정보
          </Text>
          <RadioGroup
            defaultValue="option-one"
            className="mt-3 rounded-md border border-border p-3"
            disabled={!F.equals(productNoticeOptions, 'none')}
          >
            <Flex align="center" gap="0.5">
              <RadioGroupItem value="option-one" id="option-one" />
              <Text size="subhead-02" weight="bold">
                전자상거래 등에서의 소비자보호에 관한 법률 등에 의한 제품의 하자 또는 오배송 등으로
                인한 청약철회의 경우에는 상품 수령 후 3개월 이내, 그 사실을 안 날 또는 알 수 있었던
                날로부터 30일 이내에 청약철회를 할 수 있으며, 반품 비용은 통신판매업자가 부담합니다.
              </Text>
            </Flex>
            <Flex align="center" gap="0.5">
              <RadioGroupItem value="option-two" id="option-two" />
              <Text size="body-02" weight="medium" className="text-gray-600">
                상품상세 참조
              </Text>
            </Flex>
          </RadioGroup>
          <Text size="subhead-02" weight="bold" className="mt-5 text-gray-700">
            제품하자가 아닌 소비자의 단순변심에 따른 청약철회등이 불가능한 경우 그 구체적 사유와
            근거
          </Text>
          <RadioGroup
            defaultValue="option-one"
            className="mt-3 rounded-md border border-border p-3"
            disabled={!F.equals(productNoticeOptions, 'none')}
          >
            <Flex align="center" gap="0.5">
              <RadioGroupItem value="option-one" id="option-one" />
              <Text size="subhead-02" weight="bold">
                전자상거래 등에서의 소비자보호에 관한 법률 등에 의한 청약철회 제한 사유에 해당하는
                경우 및 기타 객관적으로 이에 준하는 것으로 인정되는 경우 청약철회가 제한될 수
                있습니다.
              </Text>
            </Flex>
            <Flex align="center" gap="0.5">
              <RadioGroupItem value="option-two" id="option-two" />
              <Text size="body-02" weight="medium" className="text-gray-600">
                상품상세 참조
              </Text>
            </Flex>
          </RadioGroup>
          <Text size="subhead-02" weight="bold" className="mt-5 text-gray-700">
            재화등의 교환·반품·보증 조건 및 품질보증기준
          </Text>
          <RadioGroup
            defaultValue="option-one"
            className="mt-3 rounded-md border border-border p-3"
            disabled={!F.equals(productNoticeOptions, 'none')}
          >
            <Flex align="center" gap="0.5">
              <RadioGroupItem value="option-one" id="option-one" />
              <Text size="subhead-02" weight="bold">
                소비자분쟁해결기준(공정거래위원회 고시) 및 관계법령에 따릅니다.
              </Text>
            </Flex>
            <Flex align="center" gap="0.5">
              <RadioGroupItem value="option-two" id="option-two" />
              <Text size="body-02" weight="medium" className="text-gray-600">
                상품상세 참조
              </Text>
            </Flex>
          </RadioGroup>
          <Text size="subhead-02" weight="bold" className="mt-5 text-gray-700">
            대금을 환불받기 위한 방법과 환불이 지연될 경우 지연배상금을 지급받을 수 있다는
            지연배상금 지급의 구체적인 조건·절차
          </Text>
          <RadioGroup
            defaultValue="option-one"
            className="mt-3 rounded-md border border-border p-3"
            disabled={!F.equals(productNoticeOptions, 'none')}
          >
            <Flex align="center" gap="0.5">
              <RadioGroupItem value="option-one" id="option-one" />
              <Text size="subhead-02" weight="bold">
                주문취소 및 대금의 환불은 네이버페이 마이페이지에서 신청할 수 있으며, 전자상거래
                등에서의 소비자보호에 관한 법률에 따라 소비자의 청약철회 후 판매자가 재화 등을 반환
                받은 날로부터 3영업일 이내에 지급받은 대금의 환급을 정당한 사유 없이 지연하는 때에는
                소비자는 지연기간에 대해서 연 15%의 지연배상금을 판매자에게 청구할 수 있습니다.
              </Text>
            </Flex>
            <Flex align="center" gap="0.5">
              <RadioGroupItem value="option-two" id="option-two" />
              <Text size="body-02" weight="medium" className="text-gray-600">
                상품상세 참조
              </Text>
            </Flex>
          </RadioGroup>
          <Text size="subhead-02" weight="bold" className="mt-5 text-gray-700">
            소비자피해보상의 처리, 재화등에 대한 불만 처리 및 소비자와 사업자 사이의 분쟁처리에 관한
            사항
          </Text>
          <RadioGroup
            defaultValue="option-one"
            className="mt-3 rounded-md border border-border p-3"
            disabled={!F.equals(productNoticeOptions, 'none')}
          >
            <Flex align="center" gap="0.5">
              <RadioGroupItem value="option-one" id="option-one" />
              <Text size="subhead-02" weight="bold">
                소비자분쟁해결기준(공정거래위원회 고시) 및 관계법령에 따릅니다.
              </Text>
            </Flex>
            <Flex align="center" gap="0.5">
              <RadioGroupItem value="option-two" id="option-two" />
              <Text size="body-02" weight="medium" className="text-gray-600">
                상품상세 참조
              </Text>
            </Flex>
          </RadioGroup>
        </div>
        <Flex align="center" justify="center" className="mt-5">
          <Button variant="secondary" className="px-10">
            <Text size="body-02" weight="medium">
              저장
            </Text>
          </Button>
        </Flex>
      </div>
      <Text as="h3" size="headline" weight="semibold" className="mt-6 text-gray-600">
        출고지/반품지 설정
      </Text>
      <div className="mt-3 rounded-md border border-border p-5">
        <Flex gap="1">
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
        </Flex>
      </div>
    </section>
  );
}
