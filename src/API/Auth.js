import {searchData} from "./StroageApi.js"
 const isAuth = ()=>{
  return searchData()!=null?true:false
}
export default isAuth