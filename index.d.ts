import * as React from "react";

declare class EditProfile extends React.Component<EditProfileProps, any> { }

interface EditProfileProps {
  box?: [any];
  space?: [any];
  currentUser3BoxProfile?: [any];

  currentUserAddr?: string;

  redirectFn?: (ethAddr: string) => any;

  customFields?: [any][];
  // customFields: Array<CustomFields>;
}

// interface CustomFields extends EditProfileProps {
//   [index: number]: [any]
// }

export default EditProfile;