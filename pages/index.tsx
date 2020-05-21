import React from "react"
import { Layout } from "../components/Layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faIdBadge } from "@fortawesome/free-regular-svg-icons"
import { faGithub, faLinkedin, faStackOverflow, faTwitter } from "@fortawesome/free-brands-svg-icons"
import Head from "next/head"

const Style = () => <style jsx>{ `
.container {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.content {
  max-width: 400px;
  margin: 70px auto 50px auto;
  padding: 0 20px;
  text-align: center;
  flex-grow: 1;
}
.avatar {
  border-radius: 50%;
  width: 6rem;
  overflow: hidden;
  background: lime;
}
.top-skills {
  margin: 50px 0;
}
.top-skills li + li {
  margin-left: 1rem;
}
.top-skills img {
  display: inline-block;
  height: 2rem;
}
.links {
  font-size: 0.9rem;
}
.links li {
  line-height: 2rem;
}
.links a {
  color: #555;
  font-size: 0.8rem;
}
.links svg {
  position: relative;
  top: 0px;
  height: 0.9rem;
}
.built-with {
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
}
.built-with img {
  height: 1rem;
}
.built-with .divider {
  font-size: 0.5rem;
  line-height: 2rem;
  border-top: 1px solid #eee;
  display: inline-block;
  padding: 0 20px;
  color: #aaa;
  font-family: monospace;
}

@media (max-width: 400px) {
  .content {
    margin-top: 40px;
  }
  .top-skills li {
    display: block;
  }
  .top-skills li + li {
    margin-left: 0px;
    margin-top: 15px;
  }
  .links li {
    display: block;
    font-size: 1.2rem;
  }
  .links li + li {
    margin-left: 0;
  }
  .links svg {
    height: 1.2rem;
    top: 3px;
  }
}
` }</style>

export default () => {
  return (
    <Layout>
      <Head>
        <title>Maxim Kott</title>
      </Head>
      <Style/>

      <div className="container">
        <div className="content">
          <img className="avatar" src="/avatar.svg"/>

          <h1>Maxim Kott</h1>
          <h2>Passionate software developer from Zurich</h2>

          <ul className="inline-list top-skills">
            <li><img src="/logos/react.svg"/></li>
            <li><img src="/logos/typescript.svg"/></li>
            <li><img src="/logos/nodejs.svg"/></li>
          </ul>

          <ul className="links inline-list">
            <li><a href="/cv"><FontAwesomeIcon icon={ faIdBadge }/> CV</a></li>
            <li><a href="https://github.com/maximkott"><FontAwesomeIcon icon={ faGithub }/> GitHub</a></li>
            <li><a href="https://twitter.com/maximkott"><FontAwesomeIcon icon={ faTwitter }/> Twitter</a></li>
            <li><a href="https://ch.linkedin.com/in/maximkott"><FontAwesomeIcon icon={ faLinkedin }/> LinkedIn</a></li>
            <li><a href="https://stackoverflow.com/users/1734033/maximkott"><FontAwesomeIcon
              icon={ faStackOverflow }/> StackOverflow</a></li>
          </ul>
        </div>

        <footer className="built-with">
          <div className="divider">&lt;built-with/&gt;</div>
          <ul className="inline-list">
            <li><img src="/logos/react.svg"/></li>
            <li><img src="/logos/typescript.svg"/></li>
            <li><img src="/logos/nextjs.svg"/></li>
            <li><img src="/logos/zeit.svg"/></li>
          </ul>
        </footer>
      </div>
    </Layout>
  )
}
