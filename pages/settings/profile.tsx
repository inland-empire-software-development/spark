import React from "react";
import DashboardLayout from "../../src/components/layouts/DashboardLayout";
import UserInfoInput from "../../src/components/user-info-input/UserInfoInput";

const Profile: React.FC = () => (
  <DashboardLayout>
    <UserInfoInput />
  </DashboardLayout>
);

export default Profile;
