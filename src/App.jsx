import React, { useState } from 'react'
import AdminPanel from './components/AdminPanel'
import UserForm from './components/UserForm'

export default function App() {
  const [view, setView] = useState("user")

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Rifa App</h1>
      <button onClick={() => setView("user")}>Formulario Usuarios</button>
      <button onClick={() => setView("admin")}>Panel Administrador</button>

      {view === "user" ? <UserForm /> : <AdminPanel />}
    </div>
  )
}
