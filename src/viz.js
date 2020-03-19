import {
  subscribeToData, objectTransform,
} from '@google/dscc';
import message from './localMessage';
import { showMessage } from './screenvm';

// change this to 'true' for local development
// change this to 'false' before deploying
export const LOCAL = false;

const drawViz = (data) => {
  showMessage(data);
};

// renders locally
if (LOCAL) {
  drawViz(message);
} else {
  subscribeToData(drawViz, {transform: objectTransform});
}
