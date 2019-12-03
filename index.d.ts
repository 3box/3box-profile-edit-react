import * as React from "react";

declare class EditProfile extends React.Component<EditProfileProps, any> { }

interface EditProfileProps {
  box?: [any];
  space?: [any];
  currentUser3BoxProfile?: [any];

  currentUserAddr?: string;

  redirectFn?: (url: string) => string;

  customFields: [any][];
  // customFields: Array<CustomFields>;
}

// interface CustomFields extends EditProfileProps {
//   [index: number]: [any]
// }

export default EditProfile;