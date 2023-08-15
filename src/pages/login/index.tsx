import React from 'react'
import cx from 'classnames'
import styles from './login.module.css'

import { Button, Divider, Input, Checkbox } from 'antd'
import Link from 'next/link'

interface Props {
  className?: string
}

const Login = ({ className = '' }: Props) => {
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
              className={styles.button1}
            >
              <span className={styles.text4}>Get access</span>
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.group3}>
        <div className={styles.title}>
          <span className={styles.text5}>Were Music Happens</span>

          <span className={styles.text6}>
            Join Kubi Music to experience new wave of listening.
          </span>
        </div>

        <div className={styles.getAccessButton}>
          <span className={styles.text7}>Get access</span>
        </div>
      </div>

      <Link href="/" className={styles.darkLayer} />

      <div className={styles.loginPopup}>
        <div className={styles.kubimusiclogo22X}>
          <Link href="/" className={styles.close2X} />
        </div>

        <div className={styles.group4}>
          <div className={styles.socialLogins}>
            <span className={styles.text8}>
              To continue, log in to Kubi Music
            </span>

            <div className={styles.group5}>
              <Link href="/player" className={styles.facebook}>
                <div className={styles.facebook2X} />

                <span className={styles.text9}>
                  Continue with Facebook
                </span>
              </Link>

              <Link href="/player" className={styles.apple}>
                <div className={styles.apple2X} />

                <span className={styles.text10}>
                  Continue with Apple
                </span>
              </Link>

              <Link href="/player" className={styles.google}>
                <div className={styles.google2X} />

                <span className={styles.text11}>
                  Continue with Google
                </span>
              </Link>
            </div>
          </div>

          <Divider
            dashed={false}
            orientation="center"
            children="OR"
            plain
            type="horizontal"
            className={styles.divider}
          />
        </div>

        <div className={styles.inputs}>
          <div className={styles.group6}>
            <div className={styles.group7}>
              <span className={styles.text12}>
                Email address or username
              </span>

              <Input
                size="middle"
                placeholder="e.g. name@mail.com"
                className={styles.input}
              />
            </div>

            <div className={styles.group8}>
              <span className={styles.text13}>Password</span>

              <Input.Password
                placeholder="password"
                className={styles.inputPassword}
              />
            </div>
          </div>

          <span className={styles.text14}>Forgot password?</span>
        </div>

        <div className={styles.loginContainer}>
          <Checkbox
            defaultChecked={false}
            className={styles.checkbox}
          >
            <span className={styles.text15}>Remember me</span>
          </Checkbox>

          <Link href="/player" className={styles.facebook1}>
            <span className={styles.text16}>Login</span>
          </Link>
        </div>

        <div className={styles.border} />

        <div className={styles.signUpContainer}>
          <span className={styles.text17}>
            Don&#39;t have an account?
          </span>

          <div className={styles.signUp}>
            <span className={styles.text18}>Sign up</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
