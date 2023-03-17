import { Button } from '../Button'
import './style.css'

type usersProps = {
    name : String
    email : String
}

export function Users (props : usersProps) {
    return (
        <>
            <div className="users">
                <section className="texts">
                    <h1>{props.name}</h1>
                    <p>{props.email}</p>
                    <Button text="Detalhes" type="primary"/>
                </section>
            </div>
        </>
    )
}