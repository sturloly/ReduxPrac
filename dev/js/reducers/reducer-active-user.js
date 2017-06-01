export default function(state=null, action){ //default state value, action to care about
  switch(action.type){
      case "USER_SELECTED":
        return action.payload;
        break;
  }
  return state;
}
