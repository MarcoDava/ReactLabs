import React from 'react';
import ContactCard from './ContactCard';

const ContactList= (props) => {
    console.log(props);

    const renderContactList = props.contacts.map((contact) => {
        return(
             <div className='item'>
                <div className='contact'>
                    <div className="header">
                        {contact.name}
                    </div>
                    <div>{contact.email}</div>
                </div>
                <i className="trash alternate outline icon"></i>
             </div>
        );
    })

    return(
        <ContactCard contact={contact}></ContactCard>
    );
}

export default ContactList;