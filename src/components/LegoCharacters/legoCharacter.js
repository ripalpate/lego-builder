import $ from 'jquery';
import 'bootstrap';
import './legoCharacter.scss';
import printParts from '../../data/partsData';


const creatPartsList = (part, divID) => {
  let domString = '';
  domString += `<div id="${part.id} lego-image"class="part-card">
                  <div class="image-div">
                    <img src=${part.imageUrl} width="150px" height="160px;">
                  </div>
                  <div id="name-div">
                    <h4>${part.name}</h4>
                  </div>
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

const selectedHeadView = () => {
  printParts.getterHeadData().then((data) => {
    $('#select-head').change(() => {
      const selectedHead = $('.head:selected').val();
      const headFilter = data.filter(x => x.name === selectedHead);
      creatPartsList(headFilter[0], '#lego-head');
    });
  }).catch((error) => {
    console.error(error);
  });
};

const selectedTorsoView = () => {
  printParts.getterTorsosData().then((data) => {
    $('#select-torso').change(() => {
      const selectedTorso = $('.torso:selected').val();
      const torsoFilter = data.filter(x => x.name === selectedTorso);
      creatPartsList(torsoFilter[0], '#lego-torso');
    });
  }).catch((error) => {
    console.error(error);
  });
};

const selectedLegsView = () => {
  printParts.getterLegsData().then((data) => {
    $('#select-legs').change(() => {
      const selectedLegs = $('.legs:selected').val();
      const legsFilter = data.filter(x => x.name === selectedLegs);
      creatPartsList(legsFilter[0], '#lego-legs');
    });
  }).catch((error) => {
    console.error(error);
  });
};
export default {
  initializeHeadView,
  initializeTorsoView,
  initializeLegsView,
  creatPartsList,
  selectedHeadView,
  selectedTorsoView,
  selectedLegsView,
};
