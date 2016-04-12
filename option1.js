
"use strict";
 
var React = require("react-native");
var upload1 = require("./upload1");
 
var {
    AppRegistry,
  StyleSheet,
  DatePickerIOS,
  ActionSheetIOS,
  Component,
  SwitchIOS,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  TextInput,
} = React;
 
var option1 = React.createClass ( {

    onUploadPressed1() {
        this.props.navigator.push({
            title: "Upload Shipment Address Photo",
            component: upload1,
            //passProps: {username: this.state.username, password: this.state.password},
        });
    },

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.heading}>
                    2 documents needed
                </Text>
                <Text style={styles.subheading}>
                Accepted files types: PDF, JPG, PNG
                </Text>

                <TouchableHighlight onPress={this.onUploadPressed1}style={styles.button1}
    underlayColor='#99d9f4'>
    
  <Text style={styles.buttonText}>Upload Shipment Address Photo</Text>
</TouchableHighlight>

<Text style={styles.subheading}>
                
Please upload a copy of the courier receipt with the receiver’s address visible, or a photo of the package with the receiver’s address visible.
                </Text>
                <TouchableHighlight style={styles.button1}
    underlayColor='#99d9f4'>
  <Text style={styles.buttonText}>Upload Return Shipping Receipt</Text>
</TouchableHighlight>

<Text style={styles.subheading}>
                
Please upload the shipping receipt that shows the amount you paid. You can skip this step if your shipment address photo (see above) shows the amount.

                </Text>




            </View>
        );
    }
})
 
var styles = StyleSheet.create({
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: "flex-start",
        
    },
    heading: {
        marginBottom: 5,
        fontSize: 15,
        textAlign: "center",
        fontWeight: 'bold',
        color: "#656565"
    },
    button1: {
  height: 36,
  flex: 1,
  flexDirection: 'row',
  backgroundColor: '#48BBEC',
  borderColor: '#48BBEC',
  borderWidth: 1,
  borderRadius: 8,
  marginBottom: 10,
  alignSelf: 'stretch',
  justifyContent: 'center',
  marginTop: 10
},
buttonText: {
  fontSize: 15,
  color: 'white',
  alignSelf: 'center'
},
    subheading: {
        color: "#cccccc",
        fontSize: 10
    }
});
 
module.exports = option1;