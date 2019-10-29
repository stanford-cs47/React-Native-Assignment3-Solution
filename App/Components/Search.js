/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React, { useState} from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, View, Button, TextInput, TouchableOpacity, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Metrics, Colors } from '../Themes'
import { SearchBar } from 'react-native-elements'

export default function Search(props){
	const [text, setText] = useState("");

	return (
		<TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
			<View style={styles.container}>
				<SearchBar
					round
					lightTheme
					platform={(Platform.OS === 'ios') ? "ios" : "android"}
					containerStyle = {styles.containerStyle}
					inputContainerStyle = {styles.inputContainerStyle}
					searchIcon={
						{ size: Metrics.small },
						{ color: 'red' }
					}
					onChangeText={text => setText(text)}
					onCancel={this.handleSearchCancel}
					onClear={this.handleSearchClear}
					value={text}
					placeholder='Search for News'
					onSubmitEditing={() => props.getQuery(text)}
					keyboardShouldPersistTaps={'handled'}
				/>
				</View>
			</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	container: {
  		flex: 1,
  		justifyContent: 'flex-start'
		},
		containerStyle: {
			backgroundColor: 'white',
			width: Metrics.screenWidth - Metrics.doubleBaseMargin
		}
});
