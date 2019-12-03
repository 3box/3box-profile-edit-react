import React from 'react';
import Box from '3box';
import SVG from 'react-inlinesvg';

import EditProfile from '../src/index';
import Logo from '../src/assets/3BoxLogoWhite.svg';

import './index.scss';

const spaceName = '3boxtestcomments';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // box: {},
      myProfile: {},
      myAddress: '',
      isReady: false,
    }
  }

  componentDidMount() {
    this.handleLogin();
  }

  handleLogin = async () => {
    const addresses = await window.ethereum.enable();
    const myAddress = addresses[0];

    const box = await Box.openBox(myAddress, window.ethereum, {});
    const myProfile = await Box.getProfile(myAddress);
    const space = await box.openSpace(spaceName);

    this.setState({ box, myProfile, myAddress, space });
    box.onSyncDone(() => console.log('syncdone'));
  }

  render() {
    const {
      box,
      myAddress,
      myProfile,
      space
    } = this.state;

    const customFields = [
      {
        key: 'preferredCoin',
        field: 'Preferred Coin',
        inputType: 'dropdown',
        options: [{
          value: 'eth',
          display: 'Ethereum'
        }, {
          value: 'btc',
          display: 'Bitcoin'
        }, {
          value: 'ltc',
          display: 'Litecoin'
        }]
      }, {
        key: 'backupAddress',
        field: 'Backup Address',
        inputType: 'text'
      }, {
        key: 'spiritCryptoKittie',
        field: 'Spirit CryptoKitty',
        inputType: 'textarea'
      }
    ];

    return (
      <div className="App">
        <div className="example_page">
          <div className="example_page_header">
            <SVG src={Logo} alt="Logo" className="example_page_header_logo" />
            <h2>Edit Profile<br /> Component<br /> Demo</h2>
          </div>
          <div className="userscontainer">
            {box && (
              <EditProfile
                // required
                box={box}
                space={space}
                currentUserAddr={myAddress}

                // optional
                customFields={customFields}
                currentUser3BoxProfile={myProfile}
                // redirectFn
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Example;
