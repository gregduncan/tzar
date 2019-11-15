export const useFormRenderer = payload => {
  let tree = [];
  const dataComponents = payload.DataComponents;
  const groups = dataComponents.filter(component => component.DisplayTypeShortCode === 'GROUP');

  if(groups.length > 0){
    groups.forEach(group => {
      const setting = group.Settings.find(setting => setting.Id === 'DATA_COMPONENTS');
      if (setting) {
        const shortCodes = setting.Text.split(';');
        if (shortCodes.length > 0) {
          group.children = dataComponents.filter(component => shortCodes.includes(component.ShortCode));
        }
      }
    });
  
    groups.forEach(group => {
      const subGroups = [];
  
      group.children.forEach(child => {
        if (child.DisplayTypeShortCode === 'GROUP') {
          subGroups.push(child);
        }
      });
  
      if (subGroups.length > 0) {
        subGroups.forEach(s => {
          tree = tree.filter(t => t.ShortCode !== s.ShortCode);
        });
      }
  
      tree.push(group);
    });
  } else {
    tree = dataComponents;
  }

  return tree;
};
