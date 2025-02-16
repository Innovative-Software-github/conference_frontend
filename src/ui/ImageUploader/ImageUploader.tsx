'use client';

import * as React from 'react';
import clsx from 'clsx';

import cls from './ImageUploader.module.scss';
import { ImageUploaderContent } from './ImageUploaderContent';

const MAX_IMAGE_SIZE_MB = 5;
const MAX_IMAGE_SIZE = MAX_IMAGE_SIZE_MB * 1024 * 1024;
const SUPPORTED_EXTENSIONS = [
  'jpg',
  'jpeg',
  'png',
  'bmp',
  'gif',
];
const SUPPORTED_EXTENSIONS_REGEXP = new RegExp(`\.(${SUPPORTED_EXTENSIONS.join('|')})`, 'i');

export interface IImageUploader {
  className?: string;
  defaultImage?: string;
  onImageSelect?: (file: File) => void;
  onImageDelete?: () => void;
}

export const ImageUploader: React.FC<IImageUploader> = ({
  className,
  defaultImage,
  onImageSelect,
  onImageDelete,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = React.useState<string>(defaultImage || '');
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [file] = Array.from(e.target.files || []);

    if (!file) {
      return;
    }

    if (file.size > MAX_IMAGE_SIZE) {
      // eslint-disable-next-line no-alert
      alert(`Размер файла превышает максимальный (${MAX_IMAGE_SIZE_MB}MB)`);

      return;
    }

    if (!file.name.match(SUPPORTED_EXTENSIONS_REGEXP)) {
      // eslint-disable-next-line no-alert
      alert('Недопустимый формат файла');

      return;
    }

    const fileReader = new FileReader();

    setLoading(true);

    fileReader.onload = (event: ProgressEvent<FileReader>) => {
      const result = event.target?.result as string;

      setPreviewUrl(result);
      setLoading(false);

      if (onImageSelect) {
        onImageSelect(file);
      }
    };

    fileReader.onerror = () => {
      setLoading(false);
    };

    fileReader.readAsDataURL(file);
  };

  const handleDeleteImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreviewUrl('');
    if (onImageDelete) {
      onImageDelete();
    }
  };

  return (
    <div
      className={clsx(cls.imageUploader, className)}
      onClick={() => inputRef?.current?.click()}
    >
      <ImageUploaderContent
        previewUrl={previewUrl}
        isLoading={loading}
        onImageDelete={handleDeleteImage}
      />
      <input
        ref={inputRef}
        className={cls.fileInput}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
    </div>
  );
};
