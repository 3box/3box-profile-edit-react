import React from 'react';
import Box from '3box';
import SVG from 'react-inlinesvg';

import {
  Edit,
} from '../src/index';
import Logo from '../src/assets/3BoxLogoWhite.svg';

import './index.scss';

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
    console.log('myProfile', myProfile);

    box.onSyncDone(() => this.setState({ box }));
    this.setState({ box, myProfile, myAddress, isReady: true });
  }

  render() {
    const {
      box,
      myAddress,
      myProfile,
      isReady
    } = this.state;

    return (
      <div className="App">
        <div className="example_page">
          <div className="example_page_header">
            <SVG src={Logo} alt="Logo" className="example_page_header_logo" />
            <h2>Edit Profile component<br /> Demo</h2>
          </div>
          <div className="userscontainer">
            <Edit
              appName="Rarity"
              appImage='https://i.imgur.com/RXJO8FD.png'
              spaceName='3box_test'
              currentUserAddr={myAddress}
              
              
              currentUser3BoxProfile={myProfile}

              // required
              threadName='ghostChatTest'

              // case A & B
              box={box}

              // case B
              // loginFunction={this.handleLogin}

              // case C
              ethereum={window.ethereum}

              popupChat
            // mute
            // colorTheme="#1168df"

            // optional
            // colorTheme="#1168df"
            // threadOpts={{}}
            // spaceOpts={{}}
            // useHovers={true}
            // userProfileURL={address => `https://userprofiles.co/user/${address}`}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Example;
