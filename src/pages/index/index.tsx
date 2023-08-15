import React from 'react'
import cx from 'classnames'
import styles from './index.module.css'

import { Button } from 'antd'
import Link from 'next/link'

interface Props {
  className?: string
}

const Index = ({ className = '' }: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
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
              loading={false}
              className={styles.button1}
            >
              <span className={styles.text4}>Get access</span>
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.group3}>
        <div className={styles.title}>
          <span className={styles.text5}>
            Where Music
            <br />
            Happens
          </span>

          <span className={styles.text6}>
            Join Kubi Music to experience new wave of listening.
          </span>
        </div>

        <Link href="/login" className={styles.getAccessButton}>
          <span className={styles.text7}>Get access</span>
        </Link>
      </div>
    </div>
  )
}

export default Index
