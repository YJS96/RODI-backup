'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { F } from '@mobily/ts-belt';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import { match } from 'ts-pattern';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Flex } from '@/components/ui/flex';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input, InputBox, InputContent, InputTitle } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import CheckIcon from 'public/images/icon-roundcheck-main.svg';
import PayImage from 'public/images/pay_tit_img.png';

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

const FormSchema = z.object({
  payment: z.enum(['monthly', 'yearly'], {
    required_error: '',
  }),
  name: z.string().min(2, {
    message: '두 글자 이상 입력해주세요',
  }),
  number: z.string().regex(phoneRegex, '하이픈을(-) 포함한 11자리 숫자를 입력해주세요').min(2, {
    message: '',
  }),
  email: z.string().email('이메일 형식을 입력해주세요.'),
});

export default function Plan() {
  const yearlyPaymentAmount = 1944000;
  const monthlyPaymentAmount = 180000;

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      payment: 'yearly',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('onSubmit');
  }

  function getYearlyPeriod() {
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setFullYear(currentDate.getFullYear() + 1);

    const year = futureDate.getFullYear();
    const month = (futureDate.getMonth() + 1).toString().padStart(2, '0');
    const day = (futureDate.getDate() - 1).toString().padStart(2, '0');

    return `${currentDate.getFullYear()}.${month}.${day} ~ ${year}.${month}.${day}`;
  }

  function getMonthlyPeriod() {
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setMonth(currentDate.getMonth() + 1);

    const year = currentDate.getFullYear();
    const month = futureDate.getMonth().toString().padStart(2, '0');
    const day = (futureDate.getDate() - 1).toString().padStart(2, '0');

    return `${year}.${currentDate.getMonth().toString().padStart(2, '0')}.${day} ~ ${year}.${month}.${day}`;
  }

  return (
    <Flex direction="column" align="center" gap="0.5" justify="center" className="m-auto w-[640px]">
      <Image src={PayImage} alt={'pay image'} className="mt-6 w-[135px]" />
      <Text as="h2" size="display-04" weight="bold">
        요금제 결제
      </Text>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <FormField
            control={form.control}
            name="payment"
            render={({ field }) => (
              <div>
                <Text as="h3" size="headline" weight="bold" className="mt-6">
                  결제 타입
                </Text>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  value={field.value}
                  className="mt-3 w-full"
                >
                  <FormItem>
                    <Label htmlFor="payment-yearly">
                      <Flex
                        align="center"
                        gap="1.25"
                        className={cn(
                          'flex-grow rounded-md border p-6 hover:cursor-pointer',
                          F.equals(field.value, 'yearly')
                            ? 'border-primary bg-primary/5'
                            : 'border-border',
                        )}
                      >
                        <FormControl>
                          <RadioGroupItem value="yearly" id="payment-yearly" />
                        </FormControl>
                        <div className="grow">
                          <Text
                            size="subhead-03"
                            weight={F.equals(field.value, 'yearly') ? 'bold' : 'medium'}
                          >
                            연간 결제
                          </Text>
                          <Text size="body-02" weight="regular" className="mt-2 text-gray-500">
                            월 {(yearlyPaymentAmount / 12).toLocaleString()}원 x 12개월
                          </Text>
                        </div>
                        <Flex align="center" justify="center" gap="0.5">
                          <CheckIcon></CheckIcon>
                          <Text size="subhead-03" weight="bold" className="text-primary">
                            216,000원 절약!
                          </Text>
                        </Flex>
                      </Flex>
                    </Label>
                  </FormItem>
                  <FormItem>
                    <Label htmlFor="payment-monthly">
                      <Flex
                        align="center"
                        gap="1.25"
                        className={cn(
                          'flex-grow rounded-md border p-6 hover:cursor-pointer',
                          F.equals(field.value, 'monthly')
                            ? 'border-primary bg-primary/5'
                            : 'border-border',
                        )}
                      >
                        <FormControl>
                          <RadioGroupItem value="monthly" id="payment-monthly" />
                        </FormControl>
                        <div className="grow">
                          <Text
                            size="subhead-03"
                            weight={F.equals(field.value, 'monthly') ? 'bold' : 'medium'}
                          >
                            월간 결제
                          </Text>
                          <Text size="body-02" weight="regular" className="mt-2 text-gray-500">
                            월 {monthlyPaymentAmount.toLocaleString()}원
                          </Text>
                        </div>
                      </Flex>
                    </Label>
                  </FormItem>
                </RadioGroup>
              </div>
            )}
          />
          <Text as="h3" size="headline" weight="bold" className="mb-3 mt-10">
            결제자 정보
          </Text>
          <Flex direction="column" gap="1.5" className="w-full rounded-md border border-border p-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <InputBox>
                    <InputTitle>이름</InputTitle>
                    <InputContent>
                      <FormControl>
                        <Input placeholder="이름을 입력해주세요" {...field}></Input>
                      </FormControl>
                    </InputContent>
                  </InputBox>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem className="w-full">
                  <InputBox>
                    <InputTitle>연락처</InputTitle>
                    <InputContent>
                      <FormControl>
                        <Input placeholder="연락처를 입력해주세요" {...field}></Input>
                      </FormControl>
                    </InputContent>
                  </InputBox>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <InputBox>
                    <InputTitle>이메일</InputTitle>
                    <InputContent>
                      <FormControl>
                        <Input placeholder="이메일을 입력해주세요" {...field}></Input>
                      </FormControl>
                    </InputContent>
                  </InputBox>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Flex>

          <Text as="h3" size="headline" weight="bold" className="mb-3 mt-10">
            결제 정보
          </Text>
          <Flex direction="column" gap="0.5" className="w-full rounded-md border border-border p-6">
            <Flex align="center" justify="between">
              <Flex align="center">
                <div className="size-[32px] rounded-sm bg-primary p-2">
                  <Text className="text-[11.2px] font-black italic text-white">Pro</Text>
                </div>
                <Text size="headline" className="ml-3 font-black">
                  PRO
                </Text>
                <Text size="headline" weight="bold" className="ml-1">
                  요금제{' '}
                  {match(form.getValues()['payment'])
                    .with('yearly', () => '연간')
                    .with('monthly', () => '월간')
                    .otherwise(() => null)}{' '}
                  결제
                </Text>
              </Flex>
              <Text size="body-02" weight="regular">
                {match(form.getValues()['payment'])
                  .with('yearly', () => getYearlyPeriod())
                  .with('monthly', () => getMonthlyPeriod())
                  .otherwise(() => null)}
              </Text>
            </Flex>
            <Flex align="center" justify="between" className="mt-3">
              <Text size="body-02" weight="medium">
                요금제 정가
              </Text>
              <Text size="body-02" weight="medium">
                {match(form.getValues()['payment'])
                  .with('yearly', () => yearlyPaymentAmount.toLocaleString())
                  .with('monthly', () => monthlyPaymentAmount.toLocaleString())
                  .otherwise(() => null)}
              </Text>
            </Flex>
            <Flex align="center" justify="between">
              <Text size="body-02" weight="medium">
                부가세(VAT)
              </Text>
              <Text size="body-02" weight="medium">
                {match(form.getValues()['payment'])
                  .with('yearly', () => (yearlyPaymentAmount * 0.1).toLocaleString())
                  .with('monthly', () => (monthlyPaymentAmount * 0.1).toLocaleString())
                  .otherwise(() => null)}
              </Text>
            </Flex>
            <div className="w-full border-t border-t-border"></div>
            <Flex align="center" justify="between" className="mt-3">
              <Flex align="center" gap="0.25">
                <Text size="headline" weight="bold">
                  총 결제액
                </Text>
                <Text size="body-02" weight="medium" className="text-gray-500">
                  부가세(VAT) 포함
                </Text>
              </Flex>
              <Text size="headline" weight="bold">
                매달{' '}
                {match(form.getValues()['payment'])
                  .with('yearly', () => ((yearlyPaymentAmount * 1.1) / 12).toLocaleString())
                  .with('monthly', () => (monthlyPaymentAmount * 1.1).toLocaleString())
                  .otherwise(() => null)}
                원 결제
              </Text>
            </Flex>
          </Flex>
          <Flex align="center" justify="center" className="m-12">
            <Button variant="secondary" className="px-10">
              <Text size="body-02" weight="medium">
                결제하기
              </Text>
            </Button>
          </Flex>
        </form>
      </Form>
    </Flex>
  );
}
