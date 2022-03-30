import React from 'react';
import Image from 'next/image';
import {Accordion} from '@monorepo-playground/shared-components';
import styles from './index.module.scss';
import {ProgressBar} from '../ProgressBar';
import {Fact} from '../Fact';
import {Feat} from '../Feat';
import {AdventureLogEntry} from '../AdventureLogEntry';
import adventureLogEntries from '../adventureLogEntries';

interface CvProps {
  cvData: {
    name: string,
    classAndLevel: string,
    background: string,
    alignment: string,
    species: string
  },
  feats: string[]
}

export const Index = ({cvData, feats}: CvProps) => {
  const {name, classAndLevel, background, alignment, species} = cvData;

  const openLink = (link: string) => {
    window.open(link);
  };

  return (
    <div className={styles.cardContent}>
      <div className={styles.uperContainer}>
        <div className={styles.imageContainer}>
          <Image className={styles.profilePicture} width={256} height={256} src="/profile_pic2.jpg" alt="profile picture" />
        </div>
        <h3 className="card-title">{name}</h3>
        <div className={styles.factSection}>
          <div className={styles.factSubContainer}>
            <Fact factTitle={classAndLevel} description="Class & Level" />
            <Fact factTitle={background} description="Background" />
          </div>
          <div className={styles.factSubContainer}>
            <Fact factTitle={alignment} description="Alignment" />
            <Fact factTitle={species} description="Species" />
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
  );
};

export default Index;
