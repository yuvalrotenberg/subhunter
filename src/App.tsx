import './App.css'
import FileUpload from './components/FileUpload'


function App() {
  const appName = 'SubHunter'

  return (
    <main>
      <h1>{appName} 💸</h1>
      <p>לדעת לאן הולך הכסף ולמצוא מנויים שנשכחו</p>
      <FileUpload />
    </main>
  )
}

export default App