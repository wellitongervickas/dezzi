import React from 'react';

import ContactsBillingsItem from 'components/Contacts/Billings/Item';
import BillingsListContainer from 'components/Contacts/Billings/styles';

import {
  defaultBillingPropTypes,
} from 'components/Contacts/helpers';

// eslint-disable-next-line no-confusing-arrow
const ContactsBillingsList = ({ billings }) => billings.length
  ? (
    <BillingsListContainer>
      {billings.map((item) => <ContactsBillingsItem key={item.uuid} billing={item} />)}
    </BillingsListContainer>
  ) : <div>empty</div>;

ContactsBillingsList.defaultProps = {
  billings: [],
};

ContactsBillingsList.propTypes = {
  ...defaultBillingPropTypes,
};

export default ContactsBillingsList;
