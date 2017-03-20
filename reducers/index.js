
const initialState = {
  showText: true
}
export default function (state=initialState, action) {
  switch(action.type) {
    case 'TOGGLE_TEXT':
      {
        return { showText: !state.showText }
      }
    default:
      return state;
  }
}
