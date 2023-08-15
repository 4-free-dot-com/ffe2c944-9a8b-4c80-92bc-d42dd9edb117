import React from 'react'
import cx from 'classnames'
import styles from './Header.module.css'

import { Button } from 'antd'

interface Props {
  className?: string
}

const Header = ({ className = '' }: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.group}>
        <div className={styles.kubimusiclogo2X} />

        <div className={styles.group1}>
          <span className={styles.text}>Get started</span>

          <span className={styles.text1}>About</span>

          <span className={styles.text2}>Pricing</span>
        </div>

        <div className={styles.group2}>
          <Button
            ghost={false}
            shape="round"
            block
            disabled={false}
            type="link"
            loading={false}
            danger={false}
            className={styles.button}
          >
            <span className={styles.text3}>Login</span>
          </Button>

          <Button
            shape="round"
            block
            type="primary"
            className={styles.button1}
          >
            <span className={styles.text4}>Get access</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Header
