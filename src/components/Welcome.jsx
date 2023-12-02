//import {useState} from 'react';
import React from 'react';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodo } from '../hooks/useTodo';


function Welcome()  {
    const {
        todos, 
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleCompleteTodo,
        handleUpdateTodo,
    } = useTodo();
      
    return ( 
        <>
            <div clasName="card-to-do">
                <h1>Lista de Tareas</h1>
                <h2>Grupo 6</h2>
                <div className="counter-todos">
                    <h3> N° Tareas: <span>{todosCount}</span></h3>
                    <h3> Pendientes: <span>{pendingTodosCount}</span></h3>
                </div>
      
                <div className="add-todo">
                    <h3>Agregar Tarea</h3>
                    <TodoAdd handleNewTodo = {handleNewTodo}/>
                </div>
        
                <TodoList 
                    todos={todos}
                    handleUpdateTodo = {handleUpdateTodo}
                    handleDeleteTodo = {handleDeleteTodo}
                    handleCompleteTodo = {handleCompleteTodo}
                />
            </div>
        </>
    );
}
export default Welcome;