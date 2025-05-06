import { useCallback, useState } from 'react';

/** Returns [isSwitchedOn, setIsSwitchedOn, switchOn, switchOff, toggleSwitcher] */
export const useSwitcher = (isDefaultSwitchedOn = false) => {
  const [isSwitchedOn, setIsSwitchedOn] = useState(isDefaultSwitchedOn);

  const switchOn = useCallback(() => setIsSwitchedOn(true), []);
  const switchOff = useCallback(() => setIsSwitchedOn(false), []);
  const toggleSwitcher = useCallback(() => setIsSwitchedOn((v) => !v), []);

  return [
    isSwitchedOn,
    setIsSwitchedOn,
    switchOn,
    switchOff,
    toggleSwitcher
  ] as const;
};
