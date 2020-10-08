import React, { Component } from 'react'
import {inject,observer} from "mobx-react"

@inject('store') 
@observer
export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    handleTodos = (e,type)=>{
        let {store} = this.props
        switch(type){
            case 'add':
                store.addTodo('一条新任务');
                console.log('add',store.todos);
               break;
            case 'delete':
                store.deleteTodo()
                console.log('delete',store.todos)
                break;
            case 'reset':
                store.resetTodo()
                console.log('reset',store.todos)
                break;
            default:
        }
    }
    componnetDidMount(){
       console.log("mount",this.props)
    }
    render() {
        let {store} = this.props
        return (
            <div className='home'>
                <h1>mobx</h1>
                <div>{store.desc}</div>
                <button onClick={(e)=>this.handleTodos(e,'add')}>添加一条任务</button>
                <button onClick={(e)=>this.handleTodos(e,'delete')}>删除一条任务</button>
                <button onClick={(e)=>this.handleTodos(e,'reset')}>任务重置</button>
                {
                    store.todos.map((ele,index,arr)=>{
                        return(
                            <div key={index}>{ele}</div>
                        )
                    })
                }
            </div>
        )
    }
}