import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Alert
} from 'react-native'
import { Navbar } from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen'
import { TodoScreen } from './src/screens/TodoScreen'
import { THEME } from './src/theme'


export default function App() {
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([])

  const removeTodo = id => {
    const todo = todos.find(t => t.id === id)

    // Works on both Android and iOS
    Alert.alert(
      'Delete todo element',
      `Do you want delete "${todo.title}" ?`,
      [
        {
          text: 'Cancel',
          // onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Delet',
          style: 'destructive',
          onPress: () => {
            setTodoId(null)
            setTodos(prev => prev.filter(todo => todo.id !== id))
          }
        },
      ],
      { cancelable: false },
    );
  }

  const addTodo = (title) => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title // т.к. имя поля объекта и переменной совпадают ==> title : title
      }])
  }

  let content = (
    <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} openTodo={setTodoId} />
  )

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId)
    content = <TodoScreen onRemove={removeTodo} goBack={() => setTodoId(null)} todo={selectedTodo} />
  }

  return (
    <SafeAreaView style={{ backgroundColor: THEME.COLOR.MAIN }}>
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

