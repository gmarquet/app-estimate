import { helper } from '@ember/component/helper';

export function calculatePrice(params/*, hash*/) {
  const duration = params[0] || 0;
  const daily_rate = params[1] || 0;
  const coeff = params[2] || 0;

  let a = (daily_rate*duration*(1+coeff)).toFixed(0);
  return isNaN(a) ? 0 : a;
}

export default helper(calculatePrice);
