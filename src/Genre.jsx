import React, { Component } from 'react';

class Genre extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { genre } = this.props;
    return ( 
      <>
        <li>
          { genre }
        </li>
      </>
    );
  }
}
 
export default Genre;
