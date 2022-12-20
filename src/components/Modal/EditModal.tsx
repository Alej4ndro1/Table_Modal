import React from 'react';
import {
  Input,
  Form,
  Select,
} from 'antd';
import './Modal.scss';
import UAIcon from '../../icons/modal/UA.svg';
import { User } from '../../types/User';

type UserType = {
  user: User; // ? Мій об'єкт user
};

export const EditModal: React.FC<UserType> = ({ user }) => {
  const { Option } = Select;

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 60 }} defaultValue="default">
        <Option value="default"><img src={UAIcon} alt="" /></Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <>
      <div className="form">
        <div className="inputBlock">
          <h3 className="inputTitle">Назва</h3>
          <Input placeholder="Статус посилки" className="modalInput" value={user.title} />
          <h3 className="inputTitle">Номер телефону</h3>
          {/* <Form.Item
              name="phone"
              rules={[{ required: true, message: 'Please input your phone number!' }]}
              className="phoneModalInput"
            >
            </Form.Item> */
            // ! це має бути у модалці addUser
          }
          <Input
            addonBefore={prefixSelector}
            style={{ width: '100%' }}
            placeholder="+380 95 xxx-xx-xx"
            value={user.phone}
            className="phoneModalInput"
            size="large"
          />
          <h3 className="inputTitle">Група користувачів</h3>
          <Select
            defaultValue="default"
            className="modalInput"
            size="large"
            options={[
              {
                value: 'default',
                label: 'Оберіть групу',
                disabled: true,
              },
              {
                value: 'group1',
                label: '1 Група',
              },
              {
                value: 'group2',
                label: '2 Група',
              },
              {
                value: 'group3',
                label: '3 Група',
              },
            ]}
          />

          <h3 className="inputTitle">Додати нове поле</h3>
          <Select
            defaultValue="default"
            className="modalInput"
            size="large"
            options={[
              {
                value: 'default',
                label: 'Заголовок',
                disabled: true,
              },
              {
                value: 'group1',
                label: 'Текст',
              },
              {
                value: 'group2',
                label: 'Текст',
              },
              {
                value: 'group3',
                label: 'Текст',
              },
            ]}
          />
        </div>

        <div className="inputBlock">
          <h3 className="inputTitle">Ім&#39;я та Прізвище</h3>
          <Input placeholder="Через пробіл" className="modalInput" value={user.userName} />
          <h3 className="inputTitle">Email</h3>
          {/* <Form.Item
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
            </Form.Item> */
            // ! це має бути у модалці addUser
          }
          <Input placeholder="example.com" className="modalInput" value={user.email} />
          <h3 className="inputTitle">Мова</h3>
          <Select
            defaultValue="default"
            className="modalInput"
            size="large"
            options={[
              {
                value: 'default',
                label: 'Оберіть мову',
                disabled: true,
              },
              {
                value: 'language1',
                label: 'Українська',
              },
              {
                value: 'language2',
                label: 'English',
              },
              {
                value: 'language3',
                label: 'Polski',
              },
            ]}
          />
          <h3 className="inputTitle">Значення поля</h3>
          <Input placeholder="Статус посилки" />
        </div>
      </div>
    </>
  );
};
