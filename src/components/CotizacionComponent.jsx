import React, { useState } from 'react';
import { View, Picker } from "react-native-web"
import { Text, TextInput, Button } from 'react-native-paper';

import catalogue from "../data/catalogue"


const CotizacionComponent = () => {

    const [selectedValue, setSelectedValue] = useState();
    const [text, setText] = useState();


  return (
    <View style={{ padding: 20 }}>
        <Text>
            Seleccione la marca:
        </Text>
        <Picker
            selectedValue={selectedValue}
            style={{ height: 50, marginBottom: 10 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
            {catalogue.map((item) => (
            <Picker.Item label={item.marca} value={item.marca} key={item.marca} />
                ))}
        </Picker>
        <View style={{ marginBottom: 10}}>
            <Text>
                Nombre:
            </Text>
            <TextInput
                value={text}
                onChangeText={text => setText(text)}
            />
        </View>
        <View style={{ marginBottom: 10}}>
            <Text>
                Apellido:
            </Text>
            <TextInput
                value={text}
                onChangeText={text => setText(text)}
            />
        </View>
        <View style={{ marginBottom: 10}}>
            <Text>
                Telefónico:
            </Text>
            <TextInput
                value={text}
                onChangeText={text => setText(text)}
            />
        </View>
        <View style={{ marginBottom: 10}}>
            <Text>
                Correo Electrónico:
            </Text>
            <TextInput
                value={text}
                onChangeText={text => setText(text)}
            />
        </View>
        <View style={{ marginTop: 10}}>
            <Button icon="calendar" mode="contained" onPress={() => console.log('Pressed')}>
                Enviar solicitud
            </Button>
        </View>
    </View>
    );
}

export default CotizacionComponent
