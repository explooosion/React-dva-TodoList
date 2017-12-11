import _ from 'lodash';
import uuidv4 from 'uuid/v4';

export default {

  namespace: 'example',

  state: {
    list: [
      {
        id: uuidv4(),
        name: '買醬油',
        status: true,
      },
      {
        id: uuidv4(),
        name: '背單字',
        status: false,
      },
      {
        id: uuidv4(),
        name: '打咚咚',
        status: true,
      },
    ],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    add(state, { item }) {
      _.set(item, 'id', uuidv4());
      return {
        ...state,
        list: _.concat(state.list, [item]),
      };
    },
    delete(state, { index }) {
      return {
        ...state,
        list: _.filter(state.list, (item, i) => !_.isEqual(index, i)),
      };
    },
    check(state, { index, value }) {
      const newState = _.clone(state.list);
      newState[index].status = value;
      return {
        ...state,
        list: newState,
      };
    },
  },

};
