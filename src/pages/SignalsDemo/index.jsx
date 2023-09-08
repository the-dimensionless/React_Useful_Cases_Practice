const SignalsDemo = () => {

    // MUST: 
    // https://www.builder.io/blog/signals-vs-observables
    // https://www.builder.io/blog/usesignal-is-the-future-of-web-frameworks

    // A signal is an object that has a value and can be observed for changes.
    //  It is similar to a state, but it is not bound to a component.
    //   It can be used to share data between components.
    //    It updates the components when the signal changes and
    //     updates the UI without re-rendering the whole component.

    return (
        <p>Hi Signals</p>
    )
};

export default SignalsDemo;