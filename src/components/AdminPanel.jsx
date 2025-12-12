import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

export default function AdminPanel() {
  const [data, setData] = useState([])

  const cargar = async () => {
    const snap = await getDocs(collection(db, "registros"))
    setData(snap.docs.map(d => d.data()))
  }

  useEffect(() => { cargar() }, [])

  const exportCSV = () => {
    let csv = "nombre,cedula,sector\n"
    data.forEach(r => csv += `${r.nombre},${r.cedula},${r.sector}\n`)
    const blob = new Blob([csv], { type:"text/csv" })
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = "export.csv"
    link.click()
  }

  return (
    <div>
      <h2>Panel Administrador</h2>
      <button onClick={exportCSV}>Exportar CSV</button>
      {data.map((r,i)=>(
        <div key={i} style={{border:"1px solid #ccc", margin:5, padding:5}}>
          {r.nombre} - {r.cedula} - {r.sector}
        </div>
      ))}
    </div>
  )
}
