import { Web3Storage } from 'web3.storage'
import 'dotenv'

const NFT_STORAGE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQwOTEyQjg5NDQwY0I3MkE5MDMzYjRFQTk2MkFkMDk5NmZiQTUyM2MiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjU2ODM2ODQzMTMsIm5hbWUiOiJZZXRBbm90aGVyTkZUTWludGVyIn0.Ya7yiO86-Bv33R-BETiOGOSkhyctjhXUQBpJIZN4lHA"

export default async function UploadImg(images){
    const web3storage =new Web3Storage({ token: NFT_STORAGE_KEY })
    const cid = await web3storage.put(images)
    console.log('stored files with cid:', cid)
    return cid
}


// import { create } from "ipfs-http-client";
// const client = create("https://ipfs.infura.io:5001/api/v0");

// const uploadBannerToIPFS = async (image) => {
//     try {
//         const uploadImage = await client.add(image, { pin: true });
//         const url = `https://ipfs.infura.io/ipfs/${uploadImage.path}`;
//         const imageInfo = {
//             imageCID: uploadImage.cid,
//             imageLink: url
//         }
//         console.log(url);
//         return imageInfo;
//     } catch (error) {
//         console.log(error);
//     }
// };
// export default uploadBannerToIPFS;