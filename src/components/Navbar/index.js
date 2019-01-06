import { connect as felaConnect } from 'react-fela'

import component from './component';
import * as styles from './styles';

export default felaConnect(styles)(component);
