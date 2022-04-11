import React from "react";
import { Container, Box,  } from "@mui/material";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";

import Activity from "../../components/dashboard/activity/Index";
import Listed from "../../components/dashboard/listed/Index";
import Unlisted from "../../components/dashboard/unlisted/Index";

const Tab = styled(TabUnstyled)`
  font-family: Montserrat;
  color: #666666;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  background-color: transparent;
  width: 200px;
  padding: 12px 50px;
  border: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  &.${tabUnstyledClasses.selected} {
    background-color: #000;
    color: #fff;
  }
  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  background: #fff;
  padding: 20px 0;
`;

const TabsList = styled(TabsListUnstyled)`
  width: 100%;
  border-radius: 50px;
  background: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-content: space-between;
`;
const Index = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ margin: "100px auto" }}>
        <TabsUnstyled defaultValue={0}>
          <Box
            display="flex"
            gap="20px"
            flexWrap="wrap-reverse"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box sx={{ overflow: { md: "hidden", xs: "scroll" } }}>
              <TabsList>
                <Tab>Activity</Tab>
                <Tab>Listed</Tab>
                <Tab>Unlisted</Tab>
              </TabsList>
            </Box>
            {/* <Button variant="contained" color="primary"
                            sx={{ color: '#000', background: '#fff', borderRadius: '20px', "&:hover": { color: '#000', background: '#fff' } }} >
                            <CancelPresentationIcon sx={{ marginRight: '5px' }} />
                            Disconnect wallet
                        </Button> */}
          </Box>
          <br />
          <TabPanel value={0}>
            <Box>
              <Activity />
            </Box>
          </TabPanel>
          <TabPanel value={1}>
            <Box>
              <Listed />
            </Box>
          </TabPanel>
          <TabPanel value={2}>
            <Box>
              <Unlisted />
            </Box>
          </TabPanel>
        </TabsUnstyled>
      </Container>
    </>
  );
};

export default Index;
