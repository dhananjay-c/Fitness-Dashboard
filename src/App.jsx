import Home from "./Pages/Home"
import Nav from "./Components/Nav"
import Header from "./Components/Header"

function App() {

  return (
    <>
      <div className="p-5  flex h-screen w-screen overflow-hidden">
        <div className="flex items-center w-auto h-[100%]">
          <Nav></Nav>
        </div>

        <div className="ml-10 h-[100%] flex-1 overflow-y-auto custom-scrollbar">
          <div className="sticky top-0 z-100"><Header user="Amanda"></Header></div>
          <div className="flex-1 overflow-y-auto">
            <Home></Home>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
