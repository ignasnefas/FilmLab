## PhotoFraming Integration

TheFilmLab now includes integrated photo framing capabilities based on the PhotoFraming library by [Ignas Nefas](https://github.com/ignasnefas/PhotoFraming).

### New Features

#### Aspect Ratio Framing
Users can now apply Instagram-optimized aspect ratio frames to their processed images:

- **Aspect Ratio Presets:**
  - 1:1 (Square)
  - 4:5 (Portrait)
  - 9:16 (Story/Reel)
  - 16:9 (Landscape)
  - 3:4 (Classic)
  - 2:3 (Portrait)

#### Frame Customization
- **Frame Colors:** 6 preset colors (White, Black, Gray, Cream, Navy, Beige) + custom color picker
- **Frame Padding:** Adjustable padding from 2-30% to control inner spacing
- **Enable/Disable Toggle:** Activate aspect ratio framing independently

### How to Use

1. **Load an Image:** Upload or drag an image into the canvas area
2. **Apply Film Effect:** Select any film preset to process your image
3. **Enable Aspect Ratio Frame:** In the sidebar, toggle "Enable" under "Aspect Ratio Frame"
4. **Choose Preset:** Select your desired aspect ratio (1:1 for square, 4:5 for portraits, etc.)
5. **Select Frame Color:** Pick from preset colors or use the custom color picker
6. **Adjust Padding:** Use the padding slider to control the border size
7. **Export:** Click "Export JPG" to download your framed image

### Technical Implementation

#### New Files
- `framePresets.ts` - Contains frame preset definitions and frame color palettes
- `frameUtils.ts` - Utility functions for frame rendering (optional, can be expanded)

#### Modified Files
- `App.tsx` - Added frame aspect ratio state, UI controls, and export logic

#### Integration Details
- Frame aspect ratio is applied **after** film processing and basic frame (white/black border)
- Framing occurs **before** overlays and film frame compositing
- Output dimensions are automatically calculated based on the selected aspect ratio
- The aspect ratio frame works independently from the existing white/black frame controls

### State Management

New state variables added to `App.tsx`:
```typescript
const [selectedFramePreset, setSelectedFramePreset] = useState<FramePreset>(framePresets[0]);
const [frameAspectEnabled, setFrameAspectEnabled] = useState(false);
const [frameAspectColor, setFrameAspectColor] = useState<string>('#FFFFFF');
const [frameAspectPadding, setFrameAspectPadding] = useState(5);
```

### Export Process Flow

1. Apply film processing
2. Apply white/black frame (if enabled)
3. **Apply aspect ratio frame (if enabled)** ← NEW
4. Composite overlay
5. Composite film frame
6. Export as JPEG

### UI Location

**Sidebar → Aspect Ratio Frame Section** (between "Frame" and "Film Frame" sections)
- Toggle button to enable/disable
- Grid of aspect ratio preset buttons
- Grid of frame color options
- Padding slider

### Compatibility

- ✅ Works with all film presets
- ✅ Works with overlays
- ✅ Works with film frames
- ✅ Works with white/black border frames
- ✅ Works with all export options
- ✅ Responsive design on mobile

### Future Enhancements

Possible improvements:
- Additional aspect ratio presets
- Custom aspect ratio input
- Frame texture/pattern options
- Gradient frames
- Rounded corners option
