import React from 'react';
import Image from 'next/image';
import styles from './index.module.scss';
import {ProgressBar} from '../app/ProgressBar';
import {Fact} from '../app/Fact';
import {Feat} from '../app/Feat';
import {AdventureLogEntry} from '../app/AdventureLogEntry';
import feats from '../app/feats';
import adventureLogEntries from '../app/adventureLogEntries';
import {Accordion} from '../app/Accordion';

export const Index = () => {
  const openLink = (link: string) => {
    window.open(link);
  };

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
                      <h3 className="card-title">Jonas Fischer</h3>
                      <div className={styles.factSection}>
                        <div className={styles.factSubContainer}>
                          <Fact factTitle="Developer 7" description="Class & Level" />
                          <Fact factTitle="Catlover/Gamer" description="Background" />
                        </div>
                        <div className={styles.factSubContainer}>
                          <Fact factTitle="Neutral Good" description="Alignment" />
                          <Fact factTitle="Human" description="Race" />
                        </div>
                      </div>
                    </div>
                    <div className={styles.progressBarContainer}>
                      <Accordion title="Skills">
                        <ProgressBar fillingPercentage="75" colorScheme="javascript" title="JavaScript" />
                        <ProgressBar fillingPercentage="85" colorScheme="typescript" title="TypeScript" />
                        <ProgressBar fillingPercentage="85" colorScheme="react" title="React" />
                        <ProgressBar fillingPercentage="75" colorScheme="java" title="Java" />
                        <ProgressBar fillingPercentage="60" colorScheme="springboot" title="Spring Boot" />
                      </Accordion>
                    </div>
                    <div className={styles.featsContainer}>
                      <Accordion title="Feats">
                        <div className="row align-items-center gx-2">
                          {feats.map((feat) => (
                            <Feat key={feat} featTitle={feat} />
                          ))}
                        </div>
                      </Accordion>
                    </div>
                    <div className={styles.adventureLogContainer}>
                      <Accordion title="Adventure Log">
                        <ul className="list-group list-group-flush">
                          {adventureLogEntries.map((entry) => (
                            <AdventureLogEntry key={entry.entryText} entry={entry} />
                          ))}
                        </ul>
                      </Accordion>
                    </div>
                    <h4>Profiles</h4>
                    <div className="row align-items-center gx-4">
                      <div className="col">
                        <button type="button" className="btn btn-primary" onClick={() => openLink('https://github.com/jfischer84')}>Github</button>
                      </div>
                      <div className="col">
                        <button type="button" className="btn btn-primary" onClick={() => openLink('https://www.xing.com/profile/Jonas_Fischer34/cv')}>Xing</button>
                      </div>
                      <div className="col">
                        <button type="button" className="btn btn-primary" onClick={() => openLink('https://www.linkedin.com/in/jonas-fischer-a5071998/')}>Linkedin</button>
                      </div>
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
};

export default Index;
