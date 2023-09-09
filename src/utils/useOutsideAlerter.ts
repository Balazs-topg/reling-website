import { useEffect, MutableRefObject } from "react";

const isBrowser = typeof window !== "undefined";

function useOutsideAlerter(
  ref: MutableRefObject<HTMLElement | null>,
  CallbackFunction: () => void
): void {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        CallbackFunction();
      }
    }
    if (isBrowser) {
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [ref, CallbackFunction]);
}

export default useOutsideAlerter;
