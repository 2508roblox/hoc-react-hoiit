import React, { Component } from 'react';
import Form from './Form';

export class Example extends Component {
  state = {
    isShow: false,
    auth: [
      { key: 113144, name: 'giang', age: 182 },
      { key: 11644, name: 'giang2', age: 138 },
      { key: 16634, name: 'gian3g', age: 185 },
      { key: 12534, name: 'gi4ang', age: 1822 },
      { key: 1235524, name: 'gia5ng', age: 138 },
    ],
  };

  handleShowHide = () => {
    this.setState({ isShow: !this.state.isShow });
  };
  handleSubmit = (jobs) => {
    this.setState({
      auth: [...this.state.auth, jobs],
    });
  };
  handleDelete = (item) => {
    this.setState({
      auth: this.state.auth.filter((auth) => auth !== item),
    });
  };
  render() {
    return (
      <>
        <Form handleSubmit={this.handleSubmit} />
        {this.state.isShow ? (
          <>
            <button onClick={this.handleShowHide}>show</button>
          </>
        ) : (
          <>
            {this.state.auth.map((element, index) => {
              return (
                <div key={element.key}>
                  {element.name} -- {element.age} <></>
                  <span
                    onClick={() => {
                      this.handleDelete(element);
                    }}>
                    {' '}
                    x{' '}
                  </span>
                </div>
              );
            })}
            <button onClick={this.handleShowHide}>hide</button>
          </>
        )}
      </>
    );
  }
}

export default Example;
