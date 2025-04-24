/////////////////////////////
/// Worker Iterable APIs
/////////////////////////////

interface CSSNumericArray {
    [Symbol.iterator](): ArrayIterator<CSSNumericValue>;
    entries(): ArrayIterator<[number, CSSNumericValue]>;
    keys(): ArrayIterator<number>;
    values(): ArrayIterator<CSSNumericValue>;
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

interface DOMStringList {
    [Symbol.iterator](): ArrayIterator<string>;
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

interface MessageEvent<T = any> {
    /** @deprecated */
    initMessageEvent(type: string, bubbles?: boolean, cancelable?: boolean, data?: any, origin?: string, lastEventId?: string, source?: MessageEventSource | null, ports?: Iterable<MessagePort>): void;
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
