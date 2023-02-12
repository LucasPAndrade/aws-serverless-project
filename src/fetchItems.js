"use strict"

const AWS = require("aws-sdk")

const fetchItems = async (event) => {
    
    const ddb = new AWS.DynamoDB.DocumentClient();

    let itens;

    try {
        const results = await ddb.scan({
            TableName: "ItemTableNew"
        }).promise()

        itens = results.Items

    } catch (error) {
        console.log(error)
    }
    
    return {
        statusCode: 200,
        body: JSON.stringify(itens)
    }

}

module.exports = {
    handler:fetchItems
}