import * as React from 'react';
import '../App.css';

export interface IPaginationProps {
  onNavigate: Function;
}
export interface IPaginationState {
  paginationTypes: {
    label: string;
    value: string;
  }[];
}

class Pagination extends React.Component<IPaginationProps, IPaginationState> {
  constructor(props: IPaginationProps) {
    super(props);
    this.state = {
      paginationTypes: [
        { label: 'First', value: 'first' },
        { label: 'Prev', value: 'prev' },
        { label: 'Next', value: 'next' },
        { label: 'Last', value: 'last' },
      ],
    };
    this.handleOnClick.bind(this);
  }

  handleOnClick(type: string) {
    if (type) {
      this.props.onNavigate(type);
    }
  }

  render() {
    return (
      <div className="pagination">
        {this.state.paginationTypes.map(el => {
          return (
            <span
              className="spanDiv"
              key={el.value}
              onClick={e => this.handleOnClick(el.value)}
            >
              {el.label}
            </span>
          );
        })}
      </div>
    );
  }
}

export default Pagination;
