import React, { Component } from 'react';
import ShowCounter from './ShowCounter';
import Button from './Button';

class Content extends Component {

    constructor( props ) {
        super(props);
        this.state = {
            counter: 0,
            showLoading: true,
            value: '',
            first_name: '',
            last_name: '',
        }
        this.minusCounter = this.minusCounter.bind(this);
        this.addCounter = this.addCounter.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount(){
        console.log("log will mount")
    }
    componentDidMount(){
        console.log("log did mount")

        setTimeout(()=>{
            this.setState(
                {showLoading: false}
            )
        },3000)
    }


    minusCounter(){
        this.setState({counter: this.state.counter - 1 });
    }

    addCounter(){
        this.setState({counter: this.state.counter + 1 });
    }

    handleChange(event) {
        const key = event.target.name;
        const value = event.target.value;
        this.setState({
            [key]: value
        })

    }
    handleSubmit(event) {
        event.preventDefault();
        alert("Name : " + this.state.first_name + ' ' + this.state.last_name)
    }

    render() {
        if(this.state.showLoading) return <h1>Loading...</h1>
        const info = {
            first_name : "hi",
            last_name :  "hello"
        }
        return(
        <div>
            <button onClick={this.addCounter}>+</button>
            <button onClick={this.minusCounter}>-</button>
            <ShowCounter counter={this.state.counter} info={info}/>
            <br/>
            <input type="text" name="first_name" onChange={this.handleChange}/>
            <input type="text" name="last_name" onChange={this.handleChange}/>
            <button onClick={this.handleSubmit}>Save</button>
           
        </div>
        )
    }

}

export default Content;