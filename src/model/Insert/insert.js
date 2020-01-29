//import dao configurations
const operations = require('../../dao/executeQueries');

//define table fields
//fields and values like p_args_names:p_args_values
const table = {
    fields : [],
    values : [],
    tableName : "" 
}

//define 
const ParamsModel = async (params) =>{
    
    //transform json fieldnames to param to arg values
    Object.keys(params.values).map(key=>{
        table.fields.push(key)
    })
    
    //get values and input on same index of the key
    params.values.map(value =>{
        table.values.push(value)
    })
    
    //get table name from original params
    table.tableName = params.tableName;
    
    //make the real insert
    return await operations.store(table)

}

module.exports = ParamsModel;