import React, { useState } from 'react'
import { Checkbox, Divider } from 'antd';

import './CheckboxComponent.scss'

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

const defaultTaskList = [
  'tv',
  'setup',
  'fault',
  'nextRoom',
  'service',
  'hardware',
  'camSetup',
  'openTasks',
  'priorityTasks',
  'dealerTasks',
  'canceledTasks',
  'completedTasks',
]

const list = [
  {
    title: 'KATEGORİ',
    options: [
      { id: 0, label: "TV", value: "tv", icon: "task-tv", checked: true },
      { id: 1, label: "Kurulum", value: "setup", icon: "task-settings", checked: false },
      { id: 2, label: "Arıza", value: "fault", icon: "task-fault", checked: true },
      { id: 3, label: "Yan Oda", value: "nextRoom", icon: "task-next-room", checked: true },
      { id: 4, label: "Ücretli Teknik Servis", value: "service", icon: "task-technical-service", checked: false },
      { id: 5, label: "İkinci Donanım", value: "hardware", icon: "task-second-hardware", checked: true },
      { id: 6, label: "Akıllı Kamera Kurulum", value: "camSetup", icon: "task-smart-camera", checked: true },
    ]
  },
  {
    title: 'STATÜ',
    options: [
      { id: 7, label: "Açık", value: "openTasks", checked: true },
      { id: 8, label: "Bayi", value: "dealerTasks", checked: true },
      { id: 9, label: "Öncelikli", value: "priorityTasks", checked: true },
      { id: 10, label: "İptal edilmiş", value: "canceledTasks", checked: true },
      { id: 11, label: "Tamamlandı", value: "completedTasks", checked: true },
    ]
  }
]

const CheckboxComponent = () => {

  const [checklist, setChecklist] = useState(list);
  const [isCheckedAll, setIsCheckedAll] = useState(false);

  const onChange = (arr, title, id) => {

    // console.log('arr :', arr)
    // console.log('id :', id)
    const titles = title;
    const updatedChecklist = checklist.map((item) => {

      return (
        item.options.map((arr) => {
          if (arr.id === id) {
            return { ...arr, checked: !arr.checked }
              ;
          }
          return arr;
        })
      )
    });
    setChecklist(updatedChecklist);
    console.log('updatedChecklist :', { title: titles, ...updatedChecklist })
    // setIsCheckedAll(updatedChecklist.every((item) => item.isChecked));

  };
  const onCheckAllChange = (e) => {
    setChecklist(e.target.checked ? plainOptions : []);
    setIsCheckedAll(e.target.checked);
  };

  return (
    <>
      {
        checklist.map((items, index) => {
          console.log('items :', items)
          return (
            <div key={index}>
              <Divider />
              <span>{items.title}</span>

              {
                items?.options?.map((arr, key) => {
                  return (
                    <div key={key}>
                      <Checkbox
                        // value={arr.value}
                        onChange={() => onChange(arr, items.title, arr.id)}
                        checked={arr.checked}
                      >
                        {arr.label}
                      </Checkbox>
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }

      <Divider />
      <Checkbox onChange={onCheckAllChange} checked={isCheckedAll}>Check all</Checkbox>
      <CheckboxGroup options={plainOptions} value={checklist} onChange={onChange} />
    </>
  )
}

export default CheckboxComponent;