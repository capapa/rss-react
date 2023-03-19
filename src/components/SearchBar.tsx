import { ChangeEvent, Component, FormEvent } from 'react';

interface MyState {
  findTextValue: string;
}

class SearchBar extends Component<MyState, MyState> {
  constructor(props: MyState) {
    super(props);
    this.state = { findTextValue: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const findTextValue = localStorage.getItem('searchBar');
    if (findTextValue) {
      this.setState({ findTextValue });
    }
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ findTextValue: event.target.value });
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { findTextValue } = this.state;
    localStorage.setItem('searchBar', findTextValue);
  }

  render() {
    const { findTextValue } = this.state;
    return (
      <div>
        <form className="searchBar" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={findTextValue}
            onChange={this.handleChange}
          />
          <button type="submit">Find</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
