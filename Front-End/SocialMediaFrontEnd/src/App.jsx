import './App.css'
import ModalPopUp from "./Tabs/ModalPopUp"
import DashBoared from "./DashBoared/DashBoared"
function App() {

  return (
    <>
      <div>
        <h1>App Component</h1>
        <div className="uploadfileform">
          <DashBoared/>
          {/* <UploadForm/> */}
          <ModalPopUp/> 
        </div>
      </div>
    </>
  )
}

export default App
