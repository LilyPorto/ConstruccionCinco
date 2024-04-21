import React from "react"
import { View, Text, Image } from "react-native"

const CatalogueItemComponent = (props) => (
    <View key={props.id} style={{ padding: 20, paddingBottom:5, PaddingTop: 5, justifyContent: "space-around"}}>
        <Image
            source={{ uri:props.imagen}}
            style={{  height: 200 }}
        />
        <View style={{ marginBottom:10 }}>
            <Text style={{ backgroundColor: props.estado == 1 ? '#3339FF':'#FF5233', color:"#fff", padding: 5}}>{ props.estado == 1 ? 'Nuevo':'Usado'}</Text>
        </View>
        <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Modelo: {props.modelo}</Text>
        <Text>Marca: {props.marca}</Text>
        <Text>Precie: ${props.precio}</Text>
        <Text>Descripcion: {props.descripcion}</Text>
    </View>
)

export default CatalogueItemComponent