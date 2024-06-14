async function crudFunction(apiPath, type='GET', data=''){
    // console.log(process.env.REACT_APP_API); 
    var api = process.env.REACT_APP_API + apiPath;
    console.log(api);

    console.log(type);
    console.log(data);

    if(type== 'GET'){
        var dataSet = {
            method:type
        }
    }else{
        var dataSet = {
            method:type,
            body:data,
            headers:{
                'content-Type': 'application/json'
            }
        }
    }

    var res = await fetch(api, dataSet);

    var result = await res.json();
    return result;
    
}

export default crudFunction;