import styles from './index.module.scss';
import Button from 'react-bootstrap/Button';
import ProgressBar from "../app/ProgressBar";

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
              <span> Hello there, </span>
              Welcome mycv 👋
              <Button>Just a Testbutton</Button>
            </h1>
            <ProgressBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
