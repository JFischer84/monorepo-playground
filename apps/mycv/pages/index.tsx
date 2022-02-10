import React from 'react';
import Image from 'next/image';
import styles from './index.module.scss';
import {ProgressBar} from '../app/ProgressBar';
import {Fact} from '../app/Fact';

export function Index() {
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <div className={styles.cardContent}>
                    <div className={styles.uperContainer}>
                      <div className={styles.imageContainer}>
                        <Image className={styles.profilePicture} width={256} height={256} src="/profile_pic2.jpg" alt="profile picture" />
                      </div>
                      <h5 className="card-title">Jonas Fischer</h5>
                      <div className={styles.factSection}>
                        <div className={styles.factSubContainer}>
                          <Fact fact="Developer 7" description="Class & Level" />
                          <Fact fact="Catlover/Gamer" description="Background" />
                        </div>
                        <div className={styles.factSubContainer}>
                          <Fact fact="Neutral Good" description="Alignment" />
                          <Fact fact="Human" description="Race" />
                        </div>
                      </div>
                    </div>
                    <div className={styles.progressBarContainer}>
                      <ProgressBar fillingPercentage="75" colorScheme="javascript" title="JavaScript" />
                      <ProgressBar fillingPercentage="85" colorScheme="typescript" title="TypeScript" />
                      <ProgressBar fillingPercentage="85" colorScheme="react" title="React" />
                      <ProgressBar fillingPercentage="75" colorScheme="java" title="Java" />
                      <ProgressBar fillingPercentage="60" colorScheme="springboot" title="Spring Boot" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
