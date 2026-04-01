export interface FramePreset {
  name: string;
  label: string;
  ratio: number; // width / height
}

export const framePresets: FramePreset[] = [
  { name: '1:1', label: 'Square (1:1)', ratio: 1 },
  { name: '4:5', label: 'Portrait (4:5)', ratio: 4 / 5 },
  { name: '9:16', label: 'Story/Reel (9:16)', ratio: 9 / 16 },
  { name: '16:9', label: 'Landscape (16:9)', ratio: 16 / 9 },
  { name: '3:4', label: 'Classic (3:4)', ratio: 3 / 4 },
  { name: '2:3', label: 'Portrait (2:3)', ratio: 2 / 3 },
];

export interface FrameColor {
  name: string;
  value: string;
}

export const frameColors: FrameColor[] = [
  { name: 'White', value: '#FFFFFF' },
  { name: 'Black', value: '#000000' },
  { name: 'Gray', value: '#808080' },
  { name: 'Cream', value: '#FFFDD0' },
  { name: 'Navy', value: '#0A1628' },
  { name: 'Beige', value: '#F5F5DC' },
];
