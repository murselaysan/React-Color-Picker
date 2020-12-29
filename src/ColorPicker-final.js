import React from 'react';
import { Button } from './Button';

class Random extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      color: [88,72,100]
    };
    this.changeColor = this.changeColor.bind(this);
  }

  componentDidMount() {
    console.log('i invoked immediately after component is mounted, just one time at the beginning; after render method')
    this.applyColor();
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('i invoked immediately after updating occurs, upon every change.')
    this.applyColor();
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  changeColor() {
    const randomColor = [];
    for (let i = 0; i < 3; i++) {
      randomColor.push(Math.floor(Math.random()*256));
    }
    return this.setState({
      color:randomColor
    });

  }

  render() {
    return (
      <div>
        <h1 className={this.isLight() ? 'white' : 'black'}>
        Your color is {this.formatColor(this.state.color)}!
        </h1>
        <Button light={this.isLight()} changeCol={this.changeColor}>
          <p>Hi, im color picker</p>
        </Button>
      </div> 
    );
  }
}

export default Random;
