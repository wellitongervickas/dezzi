import React, {
  useState,
} from 'react';

import {
  billingType,
} from 'components/Contacts/helpers';

import { BillingsItemContainer } from 'components/Contacts/Billings/styles';
import BillingItemActions from 'components/Contacts/Billings/Item/Actions';

import monetize from 'helpers/text/monetize';

const ContactsBillingsItem = ({ billing }) => {
  const [actions, setActions] = useState(false);
  const [editing, setEditing] = useState(false);

  const handleSetActions = (bool) => setActions(bool);
  const handleSetEditing = (bool) => setEditing(bool);
  const handleDelete = () => {};

  return (
    <BillingsItemContainer
      onFocus={() => handleSetActions(true)}
      onMouseOver={() => handleSetActions(true)}
      onMouseLeave={() => handleSetActions(false)}
    >
      {!editing && monetize(billing.value)}
      {actions && (
        <BillingItemActions
          uuid={billing.uuid}
          onDelete={handleDelete}
          onEdit={() => handleSetEditing(true)}
        />
      )}
    </BillingsItemContainer>
  );
};

ContactsBillingsItem.propTypes = {
  billing: billingType.isRequired,
};

export default ContactsBillingsItem;
