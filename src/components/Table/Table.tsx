import React from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { users } from '../../data';
import './Table.scss';

import { User } from '../../types/User';
import { DropdownMenu } from '../Dropdown/Dropdown';

const columns: ColumnsType<User> = [
  {
    title: '',
    dataIndex: 'action',
    key: 'action',
    render: (_text, record) => {
      return (
        <DropdownMenu record={record} />
      );
    },
  },
  {
    title: 'Назва',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'URL',
    dataIndex: 'url',
    key: 'url',
  },
  {
    title: 'Автор',
    dataIndex: 'userName',
    key: 'userName',
  },
  {
    title: 'Створено',
    dataIndex: 'data',
    key: 'data',
    sorter: (a, b) => a.data.localeCompare(b.data),
  },
];

export const TableComponent: React.FC = () => {
  return (
    <Table
      columns={columns}
      dataSource={users}
    />
  );
};
