import $ from 'jquery';
import 'bootstrap';
import printParts from '../../data/partsData';

const creatPartsList = (part, divID) => {
  let domString = '';
  domString += `<div id="${part.id} lego-image"class="part-card">
                    <img src=${part.imageUrl} width="250px">
                </div>
                <div id="name-div">
                    <h4>${part.name}</h4>
                </div>`;
  $(divID).html(domString);
};

const initializeHeadView = () => {
  printParts.getHeads().then((data) => {
    creatPartsList(data, '#lego-head');
  }).catch((error) => {
    console.error(error);
  });
};

const initializeTorsoView = () => {
  printParts.getTorsos().then((data) => {
    creatPartsList(data, '#lego-torso');
  }).catch((error) => {
    console.error(error);
  });
};

const initializeLegsView = () => {
  printParts.getLegs().then((data) => {
    creatPartsList(data, '#lego-legs');
  }).catch((error) => {
    console.error(error);
  });
};

export default {
  initializeHeadView,
  initializeTorsoView,
  initializeLegsView,
  creatPartsList,
};
