
/////////////////////////////
/// DOM APIs
/////////////////////////////

interface ClipboardEventInit extends EventInit {
    clipboardData?: DataTransfer;
}

interface AnimationEventInit extends EventInit {
    animationName?: string;
    elapsedTime?: number;
    pseudoElement?: string;
}

interface TransitionEventInit extends EventInit {
    propertyName?: string;
    elapsedTime?: number;
    pseudoElement?: string;
}

interface ScrollOptions {
    behavior?: ScrollBehavior;
}

interface ScrollToOptions extends ScrollOptions {
    left?: number;
    top?: number;
}

interface MediaQueryListEventInit extends EventInit {
    media?: string;
    matches?: boolean;
}

interface ScrollIntoViewOptions extends ScrollOptions {
    block?: ScrollLogicalPosition;
    inline?: ScrollLogicalPosition;
}

interface MouseEventInit {
    screenX?: number;
    screenY?: number;
    clientX?: number;
    clientY?: number;
}

interface BoxQuadOptions {
    box?: CSSBoxType;
    relativeTo?: GeometryNode;
}

interface ConvertCoordinateOptions {
    fromBox?: CSSBoxType;
    toBox?: CSSBoxType;
}

interface DeviceOrientationEventInit extends EventInit {
    alpha?: number;
    beta?: number;
    gamma?: number;
    absolute?: boolean;
}

interface DeviceAccelerationInit {
    x?: number;
    y?: number;
    z?: number;
}

interface DeviceRotationRateInit {
    alpha?: number;
    beta?: number;
    gamma?: number;
}

interface DeviceMotionEventInit extends EventInit {
    acceleration?: DeviceAccelerationInit;
    accelerationIncludingGravity?: DeviceAccelerationInit;
    rotationRate?: DeviceRotationRateInit;
    interval?: number;
}

interface EventInit {
    scoped?: boolean;
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
}

interface CustomEventInit extends EventInit {
    detail?: any;
}

interface EventListenerOptions {
    capture?: boolean;
}

interface AddEventListenerOptions extends EventListenerOptions {
    passive?: boolean;
    once?: boolean;
}

interface MutationObserverInit {
    childList?: boolean;
    attributes?: boolean;
    characterData?: boolean;
    subtree?: boolean;
    attributeOldValue?: boolean;
    characterDataOldValue?: boolean;
    attributeFilter?: string[];
}

interface GetRootNodeOptions {
    composed?: boolean;
}

interface ElementCreationOptions {
    is?: string;
}

interface ShadowRootInit {
    mode?: ShadowRootMode;
}

interface MediaKeySystemConfiguration {
    label?: string;
    initDataTypes?: string[];
    audioCapabilities?: MediaKeySystemMediaCapability[];
    videoCapabilities?: MediaKeySystemMediaCapability[];
    distinctiveIdentifier?: MediaKeysRequirement;
    persistentState?: MediaKeysRequirement;
    sessionTypes?: string[];
}

interface MediaKeySystemMediaCapability {
    contentType?: string;
    robustness?: string;
}

interface MediaKeyMessageEventInit extends EventInit {
    messageType?: MediaKeyMessageType;
    message?: ArrayBuffer;
}

interface MediaEncryptedEventInit extends EventInit {
    initDataType?: string;
    initData?: ArrayBuffer;
}

interface RequestInit {
    method?: any;
    headers?: HeadersInit;
    body?: BodyInit;
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

interface BlobPropertyBag {
    type?: string;
}

interface FilePropertyBag {
    type?: string;
    lastModified?: number;
}

interface GamepadEventInit extends EventInit {
    gamepad?: Gamepad;
}

interface SensorOptions {
    frequency?: number;
}

interface SensorErrorEventInit extends EventInit {
    error?: any;
}

interface PositionOptions {
    enableHighAccuracy?: boolean;
    timeout?: number;
    maximumAge?: number;
}

interface DOMPointInit {
    x?: number;
    y?: number;
    z?: number;
    w?: number;
}

interface DOMRectInit {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
}

interface DOMQuadInit {
    p1?: DOMPointInit;
    p2?: DOMPointInit;
    p3?: DOMPointInit;
    p4?: DOMPointInit;
}

interface DOMMatrixInit {
    a?: number;
    b?: number;
    c?: number;
    d?: number;
    e?: number;
    f?: number;
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
    is2D?: boolean;
}

interface TrackEventInit extends EventInit {
    track?: VideoTrack | AudioTrack | TextTrack;
}

interface RelatedEventInit extends EventInit {
    relatedTarget?: EventTarget;
}

interface AssignedNodesOptions {
    flatten?: boolean;
}

interface CanvasRenderingContext2DSettings {
    alpha?: boolean;
}

interface ImageBitmapRenderingContextSettings {
    alpha?: boolean;
}

interface ImageEncodeOptions {
    type?: string;
    quality?: number;
}

interface ElementDefinitionOptions {
    extends?: string;
}

interface DragEventInit extends MouseEventInit {
    dataTransfer?: DataTransfer;
}

interface PopStateEventInit extends EventInit {
    state?: any;
}

interface HashChangeEventInit extends EventInit {
    oldURL?: string;
    newURL?: string;
}

interface PageTransitionEventInit extends EventInit {
    persisted?: boolean;
}

interface ErrorEventInit extends EventInit {
    message?: string;
    filename?: string;
    lineno?: number;
    colno?: number;
    error?: any;
}

interface PromiseRejectionEventInit extends EventInit {
    promise?: Promise<any>;
    reason?: any;
}

interface ImageBitmapOptions {
    imageOrientation?: ImageOrientation;
    premultiplyAlpha?: PremultiplyAlpha;
    colorSpaceConversion?: ColorSpaceConversion;
    resizeWidth?: number;
    resizeHeight?: number;
    resizeQuality?: ResizeQuality;
}

interface MessageEventInit extends EventInit {
    channel?: string;
    data?: any;
    origin?: string;
    lastEventId?: string;
    source?: MessageEventSource;
    ports?: MessagePort[];
}

interface EventSourceInit {
    withCredentials?: boolean;
}

interface CloseEventInit extends EventInit {
    wasClean?: boolean;
    code?: number;
    reason?: string;
}

interface WorkerOptions {
    type?: WorkerType;
    credentials?: RequestCredentials;
}

interface StorageEventInit extends EventInit {
    key?: string;
    oldValue?: string;
    newValue?: string;
    url?: string;
    storageArea?: Storage;
}

interface RTCStats {
    timestamp?: number;
    type?: RTCStatsType;
    id?: string;
}

interface RTCRTPStreamStats extends RTCStats {
    ssrc?: string;
    associateStatsId?: string;
    isRemote?: boolean;
    mediaType?: string;
    mediaTrackId?: string;
    transportId?: string;
    codecId?: string;
    firCount?: number;
    pliCount?: number;
    nackCount?: number;
    sliCount?: number;
    qpSum?: number;
}

interface RTCCodecStats extends RTCStats {
    payloadType?: number;
    codec?: string;
    clockRate?: number;
    channels?: number;
    parameters?: string;
    implementation?: string;
}

interface RTCInboundRTPStreamStats extends RTCRTPStreamStats {
    packetsReceived?: number;
    bytesReceived?: number;
    packetsLost?: number;
    jitter?: number;
    fractionLost?: number;
    packetsDiscarded?: number;
    packetsRepaired?: number;
    burstPacketsLost?: number;
    burstPacketsDiscarded?: number;
    burstLossCount?: number;
    burstDiscardCount?: number;
    burstLossRate?: number;
    burstDiscardRate?: number;
    gapLossRate?: number;
    gapDiscardRate?: number;
    framesDecoded?: number;
}

interface RTCOutboundRTPStreamStats extends RTCRTPStreamStats {
    packetsSent?: number;
    bytesSent?: number;
    targetBitrate?: number;
    roundTripTime?: number;
    framesEncoded?: number;
}

interface RTCPeerConnectionStats extends RTCStats {
    dataChannelsOpened?: number;
    dataChannelsClosed?: number;
}

interface RTCMediaStreamStats extends RTCStats {
    streamIdentifier?: string;
    trackIds?: string[];
}

interface RTCMediaStreamTrackStats extends RTCStats {
    trackIdentifier?: string;
    remoteSource?: boolean;
    ended?: boolean;
    detached?: boolean;
    ssrcIds?: string[];
    frameWidth?: number;
    frameHeight?: number;
    framesPerSecond?: number;
    framesSent?: number;
    framesReceived?: number;
    framesDecoded?: number;
    framesDropped?: number;
    framesCorrupted?: number;
    partialFramesLost?: number;
    fullFramesLost?: number;
    audioLevel?: number;
    echoReturnLoss?: number;
    echoReturnLossEnhancement?: number;
}

interface RTCDataChannelStats extends RTCStats {
    label?: string;
    protocol?: string;
    datachannelid?: number;
    state?: RTCDataChannelState;
    messagesSent?: number;
    bytesSent?: number;
    messagesReceived?: number;
    bytesReceived?: number;
}

interface RTCTransportStats extends RTCStats {
    bytesSent?: number;
    bytesReceived?: number;
    rtcpTransportStatsId?: string;
    activeConnection?: boolean;
    selectedCandidatePairId?: string;
    localCertificateId?: string;
    remoteCertificateId?: string;
}

interface RTCIceCandidateStats extends RTCStats {
    transportId?: string;
    isRemote?: boolean;
    ip?: string;
    port?: number;
    protocol?: string;
    candidateType?: RTCIceCandidateType;
    priority?: number;
    url?: string;
    deleted?: boolean;
}

interface RTCIceCandidatePairStats extends RTCStats {
    transportId?: string;
    localCandidateId?: string;
    remoteCandidateId?: string;
    state?: RTCStatsIceCandidatePairState;
    priority?: number;
    nominated?: boolean;
    writable?: boolean;
    readable?: boolean;
    bytesSent?: number;
    bytesReceived?: number;
    totalRoundTripTime?: number;
    currentRoundTripTime?: number;
    availableOutgoingBitrate?: number;
    availableIncomingBitrate?: number;
    requestsReceived?: number;
    requestsSent?: number;
    responsesReceived?: number;
    responsesSent?: number;
    retransmissionsReceived?: number;
    retransmissionsSent?: number;
    consentRequestsReceived?: number;
    consentRequestsSent?: number;
    consentResponsesReceived?: number;
    consentResponsesSent?: number;
}

interface RTCCertificateStats extends RTCStats {
    fingerprint?: string;
    fingerprintAlgorithm?: string;
    base64Certificate?: string;
    issuerCertificateId?: string;
}

interface IDBObjectStoreParameters {
    keyPath?: string | string[];
    autoIncrement?: boolean;
}

interface IDBIndexParameters {
    unique?: boolean;
    multiEntry?: boolean;
}

interface IDBVersionChangeEventInit extends EventInit {
    oldVersion?: number;
    newVersion?: number;
}

interface IntersectionObserverEntryInit {
    time?: number;
    rootBounds?: DOMRectInit;
    boundingClientRect?: DOMRectInit;
    intersectionRect?: DOMRectInit;
    isIntersecting?: boolean;
    intersectionRatio?: number;
    target?: Element;
}

interface IntersectionObserverInit {
    root?: Element;
    rootMargin?: string;
    threshold?: number | number[];
}

interface MediaTrackSupportedConstraints {
    width?: boolean;
    height?: boolean;
    aspectRatio?: boolean;
    frameRate?: boolean;
    facingMode?: boolean;
    volume?: boolean;
    sampleRate?: boolean;
    sampleSize?: boolean;
    echoCancellation?: boolean;
    latency?: boolean;
    channelCount?: boolean;
    deviceId?: boolean;
    groupId?: boolean;
}

interface MediaTrackCapabilities {
    width?: LongRange;
    height?: LongRange;
    aspectRatio?: DoubleRange;
    frameRate?: DoubleRange;
    facingMode?: string[];
    volume?: DoubleRange;
    sampleRate?: LongRange;
    sampleSize?: LongRange;
    echoCancellation?: boolean[];
    latency?: DoubleRange;
    channelCount?: LongRange;
    deviceId?: string;
    groupId?: string;
}

interface MediaTrackConstraints extends MediaTrackConstraintSet {
    advanced?: MediaTrackConstraintSet[];
}

interface MediaTrackConstraintSet {
    width?: ConstrainLong;
    height?: ConstrainLong;
    aspectRatio?: ConstrainDouble;
    frameRate?: ConstrainDouble;
    facingMode?: ConstrainDOMString;
    volume?: ConstrainDouble;
    sampleRate?: ConstrainLong;
    sampleSize?: ConstrainLong;
    echoCancellation?: ConstrainBoolean;
    latency?: ConstrainDouble;
    channelCount?: ConstrainLong;
    deviceId?: ConstrainDOMString;
    groupId?: ConstrainDOMString;
}

interface MediaTrackSettings {
    width?: number;
    height?: number;
    aspectRatio?: number;
    frameRate?: number;
    facingMode?: string;
    volume?: number;
    sampleRate?: number;
    sampleSize?: number;
    echoCancellation?: boolean;
    latency?: number;
    channelCount?: number;
    deviceId?: string;
    groupId?: string;
}

interface MediaStreamTrackEventInit extends EventInit {
    track?: MediaStreamTrack;
}

interface OverconstrainedErrorEventInit extends EventInit {
    error?: any;
}

interface MediaStreamConstraints {
    video?: boolean | MediaTrackConstraints;
    audio?: boolean | MediaTrackConstraints;
}

interface DoubleRange {
    max?: number;
    min?: number;
}

interface ConstrainDoubleRange extends DoubleRange {
    exact?: number;
    ideal?: number;
}

interface LongRange {
    max?: number;
    min?: number;
}

interface ConstrainLongRange extends LongRange {
    exact?: number;
    ideal?: number;
}

interface ConstrainBooleanParameters {
    exact?: boolean;
    ideal?: boolean;
}

interface ConstrainDOMStringParameters {
    exact?: string | string[];
    ideal?: string | string[];
}

interface Capabilities {
}

interface Settings {
}

interface ConstraintSet {
}

interface Constraints extends ConstraintSet {
    advanced?: ConstraintSet[];
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

interface NotificationAction {
    action?: string;
    title?: string;
    icon?: string;
}

interface GetNotificationOptions {
    tag?: string;
}

interface NotificationEventInit extends ExtendableEventInit {
    notification?: Notification;
    action?: string;
}

interface PaymentMethodData {
    supportedMethods?: string[];
    data?: any;
}

interface PaymentCurrencyAmount {
    currency?: string;
    value?: string;
    currencySystem?: string;
}

interface PaymentDetailsBase {
    displayItems?: PaymentItem[];
    shippingOptions?: PaymentShippingOption[];
    modifiers?: PaymentDetailsModifier[];
}

interface PaymentDetailsInit extends PaymentDetailsBase {
    id?: string;
    total?: PaymentItem;
}

interface PaymentDetailsUpdate extends PaymentDetailsBase {
    error?: string;
    total?: PaymentItem;
}

interface PaymentDetailsModifier {
    supportedMethods?: string[];
    total?: PaymentItem;
    additionalDisplayItems?: PaymentItem[];
    data?: any;
}

interface PaymentOptions {
    requestPayerName?: boolean;
    requestPayerEmail?: boolean;
    requestPayerPhone?: boolean;
    requestShipping?: boolean;
    shippingType?: PaymentShippingType;
}

interface PaymentItem {
    label?: string;
    amount?: PaymentCurrencyAmount;
    pending?: boolean;
}

interface PaymentShippingOption {
    id?: string;
    label?: string;
    amount?: PaymentCurrencyAmount;
    selected?: boolean;
}

interface PaymentRequestUpdateEventInit extends EventInit {
}

interface PerformanceObserverInit {
    entryTypes?: string[];
}

interface PointerEventInit extends MouseEventInit {
    pointerId?: number;
    width?: number;
    height?: number;
    pressure?: number;
    tiltX?: number;
    tiltY?: number;
    pointerType?: string;
    isPrimary?: boolean;
}

interface PushSubscriptionOptionsInit {
    userVisibleOnly?: boolean;
    applicationServerKey?: BufferSource | string;
}

interface PushEventInit extends ExtendableEventInit {
    data?: PushMessageDataInit;
}

interface PushSubscriptionChangeInit extends ExtendableEventInit {
    newSubscription?: PushSubscription;
    oldSubscription?: PushSubscription;
}

interface RegistrationOptions {
    scope?: string;
    type?: WorkerType;
    useCache?: boolean;
}

interface NavigationPreloadState {
    enabled?: boolean;
    headerValue?: any;
}

interface ClientQueryOptions {
    includeUncontrolled?: boolean;
    includeReserved?: boolean;
    type?: ClientType;
}

interface ExtendableEventInit extends EventInit {
}

interface ForeignFetchOptions {
    scopes?: string[];
    origins?: string[];
}

interface FetchEventInit extends ExtendableEventInit {
    request?: Request;
    preloadResponse?: Promise<any>;
    clientId?: string;
    reservedClientId?: string;
    targetClientId?: string;
}

interface ForeignFetchEventInit extends ExtendableEventInit {
    request?: Request;
    origin?: string;
}

interface ForeignFetchResponse {
    response?: Response;
    origin?: string;
    headers?: any[];
}

interface ExtendableMessageEventInit extends ExtendableEventInit {
    data?: any;
    origin?: string;
    lastEventId?: string;
    source?: Client | ServiceWorker | MessagePort;
    ports?: MessagePort[];
}

interface CacheQueryOptions {
    ignoreSearch?: boolean;
    ignoreMethod?: boolean;
    ignoreVary?: boolean;
    cacheName?: string;
}

interface CacheBatchOperation {
    type?: string;
    request?: Request;
    response?: Response;
    options?: CacheQueryOptions;
}

interface SVGBoundingBoxOptions {
    fill?: boolean;
    stroke?: boolean;
    markers?: boolean;
    clipped?: boolean;
}

interface TouchInit {
    identifier?: number;
    target?: EventTarget;
    clientX?: number;
    clientY?: number;
    screenX?: number;
    screenY?: number;
    pageX?: number;
    pageY?: number;
    radiusX?: number;
    radiusY?: number;
    rotationAngle?: number;
    force?: number;
}

interface TouchEventInit extends EventModifierInit {
    touches?: Touch[];
    targetTouches?: Touch[];
    changedTouches?: Touch[];
}

interface UIEventInit extends EventInit {
    view?: Window;
    detail?: number;
}

interface FocusEventInit extends UIEventInit {
    relatedTarget?: EventTarget;
}

interface MouseEventInit extends EventModifierInit {
    screenX?: number;
    screenY?: number;
    clientX?: number;
    clientY?: number;
    button?: number;
    buttons?: number;
    relatedTarget?: EventTarget;
}

interface EventModifierInit extends UIEventInit {
    ctrlKey?: boolean;
    shiftKey?: boolean;
    altKey?: boolean;
    metaKey?: boolean;
    modifierAltGraph?: boolean;
    modifierCapsLock?: boolean;
    modifierFn?: boolean;
    modifierFnLock?: boolean;
    modifierHyper?: boolean;
    modifierNumLock?: boolean;
    modifierScrollLock?: boolean;
    modifierSuper?: boolean;
    modifierSymbol?: boolean;
    modifierSymbolLock?: boolean;
}

interface WheelEventInit extends MouseEventInit {
    deltaX?: number;
    deltaY?: number;
    deltaZ?: number;
    deltaMode?: number;
}

interface InputEventInit extends UIEventInit {
    data?: string;
    isComposing?: boolean;
}

interface KeyboardEventInit extends EventModifierInit {
    key?: string;
    code?: string;
    location?: number;
    repeat?: boolean;
    isComposing?: boolean;
}

interface CompositionEventInit extends UIEventInit {
    data?: string;
}

interface DocumentTimelineOptions {
    originTime?: number;
}

interface AnimationEffectTimingProperties {
    delay?: number;
    endDelay?: number;
    fill?: FillMode;
    iterationStart?: number;
    iterations?: number;
    duration?: number | string;
    direction?: PlaybackDirection;
    easing?: string;
}

interface ComputedTimingProperties extends AnimationEffectTimingProperties {
    endTime?: number;
    activeDuration?: number;
    localTime?: number;
    progress?: number;
    currentIteration?: number;
}

interface BaseComputedKeyframe {
    offset?: number;
    computedOffset?: number;
    easing?: string;
    composite?: CompositeOperation;
}

interface BasePropertyIndexedKeyframe {
    easing?: string;
    composite?: CompositeOperation;
}

interface BaseKeyframe {
    offset?: number;
    easing?: string;
    composite?: CompositeOperation;
}

interface KeyframeEffectOptions extends AnimationEffectTimingProperties {
    iterationComposite?: IterationCompositeOperation;
    composite?: CompositeOperation;
    spacing?: string;
}

interface KeyframeAnimationOptions extends KeyframeEffectOptions {
    id?: string;
}

interface AnimationPlaybackEventInit extends EventInit {
    currentTime?: number;
    timelineTime?: number;
}

interface AudioContextOptions {
    latencyHint?: AudioContextLatencyCategory | number;
    sampleRate?: number;
}

interface AudioTimestamp {
    contextTime?: number;
    performanceTime?: number;
}

interface OfflineAudioCompletionEventInit extends EventInit {
    renderedBuffer?: AudioBuffer;
}

interface AudioNodeOptions {
    channelCount?: number;
    channelCountMode?: ChannelCountMode;
    channelInterpretation?: ChannelInterpretation;
}

interface GainOptions extends AudioNodeOptions {
    gain?: number;
}

interface DelayOptions extends AudioNodeOptions {
    maxDelayTime?: number;
    delayTime?: number;
}

interface AudioBufferOptions {
    numberOfChannels?: number;
    length?: number;
    sampleRate?: number;
}

interface AudioBufferSourceOptions {
    buffer?: AudioBuffer;
    detune?: number;
    loop?: boolean;
    loopEnd?: number;
    loopStart?: number;
    playbackRate?: number;
}

interface ConstantSourceOptions {
    offset?: number;
}

interface MediaElementAudioSourceOptions {
    mediaElement?: HTMLMediaElement;
}

interface AudioWorkletNodeOptions extends AudioNodeOptions {
    numberOfInputs?: number;
    numberOfOutputs?: number;
}

interface AudioParamDescriptor {
    name?: string;
    defaultValue?: number;
    minValue?: number;
    maxValue?: number;
}

interface AudioContextInfo {
    currentTime?: number;
    sampleRate?: number;
}

interface AudioProcessingEventInit extends EventInit {
    playbackTime?: number;
    inputBuffer?: AudioBuffer;
    outputBuffer?: AudioBuffer;
}

interface PannerOptions extends AudioNodeOptions {
    panningModel?: PanningModelType;
    distanceModel?: DistanceModelType;
    positionX?: number;
    positionY?: number;
    positionZ?: number;
    orientationX?: number;
    orientationY?: number;
    orientationZ?: number;
    refDistance?: number;
    maxDistance?: number;
    rolloffFactor?: number;
    coneInnerAngle?: number;
    coneOuterAngle?: number;
    coneOuterGain?: number;
}

interface StereoPannerOptions extends AudioNodeOptions {
    pan?: number;
}

interface ConvolverOptions extends AudioNodeOptions {
    buffer?: AudioBuffer;
    disableNormalization?: boolean;
}

interface AnalyserOptions extends AudioNodeOptions {
    fftSize?: number;
    maxDecibels?: number;
    minDecibels?: number;
    smoothingTimeConstant?: number;
}

interface ChannelSplitterOptions extends AudioNodeOptions {
    numberOfOutputs?: number;
}

interface ChannelMergerOptions extends AudioNodeOptions {
    numberOfInputs?: number;
}

interface DynamicsCompressorOptions extends AudioNodeOptions {
    attack?: number;
    knee?: number;
    ratio?: number;
    release?: number;
    threshold?: number;
}

interface BiquadFilterOptions extends AudioNodeOptions {
    type?: BiquadFilterType;
    Q?: number;
    detune?: number;
    frequency?: number;
    gain?: number;
}

interface IIRFilterOptions extends AudioNodeOptions {
    feedforward?: number[];
    feedback?: number[];
}

interface WaveShaperOptions extends AudioNodeOptions {
    curve?: number[];
    oversample?: OverSampleType;
}

interface OscillatorOptions extends AudioNodeOptions {
    type?: OscillatorType;
    frequency?: number;
    detune?: number;
    periodicWave?: PeriodicWave;
}

interface PeriodicWaveConstraints {
    disableNormalization?: boolean;
}

interface PeriodicWaveOptions extends PeriodicWaveConstraints {
    real?: number[];
    imag?: number[];
}

interface MediaStreamAudioSourceOptions {
    mediaStream?: MediaStream;
}

interface MediaStreamTrackAudioSourceOptions {
    mediaStreamTrack?: any;
}

interface Account {
    rpDisplayName?: string;
    displayName?: string;
    id?: string;
    name?: string;
    imageURL?: string;
}

interface ScopedCredentialParameters {
    type?: ScopedCredentialType;
    algorithm?: AlgorithmIdentifier;
}

interface ScopedCredentialOptions {
    timeout?: number;
    rpId?: string;
    excludeList?: ScopedCredentialDescriptor[];
    attachment?: Attachment;
    extensions?: AuthenticationExtensions;
}

interface AssertionOptions {
    timeout?: number;
    rpId?: string;
    allowList?: ScopedCredentialDescriptor[];
    extensions?: AuthenticationExtensions;
}

interface AuthenticationExtensions {
}

interface ClientData {
    challenge?: string;
    origin?: string;
    hashAlg?: AlgorithmIdentifier;
    tokenBinding?: string;
    extensions?: AuthenticationExtensions;
}

interface ScopedCredentialDescriptor {
    type?: ScopedCredentialType;
    id?: BufferSource;
    transports?: Transport[];
}

interface SyncEventInit extends ExtendableEventInit {
    tag?: string;
    lastChance?: boolean;
}

interface Algorithm {
    name?: string;
}

interface KeyAlgorithm {
    name?: string;
}

interface RsaOtherPrimesInfo {
    r?: string;
    d?: string;
    t?: string;
}

interface JsonWebKey {
    kty?: string;
    use?: string;
    key_ops?: string[];
    alg?: string;
    ext?: boolean;
    crv?: string;
    x?: string;
    y?: string;
    d?: string;
    n?: string;
    e?: string;
    p?: string;
    q?: string;
    dp?: string;
    dq?: string;
    qi?: string;
    oth?: RsaOtherPrimesInfo[];
    k?: string;
}

interface CryptoKeyPair {
    publicKey?: CryptoKey;
    privateKey?: CryptoKey;
}

interface RsaKeyGenParams extends Algorithm {
    modulusLength?: number;
    publicExponent?: BigInteger;
}

interface RsaHashedKeyGenParams extends RsaKeyGenParams {
    hash?: HashAlgorithmIdentifier;
}

interface RsaKeyAlgorithm extends KeyAlgorithm {
    modulusLength?: number;
    publicExponent?: BigInteger;
}

interface RsaHashedKeyAlgorithm extends RsaKeyAlgorithm {
    hash?: KeyAlgorithm;
}

interface RsaHashedImportParams extends Algorithm {
    hash?: HashAlgorithmIdentifier;
}

interface RsaPssParams extends Algorithm {
    saltLength?: number;
}

interface RsaOaepParams extends Algorithm {
    label?: BufferSource;
}

interface EcdsaParams extends Algorithm {
    hash?: HashAlgorithmIdentifier;
}

interface EcKeyGenParams extends Algorithm {
    namedCurve?: NamedCurve;
}

interface EcKeyAlgorithm extends KeyAlgorithm {
    namedCurve?: NamedCurve;
}

interface EcKeyImportParams extends Algorithm {
    namedCurve?: NamedCurve;
}

interface EcdhKeyDeriveParams extends Algorithm {
    public?: CryptoKey;
}

interface AesCtrParams extends Algorithm {
    counter?: BufferSource;
    length?: number;
}

interface AesKeyAlgorithm extends KeyAlgorithm {
    length?: number;
}

interface AesKeyGenParams extends Algorithm {
    length?: number;
}

interface AesDerivedKeyParams extends Algorithm {
    length?: number;
}

interface AesCbcParams extends Algorithm {
    iv?: BufferSource;
}

interface AesGcmParams extends Algorithm {
    iv?: BufferSource;
    additionalData?: BufferSource;
    tagLength?: number;
}

interface HmacImportParams extends Algorithm {
    hash?: HashAlgorithmIdentifier;
    length?: number;
}

interface HmacKeyAlgorithm extends KeyAlgorithm {
    hash?: KeyAlgorithm;
    length?: number;
}

interface HmacKeyGenParams extends Algorithm {
    hash?: HashAlgorithmIdentifier;
    length?: number;
}

interface HkdfParams extends Algorithm {
    hash?: HashAlgorithmIdentifier;
    salt?: BufferSource;
    info?: BufferSource;
}

interface Pbkdf2Params extends Algorithm {
    salt?: BufferSource;
    iterations?: number;
    hash?: HashAlgorithmIdentifier;
}

interface RTCConfiguration {
    iceServers?: RTCIceServer[];
    iceTransportPolicy?: RTCIceTransportPolicy;
    bundlePolicy?: RTCBundlePolicy;
    rtcpMuxPolicy?: RTCRtcpMuxPolicy;
    peerIdentity?: string;
    certificates?: RTCCertificate[];
    iceCandidatePoolSize?: number;
}

interface RTCIceServer {
    urls?: string | string[];
    username?: string;
    credential?: string;
    credentialType?: RTCIceCredentialType;
}

interface RTCOfferAnswerOptions {
    voiceActivityDetection?: boolean;
}

interface RTCOfferOptions extends RTCOfferAnswerOptions {
    iceRestart?: boolean;
}

interface RTCAnswerOptions extends RTCOfferAnswerOptions {
}

interface RTCOfferOptions {
    offerToReceiveAudio?: boolean;
    offerToReceiveVideo?: boolean;
}

interface RTCSessionDescriptionInit {
    type?: RTCSdpType;
    sdp?: string;
}

interface RTCIceCandidateInit {
    candidate?: string;
    sdpMid?: string;
    sdpMLineIndex?: number;
    ufrag?: string;
}

interface RTCPeerConnectionIceEventInit extends EventInit {
    candidate?: RTCIceCandidate;
    url?: string;
}

interface RTCPeerConnectionIceErrorEventInit extends EventInit {
    hostCandidate?: string;
    url?: string;
    errorCode?: number;
    statusText?: string;
}

interface RTCCertificateExpiration {
    expires?: number;
}

interface RTCRtpTransceiverInit {
    direction?: RTCRtpTransceiverDirection;
    streams?: MediaStream[];
    sendEncodings?: RTCRtpEncodingParameters[];
}

interface RTCRtpParameters {
    transactionId?: string;
    encodings?: RTCRtpEncodingParameters[];
    headerExtensions?: RTCRtpHeaderExtensionParameters[];
    rtcp?: RTCRtcpParameters;
    codecs?: RTCRtpCodecParameters[];
    degradationPreference?: RTCDegradationPreference;
}

interface RTCRtpEncodingParameters {
    ssrc?: number;
    rtx?: RTCRtpRtxParameters;
    fec?: RTCRtpFecParameters;
    dtx?: RTCDtxStatus;
    active?: boolean;
    priority?: RTCPriorityType;
    maxBitrate?: number;
    maxFramerate?: number;
    rid?: string;
    scaleResolutionDownBy?: number;
}

interface RTCRtpRtxParameters {
    ssrc?: number;
}

interface RTCRtpFecParameters {
    ssrc?: number;
}

interface RTCRtcpParameters {
    cname?: string;
    reducedSize?: boolean;
}

interface RTCRtpHeaderExtensionParameters {
    uri?: string;
    id?: number;
    encrypted?: boolean;
}

interface RTCRtpCodecParameters {
    payloadType?: number;
    mimeType?: string;
    clockRate?: number;
    channels?: number;
    sdpFmtpLine?: string;
}

interface RTCRtpCapabilities {
    codecs?: RTCRtpCodecCapability[];
    headerExtensions?: RTCRtpHeaderExtensionCapability[];
}

interface RTCRtpCodecCapability {
    mimeType?: string;
    clockRate?: number;
    channels?: number;
    sdpFmtpLine?: string;
}

interface RTCRtpHeaderExtensionCapability {
    uri?: string;
}

interface RTCDtlsFingerprint {
    algorithm?: string;
    value?: string;
}

interface RTCIceParameters {
    usernameFragment?: string;
    password?: string;
}

interface RTCIceCandidatePair {
    local?: RTCIceCandidate;
    remote?: RTCIceCandidate;
}

interface RTCTrackEventInit extends EventInit {
    receiver?: RTCRtpReceiver;
    track?: MediaStreamTrack;
    streams?: MediaStream[];
    transceiver?: RTCRtpTransceiver;
}

interface RTCDataChannelInit {
    ordered?: boolean;
    maxPacketLifeTime?: number;
    maxRetransmits?: number;
    protocol?: string;
    negotiated?: boolean;
    id?: number;
    priority?: RTCPriorityType;
}

interface RTCDataChannelEventInit extends EventInit {
    channel?: RTCDataChannel;
}

interface RTCDTMFToneChangeEventInit extends EventInit {
    tone?: string;
}

interface RTCStats {
    timestamp?: number;
    type?: RTCStatsType;
    id?: string;
}

interface RTCIdentityProvider {
    generateAssertion?: GenerateAssertionCallback;
    validateAssertion?: ValidateAssertionCallback;
}

interface RTCIdentityAssertionResult {
    idp?: RTCIdentityProviderDetails;
    assertion?: string;
}

interface RTCIdentityProviderDetails {
    domain?: string;
    protocol?: string;
}

interface RTCIdentityValidationResult {
    identity?: string;
    contents?: string;
}

interface RTCIdentityProviderOptions {
    protocol?: string;
    usernameHint?: string;
    peerIdentity?: string;
}

interface MediaStreamConstraints {
    peerIdentity?: string;
}

interface RTCErrorEventInit extends EventInit {
    error?: any;
}

interface WebGLContextAttributes {
    alpha?: GLboolean;
    depth?: GLboolean;
    stencil?: GLboolean;
    antialias?: GLboolean;
    premultipliedAlpha?: GLboolean;
    preserveDrawingBuffer?: GLboolean;
    powerPreference?: WebGLPowerPreference;
    failIfMajorPerformanceCaveat?: GLboolean;
}

interface WebGLContextEventInit extends EventInit {
    statusMessage?: string;
}

interface ProgressEventInit extends EventInit {
    lengthComputable?: boolean;
    loaded?: number;
    total?: number;
}

interface EventListener {
    (evt: Event): void;
}

interface NodeFilter {
    (evt: Event): void;
}

interface AmbientLightSensor extends Sensor {
    readonly illuminance: number;
    addEventListener<K extends keyof SensorEventMap>(type: K, listener: (this: AmbientLightSensor, ev: SensorEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var AmbientLightSensor: {
    prototype: AmbientLightSensor;
    new (sensorOptions?: SensorOptions): AmbientLightSensor;
}

interface ClipboardEvent extends Event {
    readonly clipboardData: DataTransfer | null;
}

declare var ClipboardEvent: {
    prototype: ClipboardEvent;
    new(type: string, eventInitDict?: ClipboardEventInit): ClipboardEvent;
}

interface AnimationEvent extends Event {
    readonly animationName: string;
    readonly elapsedTime: number;
    readonly pseudoElement: string;
}

declare var AnimationEvent: {
    prototype: AnimationEvent;
    new (type: string, animationEventInitDict?: AnimationEventInit): AnimationEvent;
}

interface CSSKeyframeRule extends CSSRule {
    keyText: string;
    readonly style: CSSStyleDeclaration;
}

declare var CSSKeyframeRule: {
    prototype: CSSKeyframeRule;
    new (): CSSKeyframeRule;
}

interface CSSKeyframesRule extends CSSRule {
    name: string;
    readonly cssRules: CSSRuleList;
    appendRule(rule: string): void;
    deleteRule(select: string): void;
    findRule(select: string): CSSKeyframeRule | null;
}

declare var CSSKeyframesRule: {
    prototype: CSSKeyframesRule;
    new (): CSSKeyframesRule;
}

interface CSSGroupingRule extends CSSRule {
    readonly cssRules: CSSRuleList;
    insertRule(rule: string, index: number): number;
    deleteRule(index: number): void;
}

declare var CSSGroupingRule: {
    prototype: CSSGroupingRule;
    new (): CSSGroupingRule;
}

interface CSSConditionRule extends CSSGroupingRule {
    conditionText: string;
}

declare var CSSConditionRule: {
    prototype: CSSConditionRule;
    new (): CSSConditionRule;
}

interface CSSMediaRule extends CSSConditionRule {
    readonly media: MediaList;
}

declare var CSSMediaRule: {
    prototype: CSSMediaRule;
    new (): CSSMediaRule;
}

interface CSSSupportsRule extends CSSConditionRule {
}

declare var CSSSupportsRule: {
    prototype: CSSSupportsRule;
    new (): CSSSupportsRule;
}

interface SVGClipPathElement extends SVGElement, SVGUnitTypes {
    readonly clipPathUnits: SVGAnimatedEnumeration;
    readonly transform: SVGAnimatedTransformList;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGClipPathElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGClipPathElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGClipPathElement: {
    prototype: SVGClipPathElement;
    new (): SVGClipPathElement;
}

interface SVGMaskElement extends SVGElement, SVGUnitTypes {
    readonly maskUnits: SVGAnimatedEnumeration;
    readonly maskContentUnits: SVGAnimatedEnumeration;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    readonly width: SVGAnimatedLength;
    readonly height: SVGAnimatedLength;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGMaskElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGMaskElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGMaskElement: {
    prototype: SVGMaskElement;
    new (): SVGMaskElement;
}

interface MediaList {
    mediaText: string;
    readonly length: number;
    item(index: number): string | null;
    appendMedium(medium: string): void;
    deleteMedium(medium: string): void;
    [index: number]: string;
}

declare var MediaList: {
    prototype: MediaList;
    new (): MediaList;
}

interface StyleSheet {
    readonly type: string;
    readonly href: string | null;
    readonly ownerNode: Element | ProcessingInstruction | null;
    readonly parentStyleSheet: StyleSheet | null;
    readonly title: string | null;
    readonly media: MediaList;
    disabled: boolean;
}

declare var StyleSheet: {
    prototype: StyleSheet;
    new (): StyleSheet;
}

interface CSSStyleSheet extends StyleSheet {
    readonly ownerRule: CSSRule | null;
    readonly cssRules: CSSRuleList;
    insertRule(rule: string, index: number): number;
    deleteRule(index: number): void;
}

declare var CSSStyleSheet: {
    prototype: CSSStyleSheet;
    new (): CSSStyleSheet;
}

interface StyleSheetList {
    readonly length: number;
    item(index: number): StyleSheet | null;
    [index: number]: StyleSheet;
}

declare var StyleSheetList: {
    prototype: StyleSheetList;
    new (): StyleSheetList;
}

interface CSSRuleList {
    readonly length: number;
    item(index: number): CSSRule | null;
    [index: number]: CSSRule;
}

declare var CSSRuleList: {
    prototype: CSSRuleList;
    new (): CSSRuleList;
}

interface CSSRule {
    readonly type: number;
    cssText: string;
    readonly parentRule: CSSRule | null;
    readonly parentStyleSheet: CSSStyleSheet | null;
    readonly STYLE_RULE: number;
    readonly CHARSET_RULE: number;
    readonly IMPORT_RULE: number;
    readonly MEDIA_RULE: number;
    readonly FONT_FACE_RULE: number;
    readonly PAGE_RULE: number;
    readonly MARGIN_RULE: number;
    readonly NAMESPACE_RULE: number;
    readonly KEYFRAMES_RULE: number;
    readonly KEYFRAME_RULE: number;
    readonly SUPPORTS_RULE: number;
}

declare var CSSRule: {
    prototype: CSSRule;
    new (): CSSRule;
    readonly STYLE_RULE: number;
    readonly CHARSET_RULE: number;
    readonly IMPORT_RULE: number;
    readonly MEDIA_RULE: number;
    readonly FONT_FACE_RULE: number;
    readonly PAGE_RULE: number;
    readonly MARGIN_RULE: number;
    readonly NAMESPACE_RULE: number;
    readonly KEYFRAMES_RULE: number;
    readonly KEYFRAME_RULE: number;
    readonly SUPPORTS_RULE: number;
}

interface CSSStyleRule extends CSSRule {
    selectorText: string;
    readonly style: CSSStyleDeclaration;
}

declare var CSSStyleRule: {
    prototype: CSSStyleRule;
    new (): CSSStyleRule;
}

interface CSSImportRule extends CSSRule {
    readonly href: string;
    readonly media: MediaList;
    readonly styleSheet: CSSStyleSheet;
}

declare var CSSImportRule: {
    prototype: CSSImportRule;
    new (): CSSImportRule;
}

interface CSSGroupingRule extends CSSRule {
    readonly cssRules: CSSRuleList;
    insertRule(rule: string, index: number): number;
    deleteRule(index: number): void;
}

declare var CSSGroupingRule: {
    prototype: CSSGroupingRule;
    new (): CSSGroupingRule;
}

interface CSSMediaRule extends CSSGroupingRule {
    readonly media: MediaList;
}

declare var CSSMediaRule: {
    prototype: CSSMediaRule;
    new (): CSSMediaRule;
}

interface CSSPageRule extends CSSGroupingRule {
    selectorText: string;
    readonly style: CSSStyleDeclaration;
}

declare var CSSPageRule: {
    prototype: CSSPageRule;
    new (): CSSPageRule;
}

interface CSSMarginRule extends CSSRule {
    readonly name: string;
    readonly style: CSSStyleDeclaration;
}

declare var CSSMarginRule: {
    prototype: CSSMarginRule;
    new (): CSSMarginRule;
}

interface CSSNamespaceRule extends CSSRule {
    readonly namespaceURI: string;
    readonly prefix: string;
}

declare var CSSNamespaceRule: {
    prototype: CSSNamespaceRule;
    new (): CSSNamespaceRule;
}

interface CSSStyleDeclaration {
    cssText: string;
    readonly length: number;
    readonly parentRule: CSSRule | null;
    cssFloat: string;
    camel_cased_attribute: string;
    webkit_cased_attribute: string;
    dashed_attribute: string;
    resize: string | null;
    userSelect: string | null;
    item(index: number): string;
    getPropertyValue(property: string): string;
    getPropertyPriority(property: string): string;
    setProperty(property: string, value: string, priority?: string): void;
    setPropertyValue(property: string, value: string): void;
    setPropertyPriority(property: string, priority: string): void;
    removeProperty(property: string): string;
    [index: number]: string;
}

declare var CSSStyleDeclaration: {
    prototype: CSSStyleDeclaration;
    new (): CSSStyleDeclaration;
}

interface CSS {
}

declare var CSS: {
    prototype: CSS;
    new (): CSS;
    escape(ident: string): string;
    supports(property: string, value: string): boolean;
    supports(conditionText: string): boolean;
}

interface TransitionEvent extends Event {
    readonly propertyName: string;
    readonly elapsedTime: number;
    readonly pseudoElement: string;
}

declare var TransitionEvent: {
    prototype: TransitionEvent;
    new (type: string, transitionEventInitDict?: TransitionEventInit): TransitionEvent;
}

interface MediaQueryListEventMap {
    "change": Event;
}

interface MediaQueryList extends EventTarget {
    readonly media: string;
    readonly matches: boolean;
    onchange: (this: MediaQueryList, ev: Event) => any;
    addListener(listener: EventListenerOrEventListenerObject | null): void;
    removeListener(listener: EventListenerOrEventListenerObject | null): void;
    addEventListener<K extends keyof MediaQueryListEventMap>(type: K, listener: (this: MediaQueryList, ev: MediaQueryListEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var MediaQueryList: {
    prototype: MediaQueryList;
    new (): MediaQueryList;
}

interface MediaQueryListEvent extends Event {
    readonly media: string;
    readonly matches: boolean;
}

declare var MediaQueryListEvent: {
    prototype: MediaQueryListEvent;
    new (type: string, eventInitDict?: MediaQueryListEventInit): MediaQueryListEvent;
}

interface Screen {
    readonly availWidth: number;
    readonly availHeight: number;
    readonly width: number;
    readonly height: number;
    readonly colorDepth: number;
    readonly pixelDepth: number;
}

declare var Screen: {
    prototype: Screen;
    new (): Screen;
}

interface CaretPosition {
    readonly offsetNode: Node;
    readonly offset: number;
    getClientRect(): DOMRect | null;
}

declare var CaretPosition: {
    prototype: CaretPosition;
    new (): CaretPosition;
}

interface DeviceOrientationEvent extends Event {
    readonly alpha: number | null;
    readonly beta: number | null;
    readonly gamma: number | null;
    readonly absolute: boolean;
}

declare var DeviceOrientationEvent: {
    prototype: DeviceOrientationEvent;
    new (type: string, eventInitDict?: DeviceOrientationEventInit): DeviceOrientationEvent;
}

interface DeviceMotionEvent extends Event {
    readonly acceleration: DeviceAcceleration | null;
    readonly accelerationIncludingGravity: DeviceAcceleration | null;
    readonly rotationRate: DeviceRotationRate | null;
    readonly interval: number | null;
}

declare var DeviceMotionEvent: {
    prototype: DeviceMotionEvent;
    new (type: string, eventInitDict?: DeviceMotionEventInit): DeviceMotionEvent;
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
    new (type: string, eventInitDict?: EventInit): Event;
    readonly NONE: number;
    readonly CAPTURING_PHASE: number;
    readonly AT_TARGET: number;
    readonly BUBBLING_PHASE: number;
}

interface CustomEvent extends Event {
    readonly detail: any;
    initCustomEvent(type: string, bubbles?: boolean, cancelable?: boolean, detail?: any): void;
}

declare var CustomEvent: {
    prototype: CustomEvent;
    new (type: string, eventInitDict?: CustomEventInit): CustomEvent;
}

interface EventTarget {
    addEventListener(type: string, listener?: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener(type: string, listener?: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    dispatchEvent(event: Event): boolean;
}

declare var EventTarget: {
    prototype: EventTarget;
    new (): EventTarget;
}

interface NodeList {
    readonly length: number;
    item(index: number): Node | null;
    [index: number]: Node;
}

declare var NodeList: {
    prototype: NodeList;
    new (): NodeList;
}

interface HTMLCollectionBase {
    /**
      * Sets or retrieves the number of objects in a collection.
      */
    readonly length: number;
    /**
      * Retrieves an object from various collections.
      */
    item(index: number): Element;
    [index: number]: Element;
}

interface HTMLCollection extends HTMLCollectionBase {
    /**
      * Retrieves a select object or an object from an options collection.
      */
    namedItem(name: string): Element | null;
}

declare var HTMLCollection: {
    prototype: HTMLCollection;
    new (): HTMLCollection;
}

interface MutationObserver {
    observe(target: Node, options?: MutationObserverInit): void;
    disconnect(): void;
    takeRecords(): MutationRecord[];
}

declare var MutationObserver: {
    prototype: MutationObserver;
    new (callback: MutationCallback): MutationObserver;
}

interface MutationRecord {
    readonly type: string;
    readonly target: Node;
    readonly addedNodes: NodeList;
    readonly removedNodes: NodeList;
    readonly previousSibling: Node | null;
    readonly nextSibling: Node | null;
    readonly attributeName: string | null;
    readonly attributeNamespace: string | null;
    readonly oldValue: string | null;
}

declare var MutationRecord: {
    prototype: MutationRecord;
    new (): MutationRecord;
}

interface Node extends EventTarget {
    readonly nodeType: number;
    readonly nodeName: string;
    readonly baseURI: string;
    readonly isConnected: boolean;
    readonly ownerDocument: Document | null;
    readonly parentNode: Node | null;
    readonly parentElement: HTMLElement | null;
    readonly childNodes: NodeList;
    readonly firstChild: Node | null;
    readonly lastChild: Node | null;
    readonly previousSibling: Node | null;
    readonly nextSibling: Node | null;
    nodeValue: string | null;
    textContent: string | null;
    getRootNode(options?: GetRootNodeOptions): Node;
    hasChildNodes(): boolean;
    normalize(): void;
    cloneNode(deep?: boolean): Node;
    isEqualNode(otherNode: Node | null): boolean;
    isSameNode(otherNode: Node | null): boolean;
    compareDocumentPosition(other: Node): number;
    contains(other: Node | null): boolean;
    lookupPrefix(namespace: string | null): string | null;
    lookupNamespaceURI(prefix: string | null): string | null;
    isDefaultNamespace(namespace: string | null): boolean;
    insertBefore<T extends Node>(newChild: T, refChild: Node | null): T;
    appendChild<T extends Node>(newChild: T): T;
    replaceChild<T extends Node>(newChild: Node, oldChild: T): T;
    removeChild<T extends Node>(oldChild: T): T;
    readonly ELEMENT_NODE: number;
    readonly ATTRIBUTE_NODE: number;
    readonly TEXT_NODE: number;
    readonly CDATA_SECTION_NODE: number;
    readonly ENTITY_REFERENCE_NODE: number;
    readonly ENTITY_NODE: number;
    readonly PROCESSING_INSTRUCTION_NODE: number;
    readonly COMMENT_NODE: number;
    readonly DOCUMENT_NODE: number;
    readonly DOCUMENT_TYPE_NODE: number;
    readonly DOCUMENT_FRAGMENT_NODE: number;
    readonly NOTATION_NODE: number;
    readonly DOCUMENT_POSITION_DISCONNECTED: number;
    readonly DOCUMENT_POSITION_PRECEDING: number;
    readonly DOCUMENT_POSITION_FOLLOWING: number;
    readonly DOCUMENT_POSITION_CONTAINS: number;
    readonly DOCUMENT_POSITION_CONTAINED_BY: number;
    readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
}

declare var Node: {
    prototype: Node;
    new (): Node;
    readonly ELEMENT_NODE: number;
    readonly ATTRIBUTE_NODE: number;
    readonly TEXT_NODE: number;
    readonly CDATA_SECTION_NODE: number;
    readonly ENTITY_REFERENCE_NODE: number;
    readonly ENTITY_NODE: number;
    readonly PROCESSING_INSTRUCTION_NODE: number;
    readonly COMMENT_NODE: number;
    readonly DOCUMENT_NODE: number;
    readonly DOCUMENT_TYPE_NODE: number;
    readonly DOCUMENT_FRAGMENT_NODE: number;
    readonly NOTATION_NODE: number;
    readonly DOCUMENT_POSITION_DISCONNECTED: number;
    readonly DOCUMENT_POSITION_PRECEDING: number;
    readonly DOCUMENT_POSITION_FOLLOWING: number;
    readonly DOCUMENT_POSITION_CONTAINS: number;
    readonly DOCUMENT_POSITION_CONTAINED_BY: number;
    readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
}

interface DocumentEventMap extends GlobalEventHandlersEventMap, DocumentAndElementEventHandlersEventMap {
    "readystatechange": Event;
}

interface Document extends Node, NonElementParentNode, DocumentOrShadowRoot, ParentNode, GeometryUtils, GlobalEventHandlers, DocumentAndElementEventHandlers, ParentNode {
    /**
      * Gets the implementation object of the current document. 
      */
    readonly implementation: DOMImplementation;
    /**
      * Sets or gets the URL for the current document. 
      */
    readonly URL: string;
    readonly documentURI: string;
    readonly origin: string;
    /**
      * Gets a value that indicates whether standards-compliant mode is switched on for the object.
      */
    readonly compatMode: string;
    readonly characterSet: string;
    /**
      * Gets or sets the character set used to encode the object.
      */
    readonly charset: string;
    /**
      * Returns the character encoding used to create the webpage that is loaded into the document object.
      */
    readonly inputEncoding: string;
    readonly contentType: string;
    /**
      * Gets an object representing the document type declaration associated with the current document. 
      */
    readonly doctype: DocumentType | null;
    /**
      * Gets a reference to the root node of the document. 
      */
    documentElement: HTMLElement;
    readonly scrollingElement: Element | null;
    /**
      * Contains information about the current URL. 
      */
    readonly location: Location | null;
    /**
      * Sets or gets the security domain of the document. 
      */
    domain: string;
    /**
      * Gets the URL of the location that referred the user to the current page.
      */
    readonly referrer: string;
    cookie: string;
    /**
      * Gets the date that the page was last modified, if the page supplies one. 
      */
    readonly lastModified: string;
    /**
      * Retrieves a value that indicates the current state of the object.
      */
    readonly readyState: DocumentReadyState;
    /**
      * Contains the title of the document.
      */
    title: string;
    /**
      * Sets or retrieves a value that indicates the reading order of the object. 
      */
    dir: string;
    /**
      * Specifies the beginning and end of the document body.
      */
    body: HTMLElement | null;
    readonly head: HTMLHeadElement | null;
    /**
      * Retrieves a collection, in source order, of img objects in the document.
      */
    images: HTMLCollectionOf<HTMLImageElement>;
    /**
      * Retrieves a collection of all embed objects in the document.
      */
    embeds: HTMLCollectionOf<HTMLEmbedElement>;
    plugins: HTMLCollectionOf<HTMLEmbedElement>;
    /**
      * Retrieves a collection of all a objects that specify the href property and all area objects in the document.
      */
    links: HTMLCollectionOf<HTMLAnchorElement | HTMLAreaElement>;
    /**
      * Retrieves a collection, in source order, of all form objects in the document.
      */
    forms: HTMLCollectionOf<HTMLFormElement>;
    /**
      * Retrieves a collection of all script objects in the document.
      */
    scripts: HTMLCollectionOf<HTMLScriptElement>;
    readonly currentScript: HTMLOrSVGScriptElement | null;
    readonly defaultView: any;
    /**
      * Gets the object that has the focus when the parent document has focus.
      */
    readonly activeElement: Element | null;
    /**
      * Sets or gets a value that indicates whether the document can be edited.
      */
    designMode: string;
    /**
      * Fires when the state of the object has changed.
      * @param ev The event
      */
    onreadystatechange: (this: Document, ev: Event) => any;
    /**
      * Sets or gets the foreground (text) color of the document.
      */
    fgColor: string;
    /**
      * Sets or gets the color of the document links. 
      */
    linkColor: string;
    /** 
      * Sets or gets the color of the links that the user has visited.
      */
    vlinkColor: string;
    /**
      * Sets or gets the color of all active links in the document.
      */
    alinkColor: string;
    /**
      * Deprecated. Sets or retrieves a value that indicates the background color behind the object. 
      */
    bgColor: string;
    /**
      * Retrieves a collection of all a objects that have a name and/or id property. Objects in this collection are in HTML source order.
      */
    anchors: HTMLCollectionOf<HTMLAnchorElement>;
    /**
      * Retrieves a collection of all applet objects in the document.
      */
    applets: HTMLCollectionOf<HTMLAppletElement>;
    /**
      * Returns a reference to the collection of elements contained by the object.
      */
    readonly all: HTMLAllCollection;
    /**
      * Retrieves a collection of styleSheet objects representing the style sheets that correspond to each instance of a link or style object in the document.
      */
    readonly styleSheets: StyleSheetList;
    /**
      * Gets the root svg element in the document hierarchy.
      */
    readonly rootElement: SVGSVGElement | null;
    readonly timeline: DocumentTimeline;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1999/xhtml", localName: string): HTMLCollectionOf<HTMLElement>;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/2000/svg", localName: string): HTMLCollectionOf<SVGElement>;
    getElementsByTagNameNS(namespaceURI: string, localName: string): HTMLCollectionOf<Element>;
    getElementsByClassName(classNames: string): HTMLCollectionOf<Element>;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElementNS(namespaceURI: "http://www.w3.org/1999/xhtml", qualifiedName: string): HTMLElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "a"): SVGAElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "circle"): SVGCircleElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "clipPath"): SVGClipPathElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "componentTransferFunction"): SVGComponentTransferFunctionElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "defs"): SVGDefsElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "desc"): SVGDescElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "ellipse"): SVGEllipseElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feBlend"): SVGFEBlendElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feColorMatrix"): SVGFEColorMatrixElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feComponentTransfer"): SVGFEComponentTransferElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feComposite"): SVGFECompositeElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feConvolveMatrix"): SVGFEConvolveMatrixElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feDiffuseLighting"): SVGFEDiffuseLightingElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feDisplacementMap"): SVGFEDisplacementMapElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feDistantLight"): SVGFEDistantLightElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feFlood"): SVGFEFloodElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feFuncA"): SVGFEFuncAElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feFuncB"): SVGFEFuncBElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feFuncG"): SVGFEFuncGElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feFuncR"): SVGFEFuncRElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feGaussianBlur"): SVGFEGaussianBlurElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feImage"): SVGFEImageElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feMerge"): SVGFEMergeElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feMergeNode"): SVGFEMergeNodeElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feMorphology"): SVGFEMorphologyElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feOffset"): SVGFEOffsetElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "fePointLight"): SVGFEPointLightElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feSpecularLighting"): SVGFESpecularLightingElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feSpotLight"): SVGFESpotLightElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feTile"): SVGFETileElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feTurbulence"): SVGFETurbulenceElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "filter"): SVGFilterElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "foreignObject"): SVGForeignObjectElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "g"): SVGGElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "image"): SVGImageElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "gradient"): SVGGradientElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "line"): SVGLineElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "linearGradient"): SVGLinearGradientElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "marker"): SVGMarkerElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "mask"): SVGMaskElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "path"): SVGPathElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "metadata"): SVGMetadataElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "pattern"): SVGPatternElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "polygon"): SVGPolygonElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "polyline"): SVGPolylineElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "radialGradient"): SVGRadialGradientElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "rect"): SVGRectElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "svg"): SVGSVGElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "script"): SVGScriptElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "stop"): SVGStopElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "style"): SVGStyleElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "switch"): SVGSwitchElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "symbol"): SVGSymbolElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "tspan"): SVGTSpanElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "textContent"): SVGTextContentElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "text"): SVGTextElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "textPath"): SVGTextPathElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "textPositioning"): SVGTextPositioningElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "title"): SVGTitleElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "use"): SVGUseElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "view"): SVGViewElement
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: string): SVGElement
    createElementNS(namespace: string | null, qualifiedName: string, options?: ElementCreationOptions): Element;
    /**
      * Creates a new document.
      */
    createDocumentFragment(): DocumentFragment;
    /**
      * Creates a text string from the specified value. 
      * @param data String that specifies the nodeValue property of the text node.
      */
    createTextNode(data: string): Text;
    createCDATASection(data: string): CDATASection;
    /**
      * Creates a comment object with the specified data.
      * @param data Sets the comment object's data.
      */
    createComment(data: string): Comment;
    createProcessingInstruction(target: string, data: string): ProcessingInstruction;
    importNode<T extends Node>(importedNode: T, deep: boolean): T;
    adoptNode<T extends Node>(source: T): T;
    /**
      * Creates an attribute object with a specified name.
      * @param name String that sets the attribute object's name.
      */
    createAttribute(localName: string): Attr;
    createAttributeNS(namespace: string | null, qualifiedName: string): Attr;
    createEvent(eventInterface:"AnimationEvent"): AnimationEvent;
    createEvent(eventInterface:"AnimationPlaybackEvent"): AnimationPlaybackEvent;
    createEvent(eventInterface:"AudioProcessingEvent"): AudioProcessingEvent;
    createEvent(eventInterface:"BeforeUnloadEvent"): BeforeUnloadEvent;
    createEvent(eventInterface:"ClipboardEvent"): ClipboardEvent;
    createEvent(eventInterface:"CloseEvent"): CloseEvent;
    createEvent(eventInterface:"CustomEvent"): CustomEvent;
    createEvent(eventInterface:"DeviceMotionEvent"): DeviceMotionEvent;
    createEvent(eventInterface:"DeviceOrientationEvent"): DeviceOrientationEvent;
    createEvent(eventInterface:"DragEvent"): DragEvent;
    createEvent(eventInterface:"ErrorEvent"): ErrorEvent;
    createEvent(eventInterface:"Event"): Event;
    createEvent(eventInterface:"Events"): Event;
    createEvent(eventInterface:"ExtendableEvent"): ExtendableEvent;
    createEvent(eventInterface:"ExtendableMessageEvent"): ExtendableMessageEvent;
    createEvent(eventInterface:"FetchEvent"): FetchEvent;
    createEvent(eventInterface:"GamepadEvent"): GamepadEvent;
    createEvent(eventInterface:"HashChangeEvent"): HashChangeEvent;
    createEvent(eventInterface:"IDBVersionChangeEvent"): IDBVersionChangeEvent;
    createEvent(eventInterface:"InstallEvent"): InstallEvent;
    createEvent(eventInterface:"KeyboardEvent"): KeyboardEvent;
    createEvent(eventInterface:"MediaEncryptedEvent"): MediaEncryptedEvent;
    createEvent(eventInterface:"MediaKeyMessageEvent"): MediaKeyMessageEvent;
    createEvent(eventInterface:"MediaQueryListEvent"): MediaQueryListEvent;
    createEvent(eventInterface:"MediaStreamTrackEvent"): MediaStreamTrackEvent;
    createEvent(eventInterface:"MessageEvent"): MessageEvent;
    createEvent(eventInterface:"MouseEvent"): MouseEvent;
    createEvent(eventInterface:"MouseEvents"): MouseEvent;
    createEvent(eventInterface:"NotificationEvent"): NotificationEvent;
    createEvent(eventInterface:"OfflineAudioCompletionEvent"): OfflineAudioCompletionEvent;
    createEvent(eventInterface:"OverconstrainedErrorEvent"): OverconstrainedErrorEvent;
    createEvent(eventInterface:"PageTransitionEvent"): PageTransitionEvent;
    createEvent(eventInterface:"PaymentRequestUpdateEvent"): PaymentRequestUpdateEvent;
    createEvent(eventInterface:"PopStateEvent"): PopStateEvent;
    createEvent(eventInterface:"ProgressEvent"): ProgressEvent;
    createEvent(eventInterface:"PromiseRejectionEvent"): PromiseRejectionEvent;
    createEvent(eventInterface:"PushEvent"): PushEvent;
    createEvent(eventInterface:"PushSubscriptionChangeEvent"): PushSubscriptionChangeEvent;
    createEvent(eventInterface:"RTCDTMFToneChangeEvent"): RTCDTMFToneChangeEvent;
    createEvent(eventInterface:"RTCDataChannelEvent"): RTCDataChannelEvent;
    createEvent(eventInterface:"RTCErrorEvent"): RTCErrorEvent;
    createEvent(eventInterface:"RTCPeerConnectionIceErrorEvent"): RTCPeerConnectionIceErrorEvent;
    createEvent(eventInterface:"RTCPeerConnectionIceEvent"): RTCPeerConnectionIceEvent;
    createEvent(eventInterface:"RTCTrackEvent"): RTCTrackEvent;
    createEvent(eventInterface:"RelatedEvent"): RelatedEvent;
    createEvent(eventInterface:"SensorErrorEvent"): SensorErrorEvent;
    createEvent(eventInterface:"SpeechRecognitionError"): SpeechRecognitionError;
    createEvent(eventInterface:"SpeechRecognitionEvent"): SpeechRecognitionEvent;
    createEvent(eventInterface:"SpeechSynthesisEvent"): SpeechSynthesisEvent;
    createEvent(eventInterface:"StorageEvent"): StorageEvent;
    createEvent(eventInterface:"SyncEvent"): SyncEvent;
    createEvent(eventInterface:"TouchEvent"): TouchEvent;
    createEvent(eventInterface:"TrackEvent"): TrackEvent;
    createEvent(eventInterface:"TransitionEvent"): TransitionEvent;
    createEvent(eventInterface:"UIEvent"): UIEvent;
    createEvent(eventInterface:"UIEvents"): UIEvent;
    createEvent(eventInterface:"WebGLContextEvent"): WebGLContextEvent;
    createEvent(eventInterface:"WheelEvent"): WheelEvent;
    createEvent(eventInterface: string): Event;
    /**
      *  Returns an empty range object that has both of its boundary points positioned at the beginning of the document. 
      */
    createRange(): Range;
    /**
      * Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document. 
      * @param root The root element or node to start traversing on.
      * @param whatToShow The type of nodes or elements to appear in the node list
      * @param filter A custom NodeFilter function to use. For more information, see filter. Use null for no filter.
      * @param entityReferenceExpansion A flag that specifies whether entity reference nodes are expanded.
      */
    createNodeIterator(root: Node, whatToShow?: number, filter?: NodeFilter): NodeIterator;
    /**
      * Creates a TreeWalker object that you can use to traverse filtered lists of nodes or elements in a document.
      * @param root The root element or node to start traversing on.
      * @param whatToShow The type of nodes or elements to appear in the node list. For more information, see whatToShow.
      * @param filter A custom NodeFilter function to use.
      * @param entityReferenceExpansion A flag that specifies whether entity reference nodes are expanded.
      */
    createTreeWalker(root: Node, whatToShow?: number, filter?: NodeFilter): TreeWalker;
    /**
      * Returns the element for the specified x coordinate and the specified y coordinate. 
      * @param x The x-offset
      * @param y The y-offset
      */
    elementFromPoint(x: number, y: number): Element | null;
    elementsFromPoint(x: number, y: number): Element[];
    caretPositionFromPoint(x: number, y: number): CaretPosition | null;
    /**
      * Gets a collection of objects based on the value of the NAME or ID attribute.
      * @param elementName Gets a collection of objects based on the value of the NAME or ID attribute.
      */
    getElementsByName(elementName: string): NodeListOf<HTMLElement>;
    /**
      * Opens a new window and loads a document specified by a given URL. Also, opens a new window that uses the url parameter and the name parameter to collect the output of the write method and the writeln method.
      * @param url Specifies a MIME type for the document.
      * @param name Specifies the name of the window. This name is used as the value for the TARGET attribute on a form or an anchor element.
      * @param features Contains a list of items separated by commas. Each item consists of an option and a value, separated by an equals sign (for example, "fullscreen=yes, toolbar=yes"). The following values are supported.
      * @param replace Specifies whether the existing entry for the document is replaced in the history list.
      */
    open(url?: string, name?: string, features?: string, replace?: boolean): Document;
    /**
      * Opens a new window and loads a document specified by a given URL. Also, opens a new window that uses the url parameter and the name parameter to collect the output of the write method and the writeln method.
      * @param url Specifies a MIME type for the document.
      * @param name Specifies the name of the window. This name is used as the value for the TARGET attribute on a form or an anchor element.
      * @param features Contains a list of items separated by commas. Each item consists of an option and a value, separated by an equals sign (for example, "fullscreen=yes, toolbar=yes"). The following values are supported.
      * @param replace Specifies whether the existing entry for the document is replaced in the history list.
      */
    open(url?: string, name?: string, features?: string, replace?: boolean): Document;
    /**
      * Closes an output stream and forces the sent data to display.
      */
    close(): void;
    /**
      * Writes one or more HTML expressions to a document in the specified window. 
      * @param content Specifies the text and HTML tags to write.
      */
    write(...text: string[]): void;
    /**
      * Writes one or more HTML expressions, followed by a carriage return, to a document in the specified window. 
      * @param content The text and HTML tags to write.
      */
    writeln(...text: string[]): void;
    /**
      * Gets a value indicating whether the object currently has focus.
      */
    hasFocus(): boolean;
    /**
      * Executes a command on the current document, current selection, or the given range.
      * @param commandId String that specifies the command to execute. This command can be any of the command identifiers that can be executed in script.
      * @param showUI Display the user interface, defaults to false.
      * @param value Value to assign.
      */
    execCommand(commandId: string, showUI?: boolean, value?: string): boolean;
    /** 
      * Returns a Boolean value that indicates whether a specified command can be successfully executed using execCommand, given the current state of the document.
      * @param commandId Specifies a command identifier.
      */
    queryCommandEnabled(commandId: string): boolean;
    /**
      * Returns a Boolean value that indicates whether the specified command is in the indeterminate state.
      * @param commandId String that specifies a command identifier.
      */
    queryCommandIndeterm(commandId: string): boolean;
    /**
      * Returns a Boolean value that indicates the current state of the command.
      * @param commandId String that specifies a command identifier.
      */
    queryCommandState(commandId: string): boolean;
    /**
      * Returns a Boolean value that indicates whether the current command is supported on the current range.
      * @param commandId Specifies a command identifier.
      */
    queryCommandSupported(commandId: string): boolean;
    /**
      * Returns the current value of the document, range, or current selection for the given command.
      * @param commandId String that specifies a command identifier.
      */
    queryCommandValue(commandId: string): string;
    clear(): void;
    captureEvents(): void;
    releaseEvents(): void;
    /**
      * Returns an object representing the current selection of the document that is loaded into the object displaying a webpage.
      */
    getSelection(): Selection | null;
    createTouch(view: any, target: EventTarget, identifier: number, pageX: number, pageY: number, screenX: number, screenY: number): Touch;
    createTouchList(...touches: Touch[]): TouchList;
    getAnimations(): Animation[];
    addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    [name: string]: any;
}

declare var Document: {
    prototype: Document;
    new (): Document;
}

interface XMLDocument extends Document {
    addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: XMLDocument, ev: DocumentEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var XMLDocument: {
    prototype: XMLDocument;
    new (): XMLDocument;
}

interface DOMImplementation {
    createDocumentType(qualifiedName: string, publicId: string, systemId: string): DocumentType;
    createDocument(namespaceURI: string | null, qualifiedName: string | null, doctype: DocumentType | null): Document;
    createHTMLDocument(title?: string): Document;
    hasFeature(feature: string | null, version: string | null): boolean;
}

declare var DOMImplementation: {
    prototype: DOMImplementation;
    new (): DOMImplementation;
}

interface DocumentType extends Node, ChildNode {
    readonly name: string;
    readonly publicId: string;
    readonly systemId: string;
}

declare var DocumentType: {
    prototype: DocumentType;
    new (): DocumentType;
}

interface DocumentFragment extends Node, NonElementParentNode, ParentNode, ParentNode {
}

declare var DocumentFragment: {
    prototype: DocumentFragment;
    new (): DocumentFragment;
}

interface ShadowRoot extends DocumentFragment, DocumentOrShadowRoot {
    readonly mode: ShadowRootMode;
    readonly host: Element;
}

declare var ShadowRoot: {
    prototype: ShadowRoot;
    new (): ShadowRoot;
}

interface ElementEventMap {
    "gotpointercapture": Event;
    "lostpointercapture": Event;
}

interface Element extends Node, ParentNode, NonDocumentTypeChildNode, ChildNode, Slotable, GeometryUtils, Animatable, ParentNode {
    readonly namespaceURI: string | null;
    readonly prefix: string | null;
    readonly localName: string;
    readonly tagName: string;
    id: string;
    className: string;
    readonly classList: DOMTokenList;
    slot: string;
    readonly attributes: NamedNodeMap;
    readonly shadowRoot: ShadowRoot | null;
    scrollTop: number;
    scrollLeft: number;
    readonly scrollWidth: number;
    readonly scrollHeight: number;
    readonly clientTop: number;
    readonly clientLeft: number;
    readonly clientWidth: number;
    readonly clientHeight: number;
    innerHTML: string;
    outerHTML: string;
    ongotpointercapture: (this: Element, ev: Event) => any;
    onlostpointercapture: (this: Element, ev: Event) => any;
    readonly assignedSlot: HTMLSlotElement | null;
    hasAttributes(): boolean;
    getAttributeNames(): string[];
    getAttribute(name: string): string | null;
    getAttributeNS(namespace: string | null, localName: string): string | null;
    setAttribute(name: string, value: string): void;
    setAttributeNS(namespace: string | null, qualifiedName: string, value: string): void;
    removeAttribute(qualifiedName: string): void;
    removeAttributeNS(namespace: string | null, localName: string): void;
    hasAttribute(qualifiedName: string): boolean;
    hasAttributeNS(namespace: string | null, localName: string): boolean;
    getAttributeNode(qualifiedName: string): Attr | null;
    getAttributeNodeNS(namespace: string | null, localName: string): Attr | null;
    setAttributeNode(attr: Attr): Attr | null;
    setAttributeNodeNS(attr: Attr): Attr | null;
    removeAttributeNode(attr: Attr): Attr;
    attachShadow(init: ShadowRootInit): ShadowRoot;
    closest(selectors: string): Element | null;
    matches(selectors: string): boolean;
    webkitMatchesSelector(selectors: string): boolean;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1999/xhtml", localName: string): HTMLCollectionOf<HTMLElement>;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/2000/svg", localName: string): HTMLCollectionOf<SVGElement>;
    getElementsByTagNameNS(namespaceURI: string, localName: string): HTMLCollectionOf<Element>;
    getElementsByClassName(classNames: string): HTMLCollectionOf<Element>;
    insertAdjacentElement(where: string, element: Element): Element | null;
    insertAdjacentText(where: string, data: string): void;
    getClientRects(): DOMRect[];
    getBoundingClientRect(): DOMRect;
    scrollIntoView(): void;
    scrollIntoView(arg: any): void;
    scroll(options?: ScrollToOptions): void;
    scroll(x: number, y: number): void;
    scrollTo(options?: ScrollToOptions): void;
    scrollTo(x: number, y: number): void;
    scrollBy(options?: ScrollToOptions): void;
    scrollBy(x: number, y: number): void;
    insertAdjacentHTML(position: string, text: string): void;
    setPointerCapture(pointerId: number): void;
    releasePointerCapture(pointerId: number): void;
    getElementsByClassName(classNames: string): NodeListOf<Element>;
    matches(selector: string): boolean;
    closest(selector: string): Element | null;
    insertAdjacentElement(position: string, insertedElement: Element): Element | null;
    insertAdjacentHTML(where: string, html: string): void;
    insertAdjacentText(where: string, text: string): void;
    attachShadow(shadowRootInitDict: ShadowRootInit): ShadowRoot;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var Element: {
    prototype: Element;
    new (): Element;
}

interface NamedNodeMap {
    readonly length: number;
    item(index: number): Attr | null;
    getNamedItem(qualifiedName: string): Attr | null;
    getNamedItemNS(namespace: string | null, localName: string): Attr | null;
    setNamedItem(attr: Attr): Attr | null;
    setNamedItemNS(attr: Attr): Attr | null;
    removeNamedItem(qualifiedName: string): Attr;
    removeNamedItemNS(namespace: string | null, localName: string): Attr;
    [index: number]: Attr;
}

declare var NamedNodeMap: {
    prototype: NamedNodeMap;
    new (): NamedNodeMap;
}

interface Attr extends Node {
    readonly namespaceURI: string | null;
    readonly prefix: string | null;
    readonly localName: string;
    readonly name: string;
    value: string;
    readonly ownerElement: Element | null;
    readonly specified: boolean;
}

declare var Attr: {
    prototype: Attr;
    new (): Attr;
}

interface CharacterData extends Node, NonDocumentTypeChildNode, ChildNode {
    data: string;
    readonly length: number;
    substringData(offset: number, count: number): string;
    appendData(data: string): void;
    insertData(offset: number, data: string): void;
    deleteData(offset: number, count: number): void;
    replaceData(offset: number, count: number, data: string): void;
}

declare var CharacterData: {
    prototype: CharacterData;
    new (): CharacterData;
}

interface Text extends CharacterData, Slotable, GeometryUtils {
    readonly wholeText: string;
    readonly assignedSlot: HTMLSlotElement | null;
    splitText(offset: number): Text;
}

declare var Text: {
    prototype: Text;
    new (data?: string): Text;
}

interface CDATASection extends Text {
}

declare var CDATASection: {
    prototype: CDATASection;
    new (): CDATASection;
}

interface ProcessingInstruction extends CharacterData, LinkStyle {
    readonly target: string;
}

declare var ProcessingInstruction: {
    prototype: ProcessingInstruction;
    new (): ProcessingInstruction;
}

interface Comment extends CharacterData {
}

declare var Comment: {
    prototype: Comment;
    new (data?: string): Comment;
}

interface Range {
    readonly startContainer: Node;
    readonly startOffset: number;
    readonly endContainer: Node;
    readonly endOffset: number;
    readonly collapsed: boolean;
    readonly commonAncestorContainer: Node;
    setStart(node: Node, offset: number): void;
    setEnd(node: Node, offset: number): void;
    setStartBefore(node: Node): void;
    setStartAfter(node: Node): void;
    setEndBefore(node: Node): void;
    setEndAfter(node: Node): void;
    collapse(toStart?: boolean): void;
    selectNode(node: Node): void;
    selectNodeContents(node: Node): void;
    compareBoundaryPoints(how: number, sourceRange: Range): number;
    deleteContents(): void;
    extractContents(): DocumentFragment;
    cloneContents(): DocumentFragment;
    insertNode(node: Node): void;
    surroundContents(newParent: Node): void;
    cloneRange(): Range;
    detach(): void;
    isPointInRange(node: Node, offset: number): boolean;
    comparePoint(node: Node, offset: number): number;
    intersectsNode(node: Node): boolean;
    getClientRects(): DOMRect[];
    getBoundingClientRect(): DOMRect;
    createContextualFragment(fragment: string): DocumentFragment;
    readonly START_TO_START: number;
    readonly START_TO_END: number;
    readonly END_TO_END: number;
    readonly END_TO_START: number;
}

declare var Range: {
    prototype: Range;
    new (): Range;
    readonly START_TO_START: number;
    readonly START_TO_END: number;
    readonly END_TO_END: number;
    readonly END_TO_START: number;
}

interface NodeIterator {
    readonly root: Node;
    readonly referenceNode: Node;
    readonly pointerBeforeReferenceNode: boolean;
    readonly whatToShow: number;
    readonly filter: NodeFilter | null;
    nextNode(): Node | null;
    previousNode(): Node | null;
    detach(): void;
}

declare var NodeIterator: {
    prototype: NodeIterator;
    new (): NodeIterator;
}

interface TreeWalker {
    readonly root: Node;
    readonly whatToShow: number;
    readonly filter: NodeFilter | null;
    currentNode: Node;
    parentNode(): Node | null;
    firstChild(): Node | null;
    lastChild(): Node | null;
    previousSibling(): Node | null;
    nextSibling(): Node | null;
    previousNode(): Node | null;
    nextNode(): Node | null;
}

declare var TreeWalker: {
    prototype: TreeWalker;
    new (): TreeWalker;
}

interface DOMTokenList {
    readonly length: number;
    value: string;
    item(index: number): string | null;
    contains(token: string): boolean;
    add(...tokens: string[]): void;
    remove(...tokens: string[]): void;
    toggle(token: string, force?: boolean): boolean;
    replace(token: string, newToken: string): void;
    supports(token: string): boolean;
    [index: number]: string;
}

declare var DOMTokenList: {
    prototype: DOMTokenList;
    new (): DOMTokenList;
}

interface DOMParser {
    parseFromString(str: string, type: any): Document;
}

declare var DOMParser: {
    prototype: DOMParser;
    new (): DOMParser;
}

interface XMLSerializer {
    serializeToString(root: Node): string;
}

declare var XMLSerializer: {
    prototype: XMLSerializer;
    new (): XMLSerializer;
}

interface MediaKeySystemAccess {
    readonly keySystem: string;
    getConfiguration(): MediaKeySystemConfiguration;
    createMediaKeys(): Promise<MediaKeys>;
}

declare var MediaKeySystemAccess: {
    prototype: MediaKeySystemAccess;
    new (): MediaKeySystemAccess;
}

interface MediaKeys {
    createSession(sessionType?: MediaKeySessionType): MediaKeySession;
    setServerCertificate(serverCertificate: BufferSource): Promise<boolean>;
}

declare var MediaKeys: {
    prototype: MediaKeys;
    new (): MediaKeys;
}

interface MediaKeySessionEventMap {
    "keystatuseschange": Event;
    "message": MediaKeyMessageEvent;
}

interface MediaKeySession extends EventTarget {
    readonly sessionId: string;
    readonly expiration: number;
    readonly closed: Promise<void>;
    readonly keyStatuses: MediaKeyStatusMap;
    onkeystatuseschange: (this: MediaKeySession, ev: Event) => any;
    onmessage: (this: MediaKeySession, ev: MediaKeyMessageEvent) => any;
    generateRequest(initDataType: string, initData: BufferSource): Promise<void>;
    load(sessionId: string): Promise<boolean>;
    update(response: BufferSource): Promise<void>;
    close(): Promise<void>;
    remove(): Promise<void>;
    addEventListener<K extends keyof MediaKeySessionEventMap>(type: K, listener: (this: MediaKeySession, ev: MediaKeySessionEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var MediaKeySession: {
    prototype: MediaKeySession;
    new (): MediaKeySession;
}

interface MediaKeyStatusMap {
    readonly size: number;
    has(keyId: BufferSource): boolean;
    get(keyId: BufferSource): any;
}

declare var MediaKeyStatusMap: {
    prototype: MediaKeyStatusMap;
    new (): MediaKeyStatusMap;
}

interface MediaKeyMessageEvent extends Event {
    readonly messageType: MediaKeyMessageType;
    readonly message: ArrayBuffer;
}

declare var MediaKeyMessageEvent: {
    prototype: MediaKeyMessageEvent;
    new (type: string, eventInitDict: MediaKeyMessageEventInit): MediaKeyMessageEvent;
}

interface MediaEncryptedEvent extends Event {
    readonly initDataType: string;
    readonly initData: ArrayBuffer | null;
}

declare var MediaEncryptedEvent: {
    prototype: MediaEncryptedEvent;
    new (type: string, eventInitDict?: MediaEncryptedEventInit): MediaEncryptedEvent;
}

interface Headers {
    append(name: any, value: any): void;
    delete(name: any): void;
    get(name: any): any;
    has(name: any): boolean;
    set(name: any, value: any): void;
}

declare var Headers: {
    prototype: Headers;
    new (init?: HeadersInit): Headers;
}

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
    new (input: RequestInfo, init?: RequestInit): Request;
}

interface Response extends Object, Body {
    readonly type: ResponseType;
    readonly url: string;
    readonly redirected: boolean;
    readonly status: number;
    readonly ok: boolean;
    readonly statusText: any;
    readonly headers: Headers;
    readonly trailer: Promise<Headers>;
    clone(): Response;
}

declare var Response: {
    prototype: Response;
    new (body?: BodyInit, init?: ResponseInit): Response;
    error(): Response;
    redirect(url: string, status?: number): Response;
}

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
}

interface File extends Blob {
    readonly name: string;
    readonly lastModified: number;
}

declare var File: {
    prototype: File;
    new (parts: (ArrayBuffer | ArrayBufferView | Blob | string)[], filename: string, properties?: FilePropertyBag): File;
}

interface FileList {
    readonly length: number;
    item(index: number): File | null;
    [index: number]: File;
}

declare var FileList: {
    prototype: FileList;
    new (): FileList;
}

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
    new (): FileReader;
    readonly EMPTY: number;
    readonly LOADING: number;
    readonly DONE: number;
}

interface FileReaderSync {
    readAsArrayBuffer(blob: Blob): ArrayBuffer;
    readAsText(blob: Blob, label?: string): string;
    readAsDataURL(blob: Blob): string;
}

declare var FileReaderSync: {
    prototype: FileReaderSync;
    new (): FileReaderSync;
}

interface SVGFilterElement extends SVGElement, SVGURIReference, SVGUnitTypes {
    readonly filterUnits: SVGAnimatedEnumeration;
    readonly primitiveUnits: SVGAnimatedEnumeration;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    readonly width: SVGAnimatedLength;
    readonly height: SVGAnimatedLength;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFilterElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFilterElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGFilterElement: {
    prototype: SVGFilterElement;
    new (): SVGFilterElement;
}

interface SVGFEBlendElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly in2: SVGAnimatedString;
    readonly mode: SVGAnimatedEnumeration;
    readonly SVG_FEBLEND_MODE_UNKNOWN: number;
    readonly SVG_FEBLEND_MODE_NORMAL: number;
    readonly SVG_FEBLEND_MODE_MULTIPLY: number;
    readonly SVG_FEBLEND_MODE_SCREEN: number;
    readonly SVG_FEBLEND_MODE_DARKEN: number;
    readonly SVG_FEBLEND_MODE_LIGHTEN: number;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEBlendElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEBlendElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGFEBlendElement: {
    prototype: SVGFEBlendElement;
    new (): SVGFEBlendElement;
    readonly SVG_FEBLEND_MODE_UNKNOWN: number;
    readonly SVG_FEBLEND_MODE_NORMAL: number;
    readonly SVG_FEBLEND_MODE_MULTIPLY: number;
    readonly SVG_FEBLEND_MODE_SCREEN: number;
    readonly SVG_FEBLEND_MODE_DARKEN: number;
    readonly SVG_FEBLEND_MODE_LIGHTEN: number;
}

interface SVGFEColorMatrixElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly type: SVGAnimatedEnumeration;
    readonly values: SVGAnimatedNumberList;
    readonly SVG_FECOLORMATRIX_TYPE_UNKNOWN: number;
    readonly SVG_FECOLORMATRIX_TYPE_MATRIX: number;
    readonly SVG_FECOLORMATRIX_TYPE_SATURATE: number;
    readonly SVG_FECOLORMATRIX_TYPE_HUEROTATE: number;
    readonly SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA: number;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEColorMatrixElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEColorMatrixElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGFEColorMatrixElement: {
    prototype: SVGFEColorMatrixElement;
    new (): SVGFEColorMatrixElement;
    readonly SVG_FECOLORMATRIX_TYPE_UNKNOWN: number;
    readonly SVG_FECOLORMATRIX_TYPE_MATRIX: number;
    readonly SVG_FECOLORMATRIX_TYPE_SATURATE: number;
    readonly SVG_FECOLORMATRIX_TYPE_HUEROTATE: number;
    readonly SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA: number;
}

interface SVGFEComponentTransferElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEComponentTransferElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEComponentTransferElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGFEComponentTransferElement: {
    prototype: SVGFEComponentTransferElement;
    new (): SVGFEComponentTransferElement;
}

interface SVGComponentTransferFunctionElement extends SVGElement {
    readonly type: SVGAnimatedEnumeration;
    readonly tableValues: SVGAnimatedNumberList;
    readonly slope: SVGAnimatedNumber;
    readonly intercept: SVGAnimatedNumber;
    readonly amplitude: SVGAnimatedNumber;
    readonly exponent: SVGAnimatedNumber;
    readonly offset: SVGAnimatedNumber;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_TABLE: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_LINEAR: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_GAMMA: number;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGComponentTransferFunctionElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGComponentTransferFunctionElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGComponentTransferFunctionElement: {
    prototype: SVGComponentTransferFunctionElement;
    new (): SVGComponentTransferFunctionElement;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_TABLE: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_LINEAR: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_GAMMA: number;
}

interface SVGFEFuncRElement extends SVGComponentTransferFunctionElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEFuncRElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEFuncRElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGFEFuncRElement: {
    prototype: SVGFEFuncRElement;
    new (): SVGFEFuncRElement;
}

interface SVGFEFuncGElement extends SVGComponentTransferFunctionElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEFuncGElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEFuncGElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGFEFuncGElement: {
    prototype: SVGFEFuncGElement;
    new (): SVGFEFuncGElement;
}

interface SVGFEFuncBElement extends SVGComponentTransferFunctionElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEFuncBElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEFuncBElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGFEFuncBElement: {
    prototype: SVGFEFuncBElement;
    new (): SVGFEFuncBElement;
}

interface SVGFEFuncAElement extends SVGComponentTransferFunctionElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEFuncAElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEFuncAElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGFEFuncAElement: {
    prototype: SVGFEFuncAElement;
    new (): SVGFEFuncAElement;
}

interface SVGFECompositeElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly in2: SVGAnimatedString;
    readonly operator: SVGAnimatedEnumeration;
    readonly k1: SVGAnimatedNumber;
    readonly k2: SVGAnimatedNumber;
    readonly k3: SVGAnimatedNumber;
    readonly k4: SVGAnimatedNumber;
    readonly SVG_FECOMPOSITE_OPERATOR_UNKNOWN: number;
    readonly SVG_FECOMPOSITE_OPERATOR_OVER: number;
    readonly SVG_FECOMPOSITE_OPERATOR_IN: number;
    readonly SVG_FECOMPOSITE_OPERATOR_OUT: number;
    readonly SVG_FECOMPOSITE_OPERATOR_ATOP: number;
    readonly SVG_FECOMPOSITE_OPERATOR_XOR: number;
    readonly SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: number;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFECompositeElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFECompositeElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGFECompositeElement: {
    prototype: SVGFECompositeElement;
    new (): SVGFECompositeElement;
    readonly SVG_FECOMPOSITE_OPERATOR_UNKNOWN: number;
    readonly SVG_FECOMPOSITE_OPERATOR_OVER: number;
    readonly SVG_FECOMPOSITE_OPERATOR_IN: number;
    readonly SVG_FECOMPOSITE_OPERATOR_OUT: number;
    readonly SVG_FECOMPOSITE_OPERATOR_ATOP: number;
    readonly SVG_FECOMPOSITE_OPERATOR_XOR: number;
    readonly SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: number;
}

interface SVGFEConvolveMatrixElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly orderX: SVGAnimatedInteger;
    readonly orderY: SVGAnimatedInteger;
    readonly kernelMatrix: SVGAnimatedNumberList;
    readonly divisor: SVGAnimatedNumber;
    readonly bias: SVGAnimatedNumber;
    readonly targetX: SVGAnimatedInteger;
    readonly targetY: SVGAnimatedInteger;
    readonly edgeMode: SVGAnimatedEnumeration;
    readonly kernelUnitLengthX: SVGAnimatedNumber;
    readonly kernelUnitLengthY: SVGAnimatedNumber;
    readonly SVG_EDGEMODE_UNKNOWN: number;
    readonly SVG_EDGEMODE_DUPLICATE: number;
    readonly SVG_EDGEMODE_WRAP: number;
    readonly SVG_EDGEMODE_NONE: number;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEConvolveMatrixElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEConvolveMatrixElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGFEConvolveMatrixElement: {
    prototype: SVGFEConvolveMatrixElement;
    new (): SVGFEConvolveMatrixElement;
    readonly SVG_EDGEMODE_UNKNOWN: number;
    readonly SVG_EDGEMODE_DUPLICATE: number;
    readonly SVG_EDGEMODE_WRAP: number;
    readonly SVG_EDGEMODE_NONE: number;
}

interface SVGFEDiffuseLightingElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly surfaceScale: SVGAnimatedNumber;
    readonly diffuseConstant: SVGAnimatedNumber;
    readonly kernelUnitLengthX: SVGAnimatedNumber;
    readonly kernelUnitLengthY: SVGAnimatedNumber;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEDiffuseLightingElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEDiffuseLightingElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGFEDiffuseLightingElement: {
    prototype: SVGFEDiffuseLightingElement;
    new (): SVGFEDiffuseLightingElement;
}

interface SVGFEDistantLightElement extends SVGElement {
    readonly azimuth: SVGAnimatedNumber;
    readonly elevation: SVGAnimatedNumber;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEDistantLightElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEDistantLightElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGFEDistantLightElement: {
    prototype: SVGFEDistantLightElement;
    new (): SVGFEDistantLightElement;
}

interface SVGFEPointLightElement extends SVGElement {
    readonly x: SVGAnimatedNumber;
    readonly y: SVGAnimatedNumber;
    readonly z: SVGAnimatedNumber;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEPointLightElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEPointLightElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGFEPointLightElement: {
    prototype: SVGFEPointLightElement;
    new (): SVGFEPointLightElement;
}

interface SVGFESpotLightElement extends SVGElement {
    readonly x: SVGAnimatedNumber;
    readonly y: SVGAnimatedNumber;
    readonly z: SVGAnimatedNumber;
    readonly pointsAtX: SVGAnimatedNumber;
    readonly pointsAtY: SVGAnimatedNumber;
    readonly pointsAtZ: SVGAnimatedNumber;
    readonly specularExponent: SVGAnimatedNumber;
    readonly limitingConeAngle: SVGAnimatedNumber;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFESpotLightElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFESpotLightElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGFESpotLightElement: {
    prototype: SVGFESpotLightElement;
    new (): SVGFESpotLightElement;
}

interface SVGFEDisplacementMapElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly in2: SVGAnimatedString;
    readonly scale: SVGAnimatedNumber;
    readonly xChannelSelector: SVGAnimatedEnumeration;
    readonly yChannelSelector: SVGAnimatedEnumeration;
    readonly SVG_CHANNEL_UNKNOWN: number;
    readonly SVG_CHANNEL_R: number;
    readonly SVG_CHANNEL_G: number;
    readonly SVG_CHANNEL_B: number;
    readonly SVG_CHANNEL_A: number;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEDisplacementMapElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEDisplacementMapElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGFEDisplacementMapElement: {
    prototype: SVGFEDisplacementMapElement;
    new (): SVGFEDisplacementMapElement;
    readonly SVG_CHANNEL_UNKNOWN: number;
    readonly SVG_CHANNEL_R: number;
    readonly SVG_CHANNEL_G: number;
    readonly SVG_CHANNEL_B: number;
    readonly SVG_CHANNEL_A: number;
}

interface SVGFEDropShadowElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly dx: SVGAnimatedNumber;
    readonly dy: SVGAnimatedNumber;
    readonly stdDeviationX: SVGAnimatedNumber;
    readonly stdDeviationY: SVGAnimatedNumber;
    setStdDeviation(stdDeviationX: number, stdDeviationY: number): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEDropShadowElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEDropShadowElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGFEDropShadowElement: {
    prototype: SVGFEDropShadowElement;
    new (): SVGFEDropShadowElement;
}

interface SVGFEFloodElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEFloodElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEFloodElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGFEFloodElement: {
    prototype: SVGFEFloodElement;
    new (): SVGFEFloodElement;
}

interface SVGFEGaussianBlurElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly stdDeviationX: SVGAnimatedNumber;
    readonly stdDeviationY: SVGAnimatedNumber;
    readonly edgeMode: SVGAnimatedEnumeration;
    setStdDeviation(stdDeviationX: number, stdDeviationY: number): void;
    readonly SVG_EDGEMODE_UNKNOWN: number;
    readonly SVG_EDGEMODE_DUPLICATE: number;
    readonly SVG_EDGEMODE_WRAP: number;
    readonly SVG_EDGEMODE_NONE: number;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEGaussianBlurElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEGaussianBlurElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGFEGaussianBlurElement: {
    prototype: SVGFEGaussianBlurElement;
    new (): SVGFEGaussianBlurElement;
    readonly SVG_EDGEMODE_UNKNOWN: number;
    readonly SVG_EDGEMODE_DUPLICATE: number;
    readonly SVG_EDGEMODE_WRAP: number;
    readonly SVG_EDGEMODE_NONE: number;
}

interface SVGFEImageElement extends SVGElement, SVGFilterPrimitiveStandardAttributes, SVGURIReference {
    readonly preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
    readonly crossOrigin: SVGAnimatedString;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEImageElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEImageElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGFEImageElement: {
    prototype: SVGFEImageElement;
    new (): SVGFEImageElement;
}

interface SVGFEMergeElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEMergeElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEMergeElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGFEMergeElement: {
    prototype: SVGFEMergeElement;
    new (): SVGFEMergeElement;
}

interface SVGFEMergeNodeElement extends SVGElement {
    readonly in1: SVGAnimatedString;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEMergeNodeElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEMergeNodeElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGFEMergeNodeElement: {
    prototype: SVGFEMergeNodeElement;
    new (): SVGFEMergeNodeElement;
}

interface SVGFEMorphologyElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly operator: SVGAnimatedEnumeration;
    readonly radiusX: SVGAnimatedNumber;
    readonly radiusY: SVGAnimatedNumber;
    readonly SVG_MORPHOLOGY_OPERATOR_UNKNOWN: number;
    readonly SVG_MORPHOLOGY_OPERATOR_ERODE: number;
    readonly SVG_MORPHOLOGY_OPERATOR_DILATE: number;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEMorphologyElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEMorphologyElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGFEMorphologyElement: {
    prototype: SVGFEMorphologyElement;
    new (): SVGFEMorphologyElement;
    readonly SVG_MORPHOLOGY_OPERATOR_UNKNOWN: number;
    readonly SVG_MORPHOLOGY_OPERATOR_ERODE: number;
    readonly SVG_MORPHOLOGY_OPERATOR_DILATE: number;
}

interface SVGFEOffsetElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly dx: SVGAnimatedNumber;
    readonly dy: SVGAnimatedNumber;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFEOffsetElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFEOffsetElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGFEOffsetElement: {
    prototype: SVGFEOffsetElement;
    new (): SVGFEOffsetElement;
}

interface SVGFESpecularLightingElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly surfaceScale: SVGAnimatedNumber;
    readonly specularConstant: SVGAnimatedNumber;
    readonly specularExponent: SVGAnimatedNumber;
    readonly kernelUnitLengthX: SVGAnimatedNumber;
    readonly kernelUnitLengthY: SVGAnimatedNumber;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFESpecularLightingElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFESpecularLightingElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGFESpecularLightingElement: {
    prototype: SVGFESpecularLightingElement;
    new (): SVGFESpecularLightingElement;
}

interface SVGFETileElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFETileElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFETileElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGFETileElement: {
    prototype: SVGFETileElement;
    new (): SVGFETileElement;
}

interface SVGFETurbulenceElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly baseFrequencyX: SVGAnimatedNumber;
    readonly baseFrequencyY: SVGAnimatedNumber;
    readonly numOctaves: SVGAnimatedInteger;
    readonly seed: SVGAnimatedNumber;
    readonly stitchTiles: SVGAnimatedEnumeration;
    readonly type: SVGAnimatedEnumeration;
    readonly SVG_TURBULENCE_TYPE_UNKNOWN: number;
    readonly SVG_TURBULENCE_TYPE_FRACTALNOISE: number;
    readonly SVG_TURBULENCE_TYPE_TURBULENCE: number;
    readonly SVG_STITCHTYPE_UNKNOWN: number;
    readonly SVG_STITCHTYPE_STITCH: number;
    readonly SVG_STITCHTYPE_NOSTITCH: number;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGFETurbulenceElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGFETurbulenceElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGFETurbulenceElement: {
    prototype: SVGFETurbulenceElement;
    new (): SVGFETurbulenceElement;
    readonly SVG_TURBULENCE_TYPE_UNKNOWN: number;
    readonly SVG_TURBULENCE_TYPE_FRACTALNOISE: number;
    readonly SVG_TURBULENCE_TYPE_TURBULENCE: number;
    readonly SVG_STITCHTYPE_UNKNOWN: number;
    readonly SVG_STITCHTYPE_STITCH: number;
    readonly SVG_STITCHTYPE_NOSTITCH: number;
}

interface Gamepad {
    readonly id: string;
    readonly index: number;
    readonly connected: boolean;
    readonly timestamp: number;
    readonly mapping: GamepadMappingType;
    readonly axes: number[];
    readonly buttons: GamepadButton[];
}

declare var Gamepad: {
    prototype: Gamepad;
    new (): Gamepad;
}

interface GamepadButton {
    readonly pressed: boolean;
    readonly touched: boolean;
    readonly value: number;
}

declare var GamepadButton: {
    prototype: GamepadButton;
    new (): GamepadButton;
}

interface GamepadEvent extends Event {
    readonly gamepad: Gamepad;
}

declare var GamepadEvent: {
    prototype: GamepadEvent;
    new (eventInitDict: GamepadEventInit): GamepadEvent;
}

interface SensorEventMap {
    "change": Event;
    "activate": Event;
    "error": SensorErrorEvent;
}

interface Sensor extends EventTarget {
    readonly state: SensorState;
    readonly timestamp: number | null;
    onchange: (this: Sensor, ev: Event) => any;
    onactivate: (this: Sensor, ev: Event) => any;
    onerror: (this: Sensor, ev: SensorErrorEvent) => any;
    start(): void;
    stop(): void;
    addEventListener<K extends keyof SensorEventMap>(type: K, listener: (this: Sensor, ev: SensorEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var Sensor: {
    prototype: Sensor;
    new (): Sensor;
}

interface SensorErrorEvent extends Event {
    readonly error: any;
}

declare var SensorErrorEvent: {
    prototype: SensorErrorEvent;
    new (type: string, errorEventInitDict: SensorErrorEventInit): SensorErrorEvent;
}

interface DOMPointReadOnly {
    readonly x: number;
    readonly y: number;
    readonly z: number;
    readonly w: number;
    matrixTransform(matrix?: DOMMatrixInit): DOMPoint;
}

declare var DOMPointReadOnly: {
    prototype: DOMPointReadOnly;
    new (x?: number, y?: number, z?: number, w?: number): DOMPointReadOnly;
    fromPoint(other?: DOMPointInit): DOMPointReadOnly;
}

interface DOMPoint extends DOMPointReadOnly {
    x: number;
    y: number;
    z: number;
    w: number;
}

declare var DOMPoint: {
    prototype: DOMPoint;
    new (x?: number, y?: number, z?: number, w?: number): DOMPoint;
    fromPoint(other?: DOMPointInit): DOMPoint;
}

interface DOMRectReadOnly {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
    readonly top: number;
    readonly right: number;
    readonly bottom: number;
    readonly left: number;
}

declare var DOMRectReadOnly: {
    prototype: DOMRectReadOnly;
    new (x?: number, y?: number, width?: number, height?: number): DOMRectReadOnly;
    fromRect(other?: DOMRectInit): DOMRectReadOnly;
}

interface DOMRect extends DOMRectReadOnly {
    x: number;
    y: number;
    width: number;
    height: number;
}

declare var DOMRect: {
    prototype: DOMRect;
    new (x?: number, y?: number, width?: number, height?: number): DOMRect;
    fromRect(other?: DOMRectInit): DOMRect;
}

interface DOMQuad {
    readonly p1: DOMPoint;
    readonly p2: DOMPoint;
    readonly p3: DOMPoint;
    readonly p4: DOMPoint;
    getBounds(): DOMRect;
}

declare var DOMQuad: {
    prototype: DOMQuad;
    new (p1?: DOMPointInit, p2?: DOMPointInit, p3?: DOMPointInit, p4?: DOMPointInit): DOMQuad;
    fromRect(other?: DOMRectInit): DOMQuad;
    fromQuad(other?: DOMQuadInit): DOMQuad;
}

interface DOMMatrixReadOnly {
    readonly a: number;
    readonly b: number;
    readonly c: number;
    readonly d: number;
    readonly e: number;
    readonly f: number;
    readonly m11: number;
    readonly m12: number;
    readonly m13: number;
    readonly m14: number;
    readonly m21: number;
    readonly m22: number;
    readonly m23: number;
    readonly m24: number;
    readonly m31: number;
    readonly m32: number;
    readonly m33: number;
    readonly m34: number;
    readonly m41: number;
    readonly m42: number;
    readonly m43: number;
    readonly m44: number;
    readonly is2D: boolean;
    readonly isIdentity: boolean;
    translate(tx?: number, ty?: number, tz?: number): DOMMatrix;
    scale(scaleX?: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    scale3d(scale?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    rotate(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
    rotateFromVector(x?: number, y?: number): DOMMatrix;
    rotateAxisAngle(x?: number, y?: number, z?: number, angle?: number): DOMMatrix;
    skewX(sx?: number): DOMMatrix;
    skewY(sy?: number): DOMMatrix;
    multiply(other?: DOMMatrixInit): DOMMatrix;
    flipX(): DOMMatrix;
    flipY(): DOMMatrix;
    inverse(): DOMMatrix;
    transformPoint(point?: DOMPointInit): DOMPoint;
    toFloat32Array(): Float32Array;
    toFloat64Array(): Float64Array;
}

declare var DOMMatrixReadOnly: {
    prototype: DOMMatrixReadOnly;
    new (): DOMMatrixReadOnly;
    new (transformList: string): DOMMatrixReadOnly;
    new (numberSequence: any): DOMMatrixReadOnly;
    fromMatrix(other?: DOMMatrixInit): DOMMatrixReadOnly;
    fromFloat32Array(array32: Float32Array): DOMMatrixReadOnly;
    fromFloat64Array(array64: Float64Array): DOMMatrixReadOnly;
}

interface DOMMatrix extends DOMMatrixReadOnly {
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
    m11: number;
    m12: number;
    m13: number;
    m14: number;
    m21: number;
    m22: number;
    m23: number;
    m24: number;
    m31: number;
    m32: number;
    m33: number;
    m34: number;
    m41: number;
    m42: number;
    m43: number;
    m44: number;
    multiplySelf(other?: DOMMatrixInit): DOMMatrix;
    preMultiplySelf(other?: DOMMatrixInit): DOMMatrix;
    translateSelf(tx?: number, ty?: number, tz?: number): DOMMatrix;
    scaleSelf(scaleX?: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    scale3dSelf(scale?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    rotateSelf(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
    rotateFromVectorSelf(x?: number, y?: number): DOMMatrix;
    rotateAxisAngleSelf(x?: number, y?: number, z?: number, angle?: number): DOMMatrix;
    skewXSelf(sx?: number): DOMMatrix;
    skewYSelf(sy?: number): DOMMatrix;
    invertSelf(): DOMMatrix;
    setMatrixValue(transformList: string): DOMMatrix;
}

declare var DOMMatrix: {
    prototype: DOMMatrix;
    new (): DOMMatrix;
    new (transformList: string): DOMMatrix;
    new (numberSequence: any): DOMMatrix;
    fromMatrix(other?: DOMMatrixInit): DOMMatrix;
    fromFloat32Array(array32: Float32Array): DOMMatrix;
    fromFloat64Array(array64: Float64Array): DOMMatrix;
}

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
    new (): Performance;
}

interface Example {
}

declare var Example: {
    prototype: Example;
    new (): Example;
}

interface HTMLAllCollection {
    readonly length: number;
    namedItem(name: string): HTMLCollection | Element | null;
    item(nameOrIndex?: string): HTMLCollection | Element | null;
    [index: number]: Element;
}

declare var HTMLAllCollection: {
    prototype: HTMLAllCollection;
    new (): HTMLAllCollection;
}

interface HTMLFormControlsCollection extends HTMLCollectionBase {
    namedItem(name: string): RadioNodeList | Element | null;
}

declare var HTMLFormControlsCollection: {
    prototype: HTMLFormControlsCollection;
    new (): HTMLFormControlsCollection;
}

interface RadioNodeList extends NodeList {
    value: string;
}

declare var RadioNodeList: {
    prototype: RadioNodeList;
    new (): RadioNodeList;
}

interface HTMLOptionsCollection extends HTMLCollectionOf<HTMLOptionElement> {
    length: number;
    selectedIndex: number;
    add(element: HTMLOptionElement | HTMLOptGroupElement, before?: HTMLElement | number): void;
    remove(index: number): void;
}

declare var HTMLOptionsCollection: {
    prototype: HTMLOptionsCollection;
    new (): HTMLOptionsCollection;
}

interface DOMStringList {
    readonly length: number;
    item(index: number): string | null;
    contains(string: string): boolean;
    [index: number]: string;
}

declare var DOMStringList: {
    prototype: DOMStringList;
    new (): DOMStringList;
}

interface HTMLElement extends Element, GlobalEventHandlers, DocumentAndElementEventHandlers, ElementContentEditable, ElementCSSInlineStyle {
    title: string;
    lang: string;
    translate: boolean;
    dir: string;
    readonly dataset: DOMStringMap;
    hidden: boolean;
    tabIndex: number;
    accessKey: string;
    readonly accessKeyLabel: string;
    draggable: boolean;
    contextMenu: HTMLMenuElement | null;
    spellcheck: boolean;
    innerText: string;
    readonly offsetParent: Element | null;
    readonly offsetTop: number;
    readonly offsetLeft: number;
    readonly offsetWidth: number;
    readonly offsetHeight: number;
    click(): void;
    focus(): void;
    blur(): void;
    forceSpellCheck(): void;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLElement: {
    prototype: HTMLElement;
    new (): HTMLElement;
}

interface HTMLUnknownElement extends HTMLElement {
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLUnknownElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLUnknownElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLUnknownElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLUnknownElement: {
    prototype: HTMLUnknownElement;
    new (): HTMLUnknownElement;
}

interface DOMStringMap {
    [name: string]: string | undefined;
}

declare var DOMStringMap: {
    prototype: DOMStringMap;
    new (): DOMStringMap;
}

interface HTMLHtmlElement extends HTMLElement {
    /**
      * Sets or retrieves the DTD version that governs the current document.
      */
    version: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLHtmlElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLHtmlElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLHtmlElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLHtmlElement: {
    prototype: HTMLHtmlElement;
    new (): HTMLHtmlElement;
}

interface HTMLHeadElement extends HTMLElement {
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLHeadElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLHeadElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLHeadElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLHeadElement: {
    prototype: HTMLHeadElement;
    new (): HTMLHeadElement;
}

interface HTMLTitleElement extends HTMLElement {
    /**
      * Retrieves or sets the text of the object as a string. 
      */
    text: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLTitleElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLTitleElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLTitleElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLTitleElement: {
    prototype: HTMLTitleElement;
    new (): HTMLTitleElement;
}

interface HTMLBaseElement extends HTMLElement {
    /**
      * Gets or sets the baseline URL on which relative links are based.
      */
    href: string;
    /**
      * Sets or retrieves the window or frame at which to target content.
      */
    target: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLBaseElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLBaseElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLBaseElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLBaseElement: {
    prototype: HTMLBaseElement;
    new (): HTMLBaseElement;
}

interface HTMLLinkElement extends HTMLElement, LinkStyle {
    /**
      * Sets or retrieves a destination URL or an anchor point.
      */
    href: string;
    crossOrigin: string | null;
    /**
      * Sets or retrieves the relationship between the object and the destination of the link.
      */
    rel: string;
    as: RequestDestination;
    readonly relList: DOMTokenList;
    /**
      * Sets or retrieves the media type.
      */
    media: string;
    nonce: string;
    integrity: string;
    /**
      * Sets or retrieves the language code of the object.
      */
    hreflang: string;
    /**
      * Sets or retrieves the MIME type of the object.
      */
    type: string;
    readonly sizes: DOMTokenList;
    referrerPolicy: string;
    scope: string;
    workerType: WorkerType;
    useCache: boolean;
    /**
      * Sets or retrieves the character set used to encode the object.
      */
    charset: string;
    /**
      * Sets or retrieves the relationship between the object and the destination of the link.
      */
    rev: string;
    /**
      * Sets or retrieves the window or frame at which to target content.
      */
    target: string;
    import?: Document;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLLinkElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLLinkElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLLinkElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLLinkElement: {
    prototype: HTMLLinkElement;
    new (): HTMLLinkElement;
}

interface HTMLMetaElement extends HTMLElement {
    /**
      * Sets or retrieves the value specified in the content attribute of the meta object.
      */
    name: string;
    /**
      * Gets or sets information used to bind the value of a content attribute of a meta element to an HTTP response header.
      */
    httpEquiv: string;
    /**
      * Gets or sets meta-information to associate with httpEquiv or name.
      */
    content: string;
    /**
      * Sets or retrieves a scheme to be used in interpreting the value of a property specified for the object.
      */
    scheme: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLMetaElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLMetaElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLMetaElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLMetaElement: {
    prototype: HTMLMetaElement;
    new (): HTMLMetaElement;
}

interface HTMLStyleElement extends HTMLElement, LinkStyle {
    /**
      * Sets or retrieves the media type.
      */
    media: string;
    nonce: string;
    /**
      * Retrieves the CSS language in which the style sheet is written.
      */
    type: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLStyleElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLStyleElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLStyleElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLStyleElement: {
    prototype: HTMLStyleElement;
    new (): HTMLStyleElement;
}

interface HTMLBodyElement extends HTMLElement, WindowEventHandlers {
    text: string;
    link: string;
    vLink: string;
    aLink: string;
    bgColor: string;
    background: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLBodyElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLBodyElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLBodyElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof WindowEventHandlersEventMap>(type: K, listener: (this: HTMLBodyElement, ev: WindowEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLBodyElement: {
    prototype: HTMLBodyElement;
    new (): HTMLBodyElement;
}

interface HTMLHeadingElement extends HTMLElement {
    /**
      * Sets or retrieves a value that indicates the table alignment.
      */
    align: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLHeadingElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLHeadingElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLHeadingElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLHeadingElement: {
    prototype: HTMLHeadingElement;
    new (): HTMLHeadingElement;
}

interface HTMLParagraphElement extends HTMLElement {
    /**
      * Sets or retrieves how the object is aligned with adjacent text. 
      */
    align: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLParagraphElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLParagraphElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLParagraphElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLParagraphElement: {
    prototype: HTMLParagraphElement;
    new (): HTMLParagraphElement;
}

interface HTMLHRElement extends HTMLElement {
    /**
      * Sets or retrieves how the object is aligned with adjacent text.
      */
    align: string;
    color: string;
    /**
      * Sets or retrieves whether the horizontal rule is drawn with 3-D shading.
      */
    noShade: boolean;
    size: string;
    /**
      * Sets or retrieves the width of the object.
      */
    width: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLHRElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLHRElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLHRElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLHRElement: {
    prototype: HTMLHRElement;
    new (): HTMLHRElement;
}

interface HTMLPreElement extends HTMLElement {
    /**
      * Sets or gets a value that you can use to implement your own width functionality for the object.
      */
    width: number;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLPreElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLPreElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLPreElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLPreElement: {
    prototype: HTMLPreElement;
    new (): HTMLPreElement;
}

interface HTMLQuoteElement extends HTMLElement {
    /**
      * Sets or retrieves reference information about the object.
      */
    cite: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLQuoteElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLQuoteElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLQuoteElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLQuoteElement: {
    prototype: HTMLQuoteElement;
    new (): HTMLQuoteElement;
}

interface HTMLOListElement extends HTMLElement {
    reversed: boolean;
    /**
      * The starting number.
      */
    start: number;
    type: string;
    compact: boolean;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLOListElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLOListElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLOListElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLOListElement: {
    prototype: HTMLOListElement;
    new (): HTMLOListElement;
}

interface HTMLUListElement extends HTMLElement {
    compact: boolean;
    type: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLUListElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLUListElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLUListElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLUListElement: {
    prototype: HTMLUListElement;
    new (): HTMLUListElement;
}

interface HTMLLIElement extends HTMLElement {
    /**
      * Sets or retrieves the value of a list item.
      */
    value: number;
    type: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLLIElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLLIElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLLIElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLLIElement: {
    prototype: HTMLLIElement;
    new (): HTMLLIElement;
}

interface HTMLDListElement extends HTMLElement {
    compact: boolean;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLDListElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLDListElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLDListElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLDListElement: {
    prototype: HTMLDListElement;
    new (): HTMLDListElement;
}

interface HTMLDivElement extends HTMLElement {
    /**
      * Sets or retrieves how the object is aligned with adjacent text. 
      */
    align: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLDivElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLDivElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLDivElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLDivElement: {
    prototype: HTMLDivElement;
    new (): HTMLDivElement;
}

interface HTMLAnchorElement extends HTMLElement, HTMLHyperlinkElementUtils {
    /**
      * Sets or retrieves the window or frame at which to target content.
      */
    target: string;
    download: string;
    ping: string;
    /**
      * Sets or retrieves the relationship between the object and the destination of the link.
      */
    rel: string;
    readonly relList: DOMTokenList;
    /**
      * Sets or retrieves the language code of the object.
      */
    hreflang: string;
    type: string;
    /**
      * Retrieves or sets the text of the object as a string. 
      */
    text: string;
    referrerPolicy: string;
    /**
      * Sets or retrieves the coordinates of the object.
      */
    coords: string;
    /**
      * Sets or retrieves the character set used to encode the object.
      */
    charset: string;
    /**
      * Sets or retrieves the shape of the object.
      */
    name: string;
    /**
      * Sets or retrieves the relationship between the object and the destination of the link.
      */
    rev: string;
    /**
      * Sets or retrieves the shape of the object.
      */
    shape: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLAnchorElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLAnchorElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLAnchorElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLAnchorElement: {
    prototype: HTMLAnchorElement;
    new (): HTMLAnchorElement;
}

interface HTMLDataElement extends HTMLElement {
    value: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLDataElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLDataElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLDataElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLDataElement: {
    prototype: HTMLDataElement;
    new (): HTMLDataElement;
}

interface HTMLTimeElement extends HTMLElement {
    dateTime: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLTimeElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLTimeElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLTimeElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLTimeElement: {
    prototype: HTMLTimeElement;
    new (): HTMLTimeElement;
}

interface HTMLSpanElement extends HTMLElement {
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLSpanElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLSpanElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLSpanElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLSpanElement: {
    prototype: HTMLSpanElement;
    new (): HTMLSpanElement;
}

interface HTMLBRElement extends HTMLElement {
    /**
      * Sets or retrieves the side on which floating objects are not to be positioned when any IHTMLBlockElement is inserted into the document.
      */
    clear: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLBRElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLBRElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLBRElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLBRElement: {
    prototype: HTMLBRElement;
    new (): HTMLBRElement;
}

interface HTMLModElement extends HTMLElement {
    /**
      * Sets or retrieves reference information about the object.
      */
    cite: string;
    /**
      * Sets or retrieves the date and time of a modification to the object.
      */
    dateTime: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLModElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLModElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLModElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLModElement: {
    prototype: HTMLModElement;
    new (): HTMLModElement;
}

interface HTMLPictureElement extends HTMLElement {
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLPictureElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLPictureElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLPictureElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLPictureElement: {
    prototype: HTMLPictureElement;
    new (): HTMLPictureElement;
}

interface HTMLSourceElement extends HTMLElement {
    /**
      * The address or URL of the a media resource that is to be considered.
      */
    src: string;
    /**
     * Gets or sets the MIME type of a media resource.
     */
    type: string;
    srcset: string;
    sizes: string;
    /**
      * Gets or sets the intended media type of the media source.
     */
    media: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLSourceElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLSourceElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLSourceElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLSourceElement: {
    prototype: HTMLSourceElement;
    new (): HTMLSourceElement;
}

interface HTMLImageElement extends HTMLElement {
    /**
      * Sets or retrieves a text alternative to the graphic.
      */
    alt: string;
    /**
      * The address or URL of the a media resource that is to be considered.
      */
    src: string;
    srcset: string;
    sizes: string;
    crossOrigin: string | null;
    /**
      * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.
      */
    useMap: string;
    /**
      * Sets or retrieves whether the image is a server-side image map.
      */
    isMap: boolean;
    /**
      * Sets or retrieves the width of the object.
      */
    width: number;
    /**
      * Sets or retrieves the height of the object.
      */
    height: number;
    /**
      * The original width of the image resource before sizing.
      */
    readonly naturalWidth: number;
    /**
      * The original height of the image resource before sizing.
      */
    readonly naturalHeight: number;
    /**
      * Retrieves whether the object is fully loaded.
      */
    readonly complete: boolean;
    readonly currentSrc: string;
    referrerPolicy: string;
    /**
      * Sets or retrieves the name of the object.
      */
    name: string;
    lowsrc: string;
    /**
      * Sets or retrieves how the object is aligned with adjacent text.
      */
    align: string;
    /**
      * Sets or retrieves the width of the border to draw around the object.
      */
    hspace: number;
    /**
      * Sets or retrieves the vertical margin for the object.
      */
    vspace: number;
    /**
      * Sets or retrieves a Uniform Resource Identifier (URI) to a long description of the object.
      */
    longDesc: string;
    /**
      * Specifies the properties of a border drawn around an object.
      */
    border: string;
    readonly x: number;
    readonly y: number;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLImageElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLImageElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLImageElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLImageElement: {
    prototype: HTMLImageElement;
    new (): HTMLImageElement;
}

interface HTMLIFrameElement extends HTMLElement {
    /**
      * Sets or retrieves a URL to be loaded by the object.
      */
    src: string;
    srcdoc: string;
    /**
      * Sets or retrieves the frame name.
      */
    name: string;
    readonly sandbox: DOMTokenList;
    allowFullscreen: boolean;
    allowPaymentRequest: boolean;
    allowUserMedia: boolean;
    /**
      * Sets or retrieves the width of the object.
      */
    width: string;
    /**
      * Sets or retrieves the height of the object.
      */
    height: string;
    referrerPolicy: string;
    /**
      * Retrieves the document object of the page or frame.
      */
    readonly contentDocument: Document | null;
    /**
      * Retrieves the object of the specified.
      */
    readonly contentWindow: any;
    /**
      * Sets or retrieves how the object is aligned with adjacent text.
      */
    align: string;
    /**
      * Sets or retrieves whether the frame can be scrolled.
      */
    scrolling: string;
    /**
      * Sets or retrieves whether to display a border for the frame.
      */
    frameBorder: string;
    /**
      * Sets or retrieves a URI to a long description of the object.
      */
    longDesc: string;
    /**
      * Sets or retrieves the top and bottom margin heights before displaying the text in a frame.
      */
    marginHeight: string;
    /**
      * Sets or retrieves the left and right margin widths before displaying the text in a frame.
      */
    marginWidth: string;
    getSVGDocument(): Document | null;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLIFrameElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLIFrameElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLIFrameElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLIFrameElement: {
    prototype: HTMLIFrameElement;
    new (): HTMLIFrameElement;
}

interface HTMLEmbedElement extends HTMLElement {
    /**
      * Sets or retrieves a URL to be loaded by the object.
      */
    src: string;
    type: string;
    /**
      * Sets or retrieves the width of the object.
      */
    width: string;
    /**
      * Sets or retrieves the height of the object.
      */
    height: string;
    align: string;
    /**
      * Sets or retrieves the name of the object.
      */
    name: string;
    getSVGDocument(): Document | null;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLEmbedElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLEmbedElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLEmbedElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLEmbedElement: {
    prototype: HTMLEmbedElement;
    new (): HTMLEmbedElement;
}

interface HTMLObjectElement extends HTMLElement {
    /**
      * Sets or retrieves the URL that references the data of the object.
      */
    data: string;
    /**
      * Sets or retrieves the MIME type of the object.
      */
    type: string;
    typeMustMatch: boolean;
    /**
      * Sets or retrieves the name of the object.
      */
    name: string;
    /**
      * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.
      */
    useMap: string;
    /**
      * Retrieves a reference to the form that the object is embedded in.
      */
    readonly form: HTMLFormElement | null;
    /**
      * Sets or retrieves the width of the object.
      */
    width: string;
    /**
      * Sets or retrieves the height of the object.
      */
    height: string;
    /**
      * Retrieves the document object of the page or frame.
      */
    readonly contentDocument: Document | null;
    readonly contentWindow: any;
    /**
      * Returns whether an element will successfully validate based on forms validation rules and constraints.
      */
    readonly willValidate: boolean;
    /**
      * Returns a  ValidityState object that represents the validity states of an element.
      */
    readonly validity: ValidityState;
    /**
      * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
      */
    readonly validationMessage: string;
    align: string;
    /**
      * Sets or retrieves a character string that can be used to implement your own archive functionality for the object.
      */
    archive: string;
    /**
      * Sets or retrieves the URL of the file containing the compiled Java class.
      */
    code: string;
    declare: boolean;
    hspace: number;
    /**
      * Sets or retrieves a message to be displayed while an object is loading.
      */
    standby: string;
    vspace: number;
    /**
      * Sets or retrieves the URL of the component.
      */
    codeBase: string;
    /**
      * Sets or retrieves the Internet media type for the code associated with the object.
      */
    codeType: string;
    border: string;
    getSVGDocument(): Document | null;
    /**
      * Returns whether a form will validate when it is submitted, without having to submit it.
      */
    checkValidity(): boolean;
    reportValidity(): boolean;
    /**
      * Sets a custom error message that is displayed when a form is submitted.
      * @param error Sets a custom error message that is displayed when a form is submitted.
      */
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLObjectElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLObjectElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLObjectElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLObjectElement: {
    prototype: HTMLObjectElement;
    new (): HTMLObjectElement;
}

interface HTMLParamElement extends HTMLElement {
    /**
      * Sets or retrieves the name of an input parameter for an element.
      */
    name: string;
    /**
      * Sets or retrieves the value of an input parameter for an element.
      */
    value: string;
    /**
      * Sets or retrieves the content type of the resource designated by the value attribute.
      */
    type: string;
    /**
      * Sets or retrieves the data type of the value attribute.
      */
    valueType: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLParamElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLParamElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLParamElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLParamElement: {
    prototype: HTMLParamElement;
    new (): HTMLParamElement;
}

interface HTMLVideoElement extends HTMLMediaElement {
    /**
      * Gets or sets the width of the video element.
      */
    width: number;
    /**
      * Gets or sets the height of the video element.
      */
    height: number;
    /**
      * Gets the intrinsic width of a video in CSS pixels, or zero if the dimensions are not known.
      */
    readonly videoWidth: number;
    /**
      * Gets the intrinsic height of a video in CSS pixels, or zero if the dimensions are not known.
      */
    readonly videoHeight: number;
    /**
      * Gets or sets a URL of an image to display, for example, like a movie poster. This can be a still frame from the video, or another image if no video data is available.
      */
    poster: string;
    playsInline: boolean;
    getVideoPlaybackQuality(): VideoPlaybackQuality;
    addEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLVideoElement, ev: HTMLMediaElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLVideoElement: {
    prototype: HTMLVideoElement;
    new (): HTMLVideoElement;
}

interface HTMLAudioElement extends HTMLMediaElement {
    addEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLAudioElement, ev: HTMLMediaElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLAudioElement: {
    prototype: HTMLAudioElement;
    new (): HTMLAudioElement;
}

interface HTMLTrackElement extends HTMLElement {
    kind: string;
    src: string;
    srclang: string;
    label: string;
    default: boolean;
    readonly readyState: number;
    readonly track: TextTrack;
    readonly NONE: number;
    readonly LOADING: number;
    readonly LOADED: number;
    readonly ERROR: number;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLTrackElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLTrackElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLTrackElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLTrackElement: {
    prototype: HTMLTrackElement;
    new (): HTMLTrackElement;
    readonly NONE: number;
    readonly LOADING: number;
    readonly LOADED: number;
    readonly ERROR: number;
}

interface HTMLMediaElementEventMap extends ElementEventMap, GlobalEventHandlersEventMap, DocumentAndElementEventHandlersEventMap {
    "encrypted": MediaEncryptedEvent;
    "waitingforkey": Event;
}

interface HTMLMediaElement extends HTMLElement {
    /**
      * Returns an object representing the current error state of the audio or video element.
      */
    readonly error: MediaError | null;
    /**
      * The address or URL of the a media resource that is to be considered.
      */
    src: string;
    srcObject: MediaProvider | null;
    /**
      * Gets the address or URL of the current media resource that is selected by IHTMLMediaElement.
      */
    readonly currentSrc: string;
    crossOrigin: string | null;
    /**
      * Gets the current network activity for the element.
      */
    readonly networkState: number;
    /**
      * Gets or sets the current playback position, in seconds.
      */
    preload: string;
    /**
      * Gets a collection of buffered time ranges.
      */
    readonly buffered: TimeRanges;
    readyState: number;
    /**
      * Gets a flag that indicates whether the the client is currently moving to a new playback position in the media resource.
      */
    readonly seeking: boolean;
    /**
      * Gets or sets the current playback position, in seconds.
      */
    currentTime: number;
    /**
      * Returns the duration in seconds of the current media resource. A NaN value is returned if duration is not available, or Infinity if the media resource is streaming.
      */
    readonly duration: number;
    /**
      * Gets a flag that specifies whether playback is paused.
      */
    readonly paused: boolean;
    /**
      * Gets or sets the default playback rate when the user is not using fast forward or reverse for a video or audio resource.
      */
    defaultPlaybackRate: number;
    /**
      * Gets or sets the current rate of speed for the media resource to play. This speed is expressed as a multiple of the normal speed of the media resource.
      */
    playbackRate: number;
    /**
      * Gets TimeRanges for the current media resource that has been played.
      */
    readonly played: TimeRanges;
    /**
      * Returns a TimeRanges object that represents the ranges of the current media resource that can be seeked.
      */
    readonly seekable: TimeRanges;
    /**
      * Gets information about whether the playback has ended or not.
      */
    readonly ended: boolean;
    /**
      * Gets or sets a value that indicates whether to start playing the media automatically.
      */
    autoplay: boolean;
    /**
      * Gets or sets a flag to specify whether playback should restart after it completes.
      */
    loop: boolean;
    /**
      * Gets or sets a flag that indicates whether the client provides a set of controls for the media (in case the developer does not include controls for the player).
      */
    controls: boolean;
    /**
      * Gets or sets the volume level for audio portions of the media element.
      */
    volume: number;
    /**
      * Gets or sets a flag that indicates whether the audio (either audio or the audio track on video media) is muted.
      */
    muted: boolean;
    defaultMuted: boolean;
    /**
      * Returns an AudioTrackList object with the audio tracks for a given video element.
      */
    readonly audioTracks: AudioTrackList;
    readonly videoTracks: VideoTrackList;
    readonly textTracks: TextTrackList;
    readonly mediaKeys: MediaKeys | null;
    onencrypted: (this: HTMLMediaElement, ev: MediaEncryptedEvent) => any;
    onwaitingforkey: (this: HTMLMediaElement, ev: Event) => any;
    /**
      * Resets the audio or video object and loads a new media resource.
      */
    load(): void;
    /**
      * Returns a string that specifies whether the client can play a given media resource type.
      */
    canPlayType(type: string): CanPlayTypeResult;
    fastSeek(time: number): void;
    getStartDate(): any;
    /**
      * Loads and starts playback of a media resource.
      */
    play(): Promise<void>;
    /**
      * Pauses the current playback and sets paused to TRUE. This can be used to test whether the media is playing or paused. You can also use the pause or play events to tell whether the media is playing or not.
      */
    pause(): void;
    addTextTrack(kind: TextTrackKind, label?: string, language?: string): TextTrack;
    setMediaKeys(mediaKeys: MediaKeys | null): Promise<void>;
    readonly NETWORK_EMPTY: number;
    readonly NETWORK_IDLE: number;
    readonly NETWORK_LOADING: number;
    readonly NETWORK_NO_SOURCE: number;
    readonly HAVE_NOTHING: number;
    readonly HAVE_METADATA: number;
    readonly HAVE_CURRENT_DATA: number;
    readonly HAVE_FUTURE_DATA: number;
    readonly HAVE_ENOUGH_DATA: number;
    addEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLMediaElement, ev: HTMLMediaElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLMediaElement: {
    prototype: HTMLMediaElement;
    new (): HTMLMediaElement;
    readonly NETWORK_EMPTY: number;
    readonly NETWORK_IDLE: number;
    readonly NETWORK_LOADING: number;
    readonly NETWORK_NO_SOURCE: number;
    readonly HAVE_NOTHING: number;
    readonly HAVE_METADATA: number;
    readonly HAVE_CURRENT_DATA: number;
    readonly HAVE_FUTURE_DATA: number;
    readonly HAVE_ENOUGH_DATA: number;
}

interface MediaError {
    readonly code: number;
    readonly message: string;
    readonly MEDIA_ERR_ABORTED: number;
    readonly MEDIA_ERR_NETWORK: number;
    readonly MEDIA_ERR_DECODE: number;
    readonly MEDIA_ERR_SRC_NOT_SUPPORTED: number;
}

declare var MediaError: {
    prototype: MediaError;
    new (): MediaError;
    readonly MEDIA_ERR_ABORTED: number;
    readonly MEDIA_ERR_NETWORK: number;
    readonly MEDIA_ERR_DECODE: number;
    readonly MEDIA_ERR_SRC_NOT_SUPPORTED: number;
}

interface AudioTrackListEventMap {
    "change": Event;
    "addtrack": TrackEvent;
    "removetrack": TrackEvent;
}

interface AudioTrackList extends EventTarget {
    readonly length: number;
    onchange: (this: AudioTrackList, ev: Event) => any;
    onaddtrack: (this: AudioTrackList, ev: TrackEvent) => any;
    onremovetrack: (this: AudioTrackList, ev: TrackEvent) => any;
    getTrackById(id: string): AudioTrack | null;
    addEventListener<K extends keyof AudioTrackListEventMap>(type: K, listener: (this: AudioTrackList, ev: AudioTrackListEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    [index: number]: AudioTrack;
}

declare var AudioTrackList: {
    prototype: AudioTrackList;
    new (): AudioTrackList;
}

interface AudioTrack {
    readonly id: string;
    readonly kind: string;
    readonly label: string;
    readonly language: string;
    enabled: boolean;
    readonly sourceBuffer: SourceBuffer | null;
}

declare var AudioTrack: {
    prototype: AudioTrack;
    new (): AudioTrack;
}

interface VideoTrackListEventMap {
    "change": Event;
    "addtrack": TrackEvent;
    "removetrack": TrackEvent;
}

interface VideoTrackList extends EventTarget {
    readonly length: number;
    readonly selectedIndex: number;
    onchange: (this: VideoTrackList, ev: Event) => any;
    onaddtrack: (this: VideoTrackList, ev: TrackEvent) => any;
    onremovetrack: (this: VideoTrackList, ev: TrackEvent) => any;
    getTrackById(id: string): VideoTrack | null;
    addEventListener<K extends keyof VideoTrackListEventMap>(type: K, listener: (this: VideoTrackList, ev: VideoTrackListEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    [index: number]: VideoTrack;
}

declare var VideoTrackList: {
    prototype: VideoTrackList;
    new (): VideoTrackList;
}

interface VideoTrack {
    readonly id: string;
    readonly kind: string;
    readonly label: string;
    readonly language: string;
    selected: boolean;
    readonly sourceBuffer: SourceBuffer | null;
}

declare var VideoTrack: {
    prototype: VideoTrack;
    new (): VideoTrack;
}

interface TextTrackListEventMap {
    "change": Event;
    "addtrack": TrackEvent;
    "removetrack": TrackEvent;
}

interface TextTrackList extends EventTarget {
    readonly length: number;
    onchange: (this: TextTrackList, ev: Event) => any;
    onaddtrack: (this: TextTrackList, ev: TrackEvent) => any;
    onremovetrack: (this: TextTrackList, ev: TrackEvent) => any;
    getTrackById(id: string): TextTrack | null;
    addEventListener<K extends keyof TextTrackListEventMap>(type: K, listener: (this: TextTrackList, ev: TextTrackListEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    [index: number]: TextTrack;
}

declare var TextTrackList: {
    prototype: TextTrackList;
    new (): TextTrackList;
}

interface TextTrackEventMap {
    "cuechange": Event;
}

interface TextTrack extends EventTarget {
    readonly kind: TextTrackKind;
    readonly label: string;
    readonly language: string;
    readonly id: string;
    readonly inBandMetadataTrackDispatchType: string;
    mode: TextTrackMode;
    readonly cues: TextTrackCueList | null;
    readonly activeCues: TextTrackCueList | null;
    oncuechange: (this: TextTrack, ev: Event) => any;
    readonly sourceBuffer: SourceBuffer | null;
    addCue(cue: TextTrackCue): void;
    removeCue(cue: TextTrackCue): void;
    addEventListener<K extends keyof TextTrackEventMap>(type: K, listener: (this: TextTrack, ev: TextTrackEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var TextTrack: {
    prototype: TextTrack;
    new (): TextTrack;
}

interface TextTrackCueList {
    readonly length: number;
    getCueById(id: string): TextTrackCue | null;
    [index: number]: TextTrackCue;
}

declare var TextTrackCueList: {
    prototype: TextTrackCueList;
    new (): TextTrackCueList;
}

interface TextTrackCueEventMap {
    "enter": Event;
    "exit": Event;
}

interface TextTrackCue extends EventTarget {
    readonly track: TextTrack | null;
    id: string;
    startTime: number;
    endTime: number;
    pauseOnExit: boolean;
    onenter: (this: TextTrackCue, ev: Event) => any;
    onexit: (this: TextTrackCue, ev: Event) => any;
    addEventListener<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: TextTrackCue, ev: TextTrackCueEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var TextTrackCue: {
    prototype: TextTrackCue;
    new (): TextTrackCue;
}

interface TimeRanges {
    readonly length: number;
    start(index: number): number;
    end(index: number): number;
}

declare var TimeRanges: {
    prototype: TimeRanges;
    new (): TimeRanges;
}

interface TrackEvent extends Event {
    readonly track: VideoTrack | AudioTrack | TextTrack | null;
}

declare var TrackEvent: {
    prototype: TrackEvent;
    new (type: string, eventInitDict?: TrackEventInit): TrackEvent;
}

interface HTMLMapElement extends HTMLElement {
    /**
      * Sets or retrieves the name of the object.
      */
    name: string;
    /**
      * Retrieves a collection of the area objects defined for the given map object.
      */
    readonly areas: HTMLCollection;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLMapElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLMapElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLMapElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLMapElement: {
    prototype: HTMLMapElement;
    new (): HTMLMapElement;
}

interface HTMLAreaElement extends HTMLElement, HTMLHyperlinkElementUtils {
    /**
      * Sets or retrieves a text alternative to the graphic.
      */
    alt: string;
    /**
      * Sets or retrieves the coordinates of the object.
      */
    coords: string;
    /**
      * Sets or retrieves the shape of the object.
      */
    shape: string;
    /**
      * Sets or retrieves the window or frame at which to target content.
      */
    target: string;
    download: string;
    ping: string;
    rel: string;
    readonly relList: DOMTokenList;
    referrerPolicy: string;
    /**
      * Sets or gets whether clicks in this region cause action.
      */
    noHref: boolean;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLAreaElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLAreaElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLAreaElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLAreaElement: {
    prototype: HTMLAreaElement;
    new (): HTMLAreaElement;
}

interface HTMLTableElement extends HTMLElement {
    /**
      * Retrieves the caption object of a table.
      */
    caption: HTMLTableCaptionElement | null;
    /**
      * Retrieves the tHead object of the table.
      */
    tHead: HTMLTableSectionElement | null;
    /**
      * Retrieves the tFoot object of the table.
      */
    tFoot: HTMLTableSectionElement | null;
    /**
      * Retrieves a collection of all tBody objects in the table. Objects in this collection are in source order.
      */
    tBodies: HTMLCollectionOf<HTMLTableSectionElement>;
    /**
      * Sets or retrieves the number of horizontal rows contained in the object.
      */
    rows: HTMLCollectionOf<HTMLTableRowElement>;
    /**
      * Sets or retrieves a value that indicates the table alignment.
      */
    align: string;
    /**
      * Sets or retrieves the width of the border to draw around the object.
      */
    border: string;
    /**
      * Sets or retrieves the way the border frame around the table is displayed.
      */
    frame: string;
    /**
      * Sets or retrieves which dividing lines (inner borders) are displayed.
      */
    rules: string;
    /**
      * Sets or retrieves a description and/or structure of the object.
      */
    summary: string;
    /**
      * Sets or retrieves the width of the object.
      */
    width: string;
    bgColor: string;
    /**
      * Sets or retrieves the amount of space between the border of the cell and the content of the cell.
      */
    cellPadding: string;
    /**
      * Sets or retrieves the amount of space between cells in a table.
      */
    cellSpacing: string;
    /**
      * Creates an empty caption element in the table.
      */
    createCaption(): HTMLTableCaptionElement;
    /**
      * Deletes the caption element and its contents from the table.
      */
    deleteCaption(): void;
    /**
      * Returns the tHead element object if successful, or null otherwise.
      */
    createTHead(): HTMLTableSectionElement;
    /**
      * Deletes the tHead element and its contents from the table.
      */
    deleteTHead(): void;
    /**
      * Creates an empty tFoot element in the table.
      */
    createTFoot(): HTMLTableSectionElement;
    /**
      * Deletes the tFoot element and its contents from the table.
      */
    deleteTFoot(): void;
    /**
      * Creates an empty tBody element in the table.
      */
    createTBody(): HTMLTableSectionElement;
    /**
      * Creates a new row (tr) in the table, and adds the row to the rows collection.
      * @param index Number that specifies where to insert the row in the rows collection. The default value is -1, which appends the new row to the end of the rows collection.
      */
    insertRow(index?: number): HTMLTableRowElement;
    /**
      * Removes the specified row (tr) from the element and from the rows collection.
      * @param index Number that specifies the zero-based position in the rows collection of the row to remove.
      */
    deleteRow(index: number): void;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLTableElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLTableElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLTableElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLTableElement: {
    prototype: HTMLTableElement;
    new (): HTMLTableElement;
}

interface HTMLTableCaptionElement extends HTMLElement {
    /**
      * Sets or retrieves the alignment of the caption or legend.
      */
    align: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLTableCaptionElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLTableCaptionElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLTableCaptionElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLTableCaptionElement: {
    prototype: HTMLTableCaptionElement;
    new (): HTMLTableCaptionElement;
}

interface HTMLTableColElement extends HTMLElement {
    /**
      * Sets or retrieves the number of columns in the group.
      */
    span: number;
    /**
      * Sets or retrieves the alignment of the object relative to the display or table.
      */
    align: string;
    ch: string;
    chOff: string;
    vAlign: string;
    /**
      * Sets or retrieves the width of the object.
      */
    width: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLTableColElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLTableColElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLTableColElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLTableColElement: {
    prototype: HTMLTableColElement;
    new (): HTMLTableColElement;
}

interface HTMLTableSectionElement extends HTMLElement {
    /**
      * Sets or retrieves the number of horizontal rows contained in the object.
      */
    rows: HTMLCollectionOf<HTMLTableRowElement>;
    /**
      * Sets or retrieves a value that indicates the table alignment.
      */
    align: string;
    ch: string;
    chOff: string;
    vAlign: string;
    /**
      * Creates a new row (tr) in the table, and adds the row to the rows collection.
      * @param index Number that specifies where to insert the row in the rows collection. The default value is -1, which appends the new row to the end of the rows collection.
      */
    insertRow(index?: number): HTMLTableRowElement;
    /**
      * Removes the specified row (tr) from the element and from the rows collection.
      * @param index Number that specifies the zero-based position in the rows collection of the row to remove.
      */
    deleteRow(index: number): void;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLTableSectionElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLTableSectionElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLTableSectionElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLTableSectionElement: {
    prototype: HTMLTableSectionElement;
    new (): HTMLTableSectionElement;
}

interface HTMLTableRowElement extends HTMLElement {
    /**
      * Retrieves the position of the object in the rows collection for the table.
      */
    readonly rowIndex: number;
    /**
      * Retrieves the position of the object in the collection.
      */
    readonly sectionRowIndex: number;
    /**
      * Retrieves a collection of all cells in the table row.
      */
    cells: HTMLCollectionOf<HTMLTableCellElement>;
    /**
      * Sets or retrieves how the object is aligned with adjacent text.
      */
    align: string;
    ch: string;
    chOff: string;
    vAlign: string;
    bgColor: string;
    /**
      * Creates a new cell in the table row, and adds the cell to the cells collection.
      * @param index Number that specifies where to insert the cell in the tr. The default value is -1, which appends the new cell to the end of the cells collection.
      */
    insertCell(index?: number): HTMLTableCellElement;
    /**
      * Removes the specified cell from the table row, as well as from the cells collection.
      * @param index Number that specifies the zero-based position of the cell to remove from the table row. If no value is provided, the last cell in the cells collection is deleted.
      */
    deleteCell(index: number): void;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLTableRowElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLTableRowElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLTableRowElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLTableRowElement: {
    prototype: HTMLTableRowElement;
    new (): HTMLTableRowElement;
}

interface HTMLTableCellElement extends HTMLElement {
    /**
      * Sets or retrieves the number columns in the table that the object should span.
      */
    colSpan: number;
    /**
      * Sets or retrieves how many rows in a table the cell should span.
      */
    rowSpan: number;
    /**
      * Sets or retrieves a list of header cells that provide information for the object.
      */
    headers: string;
    /**
      * Retrieves the position of the object in the cells collection of a row.
      */
    readonly cellIndex: number;
    /**
      * Sets or retrieves the group of cells in a table to which the object's information applies.
      */
    scope: string;
    /**
      * Sets or retrieves abbreviated text for the object.
      */
    abbr: string;
    /**
      * Sets or retrieves how the object is aligned with adjacent text.
      */
    align: string;
    /**
      * Sets or retrieves a comma-delimited list of conceptual categories associated with the object.
      */
    axis: string;
    /**
      * Sets or retrieves the height of the object.
      */
    height: string;
    /**
      * Sets or retrieves the width of the object.
      */
    width: string;
    ch: string;
    chOff: string;
    /**
      * Sets or retrieves whether the browser automatically performs wordwrap.
      */
    noWrap: boolean;
    vAlign: string;
    bgColor: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLTableCellElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLTableCellElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLTableCellElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLTableCellElement: {
    prototype: HTMLTableCellElement;
    new (): HTMLTableCellElement;
}

interface HTMLFormElement extends HTMLElement {
    /**
      * Sets or retrieves a list of character encodings for input data that must be accepted by the server processing the form.
      */
    acceptCharset: string;
    /**
      * Sets or retrieves the URL to which the form content is sent for processing.
      */
    action: string;
    /**
      * Specifies whether autocomplete is applied to an editable text field.
      */
    autocomplete: string;
    /**
      * Sets or retrieves the encoding type for the form.
      */
    enctype: string;
    /**
      * Sets or retrieves the MIME encoding for the form.
      */
    encoding: string;
    /**
      * Sets or retrieves how to send the form data to the server.
      */
    method: string;
    /**
      * Sets or retrieves the name of the object.
      */
    name: string;
    /**
      * Designates a form that is not validated when submitted.
      */
    noValidate: boolean;
    /**
      * Sets or retrieves the window or frame at which to target content.
      */
    target: string;
    /**
      * Retrieves a collection, in source order, of all controls in a given form.
      */
    readonly elements: HTMLFormControlsCollection;
    /**
      * Sets or retrieves the number of objects in a collection.
      */
    readonly length: number;
    /**
      * Fires when a FORM is about to be submitted.
      */
    submit(): void;
    /**
      * Fires when the user resets a form.
      */
    reset(): void;
    /**
      * Returns whether a form will validate when it is submitted, without having to submit it.
      */
    checkValidity(): boolean;
    reportValidity(): boolean;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLFormElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLFormElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLFormElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    [index: number]: Element;
}

declare var HTMLFormElement: {
    prototype: HTMLFormElement;
    new (): HTMLFormElement;
}

interface HTMLLabelElement extends HTMLElement {
    /**
      * Retrieves a reference to the form that the object is embedded in.
      */
    readonly form: HTMLFormElement | null;
    /**
      * Sets or retrieves the object to which the given label object is assigned.
      */
    htmlFor: string;
    readonly control: HTMLElement | null;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLLabelElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLLabelElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLLabelElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLLabelElement: {
    prototype: HTMLLabelElement;
    new (): HTMLLabelElement;
}

interface HTMLInputElement extends HTMLElement {
    /**
      * Sets or retrieves a comma-separated list of content types.
      */
    accept: string;
    /**
      * Sets or retrieves a text alternative to the graphic.
      */
    alt: string;
    /**
      * Specifies whether autocomplete is applied to an editable text field.
      */
    autocomplete: string;
    /**
      * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.
      */
    autofocus: boolean;
    /**
      * Sets or retrieves the state of the check box or radio button.
      */
    defaultChecked: boolean;
    /**
      * Sets or retrieves the state of the check box or radio button.
      */
    checked: boolean;
    dirName: string;
    disabled: boolean;
    /**
      * Retrieves a reference to the form that the object is embedded in. 
      */
    readonly form: HTMLFormElement | null;
    /**
      * Returns a FileList object on a file type input object.
      */
    readonly files: FileList | null;
    /**
      * Overrides the action attribute (where the data on a form is sent) on the parent form element.
      */
    formAction: string;
    /**
      * Used to override the encoding (formEnctype attribute) specified on the form element.
      */
    formEnctype: string;
    /**
      * Overrides the submit method attribute previously specified on a form element.
      */
    formMethod: string;
    /**
      * Overrides any validation or required attributes on a form or form elements to allow it to be submitted without validation. This can be used to create a "save draft"-type submit option.
      */
    formNoValidate: boolean;
    /**
      * Overrides the target attribute on a form element.
      */
    formTarget: string;
    /**
      * Sets or retrieves the height of the object.
      */
    height: number;
    indeterminate: boolean;
    inputMode: string;
    /**
      * Specifies the ID of a pre-defined datalist of options for an input element.
      */
    readonly list: HTMLElement | null;
    /**
      * Defines the maximum acceptable value for an input element with type="number".When used with the min and step attributes, lets you control the range and increment (such as only even numbers) that the user can enter into an input field.
      */
    max: string;
    /**
      * Sets or retrieves the maximum number of characters that the user can enter in a text control.
      */
    maxLength: number;
    /**
      * Defines the minimum acceptable value for an input element with type="number". When used with the max and step attributes, lets you control the range and increment (such as even numbers only) that the user can enter into an input field.
      */
    min: string;
    minLength: number;
    /**
      * Sets or retrieves the Boolean value indicating whether multiple items can be selected from a list.
      */
    multiple: boolean;
    /**
      * Sets or retrieves the name of the object.
      */
    name: string;
    /**
      * Gets or sets a string containing a regular expression that the user's input must match.
      */
    pattern: string;
    /**
      * Gets or sets a text string that is displayed in an input field as a hint or prompt to users as the format or type of information they need to enter.The text appears in an input field until the user puts focus on the field.
      */
    placeholder: string;
    readOnly: boolean;
    /**
      * When present, marks an element that can't be submitted without a value.
      */
    required: boolean;
    size: number;
    /**
      * The address or URL of the a media resource that is to be considered.
      */
    src: string;
    /**
      * Defines an increment or jump between values that you want to allow the user to enter. When used with the max and min attributes, lets you control the range and increment (for example, allow only even numbers) that the user can enter into an input field.
      */
    step: string;
    /**
      * Returns the content type of the object.
      */
    type: string;
    /**
      * Sets or retrieves the initial contents of the object.
      */
    defaultValue: string;
    /**
      * Returns the value of the data at the cursor's current position.
      */
    value: string;
    valueAsDate: any;
    /**
      * Returns the input field value as a number.
      */
    valueAsNumber: number;
    /**
      * Sets or retrieves the width of the object.
      */
    width: number;
    /**
      * Returns whether an element will successfully validate based on forms validation rules and constraints.
      */
    readonly willValidate: boolean;
    /**
      * Returns a  ValidityState object that represents the validity states of an element.
      */
    readonly validity: ValidityState;
    /**
      * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
      */
    readonly validationMessage: string;
    readonly labels: NodeList | null;
    /**
      * Gets or sets the starting position or offset of a text selection.
      */
    selectionStart: number | null;
    /**
      * Gets or sets the end position or offset of a text selection.
      */
    selectionEnd: number | null;
    selectionDirection: string | null;
    /**
      * Sets or retrieves how the object is aligned with adjacent text.
      */
    align: string;
    /**
      * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.
      */
    useMap: string;
    /**
      * Increments a range input control's value by the value given by the Step attribute. If the optional parameter is used, will increment the input control's value by that value.
      * @param n Value to increment the value by.
      */
    stepUp(n?: number): void;
    /**
      * Decrements a range input control's value by the value given by the Step attribute. If the optional parameter is used, it will decrement the input control's step value multiplied by the parameter's value.
      * @param n Value to decrement the value by.
      */
    stepDown(n?: number): void;
    /**
      * Returns whether a form will validate when it is submitted, without having to submit it.
      */
    checkValidity(): boolean;
    reportValidity(): boolean;
    /**
      * Sets a custom error message that is displayed when a form is submitted.
      * @param error Sets a custom error message that is displayed when a form is submitted.
      */
    setCustomValidity(error: string): void;
    /**
      * Makes the selection equal to the current object.
      */
    select(): void;
    setRangeText(replacement: string): void;
    setRangeText(replacement: string, start: number, end: number, selectionMode?: SelectionMode): void;
    /**
      * Sets the start and end positions of a selection in a text field.
      * @param start The offset into the text field for the start of the selection.
      * @param end The offset into the text field for the end of the selection.
      */
    setSelectionRange(start: number, end: number, direction?: string): void;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLInputElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLInputElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLInputElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLInputElement: {
    prototype: HTMLInputElement;
    new (): HTMLInputElement;
}

interface HTMLButtonElement extends HTMLElement {
    /**
      * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.
      */
    autofocus: boolean;
    disabled: boolean;
    /**
      * Retrieves a reference to the form that the object is embedded in.
      */
    readonly form: HTMLFormElement | null;
    /**
      * Overrides the action attribute (where the data on a form is sent) on the parent form element.
      */
    formAction: string;
    /**
      * Used to override the encoding (formEnctype attribute) specified on the form element.
      */
    formEnctype: string;
    /**
      * Overrides the submit method attribute previously specified on a form element.
      */
    formMethod: string;
    /**
      * Overrides any validation or required attributes on a form or form elements to allow it to be submitted without validation. This can be used to create a "save draft"-type submit option.
      */
    formNoValidate: boolean;
    /**
      * Overrides the target attribute on a form element.
      */
    formTarget: string;
    /** 
      * Sets or retrieves the name of the object.
      */
    name: string;
    /**
      * Gets the classification and default behavior of the button.
      */
    type: string;
    /** 
      * Sets or retrieves the default or selected value of the control.
      */
    value: string;
    /**
      * Returns whether an element will successfully validate based on forms validation rules and constraints.
      */
    readonly willValidate: boolean;
    /**
      * Returns a  ValidityState object that represents the validity states of an element.
      */
    readonly validity: ValidityState;
    /**
      * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
      */
    readonly validationMessage: string;
    readonly labels: NodeList;
    /**
      * Returns whether a form will validate when it is submitted, without having to submit it.
      */
    checkValidity(): boolean;
    reportValidity(): boolean;
    /**
      * Sets a custom error message that is displayed when a form is submitted.
      * @param error Sets a custom error message that is displayed when a form is submitted.
      */
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLButtonElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLButtonElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLButtonElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLButtonElement: {
    prototype: HTMLButtonElement;
    new (): HTMLButtonElement;
}

interface HTMLSelectElement extends HTMLElement {
    autocomplete: string;
    /**
      * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.
      */
    autofocus: boolean;
    disabled: boolean;
    /**
      * Retrieves a reference to the form that the object is embedded in. 
      */
    readonly form: HTMLFormElement | null;
    /**
      * Sets or retrieves the Boolean value indicating whether multiple items can be selected from a list.
      */
    multiple: boolean;
    /**
      * Sets or retrieves the name of the object.
      */
    name: string;
    /**
      * When present, marks an element that can't be submitted without a value.
      */
    required: boolean;
    /**
      * Sets or retrieves the number of rows in the list box. 
      */
    size: number;
    /**
      * Retrieves the type of select control based on the value of the MULTIPLE attribute.
      */
    readonly type: string;
    readonly options: HTMLOptionsCollection;
    /**
      * Sets or retrieves the number of objects in a collection.
      */
    length: number;
    selectedOptions: HTMLCollectionOf<HTMLOptionElement>;
    /**
      * Sets or retrieves the index of the selected option in a select object.
      */
    selectedIndex: number;
    /**
      * Sets or retrieves the value which is returned to the server when the form control is submitted.
      */
    value: string;
    /**
      * Returns whether an element will successfully validate based on forms validation rules and constraints.
      */
    readonly willValidate: boolean;
    /**
      * Returns a  ValidityState object that represents the validity states of an element.
      */
    readonly validity: ValidityState;
    /**
      * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
      */
    readonly validationMessage: string;
    readonly labels: NodeList;
    /**
      * Retrieves a select object or an object from an options collection.
      * @param name Variant of type Number or String that specifies the object or collection to retrieve. If this parameter is an integer, it is the zero-based index of the object. If this parameter is a string, all objects with matching name or id properties are retrieved, and a collection is returned if more than one match is made.
      * @param index Variant of type Number that specifies the zero-based index of the object to retrieve when a collection is returned.
      */
    item(index: number): Element | null;
    /**
      * Retrieves a select object or an object from an options collection.
      * @param namedItem A String that specifies the name or id property of the object to retrieve. A collection is returned if more than one match is made.
      */
    namedItem(name: string): HTMLOptionElement | null;
    /**
      * Adds an element to the areas, controlRange, or options collection.
      * @param element Variant of type Number that specifies the index position in the collection where the element is placed. If no value is given, the method places the element at the end of the collection.
      * @param before Variant of type Object that specifies an element to insert before, or null to append the object to the collection. 
      */
    add(element: HTMLOptionElement | HTMLOptGroupElement, before?: HTMLElement | number): void;
    /**
      * Removes an element from the collection.
      * @param index Number that specifies the zero-based index of the element to remove from the collection.
      */
    remove(): void;
    /**
      * Removes an element from the collection.
      * @param index Number that specifies the zero-based index of the element to remove from the collection.
      */
    remove(index: number): void;
    /**
      * Returns whether a form will validate when it is submitted, without having to submit it.
      */
    checkValidity(): boolean;
    reportValidity(): boolean;
    /**
      * Sets a custom error message that is displayed when a form is submitted.
      * @param error Sets a custom error message that is displayed when a form is submitted.
      */
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLSelectElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLSelectElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLSelectElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    [index: number]: Element;
}

declare var HTMLSelectElement: {
    prototype: HTMLSelectElement;
    new (): HTMLSelectElement;
}

interface HTMLDataListElement extends HTMLElement {
    options: HTMLCollectionOf<HTMLOptionElement>;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLDataListElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLDataListElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLDataListElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLDataListElement: {
    prototype: HTMLDataListElement;
    new (): HTMLDataListElement;
}

interface HTMLOptGroupElement extends HTMLElement {
    disabled: boolean;
    /**
      * Sets or retrieves a value that you can use to implement your own label functionality for the object.
      */
    label: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLOptGroupElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLOptGroupElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLOptGroupElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLOptGroupElement: {
    prototype: HTMLOptGroupElement;
    new (): HTMLOptGroupElement;
}

interface HTMLOptionElement extends HTMLElement {
    disabled: boolean;
    /**
      * Retrieves a reference to the form that the object is embedded in.
      */
    readonly form: HTMLFormElement | null;
    /**
      * Sets or retrieves a value that you can use to implement your own label functionality for the object.
      */
    label: string;
    /**
      * Sets or retrieves the status of an option.
      */
    defaultSelected: boolean;
    /**
      * Sets or retrieves whether the option in the list box is the default item.
      */
    selected: boolean;
    /**
      * Sets or retrieves the value which is returned to the server when the form control is submitted.
      */
    value: string;
    /**
      * Sets or retrieves the text string specified by the option tag.
      */
    text: string;
    /**
      * Sets or retrieves the ordinal position of an option in a list box.
      */
    readonly index: number;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLOptionElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLOptionElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLOptionElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLOptionElement: {
    prototype: HTMLOptionElement;
    new (): HTMLOptionElement;
}

interface HTMLTextAreaElement extends HTMLElement {
    autocomplete: string;
    /**
      * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.
      */
    autofocus: boolean;
    /**
      * Sets or retrieves the width of the object.
      */
    cols: number;
    dirName: string;
    disabled: boolean;
    /**
      * Retrieves a reference to the form that the object is embedded in.
      */
    readonly form: HTMLFormElement | null;
    inputMode: string;
    /**
      * Sets or retrieves the maximum number of characters that the user can enter in a text control.
      */
    maxLength: number;
    minLength: number;
    /**
      * Sets or retrieves the name of the object.
      */
    name: string;
    /**
      * Gets or sets a text string that is displayed in an input field as a hint or prompt to users as the format or type of information they need to enter.The text appears in an input field until the user puts focus on the field.
      */
    placeholder: string;
    /**
      * Sets or retrieves the value indicated whether the content of the object is read-only.
      */
    readOnly: boolean;
    /**
      * When present, marks an element that can't be submitted without a value.
      */
    required: boolean;
    /**
      * Sets or retrieves the number of horizontal rows contained in the object.
      */
    rows: number;
    /**
      * Sets or retrieves how to handle wordwrapping in the object.
      */
    wrap: string;
    /**
      * Retrieves the type of control.
      */
    readonly type: string;
    /**
      * Sets or retrieves the initial contents of the object.
      */
    defaultValue: string;
    /**
      * Retrieves or sets the text in the entry field of the textArea element.
      */
    value: string;
    readonly textLength: number;
    /**
      * Returns whether an element will successfully validate based on forms validation rules and constraints.
      */
    readonly willValidate: boolean;
    /**
      * Returns a  ValidityState object that represents the validity states of an element.
      */
    readonly validity: ValidityState;
    /**
      * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
      */
    readonly validationMessage: string;
    readonly labels: NodeList;
    /**
      * Gets or sets the starting position or offset of a text selection.
      */
    selectionStart: number;
    /**
      * Gets or sets the end position or offset of a text selection.
      */
    selectionEnd: number;
    selectionDirection: string;
    /**
      * Returns whether a form will validate when it is submitted, without having to submit it.
      */
    checkValidity(): boolean;
    reportValidity(): boolean;
    /**
      * Sets a custom error message that is displayed when a form is submitted.
      * @param error Sets a custom error message that is displayed when a form is submitted.
      */
    setCustomValidity(error: string): void;
    /**
      * Highlights the input area of a form element.
      */
    select(): void;
    setRangeText(replacement: string): void;
    setRangeText(replacement: string, start: number, end: number, selectionMode?: SelectionMode): void;
    /**
      * Sets the start and end positions of a selection in a text field.
      * @param start The offset into the text field for the start of the selection.
      * @param end The offset into the text field for the end of the selection.
      */
    setSelectionRange(start: number, end: number, direction?: string): void;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLTextAreaElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLTextAreaElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLTextAreaElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLTextAreaElement: {
    prototype: HTMLTextAreaElement;
    new (): HTMLTextAreaElement;
}

interface HTMLOutputElement extends HTMLElement {
    readonly htmlFor: DOMTokenList;
    readonly form: HTMLFormElement | null;
    name: string;
    readonly type: string;
    defaultValue: string;
    value: string;
    readonly willValidate: boolean;
    readonly validity: ValidityState;
    readonly validationMessage: string;
    readonly labels: NodeList;
    checkValidity(): boolean;
    reportValidity(): boolean;
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLOutputElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLOutputElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLOutputElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLOutputElement: {
    prototype: HTMLOutputElement;
    new (): HTMLOutputElement;
}

interface HTMLProgressElement extends HTMLElement {
    /**
      * Sets or gets the current value of a progress element. The value must be a non-negative number between 0 and the max value.
      */
    value: number;
    /**
      * Defines the maximum, or "done" value for a progress element.
      */
    max: number;
    /**
      * Returns the quotient of value/max when the value attribute is set (determinate progress bar), or -1 when the value attribute is missing (indeterminate progress bar).
      */
    readonly position: number;
    readonly labels: NodeList;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLProgressElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLProgressElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLProgressElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLProgressElement: {
    prototype: HTMLProgressElement;
    new (): HTMLProgressElement;
}

interface HTMLMeterElement extends HTMLElement {
    value: number;
    min: number;
    max: number;
    low: number;
    high: number;
    optimum: number;
    readonly labels: NodeList;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLMeterElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLMeterElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLMeterElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLMeterElement: {
    prototype: HTMLMeterElement;
    new (): HTMLMeterElement;
}

interface HTMLFieldSetElement extends HTMLElement {
    disabled: boolean;
    /**
      * Retrieves a reference to the form that the object is embedded in.
      */
    readonly form: HTMLFormElement | null;
    name: string;
    readonly type: string;
    readonly elements: HTMLCollection;
    /**
      * Returns whether an element will successfully validate based on forms validation rules and constraints.
      */
    readonly willValidate: boolean;
    /**
      * Returns a  ValidityState object that represents the validity states of an element.
      */
    readonly validity: ValidityState;
    /**
      * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
      */
    readonly validationMessage: string;
    /**
      * Returns whether a form will validate when it is submitted, without having to submit it.
      */
    checkValidity(): boolean;
    reportValidity(): boolean;
    /**
      * Sets a custom error message that is displayed when a form is submitted.
      * @param error Sets a custom error message that is displayed when a form is submitted.
      */
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLFieldSetElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLFieldSetElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLFieldSetElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLFieldSetElement: {
    prototype: HTMLFieldSetElement;
    new (): HTMLFieldSetElement;
}

interface HTMLLegendElement extends HTMLElement {
    /**
      * Retrieves a reference to the form that the object is embedded in.
      */
    readonly form: HTMLFormElement | null;
    /**
      * Retrieves a reference to the form that the object is embedded in.
      */
    align: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLLegendElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLLegendElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLLegendElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLLegendElement: {
    prototype: HTMLLegendElement;
    new (): HTMLLegendElement;
}

interface ValidityState {
    readonly valueMissing: boolean;
    readonly typeMismatch: boolean;
    readonly patternMismatch: boolean;
    readonly tooLong: boolean;
    readonly tooShort: boolean;
    readonly rangeUnderflow: boolean;
    readonly rangeOverflow: boolean;
    readonly stepMismatch: boolean;
    readonly badInput: boolean;
    readonly customError: boolean;
    readonly valid: boolean;
}

declare var ValidityState: {
    prototype: ValidityState;
    new (): ValidityState;
}

interface HTMLDetailsElement extends HTMLElement {
    open: boolean;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLDetailsElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLDetailsElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLDetailsElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLDetailsElement: {
    prototype: HTMLDetailsElement;
    new (): HTMLDetailsElement;
}

interface HTMLMenuElement extends HTMLElement {
    type: string;
    label: string;
    compact: boolean;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLMenuElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLMenuElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLMenuElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLMenuElement: {
    prototype: HTMLMenuElement;
    new (): HTMLMenuElement;
}

interface HTMLMenuItemElement extends HTMLElement {
    type: string;
    label: string;
    icon: string;
    disabled: boolean;
    checked: boolean;
    radiogroup: string;
    default: boolean;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLMenuItemElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLMenuItemElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLMenuItemElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLMenuItemElement: {
    prototype: HTMLMenuItemElement;
    new (): HTMLMenuItemElement;
}

interface RelatedEvent extends Event {
    readonly relatedTarget: EventTarget | null;
}

declare var RelatedEvent: {
    prototype: RelatedEvent;
    new (type: string, eventInitDict?: RelatedEventInit): RelatedEvent;
}

interface HTMLDialogElement extends HTMLElement {
    open: boolean;
    returnValue: string;
    show(): void;
    showModal(): void;
    close(returnValue?: string): void;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLDialogElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLDialogElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLDialogElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLDialogElement: {
    prototype: HTMLDialogElement;
    new (): HTMLDialogElement;
}

interface HTMLScriptElement extends HTMLElement {
    /**
      * Retrieves the URL to an external file that contains the source code or data.
      */
    src: string;
    /**
      * Sets or retrieves the MIME type for the associated scripting engine.
      */
    type: string;
    noModule: boolean;
    /**
      * Sets or retrieves the character set used to encode the object.
      */
    charset: string;
    async: boolean;
    /**
      * Sets or retrieves the status of the script.
      */
    defer: boolean;
    crossOrigin: string | null;
    /**
      * Retrieves or sets the text of the object as a string. 
      */
    text: string;
    nonce: string;
    integrity: string;
    /**
      * Sets or retrieves the event for which the script is written. 
      */
    event: string;
    /** 
      * Sets or retrieves the object that is bound to the event script.
      */
    htmlFor: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLScriptElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLScriptElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLScriptElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLScriptElement: {
    prototype: HTMLScriptElement;
    new (): HTMLScriptElement;
}

interface HTMLTemplateElement extends HTMLElement {
    readonly content: DocumentFragment;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLTemplateElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLTemplateElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLTemplateElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLTemplateElement: {
    prototype: HTMLTemplateElement;
    new (): HTMLTemplateElement;
}

interface HTMLSlotElement extends HTMLElement {
    name: string;
    assignedNodes(options?: AssignedNodesOptions): Node[];
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLSlotElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLSlotElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLSlotElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLSlotElement: {
    prototype: HTMLSlotElement;
    new (): HTMLSlotElement;
}

interface HTMLCanvasElement extends HTMLElement {
    /**
      * Gets or sets the width of a canvas element on a document.
      */
    width: number;
    /**
      * Gets or sets the height of a canvas element on a document.
      */
    height: number;
    /**
      * Returns an object that provides methods and properties for drawing and manipulating images and graphics on a canvas element in a document. A context object includes information about colors, line widths, fonts, and other graphic parameters that can be drawn on a canvas.
      * @param contextId The identifier (ID) of the type of canvas to create. Internet Explorer 9 and Internet Explorer 10 support only a 2-D context using canvas.getContext("2d"); IE11 Preview also supports 3-D or WebGL context using canvas.getContext("experimental-webgl");
      */
    getContext(contextId: "2d", contextAttributes?: Canvas2DContextAttributes): CanvasRenderingContext2D | null;
    getContext(contextId: "webgl" | "experimental-webgl", contextAttributes?: WebGLContextAttributes): WebGLRenderingContext | null;
    getContext(contextId: string, contextAttributes?: {}): CanvasRenderingContext2D | WebGLRenderingContext | null;
    /**
      * Returns the content of the current canvas as an image that you can use as a source for another canvas or an HTML element.
      * @param type The standard MIME type for the image format to return. If you do not specify this parameter, the default value is a PNG format image.
      */
    toDataURL(type?: string, quality?: any): string;
    toBlob(callback: BlobCallback, type?: string, quality?: any): void;
    transferControlToOffscreen(): OffscreenCanvas;
    toBlob(callback: (result: Blob | null) => void, type?: string, ...arguments: any[]): void;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLCanvasElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLCanvasElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLCanvasElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLCanvasElement: {
    prototype: HTMLCanvasElement;
    new (): HTMLCanvasElement;
}

interface CanvasRenderingContext2D extends Object, CanvasState, CanvasTransform, CanvasCompositing, CanvasImageSmoothing, CanvasFillStrokeStyles, CanvasShadowStyles, CanvasFilters, CanvasRect, CanvasDrawPath, CanvasUserInterface, CanvasText, CanvasDrawImage, CanvasImageData, CanvasPathDrawingStyles, CanvasTextDrawingStyles, CanvasPath {
    readonly canvas: HTMLCanvasElement;
    mozImageSmoothingEnabled: boolean;
    webkitImageSmoothingEnabled: boolean;
    oImageSmoothingEnabled: boolean;
}

declare var CanvasRenderingContext2D: {
    prototype: CanvasRenderingContext2D;
    new (): CanvasRenderingContext2D;
}

interface CanvasGradient {
    addColorStop(offset: number, color: string): void;
}

declare var CanvasGradient: {
    prototype: CanvasGradient;
    new (): CanvasGradient;
}

interface CanvasPattern {
    setTransform(transform?: DOMMatrixInit): void;
}

declare var CanvasPattern: {
    prototype: CanvasPattern;
    new (): CanvasPattern;
}

interface TextMetrics {
    readonly width: number;
    readonly actualBoundingBoxLeft: number;
    readonly actualBoundingBoxRight: number;
    readonly fontBoundingBoxAscent: number;
    readonly fontBoundingBoxDescent: number;
    readonly actualBoundingBoxAscent: number;
    readonly actualBoundingBoxDescent: number;
    readonly emHeightAscent: number;
    readonly emHeightDescent: number;
    readonly hangingBaseline: number;
    readonly alphabeticBaseline: number;
    readonly ideographicBaseline: number;
}

declare var TextMetrics: {
    prototype: TextMetrics;
    new (): TextMetrics;
}

interface ImageData {
    readonly width: number;
    readonly height: number;
    data: Uint8ClampedArray;
}

declare var ImageData: {
    prototype: ImageData;
    new(width: number, height: number): ImageData;
    new(array: Uint8ClampedArray, width: number, height: number): ImageData;
}

interface Path2D extends Object, CanvasPath {
    addPath(path: Path2D, transform?: DOMMatrixInit): void;
}

declare var Path2D: {
    prototype: Path2D;
    new (): Path2D;
    new (path: Path2D): Path2D;
    new (paths: Path2D[], fillRule?: CanvasFillRule): Path2D;
    new (d: string): Path2D;
}

interface ImageBitmapRenderingContext {
    readonly canvas: HTMLCanvasElement;
    transferFromImageBitmap(bitmap: ImageBitmap | null): void;
}

declare var ImageBitmapRenderingContext: {
    prototype: ImageBitmapRenderingContext;
    new (): ImageBitmapRenderingContext;
}

interface OffscreenCanvas extends EventTarget {
    width: number;
    height: number;
    getContext(contextType: OffscreenRenderingContextType, ...arguments: any[]): OffscreenRenderingContext | null;
    transferToImageBitmap(): ImageBitmap;
    convertToBlob(options?: ImageEncodeOptions): Promise<Blob>;
}

declare var OffscreenCanvas: {
    prototype: OffscreenCanvas;
    new (width: number, height: number): OffscreenCanvas;
}

interface OffscreenCanvasRenderingContext2D extends Object, CanvasState, CanvasTransform, CanvasCompositing, CanvasImageSmoothing, CanvasFillStrokeStyles, CanvasShadowStyles, CanvasFilters, CanvasRect, CanvasDrawPath, CanvasDrawImage, CanvasImageData, CanvasPathDrawingStyles, CanvasPath {
    readonly canvas: OffscreenCanvas;
    commit(): void;
}

declare var OffscreenCanvasRenderingContext2D: {
    prototype: OffscreenCanvasRenderingContext2D;
    new (): OffscreenCanvasRenderingContext2D;
}

interface CustomElementRegistry {
    define(name: string, constructor: Function, options?: ElementDefinitionOptions): void;
    get(name: string): any;
    whenDefined(name: string): Promise<void>;
}

declare var CustomElementRegistry: {
    prototype: CustomElementRegistry;
    new (): CustomElementRegistry;
}

interface DataTransfer {
    dropEffect: string;
    effectAllowed: string;
    readonly items: DataTransferItemList;
    readonly types: string[];
    readonly files: FileList;
    setDragImage(image: Element, x: number, y: number): void;
    getData(format: string): string;
    setData(format: string, data: string): void;
    clearData(format?: string): void;
}

declare var DataTransfer: {
    prototype: DataTransfer;
    new (): DataTransfer;
}

interface DataTransferItemList {
    readonly length: number;
    add(data: string, type: string): DataTransferItem | null;
    add(data: File): DataTransferItem | null;
    remove(index: number): void;
    clear(): void;
    [index: number]: DataTransferItem;
}

declare var DataTransferItemList: {
    prototype: DataTransferItemList;
    new (): DataTransferItemList;
}

interface DataTransferItem {
    readonly kind: string;
    readonly type: string;
    getAsString(callback: FunctionStringCallback | null): void;
    getAsFile(): File | null;
}

declare var DataTransferItem: {
    prototype: DataTransferItem;
    new (): DataTransferItem;
}

interface DragEvent extends MouseEvent {
    readonly dataTransfer: DataTransfer | null;
}

declare var DragEvent: {
    prototype: DragEvent;
    new (type: string, eventInitDict?: DragEventInit): DragEvent;
}

interface WindowEventMap extends GlobalEventHandlersEventMap, WindowEventHandlersEventMap {
    "deviceorientation": Event;
    "devicemotion": Event;
}

interface Window extends EventTarget, GlobalEventHandlers, WindowEventHandlers, WindowOrWorkerGlobalScope, WindowSessionStorage, WindowLocalStorage, GlobalPerformance, IDBEnvironment, GlobalCrypto, SpeechSynthesisGetter {
    readonly window: any;
    readonly self: any;
    readonly document: Document;
    name: string;
    readonly location: Location;
    readonly history: History;
    readonly customElements: CustomElementRegistry;
    readonly locationbar: BarProp;
    readonly menubar: BarProp;
    readonly personalbar: BarProp;
    readonly scrollbars: BarProp;
    readonly statusbar: BarProp;
    readonly toolbar: BarProp;
    status: string;
    readonly closed: boolean;
    readonly frames: any;
    readonly length: number;
    readonly top: any;
    opener: any;
    readonly parent: any;
    readonly frameElement: Element | null;
    readonly navigator: Navigator;
    readonly applicationCache: ApplicationCache;
    readonly external: External;
    readonly screen: Screen;
    readonly innerWidth: number;
    readonly innerHeight: number;
    readonly scrollX: number;
    readonly pageXOffset: number;
    readonly scrollY: number;
    readonly pageYOffset: number;
    readonly screenX: number;
    readonly screenY: number;
    readonly outerWidth: number;
    readonly outerHeight: number;
    readonly devicePixelRatio: number;
    ondeviceorientation: (this: Window, ev: Event) => any;
    ondevicemotion: (this: Window, ev: Event) => any;
    readonly audioWorklet: Worklet;
    Blob: typeof Blob;
    close(): void;
    stop(): void;
    focus(): void;
    blur(): void;
    open(url?: string, target?: string, features?: string, replace?: boolean): Window;
    alert(message?: any): void;
    alert(message?: any): void;
    confirm(message?: string): boolean;
    prompt(message?: string, _default?: string): string | null;
    print(): void;
    requestAnimationFrame(callback: FrameRequestCallback): number;
    cancelAnimationFrame(handle: number): void;
    postMessage(message: any, targetOrigin: string, transfer?: any[]): void;
    captureEvents(): void;
    releaseEvents(): void;
    getComputedStyle(elt: Element, pseudoElt?: string): CSSStyleDeclaration;
    matchMedia(query: string): MediaQueryList;
    moveTo(x: number, y: number): void;
    moveBy(x: number, y: number): void;
    resizeTo(x: number, y: number): void;
    resizeBy(x: number, y: number): void;
    scroll(options?: ScrollToOptions): void;
    scroll(x: number, y: number): void;
    scrollTo(options?: ScrollToOptions): void;
    scrollTo(x: number, y: number): void;
    scrollBy(options?: ScrollToOptions): void;
    scrollBy(x: number, y: number): void;
    getSelection(): Selection | null;
    createImageBitmap(image: HTMLImageElement | SVGImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | ImageData | Blob, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    createImageBitmap(image: HTMLImageElement | SVGImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | ImageData | Blob, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    addEventListener<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var Window: {
    prototype: Window;
    new (): Window;
}

interface BarProp {
    readonly visible: boolean;
}

declare var BarProp: {
    prototype: BarProp;
    new (): BarProp;
}

interface History {
    readonly length: number;
    scrollRestoration: ScrollRestoration;
    readonly state: any;
    go(delta?: number): void;
    back(): void;
    forward(): void;
    pushState(data: any, title: string, url?: string | null): void;
    replaceState(data: any, title: string, url?: string | null): void;
}

declare var History: {
    prototype: History;
    new (): History;
}

interface Location {
    href: string;
    readonly origin: string;
    protocol: string;
    host: string;
    hostname: string;
    port: string;
    pathname: string;
    search: string;
    hash: string;
    readonly ancestorOrigins: DOMStringList;
    assign(url: string): void;
    replace(url: string): void;
    reload(): void;
}

declare var Location: {
    prototype: Location;
    new (): Location;
}

interface PopStateEvent extends Event {
    readonly state: any;
}

declare var PopStateEvent: {
    prototype: PopStateEvent;
    new (type: string, eventInitDict?: PopStateEventInit): PopStateEvent;
}

interface HashChangeEvent extends Event {
    readonly oldURL: string;
    readonly newURL: string;
}

declare var HashChangeEvent: {
    prototype: HashChangeEvent;
    new (type: string, eventInitDict?: HashChangeEventInit): HashChangeEvent;
}

interface PageTransitionEvent extends Event {
    readonly persisted: boolean;
}

declare var PageTransitionEvent: {
    prototype: PageTransitionEvent;
    new (type: string, eventInitDict?: PageTransitionEventInit): PageTransitionEvent;
}

interface BeforeUnloadEvent extends Event {
    returnValue: any;
}

declare var BeforeUnloadEvent: {
    prototype: BeforeUnloadEvent;
    new (): BeforeUnloadEvent;
}

interface ApplicationCacheEventMap {
    "checking": Event;
    "error": ErrorEvent;
    "noupdate": Event;
    "downloading": Event;
    "progress": ProgressEvent;
    "updateready": Event;
    "cached": Event;
    "obsolete": Event;
}

interface ApplicationCache extends EventTarget {
    readonly status: number;
    onchecking: (this: ApplicationCache, ev: Event) => any;
    onerror: (this: ApplicationCache, ev: ErrorEvent) => any;
    onnoupdate: (this: ApplicationCache, ev: Event) => any;
    ondownloading: (this: ApplicationCache, ev: Event) => any;
    onprogress: (this: ApplicationCache, ev: ProgressEvent) => any;
    onupdateready: (this: ApplicationCache, ev: Event) => any;
    oncached: (this: ApplicationCache, ev: Event) => any;
    onobsolete: (this: ApplicationCache, ev: Event) => any;
    update(): void;
    abort(): void;
    swapCache(): void;
    readonly UNCACHED: number;
    readonly IDLE: number;
    readonly CHECKING: number;
    readonly DOWNLOADING: number;
    readonly UPDATEREADY: number;
    readonly OBSOLETE: number;
    addEventListener<K extends keyof ApplicationCacheEventMap>(type: K, listener: (this: ApplicationCache, ev: ApplicationCacheEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var ApplicationCache: {
    prototype: ApplicationCache;
    new (): ApplicationCache;
    readonly UNCACHED: number;
    readonly IDLE: number;
    readonly CHECKING: number;
    readonly DOWNLOADING: number;
    readonly UPDATEREADY: number;
    readonly OBSOLETE: number;
}

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
}

interface PromiseRejectionEvent extends Event {
    readonly promise: Promise<any>;
    readonly reason: any;
}

declare var PromiseRejectionEvent: {
    prototype: PromiseRejectionEvent;
    new (type: string, eventInitDict: PromiseRejectionEventInit): PromiseRejectionEvent;
}

interface Navigator extends Object, NavigatorID, NavigatorLanguage, NavigatorOnLine, NavigatorContentUtils, NavigatorCookies, NavigatorPlugins, NavigatorConcurrentHardware, NavigatorUserMedia {
    readonly geolocation: Geolocation;
    readonly maxTouchPoints: number;
    readonly serviceWorker: ServiceWorkerContainer;
    readonly authentication: WebAuthentication;
    readonly hardwareConcurrency: number;
    sendBeacon(url: string, data?: BodyInit): boolean;
    requestMediaKeySystemAccess(keySystem: string, supportedConfigurations: MediaKeySystemConfiguration[]): Promise<MediaKeySystemAccess>;
    getGamepads(): any;
    vibrate(pattern: number | number[]): boolean;
}

declare var Navigator: {
    prototype: Navigator;
    new (): Navigator;
}

interface PluginArray {
    readonly length: number;
    refresh(reload?: boolean): void;
    item(index: number): Plugin | null;
    namedItem(name: string): Plugin | null;
    [index: number]: Plugin;
}

declare var PluginArray: {
    prototype: PluginArray;
    new (): PluginArray;
}

interface MimeTypeArray {
    readonly length: number;
    item(index: number): MimeType | null;
    namedItem(name: string): MimeType | null;
    [index: number]: MimeType;
}

declare var MimeTypeArray: {
    prototype: MimeTypeArray;
    new (): MimeTypeArray;
}

interface Plugin {
    readonly name: string;
    readonly description: string;
    readonly filename: string;
    readonly length: number;
    item(index: number): MimeType | null;
    namedItem(name: string): MimeType | null;
    [index: number]: MimeType;
}

declare var Plugin: {
    prototype: Plugin;
    new (): Plugin;
}

interface MimeType {
    readonly type: string;
    readonly description: string;
    readonly suffixes: string;
    readonly enabledPlugin: Plugin;
}

declare var MimeType: {
    prototype: MimeType;
    new (): MimeType;
}

interface ImageBitmap {
    readonly width: number;
    readonly height: number;
    close(): void;
}

declare var ImageBitmap: {
    prototype: ImageBitmap;
    new (): ImageBitmap;
}

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
}

interface EventSourceEventMap {
    "open": Event;
    "message": MessageEvent;
    "error": Event;
}

interface EventSource extends EventTarget {
    readonly url: string;
    readonly withCredentials: boolean;
    readonly readyState: number;
    onopen: (this: EventSource, ev: Event) => any;
    onmessage: (this: EventSource, ev: MessageEvent) => any;
    onerror: (this: EventSource, ev: Event) => any;
    close(): void;
    readonly CONNECTING: number;
    readonly OPEN: number;
    readonly CLOSED: number;
    addEventListener<K extends keyof EventSourceEventMap>(type: K, listener: (this: EventSource, ev: EventSourceEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var EventSource: {
    prototype: EventSource;
    new (url: string, eventSourceInitDict?: EventSourceInit): EventSource;
    readonly CONNECTING: number;
    readonly OPEN: number;
    readonly CLOSED: number;
}

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
    new (url: string, protocols?: string | string[]): WebSocket;
    readonly CONNECTING: number;
    readonly OPEN: number;
    readonly CLOSING: number;
    readonly CLOSED: number;
}

interface CloseEvent extends Event {
    readonly wasClean: boolean;
    readonly code: number;
    readonly reason: string;
}

declare var CloseEvent: {
    prototype: CloseEvent;
    new (type: string, eventInitDict?: CloseEventInit): CloseEvent;
}

interface MessageChannel {
    readonly port1: MessagePort;
    readonly port2: MessagePort;
}

declare var MessageChannel: {
    prototype: MessageChannel;
    new (): MessageChannel;
}

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
    new (): MessagePort;
}

interface BroadcastChannelEventMap {
    "message": MessageEvent;
}

interface BroadcastChannel extends EventTarget {
    readonly name: string;
    onmessage: (this: BroadcastChannel, ev: MessageEvent) => any;
    postMessage(message: any): void;
    close(): void;
    addEventListener<K extends keyof BroadcastChannelEventMap>(type: K, listener: (this: BroadcastChannel, ev: BroadcastChannelEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var BroadcastChannel: {
    prototype: BroadcastChannel;
    new (name: string): BroadcastChannel;
}

interface WorkerGlobalScopeEventMap {
    "error": ErrorEvent;
}

interface WorkerGlobalScope extends EventTarget, WindowOrWorkerGlobalScope, GlobalPerformance, GlobalCrypto {
    readonly self: WorkerGlobalScope;
    readonly location: WorkerLocation;
    readonly navigator: WorkerNavigator;
    onerror: OnErrorEventHandler;
    onlanguagechange: (this: WorkerGlobalScope, ev: Event) => any;
    onoffline: (this: WorkerGlobalScope, ev: Event) => any;
    ononline: (this: WorkerGlobalScope, ev: Event) => any;
    onrejectionhandled: (this: WorkerGlobalScope, ev: PromiseRejectionEvent) => any;
    onunhandledrejection: (this: WorkerGlobalScope, ev: PromiseRejectionEvent) => any;
    importScripts(...urls: string[]): void;
    createImageBitmap(image: ImageBitmap | ImageData | Blob, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    createImageBitmap(image: ImageBitmap | ImageData | Blob, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    addEventListener<K extends keyof WorkerGlobalScopeEventMap>(type: K, listener: (this: WorkerGlobalScope, ev: WorkerGlobalScopeEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var WorkerGlobalScope: {
    prototype: WorkerGlobalScope;
    new (): WorkerGlobalScope;
}

interface DedicatedWorkerGlobalScopeEventMap extends WorkerGlobalScopeEventMap {
    "message": MessageEvent;
}

interface DedicatedWorkerGlobalScope extends WorkerGlobalScope {
    onmessage: (this: DedicatedWorkerGlobalScope, ev: MessageEvent) => any;
    postMessage(message: any, transfer?: any[]): void;
    close(): void;
    addEventListener<K extends keyof DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var DedicatedWorkerGlobalScope: {
    prototype: DedicatedWorkerGlobalScope;
    new (): DedicatedWorkerGlobalScope;
}

interface SharedWorkerGlobalScopeEventMap extends WorkerGlobalScopeEventMap {
    "connect": MessageEvent;
}

interface SharedWorkerGlobalScope extends WorkerGlobalScope {
    readonly name: string;
    onconnect: (this: SharedWorkerGlobalScope, ev: MessageEvent) => any;
    close(): void;
    addEventListener<K extends keyof SharedWorkerGlobalScopeEventMap>(type: K, listener: (this: SharedWorkerGlobalScope, ev: SharedWorkerGlobalScopeEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SharedWorkerGlobalScope: {
    prototype: SharedWorkerGlobalScope;
    new (): SharedWorkerGlobalScope;
}

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
    new (scriptURL: string, options?: WorkerOptions): Worker;
}

interface SharedWorker extends EventTarget, AbstractWorker {
    readonly port: MessagePort;
    addEventListener<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: SharedWorker, ev: AbstractWorkerEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SharedWorker: {
    prototype: SharedWorker;
    new (scriptURL: string, name?: string, options?: WorkerOptions): SharedWorker;
}

interface WorkerNavigator extends Object, NavigatorID, NavigatorLanguage, NavigatorOnLine, NavigatorConcurrentHardware {
    readonly serviceWorker: ServiceWorkerContainer;
    readonly hardwareConcurrency: number;
}

declare var WorkerNavigator: {
    prototype: WorkerNavigator;
    new (): WorkerNavigator;
}

interface WorkerLocation {
    readonly href: string;
    readonly origin: string;
    readonly protocol: string;
    readonly host: string;
    readonly hostname: string;
    readonly port: string;
    readonly pathname: string;
    readonly search: string;
    readonly hash: string;
}

declare var WorkerLocation: {
    prototype: WorkerLocation;
    new (): WorkerLocation;
}

interface Storage {
    readonly length: number;
    key(index: number): string | null;
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
    clear(): void;
}

declare var Storage: {
    prototype: Storage;
    new (): Storage;
}

interface StorageEvent extends Event {
    readonly url: string;
    key?: string;
    oldValue?: string;
    newValue?: string;
    storageArea?: Storage;
}

declare var StorageEvent: {
    prototype: StorageEvent;
    new (type: string, eventInitDict?: StorageEventInit): StorageEvent;
}

interface HTMLAppletElement extends HTMLElement {
    align: string;
    /**
      * Sets or retrieves a text alternative to the graphic.
      */
    alt: string;
    /**
      * Sets or retrieves a character string that can be used to implement your own archive functionality for the object.
      */
    archive: string;
    code: string;
    /**
      * Sets or retrieves the URL of the component.
      */
    codeBase: string;
    /**
      * Sets or retrieves the height of the object.
      */
    height: string;
    hspace: number;
    /**
      * Sets or retrieves the shape of the object.
      */
    name: string;
    object: string;
    vspace: number;
    width: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLAppletElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLAppletElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLAppletElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLAppletElement: {
    prototype: HTMLAppletElement;
    new (): HTMLAppletElement;
}

interface HTMLMarqueeElementEventMap extends ElementEventMap, GlobalEventHandlersEventMap, DocumentAndElementEventHandlersEventMap {
    "bounce": Event;
    "finish": Event;
    "start": Event;
}

interface HTMLMarqueeElement extends HTMLElement {
    behavior: string;
    bgColor: string;
    direction: string;
    height: string;
    hspace: number;
    loop: number;
    scrollAmount: number;
    scrollDelay: number;
    trueSpeed: boolean;
    vspace: number;
    width: string;
    onbounce: (this: HTMLMarqueeElement, ev: Event) => any;
    onfinish: (this: HTMLMarqueeElement, ev: Event) => any;
    onstart: (this: HTMLMarqueeElement, ev: Event) => any;
    start(): void;
    stop(): void;
    addEventListener<K extends keyof HTMLMarqueeElementEventMap>(type: K, listener: (this: HTMLMarqueeElement, ev: HTMLMarqueeElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLMarqueeElement: {
    prototype: HTMLMarqueeElement;
    new (): HTMLMarqueeElement;
}

interface HTMLFrameSetElement extends HTMLElement, WindowEventHandlers {
    /**
      * Sets or retrieves the frame widths of the object.
      */
    cols: string;
    /**
      * Sets or retrieves the frame heights of the object.
      */
    rows: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLFrameSetElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLFrameSetElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLFrameSetElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof WindowEventHandlersEventMap>(type: K, listener: (this: HTMLFrameSetElement, ev: WindowEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLFrameSetElement: {
    prototype: HTMLFrameSetElement;
    new (): HTMLFrameSetElement;
}

interface HTMLFrameElement extends HTMLElement {
    /**
      * Sets or retrieves the frame name.
      */
    name: string;
    /**
      * Sets or retrieves whether the frame can be scrolled.
      */
    scrolling: string;
    /**
      * Sets or retrieves a URL to be loaded by the object.
      */
    src: string;
    /**
      * Sets or retrieves whether to display a border for the frame.
      */
    frameBorder: string;
    /**
      * Sets or retrieves a URI to a long description of the object.
      */
    longDesc: string;
    /**
      * Sets or retrieves whether the user can resize the frame.
      */
    noResize: boolean;
    /**
      * Retrieves the document object of the page or frame.
      */
    readonly contentDocument: Document | null;
    /**
      * Retrieves the object of the specified.
      */
    readonly contentWindow: any;
    /**
      * Sets or retrieves the top and bottom margin heights before displaying the text in a frame.
      */
    marginHeight: string;
    /**
      * Sets or retrieves the left and right margin widths before displaying the text in a frame.
      */
    marginWidth: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLFrameElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLFrameElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLFrameElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLFrameElement: {
    prototype: HTMLFrameElement;
    new (): HTMLFrameElement;
}

interface HTMLDirectoryElement extends HTMLElement {
    compact: boolean;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLDirectoryElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLDirectoryElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLDirectoryElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLDirectoryElement: {
    prototype: HTMLDirectoryElement;
    new (): HTMLDirectoryElement;
}

interface HTMLFontElement extends HTMLElement {
    color: string;
    /**
      * Sets or retrieves the current typeface family.
      */
    face: string;
    size: string;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: HTMLFontElement, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: HTMLFontElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: HTMLFontElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var HTMLFontElement: {
    prototype: HTMLFontElement;
    new (): HTMLFontElement;
}

interface IDBKeyRange {
    readonly lower: any;
    readonly upper: any;
    readonly lowerOpen: boolean;
    readonly upperOpen: boolean;
}

declare var IDBKeyRange: {
    prototype: IDBKeyRange;
    new (): IDBKeyRange;
    only(value: any): IDBKeyRange;
    lowerBound(lower: any, open?: boolean): IDBKeyRange;
    upperBound(upper: any, open?: boolean): IDBKeyRange;
    bound(lower: any, upper: any, lowerOpen?: boolean, upperOpen?: boolean): IDBKeyRange;
}

interface IDBRequestEventMap {
    "success": Event;
    "error": ErrorEvent;
}

interface IDBRequest extends EventTarget {
    readonly result: any;
    readonly error: any;
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
    new (): IDBRequest;
}

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
    new (): IDBOpenDBRequest;
}

interface IDBVersionChangeEvent extends Event {
    readonly oldVersion: number;
    readonly newVersion: number | null;
}

declare var IDBVersionChangeEvent: {
    prototype: IDBVersionChangeEvent;
    new (type: string, eventInitDict?: IDBVersionChangeEventInit): IDBVersionChangeEvent;
}

interface IDBFactory {
    open(name: string, version?: number): IDBOpenDBRequest;
    deleteDatabase(name: string): IDBOpenDBRequest;
    cmp(first: any, second: any): number;
}

declare var IDBFactory: {
    prototype: IDBFactory;
    new (): IDBFactory;
}

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
    transaction(storeNames: string | string[], mode?: string): IDBTransaction;
    close(): void;
    addEventListener(type: "versionchange", listener: (ev: IDBVersionChangeEvent) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof IDBDatabaseEventMap>(type: K, listener: (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var IDBDatabase: {
    prototype: IDBDatabase;
    new (): IDBDatabase;
}

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
    openCursor(range?: IDBKeyRange | IDBValidKey, direction?: string): IDBRequest;
    createIndex(name: string, keyPath: string | string[], optionalParameters?: IDBIndexParameters): IDBIndex;
    index(name: string): IDBIndex;
    deleteIndex(indexName: string): void;
    count(key?: IDBKeyRange | IDBValidKey): IDBRequest;
}

declare var IDBObjectStore: {
    prototype: IDBObjectStore;
    new (): IDBObjectStore;
}

interface IDBIndex {
    readonly name: string;
    readonly objectStore: IDBObjectStore;
    keyPath: string | string[];
    readonly multiEntry: boolean;
    readonly unique: boolean;
    openCursor(range?: IDBKeyRange | IDBValidKey, direction?: string): IDBRequest;
    openKeyCursor(range?: IDBKeyRange | IDBValidKey, direction?: string): IDBRequest;
    get(key: IDBKeyRange | IDBValidKey): IDBRequest;
    getKey(key: IDBKeyRange | IDBValidKey): IDBRequest;
    count(key?: IDBKeyRange | IDBValidKey): IDBRequest;
}

declare var IDBIndex: {
    prototype: IDBIndex;
    new (): IDBIndex;
}

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
    new (): IDBCursor;
}

interface IDBCursorWithValue extends IDBCursor {
    readonly value: any;
}

declare var IDBCursorWithValue: {
    prototype: IDBCursorWithValue;
    new (): IDBCursorWithValue;
}

interface IDBTransactionEventMap {
    "abort": Event;
    "complete": Event;
    "error": ErrorEvent;
}

interface IDBTransaction extends EventTarget {
    readonly mode: IDBTransactionMode;
    readonly db: IDBDatabase;
    readonly error: any;
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
    new (): IDBTransaction;
}

interface IntersectionObserver {
    readonly root: Element | null;
    readonly rootMargin: string;
    readonly thresholds: ReadonlyArray<number>;
    observe(target: Element): void;
    unobserve(target: Element): void;
    disconnect(): void;
    takeRecords(): IntersectionObserverEntry[];
}

declare var IntersectionObserver: {
    prototype: IntersectionObserver;
    new (callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver;
}

interface IntersectionObserverEntry {
    readonly time: number;
    readonly rootBounds: DOMRectReadOnly;
    readonly boundingClientRect: DOMRectReadOnly;
    readonly intersectionRect: DOMRectReadOnly;
    readonly isIntersecting: boolean;
    readonly intersectionRatio: number;
    readonly target: Element;
}

declare var IntersectionObserverEntry: {
    prototype: IntersectionObserverEntry;
    new (intersectionObserverEntryInit: IntersectionObserverEntryInit): IntersectionObserverEntry;
}

interface MediaStreamEventMap {
    "addtrack": TrackEvent;
    "removetrack": TrackEvent;
}

interface MediaStream extends EventTarget {
    readonly id: string;
    readonly active: boolean;
    onaddtrack: (this: MediaStream, ev: TrackEvent) => any;
    onremovetrack: (this: MediaStream, ev: TrackEvent) => any;
    getAudioTracks(): MediaStreamTrack[];
    getVideoTracks(): MediaStreamTrack[];
    getTracks(): MediaStreamTrack[];
    getTrackById(trackId: string): MediaStreamTrack | null;
    addTrack(track: MediaStreamTrack): void;
    removeTrack(track: MediaStreamTrack): void;
    clone(): MediaStream;
    addEventListener<K extends keyof MediaStreamEventMap>(type: K, listener: (this: MediaStream, ev: MediaStreamEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var MediaStream: {
    prototype: MediaStream;
    new (): MediaStream;
    new (stream: MediaStream): MediaStream;
    new (tracks: MediaStreamTrack[]): MediaStream;
}

interface MediaStreamTrackEventMap {
    "mute": Event;
    "unmute": Event;
    "ended": Event;
    "overconstrained": OverconstrainedErrorEvent;
    "isolationchange": Event;
}

interface MediaStreamTrack extends EventTarget {
    readonly kind: string;
    readonly id: string;
    readonly label: string;
    enabled: boolean;
    readonly muted: boolean;
    onmute: (this: MediaStreamTrack, ev: Event) => any;
    onunmute: (this: MediaStreamTrack, ev: Event) => any;
    readonly readyState: MediaStreamTrackState;
    onended: (this: MediaStreamTrack, ev: Event) => any;
    onoverconstrained: (this: MediaStreamTrack, ev: OverconstrainedErrorEvent) => any;
    readonly isolated: boolean;
    onisolationchange: (this: MediaStreamTrack, ev: Event) => any;
    clone(): MediaStreamTrack;
    stop(): void;
    getCapabilities(): MediaTrackCapabilities;
    getConstraints(): MediaTrackConstraints;
    getSettings(): MediaTrackSettings;
    applyConstraints(constraints?: MediaTrackConstraints): Promise<void>;
    addEventListener<K extends keyof MediaStreamTrackEventMap>(type: K, listener: (this: MediaStreamTrack, ev: MediaStreamTrackEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var MediaStreamTrack: {
    prototype: MediaStreamTrack;
    new (): MediaStreamTrack;
}

interface MediaStreamTrackEvent extends Event {
    readonly track: MediaStreamTrack;
}

declare var MediaStreamTrackEvent: {
    prototype: MediaStreamTrackEvent;
    new (type: string, eventInitDict: MediaStreamTrackEventInit): MediaStreamTrackEvent;
}

interface OverconstrainedErrorEvent extends Event {
    readonly error: any;
}

declare var OverconstrainedErrorEvent: {
    prototype: OverconstrainedErrorEvent;
    new (type: string, eventInitDict: OverconstrainedErrorEventInit): OverconstrainedErrorEvent;
}

interface MediaDevicesEventMap {
    "devicechange": Event;
}

interface MediaDevices extends EventTarget {
    ondevicechange: (this: MediaDevices, ev: Event) => any;
    enumerateDevices(): any;
    getSupportedConstraints(): MediaTrackSupportedConstraints;
    getUserMedia(constraints?: MediaStreamConstraints): Promise<MediaStream>;
    addEventListener<K extends keyof MediaDevicesEventMap>(type: K, listener: (this: MediaDevices, ev: MediaDevicesEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var MediaDevices: {
    prototype: MediaDevices;
    new (): MediaDevices;
}

interface MediaDeviceInfo {
    readonly deviceId: string;
    readonly kind: MediaDeviceKind;
    readonly label: string;
    readonly groupId: string;
}

declare var MediaDeviceInfo: {
    prototype: MediaDeviceInfo;
    new (): MediaDeviceInfo;
}

interface InputDeviceInfo extends MediaDeviceInfo {
    getCapabilities(): MediaTrackCapabilities;
}

declare var InputDeviceInfo: {
    prototype: InputDeviceInfo;
    new (): InputDeviceInfo;
}

interface VideoPlaybackQuality {
    readonly creationTime: number;
    readonly corruptedVideoFrames: number;
    readonly droppedVideoFrames: number;
    readonly totalVideoFrames: number;
}

declare var VideoPlaybackQuality: {
    prototype: VideoPlaybackQuality;
    new (): VideoPlaybackQuality;
}

interface MediaSourceEventMap {
    "sourceopen": Event;
    "sourceended": Event;
    "sourceclose": Event;
}

interface MediaSource extends EventTarget {
    readonly sourceBuffers: SourceBufferList;
    readonly activeSourceBuffers: SourceBufferList;
    readonly readyState: string;
    duration: number;
    onsourceopen: (this: MediaSource, ev: Event) => any;
    onsourceended: (this: MediaSource, ev: Event) => any;
    onsourceclose: (this: MediaSource, ev: Event) => any;
    addSourceBuffer(type: string): SourceBuffer;
    removeSourceBuffer(sourceBuffer: SourceBuffer): void;
    endOfStream(error?: EndOfStreamError): void;
    setLiveSeekableRange(start: number, end: number): void;
    clearLiveSeekableRange(): void;
    addEventListener<K extends keyof MediaSourceEventMap>(type: K, listener: (this: MediaSource, ev: MediaSourceEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var MediaSource: {
    prototype: MediaSource;
    new (): MediaSource;
    isTypeSupported(type: string): boolean;
}

interface SourceBufferEventMap {
    "updatestart": Event;
    "update": Event;
    "updateend": Event;
    "error": Event;
    "abort": Event;
}

interface SourceBuffer extends EventTarget {
    mode: AppendMode;
    readonly updating: boolean;
    readonly buffered: TimeRanges;
    timestampOffset: number;
    readonly audioTracks: AudioTrackList;
    readonly videoTracks: VideoTrackList;
    readonly textTracks: TextTrackList;
    appendWindowStart: number;
    appendWindowEnd: number;
    onupdatestart: (this: SourceBuffer, ev: Event) => any;
    onupdate: (this: SourceBuffer, ev: Event) => any;
    onupdateend: (this: SourceBuffer, ev: Event) => any;
    onerror: (this: SourceBuffer, ev: Event) => any;
    onabort: (this: SourceBuffer, ev: Event) => any;
    appendBuffer(data: BufferSource): void;
    abort(): void;
    remove(start: number, end: number): void;
    addEventListener<K extends keyof SourceBufferEventMap>(type: K, listener: (this: SourceBuffer, ev: SourceBufferEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SourceBuffer: {
    prototype: SourceBuffer;
    new (): SourceBuffer;
}

interface SourceBufferListEventMap {
    "addsourcebuffer": Event;
    "removesourcebuffer": Event;
}

interface SourceBufferList extends EventTarget {
    readonly length: number;
    onaddsourcebuffer: (this: SourceBufferList, ev: Event) => any;
    onremovesourcebuffer: (this: SourceBufferList, ev: Event) => any;
    addEventListener<K extends keyof SourceBufferListEventMap>(type: K, listener: (this: SourceBufferList, ev: SourceBufferListEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    [index: number]: SourceBuffer;
}

declare var SourceBufferList: {
    prototype: SourceBufferList;
    new (): SourceBufferList;
}

interface PerformanceNavigationTiming extends PerformanceResourceTiming {
    readonly unloadEventStart: number;
    readonly unloadEventEnd: number;
    readonly domInteractive: number;
    readonly domContentLoadedEventStart: number;
    readonly domContentLoadedEventEnd: number;
    readonly domComplete: number;
    readonly loadEventStart: number;
    readonly loadEventEnd: number;
    readonly type: NavigationType;
    readonly redirectCount: number;
}

declare var PerformanceNavigationTiming: {
    prototype: PerformanceNavigationTiming;
    new (): PerformanceNavigationTiming;
}

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
    new (): PerformanceTiming;
}

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
    new (): PerformanceNavigation;
    readonly TYPE_NAVIGATE: number;
    readonly TYPE_RELOAD: number;
    readonly TYPE_BACK_FORWARD: number;
    readonly TYPE_RESERVED: number;
}

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
    readonly vibrate: any;
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
    new (title: string, options?: NotificationOptions): Notification;
    requestPermission(deprecatedCallback?: NotificationPermissionCallback): Promise<NotificationPermission>;
}

interface NotificationEvent extends ExtendableEvent {
    readonly notification: Notification;
    readonly action: string;
}

declare var NotificationEvent: {
    prototype: NotificationEvent;
    new (type: string, eventInitDict: NotificationEventInit): NotificationEvent;
}

interface PaymentRequestEventMap {
    "shippingaddresschange": Event;
    "shippingoptionchange": Event;
}

interface PaymentRequest extends EventTarget {
    readonly id: string;
    readonly shippingAddress: PaymentAddress | null;
    readonly shippingOption: string | null;
    readonly shippingType: PaymentShippingType | null;
    onshippingaddresschange: (this: PaymentRequest, ev: Event) => any;
    onshippingoptionchange: (this: PaymentRequest, ev: Event) => any;
    show(): Promise<PaymentResponse>;
    abort(): Promise<void>;
    canMakePayment(): Promise<boolean>;
    addEventListener<K extends keyof PaymentRequestEventMap>(type: K, listener: (this: PaymentRequest, ev: PaymentRequestEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var PaymentRequest: {
    prototype: PaymentRequest;
    new (methodData: PaymentMethodData[], details: PaymentDetailsInit, options?: PaymentOptions): PaymentRequest;
}

interface PaymentAddress {
    readonly country: string;
    readonly addressLine: ReadonlyArray<string>;
    readonly region: string;
    readonly city: string;
    readonly dependentLocality: string;
    readonly postalCode: string;
    readonly sortingCode: string;
    readonly languageCode: string;
    readonly organization: string;
    readonly recipient: string;
    readonly phone: string;
}

declare var PaymentAddress: {
    prototype: PaymentAddress;
    new (): PaymentAddress;
}

interface PaymentResponse {
    readonly requestId: string;
    readonly methodName: string;
    readonly details: any;
    readonly shippingAddress: PaymentAddress | null;
    readonly shippingOption: string | null;
    readonly payerName: string | null;
    readonly payerEmail: string | null;
    readonly payerPhone: string | null;
    complete(result?: PaymentComplete): Promise<void>;
}

declare var PaymentResponse: {
    prototype: PaymentResponse;
    new (): PaymentResponse;
}

interface PaymentRequestUpdateEvent extends Event {
    updateWith(detailsPromise: Promise<PaymentDetailsUpdate>): void;
}

declare var PaymentRequestUpdateEvent: {
    prototype: PaymentRequestUpdateEvent;
    new (type: string, eventInitDict?: PaymentRequestUpdateEventInit): PaymentRequestUpdateEvent;
}

interface PerformanceEntry {
    readonly name: string;
    readonly entryType: string;
    readonly startTime: number;
    readonly duration: number;
}

declare var PerformanceEntry: {
    prototype: PerformanceEntry;
    new (): PerformanceEntry;
}

interface PerformanceObserverEntryList {
    getEntries(): PerformanceEntryList;
    getEntriesByType(type: string): PerformanceEntryList;
    getEntriesByName(name: string, type?: string): PerformanceEntryList;
}

declare var PerformanceObserverEntryList: {
    prototype: PerformanceObserverEntryList;
    new (): PerformanceObserverEntryList;
}

interface PerformanceObserver {
    observe(options: PerformanceObserverInit): void;
    disconnect(): void;
}

declare var PerformanceObserver: {
    prototype: PerformanceObserver;
    new (callback: PerformanceObserverCallback): PerformanceObserver;
}

interface PointerEvent extends MouseEvent {
    readonly pointerId: number;
    readonly width: number;
    readonly height: number;
    readonly pressure: number;
    readonly tiltX: number;
    readonly tiltY: number;
    readonly pointerType: string;
    readonly isPrimary: boolean;
}

declare var PointerEvent: {
    prototype: PointerEvent;
    new (type: string, eventInitDict?: PointerEventInit): PointerEvent;
}

interface PushManager {
    subscribe(options?: PushSubscriptionOptionsInit): Promise<PushSubscription>;
    getSubscription(): any;
    permissionState(options?: PushSubscriptionOptionsInit): Promise<PushPermissionState>;
}

declare var PushManager: {
    prototype: PushManager;
    new (): PushManager;
}

interface PushSubscriptionOptions {
    readonly userVisibleOnly: boolean;
    readonly applicationServerKey: ArrayBuffer | null;
}

declare var PushSubscriptionOptions: {
    prototype: PushSubscriptionOptions;
    new (): PushSubscriptionOptions;
}

interface PushSubscription {
    readonly endpoint: string;
    readonly options: PushSubscriptionOptions;
    getKey(name: PushEncryptionKeyName): ArrayBuffer | null;
    unsubscribe(): Promise<boolean>;
}

declare var PushSubscription: {
    prototype: PushSubscription;
    new (): PushSubscription;
}

interface PushMessageData {
    arrayBuffer(): ArrayBuffer;
    blob(): Blob;
    json(): any;
    text(): string;
}

declare var PushMessageData: {
    prototype: PushMessageData;
    new (): PushMessageData;
}

interface PushEvent extends ExtendableEvent {
    readonly data: PushMessageData | null;
}

declare var PushEvent: {
    prototype: PushEvent;
    new (type: string, eventInitDict?: PushEventInit): PushEvent;
}

interface PushSubscriptionChangeEvent extends ExtendableEvent {
    readonly newSubscription: PushSubscription | null;
    readonly oldSubscription: PushSubscription | null;
}

declare var PushSubscriptionChangeEvent: {
    prototype: PushSubscriptionChangeEvent;
    new (type: string, eventInitDict?: PushSubscriptionChangeInit): PushSubscriptionChangeEvent;
}

interface PerformanceResourceTiming extends PerformanceEntry {
    readonly initiatorType: string;
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
}

declare var PerformanceResourceTiming: {
    prototype: PerformanceResourceTiming;
    new (): PerformanceResourceTiming;
}

interface Selection {
    readonly anchorNode: Node | null;
    readonly anchorOffset: number;
    readonly focusNode: Node | null;
    readonly focusOffset: number;
    readonly isCollapsed: boolean;
    readonly rangeCount: number;
    readonly type: string;
    getRangeAt(index: number): Range;
    addRange(range: Range): void;
    removeRange(range: Range): void;
    removeAllRanges(): void;
    empty(): void;
    collapse(node: Node | null, offset?: number): void;
    setPosition(node: Node | null, offset?: number): void;
    collapseToStart(): void;
    collapseToEnd(): void;
    extend(node: Node, offset?: number): void;
    setBaseAndExtent(anchorNode: Node, anchorOffset: number, focusNode: Node, focusOffset: number): void;
    selectAllChildren(node: Node): void;
    deleteFromDocument(): void;
    containsNode(node: Node, allowPartialContainment?: boolean): boolean;
}

declare var Selection: {
    prototype: Selection;
    new (): Selection;
}

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
    new (): ServiceWorker;
}

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
    getNotifications(filter?: GetNotificationOptions): any;
    addEventListener<K extends keyof ServiceWorkerRegistrationEventMap>(type: K, listener: (this: ServiceWorkerRegistration, ev: ServiceWorkerRegistrationEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var ServiceWorkerRegistration: {
    prototype: ServiceWorkerRegistration;
    new (): ServiceWorkerRegistration;
}

interface ServiceWorkerContainerEventMap {
    "controllerchange": Event;
    "message": MessageEvent;
}

interface ServiceWorkerContainer extends EventTarget {
    readonly controller: ServiceWorker | null;
    readonly ready: Promise<ServiceWorkerRegistration>;
    oncontrollerchange: (this: ServiceWorkerContainer, ev: Event) => any;
    onmessage: (this: ServiceWorkerContainer, ev: MessageEvent) => any;
    register(scriptURL: string, options?: RegistrationOptions): Promise<ServiceWorkerRegistration>;
    getRegistration(clientURL?: string): Promise<any>;
    getRegistrations(): any;
    startMessages(): void;
    addEventListener<K extends keyof ServiceWorkerContainerEventMap>(type: K, listener: (this: ServiceWorkerContainer, ev: ServiceWorkerContainerEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var ServiceWorkerContainer: {
    prototype: ServiceWorkerContainer;
    new (): ServiceWorkerContainer;
}

interface NavigationPreloadManager {
    enable(): Promise<void>;
    disable(): Promise<void>;
    setHeaderValue(value: any): Promise<void>;
    getState(): Promise<NavigationPreloadState>;
}

declare var NavigationPreloadManager: {
    prototype: NavigationPreloadManager;
    new (): NavigationPreloadManager;
}

interface ServiceWorkerGlobalScopeEventMap extends WorkerGlobalScopeEventMap {
    "activate": ExtendableEvent;
    "fetch": FetchEvent;
    "install": InstallEvent;
    "message": ExtendableMessageEvent;
    "notificationclick": NotificationEvent;
    "notificationclose": NotificationEvent;
    "push": PushEvent;
    "pushsubscriptionchange": PushSubscriptionChangeEvent;
    "sync": SyncEvent;
}

interface ServiceWorkerGlobalScope extends WorkerGlobalScope {
    readonly clients: Clients;
    readonly registration: ServiceWorkerRegistration;
    oninstall: (this: ServiceWorkerGlobalScope, ev: InstallEvent) => any;
    onactivate: (this: ServiceWorkerGlobalScope, ev: ExtendableEvent) => any;
    onfetch: (this: ServiceWorkerGlobalScope, ev: FetchEvent) => any;
    onforeignfetch: (this: ServiceWorkerGlobalScope, ev: FetchEvent) => any;
    onmessage: (this: ServiceWorkerGlobalScope, ev: ExtendableMessageEvent) => any;
    onnotificationclick: (this: ServiceWorkerGlobalScope, ev: NotificationEvent) => any;
    onnotificationclose: (this: ServiceWorkerGlobalScope, ev: NotificationEvent) => any;
    onpush: (this: ServiceWorkerGlobalScope, ev: PushEvent) => any;
    onpushsubscriptionchange: (this: ServiceWorkerGlobalScope, ev: PushSubscriptionChangeEvent) => any;
    onsync: (this: ServiceWorkerGlobalScope, ev: SyncEvent) => any;
    skipWaiting(): Promise<void>;
    addEventListener<K extends keyof ServiceWorkerGlobalScopeEventMap>(type: K, listener: (this: ServiceWorkerGlobalScope, ev: ServiceWorkerGlobalScopeEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var ServiceWorkerGlobalScope: {
    prototype: ServiceWorkerGlobalScope;
    new (): ServiceWorkerGlobalScope;
}

interface Client {
    readonly url: string;
    readonly id: string;
    readonly type: ClientType;
    readonly reserved: boolean;
    postMessage(message: any, transfer?: any[]): void;
}

declare var Client: {
    prototype: Client;
    new (): Client;
}

interface WindowClient extends Client {
    readonly visibilityState: any;
    readonly focused: boolean;
    readonly ancestorOrigins: ReadonlyArray<string>;
    focus(): Promise<WindowClient>;
    navigate(url: string): Promise<WindowClient>;
}

declare var WindowClient: {
    prototype: WindowClient;
    new (): WindowClient;
}

interface Clients {
    get(id: string): Promise<any>;
    matchAll(options?: ClientQueryOptions): any;
    openWindow(url: string): any;
    claim(): Promise<void>;
}

declare var Clients: {
    prototype: Clients;
    new (): Clients;
}

interface ExtendableEvent extends Event {
    waitUntil(f: Promise<any>): void;
}

declare var ExtendableEvent: {
    prototype: ExtendableEvent;
    new (type: string, eventInitDict?: ExtendableEventInit): ExtendableEvent;
}

interface InstallEvent extends ExtendableEvent {
    registerForeignFetch(options: ForeignFetchOptions): void;
}

declare var InstallEvent: {
    prototype: InstallEvent;
    new (type: string, eventInitDict?: ExtendableEventInit): InstallEvent;
}

interface FetchEvent extends ExtendableEvent {
    readonly request: Request;
    readonly preloadResponse: Promise<any>;
    readonly clientId: string;
    readonly reservedClientId: string;
    readonly targetClientId: string;
    respondWith(r: Promise<Response>): void;
}

declare var FetchEvent: {
    prototype: FetchEvent;
    new (type: string, eventInitDict: FetchEventInit): FetchEvent;
}

interface ForeignFetchEvent extends ExtendableEvent {
    readonly request: Request;
    readonly origin: string;
    respondWith(r: Promise<ForeignFetchResponse>): void;
}

declare var ForeignFetchEvent: {
    prototype: ForeignFetchEvent;
    new (type: string, eventInitDict: ForeignFetchEventInit): ForeignFetchEvent;
}

interface ExtendableMessageEvent extends ExtendableEvent {
    readonly data: any;
    readonly origin: string;
    readonly lastEventId: string;
    readonly source: Client | ServiceWorker | MessagePort | null;
    readonly ports: ReadonlyArray<MessagePort>;
}

declare var ExtendableMessageEvent: {
    prototype: ExtendableMessageEvent;
    new (type: string, eventInitDict?: ExtendableMessageEventInit): ExtendableMessageEvent;
}

interface Cache {
    match(request: RequestInfo, options?: CacheQueryOptions): Promise<any>;
    matchAll(request?: RequestInfo, options?: CacheQueryOptions): any;
    add(request: RequestInfo): Promise<void>;
    addAll(requests: RequestInfo[]): Promise<void>;
    put(request: RequestInfo, response: Response): Promise<void>;
    delete(request: RequestInfo, options?: CacheQueryOptions): Promise<boolean>;
    keys(request?: RequestInfo, options?: CacheQueryOptions): any;
}

declare var Cache: {
    prototype: Cache;
    new (): Cache;
}

interface CacheStorage {
    match(request: RequestInfo, options?: CacheQueryOptions): Promise<any>;
    has(cacheName: string): Promise<boolean>;
    open(cacheName: string): Promise<Cache>;
    delete(cacheName: string): Promise<boolean>;
    keys(): any;
}

declare var CacheStorage: {
    prototype: CacheStorage;
    new (): CacheStorage;
}

interface ReadableStream {
    readonly locked: boolean;
    cancel(): Promise<void>;
    getReader(): ReadableStreamDefaultReader;
}

declare var ReadableStream: {
    prototype: ReadableStream;
    new (): ReadableStream;
}

interface ReadableStreamDefaultReader {
    readonly closed: boolean;
    cancel(): Promise<void>;
    read(): Promise<any>;
    releaseLock(): void;
}

declare var ReadableStreamDefaultReader: {
    prototype: ReadableStreamDefaultReader;
    new (stream: ReadableStream): ReadableStreamDefaultReader;
}

interface SVGElement extends Element, GlobalEventHandlers, SVGElementInstance, ElementCSSInlineStyle {
    className: any;
    readonly dataset: DOMStringMap;
    readonly ownerSVGElement: SVGSVGElement | null;
    readonly viewportElement: SVGElement | null;
    tabIndex: number;
    focus(): void;
    blur(): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGElement: {
    prototype: SVGElement;
    new (): SVGElement;
}

interface SVGGraphicsElement extends SVGElement, SVGTests {
    readonly transform: SVGAnimatedTransformList;
    getBBox(options?: SVGBoundingBoxOptions): DOMRect;
    getCTM(): DOMMatrix | null;
    getScreenCTM(): DOMMatrix | null;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGGraphicsElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGGraphicsElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGGraphicsElement: {
    prototype: SVGGraphicsElement;
    new (): SVGGraphicsElement;
}

interface SVGGeometryElement extends SVGGraphicsElement {
    readonly pathLength: SVGAnimatedNumber;
    isPointInFill(point: DOMPoint): boolean;
    isPointInStroke(point: DOMPoint): boolean;
    getTotalLength(): number;
    getPointAtLength(distance: number): DOMPoint;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGGeometryElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGGeometryElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGGeometryElement: {
    prototype: SVGGeometryElement;
    new (): SVGGeometryElement;
}

interface SVGNumber {
    value: number;
}

declare var SVGNumber: {
    prototype: SVGNumber;
    new (): SVGNumber;
}

interface SVGLength {
    readonly unitType: number;
    value: number;
    valueInSpecifiedUnits: number;
    valueAsString: string;
    newValueSpecifiedUnits(unitType: number, valueInSpecifiedUnits: number): void;
    convertToSpecifiedUnits(unitType: number): void;
    readonly SVG_LENGTHTYPE_UNKNOWN: number;
    readonly SVG_LENGTHTYPE_NUMBER: number;
    readonly SVG_LENGTHTYPE_PERCENTAGE: number;
    readonly SVG_LENGTHTYPE_EMS: number;
    readonly SVG_LENGTHTYPE_EXS: number;
    readonly SVG_LENGTHTYPE_PX: number;
    readonly SVG_LENGTHTYPE_CM: number;
    readonly SVG_LENGTHTYPE_MM: number;
    readonly SVG_LENGTHTYPE_IN: number;
    readonly SVG_LENGTHTYPE_PT: number;
    readonly SVG_LENGTHTYPE_PC: number;
}

declare var SVGLength: {
    prototype: SVGLength;
    new (): SVGLength;
    readonly SVG_LENGTHTYPE_UNKNOWN: number;
    readonly SVG_LENGTHTYPE_NUMBER: number;
    readonly SVG_LENGTHTYPE_PERCENTAGE: number;
    readonly SVG_LENGTHTYPE_EMS: number;
    readonly SVG_LENGTHTYPE_EXS: number;
    readonly SVG_LENGTHTYPE_PX: number;
    readonly SVG_LENGTHTYPE_CM: number;
    readonly SVG_LENGTHTYPE_MM: number;
    readonly SVG_LENGTHTYPE_IN: number;
    readonly SVG_LENGTHTYPE_PT: number;
    readonly SVG_LENGTHTYPE_PC: number;
}

interface SVGAngle {
    readonly unitType: number;
    value: number;
    valueInSpecifiedUnits: number;
    valueAsString: string;
    newValueSpecifiedUnits(unitType: number, valueInSpecifiedUnits: number): void;
    convertToSpecifiedUnits(unitType: number): void;
    readonly SVG_ANGLETYPE_UNKNOWN: number;
    readonly SVG_ANGLETYPE_UNSPECIFIED: number;
    readonly SVG_ANGLETYPE_DEG: number;
    readonly SVG_ANGLETYPE_RAD: number;
    readonly SVG_ANGLETYPE_GRAD: number;
}

declare var SVGAngle: {
    prototype: SVGAngle;
    new (): SVGAngle;
    readonly SVG_ANGLETYPE_UNKNOWN: number;
    readonly SVG_ANGLETYPE_UNSPECIFIED: number;
    readonly SVG_ANGLETYPE_DEG: number;
    readonly SVG_ANGLETYPE_RAD: number;
    readonly SVG_ANGLETYPE_GRAD: number;
}

interface SVGNumberList {
    readonly length: number;
    readonly numberOfItems: number;
    clear(): void;
    initialize(newItem: SVGNumber): SVGNumber;
    getItem(index: number): SVGNumber;
    insertItemBefore(newItem: SVGNumber, index: number): SVGNumber;
    replaceItem(newItem: SVGNumber, index: number): SVGNumber;
    removeItem(index: number): SVGNumber;
    appendItem(newItem: SVGNumber): SVGNumber;
    [index: number]: SVGNumber;
}

declare var SVGNumberList: {
    prototype: SVGNumberList;
    new (): SVGNumberList;
}

interface SVGLengthList {
    readonly length: number;
    readonly numberOfItems: number;
    clear(): void;
    initialize(newItem: SVGLength): SVGLength;
    getItem(index: number): SVGLength;
    insertItemBefore(newItem: SVGLength, index: number): SVGLength;
    replaceItem(newItem: SVGLength, index: number): SVGLength;
    removeItem(index: number): SVGLength;
    appendItem(newItem: SVGLength): SVGLength;
    [index: number]: SVGLength;
}

declare var SVGLengthList: {
    prototype: SVGLengthList;
    new (): SVGLengthList;
}

interface SVGAnimatedBoolean {
    baseVal: boolean;
    readonly animVal: boolean;
}

declare var SVGAnimatedBoolean: {
    prototype: SVGAnimatedBoolean;
    new (): SVGAnimatedBoolean;
}

interface SVGAnimatedEnumeration {
    baseVal: number;
    readonly animVal: number;
}

declare var SVGAnimatedEnumeration: {
    prototype: SVGAnimatedEnumeration;
    new (): SVGAnimatedEnumeration;
}

interface SVGAnimatedInteger {
    baseVal: number;
    readonly animVal: number;
}

declare var SVGAnimatedInteger: {
    prototype: SVGAnimatedInteger;
    new (): SVGAnimatedInteger;
}

interface SVGAnimatedNumber {
    baseVal: number;
    readonly animVal: number;
}

declare var SVGAnimatedNumber: {
    prototype: SVGAnimatedNumber;
    new (): SVGAnimatedNumber;
}

interface SVGAnimatedLength {
    readonly baseVal: SVGLength;
    readonly animVal: SVGLength;
}

declare var SVGAnimatedLength: {
    prototype: SVGAnimatedLength;
    new (): SVGAnimatedLength;
}

interface SVGAnimatedAngle {
    readonly baseVal: SVGAngle;
    readonly animVal: SVGAngle;
}

declare var SVGAnimatedAngle: {
    prototype: SVGAnimatedAngle;
    new (): SVGAnimatedAngle;
}

interface SVGAnimatedString {
    baseVal: string;
    readonly animVal: string;
}

declare var SVGAnimatedString: {
    prototype: SVGAnimatedString;
    new (): SVGAnimatedString;
}

interface SVGAnimatedRect {
    readonly baseVal: DOMRect;
    readonly animVal: DOMRectReadOnly;
}

declare var SVGAnimatedRect: {
    prototype: SVGAnimatedRect;
    new (): SVGAnimatedRect;
}

interface SVGAnimatedNumberList {
    readonly baseVal: SVGNumberList;
    readonly animVal: SVGNumberList;
}

declare var SVGAnimatedNumberList: {
    prototype: SVGAnimatedNumberList;
    new (): SVGAnimatedNumberList;
}

interface SVGAnimatedLengthList {
    readonly baseVal: SVGLengthList;
    readonly animVal: SVGLengthList;
}

declare var SVGAnimatedLengthList: {
    prototype: SVGAnimatedLengthList;
    new (): SVGAnimatedLengthList;
}

interface SVGStringList {
    readonly length: number;
    readonly numberOfItems: number;
    clear(): void;
    initialize(newItem: string): string;
    getItem(index: number): string;
    insertItemBefore(newItem: string, index: number): string;
    replaceItem(newItem: string, index: number): string;
    removeItem(index: number): string;
    appendItem(newItem: string): string;
    [index: number]: string;
}

declare var SVGStringList: {
    prototype: SVGStringList;
    new (): SVGStringList;
}

interface SVGUnitTypes {
    readonly SVG_UNIT_TYPE_UNKNOWN: number;
    readonly SVG_UNIT_TYPE_USERSPACEONUSE: number;
    readonly SVG_UNIT_TYPE_OBJECTBOUNDINGBOX: number;
}

declare var SVGUnitTypes: {
    prototype: SVGUnitTypes;
    new (): SVGUnitTypes;
    readonly SVG_UNIT_TYPE_UNKNOWN: number;
    readonly SVG_UNIT_TYPE_USERSPACEONUSE: number;
    readonly SVG_UNIT_TYPE_OBJECTBOUNDINGBOX: number;
}

interface SVGSVGElement extends SVGGraphicsElement, SVGFitToViewBox, SVGZoomAndPan, WindowEventHandlers {
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    readonly width: SVGAnimatedLength;
    readonly height: SVGAnimatedLength;
    currentScale: number;
    readonly currentTranslate: DOMPointReadOnly;
    getIntersectionList(rect: DOMRectReadOnly, referenceElement: SVGElement): NodeListOf<SVGCircleElement | SVGEllipseElement | SVGImageElement | SVGLineElement | SVGPathElement | SVGPolygonElement | SVGPolylineElement | SVGRectElement | SVGTextElement | SVGUseElement>;
    getEnclosureList(rect: DOMRectReadOnly, referenceElement: SVGElement): NodeListOf<SVGCircleElement | SVGEllipseElement | SVGImageElement | SVGLineElement | SVGPathElement | SVGPolygonElement | SVGPolylineElement | SVGRectElement | SVGTextElement | SVGUseElement>;
    checkIntersection(element: SVGElement, rect: DOMRectReadOnly): boolean;
    checkEnclosure(element: SVGElement, rect: DOMRectReadOnly): boolean;
    deselectAll(): void;
    createSVGNumber(): SVGNumber;
    createSVGLength(): SVGLength;
    createSVGAngle(): SVGAngle;
    createSVGPoint(): DOMPoint;
    createSVGMatrix(): DOMMatrix;
    createSVGRect(): DOMRect;
    createSVGTransform(): SVGTransform;
    createSVGTransformFromMatrix(matrix: DOMMatrixReadOnly): SVGTransform;
    getElementById(elementId: string): Element;
    suspendRedraw(maxWaitMilliseconds: number): number;
    unsuspendRedraw(suspendHandleID: number): void;
    unsuspendRedrawAll(): void;
    forceRedraw(): void;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGSVGElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGSVGElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof WindowEventHandlersEventMap>(type: K, listener: (this: SVGSVGElement, ev: WindowEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGSVGElement: {
    prototype: SVGSVGElement;
    new (): SVGSVGElement;
}

interface SVGGElement extends SVGGraphicsElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGGElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGGElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGGElement: {
    prototype: SVGGElement;
    new (): SVGGElement;
}

interface SVGUnknownElement extends SVGGraphicsElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGUnknownElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGUnknownElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGUnknownElement: {
    prototype: SVGUnknownElement;
    new (): SVGUnknownElement;
}

interface SVGDefsElement extends SVGGraphicsElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGDefsElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGDefsElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGDefsElement: {
    prototype: SVGDefsElement;
    new (): SVGDefsElement;
}

interface SVGDescElement extends SVGElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGDescElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGDescElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGDescElement: {
    prototype: SVGDescElement;
    new (): SVGDescElement;
}

interface SVGMetadataElement extends SVGElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGMetadataElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGMetadataElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGMetadataElement: {
    prototype: SVGMetadataElement;
    new (): SVGMetadataElement;
}

interface SVGTitleElement extends SVGElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGTitleElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGTitleElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGTitleElement: {
    prototype: SVGTitleElement;
    new (): SVGTitleElement;
}

interface SVGSymbolElement extends SVGGraphicsElement, SVGFitToViewBox {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGSymbolElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGSymbolElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGSymbolElement: {
    prototype: SVGSymbolElement;
    new (): SVGSymbolElement;
}

interface SVGUseElement extends SVGGraphicsElement, SVGURIReference {
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    readonly width: SVGAnimatedLength;
    readonly height: SVGAnimatedLength;
    readonly instanceRoot: SVGElement | null;
    readonly animatedInstanceRoot: SVGElement | null;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGUseElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGUseElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGUseElement: {
    prototype: SVGUseElement;
    new (): SVGUseElement;
}

interface SVGUseElementShadowRoot extends ShadowRoot {
}

declare var SVGUseElementShadowRoot: {
    prototype: SVGUseElementShadowRoot;
    new (): SVGUseElementShadowRoot;
}

interface ShadowAnimation extends Animation {
    readonly sourceAnimation: Animation;
    addEventListener<K extends keyof AnimationEventMap>(type: K, listener: (this: ShadowAnimation, ev: AnimationEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var ShadowAnimation: {
    prototype: ShadowAnimation;
    new (source: Animation, newTarget: Animatable): ShadowAnimation;
}

interface SVGSwitchElement extends SVGGraphicsElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGSwitchElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGSwitchElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGSwitchElement: {
    prototype: SVGSwitchElement;
    new (): SVGSwitchElement;
}

interface SVGStyleElement extends SVGElement, LinkStyle {
    type: string;
    media: string;
    title: string;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGStyleElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGStyleElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGStyleElement: {
    prototype: SVGStyleElement;
    new (): SVGStyleElement;
}

interface SVGTransform {
    readonly type: number;
    readonly matrix: DOMMatrix;
    readonly angle: number;
    setMatrix(matrix: DOMMatrixReadOnly): void;
    setTranslate(tx: number, ty: number): void;
    setScale(sx: number, sy: number): void;
    setRotate(angle: number, cx: number, cy: number): void;
    setSkewX(angle: number): void;
    setSkewY(angle: number): void;
    readonly SVG_TRANSFORM_UNKNOWN: number;
    readonly SVG_TRANSFORM_MATRIX: number;
    readonly SVG_TRANSFORM_TRANSLATE: number;
    readonly SVG_TRANSFORM_SCALE: number;
    readonly SVG_TRANSFORM_ROTATE: number;
    readonly SVG_TRANSFORM_SKEWX: number;
    readonly SVG_TRANSFORM_SKEWY: number;
}

declare var SVGTransform: {
    prototype: SVGTransform;
    new (): SVGTransform;
    readonly SVG_TRANSFORM_UNKNOWN: number;
    readonly SVG_TRANSFORM_MATRIX: number;
    readonly SVG_TRANSFORM_TRANSLATE: number;
    readonly SVG_TRANSFORM_SCALE: number;
    readonly SVG_TRANSFORM_ROTATE: number;
    readonly SVG_TRANSFORM_SKEWX: number;
    readonly SVG_TRANSFORM_SKEWY: number;
}

interface SVGTransformList {
    readonly length: number;
    readonly numberOfItems: number;
    clear(): void;
    initialize(newItem: SVGTransform): SVGTransform;
    getItem(index: number): SVGTransform;
    insertItemBefore(newItem: SVGTransform, index: number): SVGTransform;
    replaceItem(newItem: SVGTransform, index: number): SVGTransform;
    removeItem(index: number): SVGTransform;
    appendItem(newItem: SVGTransform): SVGTransform;
    createSVGTransformFromMatrix(matrix: DOMMatrixReadOnly): SVGTransform;
    consolidate(): SVGTransform | null;
    [index: number]: SVGTransform;
}

declare var SVGTransformList: {
    prototype: SVGTransformList;
    new (): SVGTransformList;
}

interface SVGAnimatedTransformList {
    readonly baseVal: SVGTransformList;
    readonly animVal: SVGTransformList;
}

declare var SVGAnimatedTransformList: {
    prototype: SVGAnimatedTransformList;
    new (): SVGAnimatedTransformList;
}

interface SVGPreserveAspectRatio {
    align: number;
    meetOrSlice: number;
    readonly SVG_PRESERVEASPECTRATIO_UNKNOWN: number;
    readonly SVG_PRESERVEASPECTRATIO_NONE: number;
    readonly SVG_PRESERVEASPECTRATIO_XMINYMIN: number;
    readonly SVG_PRESERVEASPECTRATIO_XMIDYMIN: number;
    readonly SVG_PRESERVEASPECTRATIO_XMAXYMIN: number;
    readonly SVG_PRESERVEASPECTRATIO_XMINYMID: number;
    readonly SVG_PRESERVEASPECTRATIO_XMIDYMID: number;
    readonly SVG_PRESERVEASPECTRATIO_XMAXYMID: number;
    readonly SVG_PRESERVEASPECTRATIO_XMINYMAX: number;
    readonly SVG_PRESERVEASPECTRATIO_XMIDYMAX: number;
    readonly SVG_PRESERVEASPECTRATIO_XMAXYMAX: number;
    readonly SVG_MEETORSLICE_UNKNOWN: number;
    readonly SVG_MEETORSLICE_MEET: number;
    readonly SVG_MEETORSLICE_SLICE: number;
}

declare var SVGPreserveAspectRatio: {
    prototype: SVGPreserveAspectRatio;
    new (): SVGPreserveAspectRatio;
    readonly SVG_PRESERVEASPECTRATIO_UNKNOWN: number;
    readonly SVG_PRESERVEASPECTRATIO_NONE: number;
    readonly SVG_PRESERVEASPECTRATIO_XMINYMIN: number;
    readonly SVG_PRESERVEASPECTRATIO_XMIDYMIN: number;
    readonly SVG_PRESERVEASPECTRATIO_XMAXYMIN: number;
    readonly SVG_PRESERVEASPECTRATIO_XMINYMID: number;
    readonly SVG_PRESERVEASPECTRATIO_XMIDYMID: number;
    readonly SVG_PRESERVEASPECTRATIO_XMAXYMID: number;
    readonly SVG_PRESERVEASPECTRATIO_XMINYMAX: number;
    readonly SVG_PRESERVEASPECTRATIO_XMIDYMAX: number;
    readonly SVG_PRESERVEASPECTRATIO_XMAXYMAX: number;
    readonly SVG_MEETORSLICE_UNKNOWN: number;
    readonly SVG_MEETORSLICE_MEET: number;
    readonly SVG_MEETORSLICE_SLICE: number;
}

interface SVGAnimatedPreserveAspectRatio {
    readonly baseVal: SVGPreserveAspectRatio;
    readonly animVal: SVGPreserveAspectRatio;
}

declare var SVGAnimatedPreserveAspectRatio: {
    prototype: SVGAnimatedPreserveAspectRatio;
    new (): SVGAnimatedPreserveAspectRatio;
}

interface SVGPathElement extends SVGGeometryElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGPathElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGPathElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGPathElement: {
    prototype: SVGPathElement;
    new (): SVGPathElement;
}

interface SVGRectElement extends SVGGeometryElement {
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    readonly width: SVGAnimatedLength;
    readonly height: SVGAnimatedLength;
    readonly rx: SVGAnimatedLength;
    readonly ry: SVGAnimatedLength;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGRectElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGRectElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGRectElement: {
    prototype: SVGRectElement;
    new (): SVGRectElement;
}

interface SVGCircleElement extends SVGGeometryElement {
    readonly cx: SVGAnimatedLength;
    readonly cy: SVGAnimatedLength;
    readonly r: SVGAnimatedLength;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGCircleElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGCircleElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGCircleElement: {
    prototype: SVGCircleElement;
    new (): SVGCircleElement;
}

interface SVGEllipseElement extends SVGGeometryElement {
    readonly cx: SVGAnimatedLength;
    readonly cy: SVGAnimatedLength;
    readonly rx: SVGAnimatedLength;
    readonly ry: SVGAnimatedLength;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGEllipseElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGEllipseElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGEllipseElement: {
    prototype: SVGEllipseElement;
    new (): SVGEllipseElement;
}

interface SVGLineElement extends SVGGeometryElement {
    readonly x1: SVGAnimatedLength;
    readonly y1: SVGAnimatedLength;
    readonly x2: SVGAnimatedLength;
    readonly y2: SVGAnimatedLength;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGLineElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGLineElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGLineElement: {
    prototype: SVGLineElement;
    new (): SVGLineElement;
}

interface SVGMeshElement extends SVGGeometryElement, SVGURIReference {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGMeshElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGMeshElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGMeshElement: {
    prototype: SVGMeshElement;
    new (): SVGMeshElement;
}

interface SVGPointList {
    readonly length: number;
    readonly numberOfItems: number;
    clear(): void;
    initialize(newItem: DOMPoint): DOMPoint;
    getItem(index: number): DOMPoint;
    insertItemBefore(newItem: DOMPoint, index: number): DOMPoint;
    replaceItem(newItem: DOMPoint, index: number): DOMPoint;
    removeItem(index: number): DOMPoint;
    appendItem(newItem: DOMPoint): DOMPoint;
    [index: number]: DOMPoint;
}

declare var SVGPointList: {
    prototype: SVGPointList;
    new (): SVGPointList;
}

interface SVGPolylineElement extends SVGGeometryElement, SVGAnimatedPoints {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGPolylineElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGPolylineElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGPolylineElement: {
    prototype: SVGPolylineElement;
    new (): SVGPolylineElement;
}

interface SVGPolygonElement extends SVGGeometryElement, SVGAnimatedPoints {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGPolygonElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGPolygonElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGPolygonElement: {
    prototype: SVGPolygonElement;
    new (): SVGPolygonElement;
}

interface SVGTextContentElement extends SVGGraphicsElement {
    readonly textLength: SVGAnimatedLength;
    readonly lengthAdjust: SVGAnimatedEnumeration;
    getNumberOfChars(): number;
    getComputedTextLength(): number;
    getSubStringLength(charnum: number, nchars: number): number;
    getStartPositionOfChar(charnum: number): DOMPoint;
    getEndPositionOfChar(charnum: number): DOMPoint;
    getExtentOfChar(charnum: number): DOMRect;
    getRotationOfChar(charnum: number): number;
    getCharNumAtPosition(point: DOMPoint): number;
    selectSubString(charnum: number, nchars: number): void;
    readonly LENGTHADJUST_UNKNOWN: number;
    readonly LENGTHADJUST_SPACING: number;
    readonly LENGTHADJUST_SPACINGANDGLYPHS: number;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGTextContentElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGTextContentElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGTextContentElement: {
    prototype: SVGTextContentElement;
    new (): SVGTextContentElement;
    readonly LENGTHADJUST_UNKNOWN: number;
    readonly LENGTHADJUST_SPACING: number;
    readonly LENGTHADJUST_SPACINGANDGLYPHS: number;
}

interface SVGTextPositioningElement extends SVGTextContentElement {
    readonly x: SVGAnimatedLengthList;
    readonly y: SVGAnimatedLengthList;
    readonly dx: SVGAnimatedLengthList;
    readonly dy: SVGAnimatedLengthList;
    readonly rotate: SVGAnimatedNumberList;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGTextPositioningElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGTextPositioningElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGTextPositioningElement: {
    prototype: SVGTextPositioningElement;
    new (): SVGTextPositioningElement;
}

interface SVGTextElement extends SVGTextPositioningElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGTextElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGTextElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGTextElement: {
    prototype: SVGTextElement;
    new (): SVGTextElement;
}

interface SVGTSpanElement extends SVGTextPositioningElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGTSpanElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGTSpanElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGTSpanElement: {
    prototype: SVGTSpanElement;
    new (): SVGTSpanElement;
}

interface SVGTextPathElement extends SVGTextContentElement, SVGURIReference {
    readonly startOffset: SVGAnimatedLength;
    readonly method: SVGAnimatedEnumeration;
    readonly spacing: SVGAnimatedEnumeration;
    readonly TEXTPATH_METHODTYPE_UNKNOWN: number;
    readonly TEXTPATH_METHODTYPE_ALIGN: number;
    readonly TEXTPATH_METHODTYPE_STRETCH: number;
    readonly TEXTPATH_SPACINGTYPE_UNKNOWN: number;
    readonly TEXTPATH_SPACINGTYPE_AUTO: number;
    readonly TEXTPATH_SPACINGTYPE_EXACT: number;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGTextPathElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGTextPathElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGTextPathElement: {
    prototype: SVGTextPathElement;
    new (): SVGTextPathElement;
    readonly TEXTPATH_METHODTYPE_UNKNOWN: number;
    readonly TEXTPATH_METHODTYPE_ALIGN: number;
    readonly TEXTPATH_METHODTYPE_STRETCH: number;
    readonly TEXTPATH_SPACINGTYPE_UNKNOWN: number;
    readonly TEXTPATH_SPACINGTYPE_AUTO: number;
    readonly TEXTPATH_SPACINGTYPE_EXACT: number;
}

interface SVGImageElement extends SVGGraphicsElement, SVGURIReference {
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    readonly width: SVGAnimatedLength;
    readonly height: SVGAnimatedLength;
    readonly preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
    crossOrigin: string | null;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGImageElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGImageElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGImageElement: {
    prototype: SVGImageElement;
    new (): SVGImageElement;
}

interface SVGForeignObjectElement extends SVGGraphicsElement {
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    readonly width: SVGAnimatedLength;
    readonly height: SVGAnimatedLength;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGForeignObjectElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGForeignObjectElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGForeignObjectElement: {
    prototype: SVGForeignObjectElement;
    new (): SVGForeignObjectElement;
}

interface SVGMarkerElement extends SVGElement, SVGFitToViewBox {
    readonly refX: SVGAnimatedLength;
    readonly refY: SVGAnimatedLength;
    readonly markerUnits: SVGAnimatedEnumeration;
    readonly markerWidth: SVGAnimatedLength;
    readonly markerHeight: SVGAnimatedLength;
    readonly orientType: SVGAnimatedEnumeration;
    readonly orientAngle: SVGAnimatedAngle;
    orient: string;
    setOrientToAuto(): void;
    setOrientToAngle(angle: SVGAngle): void;
    readonly SVG_MARKERUNITS_UNKNOWN: number;
    readonly SVG_MARKERUNITS_USERSPACEONUSE: number;
    readonly SVG_MARKERUNITS_STROKEWIDTH: number;
    readonly SVG_MARKER_ORIENT_UNKNOWN: number;
    readonly SVG_MARKER_ORIENT_AUTO: number;
    readonly SVG_MARKER_ORIENT_ANGLE: number;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGMarkerElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGMarkerElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGMarkerElement: {
    prototype: SVGMarkerElement;
    new (): SVGMarkerElement;
    readonly SVG_MARKERUNITS_UNKNOWN: number;
    readonly SVG_MARKERUNITS_USERSPACEONUSE: number;
    readonly SVG_MARKERUNITS_STROKEWIDTH: number;
    readonly SVG_MARKER_ORIENT_UNKNOWN: number;
    readonly SVG_MARKER_ORIENT_AUTO: number;
    readonly SVG_MARKER_ORIENT_ANGLE: number;
}

interface SVGSolidcolorElement extends SVGElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGSolidcolorElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGSolidcolorElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGSolidcolorElement: {
    prototype: SVGSolidcolorElement;
    new (): SVGSolidcolorElement;
}

interface SVGGradientElement extends SVGElement, SVGURIReference {
    readonly gradientUnits: SVGAnimatedEnumeration;
    readonly gradientTransform: SVGAnimatedTransformList;
    readonly spreadMethod: SVGAnimatedEnumeration;
    readonly SVG_SPREADMETHOD_UNKNOWN: number;
    readonly SVG_SPREADMETHOD_PAD: number;
    readonly SVG_SPREADMETHOD_REFLECT: number;
    readonly SVG_SPREADMETHOD_REPEAT: number;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGGradientElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGGradientElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGGradientElement: {
    prototype: SVGGradientElement;
    new (): SVGGradientElement;
    readonly SVG_SPREADMETHOD_UNKNOWN: number;
    readonly SVG_SPREADMETHOD_PAD: number;
    readonly SVG_SPREADMETHOD_REFLECT: number;
    readonly SVG_SPREADMETHOD_REPEAT: number;
}

interface SVGLinearGradientElement extends SVGGradientElement {
    readonly x1: SVGAnimatedLength;
    readonly y1: SVGAnimatedLength;
    readonly x2: SVGAnimatedLength;
    readonly y2: SVGAnimatedLength;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGLinearGradientElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGLinearGradientElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGLinearGradientElement: {
    prototype: SVGLinearGradientElement;
    new (): SVGLinearGradientElement;
}

interface SVGRadialGradientElement extends SVGGradientElement {
    readonly cx: SVGAnimatedLength;
    readonly cy: SVGAnimatedLength;
    readonly r: SVGAnimatedLength;
    readonly fx: SVGAnimatedLength;
    readonly fy: SVGAnimatedLength;
    readonly fr: SVGAnimatedLength;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGRadialGradientElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGRadialGradientElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGRadialGradientElement: {
    prototype: SVGRadialGradientElement;
    new (): SVGRadialGradientElement;
}

interface SVGMeshGradientElement extends SVGGradientElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGMeshGradientElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGMeshGradientElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGMeshGradientElement: {
    prototype: SVGMeshGradientElement;
    new (): SVGMeshGradientElement;
}

interface SVGMeshrowElement extends SVGElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGMeshrowElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGMeshrowElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGMeshrowElement: {
    prototype: SVGMeshrowElement;
    new (): SVGMeshrowElement;
}

interface SVGMeshpatchElement extends SVGElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGMeshpatchElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGMeshpatchElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGMeshpatchElement: {
    prototype: SVGMeshpatchElement;
    new (): SVGMeshpatchElement;
}

interface SVGStopElement extends SVGElement {
    readonly offset: SVGAnimatedNumber;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGStopElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGStopElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGStopElement: {
    prototype: SVGStopElement;
    new (): SVGStopElement;
}

interface SVGPatternElement extends SVGElement, SVGFitToViewBox, SVGURIReference {
    readonly patternUnits: SVGAnimatedEnumeration;
    readonly patternContentUnits: SVGAnimatedEnumeration;
    readonly patternTransform: SVGAnimatedTransformList;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    readonly width: SVGAnimatedLength;
    readonly height: SVGAnimatedLength;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGPatternElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGPatternElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGPatternElement: {
    prototype: SVGPatternElement;
    new (): SVGPatternElement;
}

interface SVGHatchElement extends SVGElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGHatchElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGHatchElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGHatchElement: {
    prototype: SVGHatchElement;
    new (): SVGHatchElement;
}

interface SVGHatchpathElement extends SVGElement {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGHatchpathElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGHatchpathElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGHatchpathElement: {
    prototype: SVGHatchpathElement;
    new (): SVGHatchpathElement;
}

interface SVGCursorElement extends SVGElement, SVGURIReference {
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGCursorElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGCursorElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGCursorElement: {
    prototype: SVGCursorElement;
    new (): SVGCursorElement;
}

interface SVGScriptElement extends SVGElement, SVGURIReference {
    type: string;
    crossOrigin: string | null;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGScriptElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGScriptElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGScriptElement: {
    prototype: SVGScriptElement;
    new (): SVGScriptElement;
}

interface SVGAElement extends SVGGraphicsElement, SVGURIReference, HTMLHyperlinkElementUtils {
    readonly target: SVGAnimatedString;
    readonly download: SVGAnimatedString;
    readonly rel: SVGAnimatedString;
    readonly relList: SVGAnimatedString;
    readonly hreflang: SVGAnimatedString;
    readonly type: SVGAnimatedString;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGAElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGAElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGAElement: {
    prototype: SVGAElement;
    new (): SVGAElement;
}

interface SVGViewElement extends SVGElement, SVGFitToViewBox, SVGZoomAndPan {
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: SVGViewElement, ev: ElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: SVGViewElement, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SVGViewElement: {
    prototype: SVGViewElement;
    new (): SVGViewElement;
}

interface Touch {
    readonly identifier: number;
    readonly target: EventTarget;
    readonly screenX: number;
    readonly screenY: number;
    readonly clientX: number;
    readonly clientY: number;
    readonly pageX: number;
    readonly pageY: number;
    readonly radiusX: number;
    readonly radiusY: number;
    readonly rotationAngle: number;
    readonly force: number;
}

declare var Touch: {
    prototype: Touch;
    new (touchInitDict: TouchInit): Touch;
}

interface TouchList {
    readonly length: number;
    item(index: number): Touch | null;
    [index: number]: Touch;
}

declare var TouchList: {
    prototype: TouchList;
    new (): TouchList;
}

interface TouchEvent extends UIEvent {
    readonly touches: TouchList;
    readonly targetTouches: TouchList;
    readonly changedTouches: TouchList;
    readonly altKey: boolean;
    readonly metaKey: boolean;
    readonly ctrlKey: boolean;
    readonly shiftKey: boolean;
}

declare var TouchEvent: {
    prototype: TouchEvent;
    new (type: string, eventInitDict?: TouchEventInit): TouchEvent;
}

interface UIEvent extends Event {
    readonly view: Window | null;
    readonly detail: number;
}

declare var UIEvent: {
    prototype: UIEvent;
    new (type: string, eventInitDict?: UIEventInit): UIEvent;
}

interface FocusEvent extends UIEvent {
    readonly relatedTarget: EventTarget | null;
}

declare var FocusEvent: {
    prototype: FocusEvent;
    new (type: string, eventInitDict?: FocusEventInit): FocusEvent;
}

interface MouseEvent extends UIEvent {
    readonly screenX: number;
    readonly screenY: number;
    readonly clientX: number;
    readonly clientY: number;
    readonly ctrlKey: boolean;
    readonly shiftKey: boolean;
    readonly altKey: boolean;
    readonly metaKey: boolean;
    readonly button: number;
    readonly buttons: number;
    readonly relatedTarget: EventTarget | null;
    readonly pageX: number;
    readonly pageY: number;
    readonly x: number;
    readonly y: number;
    readonly offsetX: number;
    readonly offsetY: number;
    getModifierState(keyArg: string): boolean;
}

declare var MouseEvent: {
    prototype: MouseEvent;
    new (type: string, eventInitDict?: MouseEventInit): MouseEvent;
}

interface WheelEvent extends MouseEvent {
    readonly deltaX: number;
    readonly deltaY: number;
    readonly deltaZ: number;
    readonly deltaMode: number;
    readonly DOM_DELTA_PIXEL: number;
    readonly DOM_DELTA_LINE: number;
    readonly DOM_DELTA_PAGE: number;
}

declare var WheelEvent: {
    prototype: WheelEvent;
    new (type: string, eventInitDict?: WheelEventInit): WheelEvent;
    readonly DOM_DELTA_PIXEL: number;
    readonly DOM_DELTA_LINE: number;
    readonly DOM_DELTA_PAGE: number;
}

interface InputEvent extends UIEvent {
    readonly data: string | null;
    readonly isComposing: boolean;
}

declare var InputEvent: {
    prototype: InputEvent;
    new (type: string, eventInitDict?: InputEventInit): InputEvent;
}

interface KeyboardEvent extends UIEvent {
    readonly key: string;
    readonly code: string;
    readonly location: number;
    readonly ctrlKey: boolean;
    readonly shiftKey: boolean;
    readonly altKey: boolean;
    readonly metaKey: boolean;
    readonly repeat: boolean;
    readonly isComposing: boolean;
    getModifierState(keyArg: string): boolean;
    readonly DOM_KEY_LOCATION_STANDARD: number;
    readonly DOM_KEY_LOCATION_LEFT: number;
    readonly DOM_KEY_LOCATION_RIGHT: number;
    readonly DOM_KEY_LOCATION_NUMPAD: number;
}

declare var KeyboardEvent: {
    prototype: KeyboardEvent;
    new (type: string, eventInitDict?: KeyboardEventInit): KeyboardEvent;
    readonly DOM_KEY_LOCATION_STANDARD: number;
    readonly DOM_KEY_LOCATION_LEFT: number;
    readonly DOM_KEY_LOCATION_RIGHT: number;
    readonly DOM_KEY_LOCATION_NUMPAD: number;
}

interface CompositionEvent extends UIEvent {
    readonly data: string;
}

declare var CompositionEvent: {
    prototype: CompositionEvent;
    new (type: string, eventInitDict?: CompositionEventInit): CompositionEvent;
}

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
    new (url: string, base?: string): URL;
    createObjectURL(blob: Blob): string;
    createFor(blob: Blob): string;
    revokeObjectURL(url: string): void;
    createObjectURL(mediaSource: MediaSource): string;
}

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
    new (init?: any): URLSearchParams;
}

interface PerformanceMark extends PerformanceEntry {
}

declare var PerformanceMark: {
    prototype: PerformanceMark;
    new (): PerformanceMark;
}

interface PerformanceMeasure extends PerformanceEntry {
}

declare var PerformanceMeasure: {
    prototype: PerformanceMeasure;
    new (): PerformanceMeasure;
}

interface AnimationTimeline {
    readonly currentTime: number | null;
}

declare var AnimationTimeline: {
    prototype: AnimationTimeline;
    new (): AnimationTimeline;
}

interface DocumentTimeline extends AnimationTimeline {
}

declare var DocumentTimeline: {
    prototype: DocumentTimeline;
    new (options?: DocumentTimelineOptions): DocumentTimeline;
}

interface AnimationEventMap {
    "finish": Event;
    "cancel": Event;
}

interface Animation extends EventTarget {
    id: string;
    effect: AnimationEffectReadOnly | null;
    timeline: AnimationTimeline | null;
    startTime: number | null;
    currentTime: number | null;
    playbackRate: number;
    readonly playState: AnimationPlayState;
    readonly ready: Promise<Animation>;
    readonly finished: Promise<Animation>;
    onfinish: (this: Animation, ev: Event) => any;
    oncancel: (this: Animation, ev: Event) => any;
    cancel(): void;
    finish(): void;
    play(): void;
    pause(): void;
    reverse(): void;
    addEventListener<K extends keyof AnimationEventMap>(type: K, listener: (this: Animation, ev: AnimationEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var Animation: {
    prototype: Animation;
    new (effect?: AnimationEffectReadOnly, timeline?: AnimationTimeline): Animation;
}

interface AnimationEffectReadOnly {
    readonly timing: AnimationEffectTimingReadOnly;
    getComputedTiming(): ComputedTimingProperties;
}

declare var AnimationEffectReadOnly: {
    prototype: AnimationEffectReadOnly;
    new (): AnimationEffectReadOnly;
}

interface AnimationEffectTimingReadOnly {
    readonly delay: number;
    readonly endDelay: number;
    readonly fill: FillMode;
    readonly iterationStart: number;
    readonly iterations: number;
    readonly duration: number | string;
    readonly direction: PlaybackDirection;
    readonly easing: string;
}

declare var AnimationEffectTimingReadOnly: {
    prototype: AnimationEffectTimingReadOnly;
    new (): AnimationEffectTimingReadOnly;
}

interface AnimationEffectTiming extends AnimationEffectTimingReadOnly {
    delay: number;
    endDelay: number;
    fill: FillMode;
    iterationStart: number;
    iterations: number;
    duration: number | string;
    direction: PlaybackDirection;
    easing: string;
}

declare var AnimationEffectTiming: {
    prototype: AnimationEffectTiming;
    new (): AnimationEffectTiming;
}

interface KeyframeEffectReadOnly extends AnimationEffectReadOnly {
    readonly target: Animatable | null;
    readonly iterationComposite: IterationCompositeOperation;
    readonly composite: CompositeOperation;
    readonly spacing: string;
    getKeyframes(): any[];
}

declare var KeyframeEffectReadOnly: {
    prototype: KeyframeEffectReadOnly;
    new (target: Animatable | null, keyframes: any, options?: number | KeyframeEffectOptions): KeyframeEffectReadOnly;
    new (source: KeyframeEffectReadOnly): KeyframeEffectReadOnly;
}

interface KeyframeEffect extends KeyframeEffectReadOnly {
    target: Animatable | null;
    iterationComposite: IterationCompositeOperation;
    composite: CompositeOperation;
    spacing: string;
    setKeyframes(keyframes: any): void;
}

declare var KeyframeEffect: {
    prototype: KeyframeEffect;
    new (target: Animatable | null, keyframes: any, options?: number | KeyframeEffectOptions): KeyframeEffect;
    new (source: KeyframeEffectReadOnly): KeyframeEffect;
}

interface SharedKeyframeList {
}

declare var SharedKeyframeList: {
    prototype: SharedKeyframeList;
    new (keyframes: any): SharedKeyframeList;
}

interface AnimationPlaybackEvent extends Event {
    readonly currentTime: number | null;
    readonly timelineTime: number | null;
}

declare var AnimationPlaybackEvent: {
    prototype: AnimationPlaybackEvent;
    new (type: string, eventInitDict?: AnimationPlaybackEventInit): AnimationPlaybackEvent;
}

interface BaseAudioContextEventMap {
    "statechange": Event;
}

interface BaseAudioContext extends EventTarget {
    readonly destination: AudioDestinationNode;
    readonly sampleRate: number;
    readonly currentTime: number;
    readonly listener: AudioListener;
    readonly state: AudioContextState;
    onstatechange: (this: BaseAudioContext, ev: Event) => any;
    resume(): Promise<void>;
    createBuffer(numberOfChannels: number, length: number, sampleRate: number): AudioBuffer;
    decodeAudioData(audioData: ArrayBuffer, successCallback?: DecodeSuccessCallback, errorCallback?: DecodeErrorCallback): Promise<AudioBuffer>;
    createBufferSource(): AudioBufferSourceNode;
    createConstantSource(): ConstantSourceNode;
    createScriptProcessor(bufferSize?: number, numberOfInputChannels?: number, numberOfOutputChannels?: number): ScriptProcessorNode;
    createAnalyser(): AnalyserNode;
    createGain(): GainNode;
    createDelay(maxDelayTime?: number): DelayNode;
    createBiquadFilter(): BiquadFilterNode;
    createIIRFilter(feedforward: number[], feedback: number[]): IIRFilterNode;
    createWaveShaper(): WaveShaperNode;
    createPanner(): PannerNode;
    createStereoPanner(): StereoPannerNode;
    createConvolver(): ConvolverNode;
    createChannelSplitter(numberOfOutputs?: number): ChannelSplitterNode;
    createChannelMerger(numberOfInputs?: number): ChannelMergerNode;
    createDynamicsCompressor(): DynamicsCompressorNode;
    createOscillator(): OscillatorNode;
    createPeriodicWave(real: Float32Array, imag: Float32Array, constraints?: PeriodicWaveConstraints): PeriodicWave;
    addEventListener<K extends keyof BaseAudioContextEventMap>(type: K, listener: (this: BaseAudioContext, ev: BaseAudioContextEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var BaseAudioContext: {
    prototype: BaseAudioContext;
    new (): BaseAudioContext;
}

interface AudioContextBase extends BaseAudioContext {
    readonly baseLatency: number;
    readonly outputLatency: number;
    getOutputTimestamp(): AudioTimestamp;
    close(): Promise<void>;
    createMediaElementSource(mediaElement: HTMLMediaElement): MediaElementAudioSourceNode;
    createMediaStreamSource(mediaStream: MediaStream): MediaStreamAudioSourceNode;
    createMediaStreamTrackSource(mediaStreamTrack: any): MediaStreamTrackAudioSourceNode;
    createMediaStreamDestination(): MediaStreamAudioDestinationNode;
    addEventListener<K extends keyof BaseAudioContextEventMap>(type: K, listener: (this: AudioContext, ev: BaseAudioContextEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

interface AudioContext extends AudioContextBase {
    suspend(): Promise<void>;
}

declare var AudioContext: {
    prototype: AudioContext;
    new (contextOptions?: AudioContextOptions): AudioContext;
    new (): AudioContext;
}

interface OfflineAudioContextEventMap extends BaseAudioContextEventMap {
    "complete": Event;
}

interface OfflineAudioContext extends BaseAudioContext {
    readonly length: number;
    oncomplete: (this: OfflineAudioContext, ev: Event) => any;
    startRendering(): Promise<AudioBuffer>;
    suspend(suspendTime: number): Promise<void>;
    addEventListener<K extends keyof OfflineAudioContextEventMap>(type: K, listener: (this: OfflineAudioContext, ev: OfflineAudioContextEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var OfflineAudioContext: {
    prototype: OfflineAudioContext;
    new (numberOfChannels: number, length: number, sampleRate: number): OfflineAudioContext;
}

interface OfflineAudioCompletionEvent extends Event {
    readonly renderedBuffer: AudioBuffer;
}

declare var OfflineAudioCompletionEvent: {
    prototype: OfflineAudioCompletionEvent;
    new (type: string, eventInitDict: OfflineAudioCompletionEventInit): OfflineAudioCompletionEvent;
}

interface AudioNode extends EventTarget {
    readonly context: BaseAudioContext;
    readonly numberOfInputs: number;
    readonly numberOfOutputs: number;
    channelCount: number;
    channelCountMode: ChannelCountMode;
    channelInterpretation: ChannelInterpretation;
    connect(destination: AudioNode, output?: number, input?: number): AudioNode;
    connect(destination: AudioParam, output?: number): void;
    connect(destination: AudioNode, output?: number, input?: number): AudioNode;
    connect(destination: AudioParam, output?: number): void;
    disconnect(output?: number): void;
    disconnect(destination: AudioNode, output?: number, input?: number): void;
    disconnect(destination: AudioParam, output?: number): void;
    disconnect(output?: number): void;
    disconnect(destination: AudioNode, output?: number, input?: number): void;
    disconnect(destination: AudioParam, output?: number): void;
    disconnect(output?: number): void;
    disconnect(destination: AudioNode, output?: number, input?: number): void;
    disconnect(destination: AudioParam, output?: number): void;
    disconnect(output?: number): void;
    disconnect(destination: AudioNode, output?: number, input?: number): void;
    disconnect(destination: AudioParam, output?: number): void;
    disconnect(output?: number): void;
    disconnect(destination: AudioNode, output?: number, input?: number): void;
    disconnect(destination: AudioParam, output?: number): void;
    disconnect(output?: number): void;
    disconnect(destination: AudioNode, output?: number, input?: number): void;
    disconnect(destination: AudioParam, output?: number): void;
    disconnect(output?: number): void;
    disconnect(destination: AudioNode, output?: number, input?: number): void;
    disconnect(destination: AudioParam, output?: number): void;
}

declare var AudioNode: {
    prototype: AudioNode;
    new (): AudioNode;
}

interface AudioDestinationNode extends AudioNode {
    readonly maxChannelCount: number;
}

declare var AudioDestinationNode: {
    prototype: AudioDestinationNode;
    new (): AudioDestinationNode;
}

interface AudioParam {
    value: number;
    readonly defaultValue: number;
    readonly minValue: number;
    readonly maxValue: number;
    setValueAtTime(value: number, startTime: number): AudioParam;
    linearRampToValueAtTime(value: number, endTime: number): AudioParam;
    exponentialRampToValueAtTime(value: number, endTime: number): AudioParam;
    setTargetAtTime(target: number, startTime: number, timeConstant: number): AudioParam;
    setValueCurveAtTime(values: Float32Array, startTime: number, duration: number): AudioParam;
    cancelScheduledValues(cancelTime: number): AudioParam;
    cancelAndHoldAtTime(cancelTime: number): AudioParam;
}

declare var AudioParam: {
    prototype: AudioParam;
    new (): AudioParam;
}

interface AudioScheduledSourceNodeEventMap {
    "ended": Event;
}

interface AudioScheduledSourceNode extends AudioNode {
    onended: (this: AudioScheduledSourceNode, ev: Event) => any;
    start(when?: number): void;
    stop(when?: number): void;
    addEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: AudioScheduledSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var AudioScheduledSourceNode: {
    prototype: AudioScheduledSourceNode;
    new (): AudioScheduledSourceNode;
}

interface GainNode extends AudioNode {
    readonly gain: AudioParam;
}

declare var GainNode: {
    prototype: GainNode;
    new (context: BaseAudioContext, options?: GainOptions): GainNode;
}

interface DelayNode extends AudioNode {
    readonly delayTime: AudioParam;
}

declare var DelayNode: {
    prototype: DelayNode;
    new (context: BaseAudioContext, options?: DelayOptions): DelayNode;
}

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
    new (options: AudioBufferOptions): AudioBuffer;
}

interface AudioBufferSourceNode extends AudioScheduledSourceNode {
    buffer: AudioBuffer | null;
    readonly playbackRate: AudioParam;
    readonly detune: AudioParam;
    loop: boolean;
    loopStart: number;
    loopEnd: number;
    start(when?: number, offset?: number, duration?: number): void;
    addEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: AudioBufferSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var AudioBufferSourceNode: {
    prototype: AudioBufferSourceNode;
    new (context: BaseAudioContext, options?: AudioBufferSourceOptions): AudioBufferSourceNode;
}

interface ConstantSourceNode extends AudioScheduledSourceNode {
    readonly offset: AudioParam;
    addEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: ConstantSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var ConstantSourceNode: {
    prototype: ConstantSourceNode;
    new (context: BaseAudioContext, options?: ConstantSourceOptions): ConstantSourceNode;
}

interface MediaElementAudioSourceNode extends AudioNode {
}

declare var MediaElementAudioSourceNode: {
    prototype: MediaElementAudioSourceNode;
    new (context: BaseAudioContext, options: MediaElementAudioSourceOptions): MediaElementAudioSourceNode;
}

interface AudioWorkletGlobalScope extends WorkletGlobalScope {
    registerProcessor(name: string, processorCtor: VoidFunction): void;
}

declare var AudioWorkletGlobalScope: {
    prototype: AudioWorkletGlobalScope;
    new (): AudioWorkletGlobalScope;
}

interface AudioParamMap {
}

declare var AudioParamMap: {
    prototype: AudioParamMap;
    new (): AudioParamMap;
}

interface AudioWorkletNodeEventMap {
    "data": Event;
}

interface AudioWorkletNode extends AudioNode {
    readonly parameters: AudioParamMap;
    ondata: (this: AudioWorkletNode, ev: Event) => any;
    sendData(data: any): void;
    addEventListener<K extends keyof AudioWorkletNodeEventMap>(type: K, listener: (this: AudioWorkletNode, ev: AudioWorkletNodeEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var AudioWorkletNode: {
    prototype: AudioWorkletNode;
    new (context: BaseAudioContext, options?: any): AudioWorkletNode;
}

interface AudioWorkletProcessorEventMap {
    "data": Event;
}

interface AudioWorkletProcessor extends EventTarget {
    readonly contextInfo: AudioContextInfo;
    ondata: (this: AudioWorkletProcessor, ev: Event) => any;
    sendData(data: any): void;
    addEventListener<K extends keyof AudioWorkletProcessorEventMap>(type: K, listener: (this: AudioWorkletProcessor, ev: AudioWorkletProcessorEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var AudioWorkletProcessor: {
    prototype: AudioWorkletProcessor;
    new (): AudioWorkletProcessor;
}

interface ScriptProcessorNodeEventMap {
    "audioprocess": Event;
}

interface ScriptProcessorNode extends AudioNode {
    onaudioprocess: (this: ScriptProcessorNode, ev: Event) => any;
    readonly bufferSize: number;
    addEventListener<K extends keyof ScriptProcessorNodeEventMap>(type: K, listener: (this: ScriptProcessorNode, ev: ScriptProcessorNodeEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var ScriptProcessorNode: {
    prototype: ScriptProcessorNode;
    new (): ScriptProcessorNode;
}

interface AudioProcessingEvent extends Event {
    readonly playbackTime: number;
    readonly inputBuffer: AudioBuffer;
    readonly outputBuffer: AudioBuffer;
}

declare var AudioProcessingEvent: {
    prototype: AudioProcessingEvent;
    new (type: string, eventInitDict: AudioProcessingEventInit): AudioProcessingEvent;
}

interface PannerNode extends AudioNode {
    panningModel: PanningModelType;
    readonly positionX: AudioParam;
    readonly positionY: AudioParam;
    readonly positionZ: AudioParam;
    readonly orientationX: AudioParam;
    readonly orientationY: AudioParam;
    readonly orientationZ: AudioParam;
    distanceModel: DistanceModelType;
    refDistance: number;
    maxDistance: number;
    rolloffFactor: number;
    coneInnerAngle: number;
    coneOuterAngle: number;
    coneOuterGain: number;
    setPosition(x: number, y: number, z: number): void;
    setOrientation(x: number, y: number, z: number): void;
}

declare var PannerNode: {
    prototype: PannerNode;
    new (context: BaseAudioContext, options?: PannerOptions): PannerNode;
}

interface AudioListener {
    readonly positionX: AudioParam;
    readonly positionY: AudioParam;
    readonly positionZ: AudioParam;
    readonly forwardX: AudioParam;
    readonly forwardY: AudioParam;
    readonly forwardZ: AudioParam;
    readonly upX: AudioParam;
    readonly upY: AudioParam;
    readonly upZ: AudioParam;
    setPosition(x: number, y: number, z: number): void;
    setOrientation(x: number, y: number, z: number, xUp: number, yUp: number, zUp: number): void;
}

declare var AudioListener: {
    prototype: AudioListener;
    new (): AudioListener;
}

interface StereoPannerNode extends AudioNode {
    readonly pan: AudioParam;
}

declare var StereoPannerNode: {
    prototype: StereoPannerNode;
    new (context: BaseAudioContext, options?: StereoPannerOptions): StereoPannerNode;
}

interface ConvolverNode extends AudioNode {
    buffer: AudioBuffer | null;
    normalize: boolean;
}

declare var ConvolverNode: {
    prototype: ConvolverNode;
    new (context: BaseAudioContext, options?: ConvolverOptions): ConvolverNode;
}

interface AnalyserNode extends AudioNode {
    fftSize: number;
    readonly frequencyBinCount: number;
    minDecibels: number;
    maxDecibels: number;
    smoothingTimeConstant: number;
    getFloatFrequencyData(array: Float32Array): void;
    getByteFrequencyData(array: Uint8Array): void;
    getFloatTimeDomainData(array: Float32Array): void;
    getByteTimeDomainData(array: Uint8Array): void;
}

declare var AnalyserNode: {
    prototype: AnalyserNode;
    new (context: BaseAudioContext, options?: AnalyserOptions): AnalyserNode;
}

interface ChannelSplitterNode extends AudioNode {
}

declare var ChannelSplitterNode: {
    prototype: ChannelSplitterNode;
    new (context: BaseAudioContext, options?: ChannelSplitterNode): ChannelSplitterNode;
}

interface ChannelMergerNode extends AudioNode {
}

declare var ChannelMergerNode: {
    prototype: ChannelMergerNode;
    new (context: BaseAudioContext, options?: ChannelMergerOptions): ChannelMergerNode;
}

interface DynamicsCompressorNode extends AudioNode {
    readonly threshold: AudioParam;
    readonly knee: AudioParam;
    readonly ratio: AudioParam;
    readonly reduction: number;
    readonly attack: AudioParam;
    readonly release: AudioParam;
}

declare var DynamicsCompressorNode: {
    prototype: DynamicsCompressorNode;
    new (context: BaseAudioContext, options?: DynamicsCompressorOptions): DynamicsCompressorNode;
}

interface BiquadFilterNode extends AudioNode {
    type: BiquadFilterType;
    readonly frequency: AudioParam;
    readonly detune: AudioParam;
    readonly Q: AudioParam;
    readonly gain: AudioParam;
    getFrequencyResponse(frequencyHz: Float32Array, magResponse: Float32Array, phaseResponse: Float32Array): void;
}

declare var BiquadFilterNode: {
    prototype: BiquadFilterNode;
    new (context: BaseAudioContext, options?: BiquadFilterOptions): BiquadFilterNode;
}

interface IIRFilterNode extends AudioNode {
    getFrequencyResponse(frequencyHz: Float32Array, magResponse: Float32Array, phaseResponse: Float32Array): void;
}

declare var IIRFilterNode: {
    prototype: IIRFilterNode;
    new (context: BaseAudioContext, options: IIRFilterOptions): IIRFilterNode;
}

interface WaveShaperNode extends AudioNode {
    curve: Float32Array | null;
    oversample: OverSampleType;
}

declare var WaveShaperNode: {
    prototype: WaveShaperNode;
    new (context: BaseAudioContext, options?: WaveShaperOptions): WaveShaperNode;
}

interface OscillatorNode extends AudioScheduledSourceNode {
    type: OscillatorType;
    readonly frequency: AudioParam;
    readonly detune: AudioParam;
    setPeriodicWave(periodicWave: PeriodicWave): void;
    addEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: OscillatorNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var OscillatorNode: {
    prototype: OscillatorNode;
    new (context: BaseAudioContext, options?: OscillatorOptions): OscillatorNode;
}

interface PeriodicWave {
}

declare var PeriodicWave: {
    prototype: PeriodicWave;
    new (context: BaseAudioContext, options?: PeriodicWaveOptions): PeriodicWave;
}

interface MediaStreamAudioSourceNode extends AudioNode {
}

declare var MediaStreamAudioSourceNode: {
    prototype: MediaStreamAudioSourceNode;
    new (context: BaseAudioContext, options: MediaStreamAudioSourceOptions): MediaStreamAudioSourceNode;
}

interface MediaStreamTrackAudioSourceNode extends AudioNode {
}

declare var MediaStreamTrackAudioSourceNode: {
    prototype: MediaStreamTrackAudioSourceNode;
    new (context: AudioContext, options: MediaStreamTrackAudioSourceOptions): MediaStreamTrackAudioSourceNode;
}

interface MediaStreamAudioDestinationNode extends AudioNode {
    readonly stream: MediaStream;
}

declare var MediaStreamAudioDestinationNode: {
    prototype: MediaStreamAudioDestinationNode;
    new (context: BaseAudioContext, options?: AudioNodeOptions): MediaStreamAudioDestinationNode;
}

interface WebAuthentication {
    makeCredential(accountInformation: Account, cryptoParameters: ScopedCredentialParameters[], attestationChallenge: BufferSource, options?: ScopedCredentialOptions): Promise<ScopedCredentialInfo>;
    getAssertion(assertionChallenge: BufferSource, options?: AssertionOptions): Promise<AuthenticationAssertion>;
}

declare var WebAuthentication: {
    prototype: WebAuthentication;
    new (): WebAuthentication;
}

interface ScopedCredentialInfo {
    readonly clientDataJSON: ArrayBuffer;
    readonly attestationObject: ArrayBuffer;
}

declare var ScopedCredentialInfo: {
    prototype: ScopedCredentialInfo;
    new (): ScopedCredentialInfo;
}

interface AuthenticationAssertion {
    readonly credential: ScopedCredential;
    readonly clientDataJSON: ArrayBuffer;
    readonly authenticatorData: ArrayBuffer;
    readonly signature: ArrayBuffer;
}

declare var AuthenticationAssertion: {
    prototype: AuthenticationAssertion;
    new (): AuthenticationAssertion;
}

interface ScopedCredential {
    readonly type: ScopedCredentialType;
    readonly id: ArrayBuffer;
}

declare var ScopedCredential: {
    prototype: ScopedCredential;
    new (): ScopedCredential;
}

interface SyncManager {
    register(tag: string): Promise<void>;
    getTags(): any;
}

declare var SyncManager: {
    prototype: SyncManager;
    new (): SyncManager;
}

interface SyncEvent extends ExtendableEvent {
    readonly tag: string;
    readonly lastChance: boolean;
}

declare var SyncEvent: {
    prototype: SyncEvent;
    new (type: string, init: SyncEventInit): SyncEvent;
}

interface Crypto {
    readonly subtle: SubtleCrypto;
    getRandomValues(array: ArrayBufferView): ArrayBufferView;
}

declare var Crypto: {
    prototype: Crypto;
    new (): Crypto;
}

interface CryptoKey {
    readonly type: KeyType;
    readonly extractable: boolean;
    readonly algorithm: any;
    readonly usages: any;
}

declare var CryptoKey: {
    prototype: CryptoKey;
    new (): CryptoKey;
}

interface SubtleCrypto {
    encrypt(algorithm: AlgorithmIdentifier, key: CryptoKey, data: BufferSource): Promise<any>;
    decrypt(algorithm: AlgorithmIdentifier, key: CryptoKey, data: BufferSource): Promise<any>;
    sign(algorithm: AlgorithmIdentifier, key: CryptoKey, data: BufferSource): Promise<any>;
    verify(algorithm: AlgorithmIdentifier, key: CryptoKey, signature: BufferSource, data: BufferSource): Promise<any>;
    digest(algorithm: AlgorithmIdentifier, data: BufferSource): Promise<any>;
    generateKey(algorithm: AlgorithmIdentifier, extractable: boolean, keyUsages: KeyUsage[]): Promise<any>;
    deriveKey(algorithm: AlgorithmIdentifier, baseKey: CryptoKey, derivedKeyType: AlgorithmIdentifier, extractable: boolean, keyUsages: KeyUsage[]): Promise<any>;
    deriveBits(algorithm: AlgorithmIdentifier, baseKey: CryptoKey, length: number): Promise<ArrayBuffer>;
    importKey(format: KeyFormat, keyData: BufferSource | JsonWebKey, algorithm: AlgorithmIdentifier, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    exportKey(format: KeyFormat, key: CryptoKey): Promise<any>;
    wrapKey(format: KeyFormat, key: CryptoKey, wrappingKey: CryptoKey, wrapAlgorithm: AlgorithmIdentifier): Promise<any>;
    unwrapKey(format: KeyFormat, wrappedKey: BufferSource, unwrappingKey: CryptoKey, unwrapAlgorithm: AlgorithmIdentifier, unwrappedKeyAlgorithm: AlgorithmIdentifier, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
}

declare var SubtleCrypto: {
    prototype: SubtleCrypto;
    new (): SubtleCrypto;
}

interface SpeechRecognitionEventMap {
    "audiostart": Event;
    "soundstart": Event;
    "speechstart": Event;
    "speechend": Event;
    "soundend": Event;
    "audioend": Event;
    "result": SpeechRecognitionEvent;
    "nomatch": SpeechRecognitionEvent;
    "error": SpeechRecognitionError;
    "start": Event;
    "end": Event;
}

interface SpeechRecognition extends EventTarget {
    grammars: SpeechGrammarList;
    lang: string;
    continuous: boolean;
    interimResults: boolean;
    maxAlternatives: number;
    serviceURI: string;
    onaudiostart: (this: SpeechRecognition, ev: Event) => any;
    onsoundstart: (this: SpeechRecognition, ev: Event) => any;
    onspeechstart: (this: SpeechRecognition, ev: Event) => any;
    onspeechend: (this: SpeechRecognition, ev: Event) => any;
    onsoundend: (this: SpeechRecognition, ev: Event) => any;
    onaudioend: (this: SpeechRecognition, ev: Event) => any;
    onresult: (this: SpeechRecognition, ev: SpeechRecognitionEvent) => any;
    onnomatch: (this: SpeechRecognition, ev: SpeechRecognitionEvent) => any;
    onerror: (this: SpeechRecognition, ev: SpeechRecognitionError) => any;
    onstart: (this: SpeechRecognition, ev: Event) => any;
    onend: (this: SpeechRecognition, ev: Event) => any;
    start(): void;
    stop(): void;
    abort(): void;
    addEventListener<K extends keyof SpeechRecognitionEventMap>(type: K, listener: (this: SpeechRecognition, ev: SpeechRecognitionEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SpeechRecognition: {
    prototype: SpeechRecognition;
    new (): SpeechRecognition;
}

interface SpeechRecognitionError extends Event {
    readonly error: SpeechRecognitionErrorCode;
    readonly message: string;
}

declare var SpeechRecognitionError: {
    prototype: SpeechRecognitionError;
    new (): SpeechRecognitionError;
}

interface SpeechRecognitionAlternative {
    readonly transcript: string;
    readonly confidence: number;
}

declare var SpeechRecognitionAlternative: {
    prototype: SpeechRecognitionAlternative;
    new (): SpeechRecognitionAlternative;
}

interface SpeechRecognitionResult {
    readonly length: number;
    readonly isFinal: boolean;
    item(index: number): SpeechRecognitionAlternative;
    [index: number]: SpeechRecognitionAlternative;
}

declare var SpeechRecognitionResult: {
    prototype: SpeechRecognitionResult;
    new (): SpeechRecognitionResult;
}

interface SpeechRecognitionResultList {
    readonly length: number;
    item(index: number): SpeechRecognitionResult;
    [index: number]: SpeechRecognitionResult;
}

declare var SpeechRecognitionResultList: {
    prototype: SpeechRecognitionResultList;
    new (): SpeechRecognitionResultList;
}

interface SpeechRecognitionEvent extends Event {
    readonly resultIndex: number;
    readonly results: SpeechRecognitionResultList;
    readonly interpretation: any;
    readonly emma: Document;
}

declare var SpeechRecognitionEvent: {
    prototype: SpeechRecognitionEvent;
    new (): SpeechRecognitionEvent;
}

interface SpeechGrammar {
    src: string;
    weight: number;
}

declare var SpeechGrammar: {
    prototype: SpeechGrammar;
    new (): SpeechGrammar;
}

interface SpeechGrammarList {
    readonly length: number;
    item(index: number): SpeechGrammar;
    addFromURI(src: string, weight?: number): void;
    addFromString(string: string, weight?: number): void;
    [index: number]: SpeechGrammar;
}

declare var SpeechGrammarList: {
    prototype: SpeechGrammarList;
    new (): SpeechGrammarList;
}

interface SpeechSynthesisEventMap {
    "voiceschanged": Event;
}

interface SpeechSynthesis extends EventTarget {
    readonly pending: boolean;
    readonly speaking: boolean;
    readonly paused: boolean;
    onvoiceschanged: (this: SpeechSynthesis, ev: Event) => any;
    speak(utterance: SpeechSynthesisUtterance): void;
    cancel(): void;
    pause(): void;
    resume(): void;
    getVoices(): any[];
    addEventListener<K extends keyof SpeechSynthesisEventMap>(type: K, listener: (this: SpeechSynthesis, ev: SpeechSynthesisEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SpeechSynthesis: {
    prototype: SpeechSynthesis;
    new (): SpeechSynthesis;
}

interface SpeechSynthesisUtteranceEventMap {
    "start": Event;
    "end": Event;
    "error": ErrorEvent;
    "pause": Event;
    "resume": Event;
    "mark": Event;
    "boundary": Event;
}

interface SpeechSynthesisUtterance extends EventTarget {
    text: string;
    lang: string;
    voice: SpeechSynthesisVoice;
    volume: number;
    rate: number;
    pitch: number;
    onstart: (this: SpeechSynthesisUtterance, ev: Event) => any;
    onend: (this: SpeechSynthesisUtterance, ev: Event) => any;
    onerror: (this: SpeechSynthesisUtterance, ev: ErrorEvent) => any;
    onpause: (this: SpeechSynthesisUtterance, ev: Event) => any;
    onresume: (this: SpeechSynthesisUtterance, ev: Event) => any;
    onmark: (this: SpeechSynthesisUtterance, ev: Event) => any;
    onboundary: (this: SpeechSynthesisUtterance, ev: Event) => any;
    addEventListener<K extends keyof SpeechSynthesisUtteranceEventMap>(type: K, listener: (this: SpeechSynthesisUtterance, ev: SpeechSynthesisUtteranceEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var SpeechSynthesisUtterance: {
    prototype: SpeechSynthesisUtterance;
    new (): SpeechSynthesisUtterance;
    new (text: string): SpeechSynthesisUtterance;
}

interface SpeechSynthesisEvent extends Event {
    readonly utterance: SpeechSynthesisUtterance;
    readonly charIndex: number;
    readonly elapsedTime: number;
    readonly name: string;
}

declare var SpeechSynthesisEvent: {
    prototype: SpeechSynthesisEvent;
    new (): SpeechSynthesisEvent;
}

interface SpeechSynthesisErrorEvent extends SpeechSynthesisEvent {
    readonly error: any;
}

declare var SpeechSynthesisErrorEvent: {
    prototype: SpeechSynthesisErrorEvent;
    new (): SpeechSynthesisErrorEvent;
}

interface SpeechSynthesisVoice {
    readonly voiceURI: string;
    readonly name: string;
    readonly lang: string;
    readonly localService: boolean;
    readonly default: boolean;
}

declare var SpeechSynthesisVoice: {
    prototype: SpeechSynthesisVoice;
    new (): SpeechSynthesisVoice;
}

interface RTCPeerConnectionEventMap {
    "negotiationneeded": Event;
    "icecandidate": RTCPeerConnectionIceEvent;
    "icecandidateerror": RTCPeerConnectionIceErrorEvent;
    "signalingstatechange": Event;
    "iceconnectionstatechange": Event;
    "icegatheringstatechange": Event;
    "connectionstatechange": Event;
    "fingerprintfailure": Event;
    "track": RTCTrackEvent;
    "datachannel": RTCDataChannelEvent;
}

interface RTCPeerConnection extends EventTarget {
    readonly localDescription: RTCSessionDescription | null;
    readonly currentLocalDescription: RTCSessionDescription | null;
    readonly pendingLocalDescription: RTCSessionDescription | null;
    readonly remoteDescription: RTCSessionDescription | null;
    readonly currentRemoteDescription: RTCSessionDescription | null;
    readonly pendingRemoteDescription: RTCSessionDescription | null;
    readonly signalingState: RTCSignalingState;
    readonly iceGatheringState: RTCIceGatheringState;
    readonly iceConnectionState: RTCIceConnectionState;
    readonly connectionState: RTCPeerConnectionState;
    readonly canTrickleIceCandidates: boolean | null;
    readonly defaultIceServers: ReadonlyArray<RTCIceServer>;
    onnegotiationneeded: (this: RTCPeerConnection, ev: Event) => any;
    onicecandidate: (this: RTCPeerConnection, ev: RTCPeerConnectionIceEvent) => any;
    onicecandidateerror: (this: RTCPeerConnection, ev: RTCPeerConnectionIceErrorEvent) => any;
    onsignalingstatechange: (this: RTCPeerConnection, ev: Event) => any;
    oniceconnectionstatechange: (this: RTCPeerConnection, ev: Event) => any;
    onicegatheringstatechange: (this: RTCPeerConnection, ev: Event) => any;
    onconnectionstatechange: (this: RTCPeerConnection, ev: Event) => any;
    onfingerprintfailure: (this: RTCPeerConnection, ev: Event) => any;
    ontrack: (this: RTCPeerConnection, ev: RTCTrackEvent) => any;
    readonly sctp: RTCSctpTransport | null;
    ondatachannel: (this: RTCPeerConnection, ev: RTCDataChannelEvent) => any;
    readonly peerIdentity: Promise<RTCIdentityAssertion>;
    readonly idpLoginUrl: string | null;
    readonly idpErrorInfo: string | null;
    createOffer(options?: RTCOfferOptions): Promise<RTCSessionDescriptionInit>;
    createAnswer(options?: RTCAnswerOptions): Promise<RTCSessionDescriptionInit>;
    setLocalDescription(description: RTCSessionDescriptionInit): Promise<void>;
    setRemoteDescription(description: RTCSessionDescriptionInit): Promise<void>;
    addIceCandidate(candidate: RTCIceCandidateInit | RTCIceCandidate): Promise<void>;
    getConfiguration(): RTCConfiguration;
    setConfiguration(configuration: RTCConfiguration): void;
    close(): void;
    createOffer(successCallback: RTCSessionDescriptionCallback, failureCallback: RTCPeerConnectionErrorCallback, options?: RTCOfferOptions): Promise<void>;
    setLocalDescription(description: RTCSessionDescriptionInit, successCallback: VoidFunction, failureCallback: RTCPeerConnectionErrorCallback): Promise<void>;
    createAnswer(successCallback: RTCSessionDescriptionCallback, failureCallback: RTCPeerConnectionErrorCallback): Promise<void>;
    setRemoteDescription(description: RTCSessionDescriptionInit, successCallback: VoidFunction, failureCallback: RTCPeerConnectionErrorCallback): Promise<void>;
    addIceCandidate(candidate: RTCIceCandidateInit | RTCIceCandidate, successCallback: VoidFunction, failureCallback: RTCPeerConnectionErrorCallback): Promise<void>;
    getSenders(): RTCRtpSender[];
    getReceivers(): RTCRtpReceiver[];
    getTransceivers(): RTCRtpTransceiver[];
    addTrack(track: MediaStreamTrack, ...streams: MediaStream[]): RTCRtpSender;
    removeTrack(sender: RTCRtpSender): void;
    addTransceiver(trackOrKind: MediaStreamTrack | string, init?: RTCRtpTransceiverInit): RTCRtpTransceiver;
    createDataChannel(label: string, dataChannelDict?: RTCDataChannelInit): RTCDataChannel;
    getStats(selector?: MediaStreamTrack): Promise<RTCStatsReport>;
    setIdentityProvider(provider: string, options?: RTCIdentityProviderOptions): void;
    getIdentityAssertion(): Promise<string>;
    addEventListener<K extends keyof RTCPeerConnectionEventMap>(type: K, listener: (this: RTCPeerConnection, ev: RTCPeerConnectionEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var RTCPeerConnection: {
    prototype: RTCPeerConnection;
    new (configuration?: RTCConfiguration): RTCPeerConnection;
    generateCertificate(keygenAlgorithm: AlgorithmIdentifier): Promise<RTCCertificate>;
}

interface RTCSessionDescription {
    readonly type: RTCSdpType;
    readonly sdp: string;
}

declare var RTCSessionDescription: {
    prototype: RTCSessionDescription;
    new (descriptionInitDict: RTCSessionDescriptionInit): RTCSessionDescription;
}

interface RTCIceCandidate {
    readonly candidate: string;
    readonly sdpMid: string | null;
    readonly sdpMLineIndex: number | null;
    readonly foundation: string | null;
    readonly priority: number | null;
    readonly ip: string | null;
    readonly protocol: RTCIceProtocol | null;
    readonly port: number | null;
    readonly type: RTCIceCandidateType | null;
    readonly tcpType: RTCIceTcpCandidateType | null;
    readonly relatedAddress: string | null;
    readonly relatedPort: number | null;
    readonly ufrag: string | null;
}

declare var RTCIceCandidate: {
    prototype: RTCIceCandidate;
    new (candidateInitDict: RTCIceCandidateInit): RTCIceCandidate;
}

interface RTCPeerConnectionIceEvent extends Event {
    readonly candidate: RTCIceCandidate | null;
    readonly url: string | null;
}

declare var RTCPeerConnectionIceEvent: {
    prototype: RTCPeerConnectionIceEvent;
    new (type: string, eventInitDict?: RTCPeerConnectionIceEventInit): RTCPeerConnectionIceEvent;
}

interface RTCPeerConnectionIceErrorEvent extends Event {
    readonly hostCandidate: string;
    readonly url: string;
    readonly errorCode: number;
    readonly errorText: string;
}

declare var RTCPeerConnectionIceErrorEvent: {
    prototype: RTCPeerConnectionIceErrorEvent;
    new (type: string, eventInitDict: RTCPeerConnectionIceErrorEventInit): RTCPeerConnectionIceErrorEvent;
}

interface RTCCertificate {
    readonly expires: number;
    readonly fingerprints: ReadonlyArray<RTCDtlsFingerprint>;
    getAlgorithm(): AlgorithmIdentifier;
}

declare var RTCCertificate: {
    prototype: RTCCertificate;
    new (): RTCCertificate;
}

interface RTCRtpSender {
    readonly track: MediaStreamTrack | null;
    readonly transport: RTCDtlsTransport | null;
    readonly rtcpTransport: RTCDtlsTransport | null;
    readonly dtmf: RTCDTMFSender | null;
    setParameters(parameters?: RTCRtpParameters): Promise<void>;
    getParameters(): RTCRtpParameters;
    replaceTrack(withTrack: MediaStreamTrack): Promise<void>;
}

declare var RTCRtpSender: {
    prototype: RTCRtpSender;
    new (): RTCRtpSender;
    getCapabilities(kind: string): RTCRtpCapabilities;
}

interface RTCRtpReceiver {
    readonly track: MediaStreamTrack;
    readonly transport: RTCDtlsTransport | null;
    readonly rtcpTransport: RTCDtlsTransport | null;
    getParameters(): RTCRtpParameters;
    getContributingSources(): RTCRtpContributingSource[];
}

declare var RTCRtpReceiver: {
    prototype: RTCRtpReceiver;
    new (): RTCRtpReceiver;
    getCapabilities(kind: string): RTCRtpCapabilities;
}

interface RTCRtpContributingSource {
    readonly timestamp: number;
    readonly source: number;
    readonly audioLevel: number | null;
    readonly voiceActivityFlag: boolean | null;
}

declare var RTCRtpContributingSource: {
    prototype: RTCRtpContributingSource;
    new (): RTCRtpContributingSource;
}

interface RTCRtpTransceiver {
    readonly mid: string | null;
    readonly sender: RTCRtpSender;
    readonly receiver: RTCRtpReceiver;
    readonly stopped: boolean;
    readonly direction: RTCRtpTransceiverDirection;
    readonly currentDirection: RTCRtpTransceiverDirection | null;
    setDirection(direction: RTCRtpTransceiverDirection): void;
    stop(): void;
    setCodecPreferences(codecs: RTCRtpCodecCapability[]): void;
}

declare var RTCRtpTransceiver: {
    prototype: RTCRtpTransceiver;
    new (): RTCRtpTransceiver;
}

interface RTCDtlsTransportEventMap {
    "statechange": Event;
}

interface RTCDtlsTransport {
    readonly transport: RTCIceTransport;
    readonly state: RTCDtlsTransportState;
    onstatechange: (this: RTCDtlsTransport, ev: Event) => any;
    getRemoteCertificates(): ArrayBuffer[];
    addEventListener<K extends keyof RTCDtlsTransportEventMap>(type: K, listener: (this: RTCDtlsTransport, ev: RTCDtlsTransportEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var RTCDtlsTransport: {
    prototype: RTCDtlsTransport;
    new (): RTCDtlsTransport;
}

interface RTCIceTransportEventMap {
    "statechange": Event;
    "gatheringstatechange": Event;
    "selectedcandidatepairchange": Event;
}

interface RTCIceTransport {
    readonly role: RTCIceRole;
    readonly component: RTCIceComponent;
    readonly state: RTCIceTransportState;
    readonly gatheringState: RTCIceGathererState;
    onstatechange: (this: RTCIceTransport, ev: Event) => any;
    ongatheringstatechange: (this: RTCIceTransport, ev: Event) => any;
    onselectedcandidatepairchange: (this: RTCIceTransport, ev: Event) => any;
    getLocalCandidates(): RTCIceCandidate[];
    getRemoteCandidates(): RTCIceCandidate[];
    getSelectedCandidatePair(): RTCIceCandidatePair | null;
    getLocalParameters(): RTCIceParameters | null;
    getRemoteParameters(): RTCIceParameters | null;
    addEventListener<K extends keyof RTCIceTransportEventMap>(type: K, listener: (this: RTCIceTransport, ev: RTCIceTransportEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var RTCIceTransport: {
    prototype: RTCIceTransport;
    new (): RTCIceTransport;
}

interface RTCTrackEvent extends Event {
    readonly receiver: RTCRtpReceiver;
    readonly track: MediaStreamTrack;
    readonly streams: ReadonlyArray<MediaStream>;
    readonly transceiver: RTCRtpTransceiver;
}

declare var RTCTrackEvent: {
    prototype: RTCTrackEvent;
    new (type: string, eventInitDict: RTCTrackEventInit): RTCTrackEvent;
}

interface RTCSctpTransport {
    readonly transport: RTCDtlsTransport;
    readonly maxMessageSize: number;
}

declare var RTCSctpTransport: {
    prototype: RTCSctpTransport;
    new (): RTCSctpTransport;
}

interface RTCDataChannelEventMap {
    "open": Event;
    "bufferedamountlow": Event;
    "error": ErrorEvent;
    "close": Event;
    "message": MessageEvent;
}

interface RTCDataChannel extends EventTarget {
    readonly label: string;
    readonly ordered: boolean;
    readonly maxPacketLifeTime: number | null;
    readonly maxRetransmits: number | null;
    readonly protocol: string;
    readonly negotiated: boolean;
    readonly id: number | null;
    readonly priority: RTCPriorityType;
    readonly readyState: RTCDataChannelState;
    readonly bufferedAmount: number;
    bufferedAmountLowThreshold: number;
    onopen: (this: RTCDataChannel, ev: Event) => any;
    onbufferedamountlow: (this: RTCDataChannel, ev: Event) => any;
    onerror: (this: RTCDataChannel, ev: ErrorEvent) => any;
    onclose: (this: RTCDataChannel, ev: Event) => any;
    onmessage: (this: RTCDataChannel, ev: MessageEvent) => any;
    binaryType: string;
    close(): void;
    send(data: string): void;
    send(data: Blob): void;
    send(data: ArrayBuffer): void;
    send(data: ArrayBufferView): void;
    addEventListener<K extends keyof RTCDataChannelEventMap>(type: K, listener: (this: RTCDataChannel, ev: RTCDataChannelEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var RTCDataChannel: {
    prototype: RTCDataChannel;
    new (): RTCDataChannel;
}

interface RTCDataChannelEvent extends Event {
    readonly channel: RTCDataChannel;
}

declare var RTCDataChannelEvent: {
    prototype: RTCDataChannelEvent;
    new (type: string, eventInitDict: RTCDataChannelEventInit): RTCDataChannelEvent;
}

interface RTCDTMFSenderEventMap {
    "tonechange": RTCDTMFToneChangeEvent;
}

interface RTCDTMFSender extends EventTarget {
    ontonechange: (this: RTCDTMFSender, ev: RTCDTMFToneChangeEvent) => any;
    readonly toneBuffer: string;
    insertDTMF(tones: string, duration?: number, interToneGap?: number): void;
    addEventListener<K extends keyof RTCDTMFSenderEventMap>(type: K, listener: (this: RTCDTMFSender, ev: RTCDTMFSenderEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var RTCDTMFSender: {
    prototype: RTCDTMFSender;
    new (): RTCDTMFSender;
}

interface RTCDTMFToneChangeEvent extends Event {
    readonly tone: string;
}

declare var RTCDTMFToneChangeEvent: {
    prototype: RTCDTMFToneChangeEvent;
    new (type: string, eventInitDict: RTCDTMFToneChangeEventInit): RTCDTMFToneChangeEvent;
}

interface RTCStatsReport {
}

declare var RTCStatsReport: {
    prototype: RTCStatsReport;
    new (): RTCStatsReport;
}

interface RTCIdentityProviderGlobalScope extends WorkerGlobalScope {
    readonly rtcIdentityProvider: RTCIdentityProviderRegistrar;
    addEventListener<K extends keyof WorkerGlobalScopeEventMap>(type: K, listener: (this: RTCIdentityProviderGlobalScope, ev: WorkerGlobalScopeEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var RTCIdentityProviderGlobalScope: {
    prototype: RTCIdentityProviderGlobalScope;
    new (): RTCIdentityProviderGlobalScope;
}

interface RTCIdentityProviderRegistrar {
    register(idp: RTCIdentityProvider): void;
}

declare var RTCIdentityProviderRegistrar: {
    prototype: RTCIdentityProviderRegistrar;
    new (): RTCIdentityProviderRegistrar;
}

interface RTCIdentityAssertion {
    idp: string;
    name: string;
}

declare var RTCIdentityAssertion: {
    prototype: RTCIdentityAssertion;
    new (idp: string, name: string): RTCIdentityAssertion;
}

interface RTCErrorEvent extends Event {
    readonly error: any;
}

declare var RTCErrorEvent: {
    prototype: RTCErrorEvent;
    new (type: string, eventInitDict: RTCErrorEventInit): RTCErrorEvent;
}

interface WebGLObject {
}

declare var WebGLObject: {
    prototype: WebGLObject;
    new (): WebGLObject;
}

interface WebGLBuffer extends WebGLObject {
}

declare var WebGLBuffer: {
    prototype: WebGLBuffer;
    new (): WebGLBuffer;
}

interface WebGLFramebuffer extends WebGLObject {
}

declare var WebGLFramebuffer: {
    prototype: WebGLFramebuffer;
    new (): WebGLFramebuffer;
}

interface WebGLProgram extends WebGLObject {
}

declare var WebGLProgram: {
    prototype: WebGLProgram;
    new (): WebGLProgram;
}

interface WebGLRenderbuffer extends WebGLObject {
}

declare var WebGLRenderbuffer: {
    prototype: WebGLRenderbuffer;
    new (): WebGLRenderbuffer;
}

interface WebGLShader extends WebGLObject {
}

declare var WebGLShader: {
    prototype: WebGLShader;
    new (): WebGLShader;
}

interface WebGLTexture extends WebGLObject {
}

declare var WebGLTexture: {
    prototype: WebGLTexture;
    new (): WebGLTexture;
}

interface WebGLUniformLocation {
}

declare var WebGLUniformLocation: {
    prototype: WebGLUniformLocation;
    new (): WebGLUniformLocation;
}

interface WebGLActiveInfo {
    readonly size: GLint;
    readonly type: GLenum;
    readonly name: string;
}

declare var WebGLActiveInfo: {
    prototype: WebGLActiveInfo;
    new (): WebGLActiveInfo;
}

interface WebGLShaderPrecisionFormat {
    readonly rangeMin: GLint;
    readonly rangeMax: GLint;
    readonly precision: GLint;
}

declare var WebGLShaderPrecisionFormat: {
    prototype: WebGLShaderPrecisionFormat;
    new (): WebGLShaderPrecisionFormat;
}

interface WebGLRenderingContext extends Object, WebGLRenderingContextBase {
}

declare var WebGLRenderingContext: {
    prototype: WebGLRenderingContext;
    new (): WebGLRenderingContext;
}

interface WebGLContextEvent extends Event {
    readonly statusMessage: string;
}

declare var WebGLContextEvent: {
    prototype: WebGLContextEvent;
    new (type: string, eventInit?: WebGLContextEventInit): WebGLContextEvent;
}

interface WorkletGlobalScope {
}

declare var WorkletGlobalScope: {
    prototype: WorkletGlobalScope;
    new (): WorkletGlobalScope;
}

interface Worklet {
    import(moduleURL: string): Promise<void>;
}

declare var Worklet: {
    prototype: Worklet;
    new (): Worklet;
}

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
    onloadstart: (this: XMLHttpRequestEventTarget, ev: Event) => any;
    onprogress: (this: XMLHttpRequestEventTarget, ev: ProgressEvent) => any;
    onabort: (this: XMLHttpRequestEventTarget, ev: Event) => any;
    onerror: (this: XMLHttpRequestEventTarget, ev: ErrorEvent) => any;
    onload: (this: XMLHttpRequestEventTarget, ev: Event) => any;
    ontimeout: (this: XMLHttpRequestEventTarget, ev: Event) => any;
    onloadend: (this: XMLHttpRequestEventTarget, ev: Event) => any;
    addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var XMLHttpRequestEventTarget: {
    prototype: XMLHttpRequestEventTarget;
    new (): XMLHttpRequestEventTarget;
}

interface XMLHttpRequestUpload extends XMLHttpRequestEventTarget {
    addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

declare var XMLHttpRequestUpload: {
    prototype: XMLHttpRequestUpload;
    new (): XMLHttpRequestUpload;
}

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
    readonly responseXML: Document | null;
    msCaching?: string;
    open(method: any, url: string): void;
    open(method: any, url: string, async: boolean, username?: string, password?: string): void;
    setRequestHeader(name: any, value: any): void;
    send(data?: Document): void;
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
    new (): XMLHttpRequest;
    readonly UNSENT: number;
    readonly OPENED: number;
    readonly HEADERS_RECEIVED: number;
    readonly LOADING: number;
    readonly DONE: number;
}

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
    new (form?: HTMLFormElement): FormData;
}

interface ProgressEvent extends Event {
    readonly lengthComputable: boolean;
    readonly loaded: number;
    readonly total: number;
}

declare var ProgressEvent: {
    prototype: ProgressEvent;
    new(type: string, eventInitDict?: ProgressEventInit): ProgressEvent;
}

interface LinkStyle {
    readonly sheet: StyleSheet | null;
}

interface ElementCSSInlineStyle {
    readonly style: CSSStyleDeclaration;
}

interface GeometryUtils {
    getBoxQuads(options?: BoxQuadOptions): DOMQuad[];
    convertQuadFromNode(quad: DOMQuadInit, from: GeometryNode, options?: ConvertCoordinateOptions): DOMQuad;
    convertRectFromNode(rect: DOMRectReadOnly, from: GeometryNode, options?: ConvertCoordinateOptions): DOMQuad;
    convertPointFromNode(point: DOMPointInit, from: GeometryNode, options?: ConvertCoordinateOptions): DOMPoint;
}

interface DeviceAcceleration {
    readonly x: number | null;
    readonly y: number | null;
    readonly z: number | null;
}

interface DeviceRotationRate {
    readonly alpha: number | null;
    readonly beta: number | null;
    readonly gamma: number | null;
}

interface NonElementParentNode {
    getElementById(elementId: string): Element | null;
}

interface DocumentOrShadowRoot {
}

interface ParentNode {
    readonly children: HTMLCollection;
    readonly firstElementChild: Element | null;
    readonly lastElementChild: Element | null;
    readonly childElementCount: number;
    prepend(...nodes: (Node | string)[]): void;
    append(...nodes: (Node | string)[]): void;
    querySelectorAll<K extends keyof ElementListTagNameMap>(selectors: K): ElementListTagNameMap[K];
    querySelectorAll(selectors: string): NodeListOf<Element>;
}

interface NonDocumentTypeChildNode {
    readonly previousElementSibling: Element | null;
    readonly nextElementSibling: Element | null;
}

interface ChildNode {
    before(...nodes: (Node | string)[]): void;
    after(...nodes: (Node | string)[]): void;
    replaceWith(...nodes: (Node | string)[]): void;
    remove(): void;
}

interface Slotable {
    readonly assignedSlot: HTMLSlotElement | null;
}

interface Body {
    readonly body: ReadableStream | null;
    readonly bodyUsed: boolean;
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Blob>;
    formData(): Promise<FormData>;
    json(): Promise<any>;
    text(): Promise<string>;
    formData(): Promise<FormData>;
}

interface SVGFilterPrimitiveStandardAttributes {
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    readonly width: SVGAnimatedLength;
    readonly height: SVGAnimatedLength;
    readonly result: SVGAnimatedString;
}

interface Geolocation {
    getCurrentPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions): void;
    watchPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions): number;
    clearWatch(watchId: number): void;
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

interface GlobalPerformance {
    readonly performance: Performance;
}

interface HTMLHyperlinkElementUtils {
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
    hash: string;
}

interface CanvasState {
    save(): void;
    restore(): void;
}

interface CanvasTransform {
    scale(x: number, y: number): void;
    rotate(angle: number): void;
    translate(x: number, y: number): void;
    transform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    getTransform(): DOMMatrix;
    setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    setTransform(transform?: DOMMatrixInit): void;
    resetTransform(): void;
}

interface CanvasCompositing {
    globalAlpha: number;
    globalCompositeOperation: string;
}

interface CanvasImageSmoothing {
    imageSmoothingEnabled: boolean;
    imageSmoothingQuality: ImageSmoothingQuality;
}

interface CanvasFillStrokeStyles {
    strokeStyle: string | CanvasGradient | CanvasPattern;
    fillStyle: string | CanvasGradient | CanvasPattern;
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
    createPattern(image: CanvasImageSource, repetition: string): CanvasPattern | null;
}

interface CanvasShadowStyles {
    shadowOffsetX: number;
    shadowOffsetY: number;
    shadowBlur: number;
    shadowColor: string;
}

interface CanvasFilters {
    filter: string;
}

interface CanvasRect {
    clearRect(x: number, y: number, w: number, h: number): void;
    fillRect(x: number, y: number, w: number, h: number): void;
    strokeRect(x: number, y: number, w: number, h: number): void;
}

interface CanvasDrawPath {
    beginPath(): void;
    fill(fillRule?: CanvasFillRule): void;
    fill(path: Path2D, fillRule?: CanvasFillRule): void;
    stroke(): void;
    stroke(path: Path2D): void;
    clip(fillRule?: CanvasFillRule): void;
    clip(path: Path2D, fillRule?: CanvasFillRule): void;
    resetClip(): void;
    isPointInPath(x: number, y: number, fillRule?: CanvasFillRule): boolean;
    isPointInPath(path: Path2D, x: number, y: number, fillRule?: CanvasFillRule): boolean;
    isPointInStroke(x: number, y: number): boolean;
    isPointInStroke(path: Path2D, x: number, y: number): boolean;
}

interface CanvasUserInterface {
    drawFocusIfNeeded(element: Element): void;
    drawFocusIfNeeded(path: Path2D, element: Element): void;
    scrollPathIntoView(): void;
    scrollPathIntoView(path: Path2D): void;
}

interface CanvasText {
    fillText(text: string, x: number, y: number, maxWidth?: number): void;
    strokeText(text: string, x: number, y: number, maxWidth?: number): void;
    measureText(text: string): TextMetrics;
}

interface CanvasDrawImage {
    drawImage(image: CanvasImageSource, dx: number, dy: number): void;
    drawImage(image: CanvasImageSource, dx: number, dy: number, dw: number, dh: number): void;
    drawImage(image: CanvasImageSource, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
}

interface CanvasImageData {
    createImageData(sw: number, sh: number): ImageData;
    createImageData(imagedata: ImageData): ImageData;
    getImageData(sx: number, sy: number, sw: number, sh: number): ImageData;
    putImageData(imagedata: ImageData, dx: number, dy: number): void;
    putImageData(imagedata: ImageData, dx: number, dy: number, dirtyX: number, dirtyY: number, dirtyWidth: number, dirtyHeight: number): void;
}

interface CanvasPathDrawingStyles {
    lineWidth: number;
    lineCap: CanvasLineCap;
    lineJoin: CanvasLineJoin;
    miterLimit: number;
    lineDashOffset: number;
    setLineDash(segments: any): void;
    getLineDash(): any;
}

interface CanvasTextDrawingStyles {
    font: string;
    textAlign: CanvasTextAlign;
    textBaseline: CanvasTextBaseline;
    direction: CanvasDirection;
}

interface CanvasPath {
    closePath(): void;
    moveTo(x: number, y: number): void;
    lineTo(x: number, y: number): void;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, radiusX: number, radiusY: number, rotation: number): void;
    rect(x: number, y: number, w: number, h: number): void;
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
}

interface ElementContentEditable {
    contentEditable: string;
    readonly isContentEditable: boolean;
}

interface NavigatorOnLine {
    readonly onLine: boolean;
}

interface GlobalEventHandlersEventMap {
    "abort": Event;
    "auxclick": MouseEvent;
    "blur": Event;
    "cancel": Event;
    "canplay": Event;
    "canplaythrough": Event;
    "change": Event;
    "click": MouseEvent;
    "close": Event;
    "contextmenu": MouseEvent;
    "cuechange": Event;
    "dblclick": MouseEvent;
    "drag": DragEvent;
    "dragend": DragEvent;
    "dragenter": DragEvent;
    "dragexit": DragEvent;
    "dragleave": DragEvent;
    "dragover": DragEvent;
    "dragstart": DragEvent;
    "drop": DragEvent;
    "durationchange": Event;
    "emptied": Event;
    "ended": Event;
    "focus": Event;
    "input": Event;
    "invalid": Event;
    "keydown": KeyboardEvent;
    "keypress": KeyboardEvent;
    "keyup": KeyboardEvent;
    "load": Event;
    "loadeddata": Event;
    "loadedmetadata": Event;
    "loadend": Event;
    "loadstart": Event;
    "mousedown": MouseEvent;
    "mouseenter": MouseEvent;
    "mouseleave": MouseEvent;
    "mousemove": MouseEvent;
    "mouseout": MouseEvent;
    "mouseover": MouseEvent;
    "mouseup": MouseEvent;
    "wheel": WheelEvent;
    "pause": Event;
    "play": Event;
    "playing": Event;
    "progress": Event;
    "ratechange": Event;
    "reset": Event;
    "resize": Event;
    "scroll": Event;
    "seeked": Event;
    "seeking": Event;
    "select": Event;
    "show": RelatedEvent;
    "stalled": Event;
    "submit": Event;
    "suspend": Event;
    "timeupdate": Event;
    "toggle": Event;
    "volumechange": Event;
    "waiting": Event;
    "animationstart": AnimationEvent;
    "animationiteration": AnimationEvent;
    "animationend": AnimationEvent;
    "animationcancel": AnimationEvent;
    "transitionrun": TransitionEvent;
    "transitionstart": TransitionEvent;
    "transitionend": TransitionEvent;
    "transitioncancel": TransitionEvent;
    "pointerdown": Event;
    "pointermove": Event;
    "pointerup": Event;
    "pointercancel": Event;
    "pointerover": Event;
    "pointerout": Event;
    "pointerenter": Event;
    "pointerleave": Event;
    "selectstart": Event;
    "selectionchange": Event;
    "touchstart": TouchEvent;
    "touchend": TouchEvent;
    "touchmove": TouchEvent;
    "touchcancel": TouchEvent;
}

interface GlobalEventHandlers {
    onabort: (this: GlobalEventHandlers, ev: Event) => any;
    onauxclick: (this: GlobalEventHandlers, ev: MouseEvent) => any;
    onblur: (this: GlobalEventHandlers, ev: Event) => any;
    oncancel: (this: GlobalEventHandlers, ev: Event) => any;
    oncanplay: (this: GlobalEventHandlers, ev: Event) => any;
    oncanplaythrough: (this: GlobalEventHandlers, ev: Event) => any;
    onchange: (this: GlobalEventHandlers, ev: Event) => any;
    onclick: (this: GlobalEventHandlers, ev: MouseEvent) => any;
    onclose: (this: GlobalEventHandlers, ev: Event) => any;
    oncontextmenu: (this: GlobalEventHandlers, ev: MouseEvent) => any;
    oncuechange: (this: GlobalEventHandlers, ev: Event) => any;
    ondblclick: (this: GlobalEventHandlers, ev: MouseEvent) => any;
    ondrag: (this: GlobalEventHandlers, ev: DragEvent) => any;
    ondragend: (this: GlobalEventHandlers, ev: DragEvent) => any;
    ondragenter: (this: GlobalEventHandlers, ev: DragEvent) => any;
    ondragexit: (this: GlobalEventHandlers, ev: DragEvent) => any;
    ondragleave: (this: GlobalEventHandlers, ev: DragEvent) => any;
    ondragover: (this: GlobalEventHandlers, ev: DragEvent) => any;
    ondragstart: (this: GlobalEventHandlers, ev: DragEvent) => any;
    ondrop: (this: GlobalEventHandlers, ev: DragEvent) => any;
    ondurationchange: (this: GlobalEventHandlers, ev: Event) => any;
    onemptied: (this: GlobalEventHandlers, ev: Event) => any;
    onended: (this: GlobalEventHandlers, ev: Event) => any;
    onerror: OnErrorEventHandler;
    onfocus: (this: GlobalEventHandlers, ev: Event) => any;
    oninput: (this: GlobalEventHandlers, ev: Event) => any;
    oninvalid: (this: GlobalEventHandlers, ev: Event) => any;
    onkeydown: (this: GlobalEventHandlers, ev: KeyboardEvent) => any;
    onkeypress: (this: GlobalEventHandlers, ev: KeyboardEvent) => any;
    onkeyup: (this: GlobalEventHandlers, ev: KeyboardEvent) => any;
    onload: (this: GlobalEventHandlers, ev: Event) => any;
    onloadeddata: (this: GlobalEventHandlers, ev: Event) => any;
    onloadedmetadata: (this: GlobalEventHandlers, ev: Event) => any;
    onloadend: (this: GlobalEventHandlers, ev: Event) => any;
    onloadstart: (this: GlobalEventHandlers, ev: Event) => any;
    onmousedown: (this: GlobalEventHandlers, ev: MouseEvent) => any;
    onmouseenter: (this: GlobalEventHandlers, ev: MouseEvent) => any;
    onmouseleave: (this: GlobalEventHandlers, ev: MouseEvent) => any;
    onmousemove: (this: GlobalEventHandlers, ev: MouseEvent) => any;
    onmouseout: (this: GlobalEventHandlers, ev: MouseEvent) => any;
    onmouseover: (this: GlobalEventHandlers, ev: MouseEvent) => any;
    onmouseup: (this: GlobalEventHandlers, ev: MouseEvent) => any;
    onwheel: (this: GlobalEventHandlers, ev: WheelEvent) => any;
    onpause: (this: GlobalEventHandlers, ev: Event) => any;
    onplay: (this: GlobalEventHandlers, ev: Event) => any;
    onplaying: (this: GlobalEventHandlers, ev: Event) => any;
    onprogress: (this: GlobalEventHandlers, ev: Event) => any;
    onratechange: (this: GlobalEventHandlers, ev: Event) => any;
    onreset: (this: GlobalEventHandlers, ev: Event) => any;
    onresize: (this: GlobalEventHandlers, ev: Event) => any;
    onscroll: (this: GlobalEventHandlers, ev: Event) => any;
    onseeked: (this: GlobalEventHandlers, ev: Event) => any;
    onseeking: (this: GlobalEventHandlers, ev: Event) => any;
    onselect: (this: GlobalEventHandlers, ev: Event) => any;
    onshow: (this: GlobalEventHandlers, ev: RelatedEvent) => any;
    onstalled: (this: GlobalEventHandlers, ev: Event) => any;
    onsubmit: (this: GlobalEventHandlers, ev: Event) => any;
    onsuspend: (this: GlobalEventHandlers, ev: Event) => any;
    ontimeupdate: (this: GlobalEventHandlers, ev: Event) => any;
    ontoggle: (this: GlobalEventHandlers, ev: Event) => any;
    onvolumechange: (this: GlobalEventHandlers, ev: Event) => any;
    onwaiting: (this: GlobalEventHandlers, ev: Event) => any;
    onanimationstart: (this: GlobalEventHandlers, ev: AnimationEvent) => any;
    onanimationiteration: (this: GlobalEventHandlers, ev: AnimationEvent) => any;
    onanimationend: (this: GlobalEventHandlers, ev: AnimationEvent) => any;
    onanimationcancel: (this: GlobalEventHandlers, ev: AnimationEvent) => any;
    ontransitionrun: (this: GlobalEventHandlers, ev: TransitionEvent) => any;
    ontransitionstart: (this: GlobalEventHandlers, ev: TransitionEvent) => any;
    ontransitionend: (this: GlobalEventHandlers, ev: TransitionEvent) => any;
    ontransitioncancel: (this: GlobalEventHandlers, ev: TransitionEvent) => any;
    onpointerdown: (this: GlobalEventHandlers, ev: Event) => any;
    onpointermove: (this: GlobalEventHandlers, ev: Event) => any;
    onpointerup: (this: GlobalEventHandlers, ev: Event) => any;
    onpointercancel: (this: GlobalEventHandlers, ev: Event) => any;
    onpointerover: (this: GlobalEventHandlers, ev: Event) => any;
    onpointerout: (this: GlobalEventHandlers, ev: Event) => any;
    onpointerenter: (this: GlobalEventHandlers, ev: Event) => any;
    onpointerleave: (this: GlobalEventHandlers, ev: Event) => any;
    onselectstart: (this: GlobalEventHandlers, ev: Event) => any;
    onselectionchange: (this: GlobalEventHandlers, ev: Event) => any;
    ontouchstart: (this: GlobalEventHandlers, ev: TouchEvent) => any;
    ontouchend: (this: GlobalEventHandlers, ev: TouchEvent) => any;
    ontouchmove: (this: GlobalEventHandlers, ev: TouchEvent) => any;
    ontouchcancel: (this: GlobalEventHandlers, ev: TouchEvent) => any;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: GlobalEventHandlers, ev: GlobalEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

interface WindowEventHandlersEventMap {
    "afterprint": Event;
    "beforeprint": Event;
    "hashchange": HashChangeEvent;
    "languagechange": Event;
    "message": MessageEvent;
    "offline": Event;
    "online": Event;
    "pagehide": PageTransitionEvent;
    "pageshow": PageTransitionEvent;
    "popstate": PopStateEvent;
    "rejectionhandled": PromiseRejectionEvent;
    "storage": StorageEvent;
    "unhandledrejection": PromiseRejectionEvent;
    "unload": Event;
}

interface WindowEventHandlers {
    onafterprint: (this: WindowEventHandlers, ev: Event) => any;
    onbeforeprint: (this: WindowEventHandlers, ev: Event) => any;
    onbeforeunload: OnBeforeUnloadEventHandler;
    onhashchange: (this: WindowEventHandlers, ev: HashChangeEvent) => any;
    onlanguagechange: (this: WindowEventHandlers, ev: Event) => any;
    onmessage: (this: WindowEventHandlers, ev: MessageEvent) => any;
    onoffline: (this: WindowEventHandlers, ev: Event) => any;
    ononline: (this: WindowEventHandlers, ev: Event) => any;
    onpagehide: (this: WindowEventHandlers, ev: PageTransitionEvent) => any;
    onpageshow: (this: WindowEventHandlers, ev: PageTransitionEvent) => any;
    onpopstate: (this: WindowEventHandlers, ev: PopStateEvent) => any;
    onrejectionhandled: (this: WindowEventHandlers, ev: PromiseRejectionEvent) => any;
    onstorage: (this: WindowEventHandlers, ev: StorageEvent) => any;
    onunhandledrejection: (this: WindowEventHandlers, ev: PromiseRejectionEvent) => any;
    onunload: (this: WindowEventHandlers, ev: Event) => any;
    addEventListener<K extends keyof WindowEventHandlersEventMap>(type: K, listener: (this: WindowEventHandlers, ev: WindowEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

interface DocumentAndElementEventHandlersEventMap {
    "copy": Event;
    "cut": Event;
    "paste": Event;
}

interface DocumentAndElementEventHandlers {
    oncopy: (this: DocumentAndElementEventHandlers, ev: Event) => any;
    oncut: (this: DocumentAndElementEventHandlers, ev: Event) => any;
    onpaste: (this: DocumentAndElementEventHandlers, ev: Event) => any;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: DocumentAndElementEventHandlers, ev: DocumentAndElementEventHandlersEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

interface WindowOrWorkerGlobalScope {
    readonly origin: string;
    readonly caches: CacheStorage;
    btoa(data: string): string;
    atob(data: string): string;
    setTimeout(handler: (...args: any[]) => void, timeout: number): number;
    setTimeout(handler: any, timeout?: any, ...args: any[]): number;
    clearTimeout(handle?: number): void;
    setInterval(handler: (...args: any[]) => void, timeout: number): number;
    setInterval(handler: any, timeout?: any, ...args: any[]): number;
    clearInterval(handle?: number): void;
    createImageBitmap(image: ImageBitmapSource, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    createImageBitmap(image: ImageBitmapSource, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
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

interface NavigatorLanguage {
    readonly language: string;
    readonly languages: ReadonlyArray<string>;
}

interface NavigatorContentUtils {
    registerProtocolHandler(scheme: string, url: string, title: string): void;
    registerContentHandler(mimeType: string, url: string, title: string): void;
    isProtocolHandlerRegistered(scheme: string, url: string): string;
    isContentHandlerRegistered(mimeType: string, url: string): string;
    unregisterProtocolHandler(scheme: string, url: string): void;
    unregisterContentHandler(mimeType: string, url: string): void;
}

interface NavigatorCookies {
    readonly cookieEnabled: boolean;
}

interface NavigatorPlugins {
    readonly plugins: PluginArray;
    readonly mimeTypes: MimeTypeArray;
    javaEnabled(): boolean;
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

interface WindowSessionStorage {
    readonly sessionStorage: Storage;
}

interface WindowLocalStorage {
    readonly localStorage: Storage;
}

interface External {
    AddSearchProvider(): void;
    IsSearchProviderInstalled(): void;
}

interface IDBEnvironment {
    readonly indexedDB: IDBFactory;
}

interface NavigatorUserMedia {
    readonly mediaDevices: MediaDevices;
    getUserMedia(constraints: MediaStreamConstraints, successCallback: NavigatorUserMediaSuccessCallback, errorCallback: NavigatorUserMediaErrorCallback): void;
}

interface ConstrainablePatternEventMap {
    "overconstrained": OverconstrainedErrorEvent;
}

interface ConstrainablePattern {
    onoverconstrained: (this: ConstrainablePattern, ev: OverconstrainedErrorEvent) => any;
    getCapabilities(): Capabilities;
    getConstraints(): Constraints;
    getSettings(): Settings;
    applyConstraints(constraints?: Constraints): Promise<void>;
    addEventListener<K extends keyof ConstrainablePatternEventMap>(type: K, listener: (this: ConstrainablePattern, ev: ConstrainablePatternEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

interface SVGTests {
    readonly requiredExtensions: SVGStringList;
    readonly systemLanguage: SVGStringList;
}

interface SVGFitToViewBox {
    readonly viewBox: SVGAnimatedRect;
    readonly preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
}

interface SVGZoomAndPan {
    zoomAndPan: number;
    readonly SVG_ZOOMANDPAN_UNKNOWN: number;
    readonly SVG_ZOOMANDPAN_DISABLE: number;
    readonly SVG_ZOOMANDPAN_MAGNIFY: number;
}

interface SVGURIReference {
    readonly href: SVGAnimatedString;
}

interface SVGElementInstance {
    readonly correspondingElement: SVGElement | null;
    readonly correspondingUseElement: SVGUseElement | null;
}

interface GetSVGDocument {
    getSVGDocument(): Document;
}

interface SVGAnimatedPoints {
    readonly points: SVGPointList;
    readonly animatedPoints: SVGPointList;
}

interface Animatable {
    animate(keyframes: any, options?: number | KeyframeAnimationOptions): Animation;
    getAnimations(): Animation[];
}

interface GlobalCrypto {
    readonly crypto: Crypto;
}

interface SpeechSynthesisGetter {
    readonly speechSynthesis: SpeechSynthesis;
}

interface WebGLRenderingContextBase {
    readonly canvas: HTMLCanvasElement;
    readonly drawingBufferWidth: GLsizei;
    readonly drawingBufferHeight: GLsizei;
    getContextAttributes(): WebGLContextAttributes | null;
    isContextLost(): boolean;
    getSupportedExtensions(): string[] | null;
    getExtension(name: string): any;
    activeTexture(texture: GLenum): void;
    attachShader(program: WebGLProgram, shader: WebGLShader): void;
    bindAttribLocation(program: WebGLProgram, index: GLuint, name: string): void;
    bindBuffer(target: GLenum, buffer: WebGLBuffer | null): void;
    bindFramebuffer(target: GLenum, framebuffer: WebGLFramebuffer | null): void;
    bindRenderbuffer(target: GLenum, renderbuffer: WebGLRenderbuffer | null): void;
    bindTexture(target: GLenum, texture: WebGLTexture | null): void;
    blendColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
    blendEquation(mode: GLenum): void;
    blendEquationSeparate(modeRGB: GLenum, modeAlpha: GLenum): void;
    blendFunc(sfactor: GLenum, dfactor: GLenum): void;
    blendFuncSeparate(srcRGB: GLenum, dstRGB: GLenum, srcAlpha: GLenum, dstAlpha: GLenum): void;
    bufferData(target: GLenum, size: GLsizeiptr, usage: GLenum): void;
    bufferData(target: GLenum, data: ArrayBuffer | null, usage: GLenum): void;
    bufferData(target: GLenum, data: ArrayBufferView, usage: GLenum): void;
    bufferSubData(target: GLenum, offset: GLintptr, data: BufferDataSource): void;
    checkFramebufferStatus(target: GLenum): GLenum;
    clear(mask: GLbitfield): void;
    clearColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
    clearDepth(depth: GLclampf): void;
    clearStencil(s: GLint): void;
    colorMask(red: GLboolean, green: GLboolean, blue: GLboolean, alpha: GLboolean): void;
    compileShader(shader: WebGLShader): void;
    compressedTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, border: GLint, data: ArrayBufferView): void;
    compressedTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, data: ArrayBufferView): void;
    copyTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, x: GLint, y: GLint, width: GLsizei, height: GLsizei, border: GLint): void;
    copyTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    createBuffer(): WebGLBuffer | null;
    createFramebuffer(): WebGLFramebuffer | null;
    createProgram(): WebGLProgram | null;
    createRenderbuffer(): WebGLRenderbuffer | null;
    createShader(type: GLenum): WebGLShader | null;
    createTexture(): WebGLTexture | null;
    cullFace(mode: GLenum): void;
    deleteBuffer(buffer: WebGLBuffer | null): void;
    deleteFramebuffer(framebuffer: WebGLFramebuffer | null): void;
    deleteProgram(program: WebGLProgram | null): void;
    deleteRenderbuffer(renderbuffer: WebGLRenderbuffer | null): void;
    deleteShader(shader: WebGLShader | null): void;
    deleteTexture(texture: WebGLTexture | null): void;
    depthFunc(func: GLenum): void;
    depthMask(flag: GLboolean): void;
    depthRange(zNear: GLclampf, zFar: GLclampf): void;
    detachShader(program: WebGLProgram, shader: WebGLShader): void;
    disable(cap: GLenum): void;
    disableVertexAttribArray(index: GLuint): void;
    drawArrays(mode: GLenum, first: GLint, count: GLsizei): void;
    drawElements(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr): void;
    enable(cap: GLenum): void;
    enableVertexAttribArray(index: GLuint): void;
    finish(): void;
    flush(): void;
    framebufferRenderbuffer(target: GLenum, attachment: GLenum, renderbuffertarget: GLenum, renderbuffer: WebGLRenderbuffer | null): void;
    framebufferTexture2D(target: GLenum, attachment: GLenum, textarget: GLenum, texture: WebGLTexture | null, level: GLint): void;
    frontFace(mode: GLenum): void;
    generateMipmap(target: GLenum): void;
    getActiveAttrib(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
    getActiveUniform(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
    getAttachedShaders(program: WebGLProgram): WebGLShader[] | null;
    getAttribLocation(program: WebGLProgram, name: string): GLint;
    getBufferParameter(target: GLenum, pname: GLenum): any;
    getParameter(pname: GLenum): any;
    getError(): GLenum;
    getFramebufferAttachmentParameter(target: GLenum, attachment: GLenum, pname: GLenum): any;
    getProgramParameter(program: WebGLProgram, pname: GLenum): any;
    getProgramInfoLog(program: WebGLProgram): string | null;
    getRenderbufferParameter(target: GLenum, pname: GLenum): any;
    getShaderParameter(shader: WebGLShader, pname: GLenum): any;
    getShaderPrecisionFormat(shadertype: GLenum, precisiontype: GLenum): WebGLShaderPrecisionFormat | null;
    getShaderInfoLog(shader: WebGLShader): string | null;
    getShaderSource(shader: WebGLShader): string | null;
    getTexParameter(target: GLenum, pname: GLenum): any;
    getUniform(program: WebGLProgram, location: WebGLUniformLocation): any;
    getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation | null;
    getVertexAttrib(index: GLuint, pname: GLenum): any;
    getVertexAttribOffset(index: GLuint, pname: GLenum): GLintptr;
    hint(target: GLenum, mode: GLenum): void;
    isBuffer(buffer: WebGLBuffer | null): GLboolean;
    isEnabled(cap: GLenum): GLboolean;
    isFramebuffer(framebuffer: WebGLFramebuffer | null): GLboolean;
    isProgram(program: WebGLProgram | null): GLboolean;
    isRenderbuffer(renderbuffer: WebGLRenderbuffer | null): GLboolean;
    isShader(shader: WebGLShader | null): GLboolean;
    isTexture(texture: WebGLTexture | null): GLboolean;
    lineWidth(width: GLfloat): void;
    linkProgram(program: WebGLProgram): void;
    pixelStorei(pname: GLenum, param: GLint): void;
    polygonOffset(factor: GLfloat, units: GLfloat): void;
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    renderbufferStorage(target: GLenum, internalformat: GLenum, width: GLsizei, height: GLsizei): void;
    sampleCoverage(value: GLclampf, invert: GLboolean): void;
    scissor(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    shaderSource(shader: WebGLShader, source: string): void;
    stencilFunc(func: GLenum, ref: GLint, mask: GLuint): void;
    stencilFuncSeparate(face: GLenum, func: GLenum, ref: GLint, mask: GLuint): void;
    stencilMask(mask: GLuint): void;
    stencilMaskSeparate(face: GLenum, mask: GLuint): void;
    stencilOp(fail: GLenum, zfail: GLenum, zpass: GLenum): void;
    stencilOpSeparate(face: GLenum, fail: GLenum, zfail: GLenum, zpass: GLenum): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    texParameterf(target: GLenum, pname: GLenum, param: GLfloat): void;
    texParameteri(target: GLenum, pname: GLenum, param: GLint): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    uniform1f(location: WebGLUniformLocation | null, x: GLfloat): void;
    uniform2f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat): void;
    uniform3f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat): void;
    uniform4f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;
    uniform1i(location: WebGLUniformLocation | null, x: GLint): void;
    uniform2i(location: WebGLUniformLocation | null, x: GLint, y: GLint): void;
    uniform3i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint): void;
    uniform4i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint, w: GLint): void;
    uniform1fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform2fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform3fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform4fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform1iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniform2iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniform3iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniform4iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
    uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
    uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
    useProgram(program: WebGLProgram | null): void;
    validateProgram(program: WebGLProgram): void;
    vertexAttrib1f(index: GLuint, x: GLfloat): void;
    vertexAttrib2f(index: GLuint, x: GLfloat, y: GLfloat): void;
    vertexAttrib3f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat): void;
    vertexAttrib4f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;
    vertexAttrib1fv(index: GLuint, values: Float32List): void;
    vertexAttrib2fv(index: GLuint, values: Float32List): void;
    vertexAttrib3fv(index: GLuint, values: Float32List): void;
    vertexAttrib4fv(index: GLuint, values: Float32List): void;
    vertexAttribPointer(index: GLuint, size: GLint, type: GLenum, normalized: GLboolean, stride: GLsizei, offset: GLintptr): void;
    viewport(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    readonly DEPTH_BUFFER_BIT: GLenum;
    readonly STENCIL_BUFFER_BIT: GLenum;
    readonly COLOR_BUFFER_BIT: GLenum;
    readonly POINTS: GLenum;
    readonly LINES: GLenum;
    readonly LINE_LOOP: GLenum;
    readonly LINE_STRIP: GLenum;
    readonly TRIANGLES: GLenum;
    readonly TRIANGLE_STRIP: GLenum;
    readonly TRIANGLE_FAN: GLenum;
    readonly ZERO: GLenum;
    readonly ONE: GLenum;
    readonly SRC_COLOR: GLenum;
    readonly ONE_MINUS_SRC_COLOR: GLenum;
    readonly SRC_ALPHA: GLenum;
    readonly ONE_MINUS_SRC_ALPHA: GLenum;
    readonly DST_ALPHA: GLenum;
    readonly ONE_MINUS_DST_ALPHA: GLenum;
    readonly DST_COLOR: GLenum;
    readonly ONE_MINUS_DST_COLOR: GLenum;
    readonly SRC_ALPHA_SATURATE: GLenum;
    readonly FUNC_ADD: GLenum;
    readonly BLEND_EQUATION: GLenum;
    readonly BLEND_EQUATION_RGB: GLenum;
    readonly BLEND_EQUATION_ALPHA: GLenum;
    readonly FUNC_SUBTRACT: GLenum;
    readonly FUNC_REVERSE_SUBTRACT: GLenum;
    readonly BLEND_DST_RGB: GLenum;
    readonly BLEND_SRC_RGB: GLenum;
    readonly BLEND_DST_ALPHA: GLenum;
    readonly BLEND_SRC_ALPHA: GLenum;
    readonly CONSTANT_COLOR: GLenum;
    readonly ONE_MINUS_CONSTANT_COLOR: GLenum;
    readonly CONSTANT_ALPHA: GLenum;
    readonly ONE_MINUS_CONSTANT_ALPHA: GLenum;
    readonly BLEND_COLOR: GLenum;
    readonly ARRAY_BUFFER: GLenum;
    readonly ELEMENT_ARRAY_BUFFER: GLenum;
    readonly ARRAY_BUFFER_BINDING: GLenum;
    readonly ELEMENT_ARRAY_BUFFER_BINDING: GLenum;
    readonly STREAM_DRAW: GLenum;
    readonly STATIC_DRAW: GLenum;
    readonly DYNAMIC_DRAW: GLenum;
    readonly BUFFER_SIZE: GLenum;
    readonly BUFFER_USAGE: GLenum;
    readonly CURRENT_VERTEX_ATTRIB: GLenum;
    readonly FRONT: GLenum;
    readonly BACK: GLenum;
    readonly FRONT_AND_BACK: GLenum;
    readonly CULL_FACE: GLenum;
    readonly BLEND: GLenum;
    readonly DITHER: GLenum;
    readonly STENCIL_TEST: GLenum;
    readonly DEPTH_TEST: GLenum;
    readonly SCISSOR_TEST: GLenum;
    readonly POLYGON_OFFSET_FILL: GLenum;
    readonly SAMPLE_ALPHA_TO_COVERAGE: GLenum;
    readonly SAMPLE_COVERAGE: GLenum;
    readonly NO_ERROR: GLenum;
    readonly INVALID_ENUM: GLenum;
    readonly INVALID_VALUE: GLenum;
    readonly INVALID_OPERATION: GLenum;
    readonly OUT_OF_MEMORY: GLenum;
    readonly CW: GLenum;
    readonly CCW: GLenum;
    readonly LINE_WIDTH: GLenum;
    readonly ALIASED_POINT_SIZE_RANGE: GLenum;
    readonly ALIASED_LINE_WIDTH_RANGE: GLenum;
    readonly CULL_FACE_MODE: GLenum;
    readonly FRONT_FACE: GLenum;
    readonly DEPTH_RANGE: GLenum;
    readonly DEPTH_WRITEMASK: GLenum;
    readonly DEPTH_CLEAR_VALUE: GLenum;
    readonly DEPTH_FUNC: GLenum;
    readonly STENCIL_CLEAR_VALUE: GLenum;
    readonly STENCIL_FUNC: GLenum;
    readonly STENCIL_FAIL: GLenum;
    readonly STENCIL_PASS_DEPTH_FAIL: GLenum;
    readonly STENCIL_PASS_DEPTH_PASS: GLenum;
    readonly STENCIL_REF: GLenum;
    readonly STENCIL_VALUE_MASK: GLenum;
    readonly STENCIL_WRITEMASK: GLenum;
    readonly STENCIL_BACK_FUNC: GLenum;
    readonly STENCIL_BACK_FAIL: GLenum;
    readonly STENCIL_BACK_PASS_DEPTH_FAIL: GLenum;
    readonly STENCIL_BACK_PASS_DEPTH_PASS: GLenum;
    readonly STENCIL_BACK_REF: GLenum;
    readonly STENCIL_BACK_VALUE_MASK: GLenum;
    readonly STENCIL_BACK_WRITEMASK: GLenum;
    readonly VIEWPORT: GLenum;
    readonly SCISSOR_BOX: GLenum;
    readonly COLOR_CLEAR_VALUE: GLenum;
    readonly COLOR_WRITEMASK: GLenum;
    readonly UNPACK_ALIGNMENT: GLenum;
    readonly PACK_ALIGNMENT: GLenum;
    readonly MAX_TEXTURE_SIZE: GLenum;
    readonly MAX_VIEWPORT_DIMS: GLenum;
    readonly SUBPIXEL_BITS: GLenum;
    readonly RED_BITS: GLenum;
    readonly GREEN_BITS: GLenum;
    readonly BLUE_BITS: GLenum;
    readonly ALPHA_BITS: GLenum;
    readonly DEPTH_BITS: GLenum;
    readonly STENCIL_BITS: GLenum;
    readonly POLYGON_OFFSET_UNITS: GLenum;
    readonly POLYGON_OFFSET_FACTOR: GLenum;
    readonly TEXTURE_BINDING_2D: GLenum;
    readonly SAMPLE_BUFFERS: GLenum;
    readonly SAMPLES: GLenum;
    readonly SAMPLE_COVERAGE_VALUE: GLenum;
    readonly SAMPLE_COVERAGE_INVERT: GLenum;
    readonly COMPRESSED_TEXTURE_FORMATS: GLenum;
    readonly DONT_CARE: GLenum;
    readonly FASTEST: GLenum;
    readonly NICEST: GLenum;
    readonly GENERATE_MIPMAP_HINT: GLenum;
    readonly BYTE: GLenum;
    readonly UNSIGNED_BYTE: GLenum;
    readonly SHORT: GLenum;
    readonly UNSIGNED_SHORT: GLenum;
    readonly INT: GLenum;
    readonly UNSIGNED_INT: GLenum;
    readonly FLOAT: GLenum;
    readonly DEPTH_COMPONENT: GLenum;
    readonly ALPHA: GLenum;
    readonly RGB: GLenum;
    readonly RGBA: GLenum;
    readonly LUMINANCE: GLenum;
    readonly LUMINANCE_ALPHA: GLenum;
    readonly UNSIGNED_SHORT_4_4_4_4: GLenum;
    readonly UNSIGNED_SHORT_5_5_5_1: GLenum;
    readonly UNSIGNED_SHORT_5_6_5: GLenum;
    readonly FRAGMENT_SHADER: GLenum;
    readonly VERTEX_SHADER: GLenum;
    readonly MAX_VERTEX_ATTRIBS: GLenum;
    readonly MAX_VERTEX_UNIFORM_VECTORS: GLenum;
    readonly MAX_VARYING_VECTORS: GLenum;
    readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: GLenum;
    readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: GLenum;
    readonly MAX_TEXTURE_IMAGE_UNITS: GLenum;
    readonly MAX_FRAGMENT_UNIFORM_VECTORS: GLenum;
    readonly SHADER_TYPE: GLenum;
    readonly DELETE_STATUS: GLenum;
    readonly LINK_STATUS: GLenum;
    readonly VALIDATE_STATUS: GLenum;
    readonly ATTACHED_SHADERS: GLenum;
    readonly ACTIVE_UNIFORMS: GLenum;
    readonly ACTIVE_ATTRIBUTES: GLenum;
    readonly SHADING_LANGUAGE_VERSION: GLenum;
    readonly CURRENT_PROGRAM: GLenum;
    readonly NEVER: GLenum;
    readonly LESS: GLenum;
    readonly EQUAL: GLenum;
    readonly LEQUAL: GLenum;
    readonly GREATER: GLenum;
    readonly NOTEQUAL: GLenum;
    readonly GEQUAL: GLenum;
    readonly ALWAYS: GLenum;
    readonly KEEP: GLenum;
    readonly REPLACE: GLenum;
    readonly INCR: GLenum;
    readonly DECR: GLenum;
    readonly INVERT: GLenum;
    readonly INCR_WRAP: GLenum;
    readonly DECR_WRAP: GLenum;
    readonly VENDOR: GLenum;
    readonly RENDERER: GLenum;
    readonly VERSION: GLenum;
    readonly NEAREST: GLenum;
    readonly LINEAR: GLenum;
    readonly NEAREST_MIPMAP_NEAREST: GLenum;
    readonly LINEAR_MIPMAP_NEAREST: GLenum;
    readonly NEAREST_MIPMAP_LINEAR: GLenum;
    readonly LINEAR_MIPMAP_LINEAR: GLenum;
    readonly TEXTURE_MAG_FILTER: GLenum;
    readonly TEXTURE_MIN_FILTER: GLenum;
    readonly TEXTURE_WRAP_S: GLenum;
    readonly TEXTURE_WRAP_T: GLenum;
    readonly TEXTURE_2D: GLenum;
    readonly TEXTURE: GLenum;
    readonly TEXTURE_CUBE_MAP: GLenum;
    readonly TEXTURE_BINDING_CUBE_MAP: GLenum;
    readonly TEXTURE_CUBE_MAP_POSITIVE_X: GLenum;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_X: GLenum;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Y: GLenum;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: GLenum;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Z: GLenum;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: GLenum;
    readonly MAX_CUBE_MAP_TEXTURE_SIZE: GLenum;
    readonly TEXTURE0: GLenum;
    readonly TEXTURE1: GLenum;
    readonly TEXTURE2: GLenum;
    readonly TEXTURE3: GLenum;
    readonly TEXTURE4: GLenum;
    readonly TEXTURE5: GLenum;
    readonly TEXTURE6: GLenum;
    readonly TEXTURE7: GLenum;
    readonly TEXTURE8: GLenum;
    readonly TEXTURE9: GLenum;
    readonly TEXTURE10: GLenum;
    readonly TEXTURE11: GLenum;
    readonly TEXTURE12: GLenum;
    readonly TEXTURE13: GLenum;
    readonly TEXTURE14: GLenum;
    readonly TEXTURE15: GLenum;
    readonly TEXTURE16: GLenum;
    readonly TEXTURE17: GLenum;
    readonly TEXTURE18: GLenum;
    readonly TEXTURE19: GLenum;
    readonly TEXTURE20: GLenum;
    readonly TEXTURE21: GLenum;
    readonly TEXTURE22: GLenum;
    readonly TEXTURE23: GLenum;
    readonly TEXTURE24: GLenum;
    readonly TEXTURE25: GLenum;
    readonly TEXTURE26: GLenum;
    readonly TEXTURE27: GLenum;
    readonly TEXTURE28: GLenum;
    readonly TEXTURE29: GLenum;
    readonly TEXTURE30: GLenum;
    readonly TEXTURE31: GLenum;
    readonly ACTIVE_TEXTURE: GLenum;
    readonly REPEAT: GLenum;
    readonly CLAMP_TO_EDGE: GLenum;
    readonly MIRRORED_REPEAT: GLenum;
    readonly FLOAT_VEC2: GLenum;
    readonly FLOAT_VEC3: GLenum;
    readonly FLOAT_VEC4: GLenum;
    readonly INT_VEC2: GLenum;
    readonly INT_VEC3: GLenum;
    readonly INT_VEC4: GLenum;
    readonly BOOL: GLenum;
    readonly BOOL_VEC2: GLenum;
    readonly BOOL_VEC3: GLenum;
    readonly BOOL_VEC4: GLenum;
    readonly FLOAT_MAT2: GLenum;
    readonly FLOAT_MAT3: GLenum;
    readonly FLOAT_MAT4: GLenum;
    readonly SAMPLER_2D: GLenum;
    readonly SAMPLER_CUBE: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_ENABLED: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_SIZE: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_STRIDE: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_TYPE: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_POINTER: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: GLenum;
    readonly IMPLEMENTATION_COLOR_READ_TYPE: GLenum;
    readonly IMPLEMENTATION_COLOR_READ_FORMAT: GLenum;
    readonly COMPILE_STATUS: GLenum;
    readonly LOW_FLOAT: GLenum;
    readonly MEDIUM_FLOAT: GLenum;
    readonly HIGH_FLOAT: GLenum;
    readonly LOW_INT: GLenum;
    readonly MEDIUM_INT: GLenum;
    readonly HIGH_INT: GLenum;
    readonly FRAMEBUFFER: GLenum;
    readonly RENDERBUFFER: GLenum;
    readonly RGBA4: GLenum;
    readonly RGB5_A1: GLenum;
    readonly RGB565: GLenum;
    readonly DEPTH_COMPONENT16: GLenum;
    readonly STENCIL_INDEX: GLenum;
    readonly STENCIL_INDEX8: GLenum;
    readonly DEPTH_STENCIL: GLenum;
    readonly RENDERBUFFER_WIDTH: GLenum;
    readonly RENDERBUFFER_HEIGHT: GLenum;
    readonly RENDERBUFFER_INTERNAL_FORMAT: GLenum;
    readonly RENDERBUFFER_RED_SIZE: GLenum;
    readonly RENDERBUFFER_GREEN_SIZE: GLenum;
    readonly RENDERBUFFER_BLUE_SIZE: GLenum;
    readonly RENDERBUFFER_ALPHA_SIZE: GLenum;
    readonly RENDERBUFFER_DEPTH_SIZE: GLenum;
    readonly RENDERBUFFER_STENCIL_SIZE: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: GLenum;
    readonly COLOR_ATTACHMENT0: GLenum;
    readonly DEPTH_ATTACHMENT: GLenum;
    readonly STENCIL_ATTACHMENT: GLenum;
    readonly DEPTH_STENCIL_ATTACHMENT: GLenum;
    readonly NONE: GLenum;
    readonly FRAMEBUFFER_COMPLETE: GLenum;
    readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: GLenum;
    readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: GLenum;
    readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: GLenum;
    readonly FRAMEBUFFER_UNSUPPORTED: GLenum;
    readonly FRAMEBUFFER_BINDING: GLenum;
    readonly RENDERBUFFER_BINDING: GLenum;
    readonly MAX_RENDERBUFFER_SIZE: GLenum;
    readonly INVALID_FRAMEBUFFER_OPERATION: GLenum;
    readonly UNPACK_FLIP_Y_WEBGL: GLenum;
    readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: GLenum;
    readonly CONTEXT_LOST_WEBGL: GLenum;
    readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: GLenum;
    readonly BROWSER_DEFAULT_WEBGL: GLenum;
}

interface ANGLE_instanced_arrays {
    drawArraysInstancedANGLE(mode: GLenum, first: GLint, count: GLsizei, primcount: GLsizei): void;
    drawElementsInstancedANGLE(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr, primcount: GLsizei): void;
    vertexAttribDivisorANGLE(index: GLuint, divisor: GLuint): void;
    readonly VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE: GLenum;
}

interface EXT_frag_depth {
}

interface EXT_texture_filter_anisotropic {
    readonly TEXTURE_MAX_ANISOTROPY_EXT: GLenum;
    readonly MAX_TEXTURE_MAX_ANISOTROPY_EXT: GLenum;
}

interface OES_element_index_uint {
}

interface OES_standard_derivatives {
    readonly FRAGMENT_SHADER_DERIVATIVE_HINT_OES: GLenum;
}

interface OES_texture_float {
}

interface OES_texture_float_linear {
}

interface OES_texture_half_float {
    readonly HALF_FLOAT_OES: GLenum;
}

interface OES_texture_half_float_linear {
}

interface WEBGL_compressed_texture_s3tc {
    readonly COMPRESSED_RGB_S3TC_DXT1_EXT: GLenum;
    readonly COMPRESSED_RGBA_S3TC_DXT1_EXT: GLenum;
    readonly COMPRESSED_RGBA_S3TC_DXT3_EXT: GLenum;
    readonly COMPRESSED_RGBA_S3TC_DXT5_EXT: GLenum;
}

interface WEBGL_debug_renderer_info {
    readonly UNMASKED_VENDOR_WEBGL: GLenum;
    readonly UNMASKED_RENDERER_WEBGL: GLenum;
}

interface WEBGL_depth_texture {
    readonly UNSIGNED_INT_24_8_WEBGL: GLenum;
}

interface CSSPseudoElement extends Object, GeometryUtils, Animatable {
}

interface WorkerUtils extends Object, IDBEnvironment {
}

declare namespace console {
    function assert(condition?: boolean, ...data: any[]): void;
    function clear(): void;
    function count(label?: string): void;
    function debug(...data: any[]): void;
    function error(...data: any[]): void;
    function info(...data: any[]): void;
    function log(...data: any[]): void;
    function table(tabularData: any, properties?: string[]): void;
    function trace(...data: any[]): void;
    function warn(...data: any[]): void;
    function dir(item: any, options?: any): void;
    function dirxml(...data: any[]): void;
    function group(...data: any[]): void;
    function groupCollapsed(...data: any[]): void;
    function groupEnd(): void;
    function time(label?: string): void;
    function timeEnd(label?: string): void;
}

interface ErrorEventInit {
    message?: string;
    filename?: string;
    lineno?: number;
    conlno?: number;
    error?: any;
}

interface Canvas2DContextAttributes {
    alpha?: boolean;
    willReadFrequently?: boolean;
    storage?: boolean;
    [attribute: string]: boolean | string | undefined;
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

interface NodeListOf<TNode extends Node> extends NodeList {
    length: number;
    item(index: number): TNode;
    [index: number]: TNode;
}

interface HTMLCollectionOf<T extends Element> extends HTMLCollection {
    item(index: number): T;
    namedItem(name: string): T;
    [index: number]: T;
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

interface ClipboardEventInit extends EventInit {
    data?: string;
    dataType?: string;
}

interface IDBArrayKey extends Array<IDBValidKey> {
}

interface ParentNode {
    readonly children: HTMLCollection;
    readonly firstElementChild: Element | null;
    readonly lastElementChild: Element | null;
    readonly childElementCount: number;
}

interface DocumentOrShadowRoot {
    readonly activeElement: Element | null;
    readonly stylesheets: StyleSheetList;
    getSelection(): Selection | null;
    elementFromPoint(x: number, y: number): Element | null;
    elementsFromPoint(x: number, y: number): Element[];
}

interface ShadowRoot extends DocumentOrShadowRoot, DocumentFragment {
    readonly host: Element;
    innerHTML: string;
}

interface HTMLSlotElement extends HTMLElement {
    name: string;
    assignedNodes(options?: AssignedNodesOptions): Node[];
}

interface AssignedNodesOptions {
    flatten?: boolean;
}

declare type EventListenerOrEventListenerObject = EventListener | EventListenerObject;

interface MutationCallback {
    (mutations: MutationRecord[], observer: MutationObserver): void;
}
interface PositionCallback {
    (position: Position): void;
}
interface PositionErrorCallback {
    (positionError: PositionError): void;
}
interface BlobCallback {
    (blob: Blob | null): void;
}
interface FunctionStringCallback {
    (data: string): void;
}
interface FrameRequestCallback {
    (time: number): void;
}
interface EventHandlerNonNull {
    (event: Event): any;
}
interface OnErrorEventHandlerNonNull {
    (event: Event | string, source?: string, lineno?: number, colno?: number, error?: any): any;
}
interface OnBeforeUnloadEventHandlerNonNull {
    (event: Event): string;
}
interface IntersectionObserverCallback {
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void;
}
interface NavigatorUserMediaSuccessCallback {
    (stream: MediaStream): void;
}
interface NavigatorUserMediaErrorCallback {
    (error: MediaStreamError): void;
}
interface NotificationPermissionCallback {
    (permission: NotificationPermission): void;
}
interface PerformanceObserverCallback {
    (entries: PerformanceObserverEntryList, observer: PerformanceObserver): void;
}
interface DecodeErrorCallback {
    (error: Error): void;
}
interface DecodeSuccessCallback {
    (decodedData: AudioBuffer): void;
}
interface RTCPeerConnectionErrorCallback {
    (error: Error): void;
}
interface RTCSessionDescriptionCallback {
    (description: RTCSessionDescriptionInit): void;
}
interface RTCStatsCallback {
    (report: RTCStatsReport): void;
}
interface GenerateAssertionCallback {
    (contents: string, origin: string, options: RTCIdentityProviderOptions): Promise<RTCIdentityAssertionResult>;
}
interface ValidateAssertionCallback {
    (assertion: string, origin: string): Promise<RTCIdentityValidationResult>;
}
interface Function {
    (...arguments: any[]): any;
}
interface VoidFunction {
    (): void;
}
interface HTMLElementTagNameMap {
}

interface ElementTagNameMap {
}

interface ElementListTagNameMap {
}

declare var Image: {new (width?: number, height?: number): HTMLImageElement; };
declare var Audio: {new (src?: string): HTMLAudioElement; };
declare var Option: {new (text?: string, value?: string, defaultSelected?: boolean, selected?: boolean): HTMLOptionElement; };
declare var window: any;
declare var self: any;
declare var document: Document;
declare const name: never;
declare var location: Location;
declare var history: History;
declare var customElements: CustomElementRegistry;
declare var locationbar: BarProp;
declare var menubar: BarProp;
declare var personalbar: BarProp;
declare var scrollbars: BarProp;
declare var statusbar: BarProp;
declare var toolbar: BarProp;
declare var status: string;
declare var closed: boolean;
declare var frames: any;
declare var length: number;
declare var top: any;
declare var opener: any;
declare var parent: any;
declare var frameElement: Element | null;
declare var navigator: Navigator;
declare var applicationCache: ApplicationCache;
declare var external: External;
declare var screen: Screen;
declare var innerWidth: number;
declare var innerHeight: number;
declare var scrollX: number;
declare var pageXOffset: number;
declare var scrollY: number;
declare var pageYOffset: number;
declare var screenX: number;
declare var screenY: number;
declare var outerWidth: number;
declare var outerHeight: number;
declare var devicePixelRatio: number;
declare var ondeviceorientation: (this: Window, ev: Event) => any;
declare var ondevicemotion: (this: Window, ev: Event) => any;
declare var audioWorklet: Worklet;
declare function close(): void;
declare function stop(): void;
declare function focus(): void;
declare function blur(): void;
declare function open(url?: string, target?: string, features?: string, replace?: boolean): Window;
declare function alert(message?: any): void;
declare function alert(message?: any): void;
declare function confirm(message?: string): boolean;
declare function prompt(message?: string, _default?: string): string | null;
declare function print(): void;
declare function requestAnimationFrame(callback: FrameRequestCallback): number;
declare function cancelAnimationFrame(handle: number): void;
declare function postMessage(message: any, targetOrigin: string, transfer?: any[]): void;
declare function captureEvents(): void;
declare function releaseEvents(): void;
declare function getComputedStyle(elt: Element, pseudoElt?: string): CSSStyleDeclaration;
declare function matchMedia(query: string): MediaQueryList;
declare function moveTo(x: number, y: number): void;
declare function moveBy(x: number, y: number): void;
declare function resizeTo(x: number, y: number): void;
declare function resizeBy(x: number, y: number): void;
declare function scroll(options?: ScrollToOptions): void;
declare function scroll(x: number, y: number): void;
declare function scrollTo(options?: ScrollToOptions): void;
declare function scrollTo(x: number, y: number): void;
declare function scrollBy(options?: ScrollToOptions): void;
declare function scrollBy(x: number, y: number): void;
declare function getSelection(): Selection | null;
declare function createImageBitmap(image: HTMLImageElement | SVGImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | ImageData | Blob, options?: ImageBitmapOptions): Promise<ImageBitmap>;
declare function createImageBitmap(image: HTMLImageElement | SVGImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | ImageData | Blob, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;
declare function toString(): string;
declare function removeEventListener(type: string, listener?: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
declare function dispatchEvent(event: Event): boolean;
declare var onabort: (this: Window, ev: Event) => any;
declare var onauxclick: (this: Window, ev: MouseEvent) => any;
declare var onblur: (this: Window, ev: Event) => any;
declare var oncancel: (this: Window, ev: Event) => any;
declare var oncanplay: (this: Window, ev: Event) => any;
declare var oncanplaythrough: (this: Window, ev: Event) => any;
declare var onchange: (this: Window, ev: Event) => any;
declare var onclick: (this: Window, ev: MouseEvent) => any;
declare var onclose: (this: Window, ev: Event) => any;
declare var oncontextmenu: (this: Window, ev: MouseEvent) => any;
declare var oncuechange: (this: Window, ev: Event) => any;
declare var ondblclick: (this: Window, ev: MouseEvent) => any;
declare var ondrag: (this: Window, ev: DragEvent) => any;
declare var ondragend: (this: Window, ev: DragEvent) => any;
declare var ondragenter: (this: Window, ev: DragEvent) => any;
declare var ondragexit: (this: Window, ev: DragEvent) => any;
declare var ondragleave: (this: Window, ev: DragEvent) => any;
declare var ondragover: (this: Window, ev: DragEvent) => any;
declare var ondragstart: (this: Window, ev: DragEvent) => any;
declare var ondrop: (this: Window, ev: DragEvent) => any;
declare var ondurationchange: (this: Window, ev: Event) => any;
declare var onemptied: (this: Window, ev: Event) => any;
declare var onended: (this: Window, ev: Event) => any;
declare var onerror: OnErrorEventHandler;
declare var onfocus: (this: Window, ev: Event) => any;
declare var oninput: (this: Window, ev: Event) => any;
declare var oninvalid: (this: Window, ev: Event) => any;
declare var onkeydown: (this: Window, ev: KeyboardEvent) => any;
declare var onkeypress: (this: Window, ev: KeyboardEvent) => any;
declare var onkeyup: (this: Window, ev: KeyboardEvent) => any;
declare var onload: (this: Window, ev: Event) => any;
declare var onloadeddata: (this: Window, ev: Event) => any;
declare var onloadedmetadata: (this: Window, ev: Event) => any;
declare var onloadend: (this: Window, ev: Event) => any;
declare var onloadstart: (this: Window, ev: Event) => any;
declare var onmousedown: (this: Window, ev: MouseEvent) => any;
declare var onmouseenter: (this: Window, ev: MouseEvent) => any;
declare var onmouseleave: (this: Window, ev: MouseEvent) => any;
declare var onmousemove: (this: Window, ev: MouseEvent) => any;
declare var onmouseout: (this: Window, ev: MouseEvent) => any;
declare var onmouseover: (this: Window, ev: MouseEvent) => any;
declare var onmouseup: (this: Window, ev: MouseEvent) => any;
declare var onwheel: (this: Window, ev: WheelEvent) => any;
declare var onpause: (this: Window, ev: Event) => any;
declare var onplay: (this: Window, ev: Event) => any;
declare var onplaying: (this: Window, ev: Event) => any;
declare var onprogress: (this: Window, ev: Event) => any;
declare var onratechange: (this: Window, ev: Event) => any;
declare var onreset: (this: Window, ev: Event) => any;
declare var onresize: (this: Window, ev: Event) => any;
declare var onscroll: (this: Window, ev: Event) => any;
declare var onseeked: (this: Window, ev: Event) => any;
declare var onseeking: (this: Window, ev: Event) => any;
declare var onselect: (this: Window, ev: Event) => any;
declare var onshow: (this: Window, ev: RelatedEvent) => any;
declare var onstalled: (this: Window, ev: Event) => any;
declare var onsubmit: (this: Window, ev: Event) => any;
declare var onsuspend: (this: Window, ev: Event) => any;
declare var ontimeupdate: (this: Window, ev: Event) => any;
declare var ontoggle: (this: Window, ev: Event) => any;
declare var onvolumechange: (this: Window, ev: Event) => any;
declare var onwaiting: (this: Window, ev: Event) => any;
declare var onanimationstart: (this: Window, ev: AnimationEvent) => any;
declare var onanimationiteration: (this: Window, ev: AnimationEvent) => any;
declare var onanimationend: (this: Window, ev: AnimationEvent) => any;
declare var onanimationcancel: (this: Window, ev: AnimationEvent) => any;
declare var ontransitionrun: (this: Window, ev: TransitionEvent) => any;
declare var ontransitionstart: (this: Window, ev: TransitionEvent) => any;
declare var ontransitionend: (this: Window, ev: TransitionEvent) => any;
declare var ontransitioncancel: (this: Window, ev: TransitionEvent) => any;
declare var onpointerdown: (this: Window, ev: Event) => any;
declare var onpointermove: (this: Window, ev: Event) => any;
declare var onpointerup: (this: Window, ev: Event) => any;
declare var onpointercancel: (this: Window, ev: Event) => any;
declare var onpointerover: (this: Window, ev: Event) => any;
declare var onpointerout: (this: Window, ev: Event) => any;
declare var onpointerenter: (this: Window, ev: Event) => any;
declare var onpointerleave: (this: Window, ev: Event) => any;
declare var onselectstart: (this: Window, ev: Event) => any;
declare var onselectionchange: (this: Window, ev: Event) => any;
declare var ontouchstart: (this: Window, ev: TouchEvent) => any;
declare var ontouchend: (this: Window, ev: TouchEvent) => any;
declare var ontouchmove: (this: Window, ev: TouchEvent) => any;
declare var ontouchcancel: (this: Window, ev: TouchEvent) => any;
declare var onafterprint: (this: Window, ev: Event) => any;
declare var onbeforeprint: (this: Window, ev: Event) => any;
declare var onbeforeunload: OnBeforeUnloadEventHandler;
declare var onhashchange: (this: Window, ev: HashChangeEvent) => any;
declare var onlanguagechange: (this: Window, ev: Event) => any;
declare var onmessage: (this: Window, ev: MessageEvent) => any;
declare var onoffline: (this: Window, ev: Event) => any;
declare var ononline: (this: Window, ev: Event) => any;
declare var onpagehide: (this: Window, ev: PageTransitionEvent) => any;
declare var onpageshow: (this: Window, ev: PageTransitionEvent) => any;
declare var onpopstate: (this: Window, ev: PopStateEvent) => any;
declare var onrejectionhandled: (this: Window, ev: PromiseRejectionEvent) => any;
declare var onstorage: (this: Window, ev: StorageEvent) => any;
declare var onunhandledrejection: (this: Window, ev: PromiseRejectionEvent) => any;
declare var onunload: (this: Window, ev: Event) => any;
declare var origin: string;
declare var caches: CacheStorage;
declare function btoa(data: string): string;
declare function atob(data: string): string;
declare function setTimeout(handler: (...args: any[]) => void, timeout: number): number;
declare function setTimeout(handler: any, timeout?: any, ...args: any[]): number;
declare function clearTimeout(handle?: number): void;
declare function setInterval(handler: (...args: any[]) => void, timeout: number): number;
declare function setInterval(handler: any, timeout?: any, ...args: any[]): number;
declare function clearInterval(handle?: number): void;
declare function createImageBitmap(image: ImageBitmapSource, options?: ImageBitmapOptions): Promise<ImageBitmap>;
declare function createImageBitmap(image: ImageBitmapSource, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;
declare function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
declare var sessionStorage: Storage;
declare var localStorage: Storage;
declare var performance: Performance;
declare var indexedDB: IDBFactory;
declare var crypto: Crypto;
declare var speechSynthesis: SpeechSynthesis;
declare function addEventListener<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, useCapture?: boolean): void;
declare function addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
type GeometryNode = Text | Element | CSSPseudoElement | Document;
type HeadersInit = any;
type BodyInit = Blob | BufferSource | FormData | URLSearchParams | ReadableStream | string;
type RequestInfo = Request | string;
type DOMHighResTimeStamp = number;
type HTMLOrSVGScriptElement = HTMLScriptElement | SVGScriptElement;
type MediaProvider = MediaStream | MediaSource | Blob;
type RenderingContext = CanvasRenderingContext2D | WebGLRenderingContext;
type HTMLOrSVGImageElement = HTMLImageElement | SVGImageElement;
type CanvasImageSource = HTMLOrSVGImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | OffscreenCanvas;
type OffscreenRenderingContext = OffscreenCanvasRenderingContext2D | WebGLRenderingContext;
type EventHandler = EventHandlerNonNull;
type OnErrorEventHandler = OnErrorEventHandlerNonNull;
type OnBeforeUnloadEventHandler = OnBeforeUnloadEventHandlerNonNull;
type TimerHandler = string | Function;
type ImageBitmapSource = CanvasImageSource | Blob | ImageData;
type MessageEventSource = any;
type MediaStreamError = any;
type ConstrainLong = number | ConstrainLongRange;
type ConstrainDouble = number | ConstrainDoubleRange;
type ConstrainBoolean = boolean | ConstrainBooleanParameters;
type ConstrainDOMString = string | string[] | ConstrainDOMStringParameters;
type PerformanceEntryList = PerformanceEntry[];
type PushMessageDataInit = BufferSource | string;
type AuthenticatorSelectionList = AAGUID[];
type AAGUID = BufferSource;
type AlgorithmIdentifier = any;
type HashAlgorithmIdentifier = AlgorithmIdentifier;
type BigInteger = Uint8Array;
type NamedCurve = string;
type GLenum = number;
type GLboolean = boolean;
type GLbitfield = number;
type GLbyte = number;
type GLshort = number;
type GLint = number;
type GLsizei = number;
type GLintptr = number;
type GLsizeiptr = number;
type GLubyte = number;
type GLushort = number;
type GLuint = number;
type GLfloat = number;
type GLclampf = number;
type BufferDataSource = ArrayBuffer | ArrayBufferView;
type TexImageSource = ImageBitmap | ImageData | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
type Float32List = Float32Array | GLfloat[];
type Int32List = Int32Array | GLint[];
type ArrayBufferView = Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView;
type BufferSource = ArrayBufferView | ArrayBuffer;
type DOMTimeStamp = number;
type FormDataEntryValue = File | string;
type IDBValidKey = number | string | Date | IDBArrayKey;
type MouseWheelEvent = WheelEvent;
type ScrollBehavior = "auto" | "instant" | "smooth";
type ScrollLogicalPosition = "start" | "center" | "end" | "nearest";
type CSSBoxType = "margin" | "border" | "padding" | "content";
type ShadowRootMode = "open" | "closed";
type MediaKeysRequirement = "required" | "optional" | "not-allowed";
type MediaKeySessionType = "temporary" | "persistent-license";
type MediaKeyStatus = "usable" | "expired" | "released" | "output-restricted" | "output-downscaled" | "status-pending" | "internal-error";
type MediaKeyMessageType = "license-request" | "license-renewal" | "license-release" | "individualization-request";
type RequestType = "" | "audio" | "font" | "image" | "script" | "style" | "track" | "video";
type RequestDestination = "" | "audio" | "document" | "embed" | "font" | "image" | "manifest" | "object" | "report" | "script" | "serviceworker" | "sharedworker" | "style" | "track" | "video" | "worker" | "xslt";
type RequestMode = "navigate" | "same-origin" | "no-cors" | "cors";
type RequestCredentials = "omit" | "same-origin" | "include";
type RequestCache = "default" | "no-store" | "reload" | "no-cache" | "force-cache" | "only-if-cached";
type RequestRedirect = "follow" | "error" | "manual";
type ResponseType = "basic" | "cors" | "default" | "error" | "opaque" | "opaqueredirect";
type GamepadMappingType = "" | "standard";
type SensorState = "unconnected" | "activating" | "activated" | "idle" | "errored";
type DocumentReadyState = "loading" | "interactive" | "complete";
type CanPlayTypeResult = "" | "maybe" | "probably";
type TextTrackMode = "disabled" | "hidden" | "showing";
type TextTrackKind = "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";
type SelectionMode = "select" | "start" | "end" | "preserve";
type CanvasFillRule = "nonzero" | "evenodd";
type ImageSmoothingQuality = "low" | "medium" | "high";
type CanvasLineCap = "butt" | "round" | "square";
type CanvasLineJoin = "round" | "bevel" | "miter";
type CanvasTextAlign = "start" | "end" | "left" | "right" | "center";
type CanvasTextBaseline = "top" | "hanging" | "middle" | "alphabetic" | "ideographic" | "bottom";
type CanvasDirection = "ltr" | "rtl" | "inherit";
type OffscreenRenderingContextType = "2d" | "webgl";
type ScrollRestoration = "auto" | "manual";
type ImageOrientation = "none" | "flipY";
type PremultiplyAlpha = "none" | "premultiply" | "default";
type ColorSpaceConversion = "none" | "default";
type ResizeQuality = "pixelated" | "low" | "medium" | "high";
type BinaryType = "blob" | "arraybuffer";
type WorkerType = "classic" | "module";
type RTCStatsType = "codec" | "inbound-rtp" | "outbound-rtp" | "peer-connection" | "data-channel" | "track" | "transport" | "candidate-pair" | "local-candidate" | "remote-candidate" | "certificate";
type RTCStatsIceCandidatePairState = "frozen" | "waiting" | "inprogress" | "failed" | "succeeded" | "cancelled";
type IDBTransactionMode = "readonly" | "readwrite" | "versionchange";
type IDBRequestReadyState = "pending" | "done";
type IDBCursorDirection = "next" | "nextunique" | "prev" | "prevunique";
type MediaStreamTrackState = "live" | "ended";
type VideoFacingModeEnum = "user" | "environment" | "left" | "right";
type MediaDeviceKind = "audioinput" | "audiooutput" | "videoinput";
type ReadyState = "closed" | "open" | "ended";
type EndOfStreamError = "network" | "decode";
type AppendMode = "segments" | "sequence";
type NavigationType = "navigate" | "reload" | "back_forward" | "prerender";
type NotificationPermission = "default" | "denied" | "granted";
type NotificationDirection = "auto" | "ltr" | "rtl";
type PaymentShippingType = "shipping" | "delivery" | "pickup";
type PaymentComplete = "fail" | "success" | "unknown";
type PushEncryptionKeyName = "p256dh" | "auth";
type PushPermissionState = "denied" | "granted" | "prompt";
type ServiceWorkerState = "installing" | "installed" | "activating" | "activated" | "redundant";
type ClientType = "window" | "worker" | "sharedworker" | "all";
type AnimationPlayState = "idle" | "pending" | "running" | "paused" | "finished";
type FillMode = "none" | "forwards" | "backwards" | "both" | "auto";
type PlaybackDirection = "normal" | "reverse" | "alternate" | "alternate-reverse";
type IterationCompositeOperation = "replace" | "accumulate";
type CompositeOperation = "replace" | "add" | "accumulate";
type AudioContextState = "suspended" | "running" | "closed";
type AudioContextLatencyCategory = "balanced" | "interactive" | "playback";
type ChannelCountMode = "max" | "clamped-max" | "explicit";
type ChannelInterpretation = "speakers" | "discrete";
type PanningModelType = "equalpower" | "HRTF";
type DistanceModelType = "linear" | "inverse" | "exponential";
type BiquadFilterType = "lowpass" | "highpass" | "bandpass" | "lowshelf" | "highshelf" | "peaking" | "notch" | "allpass";
type OverSampleType = "none" | "2x" | "4x";
type OscillatorType = "sine" | "square" | "sawtooth" | "triangle" | "custom";
type Attachment = "platform" | "cross-platform";
type ScopedCredentialType = "ScopedCred";
type Transport = "usb" | "nfc" | "ble";
type KeyType = "public" | "private" | "secret";
type KeyUsage = "encrypt" | "decrypt" | "sign" | "verify" | "deriveKey" | "deriveBits" | "wrapKey" | "unwrapKey";
type KeyFormat = "raw" | "spki" | "pkcs8" | "jwk";
type SpeechRecognitionErrorCode = "no-speech" | "aborted" | "audio-capture" | "network" | "not-allowed" | "service-not-allowed" | "bad-grammar" | "language-not-supported";
type SpeechSynthesisErrorCode = "canceled" | "interrupted" | "audio-busy" | "audio-hardware" | "network" | "synthesis-unavailable" | "synthesis-failed" | "language-unavailable" | "voice-unavailable" | "text-too-long" | "invalid-argument";
type RTCIceCredentialType = "password" | "token";
type RTCIceTransportPolicy = "relay" | "all";
type RTCBundlePolicy = "balanced" | "max-compat" | "max-bundle";
type RTCRtcpMuxPolicy = "negotiate" | "require";
type RTCSignalingState = "stable" | "have-local-offer" | "have-remote-offer" | "have-local-pranswer" | "have-remote-pranswer";
type RTCIceGatheringState = "new" | "gathering" | "complete";
type RTCPeerConnectionState = "new" | "connecting" | "connected" | "disconnected" | "failed" | "closed";
type RTCIceConnectionState = "new" | "checking" | "connected" | "completed" | "failed" | "disconnected" | "closed";
type RTCSdpType = "offer" | "pranswer" | "answer" | "rollback";
type RTCIceProtocol = "udp" | "tcp";
type RTCIceTcpCandidateType = "active" | "passive" | "so";
type RTCIceCandidateType = "host" | "srflx" | "prflx" | "relay";
type RTCPriorityType = "very-low" | "low" | "medium" | "high";
type RTCRtpTransceiverDirection = "sendrecv" | "sendonly" | "recvonly" | "inactive";
type RTCDtxStatus = "disabled" | "enabled";
type RTCDegradationPreference = "maintain-framerate" | "maintain-resolution" | "balanced";
type RTCDtlsTransportState = "new" | "connecting" | "connected" | "closed" | "failed";
type RTCIceGathererState = "new" | "gathering" | "complete";
type RTCIceTransportState = "new" | "checking" | "connected" | "completed" | "failed" | "disconnected" | "closed";
type RTCIceRole = "controlling" | "controlled";
type RTCIceComponent = "rtp" | "rtcp";
type RTCDataChannelState = "connecting" | "open" | "closing" | "closed";
type WebGLPowerPreference = "default" | "low-power" | "high-performance";
type XMLHttpRequestResponseType = "" | "arraybuffer" | "blob" | "document" | "json" | "text";