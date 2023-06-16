import React from "react";
import classes from './LandingPage.module.css'

function LandingPage() {
  return (
    <body>
      <div className={classes.navbarbody}>
        <nav className={classes.mainnav}>
          <ul className={classes.navul}>
            <li className={classes.navul_li}>
            <a className={classes.navulli_a} href="#">Login/SignUp</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
      <nav>
        <div className={classes.sidebar}>
            <button className={classes.toggle_btn}>&#9776;</button>
            <ul className={classes.sidebar_ul}>
                <li className={classes.sidebar_li}><a className={classes.sidebar_a} href="#">Home</a></li>
            </ul>
        </div>
    </nav>
      </div>
    </body>
  );
}

export default LandingPage;
