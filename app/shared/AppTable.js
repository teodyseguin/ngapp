import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Column, Cell } from 'fixed-data-table';

/**
 * Child component to create the fixed table
 */
class CreateTheTable extends React.Component {
  constructor(props) {
    super(props);

    this.headers = [];
    this.columns = [];
  }

  render() {
    // obtain the headers from the csv file
    // we only want the first record of the array
    // since, each record contains the same
    // property name
    for (let i = 0; i === 0; i++) {
      this.headers = Object.keys(this.props.csv[i]);
    }

    // then we use the headers to iterate from and
    // get the value on each object, using the header
    // name as the object property key
    for (let x = 0; x < this.headers.length; x++) {
      this.columns.push(
        <Column 
          key={x}
          header={<Cell>{this.headers[x]}</Cell>} width={150}
          cell={
            props => (
              <Cell {...props}>
                {this.props.csv[props.rowIndex][this.headers[x]]}
              </Cell>
            )
          }
        />
      );
    }

    return (
      <Table
        rowHeight={50}
        rowsCount={this.props.csv ? this.props.csv.length : 10}
        width={1200}
        height={400}
        headerHeight={50}
      >
        { this.columns }
      </Table>
    );
  }
}

/**
 * Default component to be exported
 */
export default class AppTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = { csv: null };
  }

  componentDidMount() {
    $.get('../../www/assets/files/songgrid.csv').done(function(data) {
      this.setState({
        csv: $.csv.toObjects(data)
      });
    }.bind(this));
  }

  render() {
    if (this.state.csv) {
      return <CreateTheTable csv={this.state.csv} />;
    }
    else {
      return <div>Loading Table...</div>;
    }
  }
}

