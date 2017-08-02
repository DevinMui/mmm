import codePush from "react-native-code-push";
import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Button
} from 'react-native';
var Sound = require('react-native-sound');
// import Sound from 'react-native-sound';

let faggot = [];
for(var i=0;i<100;i++){
	faggot.push(new Sound('mmm.mp3', Sound.MAIN_BUNDLE, (error)=>{
	}));
}

export default class mmm extends Component {

	constructor(props){
		super(props);
		this.times = 0;
		this._onPress = this._onPress.bind(this);
	}

	_onPress(){
		faggot[this.times].play();
		this.times+=1;
		if(this.times>99){
			this.times = 0;
			faggot[this.times].stop();
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Button title='What?' onPress={this._onPress}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

mmm = codePush(mmm);

AppRegistry.registerComponent('mmm', () => mmm);
