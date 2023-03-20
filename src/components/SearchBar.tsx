import { ChangeEvent, Component, FormEvent } from 'react';

interface MyState {
  findTextValue: string;
}

class SearchBar extends Component<Record<string, never>, MyState> {
  constructor(props: Record<string, never>) {
    super(props);

    const findTextValue = localStorage.getItem('searchBar');
    if (findTextValue) {
      this.state = { findTextValue };
    } else {
      this.state = { findTextValue: '' };
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillUnmount() {
    const { findTextValue } = this.state;
    localStorage.setItem('searchBar', findTextValue);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ findTextValue: event.target.value });
  }

  render() {
    const { findTextValue } = this.state;
    return (
      <div>
        <form
          className="searchBar"
          onSubmit={(event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
          }}
        >
          <input
            type="text"
            value={findTextValue}
            onChange={this.handleChange}
            data-testid="searchBarInput-element"
          />
          <button type="submit" data-testid="searchBarButton-element">
            Find
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
