import { ChangeEvent, Component, FormEvent } from 'react';

interface MyState {
  findTextValue: string;
}

class SearchBar extends Component<object, MyState> {
  constructor(props: object) {
    super(props);

    this.state = { findTextValue: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.loadFromLS();
  }

  componentDidUpdate() {
    this.saveToLS();
  }

  componentWillUnmount() {
    this.saveToLS();
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ findTextValue: event.target.value });
  }

  saveToLS() {
    const { findTextValue } = this.state;
    localStorage.setItem('searchBar', findTextValue);
  }

  loadFromLS() {
    const findTextValue = localStorage.getItem('searchBar');
    if (findTextValue) {
      this.setState({ findTextValue });
    }
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
