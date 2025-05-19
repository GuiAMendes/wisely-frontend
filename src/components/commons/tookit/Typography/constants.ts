// Types
import { TypographyStyle, TypographyVariants } from "./types";

export const TYPOGRAPHY_STYLES_MAPPER: Record<keyof TypographyVariants, TypographyStyle> = {
  h1: {
    color: '#000000',
    fontSize: '32px',
    fontWeight: 'bold',
  },
  h2: {
    color: '#000000',
    fontSize: '28px',
    fontWeight: 'bold',
  },
  h3: {
    color: '#000000',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  h4: {
    color: '#000000',
    fontSize: '20px',
    fontWeight: 'normal',
  },
  h5: {
    color: '#000000',
    fontSize: '18px',
    fontWeight: 'normal',
  },
  p: {
    color: '#000000',
    fontSize: '0.85rem',
    fontWeight: 'normal',
  },
};