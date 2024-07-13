import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model"
import Feature from "./components/Feature"

import * as Sentry from '@sentry/react';


const App = () => {
  return (
  <main className="bg-black">
    <NavBar/>
    <Hero/>
    <Highlights/>
    <Model/>
    <Feature/>
  </main>
  )
}
export default Sentry.withProfiler(App);
  