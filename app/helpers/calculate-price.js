import { helper } from '@ember/component/helper';

export function calculatePrice(params/*, hash*/) {
  const dailyCost = params[0] || 0;
  const duration = params[1] || 0;

  let a = (dailyCost*duration).toFixed(0);
  return isNaN(a) ? 0 : a;
}

export default helper(calculatePrice);
