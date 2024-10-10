import React from 'react';

import SectionBox from '@/components/rodi/ui/section-box';
import { Button } from '@/components/ui/button';
import { Flex } from '@/components/ui/flex';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Text } from '@/components/ui/text';
import { Toggle } from '@/components/ui/toggle';
import CloseIcon from 'public/images/icon-12-close.svg';

const employee = [
  {
    name: '홍길동',
    id: 'abc1234',
    today: '0',
    todayUpload: '30',
    week: '10',
    weekUpload: '60',
  },
  {
    name: '홍길동',
    id: 'abc1234',
    today: '0',
    todayUpload: '30',
    week: '10',
    weekUpload: '60',
  },
];

export default function EmployeeSettingSection() {
  return (
    <SectionBox title="직원 설정">
      <Text as="h3" size="subhead-03" weight="bold">
        권한
      </Text>
      <Flex gap="1" className="mt-3">
        <Flex justify="between" align="center" className="basis-1/2 rounded-md bg-gray-200 p-4">
          <Text size="subhead-02" weight="semibold">
            수집한 상품 삭제 권한 ON
          </Text>
          <Toggle />
        </Flex>
        <Flex justify="between" align="center" className="basis-1/2 rounded-md bg-gray-200 p-4">
          <Text size="subhead-02" weight="semibold">
            등록한 상품 삭제 권한 ON
          </Text>
          <Toggle />
        </Flex>
      </Flex>
      <Flex gap="1" className="mt-3">
        <Flex justify="between" align="center" className="basis-1/2 rounded-md bg-gray-200 p-4">
          <Text size="subhead-02" weight="semibold">
            다른 사람이 수집한 상품 접근 권한 ON
          </Text>
          <Toggle />
        </Flex>
        <Flex justify="between" align="center" className="basis-1/2 rounded-md bg-gray-200 p-4">
          <Text size="subhead-02" weight="semibold">
            다른 사람이 등록한 상품 접근 권한 ON
          </Text>
          <Toggle />
        </Flex>
      </Flex>
      <Text as="h3" size="subhead-03" weight="bold" className="mt-5">
        등록된 직원 현황
      </Text>
      <Table className="mt-3 h-full">
        <TableHeader>
          <TableRow>
            <TableHead>
              <Text size="body-02" weight="medium" align="left" className="text-gray-500">
                직원 이름
              </Text>
            </TableHead>
            <TableHead>
              <Text size="body-02" weight="medium" className="text-gray-500">
                직원 아이디
              </Text>
            </TableHead>
            <TableHead>
              <Text size="body-02" weight="medium" className="text-gray-500">
                오늘 수집 수
              </Text>
            </TableHead>
            <TableHead>
              <Text size="body-02" weight="medium" className="text-gray-500">
                오늘 업로드
              </Text>
            </TableHead>
            <TableHead>
              <Text size="body-02" weight="medium" className="text-gray-500">
                이번주 수집 수
              </Text>
            </TableHead>
            <TableHead>
              <Text size="body-02" weight="medium" className="text-gray-500">
                이번주 업로드 수
              </Text>
            </TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employee.map((post, index) => (
            <>
              <TableRow key={`${post.id}-${index}`} className={`hover:cursor-pointer`}>
                <TableCell>
                  <Text size="body-02" weight="medium" align="left">
                    {post.name}
                  </Text>
                </TableCell>
                <TableCell>
                  <Text size="body-02" weight="medium">
                    {post.id}
                  </Text>
                </TableCell>
                <TableCell>
                  <Text size="body-02" weight="medium">
                    {post.today}
                  </Text>
                </TableCell>
                <TableCell className="text-right">
                  <Text size="body-02" weight="medium">
                    {post.todayUpload}
                  </Text>
                </TableCell>
                <TableCell>
                  <Text size="body-02" weight="medium">
                    {post.week}
                  </Text>
                </TableCell>
                <TableCell>
                  <Text size="body-02" weight="medium">
                    {post.weekUpload}
                  </Text>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="small-rounded">
                    <CloseIcon />
                    <Text size="body-02" weight="semibold" className="text-gray-800">
                      직원 삭제
                    </Text>
                  </Button>
                </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </SectionBox>
  );
}
