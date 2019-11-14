export const copyToClipBoard = (type, message) => async (dispatch) => {
  try {
    const textArea = document.createElement('textarea');

    if (type === 'did') {
      textArea.value = message;
    } else if (type === 'profile') {
      textArea.value = `https://www.3box.io/${store.getState().userState.currentAddress}`;
    }

    document.body.appendChild(textArea);
    textArea.focus({
      preventScroll: true,
    });
    textArea.select();
    document.execCommand('copy');

    setTimeout(() => {
      dispatch({
        type: 'UI_COPY_SUCCESSFUL',
        copySuccessful: true,
      });
    }, 1);
    setTimeout(() => {
      dispatch({
        type: 'UI_COPY_SUCCESSFUL',
        copySuccessful: false,
      });
    }, 2000);

    document.body.removeChild(textArea);
  } catch (err) {
    console.error('Unable to copy', err);
  }
};

export const editProfileFields = [
  ['verifiedGithub', 'public'],
  ['verifiedTwitter', 'public'],
  ['name', 'public'],
  ['description', 'public'],
  ['location', 'public'],
  ['website', 'public'],
  ['employer', 'public'],
  ['job', 'public'],
  ['school', 'public'],
  ['degree', 'public'],
  ['major', 'public'],
  ['year', 'public'],
  ['emoji', 'public'],
  ['verifiedEmail', 'private'],
  ['birthday', 'private'],
];