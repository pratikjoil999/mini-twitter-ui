
import env from '../environment'


export function dataService(type, data){
    console.log("data==>",data)
    const apiUrl=env.base.baseUrl+type;
    const userToken = localStorage.getItem('X-Auth-Token');
    const apiHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': userToken
    }
    return new Promise((resolve,reject)=>{
        fetch(apiUrl,{
            method : 'POST',
            headers: apiHeaders,
            body: JSON.stringify(data)
        })
        .then((response)=>response.json())
        .then((responseJson)=>{
            resolve(responseJson);
        })
        .catch((error)=>{
           // console.error(error);
            reject(error)
        });

    });

} 

export function getDataService(type){
    const apiUrl=env.base.baseUrl+type;
    const userToken = localStorage.getItem('X-Auth-Token');
    const apiHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': userToken
    }
    return new Promise((resolve,reject)=>{
        fetch(apiUrl,{
            method : 'GET',
            headers: apiHeaders,
        })
        .then((response)=>response.json())
        .then((responseJson)=>{
            resolve(responseJson);
        })
        .catch((error)=>{
           // console.error(error);
            reject(error)
        });

    });

} 


export function getDataServiceWithBody(type,body){
    const apiUrl=env.base.baseUrl+type;
    const userToken = localStorage.getItem('X-Auth-Token');
    const apiHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': userToken
    }
    return new Promise((resolve,reject)=>{
        fetch(apiUrl,{
            method : 'GET',
            headers: apiHeaders,
            body:body
        })
        .then((response)=>response.json())
        .then((responseJson)=>{
            resolve(responseJson);
        })
        .catch((error)=>{
           // console.error(error);
            reject(error)
        });

    });

} 