import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo title='Pulsar' className='logobg' />
              <br />
              <span>
                Questions? Reach us <br /> Sunday – Thursday from 9 am to 6 pm
              </span>
              <br />
              <br />
              <h3>+2 012 07398763</h3>
              <br />
              <a href='https://vega.pulsarapps.com' target='_blank' rel='noopener noreferrer' className='button-primary'>
              Meet Vega Bot
              </a>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href='/'>About us</Link>
              </li>
              
              <li>
                <Link href='/'>Blog</Link>
              </li>
              <li>
                <Link href='/'>Demo system</Link>
              </li>
              <li>
                <Link href='/'>Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href='/'>AI-Driven Data Analysis</Link>
              </li>
              <li>
                <Link href='/'>Offer Optimization</Link>
              </li>
              <li>
                <Link href='/'>Price Optimization Strategy</Link>
              </li>
              <li>
                <Link href='/'>Customer Insights and Segmentation</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <Link href='/'>
                    <BsFacebook size={25} />
                  </Link>
                </li>
                
                <li>
                  <Link href='/'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2024 Pulsar Apps. ALL RIGHTS RESERVED.</span>
            </div>
            <div className='connect'>
              <span>Pulsar Apps Company</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
