import React from 'react';
import View from 'components/Page/View';

import Dashboard from 'components/Dashboard';
import ContactItem from 'components/Contacts/List/Item';

import {
  ContactsContainer,
  ContactsTitle,
  ContactsContent,
} from 'views/contacts/styles';
import FontsSubtitle from 'components/Fonts/Subtitle';
import monetize from 'helpers/text/monetize';
import ContactsBillingsList from 'components/Contacts/Billings/List';

const contact = {
  first_name: 'welliton',
  last_name: 'gervickas',
  phone: '+5521951298598',
  email: 'we@wel.com',
  uuid: '1234',
};

const billings = [{
  value: 10040.45,
  uuid: '1',
}, {
  value: 32203.32,
  uuid: '2',
}];

const ContactsRead = () => {
  const calcAmount = billings.reduce((acc, curr) => {
    // eslint-disable-next-line no-param-reassign
    acc += curr.value;
    return acc;
  }, 0);

  const totalAmountLabel = `Amount: ${monetize(calcAmount)}`;

  return (
    <View>
      <Dashboard>
        <ContactsContainer>
          <ContactsTitle label="Contact">
            {totalAmountLabel}
          </ContactsTitle>
          <ContactsContent>
            <ContactItem contact={contact} />
            <FontsSubtitle label="New bill" />
            <FontsSubtitle label="Billings" />
            <ContactsBillingsList billings={billings} />
          </ContactsContent>
        </ContactsContainer>
      </Dashboard>
    </View>
  );
};

export default ContactsRead;
