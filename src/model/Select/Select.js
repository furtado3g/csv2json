//import dao module
const operations = require('../../dao/executeQueries/executeQueries')

//params,field to make select
const table = {
    fields = [],
    tableNames = [],
    relations  = [],
}

const paramsModel = async (params) =>{
    
    //pass the necessary fields 
    table.fields = params.fields
    
    //pass tables where information is comming
    table.tableNames = params.tableNames
    
    //Pass relations to dao
    table.relations =  params.relations;

    return await operations.select(table);
}

module.exports = paramsModel;