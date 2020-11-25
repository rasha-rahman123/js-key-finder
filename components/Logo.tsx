import React from 'react'
import {NextPage} from 'next'
import {Box} from 'rebass'
import styles from '../styles/Home.module.css'

interface LogoProps {
text: string;
}

export const Logo: NextPage<LogoProps> = ({text}) => {
        return <Box sx={{
            width: '100vw',
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'flex',
            fontWeight: 600,
            padding: 30,
            fontSize: '5rem',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            {text}
            <footer style={{
                fontSize: '2rem'
            }} className={styles.footer}>
      
    <span style={{
         
         display: 'block'
     }}>  press a key to get its event key code</span>
     <span style={{
         fontSize: '1rem',
         display: 'block'
     }}> press it two more times after to copy to clipboard</span>
  
  </footer>
  <Box as="a" sx={{
      fontSize: '1rem',
      marginTop: 10,
      fontWeight: 800,
      transition: 'all 300ms ease',
      color: 'white',
      "hover": {
          color: 'yellow'
      }
  }} href="https://rasha.world/">
      Made by Rasha Rahman
  </Box>
        </Box>
        ;
}