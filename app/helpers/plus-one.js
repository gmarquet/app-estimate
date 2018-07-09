import { helper } from '@ember/component/helper';

export function plusOne(params/*, hash*/) {
  if(!Number.isInteger(params[0])) return;
  return params[0] + 1 ;
}

export default helper(plusOne);
