import React, {useState} from 'react';
import Image from 'next/image';
import styles from './index.module.scss';
import {ProgressBar} from '../app/ProgressBar';
import {Fact} from '../app/Fact';
import {Feat} from '../app/Feat';
import {AdventureLogEntry} from '../app/AdventureLogEntry';
import feats from './feats';
import adventureLogEntries from './adventureLogEntries';

export function Index() {
  const [isSkillsOpen, setSkillsOpen] = useState(false);
  const [isFeatsOpen, setFeatsOpen] = useState(false);
  const [isAdventureLogOpen, setAdventureLogOpen] = useState(false);

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
                      <div className={`accordion ${styles.customAccordion}`}>
                        <div className="accordion-item">
                          <h4 className="accordion-header">
                            <button
                              onClick={() => setSkillsOpen(!isSkillsOpen)}
                              className={`accordion-button ${isSkillsOpen ? '' : 'collapsed'}`}
                              type="button"
                            >
                              <h4>Skills</h4>

                            </button>
                          </h4>
                          <div className={`${styles.customAccordionTransition} accordion-collapse collapse ${isSkillsOpen ? 'show' : ''}`}>
                            <div className="accordion-body">
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
                    <div className={styles.featsContainer}>
                      <div className={`accordion ${styles.customAccordion}`}>
                        <div className="accordion-item">
                          <h4 className="accordion-header">
                            <button
                              onClick={() => setFeatsOpen(!isFeatsOpen)}
                              className={`accordion-button ${isFeatsOpen ? '' : 'collapsed'}`}
                              type="button"
                            >
                              <h4>Feats</h4>

                            </button>
                          </h4>
                          <div className={`${styles.customAccordionTransition} accordion-collapse collapse ${isFeatsOpen ? 'show' : ''}`}>
                            <div className="accordion-body">
                              <div className="row align-items-center gx-2">
                                {feats.map((feat) => (
                                  <Feat featTitle={feat} />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.adventureLogContainer}>
                      <div className={`accordion ${styles.customAccordion}`}>
                        <div className="accordion-item">
                          <h4 className="accordion-header">
                            <button
                              onClick={() => setAdventureLogOpen(!isAdventureLogOpen)}
                              className={`accordion-button ${isAdventureLogOpen ? '' : 'collapsed'}`}
                              type="button"
                            >
                              <h4>Adventure Log</h4>

                            </button>
                          </h4>
                          <div className={`${styles.customAccordionTransition} accordion-collapse collapse ${isAdventureLogOpen ? 'show' : ''}`}>
                            <div className="accordion-body">
                              <ul className="list-group list-group-flush">
                                {adventureLogEntries.map((entry) => (
                                  <AdventureLogEntry entry={entry} />
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
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
}

export default Index;
