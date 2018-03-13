module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545, // This is the Ganache default port. You can change it to the conventional 8545 if your network runs on 8545
      network_id: "*", // Match any network id. You may need to replace * with your network Id
      from: "6e3e95f0c7044bc890ad921f4511a976a6d805dda081c39d267873b44fdb1e77", // Add your unlocked account within the double quotes
      gas: 4444444
    }
  }
};
