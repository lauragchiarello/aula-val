import { View, StyleSheet } from 'react-native'

export default function Quadrado(props) {

    return (
        <View style={{
            width: 50,
            height: 50,
            backgroundColor: props.cor || 'black'
        }}></View>
    )
}
