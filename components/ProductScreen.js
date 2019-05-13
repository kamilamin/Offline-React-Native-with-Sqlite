import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class ProductScreen extends Component {
    static navigationOptions = {
        title: 'Product List'
    };
    render(){
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
                <Text>Product List</Text>
                <Button 
                    title="Go To Details"
                    onPress={() => this.props.navigation.navigate("ProductDetails")}
                />
                <Button 
                    title="Go To Add Details"
                    onPress={() => this.props.navigation.navigate("AddProduct")}
                />
                <Button 
                    title="Go To Edit Details"
                    onPress={() => this.props.navigation.navigate("EditProduct")}
                />
            </View>
        )
    }
}
