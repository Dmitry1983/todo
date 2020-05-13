import React, { useState } from 'react'

import { TodoState } from './src/context/todo/TodoState'

import { MainLayout } from './src/MainLayout'


export default function App() {

  return (
    <TodoState>
      <MainLayout />
    </TodoState>

  )
}



