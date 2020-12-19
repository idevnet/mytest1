import React, {useState, useEffect} from 'react';
import chroma from 'chroma-js';
import Select from 'react-select';
import axios from 'axios'

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

/////////////
const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
};

const CustomSelect = () => {

const colors = ['#00B8D9', '#0052CC', '#5243AA', '#FF5630', '#FF8B00', '#FFC400', '#36B37E', '#00875A', '#253858', '#666666'];

const initialState = [];
const [allusers, setAllUsers] = useState(initialState);

//Set sve usere u state
useEffect(() => {
  axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
    const responseUsers = res.data;
    const responseEdited = responseUsers.map(i => ({ label: i.username, value: i.name, color: colors[Math.floor(Math.random() * 10)] }))
    setAllUsers(responseEdited);
  });
}, []);

//Set selektovane usere u state
  const [selectedUsers, setSelectedUsers] = useState([]);
  const onChangeInput = (username)=>{
    setSelectedUsers(username);
    
  }
      
      return (<div style={styles.select}>
        <h5>Select Users</h5>
        <Select styles={colourStyles} isMulti={true} options={allusers} onChange={onChangeInput} defaultValue={[allusers[1], allusers[2]]} />
    </div>)
}

export default CustomSelect;

