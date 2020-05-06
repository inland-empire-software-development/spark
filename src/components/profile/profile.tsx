import Title from "../profile/title";
import Summary from "../profile/summary";
import Slider from "../slider/Slider";

// render Profile page.
function Profile(): JSX.Element {
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
}

export default Profile;
