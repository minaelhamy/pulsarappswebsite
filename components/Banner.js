import React from "react"
import { Title, TitleLogo } from "./common/Title"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <Title title='Ready to start a new project and elevate your business?' /> <br />
            <TitleLogo title='Lets take your business to the next level!' />
          </div>
          <div>
            <a href="https://vega.pulsarapps.com" target="_blank" rel="noopener noreferrer">
              <button className='button-primary'>Try VEGA bot</button>
           </a>
          </div>

        </div>
      </section>
    </>
  )
}

export default Banner
