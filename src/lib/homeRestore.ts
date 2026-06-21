const RETURN_KEY = "home-return";
const SCROLL_KEY = "home-scroll";

export function markLeavingHome(getScroll: () => number = () => window.scrollY) {
  sessionStorage.setItem(SCROLL_KEY, String(getScroll()));
}

export function getSavedHomeScroll() {
  const y = sessionStorage.getItem(SCROLL_KEY);
  return y === null ? null : Number(y);
}

export function markHomeReturn() {
  sessionStorage.setItem(RETURN_KEY, "1");
}

export function peekHomeReturn() {
  return sessionStorage.getItem(RETURN_KEY) === "1";
}

export function consumeHomeReturn() {
  const isReturn = peekHomeReturn();
  if (isReturn) sessionStorage.removeItem(RETURN_KEY);
  return isReturn;
}

export function restoreHomeScroll(scrollTo?: (y: number) => void) {
  const y = getSavedHomeScroll();
  if (y === null) return;
  sessionStorage.removeItem(SCROLL_KEY);
  if (scrollTo) {
    scrollTo(y);
  } else {
    window.scrollTo(0, y);
  }
}
