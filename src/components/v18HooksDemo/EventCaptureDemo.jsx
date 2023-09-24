const EventCapture = () => {

    return (
        <div style={{border: '1px solid red'}} onClickCapture={() => { /* this runs first */
            alert('Click on Div')
        }}>
        <button onClick={e => {
            e.stopPropagation();
            alert('Click on b1');
        }} >Click me 1</button>
        <button onClick={e => e.stopPropagation()} >Clicke Me 2 </button>
      </div>
    )
};

export default EventCapture;