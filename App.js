import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import { Navbar } from './src/components/Navbar';
//import { AddTodo } from './src/components/AddTodo';
//import { Todo } from './src/components/Todo';
import { MainScreen } from './src/screens/MainScreen'
import { TodoScreen } from './src/screens/TodoScreen';


export default function App() {
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([])

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

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

  let content = (
    <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} />
  )

  if (todoId) {
    content = <TodoScreen />
  }

  return (
    <SafeAreaView style={{ backgroundColor: 'grey' }}>
      <View >
        <Navbar title="To-Do App" />
        <View style={styles.container}>
          {content}
          {/* <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} /> */}

          {/* <AddTodo onSubmit={addTodo} />

          <FlatList
            data={todos}
            renderItem={({ item }) => (<Todo todo={item} onRemove={removeTodo} />)}
            keyExtractor={item => item.id.toString()} //.toString()} переводим в стринг на всякий случай
          /> */}

          {/* <ScrollView>
          <View>
            {todos.map(todo => (
              <Todo todo={todo} key={todo.id} />
            ))}
          </View>
        </ScrollView> */}


        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white'
  },
});

