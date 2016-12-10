import { backendPath } from '../config/HttpConfig';
import Web3 from 'web3';

/**
 *
 * @param web3 {Object} - web3 object if already defined
 * @returns {Object} - Returns the active web3 instance
 */
const getWeb3 = (web3) => {
  return web3 ? new Web3(web3.currentProvider) : new Web3(new Web3.providers.HttpProvider(backendPath));
};

const deployNewContract = (abiArray, address, web3Instance) => {
  const web3 = getWeb3(web3Instance);
  const { contract } = web3.eth;
  const myContract = contract(abiArray);

};

export default getWeb3;
