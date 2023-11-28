variable "location" {
  type        = string
  description = "Location where resource is deployed"
  default     = "eastus"
}

variable "resource_group_name" {
  type        = string
  description = "Resource group name"
}

variable "storage_account_name" {
  type        = string
  description = "Storage account name"
}

variable "cosmosdb_acc_name" {
  type        = string
  description = "CosmosDB Account Name"  
}