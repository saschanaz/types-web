/////////////////////////////
/// Window Iterable APIs
/////////////////////////////

interface AudioParam {
    /**
     * The Web Audio API's `AudioParam` interface represents an audio-related parameter, usually a parameter of an AudioNode (such as GainNode.gain).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioParam/setValueCurveAtTime)
     */
    setValueCurveAtTime(values: Iterable<number>, startTime: number, duration: number): AudioParam;
}

interface AudioParamMap extends ReadonlyMap<string, AudioParam> {
}

interface BaseAudioContext {
    /**
     * The `BaseAudioContext` interface of the Web Audio API acts as a base definition for online and offline audio-processing graphs, as represented by AudioContext and OfflineAudioContext respectively.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/BaseAudioContext/createIIRFilter)
     */
    createIIRFilter(feedforward: Iterable<number>, feedback: Iterable<number>): IIRFilterNode;
    /**
     * The `BaseAudioContext` interface of the Web Audio API acts as a base definition for online and offline audio-processing graphs, as represented by AudioContext and OfflineAudioContext respectively.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/BaseAudioContext/createPeriodicWave)
     */
    createPeriodicWave(real: Iterable<number>, imag: Iterable<number>, constraints?: PeriodicWaveConstraints): PeriodicWave;
}

interface CSSKeyframesRule {
    [Symbol.iterator](): ArrayIterator<CSSKeyframeRule>;
}

interface CSSNumericArray {
    [Symbol.iterator](): ArrayIterator<CSSNumericValue>;
    entries(): ArrayIterator<[number, CSSNumericValue]>;
    keys(): ArrayIterator<number>;
    values(): ArrayIterator<CSSNumericValue>;
}

interface CSSRuleList {
    [Symbol.iterator](): ArrayIterator<CSSRule>;
}

interface CSSStyleDeclaration {
    [Symbol.iterator](): ArrayIterator<string>;
}

interface CSSTransformValue {
    [Symbol.iterator](): ArrayIterator<CSSTransformComponent>;
    entries(): ArrayIterator<[number, CSSTransformComponent]>;
    keys(): ArrayIterator<number>;
    values(): ArrayIterator<CSSTransformComponent>;
}

interface CSSUnparsedValue {
    [Symbol.iterator](): ArrayIterator<CSSUnparsedSegment>;
    entries(): ArrayIterator<[number, CSSUnparsedSegment]>;
    keys(): ArrayIterator<number>;
    values(): ArrayIterator<CSSUnparsedSegment>;
}

interface Cache {
    /**
     * The **`Cache`** interface provides a persistent storage mechanism for Request / Response object pairs that are cached in long lived memory.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Cache/addAll)
     */
    addAll(requests: Iterable<RequestInfo>): Promise<void>;
}

interface CanvasPath {
    /**
     * The **`CanvasRenderingContext2D`** interface, part of the Canvas API, provides the 2D rendering context for the drawing surface of a canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/roundRect)
     */
    roundRect(x: number, y: number, w: number, h: number, radii?: number | DOMPointInit | Iterable<number | DOMPointInit>): void;
}

interface CanvasPathDrawingStyles {
    /**
     * The **`CanvasRenderingContext2D`** interface, part of the Canvas API, provides the 2D rendering context for the drawing surface of a canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash)
     */
    setLineDash(segments: Iterable<number>): void;
}

interface CustomStateSet extends Set<string> {
}

interface DOMRectList {
    [Symbol.iterator](): ArrayIterator<DOMRect>;
}

interface DOMStringList {
    [Symbol.iterator](): ArrayIterator<string>;
}

interface DOMTokenList {
    [Symbol.iterator](): ArrayIterator<string>;
    entries(): ArrayIterator<[number, string]>;
    keys(): ArrayIterator<number>;
    values(): ArrayIterator<string>;
}

interface DataTransferItemList {
    [Symbol.iterator](): ArrayIterator<DataTransferItem>;
}

interface EventCounts extends ReadonlyMap<string, number> {
}

interface FileList {
    [Symbol.iterator](): ArrayIterator<File>;
}

interface FontFaceSet extends Set<FontFace> {
}

interface FormDataIterator<T> extends IteratorObject<T, BuiltinIteratorReturn, unknown> {
    [Symbol.iterator](): FormDataIterator<T>;
}

interface FormData {
    [Symbol.iterator](): FormDataIterator<[string, FormDataEntryValue]>;
    /** Returns an array of key, value pairs for every entry in the list. */
    entries(): FormDataIterator<[string, FormDataEntryValue]>;
    /** Returns a list of keys in the list. */
    keys(): FormDataIterator<string>;
    /** Returns a list of values in the list. */
    values(): FormDataIterator<FormDataEntryValue>;
}

interface HTMLAllCollection {
    [Symbol.iterator](): ArrayIterator<Element>;
}

interface HTMLCollectionBase {
    [Symbol.iterator](): ArrayIterator<Element>;
}

interface HTMLCollectionOf<T extends Element> {
    [Symbol.iterator](): ArrayIterator<T>;
}

interface HTMLFormElement {
    [Symbol.iterator](): ArrayIterator<Element>;
}

interface HTMLSelectElement {
    [Symbol.iterator](): ArrayIterator<HTMLOptionElement>;
}

interface HeadersIterator<T> extends IteratorObject<T, BuiltinIteratorReturn, unknown> {
    [Symbol.iterator](): HeadersIterator<T>;
}

interface Headers {
    [Symbol.iterator](): HeadersIterator<[string, string]>;
    /** Returns an iterator allowing to go through all key/value pairs contained in this object. */
    entries(): HeadersIterator<[string, string]>;
    /** Returns an iterator allowing to go through all keys of the key/value pairs contained in this object. */
    keys(): HeadersIterator<string>;
    /** Returns an iterator allowing to go through all values of the key/value pairs contained in this object. */
    values(): HeadersIterator<string>;
}

interface Highlight extends Set<AbstractRange> {
}

interface HighlightRegistry extends Map<string, Highlight> {
}

interface IDBDatabase {
    /**
     * Returns a new transaction with the given mode ("readonly" or "readwrite") and scope which can be a single object store name or an array of names.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBDatabase/transaction)
     */
    transaction(storeNames: string | Iterable<string>, mode?: IDBTransactionMode, options?: IDBTransactionOptions): IDBTransaction;
}

interface IDBObjectStore {
    /**
     * Creates a new index in store with the given name, keyPath and options and returns a new IDBIndex. If the keyPath and options define constraints that cannot be satisfied with the data already in store the upgrade transaction will abort with a "ConstraintError" DOMException.
     *
     * Throws an "InvalidStateError" DOMException if not called within an upgrade transaction.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/createIndex)
     */
    createIndex(name: string, keyPath: string | Iterable<string>, options?: IDBIndexParameters): IDBIndex;
}

interface ImageTrackList {
    [Symbol.iterator](): ArrayIterator<ImageTrack>;
}

interface MIDIInputMap extends ReadonlyMap<string, MIDIInput> {
}

interface MIDIOutput {
    /**
     * The **`MIDIOutput`** interface of the Web MIDI API provides methods to add messages to the queue of an output device, and to clear the queue of messages.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MIDIOutput/send)
     */
    send(data: Iterable<number>, timestamp?: DOMHighResTimeStamp): void;
}

interface MIDIOutputMap extends ReadonlyMap<string, MIDIOutput> {
}

interface MediaKeyStatusMapIterator<T> extends IteratorObject<T, BuiltinIteratorReturn, unknown> {
    [Symbol.iterator](): MediaKeyStatusMapIterator<T>;
}

interface MediaKeyStatusMap {
    [Symbol.iterator](): MediaKeyStatusMapIterator<[BufferSource, MediaKeyStatus]>;
    entries(): MediaKeyStatusMapIterator<[BufferSource, MediaKeyStatus]>;
    keys(): MediaKeyStatusMapIterator<BufferSource>;
    values(): MediaKeyStatusMapIterator<MediaKeyStatus>;
}

interface MediaList {
    [Symbol.iterator](): ArrayIterator<string>;
}

interface MessageEvent<T = any> {
    /** @deprecated */
    initMessageEvent(type: string, bubbles?: boolean, cancelable?: boolean, data?: any, origin?: string, lastEventId?: string, source?: MessageEventSource | null, ports?: Iterable<MessagePort>): void;
}

interface MimeTypeArray {
    [Symbol.iterator](): ArrayIterator<MimeType>;
}

interface NamedNodeMap {
    [Symbol.iterator](): ArrayIterator<Attr>;
}

interface Navigator {
    /**
     * Available only in secure contexts.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/requestMediaKeySystemAccess)
     */
    requestMediaKeySystemAccess(keySystem: string, supportedConfigurations: Iterable<MediaKeySystemConfiguration>): Promise<MediaKeySystemAccess>;
    /**
     * The **`Navigator`** interface represents the state and the identity of the user agent.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/vibrate)
     */
    vibrate(pattern: Iterable<number>): boolean;
}

interface NodeList {
    [Symbol.iterator](): ArrayIterator<Node>;
    /** Returns an array of key, value pairs for every entry in the list. */
    entries(): ArrayIterator<[number, Node]>;
    /** Returns an list of keys in the list. */
    keys(): ArrayIterator<number>;
    /** Returns an list of values in the list. */
    values(): ArrayIterator<Node>;
}

interface NodeListOf<TNode extends Node> {
    [Symbol.iterator](): ArrayIterator<TNode>;
    /** Returns an array of key, value pairs for every entry in the list. */
    entries(): ArrayIterator<[number, TNode]>;
    /** Returns an list of keys in the list. */
    keys(): ArrayIterator<number>;
    /** Returns an list of values in the list. */
    values(): ArrayIterator<TNode>;
}

interface Plugin {
    [Symbol.iterator](): ArrayIterator<MimeType>;
}

interface PluginArray {
    [Symbol.iterator](): ArrayIterator<Plugin>;
}

interface RTCRtpTransceiver {
    /**
     * The WebRTC interface **`RTCRtpTransceiver`** describes a permanent pairing of an RTCRtpSender and an RTCRtpReceiver, along with some shared state.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCRtpTransceiver/setCodecPreferences)
     */
    setCodecPreferences(codecs: Iterable<RTCRtpCodec>): void;
}

interface RTCStatsReport extends ReadonlyMap<string, any> {
}

interface SVGLengthList {
    [Symbol.iterator](): ArrayIterator<SVGLength>;
}

interface SVGNumberList {
    [Symbol.iterator](): ArrayIterator<SVGNumber>;
}

interface SVGPointList {
    [Symbol.iterator](): ArrayIterator<DOMPoint>;
}

interface SVGStringList {
    [Symbol.iterator](): ArrayIterator<string>;
}

interface SVGTransformList {
    [Symbol.iterator](): ArrayIterator<SVGTransform>;
}

interface SourceBufferList {
    [Symbol.iterator](): ArrayIterator<SourceBuffer>;
}

interface SpeechRecognitionResult {
    [Symbol.iterator](): ArrayIterator<SpeechRecognitionAlternative>;
}

interface SpeechRecognitionResultList {
    [Symbol.iterator](): ArrayIterator<SpeechRecognitionResult>;
}

interface StylePropertyMapReadOnlyIterator<T> extends IteratorObject<T, BuiltinIteratorReturn, unknown> {
    [Symbol.iterator](): StylePropertyMapReadOnlyIterator<T>;
}

interface StylePropertyMapReadOnly {
    [Symbol.iterator](): StylePropertyMapReadOnlyIterator<[string, Iterable<CSSStyleValue>]>;
    entries(): StylePropertyMapReadOnlyIterator<[string, Iterable<CSSStyleValue>]>;
    keys(): StylePropertyMapReadOnlyIterator<string>;
    values(): StylePropertyMapReadOnlyIterator<Iterable<CSSStyleValue>>;
}

interface StyleSheetList {
    [Symbol.iterator](): ArrayIterator<CSSStyleSheet>;
}

interface SubtleCrypto {
    /**
     * The **`SubtleCrypto`** interface of the Web Crypto API provides a number of low-level cryptographic functions.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/deriveKey)
     */
    deriveKey(algorithm: AlgorithmIdentifier | EcdhKeyDeriveParams | HkdfParams | Pbkdf2Params, baseKey: CryptoKey, derivedKeyType: AlgorithmIdentifier | AesDerivedKeyParams | HmacImportParams | HkdfParams | Pbkdf2Params, extractable: boolean, keyUsages: Iterable<KeyUsage>): Promise<CryptoKey>;
    /**
     * The **`SubtleCrypto`** interface of the Web Crypto API provides a number of low-level cryptographic functions.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/generateKey)
     */
    generateKey(algorithm: "Ed25519" | { name: "Ed25519" }, extractable: boolean, keyUsages: ReadonlyArray<"sign" | "verify">): Promise<CryptoKeyPair>;
    generateKey(algorithm: RsaHashedKeyGenParams | EcKeyGenParams, extractable: boolean, keyUsages: ReadonlyArray<KeyUsage>): Promise<CryptoKeyPair>;
    generateKey(algorithm: AesKeyGenParams | HmacKeyGenParams | Pbkdf2Params, extractable: boolean, keyUsages: ReadonlyArray<KeyUsage>): Promise<CryptoKey>;
    generateKey(algorithm: AlgorithmIdentifier, extractable: boolean, keyUsages: Iterable<KeyUsage>): Promise<CryptoKeyPair | CryptoKey>;
    /**
     * The **`SubtleCrypto`** interface of the Web Crypto API provides a number of low-level cryptographic functions.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/importKey)
     */
    importKey(format: "jwk", keyData: JsonWebKey, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: ReadonlyArray<KeyUsage>): Promise<CryptoKey>;
    importKey(format: Exclude<KeyFormat, "jwk">, keyData: BufferSource, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: Iterable<KeyUsage>): Promise<CryptoKey>;
    /**
     * The **`SubtleCrypto`** interface of the Web Crypto API provides a number of low-level cryptographic functions.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/unwrapKey)
     */
    unwrapKey(format: KeyFormat, wrappedKey: BufferSource, unwrappingKey: CryptoKey, unwrapAlgorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams, unwrappedKeyAlgorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: Iterable<KeyUsage>): Promise<CryptoKey>;
}

interface TextTrackCueList {
    [Symbol.iterator](): ArrayIterator<TextTrackCue>;
}

interface TextTrackList {
    [Symbol.iterator](): ArrayIterator<TextTrack>;
}

interface TouchList {
    [Symbol.iterator](): ArrayIterator<Touch>;
}

interface URLSearchParamsIterator<T> extends IteratorObject<T, BuiltinIteratorReturn, unknown> {
    [Symbol.iterator](): URLSearchParamsIterator<T>;
}

interface URLSearchParams {
    [Symbol.iterator](): URLSearchParamsIterator<[string, string]>;
    /** Returns an array of key, value pairs for every entry in the search params. */
    entries(): URLSearchParamsIterator<[string, string]>;
    /** Returns a list of keys in the search params. */
    keys(): URLSearchParamsIterator<string>;
    /** Returns a list of values in the search params. */
    values(): URLSearchParamsIterator<string>;
}

interface ViewTransitionTypeSet extends Set<string> {
}

interface WEBGL_draw_buffers {
    /**
     * The **`WEBGL_draw_buffers`** extension is part of the WebGL API and enables a fragment shader to write to several textures, which is useful for deferred shading, for example.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_draw_buffers/drawBuffersWEBGL)
     */
    drawBuffersWEBGL(buffers: Iterable<GLenum>): void;
}

interface WEBGL_multi_draw {
    /**
     * The **`WEBGL_multi_draw`** extension is part of the WebGL API and allows to render more than one primitive with a single function call.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_multi_draw/multiDrawArraysInstancedWEBGL)
     */
    multiDrawArraysInstancedWEBGL(mode: GLenum, firstsList: Int32Array<ArrayBufferLike> | Iterable<GLint>, firstsOffset: number, countsList: Int32Array<ArrayBufferLike> | Iterable<GLsizei>, countsOffset: number, instanceCountsList: Int32Array<ArrayBufferLike> | Iterable<GLsizei>, instanceCountsOffset: number, drawcount: GLsizei): void;
    /**
     * The **`WEBGL_multi_draw`** extension is part of the WebGL API and allows to render more than one primitive with a single function call.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_multi_draw/multiDrawArraysWEBGL)
     */
    multiDrawArraysWEBGL(mode: GLenum, firstsList: Int32Array<ArrayBufferLike> | Iterable<GLint>, firstsOffset: number, countsList: Int32Array<ArrayBufferLike> | Iterable<GLsizei>, countsOffset: number, drawcount: GLsizei): void;
    /**
     * The **`WEBGL_multi_draw`** extension is part of the WebGL API and allows to render more than one primitive with a single function call.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_multi_draw/multiDrawElementsInstancedWEBGL)
     */
    multiDrawElementsInstancedWEBGL(mode: GLenum, countsList: Int32Array<ArrayBufferLike> | Iterable<GLsizei>, countsOffset: number, type: GLenum, offsetsList: Int32Array<ArrayBufferLike> | Iterable<GLsizei>, offsetsOffset: number, instanceCountsList: Int32Array<ArrayBufferLike> | Iterable<GLsizei>, instanceCountsOffset: number, drawcount: GLsizei): void;
    /**
     * The **`WEBGL_multi_draw`** extension is part of the WebGL API and allows to render more than one primitive with a single function call.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_multi_draw/multiDrawElementsWEBGL)
     */
    multiDrawElementsWEBGL(mode: GLenum, countsList: Int32Array<ArrayBufferLike> | Iterable<GLsizei>, countsOffset: number, type: GLenum, offsetsList: Int32Array<ArrayBufferLike> | Iterable<GLsizei>, offsetsOffset: number, drawcount: GLsizei): void;
}

interface WebGL2RenderingContextBase {
    /**
     * The **WebGL2RenderingContext** interface provides the OpenGL ES 3.0 rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/clearBuffer)
     */
    clearBufferfv(buffer: GLenum, drawbuffer: GLint, values: Iterable<GLfloat>, srcOffset?: number): void;
    /**
     * The **WebGL2RenderingContext** interface provides the OpenGL ES 3.0 rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/clearBuffer)
     */
    clearBufferiv(buffer: GLenum, drawbuffer: GLint, values: Iterable<GLint>, srcOffset?: number): void;
    /**
     * The **WebGL2RenderingContext** interface provides the OpenGL ES 3.0 rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/clearBuffer)
     */
    clearBufferuiv(buffer: GLenum, drawbuffer: GLint, values: Iterable<GLuint>, srcOffset?: number): void;
    /**
     * The **WebGL2RenderingContext** interface provides the OpenGL ES 3.0 rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/drawBuffers)
     */
    drawBuffers(buffers: Iterable<GLenum>): void;
    /**
     * The **WebGL2RenderingContext** interface provides the OpenGL ES 3.0 rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getActiveUniforms)
     */
    getActiveUniforms(program: WebGLProgram, uniformIndices: Iterable<GLuint>, pname: GLenum): any;
    /**
     * The **WebGL2RenderingContext** interface provides the OpenGL ES 3.0 rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getUniformIndices)
     */
    getUniformIndices(program: WebGLProgram, uniformNames: Iterable<string>): Iterable<GLuint> | null;
    /**
     * The **WebGL2RenderingContext** interface provides the OpenGL ES 3.0 rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/invalidateFramebuffer)
     */
    invalidateFramebuffer(target: GLenum, attachments: Iterable<GLenum>): void;
    /**
     * The **WebGL2RenderingContext** interface provides the OpenGL ES 3.0 rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/invalidateSubFramebuffer)
     */
    invalidateSubFramebuffer(target: GLenum, attachments: Iterable<GLenum>, x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    /**
     * The **WebGL2RenderingContext** interface provides the OpenGL ES 3.0 rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/transformFeedbackVaryings)
     */
    transformFeedbackVaryings(program: WebGLProgram, varyings: Iterable<string>, bufferMode: GLenum): void;
    /**
     * The **WebGL2RenderingContext** interface provides the OpenGL ES 3.0 rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform)
     */
    uniform1uiv(location: WebGLUniformLocation | null, data: Iterable<GLuint>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **WebGL2RenderingContext** interface provides the OpenGL ES 3.0 rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform)
     */
    uniform2uiv(location: WebGLUniformLocation | null, data: Iterable<GLuint>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **WebGL2RenderingContext** interface provides the OpenGL ES 3.0 rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform)
     */
    uniform3uiv(location: WebGLUniformLocation | null, data: Iterable<GLuint>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **WebGL2RenderingContext** interface provides the OpenGL ES 3.0 rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform)
     */
    uniform4uiv(location: WebGLUniformLocation | null, data: Iterable<GLuint>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **WebGL2RenderingContext** interface provides the OpenGL ES 3.0 rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix)
     */
    uniformMatrix2x3fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Iterable<GLfloat>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **WebGL2RenderingContext** interface provides the OpenGL ES 3.0 rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix)
     */
    uniformMatrix2x4fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Iterable<GLfloat>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **WebGL2RenderingContext** interface provides the OpenGL ES 3.0 rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix)
     */
    uniformMatrix3x2fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Iterable<GLfloat>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **WebGL2RenderingContext** interface provides the OpenGL ES 3.0 rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix)
     */
    uniformMatrix3x4fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Iterable<GLfloat>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **WebGL2RenderingContext** interface provides the OpenGL ES 3.0 rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix)
     */
    uniformMatrix4x2fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Iterable<GLfloat>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **WebGL2RenderingContext** interface provides the OpenGL ES 3.0 rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix)
     */
    uniformMatrix4x3fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Iterable<GLfloat>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **WebGL2RenderingContext** interface provides the OpenGL ES 3.0 rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/vertexAttribI)
     */
    vertexAttribI4iv(index: GLuint, values: Iterable<GLint>): void;
    /**
     * The **WebGL2RenderingContext** interface provides the OpenGL ES 3.0 rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/vertexAttribI)
     */
    vertexAttribI4uiv(index: GLuint, values: Iterable<GLuint>): void;
}

interface WebGL2RenderingContextOverloads {
    /**
     * The **`WebGLRenderingContext`** interface provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform1fv(location: WebGLUniformLocation | null, data: Iterable<GLfloat>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **`WebGLRenderingContext`** interface provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform1iv(location: WebGLUniformLocation | null, data: Iterable<GLint>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **`WebGLRenderingContext`** interface provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform2fv(location: WebGLUniformLocation | null, data: Iterable<GLfloat>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **`WebGLRenderingContext`** interface provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform2iv(location: WebGLUniformLocation | null, data: Iterable<GLint>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **`WebGLRenderingContext`** interface provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform3fv(location: WebGLUniformLocation | null, data: Iterable<GLfloat>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **`WebGLRenderingContext`** interface provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform3iv(location: WebGLUniformLocation | null, data: Iterable<GLint>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **`WebGLRenderingContext`** interface provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform4fv(location: WebGLUniformLocation | null, data: Iterable<GLfloat>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **`WebGLRenderingContext`** interface provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform4iv(location: WebGLUniformLocation | null, data: Iterable<GLint>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **WebGL2RenderingContext** interface provides the OpenGL ES 3.0 rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix)
     */
    uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Iterable<GLfloat>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **`WebGLRenderingContext`** interface provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniformMatrix)
     */
    uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Iterable<GLfloat>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **`WebGLRenderingContext`** interface provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniformMatrix)
     */
    uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Iterable<GLfloat>, srcOffset?: number, srcLength?: GLuint): void;
}

interface WebGLRenderingContextBase {
    /**
     * The **`WebGLRenderingContext`** interface provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib)
     */
    vertexAttrib1fv(index: GLuint, values: Iterable<GLfloat>): void;
    /**
     * The **`WebGLRenderingContext`** interface provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib)
     */
    vertexAttrib2fv(index: GLuint, values: Iterable<GLfloat>): void;
    /**
     * The **`WebGLRenderingContext`** interface provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib)
     */
    vertexAttrib3fv(index: GLuint, values: Iterable<GLfloat>): void;
    /**
     * The **`WebGLRenderingContext`** interface provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib)
     */
    vertexAttrib4fv(index: GLuint, values: Iterable<GLfloat>): void;
}

interface WebGLRenderingContextOverloads {
    /**
     * The **`WebGLRenderingContext`** interface provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform1fv(location: WebGLUniformLocation | null, v: Iterable<GLfloat>): void;
    /**
     * The **`WebGLRenderingContext`** interface provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform1iv(location: WebGLUniformLocation | null, v: Iterable<GLint>): void;
    /**
     * The **`WebGLRenderingContext`** interface provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform2fv(location: WebGLUniformLocation | null, v: Iterable<GLfloat>): void;
    /**
     * The **`WebGLRenderingContext`** interface provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform2iv(location: WebGLUniformLocation | null, v: Iterable<GLint>): void;
    /**
     * The **`WebGLRenderingContext`** interface provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform3fv(location: WebGLUniformLocation | null, v: Iterable<GLfloat>): void;
    /**
     * The **`WebGLRenderingContext`** interface provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform3iv(location: WebGLUniformLocation | null, v: Iterable<GLint>): void;
    /**
     * The **`WebGLRenderingContext`** interface provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform4fv(location: WebGLUniformLocation | null, v: Iterable<GLfloat>): void;
    /**
     * The **`WebGLRenderingContext`** interface provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform4iv(location: WebGLUniformLocation | null, v: Iterable<GLint>): void;
    /**
     * The **`WebGLRenderingContext`** interface provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniformMatrix)
     */
    uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Iterable<GLfloat>): void;
    /**
     * The **`WebGLRenderingContext`** interface provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniformMatrix)
     */
    uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Iterable<GLfloat>): void;
    /**
     * The **`WebGLRenderingContext`** interface provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML canvas element.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniformMatrix)
     */
    uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Iterable<GLfloat>): void;
}
