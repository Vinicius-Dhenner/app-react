import './style.css';

type ContactListProps = {
    children: React.ReactNode
}

export function Contactlist ({children} : ContactListProps) {
    return (
        <>
            <section className="contactList">
                {children}
            </section>
        </>
    )
}