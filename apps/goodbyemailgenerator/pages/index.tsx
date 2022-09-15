import styles from './index.module.scss';
import {Button, Card, CardActions, CardContent, FormControlLabel, FormGroup, Switch, Typography} from '@mui/material';
import React, {useState} from 'react';

export function Index() {

  const [subject, setSubject] = useState('Betreff');
  const [subjectChecked, setsubjectChecked] = useState(false);
  const [text, setText] = useState('Hier entsteht deine Abschiedsmail!')
  const [textChecked, setTextChecked] = useState(false);

  const copyText = () => {
    navigator.clipboard.writeText(text);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!textChecked) {
      setText('Liebe Kolegen, ich hau jetzt ab!');
    } else {
      setText('Hier entsteht deine Abschiedsmail!');
    }
    setTextChecked(event.target.checked);
  };

  const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!subjectChecked) {
      setSubject('In Hamburg sagt man Tschüss!');
    } else {
      setSubject('Betreff');
    }
    setsubjectChecked(event.target.checked);
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
            {text}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => copyText()} size="small">Copy</Button>
        </CardActions>
      </Card>
        <div>
          <FormGroup>
          <FormControlLabel control={<Switch checked={subjectChecked} onChange={handleSubjectChange} inputProps={{ 'aria-label': 'controlled' }} />} label="Setze Betreff" />
          <FormControlLabel control={<Switch checked={textChecked} onChange={handleTextChange} inputProps={{ 'aria-label': 'controlled' }} />} label="Setze Text" />
        </FormGroup>
        </div>
      </div>
    </>

  );
}

export default Index;
