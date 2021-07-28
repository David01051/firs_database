const dotenv = require('dotenv');
dotenv.config();
// const bodyparser = require('body-parser');
const express = require('express');
const app = express();
const PORT = process.env.PORT
const cors = require('cors');
const appRouter = require('./src/Routers/useRouter');
const middllLoger = require('./src/middllwere/middllwereLoger');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ exstended: true }));
app.use(middllLoger);
app.set('view-engine', 'ejs');



app.listen(PORT, () => {
    console.log();
})

app.get('/myEjs/:name', (req, res) => {
    res.render('index.ejs', { name: req.params.name });
});

app.use('/test', appRouter);







// app.get('/', (req, res) => {
//         const readStream = fs.createReadStream(path.join(__dirname, 'text.txt'))
//         readStream.pipe(res)
// })

