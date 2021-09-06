import {useCallback, useEffect, useRef, useState} from "react";
import {datesValidation} from "../commonValidations";

export function useDatesError(fromDate: Date, toDate: Date, fromLabel: string, toLabel: string, currentField: "from" | "to") {
  const [error, setError] = useState<string | null>(null);
  const didMountRef = useRef(false);

  const recheckValue = useCallback(() => {
    const result = datesValidation(fromDate, toDate, fromLabel, toLabel, currentField);
    setError(result);

    return result;
  }, [currentField, fromDate, fromLabel, toDate, toLabel]);

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
