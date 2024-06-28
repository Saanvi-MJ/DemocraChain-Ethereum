const hre = require("hardhat");

async function main() {
  const VotingOrganization = await hre.ethers.getContractFactory(
    "VotingOrganization"
  );
  const voting = await VotingOrganization.deploy();

  await voting.deployed();

  console.log("CONTRACT_ADDRESS:", voting.address);
}

//npx hardhat run scripts/deploy.js --network polygon_amoy
//npx hardhat run scripts/deploy.js --network localhost

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
