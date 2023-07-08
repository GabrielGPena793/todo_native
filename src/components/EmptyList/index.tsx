import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

import IconEmptyList from '../../assets/Clipboard.svg'


export function EmptyList() {
  return (
    <View style={styles.container}>
      <IconEmptyList />

      <View>
        <Text style={styles.textStrong}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.text}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}