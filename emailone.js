// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

var aws = require('aws-sdk');
var ses = new aws.SES({region: 'us-west-2'});

exports.main = (event, context, callback) => {
  const data = JSON.parse(event.body);
    var params = {
        Destination: {
            ToAddresses: ["loditzz@gmail.com", data.usuario]
        },
        Message: {
            Body: {
                Text: { Data: "Novo boneco Minion reservado! Boneco: " + data.descricao + " | Referencia: " + data.minionId + " | Usuario: " + data.usuario
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