import React from "react";

/**
 * Renders the loader component with animation.
 * @constructor
 */
export default function Loader(): JSX.Element {
  const isChrome = () => {
    if ((process as any).browser && navigator) {
      return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    }

    return true;
  };

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
