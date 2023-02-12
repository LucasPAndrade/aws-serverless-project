"use strict"

const AWS = require("aws-sdk")

const fetchItem = async (event) => {
    
    const ddb = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters

    let item;

    try {
        const result = await ddb.get({
            TableName: "ItemTableNew",
            Key: {id}
        }).promise()

        item = result.Item;

    } catch (error) {
        console.log(error)
    }
    
    return {
        statusCode: 200,
        body: JSON.stringify(item)
    }

}

module.exports = {
    handler:fetchItem
}