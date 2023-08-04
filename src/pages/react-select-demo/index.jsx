import Select from "react-select";
import './index.css';

const ReactSelectDemo = () => {
    const options = [
        { value: "blues", label: "Blues", info: "wow" },
        { value: "rock", label: "Rock" , info: "aww"},
        { value: "jazz", label: "Jazz" , info: 'yuck'},
        { value: "orchestra", label: "Orchestra", info: "please" },
    ];

    const MyOption = ({info, label, value}) => {
        return (
            <div className="custom-option">
                <h4>{label}</h4>
                <div className="sub">{info} </div>
            </div>
        );
    };
    return (
        <div>
            HI
            <Select formatOptionLabel={MyOption} options={options} />
        </div>
    )
};

export default ReactSelectDemo;