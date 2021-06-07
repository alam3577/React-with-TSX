const { createStore } = require("redux");

const initialState = {
  bal: 50000,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        bal: state.bal + action.payload,
      };
      break;
    case "SUB":
      return {
        bal: state.bal - action.payload,
      };
      break;
    default:
      return state;
  }
};

const store = createStore(reducer);

// SUBSCRIBE

store.subscribe(() => {
  console.log(store.getState());
});

// DISPATCH
store.dispatch({ type: "ADD", payload: 30000 });
store.dispatch({ type: "SUB", payload: 30000 });
