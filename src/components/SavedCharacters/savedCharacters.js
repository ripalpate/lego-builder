import $ from 'jquery';
import 'bootstrap';

const printSavedLegos = (savedLegos) => {
  let domString = '';
  savedLegos.forEach((savedLego) => {
    domString += `<div id="savedLego" >
                    <p>${savedLego.name}</p>
                    <img src="${savedLego.headImage}">
                    <img src="${savedLego.torsoImage}">
                    <img src="${savedLego.legsImage}">
                  </div>`;
  });
  $('#buildLego').html(domString);
};


export default { printSavedLegos };
