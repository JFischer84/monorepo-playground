import styles from './index.module.scss';
import {Button, Card, CardActions, CardContent, FormControlLabel, FormGroup, Switch, Typography} from '@mui/material';
import CasinoIcon from '@mui/icons-material/Casino';
import React, {useState} from 'react';
import {subjects, animalMetaphors, sportMetaphors, intros, goodByePhrases, typicalPhrases, salutations} from './phrases';

export function Index() {

  const [subject, setSubject] = useState('Betreff');
  const [subjectChecked, setSubjectChecked] = useState(false);
  const [animalMetaphor, setAnimalMetaphor] = useState('');
  const [amChecked, setAmChecked] = useState(false);
  const [sportMetaphor, setSportMetaphor] = useState('');
  const [smChecked, setSmChecked] = useState(false);
  const [intro, setIntro] = useState('');
  const [introChecked, setIntroChecked] = useState(false);
  const [goodByePhrase, setGoodByePhrase] = useState('');
  const [gBPChecked, setGBPChecked] = useState(false);
  const [typicalPhrase, setTypicalPhrase] = useState('');
  const [tPChecked, setTPChecked] = useState(false);
  const [salutation, setSalutation] = useState('');
  const [salutationChecked, setSalutationChecked] = useState(false);

  const getRandomNumber = (max: number): number => {
    return Math.floor(Math.random() * max);
  };

  const randomize = (isChecked: boolean, phrases: string[], setter: Function): void => {
    if (isChecked) {
      setter(phrases[getRandomNumber(phrases.length - 1)]);
    }
  };

  const copyText = (): void => {
    navigator.clipboard.writeText(`${salutation}\n${intro}\n${animalMetaphor}\n${sportMetaphor}\n${typicalPhrase}\n${goodByePhrase}\n`);
  };

  const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('jojojo');
    if (!subjectChecked) {
      setSubject(subjects[getRandomNumber(subjects.length - 1)]);
    } else {
      setSubject('Betreff');
    }
    setSubjectChecked(event.target.checked);
  };

  const handleSalutationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!salutationChecked) {
      setSalutation(salutations[getRandomNumber(salutations.length - 1)]);
    } else {
      setSalutation('');
    }
    setSalutationChecked(event.target.checked);
  };

  const handleIntroChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!introChecked) {
      setIntro(intros[getRandomNumber(intros.length - 1)]);
    } else {
      setIntro('');
    }
    setIntroChecked(event.target.checked);
  };

  const handleAmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!amChecked) {
      setAnimalMetaphor(animalMetaphors[getRandomNumber(animalMetaphors.length - 1)]);
    } else {
      setAnimalMetaphor('');
    }
    setAmChecked(event.target.checked);
  };

  const handleSmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!smChecked) {
      setSportMetaphor(sportMetaphors[getRandomNumber(sportMetaphors.length - 1)]);
    } else {
      setSportMetaphor('');
    }
    setSmChecked(event.target.checked);
  };

  const handleTPChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!tPChecked) {
      setTypicalPhrase(typicalPhrases[getRandomNumber(typicalPhrases.length - 1)]);
    } else {
      setTypicalPhrase('');
    }
    setTPChecked(event.target.checked);
  };

  const handleGBPChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!gBPChecked) {
      setGoodByePhrase(goodByePhrases[getRandomNumber(goodByePhrases.length - 1)]);
    } else {
      setGoodByePhrase('');
    }
    setGBPChecked(event.target.checked);
  };

  return (
    <>
      <h1>Good Bye Mail Generator!</h1>
      <div className={styles.mainContainer} >
      <Card className={styles.mainCard} variant="outlined">
        <CardContent>
          <Typography color="text.secondary" gutterBottom>
            {subject}
          </Typography>
          <Typography variant="body2">
            {salutation}
            <br />
            {intro}
            <br />
            {animalMetaphor}
            <br />
            {sportMetaphor}
            <br />
            {typicalPhrase}
            <br />
            {goodByePhrase}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => copyText()} size="small">Copy</Button>
        </CardActions>
      </Card>
        <div>
          <FormGroup>
          <FormControlLabel
            control={
            <Switch checked={subjectChecked} onChange={handleSubjectChange} inputProps={{ 'aria-label': 'controlled' }} />
            }
            label="Setze Betreff"
          />
            <Button className={styles.randomizeButton} size="small" variant="contained" onClick={() => randomize(subjectChecked, subjects, setSubject)}><CasinoIcon /></Button>

            <FormControlLabel
              control={
                <Switch checked={salutationChecked} onChange={handleSalutationChange} inputProps={{ 'aria-label': 'controlled' }} />
              }
              label="Setze Anrede"
            />
            <Button className={styles.randomizeButton} size="small" variant="contained" onClick={() => randomize(salutationChecked, salutations, setSalutation)}><CasinoIcon /></Button>
            <FormControlLabel
              control={
                <Switch checked={introChecked} onChange={handleIntroChange} inputProps={{ 'aria-label': 'controlled' }} />
              }
              label="Setze Eingangsphrase"
            />
            <Button className={styles.randomizeButton} size="small" variant="contained" onClick={() => randomize(introChecked, intros, setIntro)}><CasinoIcon /></Button>

            <FormControlLabel
              control={
                <Switch checked={amChecked} onChange={handleAmChange} inputProps={{ 'aria-label': 'controlled' }} />
              }
              label="Setze Tier-Metapher"
            />
            <Button className={styles.randomizeButton} size="small" variant="contained" onClick={() => randomize(amChecked, animalMetaphors, setAnimalMetaphor)}><CasinoIcon /></Button>

            <FormControlLabel
              control={
                <Switch checked={smChecked} onChange={handleSmChange} inputProps={{ 'aria-label': 'controlled' }} />
              }
              label="Setze Sport-Metapher"
            />
            <Button className={styles.randomizeButton} size="small" variant="contained" onClick={() => randomize(smChecked, sportMetaphors, setSportMetaphor)}><CasinoIcon /></Button>

            <FormControlLabel
              control={
                <Switch checked={tPChecked} onChange={handleTPChange} inputProps={{ 'aria-label': 'controlled' }} />
              }
              label="Setze typische Phrase"
            />
            <Button className={styles.randomizeButton} size="small" variant="contained" onClick={() => randomize(tPChecked, typicalPhrases, setTypicalPhrase)}><CasinoIcon /></Button>

            <FormControlLabel
              control={
                <Switch checked={gBPChecked} onChange={handleGBPChange} inputProps={{ 'aria-label': 'controlled' }} />
              }
              label="Setze Abschiedsfloskel"
            />
            <Button className={styles.randomizeButton} size="small" variant="contained" onClick={() => randomize(gBPChecked, goodByePhrases, setGoodByePhrase)}><CasinoIcon /></Button>
        </FormGroup>
        </div>
      </div>
    </>

  );
}

export default Index;
