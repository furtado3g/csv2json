//is a controller of first route and start the real function of application
//libraries to convert csv to json
const csv = require('csvtojson')
const request = require('request')
//dependence for requests
const api = require('../../configs/api')
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
                    console.log(resolve.toString())
                })
            },onError,onComplete);
        }
    }
}

module.exports = shoot