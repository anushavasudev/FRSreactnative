var React = require('react-native');
 
// 1
var {
  Component,
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
} = React;
 
// 2
var MyObjcClass = require('NativeModules').MyObjcClass;
var ss= require ('NativeModules').SomeString;
 
class SecureView extends Component {
  // 3
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }
 
  // 4
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
      {ss.somestring}
      {MyObjcClass.greeting}
      </Text>
      
      </View>
    );
  }
 
  // 5
  squareMe(num) {
    if (number == '') {
      return;
    }
    MyObjcClass.squareMe(num, (error, number) => {
      if (error) {
        console.error(error);
      } else {
        this.setState({number: number});
      }
    })
  }
};
 
// 6
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  input: {
    width: 100,
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    alignSelf: 'center'
  },
  result: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20,
  },
});
 
module.exports = SecureView;