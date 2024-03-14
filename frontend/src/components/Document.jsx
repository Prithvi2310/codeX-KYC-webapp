import React from 'react';
import { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
// import idcard from '../id_card.png';
import * as Icon from 'react-feather';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';

import { Root, Preview, GlobalStyle } from '../styles';
// import './style1.css';
//import { Camera } from '../camera_bk';
// import './style.scss';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    select: {
        '&:before': {
            borderColor: 'Gray',
        },
        color: 'Green',
    },
    icon: {
        fill: 'Gray',
    },
}));

export default function Document(props) {
    // const [isBkCameraOpen, setIsBkCameraOpen] = useState(false);
    //const [cardImage, setCardImage] = useState();
    //const token = localStorage.getItem('token');
    const [popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);
    const classes = useStyles();
    //let loggedin = true;
    {/*if (token == null) {
        loggedin = false;
    }*/}
    const idwhich = localStorage.getItem('whichid');
    if (idwhich) {
        console.log(idwhich);
    }

    const id_f = localStorage.getItem('imgId1');
    const id_b = localStorage.getItem('imgId2');
    //const [isFull, setIsFull] = useState(false);
    //  const who1 = JSON.parse(localStorage.getItem('data'));
    const [whichId, setWhichId] = useState(idwhich ? idwhich : '');
    {/*function handleChange_close() {
        //setIsBkCameraOpen(false);
        setCardImage(undefined);
        setIsFull(false);
    } */}
    // setWhichId(idwhich);

    const [formData, setFormData] = useState({
        panCard: '',
        aadharCard: '',
        passport: '',
        photo: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        localStorage.setItem('whichid', whichId);
    });
        // console.log(whichId);
        return (
            <Fragment>
                <div style={{ marginTop: 20, marginLeft: 130 }}>
                    <span>
                        <Icon.Info id="Popover1" type="button" />
                        Tips
                    </span>
                    <Popover
                        placement="bottom"
                        isOpen={popoverOpen}
                        target="Popover1"
                        toggle={toggle}
                    >
                        <PopoverHeader>Id Tips</PopoverHeader>
                        <PopoverBody>
                            1. Place your Id in the given overlay.<br></br> 2.
                            Don't worry about extra space, It would be cropped
                            <br></br>3. Turn off the Auto-Rotate feature of your
                            mobile
                            <br></br> 4. You can always retake it.
                        </PopoverBody>
                    </Popover>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <h1
                        style={{
                            textAlign: 'center',
                            color: 'green',
                            marginLeft: 60,
                            marginTop: 20,
                        }}
                    >
                        Upload ID Card
                    </h1>
                    <h4 style={{ color: 'white', marginLeft: 90 }}>
                        Please upload a Government ID for KYC verification
                    </h4>
                    <div
                        style={{
                            fontSize: 16,
                            color: 'Gray',
                            textAlign: 'center',
                            marginLeft: 85,
                        }}
                    >
                        Your Name and Photo should be clearly visible
                    </div>
                </div>
                <div
                    className="whichid"
                    style={{ marginLeft: 150, marginTop: 0 }}
                >
                    <FormControl className={classes.formControl}>
                        <InputLabel
                            id="demo-simple-select-autowidth-label"
                            style={{ marginLeft: -20, color: 'white' }}
                        >
                            Select Id
                        </InputLabel>
                        <Select
                            style={{ marginLeft: -20 }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={whichId}
                            onChange={(e) => {
                                setWhichId(e.target.value);
                                localStorage.removeItem('imgId2');
                                localStorage.removeItem('imgId1');
                            }}
                            className={classes.select}
                            inputProps={{
                                classes: {
                                    icon: classes.icon,
                                },
                            }}
                        >
                            <MenuItem value="Aadhar">Aadhar Card</MenuItem>
                            <MenuItem value="Driving License">
                                Driving License
                            </MenuItem>
                            <MenuItem value="Voter Id">Voter Id</MenuItem>
                            <MenuItem value="Passport">Passport</MenuItem>
                            <MenuItem value="PAN Card">PAN Card</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div>
                    <input type="file" name="photo" accept="image/*" onChange={handleChange} />
                </div>

                <a href="/capture" className="btn">Capture</a>
                
            </Fragment>
        );
}