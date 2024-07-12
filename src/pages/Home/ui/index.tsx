"use client"

import { useState } from 'react'
import {Header, Billboard, Filter, Cards} from "@/src/widgets"

const Home = () => {

  const [limit, setLimit] = useState<number>(10)

  return (
    <>
      <Header />
      <Billboard />
      <Filter />
      <Cards limit={limit} />
    </>
  )
}

export default Home
