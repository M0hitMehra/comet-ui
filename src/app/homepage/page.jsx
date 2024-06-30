import TimelineComponent from "@/components/TimeLinecomponent";
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import DrawerAppBar from "../home/page";

const MainPage = () => {
  return (
    <>
      <DrawerAppBar />
      <Box
        style={{
          backgroundColor: "white",
          height: "100%",
          paddingBottom: "12px",
        }}
      >
        <Box
          style={{ backgroundColor: "black", padding: "60px 80px 0px 80px " }}
        >
          <h1 style={{ color: "white" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            consectetur culpa praesentium sit ex necessitatibus expedita, ad
            quidem architecto eveniet unde excepturi sunt debitis iste, quae
            quis voluptatibus soluta at?
          </h1>
          <Grid
            container
            my={2}
            spacing={2}
            flexDirection={{
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            }}
          >
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <h1 style={{ color: "white" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus consectetur culpa praesentium sit ex necessitatibus
                expedita, ad quidem architecto eveniet unde excepturi sunt
                debitis iste, quae quis voluptatibus soluta at?
              </h1>
              <Box my={3}>
                <Button variant="contained">Contained</Button>
              </Box>
              <Box
                sx={{ marginTop: 12, width: "50%" }}
                display={{
                  xs: "none",
                  sm: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
                non?
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginTop={4}
              >
                <Box
                  component="img"
                  src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=" // Replace with your image URL
                  alt="Example"
                  sx={{
                    width: "70%", // Set width
                    height: 350, // Set height
                    borderRadius: "8px", // Set border radius
                    boxShadow: 2, // Set shadow
                    objectFit: "cover", // Cover the box while keeping aspect ratio
                    // Add other styles as needed
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <TimelineComponent />
            </Grid>
          </Grid>
        </Box>
        <Box
          p={6}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            sx={{ color: "black", fontSize: 24, fontWeight: "bold" }}
            width="80%"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            quas!
          </Typography>
          <Typography sx={{ color: "black", fontSize: 16 }} width="80%">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            quas! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veniam, quas! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Veniam, quas! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veniam, quas!
          </Typography>
        </Box>
        <Box my={2}>
          <Grid container spacing={2} px={6}>
            <Grid item xs={4}>
              <Typography
                color="black"
                sx={{
                  border: "1px solid black",
                  borderRadius: "50px",
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                sdfejkr
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                color="black"
                sx={{
                  border: "1px solid black",
                  borderRadius: "50px",
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                sdfejkr
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                color="black"
                sx={{
                  border: "1px solid black",
                  borderRadius: "50px",
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                sdfejkr
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box style={{ backgroundColor: "white" }}>
          <Grid container spacing={2} px={6}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Paper elevation={3} sx={{ borderRadius: 8, padding: "28px" }}>
                <Box>
                  <Typography fontSize={20} fontWeight="bold" my={1}>
                    vdbvgbgt
                  </Typography>
                  <Typography fontSize={12} fontWeight="bold" my={1}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis rerum quisquam earum commodi dolor sapiente unde
                    necessitatibus quidem at eos. Vitae necessitatibus culpa,
                    corrupti veritatis quia perferendis fugiat recusandae
                    excepturi!
                  </Typography>
                  <Typography fontSize={16} fontWeight="bold" my={2}>
                    vdbvgbgt
                  </Typography>
                  <Typography fontSize={16} my={1}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Corporis, earum?
                  </Typography>
                  <Typography fontSize={16} my={1}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Corporis, earum?
                  </Typography>
                  <Typography fontSize={16} my={1}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Corporis, earum?
                  </Typography>
                </Box>
                <Box my={4}>
                  <Button variant="contained">Contained</Button>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Paper elevation={0} borderRadius={50}>
                <Box
                  component="img"
                  src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=" // Replace with your image URL
                  alt="Example"
                  sx={{
                    width: "100%", // Set width
                    height: 400, // Set height
                    borderRadius: "30px", // Set border radius
                    boxShadow: 2, // Set shadow
                    objectFit: "cover", // Cover the box while keeping aspect ratio
                    // Add other styles as needed
                  }}
                />
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <Box style={{ backgroundColor: "white" }} my={2} px={3}>
          <Paper elevation={3} sx={{ borderRadius: 8, padding: "28px" }}>
            <Grid container spacing={2} px={2}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Typography fontSize={24} fontWeight="bold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci, ipsa.
                </Typography>
                <Paper elevation={2} sx={{ marginTop: '24px', marginBottom: '24px', backgroundColor: 'f0efef', borderRadius: '24px'}}>
                <Grid container p={4}>
                  <Grid xs={8} sm={8} md={8} lg={8} xl={8}>
                    <Typography fontWeight='bold' fontSize={16}>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatum placeat impedit voluptatem est iure fuga sed
                      laudantium perferendis aliquam molestias.
                    </Typography>
                  </Grid>
                  <Grid xs={4} sm={4} md={4} lg={4} xl={4}>
                    <Box
                      component="img"
                      src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=" // Replace with your image URL
                      alt="Example"
                      sx={{
                        width: "100%", // Set width
                        height: 150, // Set height
                        borderRadius: "8px", // Set border radius
                        boxShadow: 2, // Set shadow
                        objectFit: "cover", // Cover the box while keeping aspect ratio
                        // Add other styles as needed
                      }}
                    />
                  </Grid>
                  </Grid>
                </Paper>

                <Grid container>
                  <Grid xs={12} sm={12} md={8} lg={8} xl={8} px={2}>
                  <Paper elevation={3} style={{ padding: '16px', borderRadius: '24px'}}>
                    <Typography fontWeight='bold' fontSize={16}>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatum placeat impedit voluptatem est iure fuga sed
                    </Typography>
                    </Paper>
                  </Grid>
                  {/* <Grid xs={0} sm={0} md={1} lg={1} xl={1}></Grid> */}
                  <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
                  <Paper elevation={3} sx={{ backgroundColor: 'black', padding: '20px', borderRadius: '24px'}}>
                    <Typography color="white">Lorem ipsum, dolor sit amet consectetur.</Typography>
                    <Typography color="white" my={1}>Lorem ipsum sdejfh  jwef</Typography>
                    </Paper>
                  </Grid>
                  </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Paper elevation={0} borderRadius={50}>
                  <Box
                    component="img"
                    src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=" // Replace with your image URL
                    alt="Example"
                    sx={{
                      width: "100%", // Set width
                      height: 400, // Set height
                      borderRadius: "30px", // Set border radius
                      boxShadow: 2, // Set shadow
                      objectFit: "cover", // Cover the box while keeping aspect ratio
                      // Add other styles as needed
                    }}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default MainPage;
