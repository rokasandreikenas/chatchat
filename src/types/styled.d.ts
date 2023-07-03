import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      lightGrey: string;
      grey: string;
      darkGrey: string;
      white: string;
      background: string;
      error: string;
      border: string;
    };
  }
}
