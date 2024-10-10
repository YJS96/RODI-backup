'use client';
import React, { useState } from 'react';

import { Paging } from '@/components/ui/paging';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Text } from '@/components/ui/text';

const posts = [
  {
    no: '359',
    title: '로디에도 직원 계정 기능이 새로 생겼습니다!',
    author: '관리자',
    created: '2024-01-01',
  },
  {
    no: '359',
    title: '로디에도 직원 계정 기능이 새로 생겼습니다!',
    author: '관리자',
    created: '2024-01-01',
  },
  {
    no: '359',
    title: '로디에도 직원 계정 기능이 새로 생겼습니다!',
    author: '관리자',
    created: '2024-01-01',
  },
  {
    no: '359',
    title: '로디에도 직원 계정 기능이 새로 생겼습니다!',
    author: '관리자',
    created: '2024-01-01',
  },
  {
    no: '359',
    title: '로디에도 직원 계정 기능이 새로 생겼습니다!',
    author: '관리자',
    created: '2024-01-01',
  },
  {
    no: '359',
    title: '로디에도 직원 계정 기능이 새로 생겼습니다!',
    author: '관리자',
    created: '2024-01-01',
  },
];

export default function Notice() {
  const [isPostOpen, setPostOpen] = useState(Array.from({ length: posts.length }, () => false));

  const togglePost = (index: number) => {
    setPostOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <>
      <Text as="h2" weight="semibold" size="display-01">
        RODI 공지사항
      </Text>
      <Table className="mt-5 h-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">
              <Text size="body-02" weight="medium" align="center" className="text-gray-500">
                no
              </Text>
            </TableHead>
            <TableHead>
              <Text size="body-02" weight="medium" className="text-gray-500">
                제목
              </Text>
            </TableHead>
            <TableHead className="w-[100px]">
              <Text size="body-02" weight="medium" className="text-gray-500">
                작성자
              </Text>
            </TableHead>
            <TableHead className="w-[150px]">
              <Text size="body-02" weight="medium" align="center" className="text-gray-500">
                게시일
              </Text>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post, index) => (
            <>
              <TableRow
                key={`${post.no}-${index}`}
                className={`hover:cursor-pointer ${isPostOpen[index] && 'border-0'}`}
                onClick={() => togglePost(index)}
              >
                <TableCell className="font-medium">
                  <Text size="body-02" weight="medium" align="center" className="text-gray-500">
                    {post.no}
                  </Text>
                </TableCell>
                <TableCell>
                  <Text size="body-02" weight="medium">
                    {post.title}
                  </Text>
                </TableCell>
                <TableCell>
                  <Text size="body-02" weight="medium">
                    {post.author}
                  </Text>
                </TableCell>
                <TableCell className="text-right">
                  <Text size="body-02" weight="medium" align="center">
                    {post.created}
                  </Text>
                </TableCell>
              </TableRow>
              {isPostOpen[index] && (
                <TableRow className="border-1 rounded-md bg-gray-200 p-4">
                  <TableCell colSpan={4}>
                    <Text size="body-02" weight="regular" className="p-2">
                      공지사항 내용이 들어갈 영역 입니다. <br /> <br />
                      서울특별시 마포구 성지길 25 (보광빌딩) [합정동 372-27] 영문주소변환 Lottie는
                      가볍지만 성능이 좋은 오픈소스 애니메이션 파일입니다. <br />
                      제작 과정을 확인할 수 있고 상호작용이 편리하며 런타임에도 수정이 가능합니다.
                      <br />앱 스토어 내 상위 500개 앱은 Lottie를 통해 사용자의 참여를 유도하고
                      전환을 개선합니다.
                    </Text>
                  </TableCell>
                </TableRow>
              )}
            </>
          ))}
        </TableBody>
      </Table>
      <Paging totalPage={20} itemsPerGroup={10} onChange={() => {}} className="mt-5"></Paging>
    </>
  );
}
