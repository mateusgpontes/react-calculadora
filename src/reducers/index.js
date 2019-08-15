const INITIAL_STATE = [];

function reducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SHOW_CALCULA":
      return [{ data: action.resultado }];
    default:
      return state;
  }
}

export default reducers;
