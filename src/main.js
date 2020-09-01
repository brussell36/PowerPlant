import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import {stateControl, blueFood, superWater, soilTimer, waterTimer} from './../src/power-plant.js';

$(document).ready(function() {

  setInterval(function() {
    stateControl(soilTimer);
    stateControl(waterTimer);
  },1000);

  setInterval(function() {
    const currentState = stateControl();
    if(`${currentState.soil}` <= 0) {
      $('#soil-value').text("Your plant has died!");
    } else if (`${currentState.water}` <= 0) {
      $('#water-value').text("Your plant has died!");
    } else {
      $('#soil-value').text(`Soil: ${currentState.soil}`);
      $('#water-value').text(`Water: ${currentState.water}`);
    }
  }, 1000);

  $('#feed').click(function() {
    const newState = stateControl(blueFood);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#water').click(function() {
    const newState = stateControl(superWater);
    $('#water-value').text(`Water: ${newState.water}`);
  });

  $('#show-state').click(function() {
    const currentState = stateControl();
    $('#soil-value').text(`Soil: ${currentState.soil}`);
  });
});