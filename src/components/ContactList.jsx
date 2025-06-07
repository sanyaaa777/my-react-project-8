import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, updateContact } from '../redux/contacts/operations';
import { selectFilteredContacts } from '../redux/contacts/selectors';
import toast from 'react-hot-toast';
import { useState } from 'react';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [editValues, setEditValues] = useState({ name: '', number: '' });

  const handleDelete = id => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      dispatch(deleteContact(id))
        .unwrap()
        .then(() => toast.success('Contact deleted'))
        .catch(() => toast.error('Failed to delete contact'));
    }
  };

  const handleEdit = contact => {
    setEditingId(contact.id);
    setEditValues({ name: contact.name, number: contact.number });
  };

  const handleSave = id => {
    dispatch(updateContact({ id, ...editValues }))
      .unwrap()
      .then(() => {
        toast.success('Contact updated');
        setEditingId(null);
      })
      .catch(() => toast.error('Update failed'));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setEditValues(prev => ({ ...prev, [name]: value }));
  };

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {editingId === contact.id ? (
            <>
              <input name="name" value={editValues.name} onChange={handleChange} />
              <input name="number" value={editValues.number} onChange={handleChange} />
              <button onClick={() => handleSave(contact.id)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ) : (
            <>
              {contact.name}: {contact.number}
              <button onClick={() => handleEdit(contact)}>Edit</button>
              <button onClick={() => handleDelete(contact.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}