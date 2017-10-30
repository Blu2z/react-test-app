import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Jumbotron } from 'reactstrap';
import * as dataActions from '../../actions/dataActions';
import Table from '../../components/table/Table';
import ExportControls from '../../components/controls/ExportControls';
import ImportControls from '../../components/controls/ImportControls';
import WelcomeMessage from '../../components/welcomeMessage/WelcomeMessage';
import { exportToJSON, exportToCSV } from '../../utils/fileHelpers';


const Main = ({
  items, deleteData, editData, getDataOnline, getDataLocal,
}) => (
  items.length ? (
    <Container>
      <Table
        data={items}
        save={(data, ind) => editData({ data, ind })}
        delete={ind => deleteData(ind)}
      />
      <ExportControls
        toJSON={() => exportToJSON('data', items)}
        toCSV={() => exportToCSV('data', items)}
      />
    </Container>
  ) : (
    <Container>
      <Jumbotron>
        <WelcomeMessage />
        <ImportControls
          toLocal={e => getDataLocal(e.target)}
          toOnline={getDataOnline}
        />
      </Jumbotron>
    </Container>
  )
);


function mapStateToProps(state) {
  return {
    ...state.data,
  };
}

/**
 * @type {{editData: editData, deleteData: deleteData, getDataOnline: getDataOnline, getDataLocal: getDataLocal}}
 */
const mapDispatchToProps = {
  ...dataActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

Main.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  getDataOnline: PropTypes.func.isRequired,
  getDataLocal: PropTypes.func.isRequired,
  editData: PropTypes.func.isRequired,
  deleteData: PropTypes.func.isRequired,
};
