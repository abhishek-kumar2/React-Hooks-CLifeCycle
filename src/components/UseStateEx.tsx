import React, {ChangeEvent, useState} from 'react';

const UseStateEx = () => {
    //Variables
    const initialState = {name1: '', name2: ''};

    //States definitions
    const [counter, setCounter] = useState(0);
    const [infoData, setInfoData] = useState(initialState);

    /* const increaseCount = () => {
        setCounter(counter + 1);
    } */ // one Way

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        console.log(name, value);
        setInfoData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <>
            <div>Use State Hook Example counter is {counter}</div>
            {/*<p><button onClick={increaseCount}>Increase Counter</button></p></>*/ /* one Way */}
            <p>
                <button onClick={() => setCounter((c) => c + 1)}>Increase Counter</button>
                {/*another way */}
            </p>
            <hr/>
            <p>Purpose of below Example to handle multiple state and passing values through input elements:</p>
            <p>
                Name 1: <input onChange={handleOnChange} value={infoData.name1} type="text" name="name1"/> {infoData.name1}<br/>
                Name 2: <input onChange={handleOnChange} value={infoData.name2} type="text" name="name2"/> {infoData.name2}
            </p>
        </>
    )
}

export default UseStateEx;