import { PropsWithChildren } from "react"
import { FontWeight } from "./typographyStyles"
import { TypographyVariants } from "./typographyVariants"

export interface TypographyProps extends PropsWithChildren {
  as?: string
  color?: string
  fontSize?: string
  fontWeight?: FontWeight
  $textAlign?: TextAlign
  variant: keyof TypographyVariants
}


export type TextAlign =
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'


