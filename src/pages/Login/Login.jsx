import React, {useState} from 'react'
import Title from '../../components/Title'
import Header from '../../components/Header'
import './styles.css'

const Login = () =>{ 
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")    
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${name}`)
        alert(`Submitting Password ${password}`)
    }

    return(
    <>
        <Header></Header>
        <div className = {'loginScreen'}>
            <Title name ={"Login"}/>
        </div>
        <p>Preencha os campos abaixo para continuar</p>
        <form onSubmit={handleSubmit}>
        <fieldset>
            
            <div class="input-block">
                <label for="name">User</label>
                <input name="name" id="name" required  onChange = {(e) => {setName(e.target.value)}}/>
            </div>
            <div class="input-block">
                <label for="password">Senha</label>
                <input name="password" id="password" type='password'required onChange = {(e) => {setPassword(e.target.value)}} />
            </div>
            <button className ="Envios" type="submit">Login</button>
        </fieldset>
        </form>
        </>
    )
}
export default Login