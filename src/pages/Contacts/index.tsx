import './style.css'
import { Title } from '../../components/Title';
import { Search } from '../../components/Search';
import { Users } from '../../components/Users';
import { users } from './services/api';

const api = users;

let position = 0;
function positionApi () {
    return position++;
}

export function Contacts () {
    return (
        <>
            <div className="contacts">
                <Title text="Agenda de Contatos" />
                <Search/>
                <Users name={api[positionApi()].first + " " + api[positionApi()].last} email={api[positionApi()].email}/>
                <Users name={api[positionApi()].first + " " + api[positionApi()].last} email={api[positionApi()].email}/>
                <Users name={api[positionApi()].first + " " + api[positionApi()].last} email={api[positionApi()].email}/>
                <Users name={api[positionApi()].first + " " + api[positionApi()].last} email={api[positionApi()].email}/>
                <Users name={api[positionApi()].first + " " + api[positionApi()].last} email={api[positionApi()].email}/>
            </div>
        </>
    )
}