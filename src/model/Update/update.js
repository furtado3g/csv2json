//import operartions dao
const operations = require('../../dao/executeQueries/executeQueries')
//template data
const tempData = {
    tableName : "",
    fields : [],
    values : [],
    relations : [],
}
//function to pass the values to dao with a template
const updateSchema = (params) =>{
    //insert TableName into template
    tempData.tableName = params.tableName
    //insert values into params
    Object.keys(parmas.value).map(key => {
        tempData.fields.push(key)
    })
    //insert value data to template
    params.values.map(val => {
        tempData.values.push(val)
    })
    //copy relationpships
    tempData.relations = params.relations
    //make update
    return operations.update(tempData)
}
//export the module 
module.exports = updateSchema;