import React from 'react';

import {
  BusinessAuthenticationSection,
  DetailPageSettingSection,
  EmployeeSettingSection,
  EtcSettingSection,
  SellingPriceSettingSection,
  ShippingSettingSection,
} from '@/components/rodi/components/settings/common';
import SectionBox from '@/components/rodi/ui/section-box';
import { Flex } from '@/components/ui/flex';
import { Text } from '@/components/ui/text';
import { Toggle } from '@/components/ui/toggle';

export default function CommonTab() {
  return (
    <section id="common">
      <BusinessAuthenticationSection />

      <SectionBox title="이미지 자동 번역">
        <Flex align="center" gap="0.75">
          <Text size="subhead-02" weight="semibold">
            이미지를 한글 번역 후 가져오기 ON
          </Text>
          <Toggle></Toggle>
        </Flex>
      </SectionBox>

      <ShippingSettingSection />

      <SellingPriceSettingSection />

      <DetailPageSettingSection />

      <EmployeeSettingSection />

      <EtcSettingSection />
    </section>
  );
}
