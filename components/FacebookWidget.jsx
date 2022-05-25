import React, { useEffect } from "react"
import { FacebookProvider, Feed, Page } from "react-facebook"
import Script from "next/script"



const FacebookWidget = React.memo((props) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://connect.facebook.net/cs_CZ/sdk.js#xfbml=1&version=v13.0&appId=601068137590863&autoLogAppEvents=1";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    script.nonce="pCP3EiIk";

    document.body.appendChild(script);

    return () => {

      document.body.removeChild(script);
    }
  }, []);

  
  return (
    <>
      {/*<div id="fb-root"></div>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/hasiciBohuslavice/"
        data-tabs="timeline"
        data-width="320"
        data-height=""
        data-small-header="true"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
        
        >
        <blockquote
          cite="https://www.facebook.com/hasiciBohuslavice/"
          className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/hasiciBohuslavice/">Hasiči Bohuslavice</a>
        </blockquote>
  </div>*/}

      <div className="fb-page"
data-href="https://www.facebook.com/hasiciBohuslavice" 
data-width="320"
data-hide-cover="false"
data-show-facepile="true"></div>

    </>


  )
})

export default FacebookWidget
