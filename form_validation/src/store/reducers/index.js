const initState = {};

const Reducer = (state = initState, action) => {
    if (action.type === "CHANGE") {
        // Valiadations
        console.log(state);
        const { name, id, pid, shore } = state;

        const match = new RegExp("^[0-9]{6}$");
        const error = match.test(id);
        if (id === null || id === "") {
            return {
                ...state,
                error: "Please enter associate Id"
            };
        } else if (error === false) {
            return {
                ...state,
                error: "Invalid associate id"
            };

            // state.name
            // state.pid
            // state.shore
        }
    }
    if (action.type === "SUBMIT") {
        action.e.preventDefault();
        return {
            ...state,
            error: state.error
        };
    }

    return state;
};

export default Reducer;
