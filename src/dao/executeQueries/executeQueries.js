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
        //variablles to make insert

        let fields
        let values        

        //make the fieldNames to subquery
        params.fields.map(field => {
            
            //if fields is null dont add ','
            if (!fields){
                fields = field
            }else{
                fields = fields + ',' + field
            }
            
        })

        //make the values to subquery
        params.values.map(value => {
            
            //if values is null dont add ','
            if(!values){
                values = value
            }else{
                values = values + ',' + value
            }
            
        })
        
        //sub mounted query 
        let query = 'insert into'+ params.tableName+'('+fields+')'+
                    ' values'+ values
        
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