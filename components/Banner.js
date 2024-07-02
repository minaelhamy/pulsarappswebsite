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
            <button className='button-primary'>Book a call today!</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
