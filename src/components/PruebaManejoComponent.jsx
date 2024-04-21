import React from "react";
import { View } from "react-native";
import { Text, TextInput, Button } from 'react-native-paper';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DatePickerInput } from 'react-native-paper-dates';




const PruebaManejoComponent = () => {

    const [text, setText] = React.useState("");

    return (
        <View style={{ padding: 5, marginTop: 10 }}>
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
                    Identificación:
                </Text>
                <TextInput
                    value={text}
                    onChangeText={text => setText(text)}
                />
            </View>
            <View style={{ marginBottom: 10}}>
                <Text>
                    Celular:
                </Text>
                <TextInput
                    value={text}
                    onChangeText={text => setText(text)}
                />
            </View>
            <SafeAreaProvider>
                <Text>Fecha Reservación:</Text>
                <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                    <DatePickerInput
                        locale="es"
                        label="Fecha:"
                        inputMode="start"
                    />
                </View>
            </SafeAreaProvider>
            <View style={{ marginTop: 10}}>
                <Button icon="calendar" mode="contained" onPress={() => console.log('Pressed')}>
                    Enviar Reservar
                </Button>
            </View>
        </View>
    )
}

export default PruebaManejoComponent;