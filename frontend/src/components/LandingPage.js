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
      <div className={classes.mainsidebar}>
      <nav className={classes.sidebar_nav}>
        <div className={classes.sidebar}>
            <ul className={classes.sidebar_ul}>
                <li className={classes.sidebar_li}><a className={classes.sidebar_a} href="#">DriverSymb</a></li>
                <li className={classes.sidebar_li}><a className={classes.sidebar_a} href="#">Carsymb</a></li>
            </ul>
        </div>
    </nav>
    <p>swiftRIDE</p>
      </div>
    </body>
  );
}

export default LandingPage;
