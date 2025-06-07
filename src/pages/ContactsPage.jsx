import './ContactsPage.css';
import Contacts from '../components/Contacts';

export default function ContactsPage() {
  return (
    <div className="contacts-container">
      <h2>Your Contacts</h2>
      <Contacts />
    </div>
  );
}