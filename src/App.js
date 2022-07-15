import './App.css';
import {Box, Container, Grid, Paper, Slider, Stack, styled, Switch} from "@mui/material";
import {useState} from "react";
import {VolumeDown, VolumeUp} from "@mui/icons-material";


const Option = (props) => {
    return(
        <div  className="grid grid-cols-1 gap-4 max-w-xl ">
            <div>
                <p>Power</p>

                <Switch
                    // checked={checked}
                    // onChange={handleChange}
                    // inputProps={{ 'aria-label': 'controlled' }}
                />
            </div>
            <div>{props.name} </div>
            <div>
                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                    <VolumeDown />
                    <Slider aria-label="Volume"
                            // value={value}
                            // onChange={handleChange}
                    />
                    <VolumeUp />
                </Stack>
            </div>
            <div>
                <Switch
                    // checked={checked}
                    // onChange={handleChange}
                    // inputProps={{ 'aria-label': 'controlled' }}
                />
                <p>Bank</p>
            </div>
        </div>
    )
}


const Button = () => {

    const[name, setName] = useState(" ")

    return(
<>
            <div className="grid grid-cols-3 gap-4 max-w-xl " >
                <div onClick={() => setName("Heater")} className="bg-fuchsia-500" >1</div>
                <div onClick={() => setName("Heater 2")} className="bg-fuchsia-500">2</div>
                <div onClick={() => setName("Heater 3")} className="bg-fuchsia-500">3</div>
                <div onClick={() => setName("Heater 4")} className="bg-fuchsia-500">4</div>
                <div onClick={() => setName("Clap")} className="bg-fuchsia-500">5</div>
                <div onClick={() => setName("Open HH")} className="bg-fuchsia-500">6</div>
                <div onClick={() => setName("Kick n'Hat")} className="bg-fuchsia-500">7</div>
                <div onClick={() => setName("Kick")} className="bg-fuchsia-500">8</div>
                <div onClick={() => setName("Closed HH")} className="bg-fuchsia-500">9</div>
            </div>
                <Option name={name} />
</>


)

}


function App() {
  return (
      <div className="App h-screen flex justify-center items-center ">
          <div className="grid grid-cols-2 gap-4 max-w-xl w-96 " >
              <Button/>
          </div>
      </div>

  );
}

export default App;
