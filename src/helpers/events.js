import $ from 'jquery';
import printParts from '../data/partsData';
import initializePartView from '../components/LegoCharacters/legoCharacter';

let headClickCount = 0;
const onHeadClickView = () => {
  printParts.getterHeadData().then((headsObject) => {
    $('#lego-head').on('click', () => {
      headClickCount += 1;
      console.log(headClickCount);
      if (headClickCount === headsObject.length) {
        headClickCount = 0;
      }
      console.log(headsObject[headClickCount]);
      initializePartView.creatPartsList(headsObject[headClickCount], '#lego-head');
    });
  });
};
let torsoClickCount = 0;
const onTorsosClickView = () => {
  printParts.getterTorsosData().then((torsosObject) => {
    $('#lego-torso').on('click', () => {
      torsoClickCount += 1;
      console.log(torsoClickCount);
      if (torsoClickCount === torsosObject.length) {
        torsoClickCount = 0;
      }
      console.log(torsosObject[torsoClickCount]);
      initializePartView.creatPartsList(torsosObject[torsoClickCount], '#lego-torso');
    });
  });
};

let legsClickCount = 0;
const onClickLegsView = () => {
  printParts.getterLegsData().then((legsObject) => {
    $('#lego-legs').on('click', () => {
      legsClickCount += 1;
      console.log(legsClickCount);
      if (legsClickCount === legsObject.length) {
        legsClickCount = 0;
      }
      console.log(legsObject[legsClickCount]);
      initializePartView.creatPartsList(legsObject[legsClickCount], '#lego-legs');
    });
  });
};
export default { onHeadClickView, onTorsosClickView, onClickLegsView };
