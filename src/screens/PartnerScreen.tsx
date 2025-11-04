import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card, Button, Text, Dialog, Portal, useTheme } from 'react-native-paper';

const INFO = [
  { id:'1', name:'Sofia', native:'Spanish', learning:'English', level:'A2' },
  { id:'2', name:'Liam', native:'English', learning:'Japanese', level:'A1' },
];


export default function PartnerScreen() {
    const [selected, setSelected] = useState<typeof INFO[0] | null>(null);
    const { colors } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <FlatList
                data={INFO}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Card style={styles.card}>
                        <Card.Title title={item.name} subtitle={`${item.native} * ${item.learning} * ${item.level}`} />
                        <Card.Actions>
                            <Button onPress={() => setSelected(item)}>Message</Button>
                        </Card.Actions>
                    </Card>
                )}
            />
            
            <Portal>
                <Dialog visible={!!selected} onDismiss={() => setSelected(null)}>
                    <Dialog.Title>Message Preview</Dialog.Title>
                    <Dialog.Content>
                        <Text>{`Hi ${selected?.name}! Want to practice ${selected?.learning} together?`}</Text>

                    </Dialog.Content>
                    <Dialog.Actions>
                       <Button onPress={() => setSelected(null)}>Close</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    card: {
        marginBottom: 14,
    },
});
