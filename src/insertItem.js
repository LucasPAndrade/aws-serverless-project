"use strict"

const {v4} = require("uuid")
const AWS = require("aws-sdk")

const insertItem = async (event) => {
    
    const {item} = JSON.parse(event.body)
    const createdAt = new Date().toISOstring();
    const id = v4()

    const ddb = new AWS.DynamoDB.DocumentClient();

    const newItem = {
        id,
        item,
        createdAt,
        itemStatus: false
    }

    await ddb.put(
        {
            TableName: "ItemTableNew",
            Item: newItem
        }
    )
    
    return {
        statusCode: 200,
        body: JSON.stringify(newItem)
    }

}

module.exports = {
    handler:insertItem
}