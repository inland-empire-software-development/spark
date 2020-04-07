

// render Title page.
function Title(): JSX.Element {
  return (
    <section id="title" className="">
      {/* TODO: Find a way to NOT render this under 960px */}
      <p className="user-centered font34 profile-title uk-padding-remove-bottom">Andy Mendez</p>
      {/* <div className="uk-overlay-primary uk-position-cover"></div> */}
      <p className=" user-centered font16 roleColor uk-margin-small uk-margin-remove-top">Cold Fusion Developer</p>
      <img id="profilepic" className=" user-centered uk-border-circle" src="https://api.iesd.com/wp-content/uploads/2019/10/robin-asm.jpg "/>
    </section>

  );
}

export default Title;
