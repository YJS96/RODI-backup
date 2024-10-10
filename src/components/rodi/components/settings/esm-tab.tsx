import SectionBox from '@/components/rodi/ui/section-box';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function CoupangTab() {
  return (
    <section id="setting-coupang">
      <SectionBox title="ESM 2.0 설정">
        <Select title="사이트부담 지원할인" className="w-[300px]">
          <SelectTrigger>
            <SelectValue placeholder="옵션을 선택해주세요" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem key={0} value={'허용하기'}>
                허용하기
              </SelectItem>
              <SelectItem key={1} value={'허용하지 않기'}>
                허용하지 않기
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </SectionBox>
    </section>
  );
}
