import type { CropRect, CropRatio } from './App.types';

export function getCropAspectRatio(cropRatio: CropRatio, width: number, height: number) {
  if (cropRatio === 'original') return width / height;
  if (cropRatio === '1:1') return 1;
  if (cropRatio === '4:3') return 4 / 3;
  return 16 / 9;
}

export function clampCropRect(rect: CropRect, minSize = 0.05): CropRect {
  return {
    x: Math.max(0, Math.min(rect.x, 1 - rect.w)),
    y: Math.max(0, Math.min(rect.y, 1 - rect.h)),
    w: Math.max(minSize, Math.min(rect.w, 1)),
    h: Math.max(minSize, Math.min(rect.h, 1)),
  };
}

export function getCanvasSizeForRatio(ratio: number, baseSize: number) {
  if (ratio >= 1) {
    return { width: baseSize, height: Math.round(baseSize / ratio) };
  }

  return { width: Math.round(baseSize * ratio), height: baseSize };
}

export function getContainedDimensions(
  imageWidth: number,
  imageHeight: number,
  maxWidth: number,
  maxHeight: number,
) {
  const imageRatio = imageWidth / imageHeight;

  if (imageRatio > maxWidth / maxHeight) {
    return { width: maxWidth, height: maxWidth / imageRatio };
  }

  return { width: maxHeight * imageRatio, height: maxHeight };
}

export function getCenteredDrawRect(
  imageWidth: number,
  imageHeight: number,
  maxWidth: number,
  maxHeight: number,
) {
  const { width, height } = getContainedDimensions(imageWidth, imageHeight, maxWidth, maxHeight);

  return {
    x: (maxWidth - width) / 2,
    y: (maxHeight - height) / 2,
    width,
    height,
  };
}

export function fitRatioIntoBounds(
  sourceWidth: number,
  sourceHeight: number,
  targetRatio: number,
) {
  let width = targetRatio >= 1 ? sourceWidth : Math.round(sourceHeight * targetRatio);
  let height = targetRatio >= 1 ? Math.round(sourceWidth / targetRatio) : sourceHeight;

  if (width > sourceWidth) {
    width = sourceWidth;
    height = Math.round(width / targetRatio);
  }

  if (height > sourceHeight) {
    height = sourceHeight;
    width = Math.round(height * targetRatio);
  }

  return { width, height };
}
