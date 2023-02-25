import {colors} from 'shared/infrastructure/theme/colors';
import {sizes} from 'shared/infrastructure/theme/sizes';

export interface ITheme {
  colors: typeof colors;
  sizes: typeof sizes;
}
export const theme: ITheme = {
  colors,
  sizes,
};
