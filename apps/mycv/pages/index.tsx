import styles from './index.module.scss';
import ProgressBar from "../app/ProgressBar";
import {Card, Col, Container, Row} from 'react-bootstrap';
import Image from 'next/image';
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
          <Container fluid>
            <Row>
              <Col>
                <Card>
                  <Card.Body>
                    <div className={styles.cardContainer}>
                      <div className={styles.imageContainer}>
                        <Image className={styles.profilePicture} width={256} height={256} src="/profile_pic2.jpg" alt="profile picture" />
                      </div>
                      <Card.Title>Jonas Fischer</Card.Title>
                      <Card.Text>
                        Human Developer Level 7
                      </Card.Text>
                    </div>
                    <ProgressBar />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Index;
