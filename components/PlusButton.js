import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

function PlusButton({ onPress }) {
    return (
        <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressedStyle]} onPress={onPress}>
            <AntDesign name="plus" size={24} color="#fff" />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pressedStyle: { backgroundColor: "#575757", opacity: 0.5 },
});

export default PlusButton;
