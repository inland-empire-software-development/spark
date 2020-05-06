import React from "react";
import Title from "./Title";
import Summary from "./Summary";
import Slider from "../slider/Slider";

// render Profile page.
const Profile: React.FC<{}> = () => {
  return (
    <section id="profile">
      <section className="container-full">
        <section className="grid">
          <Title />
          <Summary />
        </section>
        <Slider />
      </section>
    </section>
  );
};

export default Profile;
