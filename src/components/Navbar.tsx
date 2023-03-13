import React, { Children } from 'react';
import {
    Nav,
    NavItem,
    NavList,
  Page,
  PageHeader,
  PageSection,
  PageSectionVariants,
} from '@patternfly/react-core';
import { AppFields } from "../data/AppFields"
import { keys, map } from "lodash";
import {NavLink} from "react-router-dom";


interface NavbarProps {
  children : React.ReactNode
}

export const Navbar: React.FunctionComponent<NavbarProps> = ({children}) => {

   const logoProps = {
        href :'/'
     };

    const nav = (
        <Nav variant="horizontal" aria-label="Horizontal nav">
          <NavList>
          {map(keys(AppFields), (key) => {
          const tabs = AppFields[key];
              return (
                <NavItem key={tabs.id} itemId={tabs.id}>
                <NavLink to={`${tabs.path}`}>{tabs.label}</NavLink>
               </NavItem> 
              );
            })}
          </NavList>
        </Nav>
      );

  const header = (
    <PageHeader
    logo="My Site!"
    logoProps={logoProps}
    className="my-site-header"
    topNav = {nav}
    />
  );

  return (
    <Page header={header} >
      <PageSection variant={PageSectionVariants.light} className="nav-item">{children}</PageSection>
    </Page>
  );
};
