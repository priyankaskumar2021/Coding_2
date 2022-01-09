const express = require('express');
//const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();


var port = process.env.PORT || 3000;

app.post('/emailapp', async (req, res) => {
    try {
        console.log(req.body);
        let data = req.body.email;
        console.log(data);

        let mailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'priyankaskumar07@gmail.com',
                pass: 'azggplsnxmqtxmrx'
            }
        });
          
        let mailDetails = {
            from: 'priyankaskumar07@gmail.com',
            to: data,
            subject: 'My First Mail',
            text: 'This is a part of the coding competition conducted by ICT academy.'
        };
          
        mailTransporter.sendMail(mailDetails, function(err, data) {
            if(err) {
                console.log(err);
                res.send("Oops Something went wrong");
            } else {
                console.log(mailDetails);
                console.log('Email sent successfully');
                res.send("Successfully send the Mail");
            }
        });

        
    }
    catch (err) {
        console.log(err);
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});