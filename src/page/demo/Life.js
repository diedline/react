import React from 'react'
import './index.css'
import Child from './Child'
export default class Life extends React.Component{
    constructor(props){
        super(props);
        this.state = {count:0};
    }


    // state = {
    //     count:0
    // }

    hadleAdd =() =>{
        this.setState({
            count : this.state.count + 1
        })
    }
    hadleClick () {
        this.setState({
            count : this.state.count + 1
        })
    }
    render(){
        var style = {
            padding:50
        }
        return  <div className="content">
            <p>react 生命周期介绍</p>
            <button onClick={this.hadleAdd}>点击一下</button>
            <button onClick={this.hadleClick.bind(this)}>点击一下</button>
            <p>{this.state.count}</p>
            <Child name={this.state.count}></Child>
        </div>
    }
}