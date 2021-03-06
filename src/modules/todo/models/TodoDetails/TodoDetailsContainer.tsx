import React from "react"
import { RouterProps } from "react-router"
import TodoDetailsScreen from "./TodoDetailsScreen";

interface Props extends RouterProps {}

const TodoDetailsContainer = (props:Props) =>{
    return <TodoDetailsScreen history={props.history}/>
}

export default TodoDetailsContainer;