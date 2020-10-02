const axios = require('axios').default;
const COVID_DATA_API_URL = "https://api.covid19api.com/summary";

/**
 * This method makes a get request to fetch the summary of covid19 cases from external url
 * @param {*} req request header
 * @param {*} res response header
 * @return {Object} object containing covid19 summary
 */

exports.default = async(req,res)=>{
    try{
        // send request to api and extract data from response
        let {data} = await axios.get(COVID_DATA_API_URL);
        res.send(data);
    }
    catch(e){
        // error occured while making request
        let error = e;
        // remove stack information if present
        if(error.stack) delete error['stack'];
        res.send(error);
    }
};