/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import Twitter from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
// import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function Basic() {
  return (
    <BasicLayout image={bgImage}>
      <Card>
        <Grid container justifyContent="center" sx={{ mt: 2 }}>
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
        </Grid>
        <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
          <Grid item xs={2}>
            <MDTypography component={MuiLink} href="#" variant="body1" color="white">
              <Twitter color="inherit" fontSize="medium" />
            </MDTypography>
          </Grid>
          <Grid item xs={2}>
            <MDTypography component={MuiLink} href="#" variant="body1" color="white">
              <GoogleIcon color="inherit" fontSize="medium" />
            </MDTypography>
          </Grid>
          <Grid item xs={2}>
            <MDTypography component={MuiLink} href="#" variant="body1" color="white">
              <GitHubIcon color="inherit" fontSize="medium" />
            </MDTypography>
          </Grid>
        </Grid>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
