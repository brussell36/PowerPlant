// const changeState = (state, prop, value) => {
//   return {
//     ...state,
//     [prop]: (state[prop] || 0) + value
//   }
// };

// const feed = (plant) => {
//   return {
//     ...plant,
//     soil: (plant.soil || 0) + 1
//   }
// };

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  };
};

const blueFood = changeState("soil")(5);
const greenFood = changeState("soil")(10);
const yuckyFood = changeState("soil")(-5);

const storeState = ( initialState ) => {
  let currentState = initialState;
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

const stateControl = storeState();

$(document).ready(function() {

  $('#feed').click(function() {
    const newState = stateControl(blueFood);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#show-state').click(function() {
    const currentState = stateControl();
    $('#soil-value').text(`Soil: ${currentState.soil}`);
  });
});