import React from 'react';

export interface IEditableProps {
  shipName: string;
  updateName: any;
  shipId: any;
}
export interface IEditableState {
  editaboleMode: boolean;
  shipName: string;
}

class EditableName extends React.Component<IEditableProps, IEditableState> {
  constructor(props: IEditableProps) {
    super(props);
    this.state = {
      editaboleMode: false,
      shipName: this.props.shipName,
    };
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleEditClick() {
    console.log(this);
    this.setState({
      editaboleMode: !this.state.editaboleMode,
    });
  }
  handleChangeShipname(e: any) {
    this.setState({
      shipName: e.target.value,
    });
    console.log(e.target.value);
  }

  handleSaveClick() {
    this.setState({ editaboleMode: true });
    this.props.updateName(this.props.shipId, this.state.shipName);
    this.setState({
      editaboleMode: !this.state.editaboleMode,
    });
  }

  render() {
    const isEditable = this.state.editaboleMode;
    let button;

    if (!isEditable) {
      button = (
        <span
          className="fas fa-edit pointer"
          onClick={this.handleEditClick.bind(this)}
        />
      );
    } else {
      button = (
        <span
          className="fas fa-save pointer"
          onClick={this.handleSaveClick.bind(this)}
        />
      );
    }
    return (
      <div>
        <input
          className="editableField"
          type="text"
          value={this.state.shipName}
          disabled={!this.state.editaboleMode}
          onChange={this.handleChangeShipname.bind(this)}
        />
        {button}
      </div>
    );
  }
}

export default EditableName;
