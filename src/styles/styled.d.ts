import {} from "styled-components"
import { ThemePattern } from "./theme"

declare module "styled-components" {
    export interface DefaultTheme extends ThemePattern {}
}