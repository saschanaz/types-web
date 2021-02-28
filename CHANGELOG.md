# v0.1.7

## Modified

* CSSStyleDeclaration
  * Removed: `colorAdjust`

### Non-value types

* WindowOrWorkerGlobalScope
  * Added: `crossOriginIsolated`

# v0.1.6

## New interfaces

* `ClipboardItem`
* `RTCIceTransport`

## Modified

* CSSStyleDeclaration
  * Added: `borderEndEndRadius`, `borderEndStartRadius`, `borderStartEndRadius`, `borderStartStartRadius`
* Document
  * Added: `pictureInPictureEnabled`, `exitPictureInPicture`
* HTMLInputElement
  * Added: `capture`
* HTMLMediaElement
  * Added: `remote`
* SVGAnimationElement
  * Added: `beginElement`, `beginElementAt`, `endElement`, `endElementAt`

# v0.1.4

## Modified

* ByteLengthQueuingStrategy
  * Added: `highWaterMark`
* CountQueuingStrategy
  * Added: `highWaterMark`

# v0.1.3

* Adds `sharedworker*`, `serviceworker*`, and `audioworklet*` libraries.

# v0.1.2

## Modified

* KeyboardEvent
  * Removed: `char`
* Node
  * Removed: `namespaceURI`

### Non-value types

* GlobalEventHandlersEventMap
  * Added: `"beforeinput"`, `"compositionend"`, `"compositionstart"`, `"compositionupdate"`

# v0.1.0

The first release. Since [the initial fork](https://github.com/saschanaz/types-web/commit/156df3198f8c2d5c3358c5c201d776095d8a8cbd):

## New interfaces

* `BlobEvent`
* `CSSAnimation`
* `CSSTransition`
* `FileSystem`
* `FileSystemDirectoryEntry`
* `FileSystemDirectoryReader`
* `FileSystemEntry`
* `FileSystemFileEntry`
* `FontFace`
* `FontFaceSet`
* `FontFaceSetLoadEvent`
* `FormDataEvent`
* `IdleDeadline`
* `MediaCapabilities`
* `MediaMetadata`
* `MediaRecorder`
* `MediaSession`
* `NetworkInformation`
* `PaymentMethodChangeEvent`
* `PerformanceServerTiming`
* `PictureInPictureWindow`
* `RemotePlayback`
* `ResizeObserver`
* `ResizeObserverEntry`
* `ResizeObserverSize`
* `SVGMPathElement`
* `SVGSetElement`
* `SubmitEvent`

## Removed interfaces

* `ApplicationCache`
* `BhxBrowser`
* `CaretPosition`
* `ClientRect`
* `ClientRectList`
* `CryptoKeyPair`
* `DOMError`
* `DOMSettableTokenList`
* `DataCue`
* `DeferredPermissionRequest`
* `DeviceAcceleration`
* `DeviceLightEvent`
* `DeviceRotationRate`
* `ExtensionScriptApis`
* `FocusNavigationEvent`
* `GamepadPose`
* `HTMLAppletElement`
* `HTMLBaseFontElement`
* `HTMLDialogElement`
* `HTMLDocument`
* `HTMLTableDataCellElement`
* `HTMLTableHeaderCellElement`
* `InputDeviceInfo`
* `ListeningStateChangedEvent`
* `MSAssertion`
* `MSBlobBuilder`
* `MSFIDOCredentialAssertion`
* `MSFIDOSignature`
* `MSFIDOSignatureAssertion`
* `MSGesture`
* `MSGestureEvent`
* `MSGraphicsTrust`
* `MSInputMethodContext`
* `MSMediaKeyError`
* `MSMediaKeyMessageEvent`
* `MSMediaKeyNeededEvent`
* `MSMediaKeySession`
* `MSMediaKeys`
* `MSPointerEvent`
* `MSStream`
* `MediaStreamError`
* `MediaStreamErrorEvent`
* `MediaStreamEvent`
* `MediaStreamTrackAudioSourceNode`
* `NavigationPreloadManager`
* `NodeFilter`
* `OffscreenCanvas`
* `OffscreenCanvasRenderingContext2D`
* `OverflowEvent`
* `PerfWidgetExternal`
* `PermissionRequest`
* `PermissionRequestedEvent`
* `RTCDtlsTransportStateChangedEvent`
* `RTCDtmfSender`
* `RTCError`
* `RTCErrorEvent`
* `RTCIceCandidatePairChangedEvent`
* `RTCIceGatherer`
* `RTCIceGathererEvent`
* `RTCIceTransport`
* `RTCIceTransportStateChangedEvent`
* `RTCIdentityAssertion`
* `RTCPeerConnectionIceErrorEvent`
* `RTCSctpTransport`
* `RTCSrtpSdesTransport`
* `RTCSsrcConflictEvent`
* `RTCStatsEvent`
* `RTCStatsProvider`
* `RandomSource`
* `SVGElementInstance`
* `SVGElementInstanceList`
* `SVGPathSeg`
* `SVGPathSegArcAbs`
* `SVGPathSegArcRel`
* `SVGPathSegClosePath`
* `SVGPathSegCurvetoCubicAbs`
* `SVGPathSegCurvetoCubicRel`
* `SVGPathSegCurvetoCubicSmoothAbs`
* `SVGPathSegCurvetoCubicSmoothRel`
* `SVGPathSegCurvetoQuadraticAbs`
* `SVGPathSegCurvetoQuadraticRel`
* `SVGPathSegCurvetoQuadraticSmoothAbs`
* `SVGPathSegCurvetoQuadraticSmoothRel`
* `SVGPathSegLinetoAbs`
* `SVGPathSegLinetoHorizontalAbs`
* `SVGPathSegLinetoHorizontalRel`
* `SVGPathSegLinetoRel`
* `SVGPathSegLinetoVerticalAbs`
* `SVGPathSegLinetoVerticalRel`
* `SVGPathSegList`
* `SVGPathSegMovetoAbs`
* `SVGPathSegMovetoRel`
* `SVGZoomAndPan`
* `SVGZoomEvent`
* `ScopedCredential`
* `ScopedCredentialInfo`
* `ServiceUIFrameContext`
* `ServiceWorkerMessageEvent`
* `SpeechGrammar`
* `SpeechGrammarList`
* `SpeechRecognition`
* `SpeechRecognitionAlternative`
* `SpeechRecognitionErrorEvent`
* `SpeechRecognitionEvent`
* `SpeechRecognitionResult`
* `SpeechRecognitionResultList`
* `StyleMedia`
* `SyncManager`
* `TextEvent`
* `VRDisplay`
* `VRDisplayCapabilities`
* `VRDisplayEvent`
* `VREyeParameters`
* `VRFieldOfView`
* `VRFrameData`
* `VRPose`
* `WebAuthentication`
* `WebAuthnAssertion`
* `WebGLObject`
* `WebKitPoint`
* `webkitRTCPeerConnection`

## Modified

* Animation
  * Added: `onremove`, `replaceState`, `commitStyles`, `persist`
* AudioContext
  * Removed: `outputLatency`, `createMediaStreamTrackSource`
* AudioListener
  * Removed: `forwardX`, `forwardY`, `forwardZ`, `positionX`, `positionY`, `positionZ`, `upX`, `upY`, `upZ`
* AudioParam
  * Removed: `automationRate`, `cancelAndHoldAtTime`
* ByteLengthQueuingStrategy
  * Removed: `highWaterMark`
* CSSStyleDeclaration
  * Added: `appearance`, `backgroundBlendMode`, `borderBlock`, `borderBlockColor`, `borderBlockStyle`, `borderBlockWidth`, `borderInline`, `borderInlineColor`, `borderInlineStyle`, `borderInlineWidth`, `colorAdjust`, `colorScheme`, `contain`, `counterSet`, `fontOpticalSizing`, `fontVariationSettings`, `inset`, `insetBlock`, `insetBlockEnd`, `insetBlockStart`, `insetInline`, `insetInlineEnd`, `insetInlineStart`, `isolation`, `marginBlock`, `marginInline`, `mixBlendMode`, `offset`, `offsetAnchor`, `offsetDistance`, `offsetPath`, `offsetRotate`, `paddingBlock`, `paddingInline`, `scrollMargin`, `scrollMarginBlock`, `scrollMarginBlockEnd`, `scrollMarginBlockStart`, `scrollMarginBottom`, `scrollMarginInlineEnd`, `scrollMarginInlineStart`, `scrollMarginLeft`, `scrollMarginRight`, `scrollMarginTop`, `scrollPadding`, `scrollPaddingBlock`, `scrollPaddingBlockEnd`, `scrollPaddingBlockStart`, `scrollPaddingBottom`, `scrollPaddingInline`, `scrollPaddingInlineEnd`, `scrollPaddingInlineStart`, `scrollPaddingLeft`, `scrollPaddingRight`, `scrollPaddingTop`, `scrollSnapAlign`, `scrollSnapType`, `shapeImageThreshold`, `shapeMargin`, `shapeOutside`, `textDecorationSkipInk`, `textDecorationThickness`, `textUnderlineOffset`
  * Removed: `glyphOrientationVertical`, `maskComposite`, `maskImage`, `maskPosition`, `maskRepeat`, `maskSize`, `rubyAlign`, `textJustify`, `webkitTapHighlightColor`, `zoom`
* CountQueuingStrategy
  * Removed: `highWaterMark`
* DOMMatrix
  * Removed: `a`, `b`, `c`, `d`, `e`, `f`, `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`
* DOMPoint
  * Removed: `w`, `x`, `y`, `z`
* DOMRect
  * Removed: `height`, `width`, `x`, `y`
* DataTransferItemList
  * Removed: `item`
* Document
  * Added: `hasStorageAccess`, `requestStorageAccess`
  * Removed: `caretPositionFromPoint`, `caretRangeFromPoint`, `getAnimations`
* DocumentFragment
  * Removed: `ownerDocument`, `getElementById`
* Element
  * Added: `part`
  * Removed: `msGetRegionContent`
* File
  * Added: `webkitRelativePath`
* Gamepad
  * Removed: `hand`, `pose`
* GamepadHapticActuator
  * Removed: `pulse`
* HTMLCanvasElement
  * Added: `captureStream`
  * Removed: `transferControlToOffscreen`
* HTMLFormElement
  * Added: `requestSubmit`
* HTMLIFrameElement
  * Removed: `allowPaymentRequest`
* HTMLInputElement
  * Added: `webkitEntries`, `webkitdirectory`
* HTMLMarqueeElement
  * Removed: `onbounce`, `onfinish`, `onstart`
* HTMLMediaElement
  * Added: `disableRemotePlayback`
* HTMLOptGroupElement
  * Removed: `form`
* HTMLVideoElement
  * Added: `disablePictureInPicture`, `onenterpictureinpicture`, `onleavepictureinpicture`, `requestPictureInPicture`
* IDBCursor
  * Added: `request`
* IDBFactory
  * Added: `databases`
* IDBTransaction
  * Added: `commit`
* InputEvent
  * Added: `dataTransfer`, `getTargetRanges`
* KeyframeEffect
  * Added: `pseudoElement`
  * Removed: `iterationComposite`
* MediaDevices
  * Added: `getDisplayMedia`
* MediaStreamTrack
  * Added: `contentHint`
  * Removed: `isolated`, `onisolationchange`
* MessageEvent
  * Added: `initMessageEvent`
* Navigator
  * Added: `mediaCapabilities`, `mediaSession`
  * Removed: `activeVRDisplays`, `msManipulationViewsEnabled`, `msMaxTouchPoints`, `msPointerEnabled`, `getUserMedia`, `getVRDisplays`, `msLaunchUri`
* Notification
  * Removed: `actions`, `badge`, `image`, `renotify`, `requireInteraction`, `silent`, `timestamp`, `vibrate`
* OfflineAudioContext
  * Removed: `suspend`
* PaymentAddress
  * Removed: `languageCode`
* PaymentRequest
  * Added: `onpaymentmethodchange`
* PaymentResponse
  * Added: `onpayerdetailchange`, `retry`, `addEventListener`, `removeEventListener`
* PerformanceResourceTiming
  * Added: `serverTiming`
* PointerEvent
  * Removed: `getPredictedEvents`
* PushSubscription
  * Removed: `expirationTime`
* PushSubscriptionOptions
  * Removed: `userVisibleOnly`
* RTCDataChannel
  * Removed: `priority`
* RTCDtlsTransport
  * Removed: `iceTransport`, `onerror`, `getRemoteCertificates`
* RTCIceCandidate
  * Removed: `component`, `foundation`, `port`, `priority`, `protocol`, `relatedAddress`, `relatedPort`, `tcpType`, `type`
* RTCPeerConnection
  * Added: `restartIce`
  * Removed: `idpErrorInfo`, `idpLoginUrl`, `onicecandidateerror`, `onstatsended`, `peerIdentity`, `sctp`, `getIdentityAssertion`, `setIdentityProvider`
* RTCPeerConnectionIceEvent
  * Removed: `url`
* RTCRtpReceiver
  * Removed: `rtcpTransport`
* RTCRtpSender
  * Removed: `rtcpTransport`, `setStreams`
* RTCRtpTransceiver
  * Removed: `setCodecPreferences`
* ReadableStream
  * Added: `forEach`
* Request
  * Removed: `isHistoryNavigation`, `isReloadNavigation`
* Response
  * Removed: `trailer`
* SVGAElement
  * Added: `rel`, `relList`
* SVGPathElement
  * Removed: `pathSegList`, `createSVGPathSegArcAbs`, `createSVGPathSegArcRel`, `createSVGPathSegClosePath`, `createSVGPathSegCurvetoCubicAbs`, `createSVGPathSegCurvetoCubicRel`, `createSVGPathSegCurvetoCubicSmoothAbs`, `createSVGPathSegCurvetoCubicSmoothRel`, `createSVGPathSegCurvetoQuadraticAbs`, `createSVGPathSegCurvetoQuadraticRel`, `createSVGPathSegCurvetoQuadraticSmoothAbs`, `createSVGPathSegCurvetoQuadraticSmoothRel`, `createSVGPathSegLinetoAbs`, `createSVGPathSegLinetoHorizontalAbs`, `createSVGPathSegLinetoHorizontalRel`, `createSVGPathSegLinetoRel`, `createSVGPathSegLinetoVerticalAbs`, `createSVGPathSegLinetoVerticalRel`, `createSVGPathSegMovetoAbs`, `createSVGPathSegMovetoRel`, `getPathSegAtLength`, `getPointAtLength`, `getTotalLength`
* SVGSVGElement
  * Removed: `contentScriptType`, `contentStyleType`, `onunload`, `onzoom`, `pixelUnitToMillimeterX`, `pixelUnitToMillimeterY`, `screenPixelToMillimeterX`, `screenPixelToMillimeterY`, `viewport`, `getComputedStyle`
* SVGTransformList
  * Added: `length`
* SVGUseElement
  * Removed: `animatedInstanceRoot`, `instanceRoot`
* SVGViewElement
  * Removed: `viewTarget`
* SecurityPolicyViolationEvent
  * Added: `disposition`, `sample`
* ServiceWorkerRegistration
  * Removed: `navigationPreload`, `sync`
* StorageEvent
  * Added: `initStorageEvent`
* TextMetrics
  * Removed: `alphabeticBaseline`, `emHeightAscent`, `emHeightDescent`, `hangingBaseline`, `ideographicBaseline`
* TextTrack
  * Removed: `sourceBuffer`
* Touch
  * Removed: `altitudeAngle`, `azimuthAngle`, `touchType`
* UIEvent
  * Added: `initUIEvent`
* VTTCue
  * Removed: `lineAlign`, `positionAlign`, `region`
* VideoPlaybackQuality
  * Added: `corruptedVideoFrames`
* Window
  * Added: `HTMLDocument`, `cancelIdleCallback`, `requestIdleCallback`
  * Removed: `applicationCache`, `clientInformation`, `defaultStatus`, `doNotTrack`, `msContentScript`, `offscreenBuffering`, `oncompassneedscalibration`, `ondevicelight`, `ondeviceorientationabsolute`, `ongamepadconnected`, `ongamepaddisconnected`, `onmousewheel`, `onmsgesturechange`, `onmsgesturedoubletap`, `onmsgestureend`, `onmsgesturehold`, `onmsgesturestart`, `onmsgesturetap`, `onmsinertiastart`, `onmspointercancel`, `onmspointerdown`, `onmspointerenter`, `onmspointerleave`, `onmspointermove`, `onmspointerout`, `onmspointerover`, `onmspointerup`, `onreadystatechange`, `onvrdisplayactivate`, `onvrdisplayblur`, `onvrdisplayconnect`, `onvrdisplaydeactivate`, `onvrdisplaydisconnect`, `onvrdisplayfocus`, `onvrdisplaypointerrestricted`, `onvrdisplaypointerunrestricted`, `onvrdisplaypresentchange`, `styleMedia`, `departFocus`, `getMatchedCSSRules`, `msWriteProfilerMark`, `webkitCancelAnimationFrame`, `webkitConvertPointFromNodeToPage`, `webkitConvertPointFromPageToNode`, `webkitRequestAnimationFrame`
* WritableStream
  * Added: `close`

### Non-value types

* AddEventListenerOptions
  * Added: `signal`
* InputEventInit
  * Added: `dataTransfer`, `targetRanges`
* KeyframeEffectOptions
  * Added: `pseudoElement`
  * Removed: `iterationComposite`
* MediaKeySystemMediaCapability
  * Added: `encryptionScheme`
* MediaTrackConstraintSet
  * Removed: `autoGainControl`, `noiseSuppression`, `resizeMode`
* MediaTrackSettings
  * Removed: `autoGainControl`, `channelCount`, `latency`, `noiseSuppression`, `resizeMode`
* MediaTrackSupportedConstraints
  * Removed: `autoGainControl`, `channelCount`, `latency`, `noiseSuppression`, `resizeMode`
* PaymentCurrencyAmount
  * Removed: `currencySystem`
* PaymentDetailsUpdate
  * Added: `payerErrors`, `paymentMethodErrors`, `shippingAddressErrors`
* PaymentOptions
  * Added: `requestBillingAddress`
* RTCConfiguration
  * Removed: `peerIdentity`
* RTCDataChannelInit
  * Removed: `priority`
* RTCIceCandidatePairStats
  * Added: `currentRoundTripTime`, `requestsReceived`, `requestsSent`, `responsesReceived`, `responsesSent`, `totalRoundTripTime`
  * Removed: `priority`, `readable`, `roundTripTime`, `writable`
* RTCOfferAnswerOptions
  * Removed: `voiceActivityDetection`
* RTCRtpEncodingParameters
  * Added: `priority`
  * Removed: `codecPayloadType`, `dtx`, `maxFramerate`, `ptime`
* RTCRtpReceiveParameters
  * Removed: `encodings`
* RTCRtpSendParameters
  * Removed: `priority`
* RTCRtpSynchronizationSource
  * Removed: `voiceActivityFlag`
* RTCTransportStats
  * Added: `dtlsCipher`, `dtlsState`, `srtpCipher`, `tlsVersion`
  * Removed: `activeConnection`
* SecurityPolicyViolationEventInit
  * Added: `blockedURL`, `colno`, `disposition`, `documentURL`, `lineno`, `sample`
  * Removed: `violatedDirective`
* ShareData
  * Added: `files`
* UIEventInit
  * Added: `which`
* AnimationEventMap
  * Added: `"remove"`
* DocumentOrShadowRoot
  * Added: `pictureInPictureElement`, `getAnimations`
  * Removed: `caretPositionFromPoint`, `caretRangeFromPoint`, `elementFromPoint`, `elementsFromPoint`, `getSelection`
* GlobalEventHandlersEventMap
  * Added: `"formdata"`, `"webkitanimationend"`, `"webkitanimationiteration"`, `"webkitanimationstart"`, `"webkittransitionend"`
  * Removed: `"cancel"`, `"dragexit"`
* GlobalEventHandlers
  * Added: `onformdata`, `onwebkitanimationend`, `onwebkitanimationiteration`, `onwebkitanimationstart`, `onwebkittransitionend`
  * Removed: `oncancel`, `ondragexit`
* MediaStreamTrackEventMap
  * Removed: `"isolationchange"`
* ParentNode
  * Added: `replaceChildren`
* PaymentRequestEventMap
  * Added: `"paymentmethodchange"`
* RTCDtlsTransportEventMap
  * Removed: `"error"`
* RTCPeerConnectionEventMap
  * Removed: `"icecandidateerror"`, `"statsended"`
* SVGSVGElementEventMap
  * Removed: `"SVGUnload"`, `"SVGZoom"`
* WebGLRenderingContextBase
  * Removed: `canvas`
* WindowEventMap
  * Removed: `"abort"`, `"afterprint"`, `"beforeprint"`, `"beforeunload"`, `"blur"`, `"canplay"`, `"canplaythrough"`, `"change"`, `"click"`, `"compassneedscalibration"`, `"contextmenu"`, `"dblclick"`, `"devicelight"`, `"deviceorientationabsolute"`, `"drag"`, `"dragend"`, `"dragenter"`, `"dragleave"`, `"dragover"`, `"dragstart"`, `"drop"`, `"durationchange"`, `"emptied"`, `"ended"`, `"error"`, `"focus"`, `"hashchange"`, `"input"`, `"invalid"`, `"keydown"`, `"keypress"`, `"keyup"`, `"load"`, `"loadeddata"`, `"loadedmetadata"`, `"loadstart"`, `"message"`, `"mousedown"`, `"mouseenter"`, `"mouseleave"`, `"mousemove"`, `"mouseout"`, `"mouseover"`, `"mouseup"`, `"mousewheel"`, `"MSGestureChange"`, `"MSGestureDoubleTap"`, `"MSGestureEnd"`, `"MSGestureHold"`, `"MSGestureStart"`, `"MSGestureTap"`, `"MSInertiaStart"`, `"MSPointerCancel"`, `"MSPointerDown"`, `"MSPointerEnter"`, `"MSPointerLeave"`, `"MSPointerMove"`, `"MSPointerOut"`, `"MSPointerOver"`, `"MSPointerUp"`, `"offline"`, `"online"`, `"pagehide"`, `"pageshow"`, `"pause"`, `"play"`, `"playing"`, `"popstate"`, `"progress"`, `"ratechange"`, `"readystatechange"`, `"reset"`, `"resize"`, `"scroll"`, `"seeked"`, `"seeking"`, `"select"`, `"stalled"`, `"storage"`, `"submit"`, `"suspend"`, `"timeupdate"`, `"unload"`, `"volumechange"`, `"vrdisplayactivate"`, `"vrdisplayblur"`, `"vrdisplayconnect"`, `"vrdisplaydeactivate"`, `"vrdisplaydisconnect"`, `"vrdisplayfocus"`, `"vrdisplaypointerrestricted"`, `"vrdisplaypointerunrestricted"`, `"vrdisplaypresentchange"`, `"waiting"`
* Console
  * Removed: `memory`, `exception`
* HTMLElementTagNameMap
  * Removed: `"applet"`, `"basefont"`, `"dialog"`
