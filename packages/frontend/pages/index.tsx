import styles from './index.module.scss';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Mi proyecto react, </span>
              Welcome frontend 👋
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
