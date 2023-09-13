import { styled } from "styled-components";

const H1 = styled.h1`
color: red;
font-size: 2rem;
`

const DefaultButton = styled.button`
    background-color: ${(props) => (props.red ? 'red' : '#645cfc')};
    border: none;
    margin: ${({ margin }) => margin ? margin : '5px'};
    padding: 10px;
    color: white;
`

const ExtendedButton = styled(DefaultButton)`
    display: block;
    width: auto;
    border-radius: 20px;
`

const Wrapper = styled.div`
    padding: 20px;

    h1 {
        color: violet;
    }

    p {
        font-size: 20px;
    }

    button {
        background-color: pink;
        padding: 4px 8px;
        border: none;
    }
`

const SampleReactComponent = ({className}) => (
    <div className={className}>
        <h2>Styling Existing React Component</h2>
        <button>Click Me !</button>
    </div>
);

const WrappedReactComponent = styled(SampleReactComponent)`
    h2 {
        color: green;
        text-align: center;
    }

    button{
        padding: 4px 10px;
        background-color: var(--primary-color);
        border: none;
    }
`

const StyledComponentsDemo = () => {
    return (
        <div>
            <H1>Styled H1 Component</H1>
            <p>Cillum culpa deserunt enim et eiusmod quis proident consequat tempor ipsum sunt esse.</p>
            <DefaultButton>Click ME!</DefaultButton>
            <br />
            <DefaultButton margin='10px' red>Click ME with Props!</DefaultButton>
            <ExtendedButton>Button that extends Default Button</ExtendedButton>
            <Wrapper>
                <h1>Nested Style Example</h1>
                <H1>Nested Style takes preference over styled comp</H1>
                <p> Sample Paragraph </p>
                <button>Sample Button</button>
            </Wrapper>

            <SampleReactComponent />
            <WrappedReactComponent />
        </div>
    )
};


export default StyledComponentsDemo;