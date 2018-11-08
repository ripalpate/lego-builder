// import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import initializePartView from './components/LegoCharacters/legoCharacter';

const initializeApp = () => {
  initializePartView.initializeHeadView();
  initializePartView.initializeTorsoView();
  initializePartView.initializeLegsView();
  initializePartView.x();
};
initializeApp();
