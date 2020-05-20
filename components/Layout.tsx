import React, { FC, ReactNode } from "react"
import Head from "next/head"

const Style = () => <style jsx global>{ `
html,
body,
body > div:first-child,
div#__next {
  height: 100%;
}
body {
  background: #fff;
  padding: 0px;
  margin: 0px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
}
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
p {
  font-weight: 300;
}
h1 {
  font-size: 3rem;
  line-height: 3rem;
  margin: 1rem 0;
  font-weight: 300;
}
h2 {
  font-size: 1.3rem;
  margin: 1rem 0;
  font-weight: 300;
  line-height: 2rem;
}
a {
  color: #0375d8;
  text-decoration: none;
}
a:hover {
  color: #004c8d;
  text-decoration: underline;
}
.inline-list {
  padding: 0;
  margin: 0;
}
.inline-list li {
  display: inline-block;
}
.inline-list li + li {
  margin-left: 0.5rem;
}
` }</style>


export type LayoutProps = {
  children?: ReactNode | ReactNode[]
}

export const Layout: FC<LayoutProps> = (props) => {
  const { children } = props

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.svg"/>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      </Head>
      <Style/>

      { children }
    </>
  )
}
