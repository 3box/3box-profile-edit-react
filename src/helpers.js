import eachSeries from 'async/eachSeries';

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