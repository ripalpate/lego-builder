import $ from 'jquery';
import './savedCharacters.scss';

const printSavedLegos = (savedLegos) => {
  let domString = '';
  savedLegos.forEach((savedLego) => {
    domString += `<div id="savedBuildLegos" >
                    <p class="saved-name">${savedLego.name}</p>
                    <img src="${savedLego.headImage}" width="30px"><br/>
                    <img src="${savedLego.torsoImage}" width="30px"><br/>
                    <img src="${savedLego.legsImage}" width="30px">
                  </div>`;
  });
  $('#buildLego').html(domString);
};


export default { printSavedLegos };
