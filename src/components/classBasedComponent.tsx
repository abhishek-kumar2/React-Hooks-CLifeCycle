import React, { Component } from 'react';

class ClassBasedComponent extends Component {
    state = {
        counter: 0,
        displayMsg: false
    };

    handleClick = () => {
        const {counter} = this.state;
        console.log(this.state)
        this.setState({counter: counter + 1}, () => {
            console.log(this.state)
        });
    }

    /**
     * Class component lifecycle mainly...
     * componentDidMount => triggers on page load
     * componentDidUpdate => triggers on any kind of side effects
     * componentWillUnmount => triggers when component unmount
     */

    componentDidMount() {
        console.log("This is componentDidMount... triggers on page load")
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{counter: number; displayMsg: boolean;}>, snapshot?: any) {
        console.log('prevProps ', prevProps, ' prevState ', prevState);
        if(
            prevState &&
            prevState.counter !== this.state.counter &&
            this.state.counter === 5
        ){
            this.setState({ displayMsg: true})
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount ', 'DOM Render completed');
    }

    render() {
        return (
            <>
                <div>Class Based Component</div>
                <button onClick={this.handleClick}>Counter</button>
                <p>Counter value is {this.state.counter}</p>
                <p>{this.state.displayMsg && "Stop you got 5 points!"}</p>
            </>
        )
    }
}

export default ClassBasedComponent;