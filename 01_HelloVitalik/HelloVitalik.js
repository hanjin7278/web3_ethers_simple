import  {ethers} from "ethers";

// 链接以太网主网，获取vitailik.eth的余额
// https://docs.ethers.io/v5/api/providers/provider/#getDefaultProvider
const provider = ethers.getDefaultProvider();
const main = async () => {
    const balance = await provider.getBalance(`vitalik.eth`);
    console.log(`ETH Balance of vitalik: ${ethers.formatEther(balance)} ETH`);
}
main()