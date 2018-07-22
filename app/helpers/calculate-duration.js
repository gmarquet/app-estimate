import { helper } from '@ember/component/helper';

export function calculateDuration(params/*, hash*/) {
  const duration = params[0] || 0;
  const coeff = params[1] || 0;


  const totalDuration = duration * (1.0 + coeff).toFixed(2);;
  const a = Math.round(totalDuration*2)/2;
  console.log(params[0], params[1], a);
  return isNaN(a) ? 0 : a;
}

export default helper(calculateDuration);
