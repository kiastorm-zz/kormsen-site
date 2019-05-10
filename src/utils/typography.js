import Typography from 'typography';
import fairyGates from 'typography-theme-fairy-gates';

fairyGates.scaleRatio = 2.9;

console.log(fairyGates);

const typography = new Typography(fairyGates);

export const { scale, rhythm, options } = typography;
export default typography;
