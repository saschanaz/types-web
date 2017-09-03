
/////////////////////////////
/// DOM ES6 APIs
/////////////////////////////

interface MediaList {
    [Symbol.iterator](): IterableIterator<string>
}

interface StyleSheetList {
    [Symbol.iterator](): IterableIterator<StyleSheet>
}

interface CSSRuleList {
    [Symbol.iterator](): IterableIterator<CSSRule>
}

interface CSSStyleDeclaration {
    [Symbol.iterator](): IterableIterator<string>
}

interface NodeList {
    [Symbol.iterator](): IterableIterator<Node>
}

interface HTMLCollection {
    [Symbol.iterator](): IterableIterator<Element>
}

interface NamedNodeMap {
    [Symbol.iterator](): IterableIterator<Attr>
}

interface DOMTokenList {
    [Symbol.iterator](): IterableIterator<string>
}

interface FileList {
    [Symbol.iterator](): IterableIterator<File>
}

interface HTMLAllCollection {
    [Symbol.iterator](): IterableIterator<Element>
}

interface DOMStringList {
    [Symbol.iterator](): IterableIterator<string>
}

interface AudioTrackList {
    [Symbol.iterator](): IterableIterator<AudioTrack>
}

interface VideoTrackList {
    [Symbol.iterator](): IterableIterator<VideoTrack>
}

interface TextTrackList {
    [Symbol.iterator](): IterableIterator<TextTrack>
}

interface TextTrackCueList {
    [Symbol.iterator](): IterableIterator<TextTrackCue>
}

interface HTMLFormElement {
    [Symbol.iterator](): IterableIterator<Element>
}

interface HTMLSelectElement {
    [Symbol.iterator](): IterableIterator<Element>
}

interface DataTransferItemList {
    [Symbol.iterator](): IterableIterator<DataTransferItem>
}

interface PluginArray {
    [Symbol.iterator](): IterableIterator<Plugin>
}

interface MimeTypeArray {
    [Symbol.iterator](): IterableIterator<MimeType>
}

interface Plugin {
    [Symbol.iterator](): IterableIterator<MimeType>
}

interface SourceBufferList {
    [Symbol.iterator](): IterableIterator<SourceBuffer>
}

interface SVGNumberList {
    [Symbol.iterator](): IterableIterator<SVGNumber>
}

interface SVGLengthList {
    [Symbol.iterator](): IterableIterator<SVGLength>
}

interface SVGStringList {
    [Symbol.iterator](): IterableIterator<string>
}

interface SVGTransformList {
    [Symbol.iterator](): IterableIterator<SVGTransform>
}

interface SVGPointList {
    [Symbol.iterator](): IterableIterator<DOMPoint>
}

interface TouchList {
    [Symbol.iterator](): IterableIterator<Touch>
}

interface SpeechRecognitionResult {
    [Symbol.iterator](): IterableIterator<SpeechRecognitionAlternative>
}

interface SpeechRecognitionResultList {
    [Symbol.iterator](): IterableIterator<SpeechRecognitionResult>
}

interface SpeechGrammarList {
    [Symbol.iterator](): IterableIterator<SpeechGrammar>
}
