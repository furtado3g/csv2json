//import connection and run method
const RunQuery = require('../../configs/oracleDB')
//function to recieve alumni infos 
const operations = {
    async select(params){

        //variables to make search into database
        let fields
        let tables
        let relationship

        //make the necesary fields to make a search
        params.fields.map( field => {
            
            //if fields is null or undefined get first value
            if(!fields){
                fields = field
            }else{
                fields = fields + ',' + field
            }

        })

        //bring the necessary tables to select
        params.tableNames.map( table => {
            
            //if tables is null or undefined get first value
            if(!tables){
                tables = table
            }else{
                tables = tables + ',' + tables
            }

        })

        params.relations.map(relation => {
            
            //if relationship is null or undefined get first value
            if(!relationship){
                relationship = relation
            }else{
                relationship = relationship + ' and ' + relation
            }

        })

        //sub mounted query 
        let query = 'select'+field+
                    '  from'+tables+
                    ' where'+relationship
        //real run the query 
        await RunQuery(query);
    },
    /*
        method to insert values to table
    */
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