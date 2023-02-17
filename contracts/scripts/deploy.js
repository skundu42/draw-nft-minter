// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  
  const Multicall = await hre.ethers.getContractFactory("Multicall");
  const multicall = await Multicall.deploy();

  await multicall.deployed();

  console.log(
    `Multicall deployed to ${multicall.address}`
  );

  const PixelACN = await hre.ethers.getContractFactory("PixelArtColorNFT");
  const pixelACN = await PixelACN.deploy();

  await pixelACN.deployed();

  console.log(
    `PixelArtColorNFT deployed to ${pixelACN.address}`
  );

  const PixelAG = await hre.ethers.getContractFactory("PixelArtGrayscaleNFT");
  const pixelAG = await PixelAG.deploy();

  await pixelAG.deployed();

  console.log(
    `PixelArtGrayscaleNFT deployed to ${pixelAG.address}`
  );

  const PixelAN = await hre.ethers.getContractFactory("PixelArtNoColorNFT");
  const pixelAN = await PixelAN.deploy();

  await pixelAN.deployed();

  console.log(
    `PixelArtNoColorNFT deployed to ${pixelAN.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
