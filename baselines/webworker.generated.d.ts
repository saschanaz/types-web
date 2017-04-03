
/////////////////////////////
/// Worker APIs
/////////////////////////////

interface EventInit {
    scoped?: boolean;
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
}

interface RequestInit {
    method?: any;
    headers?: HeadersInit;
    body?: BodyInit | null;
    referrer?: string;
    referrerPolicy?: any;
    mode?: RequestMode;
    credentials?: RequestCredentials;
    cache?: RequestCache;
    redirect?: RequestRedirect;
    integrity?: string;
    keepalive?: boolean;
    window?: any;
}

interface ResponseInit {
    status?: number;
    statusText?: any;
    headers?: HeadersInit;
}

interface MessageEventInit extends EventInit {
    channel?: string;
    data?: any;
    origin?: string;
    lastEventId?: string;
    source?: MessageEventSource | null;
    ports?: MessagePort[];
}

interface CloseEventInit extends EventInit {
    wasClean?: boolean;
    code?: number;
    reason?: string;
}

interface IDBObjectStoreParameters {
    keyPath?: string | string[] | null;
    autoIncrement?: boolean;
}

interface IDBIndexParameters {
    unique?: boolean;
    multiEntry?: boolean;
}

interface NotificationOptions {
    dir?: NotificationDirection;
    lang?: string;
    body?: string;
    tag?: string;
    image?: string;
    icon?: string;
    badge?: string;
    sound?: string;
    vibrate?: any;
    timestamp?: number;
    renotify?: boolean;
    silent?: boolean;
    requireInteraction?: boolean;
    data?: any;
    actions?: NotificationAction[];
}

interface GetNotificationOptions {
    tag?: string;
}

interface NotificationEventInit extends ExtendableEventInit {
    notification: Notification;
    action?: string;
}

interface PushSubscriptionOptionsInit {
    userVisibleOnly?: boolean;
    applicationServerKey?: BufferSource | string | null;
}

interface PushEventInit extends ExtendableEventInit {
    data?: PushMessageDataInit;
}

interface ClientQueryOptions {
    includeUncontrolled?: boolean;
    includeReserved?: boolean;
    type?: ClientType;
}

interface ExtendableEventInit extends EventInit {
}

interface FetchEventInit extends ExtendableEventInit {
    request: Request;
    preloadResponse: Promise<any>;
    clientId?: string;
    reservedClientId?: string;
    targetClientId?: string;
}

interface ExtendableMessageEventInit extends ExtendableEventInit {
    data?: any;
    origin?: string;
    lastEventId?: string;
    source?: Client | ServiceWorker | MessagePort | null;
    ports?: MessagePort[];
}

interface CacheQueryOptions {
    ignoreSearch?: boolean;
    ignoreMethod?: boolean;
    ignoreVary?: boolean;
    cacheName?: string;
}

interface SyncEventInit extends ExtendableEventInit {
    tag: string;
    lastChance?: boolean;
}

interface Algorithm {
    name: string;
}

interface KeyAlgorithm {
    name: string;
}

interface ClientQueryOptions {
    includeUncontrolled?: boolean;
    type?: ClientType;
}

interface ExtendableEventInit extends EventInit {
}

interface ExtendableMessageEventInit extends ExtendableEventInit {
    data?: any;
    origin?: string;
    lastEventId?: string;
    source?: Client | ServiceWorker | MessagePort | null;
    ports?: MessagePort[] | null;
}

interface FetchEventInit extends ExtendableEventInit {
    request: Request;
    clientId?: string | null;
    isReload?: boolean;
}

interface NotificationEventInit extends ExtendableEventInit {
    notification: Notification;
    action?: string;
}

interface PushEventInit extends ExtendableEventInit {
    data?: BufferSource | string;
}

interface SyncEventInit extends ExtendableEventInit {
    tag: string;
    lastChance?: boolean;
}

interface EventListener {
    (evt: Event): void;
}

interface NodeFilter {
    (evt: Event): void;
}

interface Event {
    readonly type: string;
    readonly target: EventTarget | null;
    readonly currentTarget: EventTarget | null;
    readonly eventPhase: number;
    cancelBubble: boolean;
    readonly bubbles: boolean;
    readonly cancelable: boolean;
    readonly defaultPrevented: boolean;
    readonly composed: boolean;
    readonly isTrusted: boolean;
    readonly timeStamp: number;
    readonly scoped: boolean;
    composedPath(): EventTarget[];
    stopPropagation(): void;
    stopImmediatePropagation(): void;
    preventDefault(): void;
    initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
    deepPath(): EventTarget[];
    readonly NONE: number;
    readonly CAPTURING_PHASE: number;
    readonly AT_TARGET: number;
    readonly BUBBLING_PHASE: number;
}

declare var Event: {
    prototype: Event;
    new(type: string, eventInitDict?: EventInit): Event;
    readonly NONE: number;
    readonly CAPTURING_PHASE: number;
    readonly AT_TARGET: number;
    readonly BUBBLING_PHASE: number;
};

interface EventTarget {
    addEventListener(type: string, listener?: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener(type: string, listener?: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    dispatchEvent(event: Event): boolean;
}

declare var EventTarget: {
    prototype: EventTarget;
    new(): EventTarget;
};

interface Headers {
    append(name: any, value: any): void;
    delete(name: any): void;
    get(name: any): any;
    has(name: any): boolean;
    set(name: any, value: any): void;
}

declare var Headers: {
    prototype: Headers;
    new(init?: Headers | string[][] | object): Headers;
};

interface Request extends Object, Body {
    readonly method: any;
    readonly url: string;
    readonly headers: Headers;
    readonly type: RequestType;
    readonly destination: RequestDestination;
    readonly referrer: string;
    readonly referrerPolicy: any;
    readonly mode: RequestMode;
    readonly credentials: RequestCredentials;
    readonly cache: RequestCache;
    readonly redirect: RequestRedirect;
    readonly integrity: string;
    readonly keepalive: boolean;
    clone(): Request;
}

declare var Request: {
    prototype: Request;
    new(input: RequestInfo, init?: RequestInit): Request;
};

interface Response extends Object, Body {
    readonly type: ResponseType;
    readonly url: string;
    readonly redirected: boolean;
    readonly status: number;
    readonly ok: boolean;
    readonly statusText: any;
    readonly headers: Headers;
    readonly trailer: Promise<Headers>;
    readonly redirected: boolean;
    clone(): Response;
}

declare var Response: {
    prototype: Response;
    new(body?: any, init?: ResponseInit): Response;
    error: () => Response;
    redirect: (url: string, status?: number) => Response;
    error(): Response;
    redirect(url: string, status?: number): Response;
};

interface Blob {
    readonly size: number;
    readonly type: string;
    readonly isClosed: boolean;
    slice(start?: number, end?: number, contentType?: string): Blob;
    close(): void;
}

declare var Blob: {
    prototype: Blob;
    new (blobParts?: any[], options?: BlobPropertyBag): Blob;
};

interface File extends Blob {
    readonly name: string;
    readonly lastModified: number;
}

declare var File: {
    prototype: File;
    new (parts: (ArrayBuffer | ArrayBufferView | Blob | string)[], filename: string, properties?: FilePropertyBag): File;
};

interface FileList {
    readonly length: number;
    item(index: number): File | null;
    [index: number]: File;
}

declare var FileList: {
    prototype: FileList;
    new(): FileList;
};

interface FileReaderEventMap {
    "loadstart": ProgressEvent;
    "progress": ProgressEvent;
    "load": ProgressEvent;
    "abort": ProgressEvent;
    "error": ProgressEvent;
    "loadend": ProgressEvent;
}

interface FileReader extends EventTarget {
    readonly readyState: number;
    readonly result: string | ArrayBuffer | null;
    readonly error: any;
    onloadstart: (this: FileReader, ev: ProgressEvent) => any;
    onprogress: (this: FileReader, ev: ProgressEvent) => any;
    onload: (this: FileReader, ev: ProgressEvent) => any;
    onabort: (this: FileReader, ev: ProgressEvent) => any;
    onerror: (this: FileReader, ev: ProgressEvent) => any;
    onloadend: (this: FileReader, ev: ProgressEvent) => any;
    readAsArrayBuffer(blob: Blob): void;
    readAsText(blob: Blob, label?: string): void;
    readAsDataURL(blob: Blob): void;
    abort(): void;
    readonly EMPTY: number;
    readonly LOADING: number;
    readonly DONE: number;
    addEventListener<K extends keyof FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var FileReader: {
    prototype: FileReader;
    new(): FileReader;
    readonly EMPTY: number;
    readonly LOADING: number;
    readonly DONE: number;
};

interface PerformanceEventMap {
    "resourcetimingbufferfull": Event;
}

interface Performance extends EventTarget {
    readonly timing: PerformanceTiming;
    readonly navigation: PerformanceNavigation;
    onresourcetimingbufferfull: (this: Performance, ev: Event) => any;
    now(): number;
    getEntries(): PerformanceEntryList;
    getEntriesByType(type: string): PerformanceEntryList;
    getEntriesByName(name: string, type?: string): PerformanceEntryList;
    clearResourceTimings(): void;
    setResourceTimingBufferSize(maxSize: number): void;
    mark(markName: string): void;
    clearMarks(markName?: string): void;
    measure(measureName: string, startMark?: string, endMark?: string): void;
    clearMeasures(measureName?: string): void;
    addEventListener<K extends keyof PerformanceEventMap>(type: K, listener: (this: Performance, ev: PerformanceEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var Performance: {
    prototype: Performance;
    new(): Performance;
};

interface DOMStringList {
    readonly length: number;
    item(index: number): string | null;
    contains(string: string): boolean;
    [index: number]: string;
}

declare var DOMStringList: {
    prototype: DOMStringList;
    new(): DOMStringList;
};

interface ImageData {
    readonly width: number;
    readonly height: number;
    data: Uint8ClampedArray;
}

declare var ImageData: {
    prototype: ImageData;
    new(width: number, height: number): ImageData;
    new(array: Uint8ClampedArray, width: number, height: number): ImageData;
};

interface ErrorEvent extends Event {
    readonly message: string;
    readonly filename: string;
    readonly lineno: number;
    readonly colno: number;
    readonly error: any;
}

declare var ErrorEvent: {
    prototype: ErrorEvent;
    new(type: string, errorEventInitDict?: ErrorEventInit): ErrorEvent;
};

interface MessageEvent extends Event {
    readonly data: any;
    readonly origin: string;
    readonly lastEventId: string;
    readonly source: MessageEventSource | null;
    readonly ports: ReadonlyArray<MessagePort>;
    initMessageEvent(type: string, bubbles?: boolean, cancelable?: boolean, data?: any, origin?: string, lastEventId?: string, source?: MessageEventSource, ports?: MessagePort[]): void;
}

declare var MessageEvent: {
    prototype: MessageEvent;
    new(type: string, eventInitDict?: MessageEventInit): MessageEvent;
};

interface WebSocketEventMap {
    "open": Event;
    "error": ErrorEvent;
    "close": Event;
    "message": MessageEvent;
}

interface WebSocket extends EventTarget {
    readonly url: string;
    readonly readyState: number;
    readonly bufferedAmount: number;
    onopen: (this: WebSocket, ev: Event) => any;
    onerror: (this: WebSocket, ev: ErrorEvent) => any;
    onclose: (this: WebSocket, ev: Event) => any;
    readonly extensions: string;
    readonly protocol: string;
    onmessage: (this: WebSocket, ev: MessageEvent) => any;
    binaryType: BinaryType;
    close(code?: number, reason?: string): void;
    send(data: string): void;
    send(data: Blob): void;
    send(data: ArrayBuffer): void;
    send(data: ArrayBufferView): void;
    readonly CONNECTING: number;
    readonly OPEN: number;
    readonly CLOSING: number;
    readonly CLOSED: number;
    addEventListener<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var WebSocket: {
    prototype: WebSocket;
    new(url: string, protocols?: string | string[]): WebSocket;
    readonly CONNECTING: number;
    readonly OPEN: number;
    readonly CLOSING: number;
    readonly CLOSED: number;
};

interface CloseEvent extends Event {
    readonly wasClean: boolean;
    readonly code: number;
    readonly reason: string;
}

declare var CloseEvent: {
    prototype: CloseEvent;
    new(type: string, eventInitDict?: CloseEventInit): CloseEvent;
};

interface MessageChannel {
    readonly port1: MessagePort;
    readonly port2: MessagePort;
}

declare var MessageChannel: {
    prototype: MessageChannel;
    new(): MessageChannel;
};

interface MessagePortEventMap {
    "message": MessageEvent;
}

interface MessagePort extends EventTarget {
    onmessage: (this: MessagePort, ev: MessageEvent) => any;
    postMessage(message: any, transfer?: any[]): void;
    start(): void;
    close(): void;
    addEventListener<K extends keyof MessagePortEventMap>(type: K, listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var MessagePort: {
    prototype: MessagePort;
    new(): MessagePort;
};

interface WorkerEventMap extends AbstractWorkerEventMap {
    "message": MessageEvent;
}

interface Worker extends EventTarget, AbstractWorker {
    onmessage: (this: Worker, ev: MessageEvent) => any;
    terminate(): void;
    postMessage(message: any, transfer?: any[]): void;
    addEventListener<K extends keyof WorkerEventMap>(type: K, listener: (this: Worker, ev: WorkerEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var Worker: {
    prototype: Worker;
    new(scriptURL: string, options?: WorkerOptions): Worker;
};

interface IDBKeyRange {
    readonly lower: any;
    readonly upper: any;
    readonly lowerOpen: boolean;
    readonly upperOpen: boolean;
}

declare var IDBKeyRange: {
    prototype: IDBKeyRange;
    new(): IDBKeyRange;
    only(value: any): IDBKeyRange;
    lowerBound(lower: any, open?: boolean): IDBKeyRange;
    upperBound(upper: any, open?: boolean): IDBKeyRange;
    bound(lower: any, upper: any, lowerOpen?: boolean, upperOpen?: boolean): IDBKeyRange;
};

interface IDBRequestEventMap {
    "success": Event;
    "error": ErrorEvent;
}

interface IDBRequest extends EventTarget {
    readonly result: any;
    readonly error: DOMException;
    source: IDBObjectStore | IDBIndex | IDBCursor;
    readonly transaction: IDBTransaction;
    readonly readyState: IDBRequestReadyState;
    onsuccess: (this: IDBRequest, ev: Event) => any;
    onerror: (this: IDBRequest, ev: ErrorEvent) => any;
    addEventListener<K extends keyof IDBRequestEventMap>(type: K, listener: (this: IDBRequest, ev: IDBRequestEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var IDBRequest: {
    prototype: IDBRequest;
    new(): IDBRequest;
};

interface IDBOpenDBRequestEventMap extends IDBRequestEventMap {
    "blocked": Event;
    "upgradeneeded": Event;
}

interface IDBOpenDBRequest extends IDBRequest {
    onblocked: (this: IDBOpenDBRequest, ev: Event) => any;
    onupgradeneeded: (this: IDBOpenDBRequest, ev: Event) => any;
    addEventListener<K extends keyof IDBOpenDBRequestEventMap>(type: K, listener: (this: IDBOpenDBRequest, ev: IDBOpenDBRequestEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var IDBOpenDBRequest: {
    prototype: IDBOpenDBRequest;
    new(): IDBOpenDBRequest;
};

interface IDBVersionChangeEvent extends Event {
    readonly oldVersion: number;
    readonly newVersion: number | null;
}

declare var IDBVersionChangeEvent: {
    prototype: IDBVersionChangeEvent;
    new(type: string, eventInitDict?: IDBVersionChangeEventInit): IDBVersionChangeEvent;
};

interface IDBFactory {
    open(name: string, version?: number): IDBOpenDBRequest;
    deleteDatabase(name: string): IDBOpenDBRequest;
    cmp(first: any, second: any): number;
}

declare var IDBFactory: {
    prototype: IDBFactory;
    new(): IDBFactory;
};

interface IDBDatabaseEventMap {
    "abort": Event;
    "error": Event;
    "versionchange": IDBVersionChangeEvent;
}

interface IDBDatabase extends EventTarget {
    readonly name: string;
    version: number;
    readonly objectStoreNames: DOMStringList;
    onabort: (this: IDBDatabase, ev: Event) => any;
    onerror: (this: IDBDatabase, ev: Event) => any;
    onversionchange: (this: IDBDatabase, ev: IDBVersionChangeEvent) => any;
    createObjectStore(name: string, optionalParameters?: IDBObjectStoreParameters): IDBObjectStore;
    deleteObjectStore(name: string): void;
    transaction(storeNames: string | string[], mode?: IDBTransactionMode): IDBTransaction;
    close(): void;
    addEventListener(type: "versionchange", listener: (ev: IDBVersionChangeEvent) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof IDBDatabaseEventMap>(type: K, listener: (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var IDBDatabase: {
    prototype: IDBDatabase;
    new(): IDBDatabase;
};

interface IDBObjectStore {
    readonly name: string;
    keyPath: string | string[];
    readonly indexNames: DOMStringList;
    readonly transaction: IDBTransaction;
    readonly autoIncrement: boolean;
    put(value: any, key?: IDBKeyRange | IDBValidKey): IDBRequest;
    add(value: any, key?: IDBKeyRange | IDBValidKey): IDBRequest;
    delete(key: IDBKeyRange | IDBValidKey): IDBRequest;
    get(key: any): IDBRequest;
    clear(): IDBRequest;
    openCursor(range?: IDBKeyRange | IDBValidKey, direction?: IDBCursorDirection): IDBRequest;
    createIndex(name: string, keyPath: string | string[], optionalParameters?: IDBIndexParameters): IDBIndex;
    index(name: string): IDBIndex;
    deleteIndex(indexName: string): void;
    count(key?: IDBKeyRange | IDBValidKey): IDBRequest;
}

declare var IDBObjectStore: {
    prototype: IDBObjectStore;
    new(): IDBObjectStore;
};

interface IDBIndex {
    readonly name: string;
    readonly objectStore: IDBObjectStore;
    keyPath: string | string[];
    readonly multiEntry: boolean;
    readonly unique: boolean;
    openCursor(range?: IDBKeyRange | IDBValidKey, direction?: IDBCursorDirection): IDBRequest;
    openKeyCursor(range?: IDBKeyRange | IDBValidKey, direction?: IDBCursorDirection): IDBRequest;
    get(key: IDBKeyRange | IDBValidKey): IDBRequest;
    getKey(key: IDBKeyRange | IDBValidKey): IDBRequest;
    count(key?: IDBKeyRange | IDBValidKey): IDBRequest;
}

declare var IDBIndex: {
    prototype: IDBIndex;
    new(): IDBIndex;
};

interface IDBCursor {
    source: IDBObjectStore | IDBIndex;
    readonly direction: IDBCursorDirection;
    key: IDBKeyRange | IDBValidKey;
    readonly primaryKey: any;
    update(value: any): IDBRequest;
    advance(count: number): void;
    continue(key?: IDBKeyRange | IDBValidKey): void;
    delete(): IDBRequest;
}

declare var IDBCursor: {
    prototype: IDBCursor;
    new(): IDBCursor;
};

interface IDBCursorWithValue extends IDBCursor {
    readonly value: any;
}

declare var IDBCursorWithValue: {
    prototype: IDBCursorWithValue;
    new(): IDBCursorWithValue;
};

interface IDBTransactionEventMap {
    "abort": Event;
    "complete": Event;
    "error": ErrorEvent;
}

interface IDBTransaction extends EventTarget {
    readonly mode: IDBTransactionMode;
    readonly db: IDBDatabase;
    readonly error: DOMException;
    onabort: (this: IDBTransaction, ev: Event) => any;
    oncomplete: (this: IDBTransaction, ev: Event) => any;
    onerror: (this: IDBTransaction, ev: ErrorEvent) => any;
    objectStore(name: string): IDBObjectStore;
    abort(): void;
    addEventListener<K extends keyof IDBTransactionEventMap>(type: K, listener: (this: IDBTransaction, ev: IDBTransactionEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var IDBTransaction: {
    prototype: IDBTransaction;
    new(): IDBTransaction;
};

interface PerformanceTiming {
    readonly navigationStart: number;
    readonly unloadEventStart: number;
    readonly unloadEventEnd: number;
    readonly redirectStart: number;
    readonly redirectEnd: number;
    readonly fetchStart: number;
    readonly domainLookupStart: number;
    readonly domainLookupEnd: number;
    readonly connectStart: number;
    readonly connectEnd: number;
    readonly secureConnectionStart: number;
    readonly requestStart: number;
    readonly responseStart: number;
    readonly responseEnd: number;
    readonly domLoading: number;
    readonly domInteractive: number;
    readonly domContentLoadedEventStart: number;
    readonly domContentLoadedEventEnd: number;
    readonly domComplete: number;
    readonly loadEventStart: number;
    readonly loadEventEnd: number;
}

declare var PerformanceTiming: {
    prototype: PerformanceTiming;
    new(): PerformanceTiming;
};

interface PerformanceNavigation {
    readonly type: number;
    readonly redirectCount: number;
    readonly TYPE_NAVIGATE: number;
    readonly TYPE_RELOAD: number;
    readonly TYPE_BACK_FORWARD: number;
    readonly TYPE_RESERVED: number;
}

declare var PerformanceNavigation: {
    prototype: PerformanceNavigation;
    new(): PerformanceNavigation;
    readonly TYPE_NAVIGATE: number;
    readonly TYPE_RELOAD: number;
    readonly TYPE_BACK_FORWARD: number;
    readonly TYPE_RESERVED: number;
};

interface NotificationEventMap {
    "click": MouseEvent;
    "error": ErrorEvent;
}

interface Notification extends EventTarget {
    readonly permission: NotificationPermission;
    readonly maxActions: number;
    onclick: (this: Notification, ev: MouseEvent) => any;
    onerror: (this: Notification, ev: ErrorEvent) => any;
    readonly title: string;
    readonly dir: NotificationDirection;
    readonly lang: string;
    readonly body: string;
    readonly tag: string;
    readonly image: string;
    readonly icon: string;
    readonly badge: string;
    readonly sound: string;
    readonly vibrate: ReadonlyArray<number>;
    readonly timestamp: number;
    readonly renotify: boolean;
    readonly silent: boolean;
    readonly requireInteraction: boolean;
    readonly data: any;
    readonly actions: ReadonlyArray<NotificationAction>;
    close(): void;
    addEventListener<K extends keyof NotificationEventMap>(type: K, listener: (this: Notification, ev: NotificationEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var Notification: {
    prototype: Notification;
    new(title: string, options?: NotificationOptions): Notification;
    requestPermission(deprecatedCallback?: NotificationPermissionCallback): Promise<NotificationPermission>;
};

interface PushManager {
    subscribe(options?: PushSubscriptionOptionsInit): Promise<PushSubscription>;
    getSubscription(): any;
    permissionState(options?: PushSubscriptionOptionsInit): Promise<PushPermissionState>;
}

declare var PushManager: {
    prototype: PushManager;
    new(): PushManager;
};

interface PushSubscriptionOptions {
    readonly userVisibleOnly: boolean;
    readonly applicationServerKey: ArrayBuffer | null;
}

declare var PushSubscriptionOptions: {
    prototype: PushSubscriptionOptions;
    new(): PushSubscriptionOptions;
};

interface PushSubscription {
    readonly endpoint: string;
    readonly options: PushSubscriptionOptions;
    getKey(name: PushEncryptionKeyName): ArrayBuffer | null;
    unsubscribe(): Promise<boolean>;
}

declare var PushSubscription: {
    prototype: PushSubscription;
    new(): PushSubscription;
};

interface ServiceWorkerEventMap extends AbstractWorkerEventMap {
    "statechange": Event;
}

interface ServiceWorker extends EventTarget, AbstractWorker {
    readonly scriptURL: string;
    readonly state: ServiceWorkerState;
    onstatechange: (this: ServiceWorker, ev: Event) => any;
    postMessage(message: any, transfer?: any[]): void;
    addEventListener<K extends keyof ServiceWorkerEventMap>(type: K, listener: (this: ServiceWorker, ev: ServiceWorkerEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var ServiceWorker: {
    prototype: ServiceWorker;
    new(): ServiceWorker;
};

interface ServiceWorkerRegistrationEventMap {
    "updatefound": Event;
}

interface ServiceWorkerRegistration extends EventTarget {
    readonly installing: ServiceWorker | null;
    readonly waiting: ServiceWorker | null;
    readonly active: ServiceWorker | null;
    readonly navigationPreload: NavigationPreloadManager;
    readonly scope: string;
    readonly useCache: boolean;
    onupdatefound: (this: ServiceWorkerRegistration, ev: Event) => any;
    readonly pushManager: PushManager;
    readonly sync: SyncManager;
    update(): Promise<void>;
    unregister(): Promise<boolean>;
    showNotification(title: string, options?: NotificationOptions): Promise<void>;
    getNotifications(filter?: GetNotificationOptions): Promise<Notification[]>;
    addEventListener<K extends keyof ServiceWorkerRegistrationEventMap>(type: K, listener: (this: ServiceWorkerRegistration, ev: ServiceWorkerRegistrationEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var ServiceWorkerRegistration: {
    prototype: ServiceWorkerRegistration;
    new(): ServiceWorkerRegistration;
};

interface Cache {
    match(request: RequestInfo, options?: CacheQueryOptions): Promise<any>;
    matchAll(request?: RequestInfo, options?: CacheQueryOptions): Promise<Response[]>;
    add(request: RequestInfo): Promise<void>;
    addAll(requests: RequestInfo[]): Promise<void>;
    put(request: RequestInfo, response: Response): Promise<void>;
    delete(request: RequestInfo, options?: CacheQueryOptions): Promise<boolean>;
    keys(request?: RequestInfo, options?: CacheQueryOptions): Promise<Request[]>;
}

declare var Cache: {
    prototype: Cache;
    new(): Cache;
};

interface CacheStorage {
    match(request: RequestInfo, options?: CacheQueryOptions): Promise<any>;
    has(cacheName: string): Promise<boolean>;
    open(cacheName: string): Promise<Cache>;
    delete(cacheName: string): Promise<boolean>;
    keys(): Promise<string[]>;
}

declare var CacheStorage: {
    prototype: CacheStorage;
    new(): CacheStorage;
};

interface URL {
    href: string;
    readonly origin: string;
    protocol: string;
    username: string;
    password: string;
    host: string;
    hostname: string;
    port: string;
    pathname: string;
    search: string;
    readonly searchParams: URLSearchParams;
    hash: string;
    toJSON(): string;
}

declare var URL: {
    prototype: URL;
    new(url: string, base?: string): URL;
    createObjectURL(blob: Blob): string;
    createFor(blob: Blob): string;
    revokeObjectURL(url: string): void;
    createObjectURL(mediaSource: MediaSource): string;
};

interface URLSearchParams {
    /**
     * Appends a specified key/value pair as a new search parameter.
     */
    append(name: string, value: string): void;
    /**
     * Deletes the given search parameter, and its associated value, from the list of all search parameters.
     */
    delete(name: string): void;
    /**
     * Returns the first value associated to the given search parameter.
     */
    get(name: string): string | null;
    /**
     * Returns all the values association with a given search parameter.
     */
    getAll(name: string): string[];
    /**
     * Returns a Boolean indicating if such a search parameter exists.
     */
    has(name: string): boolean;
    /**
     * Sets the value associated to a given search parameter to the given value. If there were several values, delete the others.
     */
    set(name: string, value: string): void;
    sort(): void;
}

declare var URLSearchParams: {
    prototype: URLSearchParams;
    new(init?: string[][] | any<any> | string): URLSearchParams;
};

interface AudioBuffer {
    readonly sampleRate: number;
    readonly length: number;
    readonly duration: number;
    readonly numberOfChannels: number;
    getChannelData(channel: number): Float32Array;
    copyFromChannel(destination: Float32Array, channelNumber: number, startInChannel?: number): void;
    copyToChannel(source: Float32Array, channelNumber: number, startInChannel?: number): void;
}

declare var AudioBuffer: {
    prototype: AudioBuffer;
    new(options: AudioBufferOptions): AudioBuffer;
};

interface SyncManager {
    register(tag: string): Promise<void>;
    getTags(): Promise<string[]>;
}

declare var SyncManager: {
    prototype: SyncManager;
    new(): SyncManager;
};

interface CryptoKey {
    readonly type: KeyType;
    readonly extractable: boolean;
    readonly algorithm: any;
    readonly usages: any;
}

declare var CryptoKey: {
    prototype: CryptoKey;
    new(): CryptoKey;
};

interface XMLHttpRequestEventTargetEventMap {
    "loadstart": Event;
    "progress": ProgressEvent;
    "abort": Event;
    "error": ErrorEvent;
    "load": Event;
    "timeout": Event;
    "loadend": Event;
}

interface XMLHttpRequestEventTarget extends EventTarget {
    onloadstart: (this: XMLHttpRequest, ev: Event) => any;
    onprogress: (this: XMLHttpRequest, ev: ProgressEvent) => any;
    onabort: (this: XMLHttpRequest, ev: Event) => any;
    onerror: (this: XMLHttpRequest, ev: ErrorEvent) => any;
    onload: (this: XMLHttpRequest, ev: Event) => any;
    ontimeout: (this: XMLHttpRequest, ev: ProgressEvent) => any;
    onloadend: (this: XMLHttpRequest, ev: ProgressEvent) => any;
    addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var XMLHttpRequestEventTarget: {
    prototype: XMLHttpRequestEventTarget;
    new(): XMLHttpRequestEventTarget;
};

interface XMLHttpRequestUpload extends XMLHttpRequestEventTarget {
    addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var XMLHttpRequestUpload: {
    prototype: XMLHttpRequestUpload;
    new(): XMLHttpRequestUpload;
};

interface XMLHttpRequestEventMap extends XMLHttpRequestEventTargetEventMap {
    "readystatechange": Event;
}

interface XMLHttpRequest extends XMLHttpRequestEventTarget {
    onreadystatechange: (this: XMLHttpRequest, ev: Event) => any;
    readonly readyState: number;
    timeout: number;
    withCredentials: boolean;
    readonly upload: XMLHttpRequestUpload;
    readonly responseURL: string;
    readonly status: number;
    readonly statusText: any;
    responseType: XMLHttpRequestResponseType;
    readonly response: any;
    readonly responseText: string;
    readonly responseXML: any;
    msCaching?: string;
    open(method: any, url: string): void;
    open(method: any, url: string, async: boolean, username?: string, password?: string): void;
    setRequestHeader(name: any, value: any): void;
    send(data?: string): void;
    send(data?: any): void;
    abort(): void;
    getResponseHeader(name: any): any;
    getAllResponseHeaders(): any;
    overrideMimeType(mime: string): void;
    readonly UNSENT: number;
    readonly OPENED: number;
    readonly HEADERS_RECEIVED: number;
    readonly LOADING: number;
    readonly DONE: number;
    addEventListener<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var XMLHttpRequest: {
    prototype: XMLHttpRequest;
    new(): XMLHttpRequest;
    readonly UNSENT: number;
    readonly OPENED: number;
    readonly HEADERS_RECEIVED: number;
    readonly LOADING: number;
    readonly DONE: number;
};

interface FormData {
    append(name: string, value: string | Blob, fileName?: string): void;
    append(name: string, value: string | Blob, fileName?: string): void;
    delete(name: string): void;
    get(name: string): FormDataEntryValue | null;
    getAll(name: string): FormDataEntryValue[];
    has(name: string): boolean;
    set(name: string, value: string): void;
    set(name: string, blobValue: Blob, filename?: string): void;
}

declare var FormData: {
    prototype: FormData;
    new(form?: HTMLFormElement): FormData;
};

interface ProgressEvent extends Event {
    readonly lengthComputable: boolean;
    readonly loaded: number;
    readonly total: number;
}

declare var ProgressEvent: {
    prototype: ProgressEvent;
    new(type: string, eventInitDict?: ProgressEventInit): ProgressEvent;
};

interface Body {
    readonly body: any;
    readonly bodyUsed: boolean;
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Blob>;
    formData(): Promise<FormData>;
    json(): Promise<any>;
    text(): Promise<string>;
}

interface Position {
    readonly coords: Coordinates;
    readonly timestamp: number;
}

interface Coordinates {
    readonly latitude: number;
    readonly longitude: number;
    readonly altitude: number | null;
    readonly accuracy: number;
    readonly altitudeAccuracy: number | null;
    readonly heading: number | null;
    readonly speed: number | null;
}

interface PositionError {
    readonly code: number;
    readonly message: string;
    readonly PERMISSION_DENIED: number;
    readonly POSITION_UNAVAILABLE: number;
    readonly TIMEOUT: number;
}

interface NavigatorOnLine {
    readonly onLine: boolean;
}

interface NavigatorID {
    readonly appCodeName: string;
    readonly appName: string;
    readonly appVersion: string;
    readonly platform: string;
    readonly product: string;
    readonly productSub: string;
    readonly userAgent: string;
    readonly vendor: string;
    readonly vendorSub: string;
    readonly oscpu: string;
    taintEnabled(): boolean;
}

interface AbstractWorkerEventMap {
    "error": ErrorEvent;
}

interface AbstractWorker {
    onerror: (this: AbstractWorker, ev: ErrorEvent) => any;
    addEventListener<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: AbstractWorker, ev: AbstractWorkerEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

interface NavigatorConcurrentHardware {
    readonly hardwareConcurrency: number;
}

interface Client {
    readonly frameType: FrameType;
    readonly id: string;
    readonly url: string;
    postMessage(message: any, transfer?: any[]): void;
}

declare var Client: {
    prototype: Client;
    new(): Client;
};

interface Clients {
    claim(): Promise<void>;
    get(id: string): Promise<any>;
    matchAll(options?: ClientQueryOptions): Promise<Client[]>;
    openWindow(url: string): Promise<WindowClient>;
}

declare var Clients: {
    prototype: Clients;
    new(): Clients;
};

interface DedicatedWorkerGlobalScopeEventMap extends WorkerGlobalScopeEventMap {
    "message": MessageEvent;
}

interface DedicatedWorkerGlobalScope extends WorkerGlobalScope {
    onmessage: (this: DedicatedWorkerGlobalScope, ev: MessageEvent) => any;
    close(): void;
    postMessage(message: any, transfer?: any[]): void;
    addEventListener<K extends keyof DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var DedicatedWorkerGlobalScope: {
    prototype: DedicatedWorkerGlobalScope;
    new(): DedicatedWorkerGlobalScope;
};

interface ExtendableEvent extends Event {
    waitUntil(f: Promise<any>): void;
}

declare var ExtendableEvent: {
    prototype: ExtendableEvent;
    new(type: string, eventInitDict?: ExtendableEventInit): ExtendableEvent;
};

interface ExtendableMessageEvent extends ExtendableEvent {
    readonly data: any;
    readonly lastEventId: string;
    readonly origin: string;
    readonly ports: MessagePort[] | null;
    readonly source: Client | ServiceWorker | MessagePort | null;
}

declare var ExtendableMessageEvent: {
    prototype: ExtendableMessageEvent;
    new(type: string, eventInitDict?: ExtendableMessageEventInit): ExtendableMessageEvent;
};

interface FetchEvent extends ExtendableEvent {
    readonly clientId: string | null;
    readonly isReload: boolean;
    readonly request: Request;
    respondWith(r: Promise<Response>): void;
}

declare var FetchEvent: {
    prototype: FetchEvent;
    new(type: string, eventInitDict: FetchEventInit): FetchEvent;
};

interface FileReaderSync {
    readAsArrayBuffer(blob: Blob): any;
    readAsBinaryString(blob: Blob): void;
    readAsDataURL(blob: Blob): string;
    readAsText(blob: Blob, encoding?: string): string;
}

declare var FileReaderSync: {
    prototype: FileReaderSync;
    new(): FileReaderSync;
};

interface NotificationEvent extends ExtendableEvent {
    readonly action: string;
    readonly notification: Notification;
}

declare var NotificationEvent: {
    prototype: NotificationEvent;
    new(type: string, eventInitDict: NotificationEventInit): NotificationEvent;
};

interface PushEvent extends ExtendableEvent {
    readonly data: PushMessageData | null;
}

declare var PushEvent: {
    prototype: PushEvent;
    new(type: string, eventInitDict?: PushEventInit): PushEvent;
};

interface PushMessageData {
    arrayBuffer(): ArrayBuffer;
    blob(): Blob;
    json(): any;
    text(): string;
}

declare var PushMessageData: {
    prototype: PushMessageData;
    new(): PushMessageData;
};

interface ServiceWorkerGlobalScopeEventMap extends WorkerGlobalScopeEventMap {
    "activate": ExtendableEvent;
    "fetch": FetchEvent;
    "install": ExtendableEvent;
    "message": ExtendableMessageEvent;
    "notificationclick": NotificationEvent;
    "notificationclose": NotificationEvent;
    "push": PushEvent;
    "pushsubscriptionchange": ExtendableEvent;
    "sync": SyncEvent;
}

interface ServiceWorkerGlobalScope extends WorkerGlobalScope {
    readonly clients: Clients;
    onactivate: (this: ServiceWorkerGlobalScope, ev: ExtendableEvent) => any;
    onfetch: (this: ServiceWorkerGlobalScope, ev: FetchEvent) => any;
    oninstall: (this: ServiceWorkerGlobalScope, ev: ExtendableEvent) => any;
    onmessage: (this: ServiceWorkerGlobalScope, ev: ExtendableMessageEvent) => any;
    onnotificationclick: (this: ServiceWorkerGlobalScope, ev: NotificationEvent) => any;
    onnotificationclose: (this: ServiceWorkerGlobalScope, ev: NotificationEvent) => any;
    onpush: (this: ServiceWorkerGlobalScope, ev: PushEvent) => any;
    onpushsubscriptionchange: (this: ServiceWorkerGlobalScope, ev: ExtendableEvent) => any;
    onsync: (this: ServiceWorkerGlobalScope, ev: SyncEvent) => any;
    readonly registration: ServiceWorkerRegistration;
    skipWaiting(): Promise<void>;
    addEventListener<K extends keyof ServiceWorkerGlobalScopeEventMap>(type: K, listener: (this: ServiceWorkerGlobalScope, ev: ServiceWorkerGlobalScopeEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var ServiceWorkerGlobalScope: {
    prototype: ServiceWorkerGlobalScope;
    new(): ServiceWorkerGlobalScope;
};

interface SyncEvent extends ExtendableEvent {
    readonly lastChance: boolean;
    readonly tag: string;
}

declare var SyncEvent: {
    prototype: SyncEvent;
    new(type: string, init: SyncEventInit): SyncEvent;
};

interface WindowClient extends Client {
    readonly focused: boolean;
    readonly visibilityState: any;
    focus(): Promise<WindowClient>;
    navigate(url: string): Promise<WindowClient>;
}

declare var WindowClient: {
    prototype: WindowClient;
    new(): WindowClient;
};

interface WorkerGlobalScopeEventMap {
    "error": ErrorEvent;
}

interface WorkerGlobalScope extends EventTarget, WorkerUtils, WindowConsole, GlobalFetch {
    readonly caches: CacheStorage;
    readonly isSecureContext: boolean;
    readonly location: WorkerLocation;
    onerror: (this: WorkerGlobalScope, ev: ErrorEvent) => any;
    readonly performance: Performance;
    readonly self: WorkerGlobalScope;
    msWriteProfilerMark(profilerMarkName: string): void;
    createImageBitmap(image: ImageBitmap | ImageData | Blob, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    createImageBitmap(image: ImageBitmap | ImageData | Blob, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    addEventListener<K extends keyof WorkerGlobalScopeEventMap>(type: K, listener: (this: WorkerGlobalScope, ev: WorkerGlobalScopeEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var WorkerGlobalScope: {
    prototype: WorkerGlobalScope;
    new(): WorkerGlobalScope;
};

interface WorkerLocation {
    readonly hash: string;
    readonly host: string;
    readonly hostname: string;
    readonly href: string;
    readonly origin: string;
    readonly pathname: string;
    readonly port: string;
    readonly protocol: string;
    readonly search: string;
    toString(): string;
}

declare var WorkerLocation: {
    prototype: WorkerLocation;
    new(): WorkerLocation;
};

interface WorkerNavigator extends Object, NavigatorID, NavigatorOnLine, NavigatorBeacon, NavigatorConcurrentHardware {
    readonly hardwareConcurrency: number;
}

declare var WorkerNavigator: {
    prototype: WorkerNavigator;
    new(): WorkerNavigator;
};

interface WorkerUtils extends Object, WindowBase64 {
    readonly indexedDB: IDBFactory;
    readonly msIndexedDB: IDBFactory;
    readonly navigator: WorkerNavigator;
    clearImmediate(handle: number): void;
    clearInterval(handle: number): void;
    clearTimeout(handle: number): void;
    importScripts(...urls: string[]): void;
    setImmediate(handler: (...args: any[]) => void): number;
    setImmediate(handler: any, ...args: any[]): number;
    setInterval(handler: (...args: any[]) => void, timeout: number): number;
    setInterval(handler: any, timeout?: any, ...args: any[]): number;
    setTimeout(handler: (...args: any[]) => void, timeout: number): number;
    setTimeout(handler: any, timeout?: any, ...args: any[]): number;
}

interface BroadcastChannel extends EventTarget {
    readonly name: string;
    onmessage: (ev: MessageEvent) => any;
    onmessageerror: (ev: MessageEvent) => any;
    close(): void;
    postMessage(message: any): void;
    addEventListener<K extends keyof BroadcastChannelEventMap>(type: K, listener: (this: BroadcastChannel, ev: BroadcastChannelEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var BroadcastChannel: {
    prototype: BroadcastChannel;
    new(name: string): BroadcastChannel;
};

interface BroadcastChannelEventMap {
    message: MessageEvent;
    messageerror: MessageEvent;
}

interface ErrorEventInit {
    message?: string;
    filename?: string;
    lineno?: number;
    conlno?: number;
    error?: any;
}

interface ImageBitmapOptions {
    imageOrientation?: "none" | "flipY";
    premultiplyAlpha?: "none" | "premultiply" | "default";
    colorSpaceConversion?: "none" | "default";
    resizeWidth?: number;
    resizeHeight?: number;
    resizeQuality?: "pixelated" | "low" | "medium" | "high";
}

interface ImageBitmap {
    readonly width: number;
    readonly height: number;
    close(): void;
}

interface BlobPropertyBag {
    type?: string;
    endings?: string;
}

interface FilePropertyBag extends BlobPropertyBag {
    lastModified?: number;
}

interface EventListenerObject {
    handleEvent(evt: Event): void;
}

interface ProgressEventInit extends EventInit {
    lengthComputable?: boolean;
    loaded?: number;
    total?: number;
}

interface IDBArrayKey extends Array<IDBValidKey> {
}

interface EventListenerOptions {
    capture?: boolean;
}

interface AddEventListenerOptions extends EventListenerOptions {
    passive?: boolean;
    once?: boolean;
}

declare type EventListenerOrEventListenerObject = EventListener | EventListenerObject;

interface PositionCallback {
    (position: Position): void;
}
interface PositionErrorCallback {
    (positionError: PositionError): void;
}
interface FunctionStringCallback {
    (data: string): void;
}
interface NotificationPermissionCallback {
    (permission: NotificationPermission): void;
}
interface DecodeErrorCallback {
    (error: Error): void;
}
interface DecodeSuccessCallback {
    (decodedData: AudioBuffer): void;
}
declare var onmessage: (this: DedicatedWorkerGlobalScope, ev: MessageEvent) => any;
declare function close(): void;
declare function postMessage(message: any, transfer?: any[]): void;
declare var caches: CacheStorage;
declare var isSecureContext: boolean;
declare var location: WorkerLocation;
declare var onerror: (this: DedicatedWorkerGlobalScope, ev: ErrorEvent) => any;
declare var performance: Performance;
declare var self: WorkerGlobalScope;
declare function msWriteProfilerMark(profilerMarkName: string): void;
declare function createImageBitmap(image: ImageBitmap | ImageData | Blob, options?: ImageBitmapOptions): Promise<ImageBitmap>;
declare function createImageBitmap(image: ImageBitmap | ImageData | Blob, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;
declare function removeEventListener(type: string, listener?: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
declare function dispatchEvent(event: Event): boolean;
declare var indexedDB: IDBFactory;
declare var msIndexedDB: IDBFactory;
declare var navigator: WorkerNavigator;
declare function clearImmediate(handle: number): void;
declare function clearInterval(handle: number): void;
declare function clearTimeout(handle: number): void;
declare function importScripts(...urls: string[]): void;
declare function setImmediate(handler: (...args: any[]) => void): number;
declare function setImmediate(handler: any, ...args: any[]): number;
declare function setInterval(handler: (...args: any[]) => void, timeout: number): number;
declare function setInterval(handler: any, timeout?: any, ...args: any[]): number;
declare function setTimeout(handler: (...args: any[]) => void, timeout: number): number;
declare function setTimeout(handler: any, timeout?: any, ...args: any[]): number;
declare function removeEventListener(type: string, listener?: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
declare function dispatchEvent(event: Event): boolean;
declare function addEventListener<K extends keyof DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => any, useCapture?: boolean): void;
declare function addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
type BodyInit = any;
type RequestInfo = Request | string;
type AlgorithmIdentifier = any;
type IDBValidKey = number | string | Date | IDBArrayKey;
type FormDataEntryValue = string | File;
type MediaKeyStatus = "usable" | "expired" | "released" | "output-restricted" | "output-downscaled" | "status-pending" | "internal-error";
type RequestType = "" | "audio" | "font" | "image" | "script" | "style" | "track" | "video";
type RequestDestination = "" | "audio" | "document" | "embed" | "font" | "image" | "manifest" | "object" | "report" | "script" | "serviceworker" | "sharedworker" | "style" | "track" | "video" | "worker" | "xslt";
type RequestMode = "navigate" | "same-origin" | "no-cors" | "cors";
type RequestCredentials = "omit" | "same-origin" | "include";
type RequestCache = "default" | "no-store" | "reload" | "no-cache" | "force-cache" | "only-if-cached";
type RequestRedirect = "follow" | "error" | "manual";
type ResponseType = "basic" | "cors" | "default" | "error" | "opaque" | "opaqueredirect";
type IDBTransactionMode = "readonly" | "readwrite" | "versionchange";
type IDBRequestReadyState = "pending" | "done";
type IDBCursorDirection = "next" | "nextunique" | "prev" | "prevunique";
type NotificationPermission = "default" | "denied" | "granted";
type NotificationDirection = "auto" | "ltr" | "rtl";
type PushEncryptionKeyName = "p256dh" | "auth";
type PushPermissionState = "denied" | "granted" | "prompt";
type ServiceWorkerState = "installing" | "installed" | "activating" | "activated" | "redundant";
type XMLHttpRequestResponseType = "" | "arraybuffer" | "blob" | "document" | "json" | "text";
type ClientType = "window" | "worker" | "sharedworker" | "all";
type FrameType = "auxiliary" | "top-level" | "nested" | "none";