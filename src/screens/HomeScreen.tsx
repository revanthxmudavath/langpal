import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation<any>();
    const { colors } = useTheme();
    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text variant="headlineMedium" style={styles.headline}>
                Welcome to LangPal! Learn with real people, worldwide.
            </Text>
            <Button
                mode="contained"
                onPress={() => navigation.navigate('Partner')}
                style={styles.button}
                contentStyle={styles.buttonContent}
            >
                Find a Language Partner
            </Button>
            <Button
                mode="outlined"
                onPress={() => navigation.navigate('Partner')}
                style={[styles.button, styles.convoButton]}
                contentStyle={styles.buttonContent}
            >
                Start Conversation    
            </Button>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
    },
    headline: {
        textAlign: 'center',
        maxWidth: 320,
    },
    button: {
        alignSelf: 'stretch',
        maxWidth: 320,
    },
    convoButton:{
        marginLeft:30,
        marginRight:30,
    },
    buttonContent: {
        paddingVertical: 6,
    },
});
