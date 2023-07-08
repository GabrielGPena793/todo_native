import { TextInput, TouchableOpacity, View, TextInputProps } from 'react-native';
import { styles } from './styles';

import Logo from '../../assets/Logo.svg'
import Plus from '../../assets/plus.svg'
import { TasksList } from '../../components/TasksList';
import { useRef, useState } from 'react';

export interface ITask {
  id: string
  complete: boolean
  text: string
}


export function Home() {

  const [text, setText] = useState('');
  const [tasks, setTasks] = useState<ITask[]>([]);

  function handleAddTask() {
    const newTask = {
      complete: false,
      id: new Date().getTime().toString(),
      text
    }

    setTasks([...tasks, newTask ])
    setText('')
  }

  function onCompleteTask(taskId: string) {
    const taskUpdated = tasks.map(task => {
      if (task.id === taskId) {
        task.complete = !task.complete;
      }
      return task;
    })

    setTasks(taskUpdated)
  }

  function onDeleteTask(taskId: string) {
    const tasksUpdated = tasks.filter(task => task.id !== taskId)

    setTasks(tasksUpdated);
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Logo />
      </View>

      <View style={styles.main}>
        <View style={styles.containerInput}>
          <TextInput
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor="#808080"
            style={styles.input}
            value={text}
            onChangeText={setText}
          />

          <TouchableOpacity 
            activeOpacity={0.8} 
            style={styles.button}
            onPress={handleAddTask}
          >
            <Plus />
          </TouchableOpacity>
        </View>

        <TasksList
          tasks={tasks} 
          onDeleteTask={onDeleteTask} 
          onCompleteTask={onCompleteTask}  
        />

      </View>
    </View>
  );
}