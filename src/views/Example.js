import React, { Component } from 'react';

export class Example extends Component {
  state = {
    name: 'Giang',
  };
  handleClick = () => {
    alert('Done');
  };
  render() {
    {
      console.log('time');
    }

    const handleChange = (value) => {
      this.setState({ name: value });
    };

    let hehe = new Date();
    return (
      <>
        <input
          type={this.state.name}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
        <div>This is a Class Component has created by {this.state.name}</div>
        <div>
          <button onClick={this.handleClick}>Hit me..</button>
        </div>
      </>
    );
  }
}

export default Example;
