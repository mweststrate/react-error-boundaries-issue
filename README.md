Reproduction of error handling issue in React. Error Boundaries cannot prevent exceptions from escape, killing test runners like `tape-run`. See https://github.com/facebook/react/issues/10474

Reproduction:

```
yarn install
yarn test
```