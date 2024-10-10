'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Flex } from '@/components/ui/flex';
import { Input, InputBox, InputContent, InputTitle } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Text } from '@/components/ui/text';
import PlusIcon from 'public/images/icon-20-plus-color.svg';
export default function ShippingAddressAddModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Flex align="center" justify="center" className="mb-8 w-full">
          <Button variant="outline" className="px-5">
            <PlusIcon />
            <Text size="body-02" weight="medium">
              신규등록
            </Text>
          </Button>
        </Flex>
      </DialogTrigger>
      <DialogContent className="w-[600px] p-0">
        <DialogHeader className="px-6 pb-1 pt-5">
          <DialogTitle>
            <Flex align="center" gap="0.5">
              <Text size="headline" weight="bold">
                주소록
              </Text>
            </Flex>
          </DialogTitle>
        </DialogHeader>
        <div className="border-b border-b-border"></div>
        <div className="px-6 pb-5 pt-0">
          <ScrollArea className="h-[600px] w-full">
            <InputBox>
              <InputTitle asChild>
                <Text size="body-03" weight="bold">
                  이름
                </Text>
              </InputTitle>
              <InputContent>
                <Input placeholder="입력" />
              </InputContent>
            </InputBox>
            <Text size="body-03" weight="medium" className="mt-4">
              주소
            </Text>
            <Flex direction="column" gap="0.75" className="mt-2 rounded-sm bg-gray-300 p-4">
              <InputBox>
                <InputTitle>Address1</InputTitle>
                <InputContent>
                  <Input placeholder="입력" />
                </InputContent>
              </InputBox>
              <InputBox>
                <InputTitle>Address2</InputTitle>
                <InputContent>
                  <Input placeholder="입력" />
                </InputContent>
              </InputBox>
              <InputBox>
                <InputTitle>City</InputTitle>
                <InputContent>
                  <Input placeholder="입력" />
                </InputContent>
              </InputBox>
              <InputBox>
                <InputTitle>State/Province/Region</InputTitle>
                <InputContent>
                  <Input placeholder="입력" />
                </InputContent>
              </InputBox>
              <InputBox>
                <InputTitle>Zip/Postal Code</InputTitle>
                <InputContent>
                  <Input placeholder="입력" />
                </InputContent>
              </InputBox>
              <InputBox>
                <InputTitle>Country</InputTitle>
                <InputContent>
                  <Input placeholder="입력" />
                </InputContent>
              </InputBox>
            </Flex>

            <Text size="body-03" weight="bold" className="mt-4">
              연락처
            </Text>
            <Flex direction="column" gap="0.75" className="mt-2 rounded-sm bg-gray-300 p-4">
              <InputBox>
                <InputTitle>연락처 1</InputTitle>
                <InputContent>
                  <Input placeholder="입력" />
                </InputContent>
              </InputBox>
              <InputBox>
                <InputTitle>연락처 2</InputTitle>
                <InputContent>
                  <Input placeholder="입력" />
                </InputContent>
              </InputBox>
            </Flex>

            <Text size="body-03" weight="bold" className="mt-4">
              설정
            </Text>
            <RadioGroup
              defaultValue="option-one"
              className="mt-3 space-y-2 rounded-md border border-border p-4"
            >
              <Flex align="center" gap="0.5">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">
                  <Text size="subhead-02" weight="medium">
                    대표 출고지 주소로 지정
                  </Text>
                </Label>
              </Flex>
              <Flex align="center" gap="0.5">
                <RadioGroupItem value="option-two" id="option-one" />
                <Label htmlFor="option-two">
                  <Text size="subhead-02" weight="medium">
                    대표 반품/교환지 주소로 지정
                  </Text>
                </Label>
              </Flex>
              <Flex align="center" gap="0.5">
                <RadioGroupItem value="option-three" id="option-one" />
                <Label htmlFor="option-three">
                  <Text size="subhead-02" weight="medium">
                    일반 주소로 지정
                  </Text>
                </Label>
              </Flex>
            </RadioGroup>
          </ScrollArea>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Flex align="center" justify="center" className="mb-8 w-full">
              <Button variant="default" className="px-10">
                <Text size="body-02" weight="medium">
                  등록
                </Text>
              </Button>
            </Flex>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
