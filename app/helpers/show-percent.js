import { helper } from '@ember/component/helper';

export function showPercent(params/*, hash*/) {
  let percent = params[0] || 0;
  let a = (percent*100).toFixed(0);
  return isNaN(a) ? 0 : a;
}

export default helper(showPercent);
