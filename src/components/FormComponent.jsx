import React from "react";
import { View } from "react-native";
import { Text, TextInput, Button } from 'react-native-paper';


const FormComponent = () => {

    const [text, setText] = React.useState("");

    return (
        <View style={{ padding: 5, marginTop: 10 }}>
            <View style={{ marginBottom: 5}}>
                <Text variant="displaySmall">
                    Reservar prueba de manejo
                </Text>
            </View>
            <View style={{ marginBottom: 10}}>
                <Text>
                    Nombre:
                </Text>
                <TextInput
                    value={text}
                    onChangeText={text => setText(text)}
                />
            </View>
            <View style={{ marginBottom: 5}}>
                <Button icon="calendar" mode="contained" onPress={() => console.log('Pressed')}>
                    Reservar
                </Button>
            </View>
        </View>
    )
}

export default FormComponent;