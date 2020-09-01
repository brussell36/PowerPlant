
export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  };
};

export const blueFood = changeState("soil")(5);
export const greenFood = changeState("soil")(10);
export const yuckyFood = changeState("soil")(-5);

export const hydrate = changeState("water")(1);
export const superWater = changeState("water")(5);

export const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const violete = { soil: 30, water: 30 };
export const fern = { soil: 15, water: 12 };

// export const plants = [violete, fern];
export const violeteState = storeState(violete);
export const fernState = storeState(fern);
export const stateControl = storeState();

export const soilTimer = changeState("soil")(-1);
export const waterTimer = changeState("water")(-1);
