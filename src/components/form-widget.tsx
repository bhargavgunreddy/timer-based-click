import React, { useState, useCallback, useEffect, useMemo, useRef, MouseEventHandler } from 'react';


export const FormWidget = () => {

    const [uname, setUname] = useState("");
    const [fname, setFname] = useState("");
    const [age, setAge] = useState(0);
    const [showValues, setShowValues] = useState(false);


    const handleClick = useCallback((ev: { preventDefault: () => void; }) => {
        ev.preventDefault();
        setShowValues(() => true);
    }, []);

    return (<section className='widget form-widget'>
        <h3>USER FORM </h3>
        <form>
            <fieldset>
                <label htmlFor="username">Username: </label>
                <input id="username" type="text" onChange={(ev) => setUname(ev.target.value)} />
            </fieldset>
            <fieldset>
                <label htmlFor="fullname">Full name: </label>
                <input id="fullname" type="text" onChange={(ev) => setFname(ev.target.value)} />
            </fieldset>
            <fieldset>
                <label htmlFor="age">Age: </label>
                <input id="age" type="number" onChange={(ev) => setAge(Number(ev.target.value))} />
            </fieldset>
            <button onClick={handleClick}> SUBMIT</button>
        </form>

        <p>{showValues ?
            <>
                <h4> Form values: </h4>
                <table>
                    <tr>
                        <td>Username: </td><td>{uname}</td></tr>
                    <tr>
                        <td>Fullname: </td><td>{fname}</td></tr>
                    <tr>
                        <td>Age: </td><td>{age}</td></tr>
                </table>
            </>
            : <></>}

        </p>
    </section>
    );
}