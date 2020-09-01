import {stateControl, blueFood} from "./../src/power-plant.js";

describe('Plant', () => {
  test('should determine if an objects state is chanaged', () => {
    expect(stateControl(blueFood)).toEqual({soil: 5});
  });
});
