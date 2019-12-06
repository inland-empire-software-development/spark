export default function Loader() {
  const offsetSupport = () => {
    if (process.browser && navigator) {
      const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

      if (!isChrome) {
        document.getElementsByClassName('infinityChrome')[0].style.display = "none";
        document.getElementsByClassName('infinity')[0].style.display = "block";
      }
    }
  };
  return (
    <section id="infinite-loader">
      {/* Google Chrome*/}
      <div className="infinityChrome">
        <div/>
        <div/>
        <div/>
      </div>

      {/* Safari and others*/}
      <div className="infinity">
        <div>
          <span/>
        </div>
        <div>
          <span/>
        </div>
        <div>
          <span/>
        </div>
      </div>

      {/* Stuff*/}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{"display": "none"}}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      {offsetSupport()}
    </section>
  );
}
