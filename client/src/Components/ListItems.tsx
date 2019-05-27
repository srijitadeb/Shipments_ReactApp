import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import EditableName from './EditableName';

type myProps = {
  updateName: any;
  shipitems: any;
};

export default class ShipList extends React.Component<myProps, any> {
  constructor(props: myProps) {
    super(props);
  }
  render() {
    const {
      id,
      name,
      mode,
      type,
      origin,
      total,
      status,
    } = this.props.shipitems;
    return (
      <Fragment>
        <tr key={id}>
          <td>{id}</td>
          <td>
            <EditableName
              updateName={this.props.updateName}
              shipName={name}
              shipId={id}
            />
          </td>
          <td>{mode}</td>
          <td>{type}</td>
          <td>{origin}</td>
          <td>{total}</td>
          <td>{status}</td>
          <td>
            <Link
              to={{
                pathname: '/details',
                state: { data: this.props.shipitems },
              }}
            >
              Detail
            </Link>
          </td>
        </tr>
      </Fragment>
    );
  }
}
