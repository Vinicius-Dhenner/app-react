import { useEffect, useState } from 'react'
import { ContactCard } from '../../components/ContactCard'
import { Contactlist } from '../../components/ContactList'
import { Title } from '../../components/Title'
import { getContacts } from '../../../services/api'
import './style.css'

export function Contacts () {
    const [search, setSearch] = useState('')
    const [contacts, setContacts] = useState([])


    useEffect(() => {
        async function listContacts () {
            setContacts(await getContacts())
        }
        listContacts()
    }, []) 

    return (
        <>
            <header>
                <Title text="Agenda de Contatos"/>
            </header>
            <main>
            <input type="search" className="inputSearch" onInput={(event) => setSearch(event.target.value)} />
                <Contactlist>
                    {
                        contacts.map(contact => {
                            return <ContactCard contactData={contact}/>
                        })
                    }
                </Contactlist>
            </main>
        </>
    )
}