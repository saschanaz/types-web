/////////////////////////////
/// AudioWorklet Iterable APIs
/////////////////////////////

interface MessageEvent<T = any> {
    /** @deprecated */
    initMessageEvent(type: string, bubbles?: boolean, cancelable?: boolean, data?: any, origin?: string, lastEventId?: string, source?: MessageEventSource | null, ports?: Iterable<MessagePort>): void;
}

interface ReadableStream<R = any> {
    [Symbol.iterator](): IterableIterator<any>;
    entries(): IterableIterator<[number, any]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<any>;
}
