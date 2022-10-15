import { ethers } from "ethers";
import { CONTRACT_ADDRESS, ABI } from "../constants";
import "dotenv";


export default async function mint(currentAccount,metacid) {
  try {
   
    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum, "any");
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
    // console.log("minting NFT");
    const mintTxn = await contract.safeMint(currentAccount, `${metacid}`);
    await mintTxn.wait();
    // console.log("NFT Minted",mintTxn.hash)
    // console.log(mintTxn);
  } catch (error) {
    console.log(error);
  }
}