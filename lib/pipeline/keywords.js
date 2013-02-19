var kwutil = require('../keywords');

module.exports = function(db, opt) {
    var ref = db.dict.get(0).count
    return function extract(list) {
        return kwutil.extract(list, ref, opt.treshold);
    };
};