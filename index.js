window.reducer = function reducer(state, action) {
    switch (action.type) {
        case 'A': {
            const { key } = action;
            const keys = state.keys.map(_key =>
                _key.id === key.id ? key : _key
            );

            return { ...state, keys };
        }

        case 'B': {
            const { key } = action;
            const keys = state.keys.map(_key =>
                _key.id === key.id ? key : _key
            );

            return { ...state, keys };
        }

        default:
            return state;
    }
};

