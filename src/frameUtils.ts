import { FramePreset } from './framePresets';

export interface FrameConfig {
  enabled: boolean;
  preset: FramePreset;
  color: string;
  padding: number; // percentage of frame width relative to image
}

export function applyFrame(
  canvas: HTMLCanvasElement,
  frameConfig: FrameConfig
): HTMLCanvasElement {
  if (!frameConfig.enabled || frameConfig.padding === 0) {
    return canvas;
  }

  const img = new Image();
  img.src = canvas.toDataURL();

  return new Promise<HTMLCanvasElement>((resolve) => {
    img.onload = () => {
      const targetRatio = frameConfig.preset.ratio;
      const baseSize = Math.max(img.width, img.height);

      let frameCanvasWidth: number;
      let frameCanvasHeight: number;

      if (targetRatio >= 1) {
        frameCanvasWidth = baseSize;
        frameCanvasHeight = baseSize / targetRatio;
      } else {
        frameCanvasHeight = baseSize;
        frameCanvasWidth = baseSize * targetRatio;
      }

      const framedCanvas = document.createElement('canvas');
      framedCanvas.width = frameCanvasWidth;
      framedCanvas.height = frameCanvasHeight;

      const ctx = framedCanvas.getContext('2d')!;
      ctx.fillStyle = frameConfig.color;
      ctx.fillRect(0, 0, frameCanvasWidth, frameCanvasHeight);

      const paddingFactor = 1 - frameConfig.padding / 100;
      const maxWidth = frameCanvasWidth * paddingFactor;
      const maxHeight = frameCanvasHeight * paddingFactor;

      const imageRatio = img.width / img.height;
      let drawWidth: number;
      let drawHeight: number;

      if (imageRatio > maxWidth / maxHeight) {
        drawWidth = maxWidth;
        drawHeight = maxWidth / imageRatio;
      } else {
        drawHeight = maxHeight;
        drawWidth = maxHeight * imageRatio;
      }

      const x = (frameCanvasWidth - drawWidth) / 2;
      const y = (frameCanvasHeight - drawHeight) / 2;

      ctx.drawImage(img, x, y, drawWidth, drawHeight);
      resolve(framedCanvas);
    };
  }).then((framedCanvas) => framedCanvas);
}

export function calculateFramedDimensions(
  originalWidth: number,
  originalHeight: number,
  framePreset: FramePreset,
  padding: number
): { width: number; height: number } {
  const targetRatio = framePreset.ratio;
  const baseSize = Math.max(originalWidth, originalHeight);

  let frameWidth: number;
  let frameHeight: number;

  if (targetRatio >= 1) {
    frameWidth = baseSize;
    frameHeight = baseSize / targetRatio;
  } else {
    frameHeight = baseSize;
    frameWidth = baseSize * targetRatio;
  }

  return {
    width: Math.round(frameWidth),
    height: Math.round(frameHeight),
  };
}
