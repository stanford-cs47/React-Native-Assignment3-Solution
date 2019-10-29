/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React, { useState } from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking, ActivityIndicator, TouchableOpacity} from 'react-native'
import { material } from 'react-native-typography' //consider using this!
import { Metrics, Colors } from '../Themes'
import * as WebBrowser from 'expo-web-browser';

export default function News(props){
  const [refreshing, setRefreshing] = useState(false);

  const defaultProps = { articles: [] }

  const propTypes = {
    articles: PropTypes.array
  }

  const webAction = item => WebBrowser.openBrowserAsync(item.url);

  const _keyExtractor = (item, index) => item.title;

  const listItemRenderer = item => {
    return (
      <TouchableOpacity onPress={() => webAction(item)}>
        <View style={styles.news}>
          <Text style={material.headline}>{item.title}</Text>
          <Text>{item.snippet}</Text>
          <Text style={{fontWeight: 'bold'}}>{item.byline}</Text>
          <Text>{item.date}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
      <View >
        <FlatList
          data={props.articles}
          renderItem={({item}) => listItemRenderer(item)}
          ItemSeparatorComponent = {() => (<View style={{height: 10}}/>)}
          keyExtractor={_keyExtractor}
          contentContainerStyle = {{alignItems: 'center'}}
          renderSectionHeader={({section}) =>
            <View style={styles.header}>
              <Text style={styles.title}>{section.title}</Text>
            </View>
          }
          onRefresh = {() => this.resetList()}
          refreshing = {refreshing}
          keyExtractor={_keyExtractor}
          removeClippedSubviews = {true}
        />
      </View>
   )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  news: {
    width: Metrics.width,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  }
});
