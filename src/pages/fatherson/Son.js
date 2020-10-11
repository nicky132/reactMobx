import React, { Component } from 'react'

export default class Son extends Component {
    constructor(props){
       super(props)
    }
    render() {
        return (
            <button onClick={()=>this.props.add()}>{'父子组件传值'}{this.props.counter}</button>
        )
    }
}
