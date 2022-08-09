// import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter';
import { Container } from 'components/ui/Container.styled';
import { useDispatch, useSelector } from 'react-redux';
// import { addContacts, removeContacts, filterContacts } from 'store/slice';
import { addContacts, removeContacts } from 'redux/slices/myContactSlice';
import { filterContacts } from 'redux/slices/myFilterSlice';

export const App = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector(state => state.contacts.contacts); // для общего стора
  // const filter = useSelector(state => state.contacts.filter); // для общего стора
  // ===============================================================

  // const contacts = useSelector(state => state.contacts); // работает без redax-persist
  // const filter = useSelector(state => state.filter); // работает без redax-persist
  // console.log(contacts);
  // console.log(filter);

  //=======================================================

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  console.dir(contacts);
  console.dir(filter);

  // const [filter, setFilter] = useState('');
  // const [contacts, setContacts] = useState([
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);
  // const firstLoading = useRef(true);

  // useEffect(() => {
  //   const savedContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (savedContacts) {
  //     setContacts(savedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (firstLoading.current) {
  //     firstLoading.current = false;
  //     return;
  //   }
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

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
    // setContacts(prevContacts => [...prevContacts, contact]);
  };

  const deleteContact = id => {
    // setContacts(prevContacts =>
    //   prevContacts.filter(contact => contact.id !== contactId)
    // );
    dispatch(removeContacts(id));
  };

  const changeFilter = e => {
    // setFilter(e.currentTarget.value);
    // console.log(e);
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
      {/* <Filter value={filter} onChange={changeFilter} /> */}
      <Contacts contacts={visibleContacts} onDeleteContact={deleteContact} />
    </Container>
  );
};
