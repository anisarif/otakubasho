import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import TypeWriterEffect from 'react-typewriter-effect'




// markup
const IndexPage = () => {
  return (
    <main className="flex justify-end h-screen bg-black px-40">
      <title>Home Page</title>
      <div className="justify-center p-40">
      <h1 className="text-white  text-bold text-4xl pt-40 p-25"> Welcome to Otaku Basho</h1>
      <div className="text-white text-2xl py-5">

      <TypeWriterEffect 
        startDelay={1000}
        cursorColor="#FFC0CB"
        multiText={[
          "The first Web3 Anime Plateform",
          "By Otakus, For Otakus",
          "Decentralised",
          "Owned by the community",
          "Let's build it together !",

        ]}
        loop={true}
        multiTextDelay={1000}
        typeSpeed={30}
        />
      </div>
      </div>
        <StaticImage className="flex h-screen px-2 m-4 " src={"../images/Otaku2.png"} alt="otaku girl"/>
    </main>
  )
}

export default IndexPage
