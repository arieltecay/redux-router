import { useDispatch, useSelector } from "react-redux"
import { increment, increment_5, decrement, decrement_5, reset } from '../actions/actionReducer'

const Counter = () => {
    const dispatch = useDispatch()

    const state = useSelector(state => state.counter)
    const { count } = state

    return (
        <>
            <h1>Contador</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(increment_5())}>+5</button>
            <p>{count}</p>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(decrement_5())}>-5</button>
            <div>
                <button onClick={() => dispatch(reset())}>Reset</button>
            </div>
        </>
    )
}

export default Counter