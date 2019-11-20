import eachSeries from 'async/eachSeries';

import {
  capitalizeFirstLetter,
} from './utils';

export const saveBasicTextFields = async (box, space, state, type) => new Promise((resolve) => {
  const basicFields = ['name', 'description', 'emoji'];
  const isGeneralProfile = type === 'originalProfile';
  const originalValues = state[type];

  const func = async (field, callback) => {
    const updatedField = isGeneralProfile ? field : `spaceProfile${capitalizeFirstLetter(field)}`;
    const newValue = state[updatedField];

    if (originalValues[field] !== newValue) {
      if (isGeneralProfile) {
        await box.public[field !== '' ? 'set' : 'remove'](field, newValue);
      } else {
        await space.public[field !== '' ? 'set' : 'remove'](field, newValue);
      }
    }

    callback();
  };

  eachSeries(basicFields, func, resolve());
})

export const saveCustomFields = async (space, customFields, state, originalSpaceProfile) => {
  const func = async (field, callback) => {
    const newValue = state[field.key];
    const oldValue = originalSpaceProfile[field.key];

    if (newValue !== oldValue) {
      const method = newValue !== '' ? 'set' : 'remove';
      await space.public[method](field.key, newValue);
    }

    callback();
  };

  eachSeries(customFields, func);
}