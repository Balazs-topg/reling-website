import { useEffect } from "react";

function useOutsideAlerter(ref, CallbackFunction) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        CallbackFunction();
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);
}
export default useOutsideAlerter;
