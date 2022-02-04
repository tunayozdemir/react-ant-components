import React, { useState } from 'react';
import { Table, Input, InputNumber, Form, Typography, Button } from 'antd';
import './TableV3.scss';
import 'antd/dist/antd.css'

const { Text } = Typography;

const originData = [];

for (let i = 0; i < 1; i++) { originData.push({ key: i.toString(), name: `Tunay ${i}`, percent: `57` });}

const Table3 = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const isEditing = (record) => record.key === editingKey;


  const columns = [
    { title: 'Hissedar Adı Soyadı', dataIndex: 'name', width: '40%', editable: true, },
    { title: 'Her Hissedarın Hisse Yüzdesi', dataIndex: 'percent', width: '40%', editable: true, },
    {
      title: '',
      dataIndex: '',
      width: '10%',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a href='#' onClick={() => save(record.key)} style={{ marginRight: 8, }} >Save</a>
            <a href='#' onClick={cancel} style={{ marginRight: 8, }} >Cancel</a>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>Edit</Typography.Link>
        );
      },
    },
  ];

  const addPerson = () => {
    const newPerson = { key: data.length + 1, name: '', percent: '' + '%', }
    setData(per => { return [...per, newPerson] })
    let lastElement = data.length + 1
    edit(lastElement)
  }

  const EditableCell = ({ editing, dataIndex, title, inputType, record, index, children, ...restProps
  }) => {

    const inputNode = inputType === 'number' ?
      <InputNumber
        bordered={true}
        maxLength={5}
        step={5}
        formatter={value => `${value}`.replace(/\B(?=(\d{2})+(?!\d))/g, ',')}
      /> :
      <Input maxLength={4} />;
    return (
      <td {...restProps}>
        {editing ? (

          <Form.Item name={dataIndex} style={{ margin: 0, }} rules={[{ required: true, message: `Bu alanlar boş bırakılamaz!`, },]} >
            {inputNode}
          </Form.Item>
        ) : (
          <div className='percent'>
            {children}
          </div>
        )}
      </td>
    );
  };

  const edit = (record) => {
    form.setFieldsValue({ name: '', percent: '', ...record, });
    if (record.key) {
      setEditingKey(record.key);
    } else if (record) {
      setEditingKey(record);
    }
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, 
        
          name:row.name,
          percent:`${row.percent}`.replace(/\B(?=(\d{2})+(?!\d))/g, ',')

        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const mergedColumns = columns.map((col) => {
    if (!col.editable) { return col; }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'percent' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Form form={form} component={false}>
      <Table components={{ body: { cell: EditableCell, }, }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        summary={() => {
          let totalRepayment = 0;
  
          data.forEach(({ percent }) => {
            totalRepayment += percent;
          });
  
          return (
            <>
              <Table.Summary.Row>
                <Table.Summary.Cell>Total</Table.Summary.Cell>
                <Table.Summary.Cell>
                  <Text type="dark">{totalRepayment}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell>
                  
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </>
          );
        }}
        
      />
      <Button onClick={addPerson}>Ekle</Button>
    </Form>
  );
};
export default Table3;