
const appRouter = require('express').Router()
const Control = require('../Controller/TestControl');
// const middllwereLoger = require('./src/middllwere');
const morgan = require('morgan');

appRouter.use(morgan('common'));
appRouter.get('/', Control.GetTest)
appRouter.post('/', Control.PostTest)
appRouter.get('/:name', Control.Test)
// appRouter.post('/:name/:Lname', Control.GetLname)
appRouter.post('/:name/:Lname', Control.PostParamsText)
// appRouter.get('/about', (req,res) =>{
//     res.send("ma nigga")
// })

module.exports = appRouter;