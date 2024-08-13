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
import Grid from "@mui/material/Grid";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";

// Vision UI Dashboard React components
import MasterCard from "examples/Cards/MasterCard";

import ToolCard from "../../components/ToolCard";
// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Billing page components
import PaymentMethod from "layouts/billing/components/PaymentMethod";
import Invoices from "layouts/billing/components/Invoices";
import BillingInformation from "layouts/billing/components/BillingInformation";
import Transactions from "layouts/billing/components/Transactions";
import CreditBalance from "./components/CreditBalance";

//静态工具数据
import { toolsData } from "./data/tools.js"
import { Card,CardContent,CardActions,CardMedia,Typography,Button } from "@mui/material";
import VuiTypography from "../../components/VuiTypography";
import {Link} from "react-router-dom";

function Billing() {

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox mt={4}>
        <div style={{ display: "block", height: "81vh", overflowY: "scroll", scrollbarWidth: "none", marginX: "auto"}}>
          <Grid container spacing={3}>
            {toolsData.map(tool => {
                return (
                  <Grid item xs={12} md={6} xl={3} key={tool.id} sx={{transform: "translateX(10px)"}}>
                    <VuiBox>
                      <ToolCard image={tool.picture} name={tool.name} description={tool.description} />
                    </VuiBox>
                  </Grid>
                )
              }
            )
            }
          </Grid>
        </div>
      </VuiBox>

      {/*<VuiBox mt={4}>*/}
      {/*  <VuiBox mb={1.5}>*/}
      {/*    <Grid container spacing={3}>*/}
      {/*      <Grid item xs={12} lg={7} xl={8}>*/}
      {/*        <Grid container spacing={3}>*/}
      {/*          <Grid item xs={12} xl={6}>*/}
      {/*            <MasterCard number={7812213908237916} valid="05/24" cvv="09X" />*/}
      {/*          </Grid>*/}
      {/*          <Grid item xs={12} md={12} xl={6}>*/}
      {/*            <CreditBalance />*/}
      {/*          </Grid>*/}
      {/*          <Grid item xs={12}>*/}
      {/*            <PaymentMethod />*/}
      {/*          </Grid>*/}
      {/*        </Grid>*/}
      {/*      </Grid>*/}
      {/*      <Grid item xs={12} lg={5} xl={4}>*/}
      {/*        /!*<Invoices />*!/*/}
      {/*      </Grid>*/}
      {/*    </Grid>*/}
      {/*  </VuiBox>*/}
      {/*  <VuiBox my={3}>*/}
      {/*    <Grid container spacing={3}>*/}
      {/*      <Grid item xs={12} md={7}>*/}
      {/*        <BillingInformation />*/}
      {/*      </Grid>*/}
      {/*      <Grid item xs={12} md={5}>*/}
      {/*        <Transactions />*/}
      {/*      </Grid>*/}
      {/*    </Grid>*/}
      {/*  </VuiBox>*/}
      {/*</VuiBox>*/}
      <Footer />
    </DashboardLayout>
  );
}

export default Billing;
