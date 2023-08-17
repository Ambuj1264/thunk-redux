import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector,useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/action';
import { Dropdown } from 'primereact/dropdown';
export default function Contact() {
  const [state,setState]= React.useState("")
  const [value,setValue]= React.useState("")
  const [selectedCity, setSelectedCity] = React.useState(null);
  const dispatch= useDispatch()
  const product =useSelector(state=>state.product.product)

      React.useEffect(()=>{
          dispatch(fetchProducts())
      },[dispatch])
  const top100Films=React.useMemo(()=>product,[product])


  const submitData=(e)=>{
    // e.preventDefault();
    console.log(1,state,2,value,"dataddd");
  }
  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];
  return (
    <>
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        onChange={(e,value)=> setState(value)}
        options={top100Films?.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="freeSolo"  />}
      />
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        onChange={(e,value)=> setValue(value)}
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          
          />
        )}
      />
     <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
          placeholder="Select a City" className="w-full md:w-14rem" />
              <button className="btn btn-primary" onClick={()=>submitData()}> button </button>
    </Stack>
    {/* <div className="card flex justify-content-center">
     
  </div> */}
  
      </>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

