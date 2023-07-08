import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import { styles } from './styles';
import { ITask } from '../../screens/Home';
import { EmptyList } from '../EmptyList';
import { Task } from '../Task';

interface TasksListProps {
  tasks: ITask[];
  onCompleteTask: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
}

export function TasksList({ tasks, onCompleteTask, onDeleteTask }: TasksListProps) {

  const [concludeTasks, setConcludeTasks] = useState(0)

  function checkConcludeTasks() {
    const tasksFilter = tasks.filter(task => task.complete)

    setConcludeTasks(tasksFilter.length)
  }


  useEffect(() => {
    checkConcludeTasks()
  }, [tasks])

  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <View style={styles.containerInfo}>
          <Text style={styles.infoCreate}>Criadas</Text>
          <Text style={styles.infoDetail}>{tasks.length}</Text>
        </View>


        <View style={styles.containerInfo}>
          <Text style={styles.infoComplete}>Concluídas</Text>
          <Text style={styles.infoDetail}>{concludeTasks}</Text>
        </View>

      </View>

      <View style={styles.containerList}>
        <FlatList
          data={tasks}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => 
            <Task 
              task={item}
              onComplete={() => onCompleteTask(item.id)}
              onDelete={() => onDeleteTask(item.id)}
            />
          }
          keyExtractor={item => item.id}
          ListEmptyComponent={ <EmptyList /> }
        />
      </View>
    </View>
  );
}