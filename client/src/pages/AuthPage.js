import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {AuthContext} from '../context/AuthContext'

export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const {loading, request, error, clearError} = useHttp()
  const [form, setForm] = useState({
    email: '', password: ''
  })

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form})
      message(data.message)
    } catch (e) {}
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', {...form})
      auth.login(data.token, data.userId)
    } catch (e) {}
  }

  return (
    <div className="center">
        <div className="container block-reg grey lighten-5">       
                <h1>Зарегистрируйтесь или<br /> войдите в систему</h1>
            <p>Вы сможете использовать сервис,<br /> только после регистрации, либо входа на сайт</p>
          
            <div className="container">
                <div className="row">
                <div className="input-field col s12">
                <input 
                placeholder="Введите Email" 
                id="email" 
                type="email" 
                name="email"
                onChange={changeHandler}
                >
                </input>
                <label htmlFor="email">Email</label>
                
                </div>
                <div className="input-field col s12">
                <input 
                placeholder="Введите ваш пароль" 
                id="first_name" 
                name="password"
                type="password" 
                onChange={changeHandler}
                >
                </input>
                <label htmlFor="first_name">Пароль</label>
                </div>
                    </div>
                   <div className="row left-align">
                       <button 
                       className="waves-effect orange darken-4 btn" 
                       style={{marginLeft: '10px'}}
                       onClick={registerHandler}
                       disabled={loading}
                       >Регистрация</button>
                       <button 
                       className="waves-effect waves-light btn"  
                       style={{marginLeft: '10px'}}
                       onClick={loginHandler}
                       disabled={loading}
                       >Вход</button>
                   </div>
                   <div className="row">
                       <hr style={{width: '80%', marginTop: '40px', opacity: '20%'}} />
                   </div>
                   <div className="row">
                       <a href="/tracks">Я исполнитель и хочу купить бит</a>
                   </div>
                    </div>  
        </div>
    </div>
)
}
