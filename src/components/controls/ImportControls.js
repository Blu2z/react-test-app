import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const ImportControls = ({ toLocal, toOnline }) => (
  <div className="mb-0">
    <input
      type="file"
      accept=".json"
      className="btn btn-primary btn-sm"
      onChange={toLocal}
    />
    <Button
      size="sm"
      color="primary"
      className="float-right"
      onClick={toOnline}
    >load online
    </Button>
  </div>
);

export default ImportControls;

ImportControls.propTypes = {
  toLocal: PropTypes.func.isRequired,
  toOnline: PropTypes.func.isRequired,
};

