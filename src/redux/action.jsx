import axios from "axios";

export const fetchProducts =  () => {
 try{
return async(dispatch,getState)=> {

  const response = await axios.get("https://fakestoreapi.com/products");
   dispatch( {
    type: "fetech_product",
    product: response.data,
  })
}
  // eslint-disable-next-line no-unreachable
  } catch (error) {
    console.log(error.message);
  }
};

export const sidebar =(boolean)=>{
  return {
    type: "sidebar",
    payload:boolean
  }
}
export const setProgress =(payload)=>{
  return {
    type: "progressbar",
    payload:payload
  }
}