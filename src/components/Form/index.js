import React, { Fragment } from 'react';

export const Form = ({ payload, components, ...props }) => {
  let tree = [];
  const processed = [];
  const dataComponents = payload.DataComponents;
  const groups = dataComponents.filter(component => component.DisplayTypeShortCode === 'GROUP');

  groups.forEach(group => {
    const setting = group.Settings.find(setting => setting.Id === 'DATA_COMPONENTS');
    if (setting) {
      const shortCodes = setting.Text.split(';');
      if (shortCodes.length > 0) {
        group.children = dataComponents.filter(component => shortCodes.includes(component.ShortCode));
        group.children.forEach(child => processed.push(child.ShortCode));
      }
    }
    processed.push(group.ShortCode);
  });

  groups.forEach(group => {
    const children = [];
    const subGroups = [];

    group.children.forEach(child => {
      const Component = components.find(c => c.name.toLowerCase() === child.DisplayTypeShortCode.toLowerCase());
      if (child.DisplayTypeShortCode === 'GROUP') {
        subGroups.push(child);
      } else {
        children.push(<Component key={child.ShortCode} payload={child} {...props}></Component>);
      }
    });

    if (subGroups.length > 0) {
      subGroups.forEach(s => {
        const subGroup = tree.find(g => g.key === s.ShortCode);
        children.push(subGroup);
        tree = tree.filter(t => t.key !== s.ShortCode);
      });
    }

    const Group = components.find(c => c.name === 'Group');

    tree.push(
      <Group payload={group} key={group.ShortCode} {...props}>
        {children}
      </Group>
    );
  });

  return <Fragment>{tree}</Fragment>;
};
