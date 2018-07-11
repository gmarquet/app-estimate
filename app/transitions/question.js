import moveOver from "liquid-fire/transitions/move-over";
import { get } from "@ember/object";

export default function(opts) {
  const direction = get(this, 'newValue.id') >  get(this, 'oldValue.id') ?  -1 : 1;
  return moveOver.call(this, 'x', direction, opts);
}
