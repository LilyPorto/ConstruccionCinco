import React, { useState } from 'react';
import { View, Picker } from "react-native-web"
import { Text, TextInput, Button } from 'react-native-paper';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DatePickerInput } from 'react-native-paper-dates';


const TallerComponent = () => {

    const [selectedValue, setSelectedValue] = useState();
    const [text, setText] = useState();

    //Mntenimiento
    //Reparación
    //Revisión Tecnica

    const services = [
        {
            label: "Servicio de Mantenimiento", value: "matenimiento"
        },
        {
            label: "Servicio de Reparación", value: "reparacion"
        },
        {
            label: "Servicio de Revisión Tecnica", value: "tecnica"
        }
    ]
    return (
        <View style={{padding: 20}}>
            <Text>
            Seleccione el servicio:
            </Text>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, marginBottom: 10 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                {services.map((item) => (
                <Picker.Item label={item.label} value={item.value} key={item.value} />
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
                    Enviar solicitud
                </Button>
            </View>
        </View>
    )
}

export default TallerComponent