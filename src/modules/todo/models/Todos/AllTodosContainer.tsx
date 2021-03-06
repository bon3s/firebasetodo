import React from "react"
import { RouterProps } from "react-router"
import AllTodosScreen from "./AllTodosScreen"

interface Props extends RouterProps {}

const AllTodosContainer = (props:Props) =>{
    return <AllTodosScreen history={props.history}/>
}

export default AllTodosContainer;