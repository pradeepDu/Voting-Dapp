import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const balance = await deployer.getBalance();
  console.log("Account balance:", ethers.utils.formatEther(balance));

  // Example deployment of a contract (replace with your contract name)
  const MyContract = await ethers.getContractFactory("MyContract");
  const myContract = await MyContract.deploy();

  console.log("Contract deployed to:", myContract.address);
}

// Run the script and handle errors
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
