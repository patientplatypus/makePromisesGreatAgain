module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545, // This is the Ganache default port. You can change it to the conventional 8545 if your network runs on 8545
      network_id: "*", // Match any network id. You may need to replace * with your network Id
      from: "0xd6db4c7cf19ce76b628b715cf1b7e628b5804642", // Add your unlocked account within the double quotes
      gas: 4444444
    }
  }
};
