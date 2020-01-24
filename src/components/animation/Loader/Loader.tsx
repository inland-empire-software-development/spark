import React from "react";

/**
 * Renders the loader component with animation.
 * @constructor
 */
export default function Loader(): JSX.Element {
  const isChrome = () => {
    if ((process as any).browser && navigator) {
      return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
      // if (!isChrome) {
      //   const infinityChrome = document.querySelector('.infinityChrome') as HTMLDivElement;
      //   const infinity = document.querySelector('.infinity') as HTMLDivElement;
      //   console.log(infinity, infinityChrome);
      //   if (infinityChrome && infinityChrome.hasOwnProperty('style')) infinityChrome.style.display = "none";
      //   if (infinity && infinity.hasOwnProperty('style')) infinity.style.display = "block";
      // }
    }

    return true;
  };

  console.log(isChrome());

  return (
    <section id="infinite-loader">
      {isChrome() && (
        <div className="infinityChrome">
          <div/>
          <div/>
          <div/>
        </div>
      )}

      {!isChrome() && (
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
      ) }
    </section>
  );
}
