import React from 'react';
import CommonTemplate from './CommonTemplate';
import { type } from 'os';

export default class Details extends React.Component<
  IDetailProps,
  IDetailState
> {
  constructor(props: IDetailProps) {
    super(props);
  }
  render() {
    const { data } = this.props.location.state;
    return (
      <div>
        <div className="detailHeading"> Shipment Information</div>
        <table>
          <tbody>
            <tr>
              <td>ID</td>
              <td>{data.id}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{data.name}</td>
            </tr>
            <tr>
              <td>Cargo</td>
              <td>
                {data.cargo.map((item: any, i: any) => (
                  <CommonTemplate key={i} pillItems={item} />
                ))}
              </td>
            </tr>
            <tr>
              <td>Mode</td>
              <td>{data.mode}</td>
            </tr>
            <tr>
              <td>Services</td>
              <td>
                {data.services.map((item: any, i: any) => (
                  <CommonTemplate key={i} pillItems={item} />
                ))}
              </td>
            </tr>
            <tr>
              <td>Type</td>
              <td>{data.type}</td>
            </tr>
            <tr>
              <td>Destination</td>
              <td>{data.destination}</td>
            </tr>
            <tr>
              <td>Origin</td>
              <td>{data.origin}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>{data.total}</td>
            </tr>
            <tr>
              <td>UserId</td>
              <td>{data.userId}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>{data.status}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

type IDetailProps = {
  location: any;
};
type IDetailState = {};
