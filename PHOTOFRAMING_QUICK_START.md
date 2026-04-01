# PhotoFraming Integration - Quick Start Guide

## Overview
TheFilmLab now includes integrated photo framing capabilities based on the PhotoFraming library. You can apply aspect ratio frames to your processed images without cropping or distortion.

## Getting Started

### 1. Run the Development Server
```bash
npm install  # Install dependencies (if not already done)
npm run dev  # Start the dev server
```
The app will be available at `http://localhost:5173/`

### 2. Upload an Image
- Drag and drop an image onto the canvas, or click to browse
- Supported formats: JPG, PNG, WebP, GIF, etc.

### 3. Apply a Film Preset
- Select any film preset from the sidebar (e.g., "Portra 400", "Tri-X", etc.)
- The image will be processed with the film effect

### 4. Enable Aspect Ratio Framing
- Scroll to the "Aspect Ratio Frame" section in the sidebar
- Click the **"Enable"** button to activate framing

### 5. Choose Your Aspect Ratio
Select from 6 Instagram-optimized aspect ratios:
- **1:1** - Square (perfect for feed posts)
- **4:5** - Portrait (feed posts)
- **9:16** - Story/Reel (Instagram Stories)
- **16:9** - Landscape (widescreen)
- **3:4** - Classic (vintage proportions)
- **2:3** - Portrait (alternative)

### 6. Select Frame Color
Choose from 6 preset colors:
- White (classic frame)
- Black (high contrast)
- Gray (neutral)
- Cream (vintage)
- Navy (modern)
- Beige (warm)

Or click a color preview to use the custom color picker.

### 7. Adjust Frame Padding
Use the **Padding** slider to control the amount of space between your image and the frame border:
- **2%** - Minimal frame, image fills most space
- **5%** - Balanced (default)
- **30%** - Large frame, image smaller

### 8. Export Your Image
Click **"Export JPG"** button in the header to download your framed image with all processing applied.

## Examples

### Example 1: Instagram Feed Post
1. Upload portrait photo
2. Select "Portra 400" film
3. Enable Aspect Ratio Frame
4. Select "4:5" (Portrait)
5. Choose "White" frame color
6. Adjust padding to ~8%
7. Export

### Example 2: Instagram Story
1. Upload any image
2. Select "Kodak Gold" film
3. Enable Aspect Ratio Frame
4. Select "9:16" (Story/Reel)
5. Choose "Black" frame color
6. Export

### Example 3: Classic Square Post
1. Upload photo
2. Select "Tri-X 400" (B&W film)
3. Enable Aspect Ratio Frame
4. Select "1:1" (Square)
5. Choose "Cream" frame color
6. Export

## Features

### Advanced Options (Optional)

Once you've enabled aspect ratio framing, you have full control over:
- **Film Presets** - Apply any of 100+ film stocks
- **Overlays** - Add light leaks, bokeh, textures
- **Film Frame** - Composite physical film frame edges
- **Tone Controls** - Adjust exposure, contrast, saturation
- **Grain** - Control film grain amount, size, and roughness
- **Effects** - Add vignette, halation, purple fringing

All of these work together with the aspect ratio frame.

### Frame Settings Independent From Basic Frame

The app has two separate framing features:
1. **Basic Frame** (white/black border) - Simple border, any dimensions
2. **Aspect Ratio Frame** (aspect ratio framing) - Instagram-optimized proportions

You can use:
- Just aspect ratio frame
- Just basic frame
- Both together
- Neither

## Technical Details

### Processing Pipeline
1. Film preset processing
2. Basic white/black frame (if enabled)
3. **Aspect ratio frame (if enabled)** ← NEW
4. Overlays composition
5. Film frame composition
6. JPEG export at 95% quality

### Browser Compatibility
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

### Performance
- Real-time preview updates
- Optimized for images up to 3200px
- Smooth aspect ratio transitions

## Troubleshooting

### Frame aspect ratio not appearing in export?
- Make sure "Enable" button is toggled on (should be amber/gold colored)
- Check that you've selected an aspect ratio preset

### Image looks cropped?
- The aspect ratio frame NEVER crops your image
- Instead, it adds borders to maintain the aspect ratio
- Adjust the "Padding" slider to control the border size

### Frame color not applying?
- Verify the aspect ratio frame is enabled
- Make sure you've clicked on a color option
- Try custom color picker if presets don't work

### Export file too large?
- This is normal for high-quality images
- Consider reducing image size before uploading
- JPEG quality is set to 95% for best results

## Support

For issues or feature requests related to the framing integration, check:
- [PHOTOFRAMING_INTEGRATION.md](./PHOTOFRAMING_INTEGRATION.md) - Technical details
- [INTEGRATION_CHANGES.md](./INTEGRATION_CHANGES.md) - Changes made
- [GitHub - PhotoFraming Original](https://github.com/ignasnefas/PhotoFraming) - Original library

## Tips & Tricks

1. **Portrait photos look great with 4:5** - Perfect for Instagram feed
2. **Landscape photos work best with 16:9** - Cinematic feel
3. **Square frames (1:1) are versatile** - Good for any orientation
4. **Customize colors** - Use the color picker for your brand colors
5. **Small padding (2-3%)** - Modern, minimal aesthetic
6. **Larger padding (15-20%)** - Prominent frame, vintage look
7. **Combine with B&W film** - Classic framed photograph effect
8. **Use dark frame with light image** - High contrast, bold look
