import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../styles/Colors';

function Screen({ children }) {
    return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
});

export default Screen;
