import React, { useState, useEffect } from 'react';
import { Table, Tag, Button, Modal, Input, Row, Col } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import './Tables.scss'


function TableV2() {
  const [isModal, setIsModal] = useState(false);
  const [isEditPerson, setIsEditPerson] = useState(null)
  const [loading, setLoading] = useState(true)



  const [dataSource, setDataSource] = useState([
    { key: '0', id: 0, firstName: 'Tunay', lastName: 'Özdemir', not: "50", age: '33' },
    { key: '1', id: 1, firstName: 'Hayriye', lastName: 'Özdemir', not: "92", age: '28' },
    { key: '2', id: 2, firstName: 'Asya', lastName: 'Özdemir', not: "100", age: '1,5' },
    { key: '3', id: 3, firstName: 'Gülay', lastName: 'Özdemir', not: "72", age: '59' },
    { key: '4', id: 4, firstName: 'Duman', lastName: 'Özdemir', not: "45", age: '13' }
  ]);

  const columns = [
    { key: '0', title: 'Id', dataIndex: 'id' },
    { key: '1', title: 'First Name', dataIndex: 'firstName' },
    { key: '2', title: 'Last Name', dataIndex: 'lastName' },
    { key: '3', title: 'Not', dataIndex: 'not' },
    {
      key: '4',
      title: 'Yaş', dataIndex: 'age',
      render: (tag) => {
        const color = tag.includes('33') ? 'Green' : tag.includes('28') ? 'blue' : tag.includes('59') ? 'black' : 'red'
        return <Tag color={color} key={tag}>{tag}</Tag>
      }
    },
    {
      key: '5',
      title: 'İşlemler',
      render: (record) => {
        return (
          <>
            <EditOutlined onClick={() => { onEditPerson(record) }} />
            <DeleteOutlined onClick={() => { onDeletePerson(record) }} style={{ color: 'red', marginLeft: 12 }} />
          </>
        )
      }
    }
  ];

  const addPerson = () => {
    const randomNumber = parseInt(Math.random() * 1000)
    const newPerson = {
      key: randomNumber,
      id: randomNumber,
      firstName: 'Ad' + randomNumber,
      lastName: 'Soyad' + randomNumber,
      not: "Not" + randomNumber,
      age: "Yaş" + randomNumber
    }
    setDataSource(per => {
      return [...per, newPerson]
    })
  }

  const onDeletePerson = (record) => {
    Modal.confirm({
      title: 'Seçili Personel Silinecektir!!!',
      okText: 'Evet',
      cancelText: 'Hayır',
      okType: 'danger',
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((person) => person.id !== record.id);
        });
      }
    })
  }

  const onEditPerson = (record) => {
    setIsModal(true)
    setIsEditPerson({ ...record })
  }

  const resetEdit = () => {
    setIsModal(false)
    setIsEditPerson(null)
  }

  useEffect(() => { 
    setTimeout(() => {
      setLoading(false)
    }, 1050);
  }, [])

  return (
    <div className="container">
      <Row gutter={[24, 1]}>
        <Col span={24}>
          <Table loading={loading} columns={columns} dataSource={dataSource} ></Table>
          <Modal
            title="Personel Düzneleme"
            visible={isModal}
            okText="Tamam"
            cancelText="Vazgeç"
            onCancel={() => { resetEdit() }}
            onOk={() => {
              setDataSource(pre => {
                return pre.map(person => {
                  if (person.id === isEditPerson.id) {
                    return isEditPerson
                  }
                  else {
                    return person
                  }
                })
              })
              resetEdit()
            }}
          >
            <Input value={isEditPerson?.firstName}
              onChange={(e) => { setIsEditPerson(pre => { return { ...pre, firstName: e.target.value } }) }}
            />

            <Input value={isEditPerson?.lastName}
              onChange={(e) => { setIsEditPerson(pre => { return { ...pre, lastName: e.target.value } }) }}
            />

            <Input value={isEditPerson?.not}
              onChange={(e) => { setIsEditPerson(pre => { return { ...pre, not: e.target.value } }) }}
            />

            <Input value={isEditPerson?.age}
              onChange={(e) => { setIsEditPerson(pre => { return { ...pre, age: e.target.value } }) }}
            />
          </Modal>
          <Modal></Modal>
        </Col>
        <Col span={24}>
          <Button onClick={addPerson}>Yeni Kişi Ekle</Button>
        </Col>
      </Row>
    </div>
  )
}
export default TableV2;