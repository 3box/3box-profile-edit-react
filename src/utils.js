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

// the first field after emoji is the one that doesnt save
export const editProfileFields = [
  ['emoji', 'public'],
  ['verifiedGithub', 'public'],
  ['verifiedTwitter', 'public'],
  ['verifiedEmail', 'private'],
  ['name', 'public'],
  ['description', 'public'],
  ['image', 'public'],
  ['coverPhoto', 'public'],
];