'use strict';
var React = require('react-native');

var SearchPage = require('./SearchPage');


var {
  AppRegistry,
  StyleSheet,
  Component,
  Text,
  View,
  TextInput,
} = React;

var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

class HelloWorld extends React.Component {
  render() {
    return React.createElement(React.Text, {style: styles.text}, "Hello World!");
  }
}

class home4 extends React.Component {
  render() {
    return (

      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Return Shipping Refund Request',
          component: SearchPage,
        }}/>
      );
  }
}
AppRegistry.registerComponent('home4', () => home4);