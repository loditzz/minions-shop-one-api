import * as dynamoDbLib     from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
  const params = {
    TableName: process.env.tableNameMinion,
    Key: {
      shopId: "1",
      minionId:event.pathParameters.id
    }
  };

  try {
    const result = await dynamoDbLib.call("get", params);
    if (result.Item) {
      return success(result.Item);
    } else {
      return failure({ status: false, error: "Minion não encontrado! " });
    }
  } catch (e) {
    console.log(e);
    return failure({ status: false, erro: e, parametros: params });
  }
}