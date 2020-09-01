import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import {stateControl, blueFood, superWater, soilTimer, waterTimer, violeteState, fernState} from './../src/power-plant.js';

$(document).ready(function() {

  setInterval(function() {
    stateControl(soilTimer);
    stateControl(waterTimer);
  },3000);

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

  $('#violete').click(function() {
    $('.plant-game').show();
    $('.plant-choose').hide();
    const newState = stateControl(violeteState);
    $('#soil-value').text(`Soil: ${newState.soil}`);
    $('#water-value').text(`Water: ${newState.water}`);
  });

  $('#fern').click(function() {
    $('.plant-game').show();
    $('.plant-choose').hide();
    const newState = stateControl(fernState);
    $('#soil-value').text(`Soil: ${newState.soil}`);
    $('#water-value').text(`Water: ${newState.water}`);
  });
});