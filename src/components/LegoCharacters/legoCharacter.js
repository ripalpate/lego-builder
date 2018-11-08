import $ from 'jquery';
import 'bootstrap';
import printParts from '../../data/partsData';

const creatPartsList = (part, divID) => {
  let domString = '';
  domString += `<div class="head-card">
                    <img src=${part.imageUrl} width="250px">
                    <h4>${part.name}</h4>`;
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

const clickedImage = (divID) => {
  $(divID).on('click', (e) => {
    const headIClicked = $(e.target).closest('#lego-head').attr('id');
    printParts.anotherX(headIClicked);
  });
};

clickedImage();

export default { initializeHeadView, initializeTorsoView, initializeLegsView };
