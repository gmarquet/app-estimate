import { helper } from '@ember/component/helper';

export function calculatePrice(params/*, hash*/) {
  const dailyCost = params[0] || 0;
  const coefficientTotal = params[1] || 0;
  const duration = params[2] || 0;
  let a = Number.parseFloat(duration * (1.0 + coefficientTotal)).toFixed(2);
  return dailyCost*Math.round(a*2)/2;
}

export default helper(calculatePrice);
