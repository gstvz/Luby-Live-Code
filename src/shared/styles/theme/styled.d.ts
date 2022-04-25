import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      header_bg: string;
      text_default: string;
      text_secondary: string;
      action_button: string;
      round_button_bg: string;
      sneaker_primary: string;
      sneaker_secondary: string;
    };
    fonts: {
      poppins: string;
      lato: string;
    };
    font_weight: {
      w400: number;
      w500: number;
      w700: number;
    };
  }
}
