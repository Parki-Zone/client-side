// import React, { Component } from 'react';
// import {Navigator} from 'react-native';
// import Parks from './Parks.js';
// const RouteMapper = (route, navigator) => {
//   if (route.name === 'movies') {
//     return (
//       <Parks navigator={navigator} />
//     );
//   } else if (route.name === 'confirmation') {
//     return (
//       <Confirmation code={route.code} navigator={navigator} />
//     );
//   }
// };

// export default class App extends Component {
//   render() {
//     return (
//       <Navigator
//         // Default to parks route
//         initialRoute={{ name: 'parks' }}
//         // Use FloatFromBottom transition between screens
//         configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
//         // Pass a route mapper functions
//         //gaston
//         renderScene={RouteMapper}
//       />
//     );
//   }
// }


import React, { Component } from 'react';
import {
  Navigator,
} from 'react-native';
import Movies from './Parks';
import Confirmation from './Confirmation';

const RouteMapper = (route, navigator) => {
  if (route.name === 'movies') {
    return (
      <Movies navigator={navigator} />
    );
  } else if (route.name === 'confirmation') {
    return (
      <Confirmation code={route.code} navigator={navigator} />
    );
  }
};

export default class App extends Component {
  render() {
    return (
      <Navigator
        // Default to movies route
        initialRoute={{ name: 'movies' }}
        // Use FloatFromBottom transition between screens
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
        // Pass a route mapper functions
        renderScene={RouteMapper}
      />
    );
  }
}