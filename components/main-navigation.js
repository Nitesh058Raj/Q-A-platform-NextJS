import Link from "next/link";
import { Fragment } from "react";

import Logo from "./logo";
import classes from "./main-navigation.module.css";

function MainNavigation() {
  return (
    <Fragment>
      <header className={classes.header}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/posts">Questions</Link>
            </li>
            <li>
              <Link href="/ask">Ask Question</Link>
            </li>
            {/* <li>
              <Link href="/contact">Contact Us</Link>
            </li> */}
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}

export default MainNavigation;
