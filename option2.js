
"use strict";
 
var React = require("react-native");
 
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
 
var option2= React.createClass ( {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>
                     Document needed
                </Text>
                <Text style={styles.subheading}>
                Accepted files types: PDF, JPG, PNG
                </Text>

                <TouchableHighlight style={styles.button1}
    underlayColor='#99d9f4'>
  <Text style={styles.buttonText}>Upload Refund Receipt</Text>
</TouchableHighlight>

<Text style={styles.subheading}>
                
Please upload a copy of the refund email from the merchant or PayPal, showing the amount refunded to you.
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
 
 
module.exports = option2;