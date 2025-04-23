/////////////////////////////
/// Window Iterable APIs
/////////////////////////////

interface AudioParam {
    /**
     * The **`setValueCurveAtTime()`** method of the following a curve defined by a list of values.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AudioParam/setValueCurveAtTime)
     */
    setValueCurveAtTime(values: Iterable<number>, startTime: number, duration: number): AudioParam;
}

interface AudioParamMap extends ReadonlyMap<string, AudioParam> {
}

interface BaseAudioContext {
    /**
     * The **`createIIRFilter()`** method of the BaseAudioContext interface creates an IIRFilterNode, which represents a general **infinite impulse response** (IIR) filter which can be configured to serve as various types of filter.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/BaseAudioContext/createIIRFilter)
     */
    createIIRFilter(feedforward: Iterable<number>, feedback: Iterable<number>): IIRFilterNode;
    /**
     * The `createPeriodicWave()` method of the BaseAudioContext interface is used to create a PeriodicWave.
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
     * The **`addAll()`** method of the Cache interface takes an array of URLs, retrieves them, and adds the resulting response objects to the given cache.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Cache/addAll)
     */
    addAll(requests: Iterable<RequestInfo>): Promise<void>;
}

interface CanvasPath {
    /**
     * The **`CanvasRenderingContext2D.roundRect()`** method of the Canvas 2D API adds a rounded rectangle to the current path.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/roundRect)
     */
    roundRect(x: number, y: number, w: number, h: number, radii?: number | DOMPointInit | Iterable<number | DOMPointInit>): void;
}

interface CanvasPathDrawingStyles {
    /**
     * The **`setLineDash()`** method of the Canvas 2D API's stroking lines.
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
    entries(): FormDataIterator<[string, FormDataEntryValue]>;
    keys(): FormDataIterator<string>;
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
    entries(): HeadersIterator<[string, string]>;
    keys(): HeadersIterator<string>;
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
     * The **`send()`** method of the MIDIOutput interface queues messages for the corresponding MIDI port.
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
     * The **`vibrate()`** method of the Navigator interface pulses the vibration hardware on the device, if such hardware exists.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/vibrate)
     */
    vibrate(pattern: Iterable<number>): boolean;
}

interface NodeList {
    [Symbol.iterator](): ArrayIterator<Node>;
    entries(): ArrayIterator<[number, Node]>;
    keys(): ArrayIterator<number>;
    values(): ArrayIterator<Node>;
}

interface NodeListOf<TNode extends Node> {
    [Symbol.iterator](): ArrayIterator<TNode>;
    entries(): ArrayIterator<[number, TNode]>;
    keys(): ArrayIterator<number>;
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
     * The **`setCodecPreferences()`** method of the RTCRtpTransceiver interface is used to set the codecs that the transceiver allows for decoding _received_ data, in order of decreasing preference.
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
     * The **`deriveKey()`** method of the SubtleCrypto interface can be used to derive a secret key from a master key.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/deriveKey)
     */
    deriveKey(algorithm: AlgorithmIdentifier | EcdhKeyDeriveParams | HkdfParams | Pbkdf2Params, baseKey: CryptoKey, derivedKeyType: AlgorithmIdentifier | AesDerivedKeyParams | HmacImportParams | HkdfParams | Pbkdf2Params, extractable: boolean, keyUsages: Iterable<KeyUsage>): Promise<CryptoKey>;
    /**
     * The **`generateKey()`** method of the SubtleCrypto interface is used to generate a new key (for symmetric algorithms) or key pair (for public-key algorithms).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/generateKey)
     */
    generateKey(algorithm: "Ed25519" | { name: "Ed25519" }, extractable: boolean, keyUsages: ReadonlyArray<"sign" | "verify">): Promise<CryptoKeyPair>;
    generateKey(algorithm: RsaHashedKeyGenParams | EcKeyGenParams, extractable: boolean, keyUsages: ReadonlyArray<KeyUsage>): Promise<CryptoKeyPair>;
    generateKey(algorithm: AesKeyGenParams | HmacKeyGenParams | Pbkdf2Params, extractable: boolean, keyUsages: ReadonlyArray<KeyUsage>): Promise<CryptoKey>;
    generateKey(algorithm: AlgorithmIdentifier, extractable: boolean, keyUsages: Iterable<KeyUsage>): Promise<CryptoKeyPair | CryptoKey>;
    /**
     * The **`importKey()`** method of the SubtleCrypto interface imports a key: that is, it takes as input a key in an external, portable format and gives you a CryptoKey object that you can use in the Web Crypto API.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/importKey)
     */
    importKey(format: "jwk", keyData: JsonWebKey, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: ReadonlyArray<KeyUsage>): Promise<CryptoKey>;
    importKey(format: Exclude<KeyFormat, "jwk">, keyData: BufferSource, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: Iterable<KeyUsage>): Promise<CryptoKey>;
    /**
     * The **`unwrapKey()`** method of the SubtleCrypto interface 'unwraps' a key.
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
    entries(): URLSearchParamsIterator<[string, string]>;
    keys(): URLSearchParamsIterator<string>;
    values(): URLSearchParamsIterator<string>;
}

interface ViewTransitionTypeSet extends Set<string> {
}

interface WEBGL_draw_buffers {
    /**
     * The **`WEBGL_draw_buffers.drawBuffersWEBGL()`** method is part of the WebGL API and allows you to define the draw buffers to which all fragment colors are written.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_draw_buffers/drawBuffersWEBGL)
     */
    drawBuffersWEBGL(buffers: Iterable<GLenum>): void;
}

interface WEBGL_multi_draw {
    /**
     * The **`WEBGL_multi_draw.multiDrawArraysInstancedWEBGL()`** method of the WebGL API renders multiple primitives from array data.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_multi_draw/multiDrawArraysInstancedWEBGL)
     */
    multiDrawArraysInstancedWEBGL(mode: GLenum, firstsList: Int32Array<ArrayBufferLike> | Iterable<GLint>, firstsOffset: number, countsList: Int32Array<ArrayBufferLike> | Iterable<GLsizei>, countsOffset: number, instanceCountsList: Int32Array<ArrayBufferLike> | Iterable<GLsizei>, instanceCountsOffset: number, drawcount: GLsizei): void;
    /**
     * The **`WEBGL_multi_draw.multiDrawArraysWEBGL()`** method of the WebGL API renders multiple primitives from array data.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_multi_draw/multiDrawArraysWEBGL)
     */
    multiDrawArraysWEBGL(mode: GLenum, firstsList: Int32Array<ArrayBufferLike> | Iterable<GLint>, firstsOffset: number, countsList: Int32Array<ArrayBufferLike> | Iterable<GLsizei>, countsOffset: number, drawcount: GLsizei): void;
    /**
     * The **`WEBGL_multi_draw.multiDrawElementsInstancedWEBGL()`** method of the WebGL API renders multiple primitives from array data.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_multi_draw/multiDrawElementsInstancedWEBGL)
     */
    multiDrawElementsInstancedWEBGL(mode: GLenum, countsList: Int32Array<ArrayBufferLike> | Iterable<GLsizei>, countsOffset: number, type: GLenum, offsetsList: Int32Array<ArrayBufferLike> | Iterable<GLsizei>, offsetsOffset: number, instanceCountsList: Int32Array<ArrayBufferLike> | Iterable<GLsizei>, instanceCountsOffset: number, drawcount: GLsizei): void;
    /**
     * The **`WEBGL_multi_draw.multiDrawElementsWEBGL()`** method of the WebGL API renders multiple primitives from array data.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_multi_draw/multiDrawElementsWEBGL)
     */
    multiDrawElementsWEBGL(mode: GLenum, countsList: Int32Array<ArrayBufferLike> | Iterable<GLsizei>, countsOffset: number, type: GLenum, offsetsList: Int32Array<ArrayBufferLike> | Iterable<GLsizei>, offsetsOffset: number, drawcount: GLsizei): void;
}

interface WebGL2RenderingContextBase {
    /**
     * The **`WebGL2RenderingContext.clearBufferfiuv`** methods of the WebGL 2 API clear buffers from the currently bound framebuffer.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/clearBuffer)
     */
    clearBufferfv(buffer: GLenum, drawbuffer: GLint, values: Iterable<GLfloat>, srcOffset?: number): void;
    /**
     * The **`WebGL2RenderingContext.clearBufferfiuv`** methods of the WebGL 2 API clear buffers from the currently bound framebuffer.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/clearBuffer)
     */
    clearBufferiv(buffer: GLenum, drawbuffer: GLint, values: Iterable<GLint>, srcOffset?: number): void;
    /**
     * The **`WebGL2RenderingContext.clearBufferfiuv`** methods of the WebGL 2 API clear buffers from the currently bound framebuffer.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/clearBuffer)
     */
    clearBufferuiv(buffer: GLenum, drawbuffer: GLint, values: Iterable<GLuint>, srcOffset?: number): void;
    /**
     * The **`WebGL2RenderingContext.drawBuffers()`** method of the WebGL 2 API defines draw buffers to which fragment colors are written into.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/drawBuffers)
     */
    drawBuffers(buffers: Iterable<GLenum>): void;
    /**
     * The **`WebGL2RenderingContext.getActiveUniforms()`** method of the WebGL 2 API retrieves information about active uniforms within a WebGLProgram.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getActiveUniforms)
     */
    getActiveUniforms(program: WebGLProgram, uniformIndices: Iterable<GLuint>, pname: GLenum): any;
    /**
     * The **`WebGL2RenderingContext.getUniformIndices()`** method of the WebGL 2 API retrieves the indices of a number of uniforms within a WebGLProgram.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getUniformIndices)
     */
    getUniformIndices(program: WebGLProgram, uniformNames: Iterable<string>): Iterable<GLuint> | null;
    /**
     * The **`WebGL2RenderingContext.invalidateFramebuffer()`** method of the WebGL 2 API invalidates the contents of attachments in a framebuffer.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/invalidateFramebuffer)
     */
    invalidateFramebuffer(target: GLenum, attachments: Iterable<GLenum>): void;
    /**
     * The **`WebGL2RenderingContext.invalidateSubFramebuffer()`** method of the WebGL 2 API invalidates portions of the contents of attachments in a framebuffer.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/invalidateSubFramebuffer)
     */
    invalidateSubFramebuffer(target: GLenum, attachments: Iterable<GLenum>, x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    /**
     * The **`WebGL2RenderingContext.transformFeedbackVaryings()`** method of the WebGL 2 API specifies values to record in WebGLTransformFeedback buffers.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/transformFeedbackVaryings)
     */
    transformFeedbackVaryings(program: WebGLProgram, varyings: Iterable<string>, bufferMode: GLenum): void;
    /**
     * The **`WebGL2RenderingContext.uniform1234][uif][v`** methods of the WebGL API specify values of uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform)
     */
    uniform1uiv(location: WebGLUniformLocation | null, data: Iterable<GLuint>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **`WebGL2RenderingContext.uniform1234][uif][v`** methods of the WebGL API specify values of uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform)
     */
    uniform2uiv(location: WebGLUniformLocation | null, data: Iterable<GLuint>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **`WebGL2RenderingContext.uniform1234][uif][v`** methods of the WebGL API specify values of uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform)
     */
    uniform3uiv(location: WebGLUniformLocation | null, data: Iterable<GLuint>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **`WebGL2RenderingContext.uniform1234][uif][v`** methods of the WebGL API specify values of uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform)
     */
    uniform4uiv(location: WebGLUniformLocation | null, data: Iterable<GLuint>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **`WebGL2RenderingContext.uniformMatrix234]x[234]fv()`** methods of the [WebGL 2 API specify matrix values for uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix)
     */
    uniformMatrix2x3fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Iterable<GLfloat>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **`WebGL2RenderingContext.uniformMatrix234]x[234]fv()`** methods of the [WebGL 2 API specify matrix values for uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix)
     */
    uniformMatrix2x4fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Iterable<GLfloat>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **`WebGL2RenderingContext.uniformMatrix234]x[234]fv()`** methods of the [WebGL 2 API specify matrix values for uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix)
     */
    uniformMatrix3x2fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Iterable<GLfloat>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **`WebGL2RenderingContext.uniformMatrix234]x[234]fv()`** methods of the [WebGL 2 API specify matrix values for uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix)
     */
    uniformMatrix3x4fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Iterable<GLfloat>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **`WebGL2RenderingContext.uniformMatrix234]x[234]fv()`** methods of the [WebGL 2 API specify matrix values for uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix)
     */
    uniformMatrix4x2fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Iterable<GLfloat>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **`WebGL2RenderingContext.uniformMatrix234]x[234]fv()`** methods of the [WebGL 2 API specify matrix values for uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix)
     */
    uniformMatrix4x3fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Iterable<GLfloat>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **`WebGL2RenderingContext.vertexAttribI4u]i[v`** methods of the WebGL 2 API specify integer values for generic vertex attributes.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/vertexAttribI)
     */
    vertexAttribI4iv(index: GLuint, values: Iterable<GLint>): void;
    /**
     * The **`WebGL2RenderingContext.vertexAttribI4u]i[v`** methods of the WebGL 2 API specify integer values for generic vertex attributes.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/vertexAttribI)
     */
    vertexAttribI4uiv(index: GLuint, values: Iterable<GLuint>): void;
}

interface WebGL2RenderingContextOverloads {
    /**
     * The **`WebGLRenderingContext.uniform1234][fi][v`** methods of the WebGL API specify values of uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform1fv(location: WebGLUniformLocation | null, data: Iterable<GLfloat>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **`WebGLRenderingContext.uniform1234][fi][v`** methods of the WebGL API specify values of uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform1iv(location: WebGLUniformLocation | null, data: Iterable<GLint>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **`WebGLRenderingContext.uniform1234][fi][v`** methods of the WebGL API specify values of uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform2fv(location: WebGLUniformLocation | null, data: Iterable<GLfloat>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **`WebGLRenderingContext.uniform1234][fi][v`** methods of the WebGL API specify values of uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform2iv(location: WebGLUniformLocation | null, data: Iterable<GLint>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **`WebGLRenderingContext.uniform1234][fi][v`** methods of the WebGL API specify values of uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform3fv(location: WebGLUniformLocation | null, data: Iterable<GLfloat>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **`WebGLRenderingContext.uniform1234][fi][v`** methods of the WebGL API specify values of uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform3iv(location: WebGLUniformLocation | null, data: Iterable<GLint>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **`WebGLRenderingContext.uniform1234][fi][v`** methods of the WebGL API specify values of uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform4fv(location: WebGLUniformLocation | null, data: Iterable<GLfloat>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **`WebGLRenderingContext.uniform1234][fi][v`** methods of the WebGL API specify values of uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform4iv(location: WebGLUniformLocation | null, data: Iterable<GLint>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **`WebGL2RenderingContext.uniformMatrix234]x[234]fv()`** methods of the [WebGL 2 API specify matrix values for uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix)
     */
    uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Iterable<GLfloat>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **`WebGLRenderingContext.uniformMatrix234]fv()`** methods of the [WebGL API specify matrix values for uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniformMatrix)
     */
    uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Iterable<GLfloat>, srcOffset?: number, srcLength?: GLuint): void;
    /**
     * The **`WebGLRenderingContext.uniformMatrix234]fv()`** methods of the [WebGL API specify matrix values for uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniformMatrix)
     */
    uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Iterable<GLfloat>, srcOffset?: number, srcLength?: GLuint): void;
}

interface WebGLRenderingContextBase {
    /**
     * The **`WebGLRenderingContext.vertexAttrib1234]f[v`** methods of the WebGL API specify constant values for generic vertex attributes.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib)
     */
    vertexAttrib1fv(index: GLuint, values: Iterable<GLfloat>): void;
    /**
     * The **`WebGLRenderingContext.vertexAttrib1234]f[v`** methods of the WebGL API specify constant values for generic vertex attributes.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib)
     */
    vertexAttrib2fv(index: GLuint, values: Iterable<GLfloat>): void;
    /**
     * The **`WebGLRenderingContext.vertexAttrib1234]f[v`** methods of the WebGL API specify constant values for generic vertex attributes.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib)
     */
    vertexAttrib3fv(index: GLuint, values: Iterable<GLfloat>): void;
    /**
     * The **`WebGLRenderingContext.vertexAttrib1234]f[v`** methods of the WebGL API specify constant values for generic vertex attributes.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib)
     */
    vertexAttrib4fv(index: GLuint, values: Iterable<GLfloat>): void;
}

interface WebGLRenderingContextOverloads {
    /**
     * The **`WebGLRenderingContext.uniform1234][fi][v`** methods of the WebGL API specify values of uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform1fv(location: WebGLUniformLocation | null, v: Iterable<GLfloat>): void;
    /**
     * The **`WebGLRenderingContext.uniform1234][fi][v`** methods of the WebGL API specify values of uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform1iv(location: WebGLUniformLocation | null, v: Iterable<GLint>): void;
    /**
     * The **`WebGLRenderingContext.uniform1234][fi][v`** methods of the WebGL API specify values of uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform2fv(location: WebGLUniformLocation | null, v: Iterable<GLfloat>): void;
    /**
     * The **`WebGLRenderingContext.uniform1234][fi][v`** methods of the WebGL API specify values of uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform2iv(location: WebGLUniformLocation | null, v: Iterable<GLint>): void;
    /**
     * The **`WebGLRenderingContext.uniform1234][fi][v`** methods of the WebGL API specify values of uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform3fv(location: WebGLUniformLocation | null, v: Iterable<GLfloat>): void;
    /**
     * The **`WebGLRenderingContext.uniform1234][fi][v`** methods of the WebGL API specify values of uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform3iv(location: WebGLUniformLocation | null, v: Iterable<GLint>): void;
    /**
     * The **`WebGLRenderingContext.uniform1234][fi][v`** methods of the WebGL API specify values of uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform4fv(location: WebGLUniformLocation | null, v: Iterable<GLfloat>): void;
    /**
     * The **`WebGLRenderingContext.uniform1234][fi][v`** methods of the WebGL API specify values of uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
     */
    uniform4iv(location: WebGLUniformLocation | null, v: Iterable<GLint>): void;
    /**
     * The **`WebGLRenderingContext.uniformMatrix234]fv()`** methods of the [WebGL API specify matrix values for uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniformMatrix)
     */
    uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Iterable<GLfloat>): void;
    /**
     * The **`WebGLRenderingContext.uniformMatrix234]fv()`** methods of the [WebGL API specify matrix values for uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniformMatrix)
     */
    uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Iterable<GLfloat>): void;
    /**
     * The **`WebGLRenderingContext.uniformMatrix234]fv()`** methods of the [WebGL API specify matrix values for uniform variables.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniformMatrix)
     */
    uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Iterable<GLfloat>): void;
}
