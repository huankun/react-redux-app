import React, { Component } from "react";
import store from "../../redux/store";
import {decrementAction, incrementAction} from "../../redux/counter_action";

export default class Counter extends Component {

    componentDidMount() {
        store.subscribe(()=>{
            this.setState({})
        })
    }

    increment = () => {
        store.dispatch(incrementAction(1))
    }

    decrement = () => {
        store.dispatch(decrementAction())
    }

    incrementIfOdd = () => {
        if(store.getState() % 2 !== 0){
            store.dispatch(incrementAction(1))
        }
    }

    incrementAsync = () => {
        setTimeout(()=>{
            store.dispatch(incrementAction(1))
        },1000)
    }

    render() {
        return (
            <div>
                <h1>Clicked {store.getState()} times:</h1>
                <button onClick={this.increment}>+</button>{' '}
                <button onClick={this.decrement}>-</button>{' '}
                <button onClick={this.incrementIfOdd}>Increment if odd</button>{' '}
                <button onClick={this.incrementAsync}>Increment async</button>{' '}
            </div>
        )
    }
}
