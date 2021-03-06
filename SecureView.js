
"use strict";
 
var React = require("react-native");
 
var {
    Component,
    StyleSheet,
    Text,
    View,
} = React;
 
class SecureView extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            password: this.props.password
        };
    }
 
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>
                    Welcome {this.props.username}!
                </Text>
                <Text style={styles.subheading}>
                    This is a demo page ! You have a lot to do Anusha !
                </Text>
            </View>
        );
    }
 
};
 
var styles = StyleSheet.create({
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: "center"
    },
    heading: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: "center",
        color: "#656565"
    },
    subheading: {
        color: "#cccccc"
    }
});
 
module.exports = SecureView;