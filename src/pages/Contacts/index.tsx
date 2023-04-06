import { BaseLayout } from '../../Layout/BaseLayout';
import { CircularProgress, TextField } from '@mui/material';
import { ContactList } from '../../components/ContactList';
import { ContactCard } from '../../components/ContactCard';
import { ChangeEvent, useEffect, useState } from 'react';
import { getContacts } from '../../services/api';
import { Contact } from '../../Types/';
import './style.css'
import { Search } from '../../components/Search';

export function Contacts() {
  const [search, setSearch] = useState("")
  const [isLoading, setIsLoading] = useState<Boolean>(false)
  const [contacts, setContacts] = useState<Contact[]>([])

  const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const filteredContacts = ( contact : Contact ) => {
    return contact.name.first.toLowerCase().includes(search.toLowerCase()) 
  }

  useEffect (() => {
    async function listContacts () {
      setIsLoading(true)
      setContacts(await getContacts())
      setIsLoading(false)
    }
    listContacts();
  }, []);
  return (
    <>
      <BaseLayout appBarTitle="Agenda de Contatos">
      <Search />
          <TextField variant="outlined" fullWidth/>
          {
          isLoading ? ( <CircularProgress/>) : (<ContactList>
            {
              contacts.filter(filteredContacts).map((contact) =>{
                return <ContactCard key={contact.login.uuid} contactData={contact}/>
              })
            }
          </ContactList>)
          }
        <CircularProgress/>
      </BaseLayout>

    </>

  )
}