// const express = require('express');
// const app = express();
// const morgan = require('morgan');
// const { text } = require('express');

// app.use(morgan("dev"));

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Acccept, Authorization");
//     if (req.method == "OPTIONS") {
//         res.header("Accsec-Control-Allow-Methods", "POT, POST, PATCH ,DELETE, GET");
//         return res.status(200).json({});
//     }
//     next();
// })

// app.get('/', (req, res) => {
//     try {
//         const readStream = fs.createReadStream(path.join(__dirname, 'text.txt'))
//         readStream.pipe(res)
//         console.log("data sent successfully")
//     } catch (error) {
//         console.log(error);
//     }

// })

// app.get('/', (req, res) => {
//     res.status(200).json({
//         message: 'Hello David Talala'
//     })
// });

// app.get('/', (req, res) => {
//     const error = new Error('not found');
//     error.status = 404;
//     next(error);
// })

// app.use((error, req, res, next) => {
//     res.status(error.status || 500);
//     res.json({
//         error: {
//             message: error.message
//         }
//     })
// });

// module.exports = app;