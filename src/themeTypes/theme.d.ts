import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    textPrimary: string;
    textSecondary: string;
    accentPrimary: string;
    accentSecondary: string;
    divider: string;
  }
}
