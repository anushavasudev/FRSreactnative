'use strict';


var option1 = require("./option1");
var option2 = require("./option2");
var tc = require("./Tc");
var React = require('react-native');
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
var BUTTONS = [
  'Option 0',
  'Option 1',
  'Option 2',
  'Delete',
  'Cancel',
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  description1: {
    marginBottom: 10,
    fontSize: 18,
    textAlign: 'left',
    color: '#656565'
  },
  description2: {
    marginTop:40,
    marginBottom: 10,
    fontSize: 18,
    textAlign: 'left',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  container1:
  {
    padding: 30,
    marginTop: 65,
    alignItems: 'flex-start'
  },

  container2:
  {
    flex:1,
    backgroundColor:'#656565'
  },
  input:
  {
    height:40,
    justifyContent:'center',
    padding:5,
    borderColor:'gray',
    borderWidth:1,
    marginVertical:10
  },

  datePicker:
  {
    borderTopWidth:1,
    position: 'absolute',
    bottom:0,
    right:0,
    left:0,
    height:220,
    borderColor:'#CCC',
    backgroundColor: '#FFF'
  },




  flowRight: 
  {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'stretch'
},
row: 
{
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: 45,
    width: 350,
  borderColor: 'black',
  borderWidth: 0.5,
  borderRadius: 8,
  
  justifyContent: 'center'



  },
  row1: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
    height: 45,
    width: 350,
  borderColor: 'black',
  borderWidth: 0.5,
  borderRadius: 8,
  justifyContent: 'center',
  marginTop: 5


  },
  row2: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
    height: 45,
    width: 350,
  borderColor: 'black',
  borderWidth: 0.5,
  borderRadius: 8,
  justifyContent: 'flex-end',
  flexWrap:'wrap',
  marginTop: 15


  },
  rowTitle: {
    //flex: 1,
    fontSize: 12,
    textAlign: 'center',
    //alignItems: 'center'
    //fontWeight: 'bold',
  },
  rowTitle1: {
    //flex: 1,
    fontSize: 12,
    //textAlign: 'center',
    color: '#48BBEC',
    //justifyContent:'flex-end',
    //flexWrap:'wrap',
   // alignItems: 'center'

    //fontWeight: 'bold',
  },
buttonText: {
  fontSize: 18,
  color: 'white',
  alignSelf: 'center'
},
subheading1: {
  marginTop:15,
        color: "#cccccc",
        fontSize: 10
    },
button: {
  height: 40,
  flex: 2,
  flexDirection: 'row',
  fontSize: 15,
  //backgroundColor: '#48BBEC',
  borderColor: '#656565',
  marginRight:20,
  borderWidth: 1,
  borderRadius: 3,
  marginBottom: 10,
  alignSelf: 'stretch',
  justifyContent: 'center'
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
  marginTop: 30
},
searchInput: {
  height: 36,
  padding: 4,
  marginRight: 5,
  flex: 4,
  fontSize: 18,
  borderWidth: 1,
  borderColor: '#48BBEC',
  borderRadius: 8,
  color: '#48BBEC'
},
searchInput1: {
  height: 80,
  padding: 4,
  marginRight: 5,
  flex: 4,
  fontSize: 15,
  borderWidth: 1,
  borderColor: '#656565',
  borderRadius: 3,
  color: '#48BBEC'
},
searchInput2: {
  height: 40,
  width: 50,
  padding: 4,
  marginRight: 5,
  flex: 4,
  fontSize: 15,
  borderWidth: 1,
  borderColor: '#656565',
  borderRadius: 3,
  color: '#48BBEC'
},
searchInput3: {
  height: 40,
  //width: 50,
  padding: 4,
  marginRight: 10,
  flex: 4,
  fontSize: 14,
  borderWidth: 1,
  borderColor: '#656565',
  borderRadius: 3,
  alignSelf: 'stretch',
  color: '#48BBEC'

},

});

var searchpage = React.createClass ( {



  getInitialState() {
    return {
      animated: false,
      modalVisible: false,
      transparent: false,
      cost:0,
      tc: false,
      clicked: 'none',
      
    };
  },


  
  

   _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  },

  _toggleAnimated() {
    this.setState({animated: !this.state.animated});
  },

  _toggleTransparent() {
    this.setState({transparent: !this.state.transparent});
  },


  showActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: CANCEL_INDEX,
      destructiveButtonIndex: DESTRUCTIVE_INDEX,
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
    });
  },




    onSubmitPressed1() {
        this.props.navigator.push({
            title: " Paid the post office or a courier service",
            component: option1,
            //passProps: {username: this.state.username, password: this.state.password},
        });
    },
    onSubmitPressed2() {
        this.props.navigator.push({
            title: "Shipping cost was deducted from return",
            component: option2,
            //passProps: {username: this.state.username, password: this.state.password},
        });
    },
ontc() {
        this.props.navigator.push({
            title: "Terms and Conditions",
            component: tc,
            //passProps: {username: this.state.username, password: this.state.password},
        });
    },

  render() {


    

    var modalBackgroundStyle = {
      backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
    };
    var innerContainerTransparentStyle = this.state.transparent
      ? {backgroundColor: '#fff', padding: 20}
      : null;

    return (
      <View style={styles.container1}>
        <Text style={styles.description1}>
          What did you return?
        </Text>
        
        <View style={styles.flowRight}>
  <TextInput
    style={styles.searchInput1}
    placeholder='Returned items'/>

</View>
    <Text style={styles.description2}>
          How did you pay for your return shipping?
        </Text>

        <View style={styles.row}>
        <SwitchIOS value={this.state.animated} onValueChange= {(this.onSubmitPressed1.bind(this))} />
          <Text style={styles.rowTitle}>I paid the post office or a courier service.</Text>
          
        </View>
        <View style={styles.row1}>
         <SwitchIOS value={this.state.transparent} onValueChange={(this.onSubmitPressed2.bind(this))} />
          <Text style={styles.rowTitle}>The shipping cost was deducted from my return.</Text>
          
        </View>

        

        <View style={styles.flowRight}>
  <TextInput
    style={styles.searchInput3}
    value={this.state.cost}
    placeholder='Return Shipping Cost'/>

    <TextInput
    onValueChange= {this.showActionSheet}
    style={styles.searchInput2}
    value={this.state.clicked}
    placeholder='Date of Return'/>

</View>

<View style={styles.row2}>
<SwitchIOS value={this.state.tc}  />
       
          <Text style={styles.rowTitle}>I have read and agree to the </Text>
          <Text onPress= {this.ontc} style={styles.rowTitle1}>Terms and Conditions</Text>

         

          
        </View>



        
  
<TouchableHighlight style={styles.button1}
    underlayColor='#99d9f4'>
  <Text style={styles.buttonText}>SUBMIT</Text>
</TouchableHighlight>

 <Text style={styles.subheading1}>
                
Please upload the shipping receipt that shows the amount you paid. You can skip this step if your shipment address photo (see above) shows the amount.

                </Text>

      </View>
    );
  }
});
module.exports = searchpage;