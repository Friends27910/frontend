export const storeData = (Data) =>{
  localStorage.setItem("Id",Data)
}
export const searchData = () =>{
  return localStorage.getItem("Id")
}