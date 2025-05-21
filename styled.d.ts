import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorsWildcards;
    padding: Record<PaddingWildcard, string>;
    borderRadius: Record<RadiusWildcard, string>;
  }

  export type PaddingWildcard = "p1" | "p2" | "p3";

  export type RadiusWildcard = "button" | "card" | "input" | "modal" | "none";

  export interface ColorsWildcards {
    primary: string;
    secondary: string;
    gray: string;
    text: {
      primary: string;
      secondary: string;
    };
    white: string;
    black: string;
    hover: string;
    borders: {
      error: string;
      focus: string;
      gray: string;
    };
  }
}
