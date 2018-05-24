import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';

class ExpenseForm extends Component {
  state = {
    description: this.props.expense ? this.props.expense.description : '',
    note: this.props.expense ? this.props.expense.note : '',
    amount: this.props.expense ? (this.props.expense.amount / 100).toString() : '',
    createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
    calendarFocused: false,
    errorState: false
  };

  onDescriptionChange = (e) => {
    const desc = e.target.value;
    this.setState({description: desc});
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState({note});
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({amount})
    }
  };

  onDateChange = (createdAt) => {
    if(createdAt) {
      this.setState({createdAt})
    }
  };

  onFocusChange = ({focused}) => {
    this.setState({calendarFocused: focused});
  };

  onSubmit = (e) => {
    e.preventDefault();
    if(!this.state.description || !this.state.amount) {
      this.setState({errorState: true});
    } else {
      this.setState({errorState: false});
      const prevAmount = this.state.amount;
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(prevAmount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  };

  render() {
    return (
      <div>
        {this.state.errorState ? <p>Error, please try again</p> : null}
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Description" autoFocus value={this.state.description}
                 onChange={this.onDescriptionChange}/>
          <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange}/>
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea placeholder="Add a note for your expense" onChange={this.onNoteChange}></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;