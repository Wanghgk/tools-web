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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import colors from "assets/theme/base/colors";

function InfoCard({ bgColor, title, count, percentage, icon, direction }) {
  const { info} = colors;

  return (
    <Card sx={{ padding: "17px" }}>
      <VuiBox>
        <VuiBox>
          <Grid container alignItems="center">
            <Grid item xs={8}>
              <VuiBox ml={direction === "left" ? 2 : 0} lineHeight={1}>
                <VuiTypography
                  variant="caption"
                  color={bgColor === "white" ? "text" : "white"}
                  opacity={bgColor === "white" ? 1 : 0.7}
                  textTransform="capitalize"
                  fontWeight={title.fontWeight}
                  sx={{fontSize: "20px"}}
                >
                  {title.text}
                </VuiTypography>
                <VuiTypography fontWeight="light" color="white" sx={{fontSize: "16px"}}>
                  {count}{" "}
                </VuiTypography>
              </VuiBox>
            </Grid>
          </Grid>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

// Setting default values for the props of MiniStatisticsCard
InfoCard.defaultProps = {
  bgColor: "white",
  title: {
    fontWeight: "medium",
    text: "",
  },
  direction: "right",
};

// Typechecking props for the MiniStatisticsCard
InfoCard.propTypes = {
  bgColor: PropTypes.oneOf([
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
  ]),
  title: PropTypes.PropTypes.shape({
    fontWeight: PropTypes.oneOf(["light", "regular", "medium", "bold"]),
    text: PropTypes.string,
  }),
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  direction: PropTypes.oneOf(["right", "left"]),
};

export default InfoCard;
