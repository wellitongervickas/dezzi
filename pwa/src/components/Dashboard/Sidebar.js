import React from 'react';

import { SidebarContainer } from 'components/Dashboard/styles';
import ContactsSidebar from 'components/Contacts/Sidebar';
import { defaultPropTypes } from 'components/Contacts/helpers';

const Sidebar = ({ contacts }) => (
  <SidebarContainer>
    <ContactsSidebar contacts={contacts} />
  </SidebarContainer>
);

Sidebar.defaultProps = {
  contacts: [],
};

Sidebar.propTypes = {
  ...defaultPropTypes,
};

export default Sidebar;
