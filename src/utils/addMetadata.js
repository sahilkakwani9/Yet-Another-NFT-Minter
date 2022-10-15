import { NFTStorage } from "nft.storage";
const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDRjQjU3NzQxNzBENjQ2N0IxNDUxRTZhRjI0NzNERmFmQTNiMGNENDIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NTY3ODU3NjI5OCwibmFtZSI6IllldEFub3RoZXJORlRNaW50ZXIifQ.ZEjcKE7eILD0VYVW3zzU6Vvtv-gEUmG9mjtjgsIihps"

export default async function addMetadata(name,description,link){
    const metadata = {
        description: `${description}`,
        external_url: "sahilkakwani.tech",
        image: link,
        name: `${name}`, 
        attributes: [
            {
              "trait_type": "Base", 
              "value": "Starfish"
            }, 
            {
              "trait_type": "Eyes", 
              "value": "Big"
            }, 
            {
              "trait_type": "Mouth", 
              "value": "Surprised"
            }, 
            {
              "trait_type": "Level", 
              "value": 5
            }, 
            {
              "trait_type": "Stamina", 
              "value": 1.4
            }, 
            {
              "trait_type": "Personality", 
              "value": "Sad"
            }, 
            {
              "display_type": "boost_number", 
              "trait_type": "Aqua Power", 
              "value": 40
            }, 
            {
              "display_type": "boost_percentage", 
              "trait_type": "Stamina Increase", 
              "value": 10
            }, 
            {
              "display_type": "number", 
              "trait_type": "Generation", 
              "value": 2
            }]
    } 
    const client = new NFTStorage({ token: apikey });
    const data = await client.store(metadata);
    const uri = data.url
    return uri
 
}