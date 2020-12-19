import React, {useState, useEffect} from 'react';
import './App.css';
import CustomSelect from './CustomSelect';

const styles={
  app:{
    backgroundColor:'rgba(0,0,0,0.1)',
    justifyItems:'center',
    alignItems:'center',
    display:'grid',
    height:'100vh',
    fontFamily:'Arial',
    color:'rgba(0,0,100,1)',
    gridTemplateColumns:'1fr',
    fontSize:25
  },
  select:{
    width:'100%',
    maxWidth:600,
    
  }
}



const App = () => {
 

  return (
    <div style={styles.app}>
      <CustomSelect />
    </div>
  );
 
}

export default App;
