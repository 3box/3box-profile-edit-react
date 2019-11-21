export const copyToClipBoard = (addr) => {
  try {
    console.log('clicked')
    const textArea = document.createElement('textarea');

    textArea.value = addr;

    document.body.appendChild(textArea);
    textArea.focus({
      preventScroll: true,
    });
    textArea.select();
    document.execCommand('copy');

    // setTimeout(() => {
    //   dispatch({
    //     type: 'UI_COPY_SUCCESSFUL',
    //     copySuccessful: true,
    //   });
    // }, 1);
    // setTimeout(() => {
    //   dispatch({
    //     type: 'UI_COPY_SUCCESSFUL',
    //     copySuccessful: false,
    //   });
    // }, 2000);

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

export const capitalizeFirstLetter = (string) => {
  const capitalized = string.charAt(0).toUpperCase() + string.substring(1);
  return capitalized;
}

export const formatIpfsImageObject = (returnedData) => {
  const format = [{
    '@type': 'ImageObject',
    contentUrl: {
      '/': returnedData.Hash
    }
  }];

  return format;
};

export const shortenEthAddr = (str) => {
  const shortenStr = str && `${str.substring(0, 5)}...${str.substring(str.length - 5, str.length)}`;
  return shortenStr;
};