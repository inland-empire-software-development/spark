// render Title page.
function Title(): JSX.Element {
  return (
    // top banner with profile pic
    <section id="title" className="uk-width-1-1 ">
      <section className="uk-position-center">
        <p className="uk-text-center font34 profile-title uk-padding-remove">
          Andy Mendez
        </p>
        {/* <div className="uk-overlay-primary uk-position-cover"></div> */}
        <p className="profile-sub-title uk-text-center font16 role-Color uk-padding-small uk-padding-remove-top uk-margin-remove-top">
          Cold Fusion Developer
        </p>
      </section>
      <img
        id="profilepic"
        className="uk-border-circle uk-visible@s "
        src="https://api.iesd.com/wp-content/uploads/2019/10/robin-asm.jpg "
      />
    </section>
  );
}

export default Title;
