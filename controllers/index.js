const awesomeFunction = (req, res, next) => {
    res.json('Angela Egan');
};

const returnanotherPerson = (req, res, next) => {
    res.json('Mark Egan');
};

module.exports = {awesomeFunction, returnanotherPerson};