import { Label } from '@mui/icons-material';
import { Container, Grid, Input, Typography, Stack, Button, TextField, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import profileAvatar from '../images/profile.png';

export default function ProfileEdit() {

  const chooseImageHandler = () => {
    <input type='file' />
  }

  return (
    <Container
      maxWidth='sm'
      sx={ { minHeight: '75vh', border: '1px solid #d1d1d1', borderRadius: '4px', marginTop: '70px' } }>
      <Grid container mt={ 4 } >
        <Grid item md={ 12 } lg={ 12 }>
          <Typography noWrap gutterBottom variant='h4' component='h1' sx={ { fontWeight: 700 } }>Your profile</Typography>
        </Grid>

        <Grid container columnSpacing={ 2 }>
          <Grid item md={ 4 } lg={ 4 }>
            <Typography sx={ { fontWeight: 700 } }>Profile photo</Typography>
            <CardMedia sx={ { width: '160px', height: '160px', borderRadius: '5px' } } component={ 'img' } src={ profileAvatar }></CardMedia>
          </Grid>
          <Grid item md={ 7 } lg={ 7 } alignSelf={ 'center' }>
            <Typography>Upload your photo</Typography>
            <Typography sx={ { fontSize: '14px', color: '#949494' } } gutterBottom>Your photo should be in PNG or JPG format</Typography>
            <Stack spacing={ 2 } direction="row" mt={ 2 } >

              <label htmlFor='upload-photo'>
                <input
                  id='upload-photo'
                  name='upload-photo'
                  style={ { display: 'none' } }
                  type='file'>
                </input>
                <Button component={ 'span' } size='small' sx={ { color: '#20b3b3', borderColor: '#20b3b3' } }
                  variant="outlined"

                  onClick={ () => chooseImageHandler }>Choose image</Button>
              </label>

              {/* <Button size='small' sx={ { color: '#20b3b3', borderColor: '#20b3b3' } } variant="outlined" onClick={ () => chooseImageHandler }>Choose image</Button> */ }

              <Button size='small' sx={ { color: '#949494' } } variant="text">Remove</Button>
            </Stack>
          </Grid>
        </Grid>

        <Grid item md={ 12 } lg={ 12 } sm={ 12 } mt={ 3 }>
          <Typography sx={ { fontWeight: 700 } }>Full name</Typography>
          <TextField size='small' fullWidth label="Your full name" variant="outlined" />
          <Typography sx={ { fontWeight: 700 } }>Email</Typography>
          <TextField size='small' fullWidth label="Your email" variant="outlined" />
        </Grid>
        <Grid item md={ 10 } lg={ 10 } sm={ 10 }>
          <Typography sx={ { fontWeight: 700 } }>Address</Typography>
          <TextField size='small' fullWidth variant="outlined" />
          <Typography sx={ { fontWeight: 700 } }>Country</Typography>
          <TextField size='small' fullWidth variant="outlined" />
        </Grid>
        <Grid container direction={ 'row-reverse' }>
          <Grid item mt={ 2 } mb={ 3 } md={ 12 } lg={ 12 } sm={ 12 }>
            <Stack spacing={ 2 } direction="row-reverse" >
              <Button size='small'
                sx={ { backgroundColor: '#20b3b3' } }

                variant="contained">
                <Link to="/profile"
                  style={ { color: '#fff', textDecoration: 'none' } }
                >Save profile</Link>

              </Button>
              <Button size='small' sx={ { color: '#949494' } } variant="text">Cancel</Button>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Container >
  )
}