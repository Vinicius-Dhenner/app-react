import './style.css'
import { Title } from '../../components/Title';
import { Search } from '../../components/Search';
import { Users } from '../../components/Users';
import { users } from './services/api';

const api = users;

export function Contacts () {
    return (
        <>
            <div className="contacts">
                <Title text="Agenda de Contatos" />
                <Search/>
                <Users name={api[0].first}/>
            </div>
        </>
    )
}