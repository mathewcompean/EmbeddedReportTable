import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Badge } from 'antd';

class EmbeddedReportTable extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };
  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  }
  clearFilters = () => {
    this.setState({ filteredInfo: null });
  }
  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  }
  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  }
  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};

    const expandedRowRender = () => {
        const columns = [
          { title: 'Date', dataIndex: 'date', key: 'date', width: 125},
          { title: 'Name', dataIndex: 'name', key: 'name', width: 150},
          { title: 'Status', key: 'state', render: () => <span><Badge status="success" />Finished</span>, width:100 },
          { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum', width: 100 },
          { title: 'Additional Column', dataIndex: 'upgradeNum', key: 'upgradeNum1', width: 200 },
          { title: 'Additional Column', dataIndex: 'upgradeNum', key: 'upgradeNum2', width: 200 },
          { title: 'Additional Column', dataIndex: 'upgradeNum', key: 'upgradeNum3', width: 200 },
          { title: 'Additional Column', dataIndex: 'upgradeNum', key: 'upgradeNum4', width: 200 },
          { title: 'Additional Column', dataIndex: 'upgradeNum', key: 'upgradeNum5', width: 200 },
          { title: 'Additional Column', dataIndex: 'upgradeNum', key: 'upgradeNum6', width: 200 },
          { title: 'Additional Column', dataIndex: 'upgradeNum', key: 'upgradeNum7', width: 200 },
          { title: 'Additional Column', dataIndex: 'upgradeNum', key: 'upgradeNum8', width: 200 },
          { title: 'Additional Column', dataIndex: 'upgradeNum', key: 'upgradeNum9', width: 200 },
          { title: 'Additional Column', dataIndex: 'upgradeNum', key: 'upgradeNum10', width: 200 },
          { title: 'Additional Column', dataIndex: 'upgradeNum', key: 'upgradeNum11', width: 200 }
        ];
    
        const data = [];
        for (let i = 0; i < 3; ++i) {
          data.push({
            key: i,
            date: '2014-12-24 23:12:00',
            name: 'This is production name',
            upgradeNum: 'Upgraded: 56',
          });
        }
        return (
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            scroll={{x: 3000}}
          />
        );
      };
    
      const mainCols = [
        { title: 'Title', dataIndex: 'title', key: 'title',fixed: 'left', 
        filters: [
            { text: 'A', value: 'A -' },
            { text: 'B', value: 'B -' },
          ],
          filteredValue: filteredInfo.name || null,
          onFilter: (value, record) => record.name.includes(value),
          sorter: (a, b) => a.name.length - b.name.length,
          sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,width: 120},
        { title: 'Aplha', dataIndex: 'alpha', key: 'alpha', fixed: 'left', width: 100},
        { title: 'Line of Business', dataIndex: 'lineOfBusiness', key: 'lineOfBusiness', width: 120 },
        { title: 'Line of Service', dataIndex: 'lineOfService', key: 'lineOfService', width: 120 },
        { title: 'Start Date', dataIndex: 'startDate1', key: 'startDate1', width: 120},
        { title: 'Completion Date', dataIndex: 'completionDate1', key: 'completionDate1', width: 120 },
        { title: 'Jop Type', dataIndex:'jobType', key: 'jobType', width: 120},
        { title: 'Due Date (Actual)', dataIndex: 'dueDate', key: 'dueDate', width: 120 },
        { title: 'Assets', dataIndex: 'assets', key: 'assets', width: 120},
        { title: 'Workability Date (Target)', dataIndex: 'workabilityDate', key: 'workabilityDate', width: 120 },
        { title: 'Start Date', dataIndex: 'startDate2', key: 'startDate2', width: 120 },
        { title: 'Completion Date', dataIndex: 'completionDate2', key: 'completionDate2', width: 120 },
        { title: 'Assignee', dataIndex: 'assignee', key: 'assignee', width: 120 },
        { title: 'Pixelogic Manager', dataIndex: 'pxlManager', key: 'pxlManager', width: 120 },
        { title: 'Client Manager', dataIndex: 'clientManager', key: 'clientManager', width: 120 },
        { title: 'Client Group', dataIndex: 'clientGroup', key: 'clientGroup', width: 120 },
        { title: 'Pixelogic Notes', dataIndex: 'pxlNotes', key: 'pxlNotes', width: 120 },
        { title: 'Client Notes', dataIndex: 'clientNotes', key: 'clientNotes', width: 120 }
      ];
    
      const data = [];
      for (let i = 0; i < 2; ++i) {
        data.push({
          key: i,
          title: 'A - Test Title',
          alpha: '12345',
          lineOfBusiness: 'Service',
          lineOfService: 'Business',
          startDate1: '2014-12-20 23:12:00',
          completionDate1: '2014-12-24 23:12:00',
          jobType: 'Encoding',
          dueDate: '2014-12-30 23:12:00',
          assets: 'Some Assets',
          workabilityDate: '2014-12-19 23:12:00',
          startDate2: '2014-12-20 23:12:00',
          completionDate2: '2014-12-22 23:12:00',
          assignee: 'Test Worker',
          pxlManager: 'Test PXL Manager',
          clientManager: 'Test Client Manager',
          clientGroup: 'Test Client Group',
          pxlNotes: 'Some PLM notes',
          clientNotes: 'Some Client notes',
        });
      }

    return (
        <Table 
        className="embedded-report-table"
        columns={mainCols}
        expandedRowRender={expandedRowRender} 
        dataSource={data} 
        onChange={this.handleChange} 
        scroll={{x: 4000, y:1000}}
        />

    );
  }
}

ReactDOM.render(<EmbeddedReportTable />, document.getElementById('container'));