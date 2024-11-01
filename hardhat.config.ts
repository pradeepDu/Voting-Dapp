import { HardhatUserConfig } from 'hardhat/config';
import '@nomiclabs/hardhat-ethers';

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
     hardhat:{
      chainId: 31337,
     } 
  }
};

export default config;
