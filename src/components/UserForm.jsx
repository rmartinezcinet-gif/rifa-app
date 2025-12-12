import React, { useState } from 'react'
import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'

export default function UserForm() {
  const [form, setForm] = useState({ nombre: "", cedula: "", sector:"" })

  const enviar = async () => {
    await addDoc(collection(db, "registros"), form)
    alert("Registrado correctamente!")
  }

  return (
    <div>
      <h2>Registro Usuarios</h2>
      <input placeholder="Nombre" onChange={e => setForm({...form, nombre:e.target.value})}/>
      <input placeholder="Cédula" onChange={e => setForm({...form, cedula:e.target.value})}/>
      <input placeholder="Sector" onChange={e => setForm({...form, sector:e.target.value})}/>
      <button onClick={enviar}>Enviar</button>
    </div>
  )
}
