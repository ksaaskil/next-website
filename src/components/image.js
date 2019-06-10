import React from "react"
import styles from "../styles/image.module.css"

const PUBLIC_ASSETS_PREFIX =
  "https://s3-eu-west-1.amazonaws.com/kimmo-public-assets/"

const Image = ({ image, caption }) => {
  return (
    <div className={styles.imageBox}>
      <div className={styles.image}>
        <figure>
          <img src={`${PUBLIC_ASSETS_PREFIX}${image}`} />
          {/*figcaption>{caption}</figcaption>*/}
        </figure>
      </div>
      {/*<div className="image-caption">{caption}</div>*/}
    </div>
  )
}

export default Image
