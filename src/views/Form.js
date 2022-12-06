import React, { Component } from 'react';
import './Test.scss'
export class Form extends Component {
  state = {
    jobName: '',
    salary: '',
  };
  handleJobName = (value) => {
    this.setState({
      jobName: value,
    });
  };
  handleSalary = (value) => {
    this.setState({
      salary: value,
    });
  };
  handleSubmitChild = (e) => {
    e.preventDefault();
    if (!this.state.jobName || !this.state.salary) {
      alert('Please enter parameters');
      return;
    }
    //call props function to change the state of jobs array in Parent component
    this.props.handleSubmit({
      key: Math.floor(Math.random() * 194924),
      name: this.state.jobName,
      age: this.state.salary,
    });
    this.setState({
      jobName: '',
      salary: '',
    });
  };
  render() {
    return (
      <form>
        <label className='helo' htmlFor='fname'>Job's Name:</label>
        <br />
        <input
          type='text'
          value={this.state.jobName}
          onChange={(e) => this.handleJobName(e.target.value)}
        />
        <br />
        <label htmlFor='lname'>Salary</label>
        <br />
        <input
          type='text'
          value={this.state.salary}
          onChange={(e) => this.handleSalary(e.target.value)}
        />
        <br />
        <br />
        <input
          type='submit'
          value='Submit'
          onClick={(e) => this.handleSubmitChild(e)}
        />
      </form>
    );
  }
}

export default Form;
