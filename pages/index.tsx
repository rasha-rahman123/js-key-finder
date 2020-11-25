import { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Box} from 'rebass';
import { Logo } from '../components/Logo';

interface Props {
  kc: string,
  pc: number,
  green: boolean
}

export const Home:NextPage<Props> = ({kc, pc, green}) => {
  return (
    <div className={styles.container}>
    
      <Logo text="JS Key Finder" />
      <main className={styles.main}>
       <Box sx={{
         fontSize: '20rem',
         fontWeight: 600,
         color: kc === 'Copied' ? 'pink' : 'white'
       }}>
       {kc && kc + ''} <br />
   
       </Box>

       <Box sx={{opacity: 0.3}}>
       {pc && '(' +  pc + ')'}
       </Box>
      </main>

    
    </div>
  )
}

export default Home;
