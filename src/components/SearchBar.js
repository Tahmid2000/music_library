import React from "react";
import { MDBInput } from "mdbreact";
import "./SearchBar.css";
class SearchBar extends React.Component {
  state = { term: "", debouncedTerm: "" };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.term !== prevState.term && this.state.term !== "") {
      const timerId = setTimeout(() => {
        this.setState({ debouncedTerm: this.state.term });
      }, 400);
      return () => {
        clearTimeout(timerId);
      };
    }

    if (this.state.debouncedTerm !== prevState.debouncedTerm) {
      this.props.onSubmit(this.state.debouncedTerm);
    }
  }
  render() {
    return (
      <div className="form-group">
        <div className="md-form">
          <MDBInput
            label="Search"
            value={this.state.term}
            type="text"
            onChange={e => this.setState({ term: e.target.value })}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
