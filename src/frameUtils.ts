import { FramePreset } from './framePresets';
import { getCanvasSizeForRatio } from './canvasUtils';

export interface FrameConfig {
  enabled: boolean;
  preset: FramePreset;
  color: string;
  padding: number; // percentage of frame width relative to image
}

export function applyFrame(
  canvas: HTMLCanvasElement,
  frameConfig: FrameConfig
): Promise<HTMLCanvasElement> {
  if (!frameConfig.enabled || frameConfig.padding === 0) {
    return Promise.resolve(canvas);
  }

  const img = new Image();
  img.src = canvas.toDataURL();

  return new Promise<HTMLCanvasElement>((resolve) => {
    img.onload = () => {
      const targetRatio = frameConfig.preset.ratio;
      const baseSize = Math.max(img.width, img.height);
      const { width: frameCanvasWidth, height: frameCanvasHeight } = getCanvasSizeForRatio(targetRatio, baseSize);

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
  });
}

export function calculateFramedDimensions(
  originalWidth: number,
  originalHeight: number,
  framePreset: FramePreset,
  padding: number
): { width: number; height: number } {
  const targetRatio = framePreset.ratio;
  const baseSize = Math.max(originalWidth, originalHeight);
  const { width, height } = getCanvasSizeForRatio(targetRatio, baseSize);

  return {
    width: Math.round(width),
    height: Math.round(height),
  };
}
