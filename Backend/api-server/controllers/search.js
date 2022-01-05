const dbconfig = require('../models/Config/Database_Info');
const dbViewsPath = '../../../Database/';

var Out = module.exports;

Out.getServiceProviders = (category, location, experience, price, rating, sex, limit, offset) => {
    return dbconfig.sequelize.query('CALL get_service_providers_v2 (:idC, :idL, :exp, :prc, :rt, :sex, :lm, :off)',
        {replacements: {
            idC: category,
            idL: location,
            exp: experience,
            prc: price,
            rt: rating,
            sex: sex,
            lm: limit,
            off: offset
        }})
}

Out.getCompanies = (location, limit, offset) => {
    return dbconfig.sequelize.query('CALL get_companies (:idL, :lm, :off)',
        {replacements: {
            idL: location,
            lm: limit,
            off: offset
        }})
}