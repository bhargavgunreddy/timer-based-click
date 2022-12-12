import { useCallback, useRef, useState } from "react";
// import "./styles.css";

/*
  INSTRUCTIONS:
  Create a "todo"(add cities) app with the following criteria.
    1. The user can add new cities
    2. The user can remove existing cities items
*/

export default function TodoList() {

    const [cities, setCities] = useState([]);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const addCities = () => {
        //Complete function
        setCities(cities.concat((inputRef.current as any).value));
        (inputRef.current as HTMLInputElement).value = '';
    };

    const deleteCity = (idx: number) => {
        setCities(cities.filter((city, index) => index !== idx));
    }

    const getMarkUp = useCallback(() => {
        return cities?.map((city, index) => {
            return <li key={`${index} + ${city}`}>
                <p>
                    <span>City: {city}</span>&nbsp;
                    <button onClick={() => deleteCity(index)}> X </button>
                </p>
            </li>
        });
    }, [cities])

    return (
        <div className="widget cities-widget">
            <h3>Add cities</h3>
            <p>
                <input ref={inputRef} type="text" />
                <button onClick={addCities} >Add city</button>
            </p>
            <section>
                <ul>{getMarkUp()}</ul>
            </section>
        </div>
    );
}
