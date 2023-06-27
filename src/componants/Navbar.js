import React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import CustomAccordion from "./Accordion/CustomAccordion";
import { Accordion } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Phone from "./PhoneScreen/Phone";
import SearchIcon from "@mui/icons-material/Search";

// import tailwindConfig from "../../tailwind.config";
import "./navbar.css";

export default function () {
  return (
    <>
      <div>
        <div className="row">
          <div className="col-4 bg-primary">sidebar</div>
          <div className="col-8">
            <div className="row">
              <div className="col-8">
                <FormControl fullWidth sx={{ m: 3 }}>
                  <div className="flex d-flex justify-content-center align-items-center ">
                    <i className="bi bi-search width-30px color_black"></i>
                    <OutlinedInput
                      className="border_none"
                      id="outlined-adornment-amount"
                      startAdornment={
                        <InputAdornment position="start">
                          {/* <i className=" bi bi-search"></i> */}
                          <SearchIcon></SearchIcon>
                        </InputAdornment>
                      }
                      label="Amount"
                    />
                  </div>
                </FormControl>
              </div>
              <div className="col-4">
                <div className="bell">
                  {/* <i className="bi bi-bell"></i> */}
                  {/* <svg src="bell.svg"></svg> */}
                  <NotificationsOutlinedIcon></NotificationsOutlinedIcon>
                </div>
                <div className="two">
                  <div className="hr-parent">
                    <div className="hr-child">
                      <h5 className="hr-child-h5 margin-top-2px">HR</h5>
                    </div>
                  </div>
                  <div className="HR">
                    <h5>Harshit Raja</h5>
                  </div>
                </div>
                <div>
                  {/* <i className="bi bi-chevron-down"></i> */}
                  <ExpandMoreOutlinedIcon></ExpandMoreOutlinedIcon>
                </div>
              </div>
            </div>
            <hr />
            <div className="Reactangle">
              <h3>chatbot</h3>
            </div>

            <div className="horizontalbox">
              <div className="vertical1 d-flex ">
                {/* <div className="dropdown1 font-family-lato" >
                  Display Personalization <div className="icon"></div>
                </div>
                <div className="dropdown2">
                  Language & Chat<i class="bi bi-chevron-down"></i>
                </div>
                <div className="dropdown3">
                  Email settings<i class="bi bi-chevron-down"></i>
                </div>
                <div className="dropdown4">
                  Admin setting <i class="bi bi-chevron-down"></i>
                </div> */}
                <CustomAccordion></CustomAccordion>

                {/* <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    /> */}
                {/* <Stack spacing={2}>
  <Item>Item 1</Item>
  <Item>Item 2</Item>
  <Item>Item 3</Item>
</Stack> */}
              </div>
              <div className="vertical2">
                {/* <div className="phone_nav d-flex justify-content-between">
                  <div className="right_phone_nav">kashfksh</div>
                  <div className="left_phone_nav"><div className="min-box d-flex align-item-center justify-content-center"><div className="circle"></div><div className="name">John</div></div> <div className="call-icon"></div></div>
                </div>
                <div className="attach-file">
                  <i class="bi bi-paperclip"></i>
                </div>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <div className="flex d-flex justify-content-center align-items-center  margin-top-333px">
                    <i className="bi bi-search width-30px color_black"></i>
                    <OutlinedInput
                      className="border_none"
                      id="outlined-adornment-amount"
                      startAdornment={
                        <InputAdornment position="start">
                          <i className=" bi bi-search"></i>
                        </InputAdornment>
                      }
                      label="Amount"
                    />
                  </div>
                </FormControl>
                <div className="glob">
                  <i class="bi bi-globe"></i>
                </div> */}
                {/* <Accordion></Accordion> */}

                {/* <section style={{backgroundColor: '#eee'}}>
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-6">
              <div className="card" id="chat2">
                <div className="card-header d-flex justify-content-between align-items-center p-3">
                  <h5 className="mb-0">Chat</h5>
                  <button type="button" className="btn btn-primary btn-sm" data-mdb-ripple-color="dark">Let's Chat
                    App</button>
                </div>
                <div className="card-body" data-mdb-perfect-scrollbar="true" style={{position: 'relative', height: '400px'}}>
                  <div className="d-flex flex-row justify-content-start">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp" alt="avatar 1" style={{width: '45px', height: '100%'}} />
                    <div>
                      <p className="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: '#f5f6f7'}}>Hi</p>
                      <p className="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: '#f5f6f7'}}>How are you ...???
                      </p>
                      <p className="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: '#f5f6f7'}}>What are you doing
                        tomorrow? Can we come up a bar?</p>
                      <p className="small ms-3 mb-3 rounded-3 text-muted">23:58</p>
                    </div>
                  </div>
                  <div className="divider d-flex align-items-center mb-4">
                    <p className="text-center mx-3 mb-0" style={{color: '#a2aab7'}}>Today</p>
                  </div>
                  <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                    <div>
                      <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Hiii, I'm good.</p>
                      <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">How are you doing?</p>
                      <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Long time no see! Tomorrow
                        office. will
                        be free on sunday.</p>
                      <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:06</p>
                    </div>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp" alt="avatar 1" style={{width: '45px', height: '100%'}} />
                  </div>
                  <div className="d-flex flex-row justify-content-start mb-4">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp" alt="avatar 1" style={{width: '45px', height: '100%'}} />
                    <div>
                      <p className="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: '#f5f6f7'}}>Okay</p>
                      <p className="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: '#f5f6f7'}}>We will go on
                        Sunday?</p>
                      <p className="small ms-3 mb-3 rounded-3 text-muted">00:07</p>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-end mb-4">
                    <div>
                      <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">That's awesome!</p>
                      <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">I will meet you Sandon Square
                        sharp at
                        10 AM</p>
                      <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Is that okay?</p>
                      <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:09</p>
                    </div>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp" alt="avatar 1" style={{width: '45px', height: '100%'}} />
                  </div>
                  <div className="d-flex flex-row justify-content-start mb-4">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp" alt="avatar 1" style={{width: '45px', height: '100%'}} />
                    <div>
                      <p className="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: '#f5f6f7'}}>Okay i will meet
                        you on
                        Sandon Square</p>
                      <p className="small ms-3 mb-3 rounded-3 text-muted">00:11</p>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-end mb-4">
                    <div>
                      <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Do you have pictures of Matley
                        Marriage?</p>
                      <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:11</p>
                    </div>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp" alt="avatar 1" style={{width: '45px', height: '100%'}} />
                  </div>
                  <div className="d-flex flex-row justify-content-start mb-4">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp" alt="avatar 1" style={{width: '45px', height: '100%'}} />
                    <div>
                      <p className="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: '#f5f6f7'}}>Sorry I don't
                        have. i
                        changed my phone.</p>
                      <p className="small ms-3 mb-3 rounded-3 text-muted">00:13</p>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-end">
                    <div>
                      <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Okay then see you on sunday!!
                      </p>
                      <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:15</p>
                    </div>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp" alt="avatar 1" style={{width: '45px', height: '100%'}} />
                  </div>
                </div>
                <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp" alt="avatar 3" style={{width: '40px', height: '100%'}} />
                  <input type="text" className="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Type message" />
                  <a className="ms-1 text-muted" href="#!"><i className="fas fa-paperclip" /></a>
                  <a className="ms-3 text-muted" href="#!"><i className="fas fa-smile" /></a>
                  <a className="ms-3" href="#!"><i className="fas fa-paper-plane" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
                  </section> */}
                   {/* <Phone></Phone> */}
              </div>
            </div>
            <div
              className="endbox d-flex align-items-flex-end;
                        justify-content-end flex-direction-coloumn"
            >
              <div className="chatting-logo">
                <div className="chatting-style-logo"></div>
              </div>
              <div
                className="last-min-container d-flex h-28px;
                        w-120px"
              >
                <div className="flag"></div>
                <div className="country"></div>
                <div className="company d-flex align-item-flex-end">
                  by Glocali.se
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}
