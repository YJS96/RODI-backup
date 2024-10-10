'use client';
import Image from 'next/image';
import React, { useState } from 'react';

import CNYFlag from '~/public/images/flag-CNY.svg';
import EURFlag from '~/public/images/flag-EUR.svg';
import GBPFlag from '~/public/images/flag-GBP.svg';
import USDFlag from '~/public/images/flag-USD.svg';
import RightArrow from '~/public/images/icon-10-right.svg';
import BoxBlue from '~/public/images/icon-20-box-blue.svg';
import Payment from '~/public/images/icon-20-payment.svg';
import PurpleEdd from '~/public/images/icon-20-productEdd-purple.svg';
import YellowEdit from '~/public/images/icon-20-productEdit-yellow.svg';
import CheckSel from '~/public/images/icon-20-roundcheck-black.svg';
import CheckUnsel from '~/public/images/icon-20-roundcheckUnsel.svg';
import TrendingDown from '~/public/images/icon-20-trendingDown.svg';
import TrendingUp from '~/public/images/icon-20-trendingUp.svg';
// 인증
import Shield from '~/public/images/shield-fill.svg';

interface NoticeProps {
  index: number;
  date: string;
  context: string;
}

export default function Home() {
  const storesList: string[] = [
    '스마트스토어',
    '쿠팡',
    'G마켓',
    '옥션',
    '11번가 글로벌',
    '11번가 국내',
    '롯데온',
    '인터파크',
  ];
  const [checkedStores, setCheckedStores] = useState(new Set(storesList));
  const [allChecked, setAllChecked] = useState(true);

  const noticeList: NoticeProps[] = [
    {
      index: 8,
      date: '2024-01-02',
      context: '로디에도 직원 계정 기능이 새로 생겼습니다.',
    },
    {
      index: 7,
      date: '2024-01-01',
      context: '로디에 처음 오셨나요?',
    },
    {
      index: 6,
      date: '2023-12-31',
      context: '무료체험 문의 관련 공지사항입니다.',
    },
    {
      index: 5,
      date: '2023-12-30',
      context: '사진 편집기 오류 관련 에러 해결되었습니다.',
    },
    {
      index: 4,
      date: '2023-12-29',
      context: '로디에 처음 오셨나요?',
    },
  ];

  const toggleStoreCheck = (store: string) => {
    setCheckedStores((prev) => {
      const newChecked = new Set(prev);
      if (newChecked.has(store)) {
        newChecked.delete(store);
      } else {
        newChecked.add(store);
      }
      return newChecked;
    });
    console.log(checkedStores);
  };

  const toggleAllCheck = () => {
    if (allChecked) {
      setCheckedStores(new Set());
      setAllChecked(false);
    } else {
      setCheckedStores(new Set(storesList));
      setAllChecked(true);
    }
  };

  return (
    <>
      <div className="header-text">RODI님의 1월 현황</div>
      <div className="mt-6 flex h-10 w-full items-center justify-between">
        <div className="sub-header">매출처 선택</div>

        {/* 체크 버튼 */}
        <div className="flex text-xs font-medium text-gray-500">
          <div className="me-4 flex select-none">
            <input
              className="appearance-none"
              type="checkbox"
              id="all"
              checked={allChecked}
              onChange={toggleAllCheck}
            />
            <label className="flex items-center" htmlFor="all">
              {allChecked ? <CheckSel /> : <CheckUnsel />}
              <span className="ps-[6px]">전체</span>
            </label>
          </div>
          {storesList.map((store) => (
            <React.Fragment key={store}>
              <div key={store} className="me-4 flex select-none">
                <input
                  className="appearance-none"
                  type="checkbox"
                  id={store}
                  checked={checkedStores.has(store)}
                  onChange={() => toggleStoreCheck(store)}
                />
                <label className="flex items-center" htmlFor={store}>
                  {checkedStores.has(store) ? <CheckSel /> : <CheckUnsel />}
                  <span className="ps-[6px]">{store}</span>
                </label>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 요약 */}
      <div className="mt-2 grid w-full grid-cols-4 items-center gap-4 rounded-xl bg-gray-200 p-6">
        <div className="admin-card">
          <div className="flex items-center">
            <div className="icon-eight me-2 bg-color-bg-green30">
              <Payment />
            </div>
            <div className=" text-gray-800">이번달 매출</div>
          </div>
          <div className="mt-2 text-right text-2xl font-bold">1,924,300원</div>
          <div className="mt-[5px] flex w-full items-center justify-end">
            <TrendingDown />
            <div className="ms-1 text-xs font-medium text-color-blue">12월대비 20%</div>
          </div>
        </div>
        <div className="admin-card">
          <div className="flex items-center">
            <div className="icon-eight me-2 bg-color-qna">
              <BoxBlue />
            </div>
            <div className=" text-gray-800">이번달 구매 건수</div>
          </div>
          <div className="mt-3 text-right text-2xl font-bold">300건</div>
          <div className="mt-[5px] flex w-full items-center justify-end">
            <TrendingUp />
            <div className="ms-1 text-xs font-medium text-color-red">12월대비 20%</div>
          </div>
        </div>
        <div className="admin-card">
          <div className="flex items-center">
            <div className="icon-eight me-2 bg-color-bg-violet">
              <PurpleEdd />
            </div>
            <div className=" text-gray-800">이번달 상품 수집 수</div>
          </div>
          <div className="mt-3 text-right text-2xl font-bold">854개</div>
          <div className="mt-[5px] flex w-full items-center justify-end">
            <TrendingDown />
            <div className="ms-1 text-xs font-medium text-color-blue">12월대비 20%</div>
          </div>
        </div>
        <div className="admin-card">
          <div className="flex items-center">
            <div className="icon-eight me-2 bg-color-help-center">
              <YellowEdit />
            </div>
            <div className=" text-gray-800">이번달 상품 등록 수</div>
          </div>
          <div className="mt-3 text-right text-2xl font-bold">300개</div>
          <div className="mt-[5px] flex w-full items-center justify-end">
            <TrendingDown />
            <div className="ms-1 text-xs font-medium text-color-blue">12월대비 20%</div>
          </div>
        </div>
      </div>

      {/* RODI Plan */}
      <div className="mt-6 grid w-full grid-cols-2 gap-6">
        <div className="text-gray-600">
          <div className="sub-header">RODI Plan</div>
          <div className="mt-4 flex w-full rounded-xl border border-color-border px-6 py-5">
            <div className="flex w-1/2 flex-col border-e border-color-border">
              <div className="text-sm">나의 요금제</div>
              <div className="mt-2 text-xl font-bold text-color-main">Pro Plan</div>
              <div className="mt-1 text-xs text-color-main">26일 남음 2024.02.13까지</div>
              <a className="mt-5 flex items-center text-sm font-medium text-gray-900 hover:underline">
                <span className="me-1">요금제 결제하러 가기</span>
                <RightArrow />
              </a>
            </div>
            <div className="flex w-1/2 flex-col border-color-border ps-6">
              <div className="text-sm">사업자 인증</div>
              <div className="mt-2 flex text-xl font-bold text-color-blue">
                <Shield />
                <span>인증</span>
              </div>
              <div className="mt-1 flex text-xs">
                <div className="text-gray-500 no-underline">473-02-08982</div>
                <div className="text-color-border">&nbsp;|&nbsp;</div>
                <div className="text-color-main">대표계정</div>
              </div>
              <a className="mt-5 flex items-center text-sm font-medium text-gray-900 hover:underline">
                <span className="me-1">직원 계정 추가하러 가기</span>
                <RightArrow />
              </a>
            </div>
          </div>
        </div>

        {/* 현재 환율 */}
        <div className="text-gray-600">
          <div className="sub-header">현재 환율</div>
          <div className="mt-4 flex h-[158px] w-full items-center rounded-xl border border-color-border py-5">
            <div className="flex w-1/4 flex-col border-e border-color-border px-4">
              <div className="flex items-center">
                <CNYFlag />
                <div className="ms-2">
                  <div className="text-sm font-semibold text-gray-900">중국</div>
                  <div className="text-[10px] text-gray-500">CNY</div>
                </div>
              </div>
              <div className="mt-4 text-right text-xs text-gray-500">위안</div>
              <div className="text-right font-bold text-gray-900">123원</div>
              <div className="mt-[3px] flex items-center justify-end">
                <TrendingDown />
                <div className="ms-1 text-xs font-medium text-color-blue">32원</div>
              </div>
            </div>
            <div className="flex w-1/4 flex-col border-e border-color-border px-4">
              <div className="flex items-center">
                <USDFlag />
                <div className="ms-2">
                  <div className="text-sm font-semibold text-gray-900">미국</div>
                  <div className="text-[10px] text-gray-500">USD</div>
                </div>
              </div>
              <div className="mt-4 text-right text-xs text-gray-500">달러</div>
              <div className="text-right font-bold text-gray-900">1,320원</div>
              <div className="mt-[3px] flex items-center justify-end">
                <TrendingDown />
                <div className="ms-1 text-xs font-medium text-color-blue">32원</div>
              </div>
            </div>
            <div className="flex w-1/4 flex-col border-e border-color-border px-4">
              <div className="flex items-center">
                <GBPFlag />
                <div className="ms-2">
                  <div className="text-sm font-semibold text-gray-900">영국</div>
                  <div className="text-[10px] text-gray-500">GBP</div>
                </div>
              </div>
              <div className="mt-4 text-right text-xs text-gray-500">파운드</div>
              <div className="text-right font-bold text-gray-900">1,673원</div>
              <div className="mt-[3px] flex items-center justify-end">
                <TrendingUp />
                <div className="ms-1 text-xs font-medium text-color-red">32원</div>
              </div>
            </div>
            <div className="flex w-1/4 flex-col border-e border-color-border px-4">
              <div className="flex items-center">
                <EURFlag />
                <div className="ms-2">
                  <div className="text-sm font-semibold text-gray-900">유럽</div>
                  <div className="text-[10px] text-gray-500">EUR</div>
                </div>
              </div>
              <div className="mt-4 text-right text-xs text-gray-500">유로</div>
              <div className="text-right font-bold text-gray-900">1,500원</div>
              <div className="mt-[3px] flex items-center justify-end">
                <TrendingDown />
                <div className="ms-1 text-xs font-medium text-color-blue">32원</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RODI 공지사항 */}
      <div className="mb-3 mt-6 grid w-full grid-cols-2 gap-6">
        <div>
          <div className="flex justify-between">
            <div className="sub-header">RODI 공지사항</div>
            <a
              href="/admin/notice"
              className="flex items-center text-sm font-semibold text-gray-900 hover:underline"
            >
              <span className="me-1">더보기</span>
              <RightArrow />
            </a>
          </div>
          <div className="mt-4 border-t border-color-border">
            {noticeList.map((notice) => (
              <React.Fragment key={notice.index}>
                <a
                  href={`/admin/notice/${notice.index}`}
                  className="flex items-center justify-between border-b border-color-border px-2 py-3 hover:bg-gray-200"
                >
                  <span className="line-clamp-1 w-[calc(100%_-_100px)] overflow-hidden text-ellipsis text-sm font-semibold text-gray-900">
                    {notice.context}
                  </span>
                  <span className="text-xs text-gray-500">{notice.date}</span>
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Q&A 및 고객센터 */}
        <div>
          <div className="sub-header">Q&A 및 고객센터</div>
          <div className="mt-4 grid h-[226px] w-full select-none grid-cols-3 gap-4 rounded-xl">
            <a className="group relative h-full rounded-xl bg-color-guide p-6">
              <div className="mb-1 text-xs text-gray-800">로디에 처음 오셨나요?</div>
              <div className="transition-200 text-lg font-bold group-hover:text-color-main">
                RODI
                <br />
                사용가이드
              </div>
              <Image
                className="qna-icon"
                src="/images/illu_list.svg"
                width="52"
                height="52"
                alt="list"
              />
            </a>
            <a className="group relative h-full rounded-xl bg-color-qna p-6">
              <div className="mb-1 text-xs text-gray-800">궁금한 점이 있으신가요?</div>
              <div className="transition-200 text-lg font-bold group-hover:text-color-blue">
                RODI
                <br />
                Q&A
              </div>
              <Image
                className="qna-icon"
                src="/images/illu_qa.svg"
                width="52"
                height="52"
                alt="list"
              />
            </a>
            <a className="group relative h-full rounded-xl bg-color-help-center p-6">
              <div className="mb-1 text-xs text-gray-800">상담이 필요하신가요?</div>
              <div className="transition-200 text-lg font-bold group-hover:text-color-help-hover">
                RODI
                <br />
                고객센터
              </div>
              <Image
                className="qna-icon"
                src="/images/illu_cs.svg"
                width="52"
                height="52"
                alt="list"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
