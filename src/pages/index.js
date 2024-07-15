import * as React from "react"

const IndexPage = () => {
  return (
    <div className="w-full h-full flex flex-row justify-center">
      <div className="p-4 pt-[15%] [&_:is(h1)]:p-2">
          <h1 className="text-4xl">Hi &#128075;</h1>
          <h1>I am Ali Raza , Full Stack Developer</h1>
          <h1>This app is like a repo of my mini projects</h1>
          <h1>I hope you like it</h1>
      </div>
    </div>

  )
}

export default IndexPage

export const Head = () => <>
<title>Mini-Repo</title>
<meta name="description" content="My Mini Repo Application" />
</>
