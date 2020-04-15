import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';
import { Todo } from './src/Todo';


export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    // const newTodo = {
    //   id: Date.now().toString(),
    //   title: title,
    // }

    //setTodos(todos.concat([newTodo]))

    // setTodos((prevTodos)=>{
    //   return[
    //     ...prevTodos,
    //     newTodo
    //   ]

    // })
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title // т.к. имя поля объекта и переменной совпадают ==> title : title
      }])
  }

  return (
    <SafeAreaView style={{ backgroundColor: '' }}>
      <View >
        <Navbar title="To-Do App" />
        <View style={styles.container}>
          <AddTodo onSubmit={addTodo} />
          <View>
            {todos.map(todo => (
              <Todo todo={todo} key={todo.id} />
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

