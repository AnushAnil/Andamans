import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/css/Contact.module.css"

const Contact = () => (
  <Layout>
    <Seo title="Contact" />
    <div className={styles.contactDetails}>
      <span>
        <input type="text" placeholder="Full Name" />
      </span>
      <span>
        <input type="text" placeholder="Phone number" />
      </span>
    </div>
    <div className={styles.textarea}>
      <textarea placeholder="Comments..."></textarea>
    </div>
    <div className={styles.buttonDiv}>
      <button className={styles.button}>Submit</button>
    </div>
  </Layout>
)

export default Contact
