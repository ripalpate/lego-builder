
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

// const anotherX = (headId) => {
//   const y = new Promise((resolve, reject) => {
//     axios.get('http://localhost:3001/heads')
//       .then((data) => {
//         const allHeads = data.data;
//         let parseId = allHeads.substring(1, allHeads.length - 1);
//         parseId+1;
//         if (parseId === 9) { parseId = 1; }
//         const newId = 'head' + parseId;
//         const headFilter = allHeads.filter(head => head.id === newId);
//         console.log(headFilter);

//         resolve(allHeads);
//       }).catch((error) => {
//         reject(error);
//       });
//   });
//   return y;
// };


export default { getHeads, getTorsos, getLegs };
