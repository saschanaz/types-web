
/////////////////////////////
/// Worker APIs
/////////////////////////////

interface AddEventListenerOptions extends EventListenerOptions {
    once?: boolean;
    passive?: boolean;
}

interface CacheQueryOptions {
    cacheName?: string;
    ignoreMethod?: boolean;
    ignoreSearch?: boolean;
    ignoreVary?: boolean;
}

interface ClientQueryOptions {
    includeReserved?: boolean;
    includeUncontrolled?: boolean;
    type?: ClientType;
}

interface CloseEventInit extends EventInit {
    code?: number;
    reason?: string;
    wasClean?: boolean;
}

interface CustomEventInit extends EventInit {
    detail?: any;
}

interface DOMMatrixInit {
    a?: number;
    b?: number;
    c?: number;
    d?: number;
    e?: number;
    f?: number;
    is2D?: boolean;
    m11?: number;
    m12?: number;
    m13?: number;
    m14?: number;
    m21?: number;
    m22?: number;
    m23?: number;
    m24?: number;
    m31?: number;
    m32?: number;
    m33?: number;
    m34?: number;
    m41?: number;
    m42?: number;
    m43?: number;
    m44?: number;
}

interface DOMPointInit {
    w?: number;
    x?: number;
    y?: number;
    z?: number;
}

interface DOMQuadInit {
    p1?: DOMPointInit;
    p2?: DOMPointInit;
    p3?: DOMPointInit;
    p4?: DOMPointInit;
}

interface DOMRectInit {
    height?: number;
    width?: number;
    x?: number;
    y?: number;
}

interface EventInit {
    scoped?: boolean;
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
}

interface EventListenerOptions {
    capture?: boolean;
}

interface EventSourceInit {
    withCredentials?: boolean;
}

interface ExtendableEventInit extends EventInit {
}

interface ExtendableMessageEventInit extends ExtendableEventInit {
    data?: any;
    lastEventId?: string;
    origin?: string;
    ports?: MessagePort[];
    source?: Client | ServiceWorker | MessagePort;
}

interface FetchEventInit extends ExtendableEventInit {
    clientId?: string;
    preloadResponse?: Promise<any>;
    request?: Request;
    reservedClientId?: string;
    targetClientId?: string;
}

interface ForeignFetchEventInit extends ExtendableEventInit {
    origin?: string;
    request?: Request;
}

interface ForeignFetchOptions {
    origins?: string[];
    scopes?: string[];
}

interface ForeignFetchResponse {
    headers?: string[];
    origin?: string;
    response?: Response;
}

interface GetNotificationOptions {
    tag?: string;
}

interface IDBIndexParameters {
    multiEntry?: boolean;
    unique?: boolean;
}

interface IDBObjectStoreParameters {
    autoIncrement?: boolean;
    keyPath?: string | string[];
}

interface IDBVersionChangeEventInit extends EventInit {
    newVersion?: number;
    oldVersion?: number;
}

interface ImageEncodeOptions {
    quality?: number;
    type?: string;
}

interface JsonWebKey {
    alg?: string;
    crv?: string;
    d?: string;
    dp?: string;
    dq?: string;
    e?: string;
    ext?: boolean;
    k?: string;
    key_ops?: string[];
    kty?: string;
    n?: string;
    oth?: RsaOtherPrimesInfo[];
    p?: string;
    q?: string;
    qi?: string;
    use?: string;
    x?: string;
    y?: string;
}

interface MessageEventInit extends EventInit {
    channel?: string;
    data?: any;
    lastEventId?: string;
    origin?: string;
    ports?: MessagePort[];
    source?: MessageEventSource;
}

interface NavigationPreloadState {
    enabled?: boolean;
    headerValue?: string;
}

interface NotificationAction {
    action?: string;
    icon?: string;
    title?: string;
}

interface NotificationEventInit extends ExtendableEventInit {
    action?: string;
    notification?: Notification;
}

interface NotificationOptions {
    actions?: NotificationAction[];
    badge?: string;
    body?: string;
    data?: any;
    dir?: NotificationDirection;
    icon?: string;
    image?: string;
    lang?: string;
    renotify?: boolean;
    requireInteraction?: boolean;
    silent?: boolean;
    sound?: string;
    tag?: string;
    timestamp?: number;
    vibrate?: any;
}

interface PerformanceObserverInit {
    entryTypes?: string[];
}

interface PromiseRejectionEventInit extends EventInit {
    promise?: Promise<any>;
    reason?: any;
}

interface PushEventInit extends ExtendableEventInit {
    data?: PushMessageDataInit;
}

interface PushSubscriptionChangeInit extends ExtendableEventInit {
    newSubscription?: PushSubscription;
    oldSubscription?: PushSubscription;
}

interface PushSubscriptionOptionsInit {
    applicationServerKey?: BufferSource | string;
    userVisibleOnly?: boolean;
}

interface RegistrationOptions {
    scope?: string;
    type?: WorkerType;
    useCache?: boolean;
}

interface RequestInit {
    body?: BodyInit;
    cache?: RequestCache;
    credentials?: RequestCredentials;
    headers?: HeadersInit;
    integrity?: string;
    keepalive?: boolean;
    method?: string;
    mode?: RequestMode;
    redirect?: RequestRedirect;
    referrer?: string;
    referrerPolicy?: ReferrerPolicy;
    window?: any;
}

interface ResponseInit {
    headers?: HeadersInit;
    status?: number;
    statusText?: string;
}

interface RsaOtherPrimesInfo {
    d?: string;
    r?: string;
    t?: string;
}

interface SyncEventInit extends ExtendableEventInit {
    lastChance?: boolean;
    tag?: string;
}

interface WorkerOptions {
    credentials?: RequestCredentials;
    name?: string;
    type?: WorkerType;
}

interface EventListener {
    (evt: Event): void;
}

interface NodeFilter {
    (evt: Event): void;
}

interface Blob {
    slice(start?: number, end?: number, contentType?: string): Blob;
}

declare var Blob: {
    prototype: Blob;
    new (blobParts?: any[], options?: BlobPropertyBag): Blob;
};

interface BroadcastChannelEventMap {
    "message": MessageEvent;
    "messageerror": MessageEvent;
}

interface BroadcastChannel extends EventTarget {
    close(): void;
    postMessage(message: any): void;
    addEventListener<K extends keyof BroadcastChannelEventMap>(type: K, listener: (this: BroadcastChannel, ev: BroadcastChannelEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var BroadcastChannel: {
    prototype: BroadcastChannel;
    new(name: string): BroadcastChannel;
};

interface Cache {
    add(request: RequestInfo): Promise<void>;
    addAll(requests: RequestInfo[]): Promise<void>;
    delete(request: RequestInfo, options?: CacheQueryOptions): Promise<boolean>;
    keys(request?: RequestInfo, options?: CacheQueryOptions): Promise<Request[]>;
    match(request: RequestInfo, options?: CacheQueryOptions): Promise<any>;
    matchAll(request?: RequestInfo, options?: CacheQueryOptions): Promise<Response[]>;
    put(request: RequestInfo, response: Response): Promise<void>;
}

declare var Cache: {
    prototype: Cache;
    new(): Cache;
};

interface CacheStorage {
    delete(cacheName: string): Promise<boolean>;
    has(cacheName: string): Promise<boolean>;
    keys(): Promise<string[]>;
    match(request: RequestInfo, options?: CacheQueryOptions): Promise<any>;
    open(cacheName: string): Promise<Cache>;
}

declare var CacheStorage: {
    prototype: CacheStorage;
    new(): CacheStorage;
};

interface CanvasGradient {
    addColorStop(offset: number, color: string): void;
}

declare var CanvasGradient: {
    prototype: CanvasGradient;
    new(): CanvasGradient;
};

interface CanvasPattern {
    setTransform(transform?: DOMMatrixInit): void;
}

declare var CanvasPattern: {
    prototype: CanvasPattern;
    new(): CanvasPattern;
};

interface Client {
    postMessage(message: any, transfer?: object[]): void;
}

declare var Client: {
    prototype: Client;
    new(): Client;
};

interface Clients {
    claim(): Promise<void>;
    get(id: string): Promise<any>;
    matchAll(options?: ClientQueryOptions): Promise<Client[]>;
    openWindow(url: string): any;
}

declare var Clients: {
    prototype: Clients;
    new(): Clients;
};

interface CloseEvent extends Event {
}

declare var CloseEvent: {
    prototype: CloseEvent;
    new(type: string, eventInitDict?: CloseEventInit): CloseEvent;
};

interface Crypto {
    getRandomValues(array: ArrayBufferView): ArrayBufferView;
}

declare var Crypto: {
    prototype: Crypto;
    new(): Crypto;
};

interface CryptoKey {
}

declare var CryptoKey: {
    prototype: CryptoKey;
    new(): CryptoKey;
};

interface CustomEvent extends Event {
    initCustomEvent(type: string, bubbles?: boolean, cancelable?: boolean, detail?: any): void;
}

declare var CustomEvent: {
    prototype: CustomEvent;
    new(type: string, eventInitDict?: CustomEventInit): CustomEvent;
};

interface DedicatedWorkerGlobalScopeEventMap extends WorkerGlobalScopeEventMap {
    "message": MessageEvent;
    "messageerror": MessageEvent;
}

interface DedicatedWorkerGlobalScope extends WorkerGlobalScope {
    close(): void;
    postMessage(message: any, transfer?: object[]): void;
    addEventListener<K extends keyof DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var DedicatedWorkerGlobalScope: {
    prototype: DedicatedWorkerGlobalScope;
    new(): DedicatedWorkerGlobalScope;
};

interface DOMMatrix extends DOMMatrixReadOnly {
    invertSelf(): DOMMatrix;
    multiplySelf(other?: DOMMatrixInit): DOMMatrix;
    preMultiplySelf(other?: DOMMatrixInit): DOMMatrix;
    rotateAxisAngleSelf(x?: number, y?: number, z?: number, angle?: number): DOMMatrix;
    rotateFromVectorSelf(x?: number, y?: number): DOMMatrix;
    rotateSelf(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
    scale3dSelf(scale?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    scaleSelf(scaleX?: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    setMatrixValue(transformList: string): DOMMatrix;
    skewXSelf(sx?: number): DOMMatrix;
    skewYSelf(sy?: number): DOMMatrix;
    translateSelf(tx?: number, ty?: number, tz?: number): DOMMatrix;
}

declare var DOMMatrix: {
    prototype: DOMMatrix;
    new(init?: string | number[]): DOMMatrix;
    fromFloat32Array(array32: Float32Array): DOMMatrix;
    fromFloat64Array(array64: Float64Array): DOMMatrix;
    fromMatrix(other?: DOMMatrixInit): DOMMatrix;
};

interface DOMMatrixReadOnly {
    flipX(): DOMMatrix;
    flipY(): DOMMatrix;
    inverse(): DOMMatrix;
    multiply(other?: DOMMatrixInit): DOMMatrix;
    rotate(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
    rotateAxisAngle(x?: number, y?: number, z?: number, angle?: number): DOMMatrix;
    rotateFromVector(x?: number, y?: number): DOMMatrix;
    scale(scaleX?: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    scale3d(scale?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    skewX(sx?: number): DOMMatrix;
    skewY(sy?: number): DOMMatrix;
    toFloat32Array(): Float32Array;
    toFloat64Array(): Float64Array;
    transformPoint(point?: DOMPointInit): DOMPoint;
    translate(tx?: number, ty?: number, tz?: number): DOMMatrix;
}

declare var DOMMatrixReadOnly: {
    prototype: DOMMatrixReadOnly;
    new(init?: string | number[]): DOMMatrixReadOnly;
    fromFloat32Array(array32: Float32Array): DOMMatrixReadOnly;
    fromFloat64Array(array64: Float64Array): DOMMatrixReadOnly;
    fromMatrix(other?: DOMMatrixInit): DOMMatrixReadOnly;
};

interface DOMPoint extends DOMPointReadOnly {
}

declare var DOMPoint: {
    prototype: DOMPoint;
    new(x?: number, y?: number, z?: number, w?: number): DOMPoint;
    fromPoint(other?: DOMPointInit): DOMPoint;
};

interface DOMPointReadOnly {
    matrixTransform(matrix?: DOMMatrixInit): DOMPoint;
}

declare var DOMPointReadOnly: {
    prototype: DOMPointReadOnly;
    new(x?: number, y?: number, z?: number, w?: number): DOMPointReadOnly;
    fromPoint(other?: DOMPointInit): DOMPointReadOnly;
};

interface DOMQuad {
    getBounds(): DOMRect;
}

declare var DOMQuad: {
    prototype: DOMQuad;
    new(p1?: DOMPointInit, p2?: DOMPointInit, p3?: DOMPointInit, p4?: DOMPointInit): DOMQuad;
    fromQuad(other?: DOMQuadInit): DOMQuad;
    fromRect(other?: DOMRectInit): DOMQuad;
};

interface DOMRect extends DOMRectReadOnly {
}

declare var DOMRect: {
    prototype: DOMRect;
    new(x?: number, y?: number, width?: number, height?: number): DOMRect;
    fromRect(other?: DOMRectInit): DOMRect;
};

interface DOMRectReadOnly {
}

declare var DOMRectReadOnly: {
    prototype: DOMRectReadOnly;
    new(x?: number, y?: number, width?: number, height?: number): DOMRectReadOnly;
    fromRect(other?: DOMRectInit): DOMRectReadOnly;
};

interface DOMStringList {
    contains(string: string): boolean;
    item(index: number): string | null;
    [index: number]: string;
}

declare var DOMStringList: {
    prototype: DOMStringList;
    new(): DOMStringList;
};

interface ErrorEvent extends Event {
}

declare var ErrorEvent: {
    prototype: ErrorEvent;
    new(type: string, errorEventInitDict?: ErrorEventInit): ErrorEvent;
};

interface Event {
    readonly scoped: boolean;
    composedPath(): EventTarget[];
    initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
    preventDefault(): void;
    stopImmediatePropagation(): void;
    stopPropagation(): void;
    deepPath(): EventTarget[];
    readonly AT_TARGET: number;
    readonly BUBBLING_PHASE: number;
    readonly CAPTURING_PHASE: number;
    readonly NONE: number;
}

declare var Event: {
    prototype: Event;
    new(type: string, eventInitDict?: EventInit): Event;
    readonly AT_TARGET: number;
    readonly BUBBLING_PHASE: number;
    readonly CAPTURING_PHASE: number;
    readonly NONE: number;
};

interface EventSourceEventMap {
    "error": Event;
    "message": MessageEvent;
    "open": Event;
}

interface EventSource extends EventTarget {
    close(): void;
    readonly CLOSED: number;
    readonly CONNECTING: number;
    readonly OPEN: number;
    addEventListener<K extends keyof EventSourceEventMap>(type: K, listener: (this: EventSource, ev: EventSourceEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var EventSource: {
    prototype: EventSource;
    new(url: string, eventSourceInitDict?: EventSourceInit): EventSource;
    readonly CLOSED: number;
    readonly CONNECTING: number;
    readonly OPEN: number;
};

interface EventTarget {
    addEventListener(type: string, listener?: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    dispatchEvent(event: Event): boolean;
    removeEventListener(type: string, listener?: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var EventTarget: {
    prototype: EventTarget;
    new(): EventTarget;
};

interface ExtendableEvent extends Event {
    waitUntil(f: Promise<any>): void;
}

declare var ExtendableEvent: {
    prototype: ExtendableEvent;
    new(type: string, eventInitDict?: ExtendableEventInit): ExtendableEvent;
};

interface ExtendableMessageEvent extends ExtendableEvent {
}

declare var ExtendableMessageEvent: {
    prototype: ExtendableMessageEvent;
    new(type: string, eventInitDict?: ExtendableMessageEventInit): ExtendableMessageEvent;
};

interface FetchEvent extends ExtendableEvent {
    respondWith(r: Promise<Response>): void;
}

declare var FetchEvent: {
    prototype: FetchEvent;
    new(type: string, eventInitDict: FetchEventInit): FetchEvent;
};

interface File extends Blob {
}

declare var File: {
    prototype: File;
    new (parts: (ArrayBuffer | ArrayBufferView | Blob | string)[], filename: string, properties?: FilePropertyBag): File;
};

interface FileList {
    item(index: number): File | null;
    [index: number]: File;
}

declare var FileList: {
    prototype: FileList;
    new(): FileList;
};

interface FileReaderEventMap {
    "abort": ProgressEvent;
    "error": ProgressEvent;
    "load": ProgressEvent;
    "loadend": ProgressEvent;
    "loadstart": ProgressEvent;
    "progress": ProgressEvent;
}

interface FileReader extends EventTarget {
    abort(): void;
    readAsArrayBuffer(blob: Blob): void;
    readAsBinaryString(blob: Blob): void;
    readAsDataURL(blob: Blob): void;
    readAsText(blob: Blob, label?: string): void;
    readonly DONE: number;
    readonly EMPTY: number;
    readonly LOADING: number;
    addEventListener<K extends keyof FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var FileReader: {
    prototype: FileReader;
    new(): FileReader;
    readonly DONE: number;
    readonly EMPTY: number;
    readonly LOADING: number;
};

interface FileReaderSync {
    readAsArrayBuffer(blob: Blob): ArrayBuffer;
    readAsBinaryString(blob: Blob): string;
    readAsDataURL(blob: Blob): string;
    readAsText(blob: Blob, label?: string): string;
}

declare var FileReaderSync: {
    prototype: FileReaderSync;
    new(): FileReaderSync;
};

interface ForeignFetchEvent extends ExtendableEvent {
    respondWith(r: Promise<ForeignFetchResponse>): void;
}

declare var ForeignFetchEvent: {
    prototype: ForeignFetchEvent;
    new(type: string, eventInitDict: ForeignFetchEventInit): ForeignFetchEvent;
};

interface FormData {
    append(name: string, value: string): void;
    append(name: string, blobValue: Blob, filename?: string): void;
    delete(name: string): void;
    get(name: string): FormDataEntryValue | null;
    getAll(name: string): FormDataEntryValue[];
    has(name: string): boolean;
    set(name: string, value: string): void;
    set(name: string, blobValue: Blob, filename?: string): void;
}

declare var FormData: {
    prototype: FormData;
    new(): FormData;
};

interface Headers {
    append(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string | null;
    has(name: string): boolean;
    set(name: string, value: string): void;
}

declare var Headers: {
    prototype: Headers;
    new(init?: HeadersInit): Headers;
};

interface IDBCursor {
    advance(count: number): void;
    continue(key?: IDBKeyRange | IDBValidKey): void;
    continuePrimaryKey(key: any, primaryKey: any): void;
    delete(): IDBRequest;
    update(value: any): IDBRequest;
}

declare var IDBCursor: {
    prototype: IDBCursor;
    new(): IDBCursor;
};

interface IDBCursorWithValue extends IDBCursor {
}

declare var IDBCursorWithValue: {
    prototype: IDBCursorWithValue;
    new(): IDBCursorWithValue;
};

interface IDBDatabaseEventMap {
    "abort": Event;
    "close": Event;
    "error": Event;
    "versionchange": IDBVersionChangeEvent;
}

interface IDBDatabase extends EventTarget {
    close(): void;
    createObjectStore(name: string, optionalParameters?: IDBObjectStoreParameters): IDBObjectStore;
    deleteObjectStore(name: string): void;
    transaction(storeNames: string | string[], mode?: IDBTransactionMode): IDBTransaction;
    addEventListener(type: "versionchange", listener: (ev: IDBVersionChangeEvent) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof IDBDatabaseEventMap>(type: K, listener: (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var IDBDatabase: {
    prototype: IDBDatabase;
    new(): IDBDatabase;
};

interface IDBFactory {
    cmp(first: any, second: any): number;
    deleteDatabase(name: string): IDBOpenDBRequest;
    open(name: string, version?: number): IDBOpenDBRequest;
}

declare var IDBFactory: {
    prototype: IDBFactory;
    new(): IDBFactory;
};

interface IDBIndex {
    count(key?: IDBKeyRange | IDBValidKey): IDBRequest;
    get(key: IDBKeyRange | IDBValidKey): IDBRequest;
    getAll(query?: any, count?: number): IDBRequest;
    getAllKeys(query?: any, count?: number): IDBRequest;
    getKey(key: IDBKeyRange | IDBValidKey): IDBRequest;
    openCursor(range?: IDBKeyRange | IDBValidKey, direction?: IDBCursorDirection): IDBRequest;
    openKeyCursor(range?: IDBKeyRange | IDBValidKey, direction?: IDBCursorDirection): IDBRequest;
}

declare var IDBIndex: {
    prototype: IDBIndex;
    new(): IDBIndex;
};

interface IDBKeyRange {
    includes(key: any): boolean;
}

declare var IDBKeyRange: {
    prototype: IDBKeyRange;
    new(): IDBKeyRange;
    bound(lower: any, upper: any, lowerOpen?: boolean, upperOpen?: boolean): IDBKeyRange;
    lowerBound(lower: any, open?: boolean): IDBKeyRange;
    only(value: any): IDBKeyRange;
    upperBound(upper: any, open?: boolean): IDBKeyRange;
};

interface IDBObjectStore {
    add(value: any, key?: IDBKeyRange | IDBValidKey): IDBRequest;
    clear(): IDBRequest;
    count(key?: IDBKeyRange | IDBValidKey): IDBRequest;
    createIndex(name: string, keyPath: string | string[], optionalParameters?: IDBIndexParameters): IDBIndex;
    delete(key: IDBKeyRange | IDBValidKey): IDBRequest;
    deleteIndex(name: string): void;
    get(query: any): IDBRequest;
    getAll(query?: any, count?: number): IDBRequest;
    getAllKeys(query?: any, count?: number): IDBRequest;
    getKey(query: any): IDBRequest;
    index(name: string): IDBIndex;
    openCursor(range?: IDBKeyRange | IDBValidKey, direction?: IDBCursorDirection): IDBRequest;
    openKeyCursor(query?: any, direction?: IDBCursorDirection): IDBRequest;
    put(value: any, key?: IDBKeyRange | IDBValidKey): IDBRequest;
}

declare var IDBObjectStore: {
    prototype: IDBObjectStore;
    new(): IDBObjectStore;
};

interface IDBOpenDBRequestEventMap extends IDBRequestEventMap {
    "blocked": Event;
    "upgradeneeded": IDBVersionChangeEvent;
}

interface IDBOpenDBRequest extends IDBRequest {
    addEventListener<K extends keyof IDBOpenDBRequestEventMap>(type: K, listener: (this: IDBOpenDBRequest, ev: IDBOpenDBRequestEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var IDBOpenDBRequest: {
    prototype: IDBOpenDBRequest;
    new(): IDBOpenDBRequest;
};

interface IDBRequestEventMap {
    "error": Event;
    "success": Event;
}

interface IDBRequest extends EventTarget {
    addEventListener<K extends keyof IDBRequestEventMap>(type: K, listener: (this: IDBRequest, ev: IDBRequestEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var IDBRequest: {
    prototype: IDBRequest;
    new(): IDBRequest;
};

interface IDBTransactionEventMap {
    "abort": Event;
    "complete": Event;
    "error": Event;
}

interface IDBTransaction extends EventTarget {
    abort(): void;
    objectStore(name: string): IDBObjectStore;
    addEventListener<K extends keyof IDBTransactionEventMap>(type: K, listener: (this: IDBTransaction, ev: IDBTransactionEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var IDBTransaction: {
    prototype: IDBTransaction;
    new(): IDBTransaction;
};

interface IDBVersionChangeEvent extends Event {
}

declare var IDBVersionChangeEvent: {
    prototype: IDBVersionChangeEvent;
    new(type: string, eventInitDict?: IDBVersionChangeEventInit): IDBVersionChangeEvent;
};

interface ImageBitmap {
    close(): void;
}

declare var ImageBitmap: {
    prototype: ImageBitmap;
    new(): ImageBitmap;
};

interface ImageData {
}

declare var ImageData: {
    prototype: ImageData;
    new(width: number, height: number): ImageData;
    new(array: Uint8ClampedArray, width: number, height: number): ImageData;
};

interface InstallEvent extends ExtendableEvent {
    registerForeignFetch(options: ForeignFetchOptions): void;
}

declare var InstallEvent: {
    prototype: InstallEvent;
    new(type: string, eventInitDict?: ExtendableEventInit): InstallEvent;
};

interface MessageChannel {
}

declare var MessageChannel: {
    prototype: MessageChannel;
    new(): MessageChannel;
};

interface MessageEvent extends Event {
    initMessageEvent(type: string, bubbles?: boolean, cancelable?: boolean, data?: any, origin?: string, lastEventId?: string, source?: MessageEventSource, ports?: MessagePort[]): void;
}

declare var MessageEvent: {
    prototype: MessageEvent;
    new(type: string, eventInitDict?: MessageEventInit): MessageEvent;
};

interface MessagePortEventMap {
    "message": MessageEvent;
    "messageerror": MessageEvent;
}

interface MessagePort extends EventTarget {
    close(): void;
    postMessage(message: any, transfer?: object[]): void;
    start(): void;
    addEventListener<K extends keyof MessagePortEventMap>(type: K, listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var MessagePort: {
    prototype: MessagePort;
    new(): MessagePort;
};

interface NavigationPreloadManager {
    disable(): Promise<void>;
    enable(): Promise<void>;
    getState(): Promise<NavigationPreloadState>;
    setHeaderValue(value: string): Promise<void>;
}

declare var NavigationPreloadManager: {
    prototype: NavigationPreloadManager;
    new(): NavigationPreloadManager;
};

interface NotificationEventMap {
    "click": Event;
    "error": Event;
}

interface Notification extends EventTarget {
    close(): void;
    addEventListener<K extends keyof NotificationEventMap>(type: K, listener: (this: Notification, ev: NotificationEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var Notification: {
    prototype: Notification;
    new(title: string, options?: NotificationOptions): Notification;
    requestPermission(deprecatedCallback?: NotificationPermissionCallback): Promise<NotificationPermission>;
};

interface NotificationEvent extends ExtendableEvent {
}

declare var NotificationEvent: {
    prototype: NotificationEvent;
    new(type: string, eventInitDict: NotificationEventInit): NotificationEvent;
};

interface OffscreenCanvas extends EventTarget {
    convertToBlob(options?: ImageEncodeOptions): Promise<Blob>;
    getContext(contextType: OffscreenRenderingContextType, ...arguments: any[]): OffscreenRenderingContext | null;
    transferToImageBitmap(): ImageBitmap;
}

declare var OffscreenCanvas: {
    prototype: OffscreenCanvas;
    new(width: number, height: number): OffscreenCanvas;
};

interface OffscreenCanvasRenderingContext2D extends CanvasState, CanvasTransform, CanvasCompositing, CanvasImageSmoothing, CanvasFillStrokeStyles, CanvasShadowStyles, CanvasFilters, CanvasRect, CanvasDrawPath, CanvasDrawImage, CanvasImageData, CanvasPathDrawingStyles, CanvasPath {
    commit(): void;
}

declare var OffscreenCanvasRenderingContext2D: {
    prototype: OffscreenCanvasRenderingContext2D;
    new(): OffscreenCanvasRenderingContext2D;
};

interface Path2D extends CanvasPath {
    addPath(path: Path2D, transform?: DOMMatrixInit): void;
}

declare var Path2D: {
    prototype: Path2D;
    new(): Path2D;
    new(path: Path2D): Path2D;
    new(paths: Path2D[], fillRule?: CanvasFillRule): Path2D;
    new(d: string): Path2D;
};

interface PerformanceEventMap {
    "resourcetimingbufferfull": Event;
}

interface Performance extends EventTarget {
    clearMarks(markName?: string): void;
    clearMeasures(measureName?: string): void;
    clearResourceTimings(): void;
    getEntries(): PerformanceEntryList;
    getEntriesByName(name: string, type?: string): PerformanceEntryList;
    getEntriesByType(type: string): PerformanceEntryList;
    mark(markName: string): void;
    measure(measureName: string, startMark?: string, endMark?: string): void;
    now(): number;
    setResourceTimingBufferSize(maxSize: number): void;
    addEventListener<K extends keyof PerformanceEventMap>(type: K, listener: (this: Performance, ev: PerformanceEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var Performance: {
    prototype: Performance;
    new(): Performance;
};

interface PerformanceEntry {
}

declare var PerformanceEntry: {
    prototype: PerformanceEntry;
    new(): PerformanceEntry;
};

interface PerformanceObserver {
    disconnect(): void;
    observe(options: PerformanceObserverInit): void;
}

declare var PerformanceObserver: {
    prototype: PerformanceObserver;
    new(callback: PerformanceObserverCallback): PerformanceObserver;
};

interface PerformanceObserverEntryList {
    getEntries(): PerformanceEntryList;
    getEntriesByName(name: string, type?: string): PerformanceEntryList;
    getEntriesByType(type: string): PerformanceEntryList;
}

declare var PerformanceObserverEntryList: {
    prototype: PerformanceObserverEntryList;
    new(): PerformanceObserverEntryList;
};

interface ProgressEvent extends Event {
}

declare var ProgressEvent: {
    prototype: ProgressEvent;
    new(type: string, eventInitDict?: ProgressEventInit): ProgressEvent;
};

interface PromiseRejectionEvent extends Event {
}

declare var PromiseRejectionEvent: {
    prototype: PromiseRejectionEvent;
    new(type: string, eventInitDict: PromiseRejectionEventInit): PromiseRejectionEvent;
};

interface PushEvent extends ExtendableEvent {
}

declare var PushEvent: {
    prototype: PushEvent;
    new(type: string, eventInitDict?: PushEventInit): PushEvent;
};

interface PushManager {
    getSubscription(): any;
    permissionState(options?: PushSubscriptionOptionsInit): Promise<PushPermissionState>;
    subscribe(options?: PushSubscriptionOptionsInit): Promise<PushSubscription>;
}

declare var PushManager: {
    prototype: PushManager;
    new(): PushManager;
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

interface PushSubscription {
    getKey(name: PushEncryptionKeyName): ArrayBuffer | null;
    unsubscribe(): Promise<boolean>;
}

declare var PushSubscription: {
    prototype: PushSubscription;
    new(): PushSubscription;
};

interface PushSubscriptionChangeEvent extends ExtendableEvent {
}

declare var PushSubscriptionChangeEvent: {
    prototype: PushSubscriptionChangeEvent;
    new(type: string, eventInitDict?: PushSubscriptionChangeInit): PushSubscriptionChangeEvent;
};

interface PushSubscriptionOptions {
}

declare var PushSubscriptionOptions: {
    prototype: PushSubscriptionOptions;
    new(): PushSubscriptionOptions;
};

interface ReadableStream {
    cancel(): Promise<void>;
    getReader(): ReadableStreamDefaultReader;
}

declare var ReadableStream: {
    prototype: ReadableStream;
    new(): ReadableStream;
};

interface ReadableStreamDefaultReader {
    cancel(): Promise<void>;
    read(): Promise<any>;
    releaseLock(): void;
}

declare var ReadableStreamDefaultReader: {
    prototype: ReadableStreamDefaultReader;
    new(stream: ReadableStream): ReadableStreamDefaultReader;
};

interface Request extends Body {
    clone(): Request;
}

declare var Request: {
    prototype: Request;
    new(input: RequestInfo, init?: RequestInit): Request;
};

interface Response extends Body {
    clone(): Response;
}

declare var Response: {
    prototype: Response;
    new(body?: BodyInit, init?: ResponseInit): Response;
    error(): Response;
    redirect(url: string, status?: number): Response;
};

interface ServiceWorkerEventMap extends AbstractWorkerEventMap {
    "statechange": Event;
}

interface ServiceWorker extends EventTarget, AbstractWorker {
    postMessage(message: any, transfer?: object[]): void;
    addEventListener<K extends keyof ServiceWorkerEventMap>(type: K, listener: (this: ServiceWorker, ev: ServiceWorkerEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var ServiceWorker: {
    prototype: ServiceWorker;
    new(): ServiceWorker;
};

interface ServiceWorkerContainerEventMap {
    "controllerchange": Event;
    "message": MessageEvent;
}

interface ServiceWorkerContainer extends EventTarget {
    getRegistration(clientURL?: string): Promise<any>;
    getRegistrations(): Promise<ServiceWorkerRegistration[]>;
    register(scriptURL: string, options?: RegistrationOptions): Promise<ServiceWorkerRegistration>;
    startMessages(): void;
    addEventListener<K extends keyof ServiceWorkerContainerEventMap>(type: K, listener: (this: ServiceWorkerContainer, ev: ServiceWorkerContainerEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var ServiceWorkerContainer: {
    prototype: ServiceWorkerContainer;
    new(): ServiceWorkerContainer;
};

interface ServiceWorkerGlobalScopeEventMap extends WorkerGlobalScopeEventMap {
    "activate": ExtendableEvent;
    "fetch": FetchEvent;
    "foreignfetch": FetchEvent;
    "install": InstallEvent;
    "message": ExtendableMessageEvent;
    "notificationclick": NotificationEvent;
    "notificationclose": NotificationEvent;
    "push": PushEvent;
    "pushsubscriptionchange": PushSubscriptionChangeEvent;
    "sync": SyncEvent;
}

interface ServiceWorkerGlobalScope extends WorkerGlobalScope {
    skipWaiting(): Promise<void>;
    addEventListener<K extends keyof ServiceWorkerGlobalScopeEventMap>(type: K, listener: (this: ServiceWorkerGlobalScope, ev: ServiceWorkerGlobalScopeEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var ServiceWorkerGlobalScope: {
    prototype: ServiceWorkerGlobalScope;
    new(): ServiceWorkerGlobalScope;
};

interface ServiceWorkerRegistrationEventMap {
    "updatefound": Event;
}

interface ServiceWorkerRegistration extends EventTarget {
    getNotifications(filter?: GetNotificationOptions): Promise<Notification[]>;
    showNotification(title: string, options?: NotificationOptions): Promise<void>;
    unregister(): Promise<boolean>;
    update(): Promise<void>;
    addEventListener<K extends keyof ServiceWorkerRegistrationEventMap>(type: K, listener: (this: ServiceWorkerRegistration, ev: ServiceWorkerRegistrationEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var ServiceWorkerRegistration: {
    prototype: ServiceWorkerRegistration;
    new(): ServiceWorkerRegistration;
};

interface SharedWorker extends EventTarget, AbstractWorker {
    addEventListener<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: SharedWorker, ev: AbstractWorkerEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SharedWorker: {
    prototype: SharedWorker;
    new(scriptURL: string, options?: string | WorkerOptions): SharedWorker;
};

interface SharedWorkerGlobalScopeEventMap extends WorkerGlobalScopeEventMap {
    "connect": MessageEvent;
}

interface SharedWorkerGlobalScope extends WorkerGlobalScope {
    close(): void;
    addEventListener<K extends keyof SharedWorkerGlobalScopeEventMap>(type: K, listener: (this: SharedWorkerGlobalScope, ev: SharedWorkerGlobalScopeEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SharedWorkerGlobalScope: {
    prototype: SharedWorkerGlobalScope;
    new(): SharedWorkerGlobalScope;
};

interface SubtleCrypto {
    decrypt(algorithm: AlgorithmIdentifier, key: CryptoKey, data: BufferSource): Promise<any>;
    deriveBits(algorithm: AlgorithmIdentifier, baseKey: CryptoKey, length: number): Promise<ArrayBuffer>;
    deriveKey(algorithm: AlgorithmIdentifier, baseKey: CryptoKey, derivedKeyType: AlgorithmIdentifier, extractable: boolean, keyUsages: KeyUsage[]): Promise<any>;
    digest(algorithm: AlgorithmIdentifier, data: BufferSource): Promise<any>;
    encrypt(algorithm: AlgorithmIdentifier, key: CryptoKey, data: BufferSource): Promise<any>;
    exportKey(format: KeyFormat, key: CryptoKey): Promise<any>;
    generateKey(algorithm: AlgorithmIdentifier, extractable: boolean, keyUsages: KeyUsage[]): Promise<any>;
    importKey(format: KeyFormat, keyData: BufferSource | JsonWebKey, algorithm: AlgorithmIdentifier, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    sign(algorithm: AlgorithmIdentifier, key: CryptoKey, data: BufferSource): Promise<any>;
    unwrapKey(format: KeyFormat, wrappedKey: BufferSource, unwrappingKey: CryptoKey, unwrapAlgorithm: AlgorithmIdentifier, unwrappedKeyAlgorithm: AlgorithmIdentifier, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    verify(algorithm: AlgorithmIdentifier, key: CryptoKey, signature: BufferSource, data: BufferSource): Promise<any>;
    wrapKey(format: KeyFormat, key: CryptoKey, wrappingKey: CryptoKey, wrapAlgorithm: AlgorithmIdentifier): Promise<any>;
}

declare var SubtleCrypto: {
    prototype: SubtleCrypto;
    new(): SubtleCrypto;
};

interface SyncEvent extends ExtendableEvent {
}

declare var SyncEvent: {
    prototype: SyncEvent;
    new(type: string, init: SyncEventInit): SyncEvent;
};

interface SyncManager {
    getTags(): Promise<string[]>;
    register(tag: string): Promise<void>;
}

declare var SyncManager: {
    prototype: SyncManager;
    new(): SyncManager;
};

interface URL {
    toJSON(): string;
}

declare var URL: {
    prototype: URL;
    new(url: string, base?: string): URL;
    createObjectURL(blob: Blob): string;
    createObjectURL(mediaSource: MediaSource): string;
    revokeObjectURL(url: string): void;
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
    new(init?: string[][] | { [key: string]: string } | string): URLSearchParams;
};

interface WebSocketEventMap {
    "close": CloseEvent;
    "error": Event;
    "message": MessageEvent;
    "open": Event;
}

interface WebSocket extends EventTarget {
    close(code?: number, reason?: string): void;
    send(data: string): void;
    send(data: Blob): void;
    send(data: ArrayBuffer): void;
    send(data: ArrayBufferView): void;
    readonly CLOSED: number;
    readonly CLOSING: number;
    readonly CONNECTING: number;
    readonly OPEN: number;
    addEventListener<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var WebSocket: {
    prototype: WebSocket;
    new(url: string, protocols?: string | string[]): WebSocket;
    readonly CLOSED: number;
    readonly CLOSING: number;
    readonly CONNECTING: number;
    readonly OPEN: number;
};

interface WindowClient extends Client {
    focus(): Promise<WindowClient>;
    navigate(url: string): Promise<WindowClient>;
}

declare var WindowClient: {
    prototype: WindowClient;
    new(): WindowClient;
};

interface WorkerEventMap extends AbstractWorkerEventMap {
    "message": MessageEvent;
    "messageerror": MessageEvent;
}

interface Worker extends EventTarget, AbstractWorker {
    postMessage(message: any, transfer?: object[]): void;
    terminate(): void;
    addEventListener<K extends keyof WorkerEventMap>(type: K, listener: (this: Worker, ev: WorkerEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var Worker: {
    prototype: Worker;
    new(scriptURL: string, options?: WorkerOptions): Worker;
};

interface WorkerGlobalScopeEventMap {
    "languagechange": Event;
    "offline": Event;
    "online": Event;
    "rejectionhandled": PromiseRejectionEvent;
    "unhandledrejection": PromiseRejectionEvent;
}

interface WorkerGlobalScope extends EventTarget, WindowOrWorkerGlobalScope, GlobalPerformance, GlobalCrypto {
    importScripts(...urls: string[]): void;
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
}

declare var WorkerLocation: {
    prototype: WorkerLocation;
    new(): WorkerLocation;
};

interface WorkerNavigator extends NavigatorID, NavigatorLanguage, NavigatorOnLine, NavigatorConcurrentHardware {
    readonly hardwareConcurrency: number;
}

declare var WorkerNavigator: {
    prototype: WorkerNavigator;
    new(): WorkerNavigator;
};

interface XMLHttpRequestEventMap extends XMLHttpRequestEventTargetEventMap {
    "readystatechange": Event;
}

interface XMLHttpRequest extends XMLHttpRequestEventTarget {
    msCaching?: string;
    abort(): void;
    getAllResponseHeaders(): string;
    getResponseHeader(name: string): string | null;
    open(method: string, url: string): void;
    open(method: string, url: string, async: boolean, username?: string, password?: string): void;
    overrideMimeType(mime: string): void;
    send(data?: string): void;
    send(data?: any): void;
    setRequestHeader(name: string, value: string): void;
    readonly DONE: number;
    readonly HEADERS_RECEIVED: number;
    readonly LOADING: number;
    readonly OPENED: number;
    readonly UNSENT: number;
    addEventListener<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var XMLHttpRequest: {
    prototype: XMLHttpRequest;
    new(): XMLHttpRequest;
    readonly DONE: number;
    readonly HEADERS_RECEIVED: number;
    readonly LOADING: number;
    readonly OPENED: number;
    readonly UNSENT: number;
};

interface XMLHttpRequestEventTargetEventMap {
    "abort": Event;
    "error": ErrorEvent;
    "load": Event;
    "loadend": Event;
    "loadstart": Event;
    "progress": ProgressEvent;
    "timeout": ProgressEvent;
}

interface XMLHttpRequestEventTarget extends EventTarget {
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

interface AbstractWorkerEventMap {
    "error": ErrorEvent;
}

interface AbstractWorker {
    addEventListener<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: AbstractWorker, ev: AbstractWorkerEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

interface Body {
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Blob>;
    formData(): Promise<FormData>;
    json(): Promise<any>;
    text(): Promise<string>;
}

interface CanvasCompositing {
}

interface CanvasDrawImage {
    drawImage(image: CanvasImageSource, dx: number, dy: number): void;
    drawImage(image: CanvasImageSource, dx: number, dy: number, dw: number, dh: number): void;
    drawImage(image: CanvasImageSource, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
}

interface CanvasDrawPath {
    beginPath(): void;
    clip(fillRule?: CanvasFillRule): void;
    clip(path: Path2D, fillRule?: CanvasFillRule): void;
    fill(path: Path2D, fillRule?: CanvasFillRule): void;
    fill(fillRule?: CanvasFillRule): void;
    isPointInPath(x: number, y: number, fillRule?: CanvasFillRule): boolean;
    isPointInPath(path: Path2D, x: number, y: number, fillRule?: CanvasFillRule): boolean;
    isPointInStroke(x: number, y: number): boolean;
    isPointInStroke(path: Path2D, x: number, y: number): boolean;
    resetClip(): void;
    stroke(): void;
    stroke(path: Path2D): void;
}

interface CanvasFillStrokeStyles {
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
    createPattern(image: CanvasImageSource, repetition: string): CanvasPattern | null;
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
}

interface CanvasFilters {
}

interface CanvasImageData {
    createImageData(sw: number, sh: number): ImageData;
    createImageData(imagedata: ImageData): ImageData;
    getImageData(sx: number, sy: number, sw: number, sh: number): ImageData;
    putImageData(imagedata: ImageData, dx: number, dy: number): void;
    putImageData(imagedata: ImageData, dx: number, dy: number, dirtyX: number, dirtyY: number, dirtyWidth: number, dirtyHeight: number): void;
}

interface CanvasImageSmoothing {
}

interface CanvasPath {
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, radiusX: number, radiusY: number, rotation: number): void;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    closePath(): void;
    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
    lineTo(x: number, y: number): void;
    moveTo(x: number, y: number): void;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    rect(x: number, y: number, w: number, h: number): void;
}

interface CanvasPathDrawingStyles {
    getLineDash(): number[];
    setLineDash(segments: number[]): void;
}

interface CanvasRect {
    clearRect(x: number, y: number, w: number, h: number): void;
    fillRect(x: number, y: number, w: number, h: number): void;
    strokeRect(x: number, y: number, w: number, h: number): void;
}

interface CanvasShadowStyles {
}

interface CanvasState {
    restore(): void;
    save(): void;
}

interface CanvasTransform {
    getTransform(): DOMMatrix;
    resetTransform(): void;
    rotate(angle: number): void;
    scale(x: number, y: number): void;
    setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    setTransform(transform?: DOMMatrixInit): void;
    transform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    translate(x: number, y: number): void;
}

interface GlobalCrypto {
}

interface GlobalPerformance {
}

interface NavigatorConcurrentHardware {
}

interface NavigatorID {
    taintEnabled(): boolean;
}

interface NavigatorLanguage {
}

interface NavigatorOnLine {
}

interface WindowOrWorkerGlobalScope {
    atob(data: string): string;
    btoa(data: string): string;
    clearInterval(handle?: number): void;
    clearTimeout(handle?: number): void;
    createImageBitmap(image: ImageBitmapSource, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    createImageBitmap(image: ImageBitmapSource, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
    setInterval(handler: (...args: any[]) => void, timeout: number): number;
    setInterval(handler: any, timeout?: any, ...args: any[]): number;
    setTimeout(handler: (...args: any[]) => void, timeout: number): number;
    setTimeout(handler: any, timeout?: any, ...args: any[]): number;
}

declare namespace console {
    function assert(condition?: boolean, ...data: any[]): void;
    function clear(): void;
    function count(label?: string): void;
    function debug(...data: any[]): void;
    function dir(item: any, options?: object): void;
    function dirxml(...data: any[]): void;
    function error(...data: any[]): void;
    function group(...data: any[]): void;
    function groupCollapsed(...data: any[]): void;
    function groupEnd(): void;
    function info(...data: any[]): void;
    function log(...data: any[]): void;
    function table(tabularData: any, properties?: string[]): void;
    function time(label?: string): void;
    function timeEnd(label?: string): void;
    function trace(...data: any[]): void;
    function warn(...data: any[]): void;
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

interface FilePropertyBag {
    type?: string;
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

interface DOMException extends Error {
    readonly name: string;
    readonly code: number;
    readonly INDEX_SIZE_ERR: number;
    readonly DOMSTRING_SIZE_ERR: number;
    readonly HIERARCHY_REQUEST_ERR: number;
    readonly WRONG_DOCUMENT_ERR: number;
    readonly INVALID_CHARACTER_ERR: number;
    readonly NO_DATA_ALLOWED_ERR: number;
    readonly NO_MODIFICATION_ALLOWED_ERR: number;
    readonly NOT_FOUND_ERR: number;
    readonly NOT_SUPPORTED_ERR: number;
    readonly INUSE_ATTRIBUTE_ERR: number;
    readonly INVALID_STATE_ERR: number;
    readonly SYNTAX_ERR: number;
    readonly INVALID_MODIFICATION_ERR: number;
    readonly NAMESPACE_ERR: number;
    readonly INVALID_ACCESS_ERR: number;
    readonly VALIDATION_ERR: number;
    readonly TYPE_MISMATCH_ERR: number;
    readonly SECURITY_ERR: number;
    readonly NETWORK_ERR: number;
    readonly ABORT_ERR: number;
    readonly URL_MISMATCH_ERR: number;
    readonly QUOTA_EXCEEDED_ERR: number;
    readonly TIMEOUT_ERR: number;
    readonly INVALID_NODE_TYPE_ERR: number;
    readonly DATA_CLONE_ERR: number;
}

declare var DOMException: {
    prototype: DOMException;
    new (message?: string, name?: string): DOMException;
    readonly INDEX_SIZE_ERR: number;
    readonly DOMSTRING_SIZE_ERR: number;
    readonly HIERARCHY_REQUEST_ERR: number;
    readonly WRONG_DOCUMENT_ERR: number;
    readonly INVALID_CHARACTER_ERR: number;
    readonly NO_DATA_ALLOWED_ERR: number;
    readonly NO_MODIFICATION_ALLOWED_ERR: number;
    readonly NOT_FOUND_ERR: number;
    readonly NOT_SUPPORTED_ERR: number;
    readonly INUSE_ATTRIBUTE_ERR: number;
    readonly INVALID_STATE_ERR: number;
    readonly SYNTAX_ERR: number;
    readonly INVALID_MODIFICATION_ERR: number;
    readonly NAMESPACE_ERR: number;
    readonly INVALID_ACCESS_ERR: number;
    readonly VALIDATION_ERR: number;
    readonly TYPE_MISMATCH_ERR: number;
    readonly SECURITY_ERR: number;
    readonly NETWORK_ERR: number;
    readonly ABORT_ERR: number;
    readonly URL_MISMATCH_ERR: number;
    readonly QUOTA_EXCEEDED_ERR: number;
    readonly TIMEOUT_ERR: number;
    readonly INVALID_NODE_TYPE_ERR: number;
    readonly DATA_CLONE_ERR: number;
};

declare type EventListenerOrEventListenerObject = EventListener | EventListenerObject;

interface NotificationPermissionCallback {
    (permission: NotificationPermission): void;
}
interface PerformanceObserverCallback {
    (entries: PerformanceObserverEntryList, observer: PerformanceObserver): void;
}
declare function close(): void;
declare function postMessage(message: any, transfer?: object[]): void;
declare function importScripts(...urls: string[]): void;
declare function createImageBitmap(image: ImageBitmap | ImageData | Blob, options?: ImageBitmapOptions): Promise<ImageBitmap>;
declare function createImageBitmap(image: ImageBitmap | ImageData | Blob, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;
declare function dispatchEvent(event: Event): boolean;
declare function removeEventListener(type: string, listener?: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
declare function atob(data: string): string;
declare function btoa(data: string): string;
declare function clearInterval(handle?: number): void;
declare function clearTimeout(handle?: number): void;
declare function createImageBitmap(image: ImageBitmapSource, options?: ImageBitmapOptions): Promise<ImageBitmap>;
declare function createImageBitmap(image: ImageBitmapSource, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;
declare function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
declare function setInterval(handler: (...args: any[]) => void, timeout: number): number;
declare function setInterval(handler: any, timeout?: any, ...args: any[]): number;
declare function setTimeout(handler: (...args: any[]) => void, timeout: number): number;
declare function setTimeout(handler: any, timeout?: any, ...args: any[]): number;
declare function dispatchEvent(event: Event): boolean;
declare function removeEventListener(type: string, listener?: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
declare function addEventListener<K extends keyof DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => any, useCapture?: boolean): void;
declare function addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
type AlgorithmIdentifier = object | string;
type BodyInit = Blob | BufferSource | FormData | URLSearchParams | ReadableStream | string;
type BufferSource = ArrayBufferView | ArrayBuffer;
type CanvasImageSource = HTMLOrSVGImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | OffscreenCanvas;
type FormDataEntryValue = File | string;
type HeadersInit = string[][] | { [key: string]: string };
type ImageBitmapSource = CanvasImageSource | Blob | ImageData;
type MessageEventSource = never | MessagePort | ServiceWorker;
type OffscreenRenderingContext = OffscreenCanvasRenderingContext2D | never;
type PerformanceEntryList = PerformanceEntry[];
type PushMessageDataInit = BufferSource | string;
type RequestInfo = Request | string;
type IDBValidKey = number | string | Date | IDBArrayKey;
type CanvasFillRule = "nonzero" | "evenodd";
type ClientType = "window" | "worker" | "sharedworker" | "all";
type IDBCursorDirection = "next" | "nextunique" | "prev" | "prevunique";
type IDBTransactionMode = "readonly" | "readwrite" | "versionchange";
type KeyFormat = "raw" | "spki" | "pkcs8" | "jwk";
type KeyUsage = "encrypt" | "decrypt" | "sign" | "verify" | "deriveKey" | "deriveBits" | "wrapKey" | "unwrapKey";
type NotificationDirection = "auto" | "ltr" | "rtl";
type NotificationPermission = "default" | "denied" | "granted";
type OffscreenRenderingContextType = "2d" | "webgl";
type PushEncryptionKeyName = "p256dh" | "auth";
type PushPermissionState = "denied" | "granted" | "prompt";
type ReferrerPolicy = "" | "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
type RequestCache = "default" | "no-store" | "reload" | "no-cache" | "force-cache" | "only-if-cached";
type RequestCredentials = "omit" | "same-origin" | "include";
type RequestMode = "navigate" | "same-origin" | "no-cors" | "cors";
type RequestRedirect = "follow" | "error" | "manual";
type WorkerType = "classic" | "module";