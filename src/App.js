import './App.css';
import {Box, Container, Grid, Paper, Slider, Stack, styled, Switch} from "@mui/material";
import {useRef, useState} from "react";
import {VolumeDown, VolumeUp} from "@mui/icons-material";


const Option = (props) => {

    const [show, setShow] = useState("")

    const handleChange = (e, val) => {
        setShow(val)
        props.changeVolume(val/100)
        setTimeout(function() {
            setShow("")
        }, 3000);
    }

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
            <div><p className="min-h-[24px]" >{show}</p></div>
            <div>
                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                    <VolumeDown />
                    <Slider aria-label="Volume"
                            defaultValue={30}
                        // value={value}
                            onChange={handleChange}
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


const Button = (props) => {

    const[name, setName] = useState(" ")
    const drum = "bg-[#E8A87C] rounded-lg flex items-center justify-center cursor-pointer active:scale-95 "

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            console.log('enter press here! ')
        }
        setName("Heater")
    }


    return(
<>
            <div className="grid grid-cols-3 gap-4 max-w-xl " >
                <div onClick={e => props.hov("Heater 1")}  className={drum} >Q</div>
                <div onClick={e => props.hov("Heater 2")}  className={drum} >W</div>
                <div onClick={e => props.hov("Heater 3")} className={drum} >E</div>
                <div onClick={e => props.hov("Heater 4")} className={drum} >A</div>
                <div onClick={e => props.hov("Clap")} className={drum} >S</div>
                <div onClick={e => props.hov("Open HH")} className={drum} >D</div>
                <div onClick={e => props.hov("Kick n'Hat")} className={drum} >Z</div>
                <div onClick={e => props.hov("Kick")} className={drum} >X</div>
                <div onClick={e => props.hov("Closed HH")} className={drum} >C</div>
            </div>
                <Option
                    name={name}
                    drum={props.drum}
                    changeVolume={props.vol}
                />
</>


)

}


function App() {
    const [drum, setDrum] = useState("coba")
    const [volume, setVolume] = useState(0.3)




    const handleKeyPress = (event) => {
        if(event.key === 'q'){
            setDrum("Heater 1")
            let audio = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3")
            audio.volume = volume
            audio.play()
        } else if (event.key === 'w'){
            setDrum("Heater 2")
        }else if (event.key === 'e'){
            setDrum("Heater 3")

        }else if (event.key === 'a'){
            setDrum("Heater 4")

        }else if (event.key === 's'){
            setDrum("Clap")

        }else if (event.key === 'd'){
            setDrum("HH")

        }else if (event.key === 'z') {
            setDrum("Kick n' Hat")

        }else if (event.key === 'x') {
            setDrum("Kick")

        }else if (event.key === 'c') {
            setDrum("Closed HH")

        }
    }

    const ubahButton = (props) => {
        setDrum(props)
    }

    const changeVolume = (props) => {
        setVolume(props)
    }

  return (
      <div onKeyDown={handleKeyPress}  tabIndex="0" className="App h-screen flex justify-center items-center bg-[#85CDCB]">
          <div className="grid gap-4 max-w-xl w-[600px] bg-[#41B3A3]  p-8 rounded-lg sm:grid-cols-2 grid-cols-1  sm:h-auto h-screen " >
              <Button
                  drum={drum}
                  hov={ubahButton}
                  vol={changeVolume}
              />
          </div>
      </div>

  );
}

export default App;
