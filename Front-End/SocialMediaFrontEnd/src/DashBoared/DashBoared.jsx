import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";
import { LinkedIn, Facebook, Instagram } from "../SocialMedia_Pages";

export default function DashBoared(props) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

console.log("env file insta id",import.meta.env.VITE_INSTAGRAM_BUSINESS_ID);

  return (
    <div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Instagram" value="1" />
              <Tab label="FaceBook" value="2" />
              <Tab label="LinkedIn" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Instagram />
          </TabPanel>
          <TabPanel value="2">
            <Facebook />
          </TabPanel>
          <TabPanel value="3">
            <LinkedIn />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
