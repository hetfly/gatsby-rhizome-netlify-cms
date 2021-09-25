import React from 'react'
import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import Layout from '../../components/Layout'

export default class ContactPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className='top'>
          <h1>Contact Us!</h1>
          <p>Get in touch with us, have a chat, share you ideas and suggestions!</p>
        </section>
        <section>
          <div className='socials'>
            <div className='social'>
              <a href='https://twitter.com/eyeonicon1' target='_blank' rel='noreferrer'>
                <FaTwitter color='#33b7ba' size={'4em'} />
              </a>
            </div>
            <div className='social'>
              <a href='https://discord.gg/sVzp6gWBrC' target='_blank' rel='noreferrer'>
                <FaDiscord color='#33b7ba' size={'4em'} />
              </a>
            </div>
            <div className='social'>
              <a href='https://t.me/Eyeonicon' target='_blank' rel='noreferrer'>
                <FaTelegramPlane color='#33b7ba' size={'4em'} />
              </a>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}