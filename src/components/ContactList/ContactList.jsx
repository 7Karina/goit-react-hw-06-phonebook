import React from 'react';
import { List, Item, Button } from './ContactList.styled';

import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/selectors';
import { removeContact } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeContact());
  };

  return (
    <List>
      {contacts.map((contact, index) => (
        <Item key={index}>
          {contact.name + ' : ' + contact.number}
          <Button
            type="button"
            name="delete"
            onClick={() => handleDelete(index)}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
