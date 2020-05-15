import React from 'react';

import PropTypes from 'prop-types';

import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

import FormButton from 'components/Form/Button';

import {
  BillingItemActionsContainer,
} from 'components/Contacts/Billings/Item/styles';

const BillingItemActions = ({ onEdit, onDelete }) => {
  const handleEdit = onEdit;
  const handleDelete = onDelete;

  return (
    <BillingItemActionsContainer>
      <FormButton
        size="xs"
        icon={faEdit}
        onClick={handleEdit}
      />
      <FormButton
        size="xs"
        color="red"
        icon={faTimes}
        onClick={handleDelete}
      />
    </BillingItemActionsContainer>
  );
};

BillingItemActions.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default BillingItemActions;
