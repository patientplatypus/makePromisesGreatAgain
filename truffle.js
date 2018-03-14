module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545, // This is the Ganache default port. You can change it to the conventional 8545 if your network runs on 8545
      network_id: "*", // Match any network id. You may need to replace * with your network Id
      from: "0x1ac1bcd2a7ba72fd3fdcccce7a04d607bc022dad", // Add your unlocked account within the double quotes
      gas: 4444444
    }
  }
};
