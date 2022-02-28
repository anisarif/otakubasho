import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'


// markup
const IndexPage = () => {
  return (
    <main className="flex justify-end h-screen bg-black">
      <title>Home Page</title>
      <h1 className="text-white text-2xl pt-40 pr-40"> Welcome to Otaku Basho</h1>

        <StaticImage className="flex h-screen px-2 m-4 " src={"../images/Otaku2.png"}/>
    </main>
  )
}

export default IndexPage
