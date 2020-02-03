//get the operations method
const operations =  require('../../dao/executeQueries/executeQueries')

const tableExcl = {
    tableName = "",
    conditions = []
}

const deleteModel = async (params) =>{
    
    tableExcl.tableName = params.tableName;

    params.relation.map(item =>{
        tableExcl.conditions.push(item);
    })

    return await operations.delete(tableExcl);
}

module.exports = deleteModel;