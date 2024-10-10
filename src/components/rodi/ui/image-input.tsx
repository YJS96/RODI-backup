'use client';
import React, { forwardRef, Ref, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Flex } from '@/components/ui/flex';
import { Text } from '@/components/ui/text';
import EmptyFileIcon from 'public/images/empty_file.svg';
import CloseIcon from 'public/images/icon-12-close.svg';

interface InputProps {}

const ImageInput = forwardRef((props: InputProps, ref: Ref<HTMLInputElement>) => {
  const [image, setImage] = useState<string | null>(null);

  const handleTopImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setImage(fileReader.result as string);
      };
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <>
      <input
        type="file"
        id="top-image"
        hidden
        multiple={false}
        onChange={handleTopImageChange}
        ref={ref}
      />
      <Flex
        direction="column"
        align="center"
        justify="center"
        gap="0.5"
        className="mt-3 size-[215px] cursor-pointer rounded-md border border-dashed border-border"
        asChild
        {...props}
      >
        <label htmlFor="top-image">
          {image ? (
            <>
              <img
                src={image}
                alt="top image"
                className="relative top-4 size-full rounded-md object-cover"
              />
              <Button
                variant="ghost"
                size="small-rounded"
                className="relative bottom-7 left-16 py-3"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setImage(null);
                }}
              >
                <CloseIcon />
                <Text size="body-02" weight="semibold" className="text-gray-800">
                  삭제
                </Text>
              </Button>
            </>
          ) : (
            <>
              <EmptyFileIcon />
              <Text size="body-02" weight="medium" className="text-gray-400">
                이미지 추가하기
              </Text>
            </>
          )}
        </label>
      </Flex>
    </>
  );
});
ImageInput.displayName = 'ImageInput';

export default ImageInput;
