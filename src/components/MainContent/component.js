import React from 'react';

const MainContent = ({ styles }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftContent}>
        Left Side
      </div>
      <div className={styles.rightContent}>
        Right Side
      </div>
    </div>
  );
};

export default MainContent;
