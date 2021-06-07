// import React, { useState } from 'react';
import React from 'react';

class Searchbar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();
    //prevent auto submit refresh
    this.props.onSubmitBtn(this.state.term);
    //refrencing variable onSubmitBtn
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search here</label>
            <input
              placeholder="Search.."
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
//by Hooks easy and simple
// const Searchbar = () => {
//   const [term, setTerm] = useState('');
//   return (
//     <div className="ui segment">
//       <div className="ui form ">
//         <div className="field"></div>
//         <label>Search Here</label>
//         <input placeholder="" onChange={(e) => setTerm(e.target.input)} />
//       </div>
//     </div>
//   );

// };

export default Searchbar;

//onChange for text input change = onInputChange
//onClick for click
//onSubmit for submit event
//2nd way of event handler use function: onChange = {(event)=> event.target.value}
