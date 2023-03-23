import './style.css';
import { Contact } from '../../types';

type ContactCardProps = {
    contactData : Contact
}

export function ContactCard ({contactData} : ContactCardProps) {
    const contact = contactData;
    return (
        <>
            <div className="contactCard">
                <img src="https://randomuser.me/api/portraits/women/7.jpg" alt="" />
                <div className="contactInformations">
                    <h2>{}</h2>
                    <p>
                        props.email
                    </p>
                </div>
            </div>
        </>
    );
}