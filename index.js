import React from "react";
import test from "tape";
import { render } from "react-dom";

export default class ErrorCatcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

test("ErrorCatcher should work", t => {
  const C = () => {
    // Try commenting next line for expected output:
    // throw new Error("Oops");
    return null
  };

  const B = () => (
    <ErrorCatcher>
      <C />
    </ErrorCatcher>
  );

  render(<B />, document.body, () => {
    t.ok("test doesn't die")
    t.end()
  });
});

test("Succesful test", t=> {
  t.ok(true)
  t.end()
})