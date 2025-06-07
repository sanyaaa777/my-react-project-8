import { useSelector } from 'react-redux';
import Contact from '../Contacts/Contact';
import { selectFilteredContacts } from '../../redux/contactsSLice';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
