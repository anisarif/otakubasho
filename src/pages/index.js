import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import TypeWriterEffect from 'react-typewriter-effect'




// markup
const IndexPage = () => {
  return (
    <main className="flex justify-end h-screen bg-black px-40">
      <title>Home Page</title>
      <div className="justify-center p-40">
      <h1 className="text-white text-4xl pt-40 p-30"> Welcome to Otaku Basho</h1>
      <strong className="text-white text-2xl pt-20 pr-40">

      <TypeWriterEffect 
        startDelay={2000}
        cursorColor="#FFC0CB"
        multiText={[
          "The first Web3 Anime Plateform",
          "By Otakus, For Otakus",
          "Decentralised and Owned by the community",
          "Let's build it together !",

        ]}
        loop={true}
        multiTextDelay={1000}
        typeSpeed={30}
        />
      </strong>
      </div>
        <StaticImage className="flex h-screen px-2 m-4 " src={"../images/Otaku2.png"} alt="otaku girl"/>
    </main>
  )
}

export default IndexPage
