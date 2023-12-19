import React from 'react';
import './App.css';

import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';

import { Container, Grid } from '@mui/material'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Container>
        <Grid container>
          <Grid item lg={3} md={4} sm={12} xs={12}>
            <Profile/>
          </Grid>
          <Grid item >
            <Header/>
            <Router>
              <Routes>
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/' element={<Resume />} />
              </Routes>
            </Router>
            <Footer/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
