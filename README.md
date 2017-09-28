Reproduction of error handling issue in React. Error Boundaries cannot prevent exceptions from escape, killing test runners like `tape-run`. See https://github.com/facebook/react/issues/10474

Reproduction:

```
yarn install
yarn test
```

Expected output: (comment index.js:26 to see it)

```
# ErrorCatcher should work
Warning: render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.
ok 1 should be truthy
# Succesful test
ok 2 should be truthy

1..2
# tests 2
# pass  2

# ok
```

Resulting output:

```
> 61o0vxlw4k@0.0.0 test /home/michel/tmp/react-error-handling
> browserify index.js -t [ babelify --presets [ es2015 react ] ] | tape-run

TAP version 13
# ErrorCatcher should work
Warning: render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.
Error: Oops
    at C (http://localhost:35217/bundle.js:64:11)
    at mountIndeterminateComponent (http://localhost:35217/bundle.js:15919:15)
    at beginWork (http://localhost:35217/bundle.js:16120:16)
    at performUnitOfWork (http://localhost:35217/bundle.js:18092:16)
    at workLoop (http://localhost:35217/bundle.js:18201:28)
    at HTMLUnknownElement.callCallback (http://localhost:35217/bundle.js:6818:14)
    at Object.invokeGuardedCallbackDev (http://localhost:35217/bundle.js:6857:16)
    at invokeGuardedCallback (http://localhost:35217/bundle.js:6714:27)
    at performWork (http://localhost:35217/bundle.js:18319:7)
    at scheduleUpdateImpl (http://localhost:35217/bundle.js:18704:19)
```