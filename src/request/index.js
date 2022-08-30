import { url, config } from "../endpoints";

export const getData = async(counter)=>{
  if (counter>0){
    return await fetch(`${url}?offset=${counter}`, config)
  }else{
    return await fetch(url, config)
  }
}