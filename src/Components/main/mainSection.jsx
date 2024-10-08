import { Box, Button, Typography } from "@mui/material";
import heroImage from "../images/Illustration.png";
const MainSection = ()=>{
    return (
        <>
          <Box className="d-flex justify-content-between align-items-center container mt-5">
        <Box>
          <Typography className="fw-bold" variant="h2">
            Lessons and insights <br />
            <span className="text-success">from 8 years</span>
          </Typography>
          <Typography variant="h6" className="text-secondary my-4">
            Where to grow your business as a photographer: site or social media?
          </Typography>
          <Button className="fw-bold" variant="contained" color="success">
            Register
          </Button>
        </Box>
        <Box>
          <img src={heroImage} alt="" />
        </Box>
      </Box>
      </>
    )
};

export default MainSection;