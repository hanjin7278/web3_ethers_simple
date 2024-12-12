import {ethers} from "ethers";

//以太网主网
const ALCHEMY_MAINNET_URL = 'https://rpc.ankr.com/eth';
//sepolia测试网
const ALCHEMY_SEPOLIA_URL = 'https://rpc.sepolia.org';

const providerETH = new ethers.JsonRpcProvider(ALCHEMY_MAINNET_URL);
const providerSepolia = new ethers.JsonRpcProvider(ALCHEMY_MAINNET_URL);

// 1. 查询vitalik在主网和Sepolia测试网的ETH余额
console.log("1. 查询vitalik在主网和Sepolia测试网的ETH余额");
const balance = await providerETH.getBalance(`vitalik.eth`);
const balanceSepolia = await providerSepolia.getBalance(`0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045`);
// 将余额输出在console（主网）
console.log(`ETH Balance of vitalik: ${ethers.formatEther(balance)} ETH`);
// 输出Sepolia测试网ETH余额
console.log(`Sepolia ETH Balance of vitalik: ${ethers.formatEther(balanceSepolia)} ETH`);

// 2. 查询provider连接到了哪条链
console.log("\n2. 查询provider连接到了哪条链")
const network = await providerETH.getNetwork();
console.log(network.toJSON());