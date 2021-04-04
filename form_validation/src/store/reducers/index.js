const initState = {};

const Reducer = (state = initState, action) => {
    if (action.type === "SUBMIT") {
        alert("Form submitted");
    }

    return state;
};

export default Reducer;
