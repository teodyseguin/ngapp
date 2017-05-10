import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Column, Cell } from 'fixed-data-table';

const rows = [
  ['a1', 'b1', 'c1'],
  ['a2', 'b2', 'c2'],
  ['a3', 'b3', 'c3']
];

export default class AppTable extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Table rowHeight={50} rowsCount={rows.length} width={900} height={900} headerHeight={50}>
        <Column header={<Cell>Col 1</Cell>} cell={<Cell>Column 1 static content</Cell>} width={200} />
        <Column header={<Cell>Col 2</Cell>} cell={<Cell>Column 1 static content</Cell>} width={100} />
        <Column header={<Cell>Col 3</Cell>} cell={<Cell>Column 1 static content</Cell>} width={200} />
      </Table>
    );
  }
}

