import React from 'react'
import cx from 'classnames'
import styles from './player.module.css'

import Link from 'next/link'
import { Avatar, Badge } from 'antd'

type ClickEvent = React.MouseEvent<HTMLButtonElement>
interface Props {
  className?: string
  onPlayicon2XClick?: (event: ClickEvent) => void
}

const Player = ({
  onPlayicon2XClick = () => {},
  className = ''
}: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.gradientFooter} />

      <div className={styles.header}>
        <div className={styles.group}>
          <Link href="/" className={styles.kubimusiclogo2X} />

          <Badge
            overflowCount={99}
            color="#004eff"
            showZero
            count="12"
            className={styles.badge}
          >
            <Avatar
              draggable={false}
              src="https://images.unsplash.com/photo-1578489758854-f134a358f08b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDIyNjh8MHwxfHNlYXJjaHwzMHx8ZmFjZXxlbnwwfHx8fDE2ODAwOTY5NzY&ixlib=rb-4.0.3&q=80&w=200"
              icon="U"
              className={styles.avatar}
            />
          </Badge>
        </div>
      </div>

      <div className={styles.group1}>
        <span className={styles.text}>Mostly Played</span>

        <div className={styles.shape}>
          <div className={styles.group2}>
            <span className={styles.text1}>1</span>

            <div className={styles.shape1} />
          </div>

          <div className={styles.group3}>
            <div className={styles.group4}>
              <span className={styles.text2}>Olson</span>

              <span className={styles.text3}>Boards of Canada</span>
            </div>

            <span className={styles.text4}>1:31</span>
          </div>
        </div>

        <div className={styles.shape2}>
          <div className={styles.group5}>
            <span className={styles.text5}>2</span>

            <div className={styles.shape3} />
          </div>

          <div className={styles.group6}>
            <div className={styles.group7}>
              <span className={styles.text6}>New Theory</span>

              <span className={styles.text7}>Washed Out</span>
            </div>

            <span className={styles.text8}>2:48</span>
          </div>
        </div>

        <div className={styles.shape4}>
          <div className={styles.group8}>
            <span className={styles.text9}>3</span>

            <div className={styles.shape5} />
          </div>

          <div className={styles.group9}>
            <div className={styles.group10}>
              <span className={styles.text10}>Pyro</span>

              <span className={styles.text11}>Kings of Leon</span>
            </div>

            <span className={styles.text12}>4:10</span>
          </div>
        </div>

        <div className={styles.shape6}>
          <div className={styles.group11}>
            <span className={styles.text13}>4</span>

            <div className={styles.shape7} />
          </div>

          <div className={styles.group12}>
            <div className={styles.group13}>
              <span className={styles.text14}>Lithium</span>

              <span className={styles.text15}>Nirvana</span>
            </div>

            <span className={styles.text16}>4:17</span>
          </div>
        </div>

        <div className={styles.shape8}>
          <div className={styles.group14}>
            <span className={styles.text17}>5</span>

            <div className={styles.shape9} />
          </div>

          <div className={styles.group15}>
            <div className={styles.group16}>
              <span className={styles.text18}>RU Mine?</span>

              <span className={styles.text19}>Arctic Monkeys</span>
            </div>

            <span className={styles.text20}>3:21</span>
          </div>
        </div>
      </div>

      <div className={styles.group17}>
        <span className={styles.text21}>Top Songs</span>

        <div className={styles.group18}>
          <div className={styles.five}>
            <div className={styles.shape10} />

            <div className={styles.group19}>
              <span className={styles.text22}>
                Feel It All Around
              </span>

              <span className={styles.text23}>Washed Out</span>
            </div>
          </div>

          <div className={styles.four}>
            <div className={styles.shape11} />

            <div className={styles.group20}>
              <span className={styles.text24}>Roygbiv</span>

              <span className={styles.text25}>Boards of Canada</span>
            </div>
          </div>

          <div className={styles.three}>
            <div className={styles.shape12} />

            <div className={styles.group21}>
              <span className={styles.text26}>Gosh</span>

              <span className={styles.text27}>Jamie xx</span>
            </div>
          </div>

          <div className={styles.two}>
            <div className={styles.shape13} />

            <div className={styles.group22}>
              <span className={styles.text28}>Silent Running</span>

              <span className={styles.text29}>
                Gorillaz, Adeleye Omot...
              </span>
            </div>
          </div>

          <div className={styles.one}>
            <div className={styles.shape14} />

            <div className={styles.group23}>
              <span className={styles.text30}>
                Japan - Satin Jack...
              </span>

              <span className={styles.text31}>Tycho</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.group24}>
        <span className={styles.text32}>Now Playing</span>

        <div className={styles.shape15}>
          <div className={styles.group25}>
            <div className={styles.shape16} />

            <div className={styles.group26}>
              <span className={styles.text33}>Gosh</span>

              <span className={styles.text34}>Jamie xx</span>
            </div>
          </div>

          <div className={styles.group27}>
            <div className={styles.group28}>
              <div className={styles.group29}>
                <div className={styles.shape17} />

                <div className={styles.shape18} />
              </div>

              <div className={styles.group30}>
                <span className={styles.text35}>1:04</span>

                <span className={styles.text36}>-03:56</span>
              </div>
            </div>

            <div className={styles.group31}>
              <div className={styles.shuffleicon2X} />

              <div className={styles.previcon2X} />

              <button
                type="button"
                onClick={onPlayicon2XClick}
                className={styles.playicon2X}
              />

              <div className={styles.nexticon2X} />

              <div className={styles.repeaticon2X} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Player
