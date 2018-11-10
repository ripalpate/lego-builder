// import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import initializePartView from './components/LegoCharacters/legoCharacter';
import events from './helpers/events';

const initializeApp = () => {
  initializePartView.initializeHeadView();
  initializePartView.initializeTorsoView();
  initializePartView.initializeLegsView();
  initializePartView.selectedHeadView();
  events.onHeadClickView();
  events.onTorsosClickView();
  events.onClickLegsView();
  events.savedLegos();
};
initializeApp();
