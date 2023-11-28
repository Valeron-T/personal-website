import azure.functions as func
from azure.data.tables import TableServiceClient
import logging
import json
import os

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)

@app.route(route="getVisitorCount")
def getVisitorCount(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Fetching visitor count')

    table_service = TableServiceClient.from_connection_string(os.getenv('CosmosConnectionString'))
    table_client = table_service.get_table_client("analytics")
    current_data = table_client.get_entity('vc','84e65d32-981b-4f04-a8b6-d1426dc4a2de')['value']
    
    return func.HttpResponse(
            str(current_data),
            status_code=200
    )

@app.route(route="updateVisitorCount")
def updateVisitorCount(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Begin count update')
    table_service = TableServiceClient.from_connection_string(os.getenv('CosmosConnectionString'))
    table_client = table_service.get_table_client("analytics")
    current_data = table_client.get_entity('vc','84e65d32-981b-4f04-a8b6-d1426dc4a2de')
    
    data = {
            'PartitionKey': 'vc', 
            'RowKey': '84e65d32-981b-4f04-a8b6-d1426dc4a2de',
            'metric': 'visitor_count', 
            'value': current_data['value']+1
            }
    
    table_client.update_entity(data)
    
    # print(json.loads(messageJSON)[0]['value'])
    
    return func.HttpResponse(f"Value updated successfully", status_code=200)