/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator } from 'react-native';
import { Images, Colors } from './App/Themes'
import APIRequest from './App/Config/APIRequest'

import News from './App/Components/News'
import Search from './App/Components/Search'
import Logo from './App/Components/Logo'

export default function App(){
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [searchText] = useState("");
  const [category] = useState("");

  const loadArticles = async (searchTerm = '', category = '') => {
    // this.setState({articles:[], loading: true});
    setLoading(true);
    setArticles([]);
    var resultArticles = [];
    if (category === '') {
      resultArticles = await APIRequest.requestSearchPosts(searchTerm);
    } else {
      resultArticles = await APIRequest.requestCategoryPosts(category);
    }
    console.log(resultArticles);
    setLoading(false);
    setArticles(resultArticles);
    // this.setState({loading: false, articles: resultArticles})
  }

  useEffect(() => {loadArticles()}, []);

  contentDisplayed = null;

  if (loading) {
    contentDisplayed = (
      <ActivityIndicator
        style={styles.activityIndicator}
        size="large" color="black"/>
    )
  } else {
    contentDisplayed = <News articles={articles}/>
  }

  return (
    <SafeAreaView style={styles.container}>
      <Logo/>
      <Search getQuery={loadArticles}/>
      <View style={{flex:7}}>
        {contentDisplayed}
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
