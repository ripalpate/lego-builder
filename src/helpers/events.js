import $ from 'jquery';
import printParts from '../data/partsData';
import initializePartView from '../components/LegoCharacters/legoCharacter';
import printLegos from '../components/SavedCharacters/savedCharacters';

let headClickCount = 0;
const onHeadClickView = () => {
  printParts.getterHeadData().then((headsObject) => {
    $('#lego-head').on('click', () => {
      headClickCount += 1;
      if (headClickCount === headsObject.length) {
        headClickCount = 0;
      }
      initializePartView.creatPartsList(headsObject[headClickCount], '#lego-head');
    });
  });
};
let torsoClickCount = 0;
const onTorsosClickView = () => {
  printParts.getterTorsosData().then((torsosObject) => {
    $('#lego-torso').on('click', () => {
      torsoClickCount += 1;
      if (torsoClickCount === torsosObject.length) {
        torsoClickCount = 0;
      }
      initializePartView.creatPartsList(torsosObject[torsoClickCount], '#lego-torso');
    });
  });
};

let legsClickCount = 0;
const onClickLegsView = () => {
  printParts.getterLegsData().then((legsObject) => {
    $('#lego-legs').on('click', () => {
      legsClickCount += 1;
      if (legsClickCount === legsObject.length) {
        legsClickCount = 0;
      }
      initializePartView.creatPartsList(legsObject[legsClickCount], '#lego-legs');
    });
  });
};

const savedLegosArray = [];
const savedLegos = () => {
  $('#save-button').click(() => {
    const name = $('#lego-head').text().trim() + $('#lego-torso').text().trim() + $('#lego-legs').text().trim();
    // console.log(name);
    const headImage = $('#lego-head').find('img').attr('src');
    // console.log(headImage);
    const torsoImage = $('#lego-torso').find('img').attr('src');
    const legsImage = $('#lego-legs').find('img').attr('src');
    const lego = {
      name, headImage, torsoImage, legsImage,
    };
    savedLegosArray.push(lego);
    console.log(savedLegosArray);

    printLegos.printSavedLegos(savedLegosArray);
  });
};

export default {
  onHeadClickView,
  onTorsosClickView,
  onClickLegsView,
  savedLegos,
};
