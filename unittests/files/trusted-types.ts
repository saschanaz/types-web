declare const assertNotAssignable: <T>() => <T1>(
  _x: T1,
) => T1 extends T
  ? { error: "Right side should not be assignable to left side" }
  : () => void;

const policy = trustedTypes.createPolicy("policy");

document.body.innerHTML = "foo";
document.body.innerHTML = policy.createHTML("foo");

declare const position: GeolocationPosition;
assertNotAssignable<typeof document.head.innerHTML>()(position)();

const html: string = document.body.innerHTML;
