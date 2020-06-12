import { isNull } from "util";
import { IAppState } from "./interfaces";

const randomNumber = (length: number) => (): number =>
  Math.floor(Math.random() * length);

export default ({ list: { length }, random }: IAppState) => {
  if (!length) {
    return random;
  }
  if (length === 1) {
    return isNull(random) ? 0 : null;
  }
  const index = randomNumber(length);
  if (length === 2) {
    return isNull(random) ? index() : random === 0 ? 1 : 0;
  }
  let picked = index();
  if (picked !== random) {
    return picked;
  }

  const MAX_TRY = 3;
  let tries = 0;
  while (tries < MAX_TRY && picked === random) {
    picked = index();
    tries += 1;
  }

  return picked;
};
