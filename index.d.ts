import * as React from "react";

declare class EditProfile extends React.Component<EditProfileProps, any> { }

interface EditProfileProps {
  box: [any];
  space: [any];
  currentUserAddr: string;

  currentUser3BoxProfile?: [any];
  redirectFn?: (ethAddr: string) => any;
  onSaveComplete?: (ethAddr: string) => any;
  customFields?: object[];
}

export default EditProfile;