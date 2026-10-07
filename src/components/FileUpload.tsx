import { useState, type ChangeEvent } from 'react'

function FileUpload() {
  const [fileName, setFileName] = useState<string | null>(null)

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return
    setFileName(file.name)
  }

  return (
    <section>
      <h2>העלאת קובץ עסקאות</h2>
      <input type="file" accept=".csv,.xlsx,.xls" onChange={handleFileChange} />
      {fileName && <p>נבחר הקובץ: {fileName}</p>}
    </section>
  )
}

export default FileUpload