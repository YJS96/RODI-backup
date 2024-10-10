'use client';
import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Flex } from '@/components/ui/flex';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import EmptyFileIcon from 'public/images/empty_file.svg';
import CloseIcon from 'public/images/icon-12-close.svg';
import UploadCloudIcon from 'public/images/icon-16-upload-cloud.svg';

export interface IFileTypes {
  id: number;
  object: File;
}

export interface DragDropFileInputProps extends React.HTMLAttributes<HTMLInputElement> {}

const DragDropFileInput = React.forwardRef<HTMLInputElement, DragDropFileInputProps>(
  ({ className, ...props }, ref) => {
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const dragRef = useRef<HTMLLabelElement | null>(null);
    const fileId = useRef<number>(0);
    const [files, setFiles] = useState<IFileTypes[]>([]);

    const addFiles = useCallback(
      (e: ChangeEvent<HTMLInputElement> | any): void => {
        let selectFiles: File[] = [];
        let tempFiles: IFileTypes[] = files;

        if (e.type === 'drop') {
          // 드래그 앤 드롭 했을때
          selectFiles = e.dataTransfer.files;
        } else {
          // 버튼을 눌러서 이미지를 선택했을때
          selectFiles = e.target.files;
        }

        for (const file of selectFiles) {
          tempFiles = [
            ...tempFiles,
            {
              id: fileId.current++,
              object: file,
            },
          ];
        }

        setFiles(tempFiles);
      },
      [files],
    );

    const handleFilterFile = useCallback(
      (id: number): void => {
        setFiles(files.filter((file: IFileTypes) => file.id !== id));
      },
      [files],
    );

    const handleDragIn = useCallback((e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();
    }, []);

    const handleDragOut = useCallback((e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      setIsDragging(false);
    }, []);

    const handleDragOver = useCallback((e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      if (e.dataTransfer!.files) {
        setIsDragging(true);
      }
    }, []);

    const handleDrop = useCallback(
      (e: DragEvent): void => {
        e.preventDefault();
        e.stopPropagation();

        addFiles(e);
        setIsDragging(false);
      },
      [addFiles],
    );

    const initDragEvents = useCallback((): void => {
      if (dragRef.current !== null) {
        dragRef.current.addEventListener('dragenter', handleDragIn);
        dragRef.current.addEventListener('dragleave', handleDragOut);
        dragRef.current.addEventListener('dragover', handleDragOver);
        dragRef.current.addEventListener('drop', handleDrop);
      }
    }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

    const resetDragEvents = useCallback((): void => {
      if (dragRef.current !== null) {
        dragRef.current.removeEventListener('dragenter', handleDragIn);
        dragRef.current.removeEventListener('dragleave', handleDragOut);
        dragRef.current.removeEventListener('dragover', handleDragOver);
        dragRef.current.removeEventListener('drop', handleDrop);
      }
    }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

    useEffect(() => {
      initDragEvents();

      return () => resetDragEvents();
    }, [initDragEvents, resetDragEvents]);

    return (
      <div>
        <input
          type="file"
          id="fileUpload"
          ref={ref}
          hidden
          multiple={true}
          onChange={addFiles}
          {...props}
        />
        <Flex
          align="center"
          justify="around"
          className={cn(
            'w-full rounded-md border',
            isDragging ? 'border-solid bg-gray-200' : 'border-dashed',
            className,
          )}
          asChild
        >
          <label htmlFor="fileUpload" ref={dragRef}>
            <Flex direction="column" align="center" gap="0.75" className="py-8">
              {files.length == 0 && (
                <>
                  <EmptyFileIcon />
                  <Text as="h3" size="body-02" weight="medium" className="text-gray-400">
                    여기로 파일 드래그
                  </Text>
                </>
              )}
              {files.length > 0 &&
                files.map((file: IFileTypes) => {
                  const {
                    id,
                    object: { name },
                  } = file;
                  return (
                    <Flex key={id} gap="0.5">
                      <Text size="body-02" weight="medium" className="text-gray-700">
                        {name}
                      </Text>
                      <Button
                        variant="transparent"
                        size="small-rounded"
                        className="p-2"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();

                          handleFilterFile(id);
                        }}
                      >
                        <CloseIcon />
                      </Button>
                    </Flex>
                  );
                })}
              <Button
                variant="ghost"
                size="small-rounded"
                onClick={() => {
                  if (dragRef.current) {
                    dragRef.current.click();
                  }
                }}
              >
                <UploadCloudIcon />
                <Text as="h3" size="body-02" weight="regular">
                  Browse Files
                </Text>
              </Button>
            </Flex>
          </label>
        </Flex>
      </div>
    );
  },
);
DragDropFileInput.displayName = 'DragDropFileInput';

export default DragDropFileInput;
