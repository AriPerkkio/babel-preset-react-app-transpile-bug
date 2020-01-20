`case B:` is transpiling incorrectly.

test.js

```json
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
```

`index.js`

```js
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
```

`dist/main.js`

```js
window.reducer = function(e, r) {
    switch (r.type) {
        case 'A':
            var t = r.key,
                n = e.keys.map(function(e) {
                    return e.id === t.id ? t : e;
                });
            return u({}, e, { keys: n });
        case 'B':
            r.key;
            var o = e.keys.map(function(e) {
                return e.id, e.id, e;
            });
            return u({}, e, { keys: o });
        default:
            return e;
    }
};
```
