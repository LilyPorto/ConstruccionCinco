import React from "react"
import { View, Text } from "react-native"

const CatalogueItemComponent = (props) => (
    <View key={props.id} style={{ padding: 20, paddingBottom:5, PaddingTop: 5}}>
        <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Modelo: {props.modelo}</Text>
        <Text>Marca: {props.marca}</Text>
        <Text>Precie: ${props.precio}</Text>
        <Text>Descripcion: {props.descripcion}</Text>
    </View>
)

export default CatalogueItemComponent