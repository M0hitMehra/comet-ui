'use client'
import * as React from 'react';
import { useState } from 'react';

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Input as BaseInput } from '@mui/base/Input';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Link from '@mui/joy/Link';
import { BorderRightRounded } from '@mui/icons-material';
import { useRef } from 'react';
const drawerWidth = 240;

const navItems = ['Login', 'Signup', 'About'];
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: 5,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    
    boxShadow: 24,
   
};
function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(new Array(6).fill(''));
  
    const focusInput = (targetIndex) => {
      const targetInput = inputRefs.current[targetIndex];
      targetInput.focus();
    };
  
    const selectInput = (targetIndex) => {
      const targetInput = inputRefs.current[targetIndex];
      targetInput.select();
    };
  
    const handleKeyDown = (event, currentIndex) => {
        switch (event.key) {
          case 'ArrowUp':
          case 'ArrowDown':
          case ' ':
            event.preventDefault();
            break;
          case 'ArrowLeft':
            event.preventDefault();
            if (currentIndex > 0) {
              focusInput(currentIndex - 1);
              selectInput(currentIndex - 1);
            }
            break;
          case 'ArrowRight':
            event.preventDefault();
            if (currentIndex < length - 1) {
              focusInput(currentIndex + 1);
              selectInput(currentIndex + 1);
            }
            break;
          case 'Delete':
            event.preventDefault();
            onChange((prevOtp) => {
              const otp =
                prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
              return otp;
            });
    
            break;
          case 'Backspace':
            event.preventDefault();
            if (currentIndex > 0) {
              focusInput(currentIndex - 1);
              selectInput(currentIndex - 1);
            }
    
            onChange((prevOtp) => {
              const otp =
                prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
              return otp;
            });
            break;
    
          default:
            break;
        }
      };
    
      const handleChange = (event, currentIndex) => {
        const currentValue = event.target.value;
        let indexToEnter = 0;
    
        while (indexToEnter <= currentIndex) {
          if (inputRefs.current[indexToEnter].value && indexToEnter < currentIndex) {
            indexToEnter += 1;
          } else {
            break;
          }
        }
        const otpArray = [...value]; // Create a new array from the current value
        otpArray[indexToEnter] = currentValue[currentValue.length - 1];
        setValue(otpArray); // Update the value state
        console.log(otpArray.join(''));
        if (currentValue !== '') {
          if (currentIndex < length - 1) {
            focusInput(currentIndex + 1);
          }
        }
      };
    
      const handleClick = (event, currentIndex) => {
        selectInput(currentIndex);
      };
    
      const handlePaste = (event, currentIndex) => {
        event.preventDefault();
        const clipboardData = event.clipboardData;
    
        // Check if there is text data in the clipboard
        if (clipboardData.types.includes('text/plain')) {
          let pastedText = clipboardData.getData('text/plain');
          pastedText = pastedText.substring(0, length).trim();
          let indexToEnter = 0;
    
          while (indexToEnter <= currentIndex) {
            if (inputRefs.current[indexToEnter].value && indexToEnter < currentIndex) {
              indexToEnter += 1;
            } else {
              break;
            }
          }
    
          const otpArray = value.split('');
    
          for (let i = indexToEnter; i < length; i += 1) {
            const lastValue = pastedText[i - indexToEnter] ?? ' ';
            otpArray[i] = lastValue;
          }
    
          onChange(otpArray.join(''));
        }
      };
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const length = 6;
    const onChange = (otp) => console.log(`OTP changed to: ${otp}`);
    const separator = <span>-</span>;
    const inputRefs = useRef(new Array(length).fill(null));
    return (
        <React.Fragment>
            <Button onClick={handleOpen}>Sign up</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style,padding:5, }}>
                    <h2 id="child-modal-title " className='text-black'>OTP</h2>




                    <p id="child-modal-description" className='text-black' >
                        Enter Otp
                    </p>



                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' ,color:"black",marginBottom:4 }}>
      {new Array(6).fill(null).map((_, index) => (
        <React.Fragment key={index}>
          <BaseInput
            slots={{
              input: InputElement,
            }}
            aria-label={`Digit ${index + 1} of OTP`}
            slotProps={{
              input: {
                ref: (ele) => {
                  inputRefs.current[index] = ele;
                },
                onKeyDown: (event) => handleKeyDown(event, index),
                onChange: (event) => handleChange(event, index),
                onClick: (event) => handleClick(event, index),
                onPaste: (event) => handlePaste(event, index),
                value: value[index] ?? '',
              },
            }}
          />
          {index === length - 1 ? null : separator}
        </React.Fragment>
      ))}
    </Box>
                    
                    <Button onClick={handleClose}>Submit</Button>
                </Box>
            </Modal>
        </React.Fragment>
    );
}
function DrawerAppBar(props) {

  






    const [currbutton,setcurrbutton]=useState("")
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography  variant="h6" sx={{ my: 2 }}>
                Omify
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}  >
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar className='bg-slate-800' component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <h1>Menue</h1>
                    </IconButton>
                    <Typography
                    className='text-white'
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Omify
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#fff' }} onClick={()=>{
                                setcurrbutton(item);
                                handleOpen()
                            }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            
            <div className=' bg-white h-screen w-screen flex justify-center items-center'
            style={{
                backgroundImage: `url('https://img.freepik.com/free-vector/watercolor-galaxy-background_23-2149225176.jpg?w=1380&t=st=1719050006~exp=1719050606~hmac=cccf9a4f729a8fdac95244b502b84eb9759bee735deff587aec915035631d845')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
                <div className='  text-black'>
                    hello
                </div>
            </div>






            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, }}>
                    {/* <h2 id="parent-modal-title" className='text-black'>{currbutton}</h2> */}
                    {/* <p id="parent-modal-description" className='text-black'>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.


                    </p> */}

                    {currbutton=="Login"&&
                    
                    <main>
                  
                    <CssBaseline />
                    <Sheet
                      sx={{
                        width: 300,
                        mx: 'auto', // margin left & right
                       
                        py: 3, // padding top & bottom
                        px: 2, // padding left & right
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        borderRadius: 'sm',
                        boxShadow: 'md',
                      }}
                      variant="outlined"
                    >
                      <div>
                        <Typography level="h4" component="h1">
                          <b>Welcome!</b>
                        </Typography>
                        <Typography level="body-sm">Sign in to continue.</Typography>
                      </div>
                      <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input
                          // html input attribute
                          name="email"
                          type="email"
                          placeholder="johndoe@email.com"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input
                          // html input attribute
                          name="password"
                          type="password"
                          placeholder="password"
                        />
                      </FormControl>
                      <Button className='py-4' >Log in</Button>
                      <Typography
                        endDecorator={<h2 className=' text-blue-400 cursor-pointer' onClick={()=>{
                            handleClose()
                            setcurrbutton("Signup")
                            handleOpen()
                        }}>Sign up </h2>
                        }
                        fontSize="sm"
                        sx={{ alignSelf: 'center' }}
                      >
                        Don&apos;t have an account?
                      </Typography>
                    </Sheet>
                  </main>
                    }


{currbutton=="Signup"&&
                    
                    <main>
                  
                    <CssBaseline />
                    <Sheet
                      sx={{
                        width: 300,
                        mx: 'auto', // margin left & right
                       
                        py: 3, // padding top & bottom
                        px: 2, // padding left & right
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        borderRadius: 'sm',
                        boxShadow: 'md',
                      }}
                      variant="outlined"
                    >
                      <div>
                        <Typography level="h4" component="h1">
                          <b>Welcome!</b>
                        </Typography>
                        <Typography level="body-sm">Sign up to continue.</Typography>
                      </div>
                      <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input
                          // html input attribute
                          name="email"
                          type="email"
                          placeholder="johndoe@email.com"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input
                          // html input attribute
                          name="password"
                          type="password"
                          placeholder="password"
                        />
                      </FormControl>
                      <Button sx={{ mt: 1 /* margin top */ }}><ChildModal/></Button>
                      <Typography
                        endDecorator={<h2 className=' text-blue-400 cursor-pointer' onClick={()=>{
                            handleClose()
                            setcurrbutton("Login")
                            handleOpen()
                        }}>Sign in </h2>
                        }
                        fontSize="sm"
                        sx={{ alignSelf: 'center' }}
                      >
                      Already  have an account?
                      </Typography>
                    </Sheet>
                  </main>
                    }




                    {/* <ChildModal /> */}
                </Box>
            </Modal>
        </Box>

    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const blue = {
    100: '#DAECFF',
    200: '#80BFFF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
  };
  
  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };
  import {  styled } from '@mui/system';
  const InputElement = styled('input')(
    ({ theme }) => `
    width: 40px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 0px;
    border-radius: 8px;
    text-align: center;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 4px ${
      theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
    };
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );
export default DrawerAppBar;