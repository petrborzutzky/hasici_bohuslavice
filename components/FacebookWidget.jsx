import React from 'react'

const FacebookWidget = () => {
  return (
    <>
      <div className='container m-5 shadow-lg'>
        <div id="fb-root"></div>
        <div
          className="fb-page"
          data-href="https://www.facebook.com/hasiciBohuslavice/"
          data-tabs="timeline"
          data-width="384"
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
        </div>
      </div>
    </>
  )
}

export default FacebookWidget
