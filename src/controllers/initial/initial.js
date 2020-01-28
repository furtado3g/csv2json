//is a controller of first route and start the real function of application
//libraries to convert csv to json
const csv = require('csvtojson')
const request = require('request')
//dependence for requests
const api = require('../../configs/api')
//import model
const model = require('../../model/executeQueries/executeQueries')
/*
    MODEL MICROSERVICE TO EXECUTE SQL COMMAND INTO NODEJS REST API]
    @model.select({json whith infos})
    @model.insert({json whith infos})
    @model.update({json whith infos})
    @model.delete({json whith infos})
*/
//controller function object
const shoot = {
    async findTheCsv(req,res){
        const response = await api.default.get()
        const data = response.data;
        if(!data.fetchUrl){
            return res.json({message : "error"})
        }else{
            csv()
            .fromStream(request.get(data.fetchUrl))
            .subscribe((json)=>{
                return new Promise((resolve,reject)=>{
                    //need some study from this library
                    //seem me like this without study
                    
                })
            },onError,onComplete);
        }
    }
}

module.exports = shoot