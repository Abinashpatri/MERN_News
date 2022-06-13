import React from "react";
import { Box, Typography, styled } from "@mui/material";

const Container = styled(Box)(({theme}) => ({
  background: 'black',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  height: '48px',
  marginBottom: '30px',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))
  

const Image = styled("img")({
  height: 34,
  '&:last-child':{
    margin: '0 50px 0 20px'
  }


});
const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 300;
  margin-left: 50px;
`;

const InfoHeader = () => {
  const appleStore =
    "https://assets.inshorts.com/website_assets/images/appstore.png";
  const googleStore =
    "https://assets.inshorts.com/website_assets/images/playstore.png";

  return (
    <Container>
      <Text>
        For the best experience use <b>NewsHour</b> app on your smartphone
      </Text>
      <Box style={{ display: "flex", marginLeft: 'auto' }}>
        <Image src={appleStore} alt="img" />
        <Image src={googleStore} alt="img" />
      </Box>
    </Container>
  );
};

export default InfoHeader;
