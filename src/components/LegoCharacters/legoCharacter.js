import $ from 'jquery';
import 'bootstrap';
import printParts from '../../data/partsData';

const creatPartsList = (part, divID) => {
  let domString = '';
  domString += `<div id="${part.id}"class="part-card">
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

const clickedImage = () => {
  $('#lego-parts').on('click', (e) => {
    const partIClicked = $(e.target).closest('.part-card').attr('id');
    console.log(partIClicked);
    // printParts.anotherX(partIClicked);
  });
};

clickedImage();

export default { initializeHeadView, initializeTorsoView, initializeLegsView };
