/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import ProductScreen from './components/ProductScreen';
import ProductDetailsScreen from './components/ProductDetailsScreen';
import AddProductScreen from './components/ProductAddScreen';
import EditProductScrren from './components/ProductEditScreen';

const RootStack = createStackNavigator (
  {
    Product: ProductScreen,
    ProductDetails: ProductDetailsScreen,
    AddProduct: AddProductScreen,
    EditProduct: EditProductScrren,
  },
  {
    initialRouteName: 'Product',
    navigationOPtions: {
      headerStyle: {
        backgroundColor: '#777777',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const RootContainer = createAppContainer (RootStack);

export default class App extends Component {
  render () {
    return <RootContainer />;
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
