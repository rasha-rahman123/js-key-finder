import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import '../styles/globals.css'
import { NextSeo } from 'next-seo';

interface Props {
  Component: NextPage,
  pageProps: any
}

const MyApp:NextPage<Props> = ({ Component, pageProps }) => {

  useEffect(() => {
    document.onkeydown = onKeyPress;
    
  })

  const [keyCode, setKC] = useState<string>()
  const [prevCode, setPrev] = useState<number>()
  const [onSec, setOnSec] = useState<boolean>(false)
  const [green, setGreen] = useState<boolean>()

  async function onKeyPress(e: any) {
    e = e || window.event
    keyCode && e.keyCode !== prevCode && await setPrev(+keyCode)
    onSec && e.keyCode === keyCode && copyClip(e.keyCode)
    !onSec && e.keyCode === keyCode && setOnSec(true)
   !onSec && e.keyCode !== keyCode && setGreen(false)
    setKC(e.keyCode)
  }

  async function copyClip(e: any) {
    setOnSec(false);
    if (!navigator.clipboard) {
      // Clipboard API not available
      return
    }
    try {
      await navigator.clipboard.writeText(e + '')
    } catch (err) {
      console.error('Failed to copy!', err)
    }
    setKC('Copied');
  }

  return <><NextSeo
  title="JS Key Finder"
  description="Helps developers with quickly copying the event key code for a specific key."
  canonical="https://www.canonical.ie/"
  openGraph={{
    title: 'JS Key Finder',
    description: 'Helps developers with quickly copying the event key code for a specific key.',
    site_name: 'JS Key Finder',
  }}
  twitter={{
    handle: '@raaahhh_sha',
    site: '@raaahhh_sha',
    cardType: 'summary_large_image',
  }}
/><Component {...pageProps} kc={keyCode} pc={prevCode} g={green} sg={setGreen} /></>
}



export default MyApp
