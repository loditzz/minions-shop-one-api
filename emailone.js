
var aws = require('aws-sdk');
var ses = new aws.SES({region: 'us-west-2'});

exports.main = (event, context, callback) => {
  const data = JSON.parse(event.body);
    var params = {
        Destination: {
            //descomentar linha abaixo para enviar o email para o cliente ao sair do sandbox!
            //ToAddresses: ["loditzz@gmail.com", "ariel@lawcheck.com.br", data.usuario]
            ToAddresses: ["loditzz@gmail.com", "ariel@lawcheck.com.br"]
        },
        Message: {
            Body: {
                Text: { Data: "Novo boneco Minion reservado! Boneco: " + data.descricao + " | Referencia do produto: " + data.minionId + " | Usuario que fez a reserva: " + data.usuario
                }
            },
            Subject: { Data: "Novo boneco Minion reservado! - Minion Shop ONE"
            }
        },
        Source: "loditzz@gmail.com"
    };
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Email enviado com sucesso'
        }),
    };
    ses.sendEmail(params, function (err, data) {
        if (err) {
          console.log(err, err.stack);
          callback(err);
        } else {
            console.log("SES successful");
            console.log(data);
            callback(null, response);
        }
    });
};