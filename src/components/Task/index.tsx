import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

import Check from '../../assets/check.svg'
import InProgress from '../../assets/inProgress.svg'
import Trash from '../../assets/trash.svg'
import { ITask } from '../../screens/Home';

interface TaskProps {
  task: ITask
  onComplete: () => void
  onDelete: () => void
}

export function Task({ task, onComplete, onDelete }: TaskProps) {


  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onComplete}>
        {task.complete ? <Check /> : <InProgress />}
      </TouchableOpacity>

      <Text style={task.complete ? styles.textComplete : styles.text}>
        {task.text}
      </Text>

      <TouchableOpacity activeOpacity={0.8} onPress={onDelete}>
        <Trash />
      </TouchableOpacity>
    </View>
  );
}