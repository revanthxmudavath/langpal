import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Switch, TextInput, Text, useTheme } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';

export default function ProfileScreen({ dark, toggleTheme }:{dark:boolean; toggleTheme:()=> void}) {
    const { control, handleSubmit } = useForm({ defaultValues:{ name:'', native:'English', learning:'Spanish' } });
    const { colors } = useTheme();

  const onSubmit = (v:any) => console.log('Profile (mock):', v);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text variant="titleLarge">Profile</Text>
        <View style={styles.toggleRow}>
            <Text>Dark Mode</Text>
            <Switch value={dark} onValueChange={toggleTheme} />
        </View>

        <Controller
            control={control}
            name="name"
            render={({ field:{ onChange, value }}) => (
                <TextInput
                    label="Name"
                    value={value}
                    onChangeText={onChange}
                />
            )}
        />
        <Controller
        control={control} name="native"
        render={({ field:{ onChange, value } }) => (
          <TextInput label="Native language" value={value} onChangeText={onChange} />
        )}
      />
      <Controller
        control={control} name="learning"
        render={({ field:{ onChange, value } }) => (
          <TextInput label="Learning language" value={value} onChangeText={onChange} />
        )}
      />

      <Button mode="contained" onPress={handleSubmit(onSubmit)}>Save (mock)</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 16,
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
