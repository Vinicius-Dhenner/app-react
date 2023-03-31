import './style.css'

import { Input } from '../Input'
import { Button } from '../Button'
import { ButtonIU } from '../ButtonUI'


export function FormRegister() {
    return (
        <>
            <form>
                <Input placeholder='Nome de Usuário' type='text' />
                <Input placeholder='E-mail' type='email' />
                <Input placeholder='Senha' type='password' />
                <Input placeholder='Confirmar Senha' type='password' />
                {/* <Button text='criar conta' type='primary' /> */}
                <ButtonIU text='criar conta' />
            </form>
        </>
    )
}