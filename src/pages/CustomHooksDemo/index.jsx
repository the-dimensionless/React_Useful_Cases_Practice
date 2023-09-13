import { useLocalStorage, useSessionStorage } from "../../components/customHooks/UseStorageEx";

const CustomHooksDemo = () => {
    // https://dev.to/sergeyleschev/series/24106
    // https://dev.to/sergeyleschev/supercharge-your-react-projects-with-custom-hooks-pl4

    const [name, setName, removeName] = useSessionStorage("name", "Sumit");
    const [age, setAge, removeAge] = useLocalStorage("age", 25);
    return (
        <>
            <p>Hi from Custom Hooks</p>
            <div>
                <div>
                    {name}, {age}
                </div>

                <div>
                    <button onClick={() => setName("Shweta")} >Set Name</button>
                </div>
                <div>
                    <button onClick={() => setAge(27)} >Set Age</button>
                </div>
                <div>
                    <button onClick={removeName} >Remove Name</button>
                </div>
                <div>
                    <button onClick={removeAge} >Remove Age</button>
                </div>
            </div>
        </>
    )
};

export default CustomHooksDemo;