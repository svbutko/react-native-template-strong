import {useCallback, useEffect, useRef, useState} from "react";

export function useInputError(checkValue: string, checkFunction: (valueToCheck: string) => string | null) {
  const [error, setError] = useState<string | null>(null);
  const didMountRef = useRef(false);

  const recheckValue = useCallback(() => {
    const result = checkFunction(checkValue);
    setError(result);

    return result;
  }, [checkFunction, checkValue]);

  useEffect(() => {
    if (didMountRef.current) {
      recheckValue();
    } else {
      didMountRef.current = true;
    }
  }, [recheckValue]);

  return {
    error,
    setError,
    recheckValue,
  };
}
