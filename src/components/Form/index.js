import React, { Fragment } from 'react';

import { Group, Textbox } from '../';

export const Form = ({ payload }) => {
  let tree = [];
  const processed = [];
  const components = payload.DataComponents;
  const groups = components.filter(component => component.DisplayTypeShortCode === 'GROUP');

  groups.map(group => {
    const setting = group.Settings.find(setting => setting.Id === 'DATA_COMPONENTS');
    if (setting) {
      const shortCodes = setting.Text.split(';');
      if (shortCodes.length > 0) {
        group.children = components.filter(component => shortCodes.includes(component.ShortCode));
        group.children.map(child => processed.push(child.ShortCode));
      }
    }
    processed.push(group.ShortCode);
  });

  groups.forEach(group => {
    const children = [];
    const subGroups = [];

    group.children.forEach(child => {
      switch (child.DisplayTypeShortCode) {
        case 'TEXTBOX':
          children.push(<Textbox key={child.ShortCode} payload={child} />);
          break;
        case 'DATEPICKER':
          children.push(<Textbox key={child.ShortCode} payload={child} />);
          break;
        case 'GROUP':
          subGroups.push(child);
          break;
        default:
          break;
      }
    });

    if (subGroups.length > 0) {
      subGroups.forEach(s => {
        const subGroup = tree.find(g => g.key === s.ShortCode);
        children.push(subGroup);
        tree = tree.filter(t => t.key !== s.ShortCode);
      });
    }

    tree.push(
      <Group payload={group} key={group.ShortCode}>
        {children}
      </Group>
    );
  });

  return <Fragment>{tree}</Fragment>;
};
