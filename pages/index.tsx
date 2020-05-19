import React from "react"
import { Layout } from "../components/Layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faIdBadge } from "@fortawesome/free-regular-svg-icons"
import { faGithub, faLinkedinIn, faStackOverflow, faTwitter, faNodeJs } from "@fortawesome/free-brands-svg-icons"
import Head from "next/head"

const Style = () => <style jsx>{ `
.container {
  max-width: 400px;
  margin: 6rem auto;
  text-align: center;
}
.avatar {
  border-radius: 50%;
  width: 6rem;
}
.top-skills {
  margin: 3rem 0;
}
.top-skills img {
  display: inline-block;
  height: 1rem;
  top: 0.1rem;
  position: relative;
}
.top-skills li {
  font-size: 1.2rem;
}
.top-skills li + li {
  margin-left: 1rem;
}
.links {
  font-size: 0.9rem;
}
.links svg {
  position: relative;
  top: 0.1rem;
  height: 0.9rem;
}
.built-with {
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 20px;
  padding: 0px;
  margin: 0px;
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
  .container {
    margin: 2rem 0;
    padding: 1rem;
  }
  .top-skills li {
    //display: block;
  }
  .top-skills li + li {
  }
  .links li {
    //display: block;
    font-size: 1rem;
  }
  .links svg {
    height: 1rem;
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
        <img className="avatar" src="/avatar.svg"/>
        <h1>Maxim Kott</h1>
        <h2>Passionate software developer from Zurich</h2>

        <ul className="inline-list top-skills">
          <li><img src="/icons/typescript.svg"/> TypeScript</li>
          <li>{ "{" } <img src="/icons/react.svg"/> React { "}" }</li>
          <li><img src="/icons/nodejs.svg"/> Node.js</li>
        </ul>

        <ul className="links inline-list">
          <li><a href="/cv-maxym-kot.pdf"><FontAwesomeIcon icon={ faIdBadge }/> CV</a></li>
          <li><a href="https://ch.linkedin.com/in/maximkott"><FontAwesomeIcon icon={ faLinkedinIn }/> LinkedIn</a></li>
          <li><a href="https://github.com/maximkott"><FontAwesomeIcon icon={ faGithub }/> GitHub</a></li>
          <li><a href="https://twitter.com/maximkott"><FontAwesomeIcon icon={ faTwitter }/> Twitter</a></li>
          <li><a href="https://stackoverflow.com/users/1734033/maximkott"><FontAwesomeIcon icon={ faStackOverflow }/> StackOverflow</a></li>
        </ul>
      </div>

      <ul className="built-with">
        <div className="divider">&lt;built-with/&gt;</div>
        <ul className="inline-list">
          <li><img src="/logos/react.svg"/></li>
          <li><img src="/logos/typescript.svg"/></li>
          <li><img src="/logos/nextjs.svg"/></li>
          <li><img src="/logos/zeit.svg"/></li>
        </ul>
      </ul>
    </Layout>
  )
}
