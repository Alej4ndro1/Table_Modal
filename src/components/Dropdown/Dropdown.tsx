import React, { useState } from 'react';
import { Button, Dropdown, Modal } from 'antd';
import { User } from '../../types/User';
import { EditModal } from '../Modal/EditModal';

import editSvg from '../../icons/navigation/mode_24px.svg';
import optionSvg from '../../icons/navigation/more_vert_24px.svg';
import saveSvg from '../../icons/navigation/save_alt_24px.svg';
import deleteSvg from '../../icons/navigation/delete_24px.svg';

type RecordType = {
  record: User
};

const PlusIcon = () => (
  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 8.12247H8V14.1519H6V8.12247H0V6.11266H6V0.083252H8V6.11266H14V8.12247Z" fill="#2C7DFA" />
  </svg>

);

const CloseIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.8333 1.42661L10.6583 0.24585L6 4.92702L1.34167 0.24585L0.166672 1.42661L4.82501 6.10778L0.166672 10.7889L1.34167 11.9697L6 7.28854L10.6583 11.9697L11.8333 10.7889L7.175 6.10778L11.8333 1.42661Z" fill="#ADB5BD" />
  </svg>
);

export const DropdownMenu: React.FC<RecordType> = ({ record }) => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
    setOpen(false);
  };

  const handleMenuClick = () => {
    setOpen(false);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOpenChange = (flag: boolean) => {
    setOpen(flag);
  };

  return (
    <Dropdown
      overlay={(
        <ul className="customDrop">
          <Modal
            open={isModalOpen}
            onOk={handleOk}
            footer={[
              <Button key="back" onClick={handleCancel} className="addButton">
                Зберегти зміни
              </Button>,
            ]}
          >
            <div className="modalHeader">
              <span className="plusIcon">
                <PlusIcon />
              </span>
              <h2 className="modalTitle">Редагувати сутність</h2>
              <button onClick={handleCancel} type="button" className="closeIcon">
                <CloseIcon />
              </button>
            </div>
            <EditModal user={record} />
          </Modal>
          <li className="customDropItem">
            <Button type="ghost" onClick={showModal} className="modalButton">
              <img src={editSvg} alt="" className="customDropIcon" />
              Редагувати
            </Button>
            <hr className="divider" />
          </li>
          <li className="customDropItem">
            <Button type="ghost" className="custopDropButton" onClick={handleMenuClick}>
              <img src={saveSvg} alt="" className="customDropIcon" />
              Зберегти як файл
            </Button>
            <hr className="divider" />
          </li>
          <li className="customDropItem">
            <Button type="ghost" className="custopDropButton" onClick={handleMenuClick}>
              <img src={deleteSvg} alt="" className="customDropIcon" />
              Видалити
            </Button>
          </li>
        </ul>
      )}
      onOpenChange={handleOpenChange}
      open={open}
    >
      <Button size="small" type="ghost">
        <img src={optionSvg} alt="" />
      </Button>
    </Dropdown>
  );
};
