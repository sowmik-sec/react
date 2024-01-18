// const { createStore } = require("redux");

// //define constants
// const INCREMENT = "INCREMENT";
// const DECREMENT = "DECREMENT";
// const ADD_USER = "ADD_USER";

// // state
// const initialCounterState = {
//   count: 0,
// };
// const initialUsersState = {
//   users: [{ name: "Ahsan Habib" }],
// };

// // action
// const incrementCounter = () => {
//   return {
//     type: INCREMENT,
//   };
// };

// const decrementCounter = () => {
//   return {
//     type: DECREMENT,
//   };
// };

// // create reducer for counter
// const counterReducer = (state = initialCounterState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         count: state.count + 1,
//       };

//     case DECREMENT:
//       return {
//         ...state,
//         count: state.count - 1,
//       };

//     default:
//       state;
//   }
// };

// //1. state
// //2. dispatch action
// //3. reducer
// //4. store - getState(), dispatch(), subscribe()

// //create store
// const store = createStore(counterReducer);
// store.subscribe(() => {
//   console.log(store.getState());
// });

// // dispatch action
// store.dispatch(incrementCounter());

// state - count: 0
// action - increment, decrement, reset
// reducer
// store

const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const initialState = {
  count: 0,
};

const incrementCounterAction = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounterAction = () => {
  return {
    type: DECREMENT,
  };
};

const resetCounterAction = () => {
  return {
    type: RESET,
  };
};

// create reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      state;
  }
};

//store
const store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounterAction());
