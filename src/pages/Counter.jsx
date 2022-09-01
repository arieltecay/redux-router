import { useSelector } from "react-redux"



const Counter = () => {

    const state = useSelector(state => state.counter)
    const { count } = state

    console.log(state);
    return (
        <>
            <h1>Contador</h1>
            <button>+</button>
            <button>+5</button>
            <p>{count}</p>
            <button>-</button>
            <button>-5</button>
        </>
    )
}

export default Counter