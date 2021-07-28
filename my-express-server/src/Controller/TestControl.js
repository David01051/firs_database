const fs = require('fs');
const path = require('path');



function PostTest(req, res) {
    try {
        fs.promises.writeFile('./text.txt', JSON.stringify(req.body), (error) => {
            if (error) throw error;
        })
            .then(() => {
                res.send("writing to the file success")
            })
    } catch (error) {
        res.send({ error: error, massage: "error with the file" })
    }
}


function GetTest(req, res) {
    try {
        const readStream = fs.createReadStream(path.join(__dirname, '../../text.txt'))
        readStream.pipe(res)
        // res.send(`hello ${req.params.name}`)
        console.log("data sent successfully")
    } catch (error) {
        res.send({ error: error, massage: "error with the file" });
    }

}
module.exports = { PostTest, GetTest }


function Test(req, res) {
    try {
        res.send(`hello ${req.params.name}`)
        console.log("data sent successfully")
    } catch (error) {
        res.send({ error: error, massage: "error with the file" });
    }

}

// function GetLname(req, res) {
//     try {
//         res.send(`hello ${req.params.name} ${req.params.Lname}`)
//         fs.createReadStream(path.join(__dirname, '../../text.txt'))
//         console.log("data...")
//     } catch (error) {
//         res.send({ error: error, massage: "error with the file" });
//     }
// }


function PostParamsText(req, res) {
    try {
        const Data = `{
        FirstName: ${req.params.name}
        LastName: ${req.params.Lname}     
        }`
        fs.promises.writeFile('./text.txt', Data, (error) => {
            if (error) throw error;
        })
            .then(() => {
                res.send("writing to the file success")
            })
    } catch (error) {
        res.send({ error: error, massage: "error with the file" })
    }
}



module.exports = { PostTest, GetTest, Test, PostParamsText }