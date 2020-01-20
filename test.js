window = {};
const devReducer = require('./index') && window.reducer;
const prodReducer = require('./dist/main') && window.reducer;

const state = {
    keys: [
        { id: 1, name: 'key-one' },
        { id: 2, name: 'key-two' },
    ],
};

const action = {
    type: 'B',
    key: { id: 2, name: 'renamed-key-two' },
};

console.log(
    JSON.stringify(
        {
            DEV: devReducer(state, action),
            PROD: prodReducer(state, action),
        },
        null,
        4
    )
);

/*
{
    "DEV": {
        "keys": [
            {
                "id": 1,
                "name": "key-one"
            },
            {
                "id": 2,
                "name": "renamed-key-two"
            }
        ]
    },
    "PROD": {
        "keys": [
            {
                "id": 1,
                "name": "key-one"
            },
            {
                "id": 2,
                "name": "key-two"
            }
        ]
    }
}
*/
