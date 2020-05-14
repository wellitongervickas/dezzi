import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  faPen,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import FormButton from 'components/Form/Button';

import { defaultPropTypes, setNavLink } from 'components/Contacts/helpers';
import { namelize } from 'helpers/text/namelize';
import { phonelize } from 'helpers/text/phonelize';

import {
  ContactsListItemContainer,
  ContactsListItemDetails,
  ContactsListItemButtons,
} from 'components/Contacts/List/styles';

const ContactsListItem = ({ contact }) => {
  const { push } = useHistory();

  const onEdit = () => push(`contacts/${contact.uuid}/edit`);
  const onRemove = () => { };

  return (
    <ContactsListItemContainer>
      <ContactsListItemDetails to={setNavLink(contact.uuid)}>
        <div>
          {namelize(contact.first_name, contact.last_name)}
        </div>
        <div>
          {phonelize(contact.phone)}
        </div>
        <div>
          {contact.email}
        </div>
      </ContactsListItemDetails>
      <ContactsListItemButtons>
        <FormButton
          size="xs"
          icon={faPen}
          onClick={onEdit}
        />
        <FormButton
          color="red"
          size="xs"
          icon={faTimes}
          onClick={onRemove}
        />
      </ContactsListItemButtons>
    </ContactsListItemContainer>
  );
};

ContactsListItem.propTypes = {
  ...defaultPropTypes.contacts,
};

export default ContactsListItem;
