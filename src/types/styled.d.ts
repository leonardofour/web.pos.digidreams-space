import "styled-components";
import { lightTheme } from "@/components/common/button";

type CustomTheme = typeof lightTheme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {
    _noEmptyExtendFix?: true; 
  }
}
