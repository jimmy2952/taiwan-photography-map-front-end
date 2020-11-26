import React from 'react';

import Modal from './Modal';
import Button from './Button';

const ErrorModal = props => {
  return (
    <Modal
      onCancel={props.onClear}
      header="錯誤！"
      show={!!props.error}
      footer={<Button onClick={props.onClear}>確認</Button>}
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;
