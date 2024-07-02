import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <TitleLogo title='Pulsar' className='logobg' />
          <h2 className='hero-title'>Unlock the Power of Data-Driven Offers for Your Business</h2>

          
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Leverage AI to craft irresistible offers and maintain optimal margins.' />
            <p>In today's competitive market, understanding your customers' needs and preferences is more critical than ever.<br /> Pulsar Apps leverages cutting-edge artificial intelligence to analyze your historical data, identify key trends, and craft personalized offers that resonate with your clients.<br /> By integrating seamlessly with your existing systems, our solution empowers your business to make smarter, data-driven decisions that drive growth and maximize profitability.</p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      {/* <Testimonial /> */}
      {/* <ShowCase /> */}
      <Brand />

     {/* <div className='text-center'>
        <Title title='Latest news & articles' />
      </div>
      <BlogCard /> */}
    </>
  )
}

export default Hero
