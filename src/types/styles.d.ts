import 'styled-components';
import themes from '../themes/theme';

type ThemesType = typeof themes;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemesType {}
}
