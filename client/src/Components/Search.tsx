import * as React from 'react';
import '../App.css';

export interface ISearchProps {
  onSearch: any;
}
export interface IserachState {
  searchedData: string;
}

class SearchBar extends React.Component<ISearchProps, IserachState> {
  constructor(props: ISearchProps) {
    super(props);
    this.state = {
      searchedData: '',
    };
    this.handleSearchOnClick = this.handleSearchOnClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e: any) {
    this.setState({ searchedData: e.target.value });
    if (!e.target.value) {
      this.props.onSearch();
    }
  }

  handleSearchOnClick() {
    this.props.onSearch(this.state.searchedData);
  }
  render() {
    return (
      <span>
        <input
          type="text"
          placeholder="Search.."
          value={this.state.searchedData}
          name="search"
          onChange={e => this.handleInputChange(e)}
        />
        <button
          className="fa fa-search srchBtn"
          onClick={this.handleSearchOnClick}
        />
      </span>
    );
  }
}

export default SearchBar;
