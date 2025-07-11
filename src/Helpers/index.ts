// Data Get from json api 
export const getData = async(endpoint:string) =>{
    const response = await fetch(endpoint,{
        method: 'GET',
        headers:{
            "Content-Type": "application/json",
        }
    })
    const Data = await response?.json()
    return Data
}