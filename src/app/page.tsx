import styles from "./page.module.css";

export default function Admin() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.navLinks}>
          <span>Link 1</span>
          <span>Link 2</span>
          <span>Link 3</span>
          <button className={styles.loginButton}>Login</button>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.secondaryDetail}>
            <div>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
            </div>
          </div>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.container}>
            <div className={styles.mainHeader}>
                <div>
                  Heading goes here
                </div>
            </div>
            <div className={styles.mainDetail}>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
              <p>Scrollable content</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
