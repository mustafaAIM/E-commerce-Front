// src/components/ProductTable.js
import React from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';

// Styled components
const TableWrapper = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 10px;
  border-bottom: 2px solid #ff5722;
  background-color: #f5f5f5;
  color: #333;
  text-align: left;
`;

const Td = styled.td`
  padding: 10px;
  text-align: left;
`;

const Tr = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const ProductTable = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <TableWrapper>
      <Table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map(column => (
                <Th {...column.getHeaderProps()}>
                  {column.render('Header')}
                </Th>
              ))}
            </Tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={row.id}>
                {row.cells.map(cell => (
                  <Td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </Td>
                ))}
              </Tr>
            );
          })}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default ProductTable;
