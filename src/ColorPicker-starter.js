import React from 'react';
import { Button } from './Button';

class ColorPicker extends React.Component {
  

  componentDidMount() {
    console.log('i invoked immediately after component is mounted, just one time at the beginning; after render method')
    
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('i invoked immediately after updating occurs, upon every change.')
    
  }

  isLight(colorArr) {
    return colorArr.reduce((a,b) => a+b) < 127 * 3;  // it returns true or false;
  }

  formatColor(colorArr) {
    return 'rgb(' + colorArr.join(', ') + ')';   // it returns rgb format of color;
  }

  

 


  render() {
    return (
      <div>
        <h1>
        Your color is ........!
        </h1>
        <Button >
          <p>Hi, im color picker</p>
        </Button>
      </div> 
    );
  }
}

export default ColorPicker;
