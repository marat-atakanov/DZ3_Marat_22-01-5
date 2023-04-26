const initialState = {
    count: 0
}
let counter = 0

export default function reducer(state = initialState, action) {

    if (action.type === "INCREASE") {
        counter++;
        return {
            count: counter
        }
    } else if (action.type === "DECREASE") {
        counter--;
        return {
            count: counter
        }
    } else if (action.type === "RESET") {
        counter = 0
        return {
            count: counter
        }
    }

    return state;
}