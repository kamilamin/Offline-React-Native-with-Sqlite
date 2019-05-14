import React, { Component } from "react";
import { Button, View, Text } from "react-native";

export default class ProductDetailsScreen extends Component {
    static navigationOptions = {
        title: 'Product Details',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Add Product</Text>
                <Button  
                    title="Go to Add Product . . . Again"
                    onPress={() => this.props.navigation.navigate('AddProduct')}
                />
                <Button 
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Product')}
                />
                <Button 
                    title="Go Back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        )
    }
}
