const initialState = {
product:[],

};
const initialBar={
  payload:false
}
export const productReducer =(state=initialState, {type,product})=>{
  switch(type){
    case "fetech_product": return {...state,product:product }

    default: return state;
  }
}

export const sidebar =(state=initialBar,action )=>{
    switch(action.type ) {
      case "sidebar": return {...state, payload:action.payload}
      default:return state;
    }
}
