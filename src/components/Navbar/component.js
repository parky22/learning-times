import React from 'react';

const Navbar = ({ styles }) => {
  return (
    <div className={styles.wrapper}>
      <a className={styles.link}>Home</a>
      <a className={styles.link}>Browse</a>
      <a className={styles.link}>Search</a>
    </div>
  );
};

export default Navbar;
