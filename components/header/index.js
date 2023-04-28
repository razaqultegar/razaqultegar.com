import { memo } from "react";
import Link from "next/link";

import styles from "./header.module.css";

const Header = ({ title, content }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.header}>
        <Link href="/" legacyBehavior>
          <a className={styles.logo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 42.36 50"
            >
              <path
                d="M120.6,48.1c-.45-.18-.26.39-.43-.65-1.22-1-1.75-3.11-6.42-3.79-2.63-.39-21.62-.16-26.43-.17-6,0-4.45-1.35-4.52,17.87l-.06,14.92c.07,1.29,0,1.1.67,1.68,1.69,1.3,3.62-2.2,6.16-4.78l13.61-15.34c5-4.94.08-4.44-3.21-4.43-1.66,0-4.32-.43-5.63.34-.79.93-.78,1.34,0,2.28,1.5.82,4.24.25,6.08.38l-5.37,6.23c-.7.8-1.21,1.2-1.88,2L89.42,68.8c-.94,1-2.71,3.35-3.71,4l.08-26.2c2.32-.62,17.06-.17,20.64-.17,2.87,0,7.21-.43,9.46,1,6.08,3.75-2.13,10.84-5,14.23L97.36,76.82c-.35,1.3,3.4,5.47,4.35,6.68,9.32,11.88,4.7,9.79,18.21,9.79,2.3,0,7.29.58,4-3.37L115.22,78.7c-1-1.36-2.93-4.36-4.29-3.93-2.87.9,2.14,6,3.55,7.77l5.94,7.73-9.87.07a25.67,25.67,0,0,0-2.34-3.22l-7.43-9.74c.54-1.08,12.65-13.91,14.6-16.33s4-3.86,5.1-7.27C121.28,51.26,120.62,50.32,120.6,48.1Z"
                transform="translate(-82.67 -43.43)"
                style={{ fill: "#ffffff", fillRule: "evenodd" }}
              />
            </svg>
          </a>
        </Link>

        {title && <div className={styles.content}>{title}</div>}
      </div>
    </nav>
  );
};

Header.displayName = "Header";
export default memo(Header);
