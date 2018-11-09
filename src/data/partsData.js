
import axios from 'axios';
import 'bootstrap';

// const getAllHeadsFromDb = axios.get('http://localhost:3001/heads');

const getHeads = () => new Promise((resolve, reject) => {
  axios.get('http://localhost:3001/heads')
    .then((data) => {
      const allHeads = data.data[0];
      resolve(allHeads);
    }).catch((error) => {
      reject(error);
    });
});

const getTorsos = () => new Promise((resolve, reject) => {
  axios.get('http://localhost:3001/torsos')
    .then((data) => {
      const allTorsos = data.data[0];
      resolve(allTorsos);
    }).catch((error) => {
      reject(error);
    });
});

const getLegs = () => new Promise((resolve, reject) => {
  axios.get('http://localhost:3001/legs')
    .then((data) => {
      const allLegs = data.data[0];
      resolve(allLegs);
    }).catch((error) => {
      reject(error);
    });
});


const getterHeadData = () => new Promise((resolve, reject) => {
  axios.get('http://localhost:3001/heads')
    .then((data) => {
      const headsObject = data.data;
      console.log(headsObject);
      resolve(headsObject);
    }).catch((error) => {
      reject(error);
    });
});

const getterTorsosData = () => new Promise((resolve, reject) => {
  axios.get('http://localhost:3001/torsos')
    .then((data) => {
      const torsosObject = data.data;
      console.log(torsosObject);
      resolve(torsosObject);
    }).catch((error) => {
      reject(error);
    });
});

const getterLegsData = () => new Promise((resolve, reject) => {
  axios.get('http://localhost:3001/legs')
    .then((data) => {
      const legsObject = data.data;
      console.log(legsObject);
      resolve(legsObject);
    }).catch((error) => {
      reject(error);
    });
});

export default {
  getHeads, getTorsos, getLegs, getterHeadData, getterTorsosData, getterLegsData,
};
