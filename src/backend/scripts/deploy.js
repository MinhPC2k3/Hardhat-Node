const { verifyTypedData } = require("ethers/lib/utils");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // Get the ContractFactories and Signers here.
  const SimpleTransaction = await hre.ethers.getContractFactory("SimpleTransaction");
  const VoteFactory = await hre.ethers.getContractFactory("VoteFactory");
  //deploy  contract
  const simple = await SimpleTransaction.deploy();
  const vote = await VoteFactory.deploy();
  await simple.deployed();
  await vote.deployed();
  console.log("SimpleTransaction deploy at:", simple.address)
  console.log("Vote contract deployed at ", vote.address)
  // Save copies of each contracts abi and address to the frontend.
  saveBuildFiles(simple, "SimpleTransaction")
  saveBuildFiles(vote, "VoteFactory")
}

function saveBuildFiles(contract, name) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../../frontend/contractsData";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + `/${name}-address.json`,
    JSON.stringify({ address: contract.address }, undefined, 2)
  );

  const contractArtifact = artifacts.readArtifactSync(name);

  fs.writeFileSync(
    contractsDir + `/${name}.json`,
    JSON.stringify(contractArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });