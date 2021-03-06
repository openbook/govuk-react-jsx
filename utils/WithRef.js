import React, { useEffect, useRef } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

function WithRef(props) {
  const ref = useRef();
  const { Component, ...restProps } = props;

  useEffect(() => {
    console.log(ref);
  });

  return (
    <>
      <Component {...restProps} ref={ref} />
      <p className="govuk-body">
        In order to get a handle on the underlying DOM element, an additonal{' '}
        <code>ref</code> prop can be given which will be passed through{' '}
        <code>React.forwardRef</code> and onto the underlying element. See{' '}
        <a href="https://reactjs.org/docs/forwarding-refs.html">
          https://reactjs.org/docs/forwarding-refs.html
        </a>
      </p>
      <code>
        <pre>
          const ref = useRef();
          <br />
          {reactElementToJSXString(
            <Component {...restProps} foo="foo" />
          ).replace('foo="foo"', 'ref={ref}')}
        </pre>
      </code>
      <p className="govuk-body">
        <code>ref</code> will now contain a reference to the DOM element
        rendered by the component. See devtools console for an example.
        Currently this only applies to form elements.
      </p>
      <p className="govuk-body">
        In simple cases such as the <code>Button</code> component, this will be
        the top level element. In more complex cases such as the{' '}
        <code>Input</code> component, the ref will refer to to the form element
        rather than the wrapping div.
      </p>
      <p className="govuk-body">
        In situations where an element returns multiple elements such as the
        DateInput component, React.forwardRef is not used - instead the
        components expect refs to be assigned as part of the <code>items</code>{' '}
        prop.
      </p>
    </>
  );
}

function WithItemRefs(props) {
  const refs = [];
  const { Component, ...restProps } = props;

  useEffect(() => {
    console.log(refs);
  });

  const modifiedProps = { ...restProps };

  modifiedProps.items = restProps.items.map((item) => {
    const ref = React.createRef();
    refs.push(ref);
    return {
      ...item,
      ref,
    };
  });

  return (
    <>
      <Component {...modifiedProps} />
      <p className="govuk-body">
        In order to get a handle on the underlying DOM element, an additonal{' '}
        <code>ref</code> prop can be assigned to individual items which will be
        passed through onto the underlying element.
      </p>
      <p className="govuk-body">
        Each individual <code>ref</code> will now contain a reference to the DOM
        element rendered by the component. See devtools console for an example.
        Currently this only applies to form elements.
      </p>
    </>
  );
}

export { WithRef, WithItemRefs };
