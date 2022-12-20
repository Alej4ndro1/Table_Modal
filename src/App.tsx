import React from 'react';
import 'antd/dist/reset.css';
import './App.scss';
import { Row, Col } from 'antd';
import { TableComponent } from './components/Table/Table';

const App: React.FC = () => {
  return (
    <div className="App">
      <Row>
        <Col xs={24} md={{ span: 18, offset: 3 }}>
          <TableComponent />
        </Col>
      </Row>
    </div>
  );
};

export default App;
