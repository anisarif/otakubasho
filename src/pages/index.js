import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'


// markup
const IndexPage = () => {
  return (
    <main className="flex justify-end h-screen bg-black">
      <title>Home Page</title>
      <div className="justify-center p-40">
      <h1 className="text-white text-4xl pt-40 pr-40"> Welcome to Otaku Basho</h1>
      <h2 className=" text-pink-300 text-2xl pt-10 pr-40"> The first Web3 anime streaming plateform</h2>
      <h1 className="text-white text-4xl pt-40 pr-40"> Coming Soon...</h1>


      </div>
        <StaticImage className="flex h-screen px-2 m-4 " src={"../images/Otaku2.png"} alt="otaku girl"/>
    </main>
  )
}

export default IndexPage
