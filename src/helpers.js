import {
  capitalizeFirstLetter
} from './utils';

export const saveCustomFields = (space, customFields, state) => {
  return new Promise((resolve) => {
    customFields.forEach(async (field, i) => {
      const newValue = state[field.key];
      const oldValue = state[`spaceProfile${capitalizeFirstLetter(field.key)}`];

      if (newValue !== oldValue) {
        const method = newValue !== '' ? 'set' : 'remove';
        await space.public[method](field.key, newValue);
        console.log('savefinished')
      }

      if (i === (customFields.length - 1)) resolve();
    });
  })
}