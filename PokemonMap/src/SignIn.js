import React from 'react';
import {View,Text,Dimensions,Image} from 'react-native';
import {Form, Item, Label, Input,Button} from 'native-base';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

class SignIn extends React.Component{
	
	render(){
		return(
			<View style={{flex: 1}}>
				<Text>Signin </Text> 
			</View>
		)
	}
}

const styles = {
	
}

export default SignIn;