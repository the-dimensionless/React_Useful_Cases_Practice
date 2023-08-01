import React from 'react';
const SampleComponent = (props) => {
    const { id, data, handleChange, error } = props;
    console.log('Sample Component', id, error);
    return (
        <div>
            <p>Sample Component {id}:{data.age}</p>
            {error && <p>Error State</p>}
            <button name='Change first' onClick={(e) => {
                handleChange(id, { age: data.age + 10 });
            }}>Change {id}</button>
        </div>
    )
};

export default React.memo(SampleComponent);