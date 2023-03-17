import './style.css'

type usersProps = {
    name : String
}

export function Users (props : usersProps) {
    return (
        <>
            <div className="users">
                <section className="texts">
                    <h1>{props.name}</h1>
                </section>
            </div>
        </>
    )
}