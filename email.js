var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'loditzz@gmail.com',
        pass: 'dulcemaria2015'
    }
});

exports.main = (event, context, callback) => {
    const done = (err, res) => callback(null, {
        statusCode: err ? '400' : '200',
        body: err ? err.message : JSON.stringify(res),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST'
        },
    });

    //let _body = JSON.parse(event.body);

    /*let body_txt='<h2>Contact Form Details</h2>';
    for (var key in _body) {
        var res = key.replace("_", " ");
        body_txt +='<p><strong>' + titleCase(res) +' : </strong>'+_body[key] + '</p>';
    }*/


    let mailOptions = {
        from: 'loditzz@gmail.com',
        to: 'loditzz@gmail.com',
        subject: 'SUBJECT',
        html: 'teste'
    };

    transporter.sendMail(mailOptions, done(null,'_body'));
};

