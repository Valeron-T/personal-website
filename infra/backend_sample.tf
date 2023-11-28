# Location to store terraform state remotely
terraform {
  backend "azurerm" {
    resource_group_name  = "foo"
    storage_account_name = "foo"
    container_name       = "foo"
    key                  = "foo.tfstate"
  }
}