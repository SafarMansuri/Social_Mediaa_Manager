import { useEffect, useState } from "react"
import axios from "axios";
const Instagram = () => {

    const [instaPost,SetInstaPost] = useState([]);

    const baseURL = "https://graph.facebook.com/v18.0/17841462944414317?fields=media&access_token="+import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;


    // console.log("baseurl",baseURL)
    async function getInstagramPostId(){
        const response = await axios.get(baseURL);
         const mediaIds =  await Promise.all(response.data.media.data.map(async (item) => {
                console.log("item.id",item.id)
                const mediaUrl = "https://graph.facebook.com/v18.0/"+item.id+"?fields=media_url&access_token="+import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
                const mediasrc = await axios.get(mediaUrl);
                console.log("mediasec",mediasrc.data?.media_url);
                return mediasrc.data;
         }));

         SetInstaPost(mediaIds)
    }


    useEffect(() => {
        console.log("Instagram web part is rendereds")
        getInstagramPostId();
    },[]);
    return(
        <div>
            {console.log("Instagram Post Data",instaPost)}
            {instaPost.map((item,index) => (
                // console.log("media url",item.media_url)
                <div key={index}>
                    <img src={item.media_url} alt="" />
                </div>
            ))}
        </div>
    )
}

export default Instagram