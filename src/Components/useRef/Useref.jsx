import React from 'react'

const Useref = () => {

    const logout = ()=>{
        localStorage.removeItem('signUp')
        window.location.reload();
    }
    
    const deleteAccount = ()=>{
        localStorage.clear();
        window.location.reload();
    }
  return (
    <div>
      <h1>Home page</h1>
      <p>Wellcome {localStorage.getItem('name')}</p>
      <button className='log-out' onClick={logout}>LogOut</button>
      <button className='delete' onClick={deleteAccount}>Delete</button>
    </div>
  )
}

export default Useref
