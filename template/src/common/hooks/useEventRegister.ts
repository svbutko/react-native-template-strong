import {useEffect} from "react";

interface IListenerHandler {
    callback: (data: any) => void;
    id: string;
}

const listeners = new Map<string, IListenerHandler[]>();
const listenersToEvent = new Map<string, string>();

export function useEventRegister(eventName: string, callback: (data: any) => void) {
    useEffect(() => {
        const callbacks = getOrCreateListeners(eventName);
        const id = eventName + callbacks.length;

        callbacks.push({id, callback});
        listenersToEvent.set(id, eventName);

        return () => {
            listeners.set(
                eventName,
                callbacks.filter((i) => i.id != id),
            );
        };
    }, [eventName, callback]);
}

export function removeAllListeners(eventName: string): void {
    listeners.delete(eventName);
}

export function emitEvent(eventName: string, data?: any): void {
    const listenersList = listeners.get(eventName);
    if (listenersList != null) {
        listenersList.forEach((i: IListenerHandler) => i.callback(data));
    }
}

function getOrCreateListeners(eventName: string): IListenerHandler[] {
    let listenersList = listeners.get(eventName);
    if (listenersList == null) {
        listenersList = [];
        listeners.set(eventName, listenersList);
    }

    return listenersList;
}
