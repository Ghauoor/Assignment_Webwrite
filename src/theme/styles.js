import colors from './color';
import {getPlatform} from '../utils/getPlatform';

export default {
  colors,
  INTER: {
    normal: getPlatform().isIOS ? 'Inter-Regular' : 'InterRegular',
    medium: getPlatform().isIOS ? 'Inter-Medium' : 'InterMedium',
    bold: getPlatform().isIOS ? 'Inter-Bold' : 'InterBold',
  },
};
