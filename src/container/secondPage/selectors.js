import { createSelector } from 'reselect';
import { fromJS, List, Map } from 'immutable';

const applicationVersionSelector = state => {
  // console.log(state.globalData.version);
};

// const userSelector = state => state.getIn('user')

const mapStateToProps = state => ({
  // user : userSelector(state),
  version: applicationVersionSelector(state),
});

export default mapStateToProps;