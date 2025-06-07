import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();

    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isDuplicate) {
      alert(`${name} вже є у контактах.`);
      return;
    }

    dispatch(addContact({ name, phone, createdAt: new Date().toISOString() }));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Ім'я" required />
      <input name="phone" placeholder="Телефон" required />
      <button type="submit">Додати контакт</button>
    </form>
  );
}