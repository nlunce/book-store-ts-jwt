# import boto3
# from datetime import datetime
# from decimal import Decimal
# import json


# def lambda_handler(event, context):
#     print("Received event:", event)

#     # Extract the raw JSON string from the body and load it
#     try:
#         event_body = json.loads(event["body"])
#     except json.JSONDecodeError:
#         raise ValueError("Invalid JSON format in the request body")

#     # Define required fields
#     required_fields = [
#         "__typename",
#         "author",
#         "bookCover",
#         "description",
#         "ISBN10",
#         "price",
#         "stock",
#         "title",
#     ]

#     # Check if all required fields are present in the event body

#     missing_fields = [
#         field
#         for field in required_fields
#         if field not in event_body or not event_body[field]
#     ]
#     if missing_fields:
#         return {
#             "statusCode": 400,
#             "headers": {
#                 "Content-Type": "application/json",
#                 "Access-Control-Allow-Origin": "*",  # Set this to the appropriate origin or '*' for any
#                 "Access-Control-Allow-Methods": "OPTIONS, POST, GET",  # Adjust the methods as needed
#                 "Access-Control-Allow-Headers": "Content-Type, Authorization",
#             },
#             "body": json.dumps(
#                 {"error": f"Missing required fields: {', '.join(missing_fields)}"}
#             ),
#         }

#     # Use the Lambda request ID as the item ID
#     item_id = context.aws_request_id
#     print(item_id)

#     # Retrieve values from the event body
#     table_name = event_body["tableName"]
#     author = event_body["author"]
#     book_cover = event_body["bookCover"]
#     description = event_body["description"]
#     isbn_10 = event_body["ISBN10"]
#     price = str(event_body["price"])  # Convert Decimal to string
#     stock = event_body["stock"]
#     title = event_body["title"]

#     # Build the item data dictionary with the Lambda request ID
#     item_data = {
#         "id": item_id,
#         "__typename": event_body["__typename"],
#         "author": author,
#         "available": event_body.get("available", True),
#         "bookCover": book_cover,
#         "createdAt": event_body.get(
#             "createdAt", datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%S.%f")[:-3] + "Z"
#         ),
#         "description": description,
#         "ISBN10": isbn_10,
#         "price": price,
#         "stock": stock,
#         "title": title,
#         "updatedAt": event_body.get(
#             "updatedAt", datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%S.%f")[:-3] + "Z"
#         ),
#     }

#     # Put the item into the table
#     dynamodb = boto3.resource("dynamodb")
#     table = dynamodb.Table(table_name)
#     table.put_item(Item=item_data)

#     return {
#         "statusCode": 200,
#         "headers": {
#             "Content-Type": "application/json",
#             "Access-Control-Allow-Origin": "*",  # Set this to the appropriate origin or '*' for any
#             "Access-Control-Allow-Methods": "OPTIONS, POST, GET",  # Adjust the methods as needed
#             "Access-Control-Allow-Headers": "Content-Type, Authorization",
#         },
#         "body": f"Item with ID {item_id} added to DynamoDB table {table_name}",
#     }
