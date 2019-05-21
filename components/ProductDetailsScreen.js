import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import {Card, Button} from 'react-native-elements';
import Database from '../Database';

const db = new Database ();

export default class ProductDetailsScreen extends Component {
  static navigationOptions = {
    title: 'Product Details',
  };
  constructor () {
    super ();
    this.state = {
      isLoading: true,
      products: [],
      id: '',
    };
  }
  componentDidMount () {
    this._subscribe = this.props.navigation.addListener ('didFocus', () => {
      const {navigation} = this.props;
      db
        .productById (navigation.getParam ('prodId'))
        .then (data => {
          console.log (data);
          product = data;
          this.setState ({
            product,
            isLoading: false,
            id: product.prodId,
          });
        })
        .catch (err => {
          console.log (err);
          this.setState ({
            isLoading: false,
          });
        });
    });
  }
  deleteProduct (id) {
    const {navigation} = this.props;
    this.setState ({
      isLoading: true,
    });
    db
      .deleteProduct (id)
      .then (result => {
        console.log (result);
        this.props.navigation.goBack ();
      })
      .catch (err => {
        console.log (err);
        this.setState ({
          isLoading: false,
        });
      });
  }

  render () {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    return (
      <ScrollView>
        <Card style={styles.container}>
          <View style={styles.subContainer}>
            <View>
              <Image
                source={{uri: this.state.products.prodImage}}
                style={{width: 150, height: 150}}
              />
            </View>
            <View>
              <Text style={{fontSize: 16}}>Product ID: {this.state.products.prodId}</Text>
            </View>
            <View>
              <Text>Product Name: {this.state.products.prodName}</Text>
            </View>
            <View>
              <Text>Product Description: {this.state.products.prodDesc}</Text>
            </View>
            <View>
              <Text>Product Price: {this.state.products.prodPrice}</Text>
            </View>
          </View>
          <View style={styles.detailButton}>
            <Button 
              large
              background={'#CCC'}
              leftIcon={{ name: 'edit' }}
              title="Edit"
              onPress={() => {
                this.props.navigation.navigate('EditProduct', {
                  prodId: `${this.state.id}`
                })
              }}
            />
          </View>
          <View style={styles.detailButton}>
            <Button 
              large
              background={'#999'}
              color={'#fff'}
              leftIcon={{name: 'delete'}}
              title="Delete"
              onPress={() => {
                this.deleteProduct(this.state.id)
              }}
            />
          </View>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    padding: 20,
  },
  subContainer: {
    flex: 1,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#CCCCCC',
  },
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailButton: {
    marginTop: 10,
  },
});
