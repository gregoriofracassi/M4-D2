import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import MyJumbo from "./components/MyJumbo"
import LatestReleases from "./components/LatestReleases"
import BookRow from "./components/BookRow"
import history from "./data/history.json"
import horror from "./data/horror.json"
import fantasy from "./data/fantasy.json"
import romance from "./data/romance.json"
import scifi from "./data/scifi.json"

const App = () => {
  return (
    <div>
      <MyNav />
      <MyJumbo />
      <LatestReleases />
      <BookRow genre={history} title="History" />
      <BookRow genre={horror} title="Horror" />
      <BookRow genre={fantasy} title="Fantasy" />
      <BookRow genre={romance} title="Romance" />
      <BookRow genre={scifi} title="Sci-Fi" />
      <MyFooter />
    </div>
  )
}

export default App
