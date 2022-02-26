import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'


// markup
const IndexPage = () => {
  return (
    <main className=" bg-black h-full flex items-center">
      <title>Home Page</title>
        <StaticImage className=" px-5 m-4 " src={"../images/Otaku2.png"}/>
    </main>
  )
}

export default IndexPage
