import {useEffect, useRef} from "react";

export function useWhyDidYouUpdate<T>(name: string, props: T): void {
    const previousProps = useRef<T>();

    useEffect(() => {
        if (previousProps.current) {
            const allKeys = Object.keys({...previousProps.current, ...props});
            const changesObj: Partial<T> = {};

            allKeys.forEach((key) => {
                if ((previousProps.current as any)[key] !== (props as any)[key]) {
                    (changesObj as any)[key] = {
                        from: (previousProps.current as any)[key],
                        to: (props as any)[key],
                    };
                }
            });

            if (Object.keys(changesObj).length) {
                console.log("[why-did-you-update]", name, changesObj);
            }
        }

        previousProps.current = props;
    });
}
