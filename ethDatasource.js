// Import the RESTDataSource class from apollo-datasource-rest
const { RESTDataSource } = require("apollo-datasource-rest"); 

// Define a constant with Vitalik Buterin's Ethereum address 
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

// Extend the RESTDataSource class to create a data source for Etherscan APIs
class EtherDataSource extends RESTDataSource {

  // Set the base URL for Etherscan API requests
  constructor() {
    super();
    this.baseURL = "https://api.etherscan.io/api";
  }

  // Get the Ether balance for the defined Ethereum address
  async etherBalanceByAddress() {
    return this.get(
      `?module=account&action=balance&address=${eth_address}&tag=latest&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Get the total Ether supply
  async totalSupplyOfEther() {
    return this.get(
      `?module=stats&action=ethsupply&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Get the latest Ethereum price
  async getLatestEthereumPrice() {
    return this.get(
      `?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Get the estimated block confirmation time
  async getBlockConfirmationTime() {
    return this.get(
      `?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${process.env.ETHERSCAN_API}`
    );
  }
}

// Export the EtherDataSource class 
module.exports = EtherDataSource;