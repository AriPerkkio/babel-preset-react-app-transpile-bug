window = {};
const prodReducer = require('./dist/babel-output') && window.reducer;

const state = {
    unicorns: [
        { id: 1, name: 'unicorn-one' },
        { id: 2, name: 'unicorn-two' },
    ],
};

const action = {
    type: 'B',
    unicorn: { id: 2, name: 'renamed-unicorn-two' },
};

console.log(
    JSON.stringify(
        {
            PROD: prodReducer(state, action),
        },
        null,
        4
    )
);

/*
{
    "DEV": {
        "unicorns": [
            {
                "id": 1,
                "name": "unicorn-one"
            },
            {
                "id": 2,
                "name": "renamed-unicorn-two"
            }
        ]
    },
    "PROD": {
        "unicorns": [
            {
                "id": 1,
                "name": "unicorn-one"
            },
            {
                "id": 2,
                "name": "unicorn-two"
            }
        ]
    }
}
*/
