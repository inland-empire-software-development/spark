import React from 'react';
import {DefaultSeo} from "next-seo";
import SEO from "../../../../next-seo.config";

import './Redirect.scss';

export default function Redirect(): JSX.Element {
  return (
    <section id="redirect-animation">
      <DefaultSeo {...Object.assign(SEO, {
        title: "Redirecting...",
      })}
      />

      <div className="body">
        <span>
          <span />
          <span />
          <span />
          <span />
        </span>
        <div className="base">
          <span />
          <div className="face" />
        </div>
      </div>
      <div className="longfazers">
        <span />
        <span />
        <span />
        <span />
      </div>
      <h1>redirecting</h1>
    </section>
  );
}
