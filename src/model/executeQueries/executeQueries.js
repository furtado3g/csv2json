//import connection and run method
const RunQuery = require('../../configs/oracleDB')
//function to recieve alumni infos 
const operations = {
    async select(params){
        //sub mounted query 
        let query = 'select'+params.fieds+
                    '  from'+params.tables+
                    ' where'+params.conditions
        //real run the query 
        await RunQuery(query);
    },
    async insert(params){
        //sub mounted query 
        let query = 'insert into'+params.tableName+'('+params.fields+')'+
                    ' values'+params.values
        //real run the query 
        await RunQuery(query);
    },
    async update(params){
        //sub mounted query 
        let query = 'update'+params.tableName+
                    '   set'+params.updateName+
                    ' where'+params.conditions
        //real run the query 
        await RunQuery(query);
    },
    async delete(params){
        //sub mounted query 
        let query = 'delete from'+params.tableName+
                    ' where'+params.conditions
        //real run the query 
        await RunQuery(query);
    },
}

module.exports = operations;