import React from 'react';

interface IColumnProps {
  name: string;
  setName: any;
  setOrder: any;
  selectedName: string;
  selectedOrder: string;
}
interface IColumnState {}
class ColumnHeader extends React.Component<IColumnProps, IColumnState> {
  clickHandeler() {
    if (this.props.name !== this.props.selectedName) {
      this.props.setName(this.props.name);
    }
  }
  handleSortUpClick() {
    if (
      this.props.name === this.props.selectedName &&
      this.props.selectedOrder !== 'desc'
    ) {
      this.props.setOrder('desc');
    }
  }
  handlSortDownClick() {
    if (
      this.props.name === this.props.selectedName &&
      this.props.selectedOrder !== 'asc'
    ) {
      this.props.setOrder('asc');
    }
  }
  render() {
    return (
      <div>
        <span className="spanDiv" onClick={this.clickHandeler.bind(this)}>
          {this.props.name}
        </span>
        {this.props.selectedName !== this.props.name ? (
          ''
        ) : this.props.selectedOrder === 'asc' ? (
          <span
            className="fas fa-sort-up"
            onClick={this.handleSortUpClick.bind(this)}
          />
        ) : (
          <span
            className="fas fa-sort-down"
            onClick={this.handlSortDownClick.bind(this)}
          />
        )}
      </div>
    );
  }
}

export default ColumnHeader;
