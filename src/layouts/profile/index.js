/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// @mui material components
// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import team1 from "assets/images/avatar1.png";
import team2 from "assets/images/avatar2.png";
import team3 from "assets/images/avatar3.png";
import team4 from "assets/images/avatar4.png";
// Images
import profile1 from "assets/images/profile-1.png";
import profile2 from "assets/images/profile-2.png";
import profile3 from "assets/images/profile-3.png";
// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import Footer from "examples/Footer";
// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";
import Welcome from "../profile/components/Welcome/index";
import CarInformations from "./components/CarInformations";
//引入数据
import tools from "./data/tools.js";
import { toolsData } from "../billing/data/tools";
import { Button, CardActions, CardContent, CardMedia } from "@mui/material";
import rgba from "../../assets/theme/functions/rgba";
import { grey } from "@mui/material/colors";
import ToolCard from "../../components/ToolCard";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";

function Overview() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox mb={3} mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} xl={6}>
            <Welcome/>
          </Grid>
          <Grid item xs={12} md={8} xl={6}>
            <PlatformSettings />
          </Grid>
        </Grid>
      </VuiBox>
      <VuiBox bgColor={rgba("grey",0.7)} borderRadius={30} mb={3}>
        <VuiBox ml={2} mr={2} mb={3}>
          <VuiTypography color={"white"} fontWeight={"bold"} >
            我的收藏
          </VuiTypography>
          <div style={{ display: "flex", flexDirection: "row", height: "25vw", overflowX: "scroll", scrollbarWidth: "none"}}>
            {toolsData.map(tool => {
                return (
                  <VuiBox mr={2} key={tool.id}>
                    <ToolCard image={tool.picture} name={tool.name} description={tool.description} />
                  </VuiBox>
                )
              }
            )
            }
          </div>
        </VuiBox>
      </VuiBox>
      <VuiBox mb={3} >
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
