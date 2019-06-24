import React, { createRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import './ModalDialog.css';

const ModalDialog = ({ children, onClickClose }) => {
  const handleClickClose = ev => {
    if (ev.type === 'keydown' && ev.key !== 'Escape') {
      return;
    }
    onClickClose(ev);
  };

  const back = createRef();
  useEffect(() => {
    back.current.focus();
  }, [back]);

  return (
    <div
      className="ModalDialog"
      onClick={handleClickClose}
      onKeyDown={handleClickClose}
      role="button"
      tabIndex="0"
      ref={back}
    >
      <div className="ModalDialog-Content">
        <div className="Close">
          <i className="far fa-times-circle" />
        </div>
        {children}
      </div>
    </div>
  );
};

ModalDialog.propTypes = {
  onClickClose: PropTypes.func.isRequired
};

export default ModalDialog;
