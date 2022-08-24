import * as React from 'react';
import './Formularios.css'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';





export default function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  
  return (
    <section>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid item xs={12}>
              
                <h2>Customer information</h2>
                <br/>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="nit"
                  label="NIT"
                  name="nit"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>


              <Grid item xs={12}>
                <br />
                <h2>Technical Report</h2>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="brand"
                  label="Brand"
                  name="brand"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="model"
                  label="Model"
                  name="model"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="serial"
                  label="Serial"
                  name="serial"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid
              item xs={12}
              width= "25ch"
              >
                <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Equipment Exterior Status"
                multiline
                rows={4}
                />
              </Grid>
              <Grid
              item xs={12}
              width= "25ch"
              >
                <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Customer Reported Problem"
                multiline
                rows={4}
                />
              </Grid>
              <Grid
              item xs={12}
              width= "25ch"
              >
                <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Technical report"
                multiline
                rows={4}
                />
              </Grid>

              <Grid item xs={12}>
                <br />
                <h2>spare parts</h2>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="details"
                  label="Details"
                  name="details"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="modelspare"
                  label="Serial"
                  name="serial"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="serialspare"
                  label="Serial"
                  name="serial"
                  autoComplete="family-name"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send
            </Button>
            
          </Box>
        </Box>
        
      </Container>
    </section>
  );
}