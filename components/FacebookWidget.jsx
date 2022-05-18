import React, { useEffect } from "react"
import { FacebookProvider, Page } from "react-facebook"
import Script from "next/script"



const FacebookWidget = React.memo((props) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=2Agz-De061qztpQrKGeCXwYl&autoLogAppEvents=1";
    script.async = true;

    document.body.appendChild(script);

    return () => {

      document.body.removeChild(script);
    }
  }, []);

  
  return (
    <>
      <div id="fb-root"></div>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/hasiciBohuslavice/"
        data-tabs="timeline"
        data-width="384"
        data-height=""
        data-small-header="false"
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
      </div>
      <FacebookProvider wait appId="2Agz-De061qztpQrKGeCXwYl">
        <Page 
          href="https://www.facebook.com/hasiciBohuslavice/"
          tabs="timeline"
          width="384"
        />
      </FacebookProvider>
    </>


  )
})

export default FacebookWidget
