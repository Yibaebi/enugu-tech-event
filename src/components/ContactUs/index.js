import React from 'react'
import { Button } from '../Button'
import styles from './styles.module.css'

const ContactUs = () => {
  return (
    <section className={styles.container}>
      <h5>Contact us</h5>
      <h3>For Enquires and Sponsorship</h3>
      <p>
        If you’re interested in sponsoring the event, partnering with us or just making general enquiries, reach us at
        enugu
      </p>
      <p>enugutechsummit@gmail.com</p>

      <Button label="Send us an email" />
    </section>
  )
}

export { ContactUs }
