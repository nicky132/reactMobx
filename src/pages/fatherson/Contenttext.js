import React from 'react'
import Child from './Son'
//创建上下文
const Content = React.createContext();
//获取Provider和Consumer
const Provider = Content.Provider;
const Consumer = Content.Consumer;

// function Child(props){
//    return(
//        <button onClick={()=>props.add()}>{'父子组件传值'}{props.counter}</button>
//    )
// }

export default class Contenttext extends React.Component{
    state = {
        counter:0
    }
    add=()=>{
        this.setState({
            counter:this.state.counter+1
        })
    }
    render(){
        return (
            <Provider value={{counter:this.state.counter,add:this.add}}>
                <Consumer>
                    {/* Consumer 里面这个value就是上面{counter:this.state.counter,add:this.add}的对象 */}
                    {value => <Child {...value}></Child>}
                </Consumer>
            </Provider>
        )
    }
}
