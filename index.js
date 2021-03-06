window.reducer = function reducer(state, action) {
    switch (action.type) {
        case 'A': {
            const { unicorn } = action;
            const unicorns = state.unicorns.map(_unicorn =>
                _unicorn.name === unicorn.name ? unicorn : _unicorn
            );

            return { ...state, unicorns, someCaseAAttributes: true };
        }

        case 'B': {
            const { unicorn } = action;
            const unicorns = state.unicorns.map(_unicorn =>
                _unicorn.id === unicorn.id ? unicorn : _unicorn
            );

            return { ...state, unicorns, someCaseBAttributes: true };
        }

        default:
            return state;
    }
};
