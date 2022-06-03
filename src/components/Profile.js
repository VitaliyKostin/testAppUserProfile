import { Container, Grid, Paper, Typography, Stack, Button, TextField, CardMedia } from '@mui/material';
import profileAvatar from '../images/profile.png';
import { Link } from 'react-router-dom';

export default function ProfileEdit() {
  return (
    <Container
      maxWidth='sm'
      sx={ { border: '1px solid #d1d1d1', borderRadius: '4px', marginTop: '70px' } }>
      <Grid container mt={ 4 } >
        <Grid item md={ 12 } lg={ 12 }>
          <Typography noWrap gutterBottom variant='h4' component='h1' sx={ { fontWeight: 700 } }>Your profile</Typography>
        </Grid>

        <Grid container columnSpacing={ 2 }>
          <Grid item md={ 4 } lg={ 4 }>
            <Typography sx={ { fontWeight: 700 } }>Profile photo</Typography>
            <CardMedia sx={ { width: '160px', height: '160px', borderRadius: '5px' } } component={ 'img' } src={ profileAvatar }></CardMedia>
          </Grid>

          <Grid item md={ 8 } lg={ 8 } sm={ 8 } mt={ 3 }>
            <Typography sx={ { fontWeight: 700 } }>Full name</Typography>
            <TextField size='small' fullWidth label="Your full name" variant="outlined" />
            <Typography sx={ { fontWeight: 700 } }>Email</Typography>
            <TextField size='small' fullWidth label="Your email" variant="outlined" />
          </Grid>

        </Grid>


        <Grid item md={ 12 } lg={ 12 } sm={ 12 }>
          <Typography sx={ { fontWeight: 700 } }>Address</Typography>
          <TextField size='small' fullWidth variant="outlined" />
          <Typography sx={ { fontWeight: 700 } }>Country</Typography>
          <TextField size='small' fullWidth variant="outlined" />
        </Grid>
        <Grid container direction={ 'row-reverse' }>
          <Grid item mt={ 2 } md={ 12 } lg={ 12 } sm={ 12 } mb={ 2 }>
            <Stack spacing={ 2 } direction="row-reverse" >
              <Button size='small' sx={ { backgroundColor: '#20b3b3' } } variant="contained">
                <Link to='/profile-edit'
                  style={ { color: '#fff', textDecoration: 'none' } }
                >
                  Change profile
                </Link>
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Container >
  )
}