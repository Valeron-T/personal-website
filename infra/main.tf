resource "azurerm_resource_group" "pf-rg" {
  name     = var.resource_group_name
  location = var.location
}

resource "azurerm_storage_account" "pf-storage" {
  name                     = var.storage_account_name
  resource_group_name      = azurerm_resource_group.pf-rg.name
  location                 = azurerm_resource_group.pf-rg.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  account_kind             = "StorageV2"

  static_website {
    index_document = "index.html"
  }
}

resource "azurerm_cosmosdb_account" "cosmosdb-acc" {
  name = var.cosmosdb_acc_name
  resource_group_name = azurerm_resource_group.pf-rg.name
  location = azurerm_resource_group.pf-rg.location
  offer_type = "Standard"

  capabilities {
    name = "EnableTable"
  }

  capabilities {
    name = "EnableServerless"
  }

  consistency_policy {
    consistency_level = "BoundedStaleness"
    max_interval_in_seconds = 86400
    max_staleness_prefix = 100000
  }

  geo_location {
    location = "westus"
    failover_priority = 0
  }
}

resource "azurerm_cosmosdb_table" "website-data-table" {
  account_name = azurerm_storage_account.pf-storage.name
  name = "analytics"
  resource_group_name = azurerm_resource_group.pf-rg.name
}