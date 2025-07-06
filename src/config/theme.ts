import { ThemeModeMap } from "./theme.type"

export const themeColors = ['primary', 'secondary', 'background', 'text'] as const
export const themeModes = [
  '#3498DB', // Azure Blue
  '#2ECC71', // Emerald Green
  '#9B59B6', // Amethyst Purple
  '#F1C40F', // Sunflower Yellow
  '#E74C3C', // Alizarin Red
  '#1ABC9C', // Turquoise
  '#34495E', // Wet Asphalt
  '#D35400', // Pumpkin Orange
  '#8E44AD', // Wisteria Purple
  '#16A085', // Green Sea
] as const
export const themeModesMap: ThemeModeMap[] = [
  {
    name: 'Azure Blue',
    key: '#3498DB',
  },
  {
    name: 'Emerald Green',
    key: '#2ECC71',
  },
  {
    name: 'Amethyst Purple',
    key: '#9B59B6',
  },
  {
    name: 'Sunflower Yellow',
    key: '#F1C40F',
  },
  {
    name: 'Alizarin Red',
    key: '#E74C3C',
  },
  {
    name: 'Turquoise',
    key: '#1ABC9C',
  },
  {
    name: 'Wet Asphalt',
    key: '#34495E',
  },
  {
    name: 'Pumpkin Orange',
    key: '#D35400',
  },
  {
    name: 'Wisteria Purple',
    key: '#8E44AD',
  },
  {
    name: 'Green Sea',
    key: '#16A085',
  },
]
