// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default function App() {
//     return ( <View style = { styles.container } >
//         <Text > Open up App.js to start working on your app! </Text>
//         <StatusBar style = "auto" />
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#FFF',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });

// import 'intl';
// import 'intl/locale-data/jsonp/pt-BR'

import React from 'react';

import Routes from './src/routes'

export default function App() {

    return ( <Routes/>
    );
}
