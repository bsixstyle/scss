import React, { Fragment, useEffect, useState } from "react";
import Prism from "prismjs";
function Home() {
  useEffect(() => {
    Prism.highlightAll();
  });

  const [components, setComponents] = useState([
    {
      component: "base"
    }
  ]);

  return (
    <Fragment>
      <h3>The bsix</h3>
      <p>
        bsixstyle is css / scss framework,{" "}
        <a
          target="_blank"
          className="link"
          href=" https://github.com/bsixstyle/scss.git"
        >
          {" "}
          the sources
        </a>{" "}
        is builtin up with react and scss, actually I made this framework for
        personal needs, but if you want to use it, just use it.
      </p>
      <br />
      <hr />
      <h3>The story</h3>
      <p>
        You need extra effort to make your website look better, call the classes
        or write a script that you need, it's quite boring and worthless if you
        have a another solutions, when you have a way to automate or scafold
        something for example you create crud operations, the code is generated
        by tool and then you modify the codes because its look ugly? of course
        it requires extra effort to add some classes and scripts, i feel boring
        with dats, LOL ... as a developer who is not concerned with cosmetics
        ... yes thats why the author created this, to minimiza efforts :). maybe
        this is one of the reasons why the author is unemployed and have no
        income LOL.
      </p>
      <blockquote>
        <p>
          Bsixstyle it's 100% css, no need javascripts. with basic and ugly
          style.
        </p>
        <footer>
          Me, <cite>Brave New World</cite>
        </footer>
      </blockquote>
      <br />
      <hr />
      <h3>Why basic?</h3>
      <p>
        Major components such as buttons, form, table, header etc...no need
        extra classes, it's only html standard.
      </p>
      <br />
      <h3>Why Dark Mode?</h3>
      <p>
        Now days peoples spent much time play with gadget, Let’s face it, dark
        modes are trending. dark mode is save batery and does not make my eyes get tired more quickly.
      </p>
      <br />
      <hr />
      <h3>Lightweight or not?</h3>
      <table>
        <tr>
          <td>Component</td>
          <td>Size</td>
        </tr>
        <tr>
          <td>bsix.css</td>
          <td>3.3 KB gzip</td>
        </tr>
        <tr>
          <td>bsix-themes.css</td>
          <td>801 B gzip</td>
        </tr>
      </table>
    </Fragment>
  );
}

export default Home;
