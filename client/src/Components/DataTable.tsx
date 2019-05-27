import React, { Component, Fragment } from 'react';
import ShipList from './ListItems';
import SearchBar from './Search';
import Pagination from './Pagination';
import ColumnHeader from './ColumnHeader';
import apis from '../fetch/apis';
import configs from '../config.json';

type myProps = {};
type myState = {
  error: boolean;
  tableData: Partial<[{ [key: string]: any }]>;
  sortedBy: string;
  orderedBy: string;
};

class DataTable extends Component<myProps, myState> {
  paginationValues: { [key: string]: string | null };

  constructor(props: any) {
    super(props);
    this.state = {
      error: false,
      tableData: [],
      sortedBy: configs.columnNames[0],
      orderedBy: configs.orderedByAsc,
    };

    this.paginationValues = {
      first: null,
      last: null,
      prev: null,
      next: null,
    };
  }

  loadShipments(params: { [key: string]: any } = {}) {
    apis
      .getShipments(params)
      .then(res => {
        const links: string | null = res.headers.get(configs.linkInHeader);
        if (links && links.length) {
          links.split(',').forEach((el: any) => {
            const label = el
              .split(';')[1]
              .split('=')[1]
              .replace(/\"/g, '');
            const link = el
              .split(';')[0]
              .split('>')[0]
              .split('<')[1];
            this.paginationValues[label] = link;
          });
        }
        res.json().then((data: []) => {
          this.setState({
            error: false,
            tableData: data,
          });
        });
      })
      .catch(() => {
        setTimeout(() => {
          this.setState({
            error: true,
            tableData: [],
          });
        }, 1000);
      });
  }

  //*******Searching **********/

  searchById(id: string) {
    if (id) {
      this.loadShipments({ id });
    } else {
      this.loadShipments();
    }
  }

  //********** Sorting ************/

  sortById() {
    this.loadShipments({
      sort: this.state.sortedBy,
      order: this.state.orderedBy,
    });
  }

  setColumnName(name: string) {
    if (this.state.sortedBy !== name) {
      this.setState(
        {
          sortedBy: name,
          orderedBy: configs.orderedByAsc,
        },
        () => {
          this.sortById();
        }
      );
    }
  }
  setOrderedBy(orderedBy: string) {
    this.setState(
      {
        orderedBy,
      },
      () => {
        this.sortById();
      }
    );
  }

  //********** Pagination ************/

  paginateByType(type: string) {
    const navPage = this.paginationValues[type];
    if (navPage) {
      this.loadShipments({ url: navPage });
    }
  }

  //************Edit Shipment **********//

  updateName(id: string, name: string) {
    apis.updateShipment(id, name).then(() => {
      alert(configs.updateSuccess);
    });
  }

  componentDidMount() {
    this.loadShipments();
  }

  render() {
    const columnNames = configs.columnNames;

    if (!this.state.error) {
      return (
        <Fragment>
          <section>
            <div className="heading">Shipments</div>
            <div className="searchContainer">
              <SearchBar onSearch={this.searchById.bind(this)} />
            </div>
          </section>

          <table>
            <tbody>
              <tr>
                {columnNames.map((i: any, index: any) => (
                  <th key={index}>
                    <ColumnHeader
                      name={i}
                      setOrder={this.setOrderedBy.bind(this)}
                      setName={this.setColumnName.bind(this)}
                      selectedName={this.state.sortedBy}
                      selectedOrder={this.state.orderedBy}
                    />
                  </th>
                ))}
                <th>Detail</th>
              </tr>

              {this.state.tableData.map((item: any) => (
                <ShipList
                  key={item.id}
                  shipitems={item}
                  updateName={this.updateName.bind(this)}
                />
              ))}
            </tbody>
          </table>
          <Pagination onNavigate={this.paginateByType.bind(this)} />
        </Fragment>
      );
    } else {
      return <div>{configs.serverError}</div>;
    }
  }
}
export default DataTable;
