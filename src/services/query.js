// import { useHistory } from 'react-router-dom';

// /**
//  * @param {Object} query
//  */

// export const addQuery = (query) => {
//   const browserHistory = useHistory();
//   const location = Object.assign(
//     {},
//     browserHistory.getCurrentLocation(),
//   );

//   Object.assign(location.query, query);
//   // or simple replace location.query if you want to completely change params

//   browserHistory.push(location);
// };

// /**
//  * @param {...String} queryNames
//  */
// export const removeQuery = (...queryNames) => {
//   const browserHistory = useHistory();
//   const location = Object.assign(
//     {},
//     browserHistory.getCurrentLocation(),
//   );
//   queryNames.forEach((q) => delete location.query[q]);
//   browserHistory.push(location);
// };
