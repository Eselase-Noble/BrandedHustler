import React from 'react'
import { StyleSheet } from 'react-native'

import { CartContents } from '../components'

const Cart = ({ navigation, route }) => {
// const {name, price, color, imageSrc, PromoInfo, Size} = route.params;

  return  <CartContents navigation={navigation} routeParams={route.params} />
}

export default Cart

const styles = StyleSheet.create({})
