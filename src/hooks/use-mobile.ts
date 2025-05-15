import * as React from "react";

/**
 * The maximum width of the screen to be considered a mobile device.
 */
const MOBILE_BREAKPOINT = 768;

/**
 * The hook that detects if the user is using a mobile device.
 * @returns `true` if the user is using a mobile device, `false` otherwise.
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined
  );

  // Creates a MediaQueryList object that listens for changes in the viewport width.
  // The event listener is only added once, and then removed when the component is
  // unmounted.
  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      // If the window is resized, update the `isMobile` state accordingly.
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    // Set the initial value of `isMobile` based on the current window width.
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    // Remove the event listener when the component is unmounted.
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Return the value of `isMobile`, which is `true` if the user is using a mobile
  // device, and `false` otherwise.
  return !!isMobile;
}
