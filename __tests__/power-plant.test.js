import {stateControl, blueFood, hydrate} from "./../src/power-plant.js";

describe('Plant', () => {
  
  beforeEach(() => {
    stateControl();
  });

  afterEach(() => {

  });

  test('should determine if an objects state is chanaged', () => {
    expect(stateControl(blueFood)).toEqual({soil: 5});
  });

  test('should determine if a plant objects water value is changed', () => {
    expect(stateControl(hydrate)).toEqual({water: 1});
  });
});
