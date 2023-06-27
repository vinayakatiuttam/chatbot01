import React from "react";
import { Accordion } from "@mui/material";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../Accordion/CustomAccordion.css";
import Button from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import TuneIcon from "@mui/icons-material/Tune";
import CssIcon from "@mui/icons-material/Css";

// export default function ControlledAccordions() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };}

export default function CustomAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <div className="main-accordion">
        <div className="accordion-1">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Display Personalization
              </Typography>
              {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <h6>Theme</h6>
                <div className="CustomButton d-flex">
                  <div className="btn1" onClick={handleChange}>
                    <div className="btn-icon">
                      <DarkModeIcon></DarkModeIcon>
                    </div>
                    <div className="btn-name">Dark</div>
                  </div>
                  <div className="btn1">
                    <div className="btn-icon">
                      <WbSunnyIcon></WbSunnyIcon>
                    </div>
                    <div className="btn-name">Light</div>
                  </div>
                  <div className="btn1">
                    <div className="btn-icon">
                      <TuneIcon></TuneIcon>
                    </div>
                    <div className="btn-name">Custom</div>
                  </div>
                  <div className="btn1">
                    <div className="btn-icon">
                      <CssIcon></CssIcon>
                    </div>
                    <div className="btn-name">CSS</div>
                  </div>
                </div>
                <div className="custom-container d-flex mt-2 text-white">
                  <div className="text-style px-2 d-flex bg-white">
                    <div className="text-style-font-btn align-item-center">
                     
                      <select
                        id="countries"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2 d-flex bg-white "
                      >
                        <div className="text">Text style</div>
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>
                    <div className="text-style-font-btn align-item-center">
                      
                      <select
                        id="countries"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2 d-flex bg-white "
                      >
                        <option selected>dark</option>
                        <option value="US">light</option>
                        <option value="CA">grey</option>
                        <option value="FR">red</option>
                        <option value="DE">aqua</option>
                      </select>
                    </div>
                    <div className="text-style-font-btn align-item-center">
                      
                      <select
                        id="countries"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2 d-flex  bg-white "
                      >
                        <option selected>11</option>
                        <option value="US">12</option>
                        <option value="CA">13</option>
                        <option value="FR">14</option>
                        <option value="DE">15</option>
                      </select>
                    </div>
                  </div>
                  <div className="main-color"></div>
                  <div className="caht-icon-color text-white"></div>
                </div>

                <div className="main-btn d-flex align-item-end">
                  {/* <Button variant="outlined">Outlined</Button>
              <Button variant="contained">Contained</Button> */}
                  <button className="reset-btn">reset</button>
                  <button className="submit-btn ">submit</button>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="accordion-2">
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Language & Chat
              </Typography>
              {/* <Typography sx={{ color: 'text.secondary' }}>
            You are currently not an owner
          </Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="massege"></div>
                <div className="laguage"></div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="accordion-3">
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Email settings
              </Typography>
              {/* <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{/* content */}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="accordion-4">
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Admin setting
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{/* content */}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
}
// import { Container } from '@mui/material'
// import React,{useState} from 'react'
// import styled from '@emotion/styled'
// // import {cheveronDown} from "react-icon/io5";

// export default function
// () {
//   const [value,setValue]=useState(false)
//   const handleClick=()=>{
//     setValue(!value)
//   }
//   return <Container>
//     <Header>
// <Title></Title>
// <Icon>
//   {/* <IoChevronDown></IoChevronDown> */}
// </Icon>
//     </Header>
//     <Content>
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt corrupti quibusdam quaerat impedit dolorem recusandae suscipit commodi nisi nulla quas amet voluptas, possimus explicabo dolorum ea tempora voluptatem minus in eum soluta. Delectus.
//     </Content>
//   </Container>
// }
// const container=styled.div`
// height:fit-content;
// width:300px;
// border-radius:4px;
// border:1px solid #e1e5e9;
// color:#0a0a0a;
// background:#f0f4f7;
// margin;5px 0;
// `;
// const Header=styled.div`
// height:60px;
// width:100%;
// cursor:pointer;
// border-radius:4px;
// align-item:center;
// justify-content:space between;
// cursor:pointer`;
// const Title =styled.div`
// padding-left:15px;`;
// const Icon=styled.div`
// width:20px;
// height:20px;
// display:flex;
// align-items:center;
// padding:8px 5px;
// margin-left:15px

// `;
// const content=styled.div`
// width:100%;
// height:90px;
// font-size:14px;
// overflow:hidden;
// display:flex;
// align-item:center;
// border-top:1px solid #e1e5e9`;
