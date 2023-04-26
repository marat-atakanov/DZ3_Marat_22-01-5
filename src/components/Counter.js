import {useDispatch, useSelector} from "react-redux";

export default function Counter() {

    const dispatch = useDispatch();
    const {count} = useSelector(state => state)

    const increase = () => {
        dispatch({
            type: "INCREASE"
        })
    }

    const decrease = () => {
        if (count === 0) {
            return;
        }
        dispatch({
            type: "DECREASE"
        })
    }

    const reset = () => {
        dispatch({
            type: "RESET"
        })
    }

    return (
        <>
            <p>COUNTER</p>
            <p>{count}</p>
            <div className="counter">
                <button onClick={increase}>+</button>
                <button onClick={reset}>0</button>
                <button onClick={decrease}>-</button>
            </div>
        </>
    )
}