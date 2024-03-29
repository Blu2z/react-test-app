import React, { Component } from 'react';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';
import { Button } from 'reactstrap';

class TableData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props.item,
    };
  }

  handleChange = ({ target }) => {
    this.setState(prevState => ({ ...prevState, [target.name]: target.value }));
  };

  handleSave = () => {
    const {
      ind, save, cancel,
    } = this.props;

    save(this.state, ind);
    cancel();
  };

  renderButton = (name, cb, color = 'primary') => (
    <Button
      size="sm"
      color={color}
      onClick={cb}
    >{name}
    </Button>
  );

  renderInputs = dataNames => (
    dataNames.map(data => (
      <th key={data.id} scope="col">
        <input
          id={data.name}
          className="form-control form-control-sm"
          name={data.name}
          value={this.state[data.name]}
          onChange={this.handleChange}
        />
      </th>
    ))
  );

  renderColData = (dataNames, item) => (
    dataNames.map(data => <td key={nanoid()}>{item[data.name]}</td>)
  );

  renderRowData = (item, ind, dataNames) => (
    <tr>
      <td >{ind + 1}</td>
      {this.renderColData(dataNames, item)}
      <td>
        {this.renderButton('Edit', () => this.props.edit(ind))}
        {this.renderButton('Delete', () => this.props.delete(ind), 'danger')}
      </td>
    </tr>
  );

  renderEditControls = (item, ind, dataNames) => (
    <tr>
      <td>{ind + 1}</td>
      { this.renderInputs(dataNames)}
      <td>
        {this.renderButton('save', this.handleSave)}
        {this.renderButton('cancel', this.props.cancel, 'danger')}
      </td>
    </tr>
  );

  render() {
    const {
      ind, item, isEdit, dataNames,
    } = this.props;
    return isEdit
      ? this.renderEditControls(item, ind, dataNames)
      : this.renderRowData(item, ind, dataNames);
  }
}

export default TableData;

TableData.propTypes = {
  ind: PropTypes.number.isRequired,
  item: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
  dataNames: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  isEdit: PropTypes.bool.isRequired,
  edit: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
};
