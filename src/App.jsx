import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter';
import { Container } from 'components/ui/Container.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContacts,
  removeContacts,
  filterContacts,
  getContsctsValue,
  getFilterValue,
} from 'store/slice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContsctsValue);
  const filter = useSelector(getFilterValue);

  const formSubmitHendler = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const normalizedName = contact.name.toLowerCase();
    contacts.find(contact => contact.name.toLowerCase() === normalizedName)
      ? alert(`${name} is already in contacts`)
      : dispatch(addContacts({ id: nanoid(), name, number }));
  };

  const deleteContact = id => {
    dispatch(removeContacts(id));
  };

  const changeFilter = e => {
    const inputValue = e.target.value;
    dispatch(filterContacts(inputValue));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHendler} />
      <h2>Contacts</h2>
      <Filter onChange={changeFilter} />
      <Contacts contacts={visibleContacts} onDeleteContact={deleteContact} />
    </Container>
  );
};
