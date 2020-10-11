import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(props){
        super(props);
        // 常用于组件初始化
        this.state = {
            date:new Date(),
        }
    }
    componentWillMount(){
        //此时可以访问状态和属性，可进行api调用等
        console.log("组件要挂载")
    }
    componentDidMount(){
        //组件已挂载，可进行更新状态操作
        this.timeId = setInterval(()=>{
            this.setState({
                date:new Date()
            })
        },1000)
    }
    componentWillReceiveProps(nextProps,nextState){
        //父组件传递的属性有变化，做相应响应
        console.log("将要接收属性传递")
    }
    shouldComponentUpdate(nextState,nextProps){
        //组件是否需要更新，需要返回布尔值，优化点
        //如果nextState和nextProps相同，那么可以return：fasle，这样
        //componentWillUpdate、componentDidUpdate、render就不会执行了，性能就好了，每个组件都这么出来就性能更好了
        console.log("组件是不需要更新？");
        return true;
    }
    componentWillUpdate(){
        //组件将要更新，可做更新统计
        console.log("组件将要更新")
    }
    componentDidUpdate(){
        //组件更新
        console.log("组件已更新")
    }
    componentWillUnmount(){
        //组件将要卸载，可做清理工作
        clearInterval(this.timeId);
    }
    render() {
        return (
            <div>
                周期函数
            </div>
        )
    }
}
