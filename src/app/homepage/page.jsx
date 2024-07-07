"use client";
import TimelineComponent from "@/components/TimeLinecomponent";
import { Box, Button, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import DrawerAppBar from "../home/page";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const MainPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents server-side rendering issues

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  // const settings = {
  //   infinite: true,
  //   dots: false,
  //   centerMode: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   lazyLoad: true,
  //   autoplay: true,
  // autoplaySpeed: 2000}

  const slides = [
    { id: 1, content: "Slide 1", bgColor: "#ff7979" },
    { id: 2, content: "Slide 2", bgColor: "#badc58" },
    { id: 3, content: "Slide 3", bgColor: "#f9ca24" },
    { id: 4, content: "Slide 4", bgColor: "#f0932b" },
    { id: 5, content: "Slide 5", bgColor: "#eb4d4b" },
    { id: 6, content: "Slide 6", bgColor: "#6ab04c" },
  ];

  return (
    <>
      <DrawerAppBar />
      <Box
        style={{
          backgroundColor: "white",
          height: "100%",
          paddingBottom: "12px",
          marginTop: "12px",
        }}
      >
        <Box
          style={{
            backgroundColor: "black",
            padding: "60px 80px 0px 80px ",
            borderBottomLeftRadius: "60px",
          }}
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
        <Box style={{ backgroundColor: "white" }} mt={4}>
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
        <Box style={{ backgroundColor: "white" }} my={5} px={3}>
          <Paper elevation={3} sx={{ borderRadius: 8, padding: "28px" }}>
            <Grid container spacing={2} px={2}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Typography fontSize={24} fontWeight="bold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci, ipsa.
                </Typography>
                <Paper
                  elevation={2}
                  sx={{
                    marginTop: "24px",
                    marginBottom: "24px",
                    backgroundColor: "#f0efef",
                    borderRadius: "24px",
                  }}
                >
                  <Grid container p={4}>
                    <Grid xs={8} sm={8} md={8} lg={8} xl={8}>
                      <Typography fontWeight="bold" fontSize={16}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                      </Typography>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatum placeat impedit voluptatem est iure
                        fuga sed laudantium perferendis aliquam molestias.
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
                    <Paper
                      elevation={3}
                      style={{ padding: "16px", borderRadius: "24px" }}
                    >
                      <Typography fontWeight="bold" fontSize={16}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                      </Typography>
                      <Typography style={{ marginTop: "20px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatum placeat impedit voluptatem est iure
                        fuga sed
                      </Typography>
                    </Paper>
                  </Grid>
                  {/* <Grid xs={0} sm={0} md={1} lg={1} xl={1}></Grid> */}
                  <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Paper
                      elevation={3}
                      sx={{
                        backgroundColor: "black",
                        padding: "20px",
                        borderRadius: "24px",
                      }}
                    >
                      <Typography color="white">
                        Lorem ipsum, dolor sit amet consectetur.
                      </Typography>
                      <Typography color="white" my={2}>
                        Lorem ipsum sdejfh jwef
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Paper elevation={0} borderRadius={50}>
                  <Paper
                    elevation={2}
                    sx={{
                      marginBottom: "24px",
                      backgroundColor: "white",
                      borderRadius: "24px",
                      padding: "16px",
                    }}
                  >
                    <Paper elevation={2} style={{ backgroundColor: "#f0efef" }}>
                      <Grid
                        container
                        p={2}
                        sx={{
                          marginBottom: "12px",
                          borderRadius: "12px",
                        }}
                      >
                        <Grid xs={3} sm={3} md={3} lg={3} xl={3}>
                          <Box
                            component="img"
                            src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=" // Replace with your image URL
                            alt="Example"
                            sx={{
                              width: "80%", // Set width
                              height: 100, // Set height
                              borderRadius: "8px", // Set border radius
                              boxShadow: 2, // Set shadow
                              objectFit: "cover", // Cover the box while keeping aspect ratio
                              // Add other styles as needed
                            }}
                          />
                        </Grid>
                        <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
                          <Typography fontWeight="bold" fontSize={12}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </Typography>
                          <Typography
                            sx={{
                              textAlign: "left",
                              marginTop: "4px",
                              marginRight: "8px",
                            }}
                            fontSize={12}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptatum placeat impedit voluptatem est iure
                            fuga sed laudantium perferendis aliquam molestias.
                          </Typography>
                        </Grid>
                        <Grid xs={3} sm={3} md={3} lg={3} xl={3}>
                          <Box
                            component="img"
                            src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=" // Replace with your image URL
                            alt="Example"
                            sx={{
                              width: "100%", // Set width
                              height: 100, // Set height
                              borderRadius: "8px", // Set border radius
                              boxShadow: 2, // Set shadow
                              objectFit: "cover", // Cover the box while keeping aspect ratio
                              // Add other styles as needed
                            }}
                          />
                        </Grid>
                      </Grid>
                    </Paper>
                    <Typography fontWeight="bold" fontSize={16}>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </Typography>
                    <Typography fontSize={12} mt={1}>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Unde minima officiis tempora!
                    </Typography>
                  </Paper>
                  <Paper
                    elevation={2}
                    sx={{
                      marginBottom: "24px",
                      backgroundColor: "white",
                      borderRadius: "24px",
                    }}
                  >
                    <Grid container p={3}>
                      <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Typography fontWeight="bold" fontSize={16}>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </Typography>
                        <Typography
                          sx={{
                            marginRight: "4px",
                            textAlign: "left",
                            marginTop: "4px",
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Voluptatum placeat impedit voluptatem est iure
                          fuga sed laudantium perferendis aliquam molestias.
                        </Typography>
                      </Grid>
                      <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Box
                          component="img"
                          src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=" // Replace with your image URL
                          alt="Example"
                          sx={{
                            width: "100%", // Set width
                            height: 200, // Set height
                            borderRadius: "8px", // Set border radius
                            boxShadow: 2, // Set shadow
                            objectFit: "cover", // Cover the box while keeping aspect ratio
                            // Add other styles as needed
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Paper>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Box>
        <Box px={4}>
          <Grid container spacing={2} px={2}>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
              <Typography style={{ color: "black" }}>
                Lorem, ipsum dolor sit amet consectetur
              </Typography>
              <Typography
                fontSize={28}
                fontWeight="bold"
                style={{ color: "black" }}
              >
                Lorem, ipsum dolor sit amet consectetur
              </Typography>
              <Typography fontSize={16} style={{ color: "black" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto facere aut reprehenderit nihil repudiandae eius ullam
                necessitatibus quasi voluptates consequatur totam magni quam nam
                magnam, sequi modi impedit repellat asperiores dignissimos
                repellendus!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} mt={2}>
              <Typography style={{ color: "black" }}>
                Lorem, ipsum dolor sit amet consectetur
              </Typography>
              <Typography
                fontSize={28}
                fontWeight="bold"
                style={{ color: "black" }}
              >
                Lorem, ipsum dolor sit amet
              </Typography>
              <Typography fontSize={16} style={{ color: "black" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ width: "100%", my: 4 }}>
          <Slider {...settings}>
            <Box mx={1}>
              <Box
                component="img"
                src="https://th.bing.com/th/id/OIP.urA1OQAvQeHrnmTB7e_o3AHaE7?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="Image 1"
                sx={{
                  width: "400px",
                  height: "300px",
                  borderRadius: "30px",
                  boxShadow: 2,
                  marginLeft: "24px",
                }}
              />
            </Box>
            <Box mx={1}>
              <Box
                component="img"
                src="https://th.bing.com/th/id/OIP.AQWbN0mvvCj_T-QNxndQAgHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="Image 2"
                sx={{
                  width: "400px",
                  height: "300px",
                  borderRadius: "30px",
                  boxShadow: 2,
                  marginLeft: "24px",
                }}
              />
            </Box>
            <Box mx={1}>
              <Box
                component="img"
                src="https://th.bing.com/th/id/OIP.PyFNiTk-edap7LADnaw9IQHaEA?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="Image 3"
                sx={{
                  width: "400px",
                  height: "300px",
                  borderRadius: "30px",
                  boxShadow: 2,
                  marginLeft: "24px",
                }}
              />
            </Box>
            <Box mx={1}>
              <Box
                component="img"
                src="https://th.bing.com/th/id/OIP.upVp_8A0fM4h63Ds_jE57AHaEL?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="Image 4"
                sx={{
                  width: "400px",
                  height: "300px",
                  borderRadius: "30px",
                  boxShadow: 2,
                  marginLeft: "24px",
                }}
              />
            </Box>
            <Box mx={1}>
              <Box
                component="img"
                src="https://th.bing.com/th/id/OIP.A-_MbAsFQhWV_KdZ9xPUjAHaFH?w=249&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="Image 5"
                sx={{
                  width: "400px",
                  height: "300px",
                  borderRadius: "30px",
                  boxShadow: 2,
                  marginLeft: "24px",
                }}
              />
            </Box>
            <Box mx={1}>
              <Box
                component="img"
                src="https://th.bing.com/th/id/OIP.PyFNiTk-edap7LADnaw9IQHaEA?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="Image 6"
                sx={{
                  width: "400px",
                  height: "300px",
                  borderRadius: "30px",
                  boxShadow: 2,
                  marginLeft: "24px",
                }}
              />
            </Box>
          </Slider>
        </Box>
        <Box
          style={{
            backgroundColor: "black",
            borderRadius: "12px",
            padding: 12,
          }}
          my={6}
          mx={4}
        >
          <Grid container>
            <Grid xs={12} sm={12} md={6} lg={6} xl={6} mt={1} px={2}>
              <Typography
                fontWeight="bold"
                fontSize={16}
                style={{ color: "white " }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </Typography>
              <Typography
                sx={{
                  marginRight: "4px",
                  textAlign: "left",
                  marginTop: "4px",
                  color: "white",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum placeat impedit voluptatem est iure fuga sed
                laudantium perferendis aliquam molestias.
              </Typography>
            </Grid>
            <Grid xs={12} sm={12} md={2} lg={2} xl={2}>
              <Box
                component="img"
                src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=" // Replace with your image URL
                alt="Example"
                sx={{
                  width: "80%", // Set width
                  height: 100, // Set height
                  borderRadius: "8px", // Set border radius
                  boxShadow: 2, // Set shadow
                  objectFit: "cover", // Cover the box while keeping aspect ratio
                  // Add other styles as needed
                }}
              />
            </Grid>
            <Grid xs={12} sm={12} md={2} lg={2} xl={2}>
              <Box
                component="img"
                src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=" // Replace with your image URL
                alt="Example"
                sx={{
                  width: "80%", // Set width
                  height: 100, // Set height
                  borderRadius: "8px", // Set border radius
                  boxShadow: 2, // Set shadow
                  objectFit: "cover", // Cover the box while keeping aspect ratio
                  // Add other styles as needed
                }}
              />
            </Grid>
            <Grid xs={12} sm={12} md={2} lg={2} xl={2}>
              <Box
                component="img"
                src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=" // Replace with your image URL
                alt="Example"
                sx={{
                  width: "80%", // Set width
                  height: 100, // Set height
                  borderRadius: "8px", // Set border radius
                  boxShadow: 2, // Set shadow
                  objectFit: "cover", // Cover the box while keeping aspect ratio
                  // Add other styles as needed
                }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box my={6} mx={5}>
          <Grid container spacing={2}>
            <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
              <Typography fontWeight="bold" fontSize={20}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
            </Grid>
            <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
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
        <Box mx={5}>
          <Grid container spacing={2}>
            <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
              <Paper elevation={3} style={{ borderRadius: "24px" }}>
                <Box
                  component="img"
                  src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=" // Replace with your image URL
                  alt="Example"
                  sx={{
                    width: "100%", // Set width
                    height: 410, // Set height
                    borderRadius: "16px", // Set border radius
                    boxShadow: 2, // Set shadow
                    objectFit: "cover", // Cover the box while keeping aspect ratio
                    // Add other styles as needed
                  }}
                />
                <Typography fontWeight="bold" fontSize={20} p={2}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eaque, consequatur cum. Obcaecati, vel. Magni necessitatibus
                  aspernatur voluptate dolor totam culpa.
                </Typography>
              </Paper>
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={4} xl={4} px={2}>
              <Paper
                elevation={3}
                style={{ borderRadius: "24px", marginBottom: "12px" }}
              >
                <Box
                  component="img"
                  src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=" // Replace with your image URL
                  alt="Example"
                  sx={{
                    width: "100%", // Set width
                    height: 150, // Set height
                    borderRadius: "16px", // Set border radius
                    boxShadow: 2, // Set shadow
                    objectFit: "cover", // Cover the box while keeping aspect ratio
                    // Add other styles as needed
                  }}
                />
                <Typography fontWeight="bold" fontSize={20} p={2}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusantium, quisquam.
                </Typography>
              </Paper>
              <Paper elevation={3} style={{ borderRadius: "24px" }}>
                <Box
                  component="img"
                  src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=" // Replace with your image URL
                  alt="Example"
                  sx={{
                    width: "100%", // Set width
                    height: 150, // Set height
                    borderRadius: "16px", // Set border radius
                    boxShadow: 2, // Set shadow
                    objectFit: "cover", // Cover the box while keeping aspect ratio
                    // Add other styles as needed
                  }}
                />
                <Typography fontWeight="bold" fontSize={20} p={2}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusantium, quisquam.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <Box my={6} mx={4} alignItems="center">
          <Paper elevation={3} sx={{ borderRadius: "12px" }}>
            <Grid container spacing={3} px={6} py={2}>
              <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
                <Typography fontSize={20} fontWeight="bold" mt={2}>
                  Do I Qualify?
                </Typography>
              </Grid>
              <Grid xs={12} sm={12} md={4} lg={4} xl={4} px={2}>
                <Paper
                  elevation={3}
                  sx={{ borderRadius: "12px", backgroundColor: "#f0efef" }}
                  p={2}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    px={4}
                    py={2}
                  >
                    <TaskAltIcon />
                    <Typography sx={{ marginLeft: "4px" }}>
                      Lorem ipsum dolor sit.
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid xs={12} sm={12} md={4} lg={4} xl={4} px={2}>
                <Paper
                  elevation={3}
                  sx={{ borderRadius: "12px", backgroundColor: "#f0efef" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    py={2}
                    px={4}
                  >
                    <TaskAltIcon />
                    <Typography sx={{ marginLeft: "4px" }}>
                      Lorem ipsum dolor sit.
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
            <Grid container spacing={3} px={6} py={2} mt={1}>
              <Grid xs={12} sm={12} md={3} lg={3} xl={3} px={3}>
                <Paper
                  elevation={3}
                  sx={{ borderRadius: "12px", backgroundColor: "#f0efef" }}
                  p={2}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    px={4}
                    py={2}
                  >
                    <TaskAltIcon />
                    <Typography sx={{ marginLeft: "4px" }}>
                      Lorem ipsum dolor sit.
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid xs={12} sm={12} md={3} lg={3} xl={3} px={3}>
                <Paper
                  elevation={3}
                  sx={{ borderRadius: "12px", backgroundColor: "#f0efef" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    py={2}
                    px={4}
                  >
                    <TaskAltIcon />
                    <Typography sx={{ marginLeft: "4px" }}>
                      Lorem ipsum dolor sit.
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid xs={12} sm={12} md={3} lg={3} xl={3} px={3}>
                <Paper
                  elevation={3}
                  sx={{ borderRadius: "12px", backgroundColor: "#f0efef" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    py={2}
                    px={4}
                  >
                    <TaskAltIcon />
                    <Typography sx={{ marginLeft: "4px" }}>
                      Lorem ipsum dolor sit.
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid xs={12} sm={12} md={3} lg={3} xl={3} px={3}>
                <Paper
                  elevation={3}
                  sx={{ borderRadius: "12px", backgroundColor: "#f0efef" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    py={2}
                    px={4}
                  >
                    <TaskAltIcon />
                    <Typography sx={{ marginLeft: "4px" }}>
                      Lorem ipsum dolor sit.
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography fontSize={24} fontWeight="bold" textAlign="center">
            Frequently Asked Questions
          </Typography>
          <Grid container spacing={3} px={6} py={2} mt={1}>
            <Grid xs={12} sm={12} md={2.4} lg={2.4} xl={2.4} px={2}>
              <Paper
                elevation={3}
                sx={{ borderRadius: "12px", backgroundColor: "#f0efef" }}
                p={2}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  px={4}
                  py={2}
                >
                  <Typography sx={{ marginLeft: "4px" }}>
                    Lorem ipsum dolor sit.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid xs={12} sm={12} md={2.4} lg={2.4} xl={2.4} px={2}>
              <Paper
                elevation={3}
                sx={{ borderRadius: "12px", backgroundColor: "#f0efef" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  py={2}
                  px={4}
                >
                  <Typography sx={{ marginLeft: "4px" }}>
                    Lorem ipsum dolor sit.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid xs={12} sm={12} md={2.4} lg={2.4} xl={2.4} px={2}>
              <Paper
                elevation={3}
                sx={{ borderRadius: "12px", backgroundColor: "#f0efef" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  py={2}
                  px={4}
                >
                  <Typography sx={{ marginLeft: "4px" }}>
                    Lorem ipsum dolor sit.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid xs={12} sm={12} md={2.4} lg={2.4} xl={2.4} px={2}>
              <Paper
                elevation={3}
                sx={{ borderRadius: "12px", backgroundColor: "#f0efef" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  py={2}
                  px={4}
                >
                  <Typography sx={{ marginLeft: "4px" }}>
                    Lorem ipsum dolor sit.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid xs={12} sm={12} md={2.4} lg={2.4} xl={2.4} px={2}>
              <Paper
                elevation={3}
                sx={{ borderRadius: "12px", backgroundColor: "#f0efef" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  py={2}
                  px={4}
                >
                  <Typography sx={{ marginLeft: "4px" }}>
                    Lorem ipsum dolor sit.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2} px={6} py={2} mt={1}>
            <Grid xs={12} sm={12} md={6} lg={6} xl={6} px={2}>
              <Paper
                elevation={3}
                sx={{ borderRadius: "12px", backgroundColor: "white" }}
                p={2}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  px={4}
                  pt={2}
                >
                  <Typography
                    sx={{ marginLeft: "4px" }}
                    fontSize={16}
                    fontWeight="bold"
                  >
                    Lorem ipsum dolor sit.
                  </Typography>
                  <ArrowCircleLeftRoundedIcon />
                </Box>
                <Typography
                  sx={{ marginLeft: "4px" }}
                  fontSize={12}
                  px={4}
                  pb={2}
                >
                  Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Ipsum, fuga.
                </Typography>
              </Paper>
            </Grid>
            <Grid xs={12} sm={12} md={6} lg={6} xl={6} px={2}>
              <Paper
                elevation={3}
                sx={{ borderRadius: "12px", backgroundColor: "white" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  pt={2}
                  px={4}
                >
                  <Typography
                    sx={{ marginLeft: "4px" }}
                    fontSize={16}
                    fontWeight="bold"
                  >
                    Lorem ipsum dolor sit.
                  </Typography>
                  <ArrowCircleLeftRoundedIcon />
                </Box>
                <Typography
                  sx={{ marginLeft: "4px" }}
                  fontSize={12}
                  px={4}
                  pb={2}
                >
                  Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Eveniet, alias!
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={2} px={6} py={2}>
            <Grid xs={12} sm={12} md={6} lg={6} xl={6} px={2}>
              <Paper
                elevation={3}
                sx={{ borderRadius: "12px", backgroundColor: "#f0efef" }}
                p={2}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  px={4}
                  py={2}
                >
                  <Typography
                    sx={{ marginLeft: "4px" }}
                    fontSize={16}
                    fontWeight="bold"
                  >
                    Lorem ipsum dolor sit.
                  </Typography>
                  <ArrowCircleLeftRoundedIcon />
                </Box>
              </Paper>
            </Grid>
            <Grid xs={12} sm={12} md={6} lg={6} xl={6} px={2}>
              <Paper
                elevation={3}
                sx={{ borderRadius: "12px", backgroundColor: "#f0efef" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  py={2}
                  px={4}
                >
                  <Typography
                    sx={{ marginLeft: "4px" }}
                    fontSize={16}
                    fontWeight="bold"
                  >
                    Lorem ipsum dolor sit.
                  </Typography>
                  <ArrowCircleLeftRoundedIcon />
                </Box>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={2} px={6} py={2}>
            <Grid xs={12} sm={12} md={6} lg={6} xl={6} px={2}>
              <Paper
                elevation={3}
                sx={{ borderRadius: "12px", backgroundColor: "#f0efef" }}
                p={2}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  px={4}
                  py={2}
                >
                  <Typography
                    sx={{ marginLeft: "4px" }}
                    fontSize={16}
                    fontWeight="bold"
                  >
                    Lorem ipsum dolor sit.
                  </Typography>
                  <ArrowCircleLeftRoundedIcon />
                </Box>
              </Paper>
            </Grid>
            <Grid xs={12} sm={12} md={6} lg={6} xl={6} px={2}>
              <Paper
                elevation={3}
                sx={{ borderRadius: "12px", backgroundColor: "#f0efef" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  py={2}
                  px={4}
                >
                  <Typography
                    sx={{ marginLeft: "4px" }}
                    fontSize={16}
                    fontWeight="bold"
                  >
                    Lorem ipsum dolor sit.
                  </Typography>
                  <ArrowCircleLeftRoundedIcon />
                </Box>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={2} px={6} py={2}>
            <Grid xs={12} sm={12} md={6} lg={6} xl={6} px={2}>
              <Paper
                elevation={3}
                sx={{ borderRadius: "12px", backgroundColor: "#f0efef" }}
                p={2}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  px={4}
                  py={2}
                >
                  <Typography
                    sx={{ marginLeft: "4px" }}
                    fontSize={16}
                    fontWeight="bold"
                  >
                    Lorem ipsum dolor sit.
                  </Typography>
                  <ArrowCircleLeftRoundedIcon />
                </Box>
              </Paper>
            </Grid>
            <Grid xs={12} sm={12} md={6} lg={6} xl={6} px={2}>
              <Paper
                elevation={3}
                sx={{ borderRadius: "12px", backgroundColor: "#f0efef" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  py={2}
                  px={4}
                >
                  <Typography
                    sx={{ marginLeft: "4px" }}
                    fontSize={16}
                    fontWeight="bold"
                  >
                    Lorem ipsum dolor sit.
                  </Typography>
                  <ArrowCircleLeftRoundedIcon />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <Box mx={4}>
          <Paper
            elevation={3}
            style={{ borderRadius: "24px", backgroundColor: "white" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              px={4}
              mt={2}
              py={2}
            >
              <Typography fontSize={24} fontWeight="bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
              <Button variant="contained">See All</Button>
            </Box>
            <Box>
              <Grid container spacing={2} px={2} py={2}>
                <Grid xs={12} sm={12} md={3} lg={3} xl={3} px={2}>
                  <Box
                    component="img"
                    src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=" // Replace with your image URL
                    alt="Example"
                    sx={{
                      width: "100%", // Set width
                      height: 450, // Set height
                      borderRadius: "8px", // Set border radius
                      boxShadow: 2, // Set shadow
                      objectFit: "cover", // Cover the box while keeping aspect ratio
                      // Add other styles as needed
                    }}
                  />
                </Grid>
                <Grid xs={12} sm={12} md={3} lg={3} xl={3} px={2}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{ borderRadius: "12px", border: "1px solid black" }}
                      px={2}
                    >
                      Tips
                    </Typography>
                    <Typography>July 07, 2024</Typography>
                  </Box>
                  <Typography mt={2} fontWeight="bold" fontSize={20}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores, ipsam quidem reprehenderit in accusamus veritatis
                    aut at.
                  </Typography>
                  <Typography mt={2} fontSize={16}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores, ipsam quidem reprehenderit in accusamus veritatis
                    aut at. Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Tempore, tenetur.
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "row" }} mt={8}>
                    <Typography sx={{ color: "green" }}>Read More</Typography>
                    <ArrowOutwardIcon sx={{ color: "green" }} />
                  </Box>
                </Grid>
                <Grid xs={12} sm={12} md={3} lg={3} xl={3} px={2}>
                  <Box
                    component="img"
                    src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=" // Replace with your image URL
                    alt="Example"
                    sx={{
                      width: "100%", // Set width
                      height: 200, // Set height
                      borderRadius: "8px", // Set border radius
                      boxShadow: 2, // Set shadow
                      objectFit: "cover", // Cover the box while keeping aspect ratio
                      // Add other styles as needed
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    mt={2}
                  >
                    <Typography
                      sx={{ borderRadius: "12px", border: "1px solid black" }}
                      px={2}
                    >
                      Article
                    </Typography>
                    <Typography>July 07, 2024</Typography>
                  </Box>
                  <Typography mt={2} fontWeight="bold" fontSize={20}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit. Lorem ipsum dolor.
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "row" }} mt={4}>
                    <Typography sx={{ color: "green" }}>Read More</Typography>
                    <ArrowOutwardIcon sx={{ color: "green" }} />
                  </Box>
                </Grid>
                <Grid xs={12} sm={12} md={3} lg={3} xl={3} px={2}>
                  <Box
                    component="img"
                    src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=" // Replace with your image URL
                    alt="Example"
                    sx={{
                      width: "100%", // Set width
                      height: 200, // Set height
                      borderRadius: "8px", // Set border radius
                      boxShadow: 2, // Set shadow
                      objectFit: "cover", // Cover the box while keeping aspect ratio
                      // Add other styles as needed
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    mt={2}
                  >
                    <Typography
                      sx={{ borderRadius: "12px", border: "1px solid black" }}
                      px={2}
                    >
                      Resources
                    </Typography>
                    <Typography>July 07, 2024</Typography>
                  </Box>
                  <Typography mt={2} fontWeight="bold" fontSize={20}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit. Lorem ipsum dolor.
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "row" }} mt={4}>
                    <Typography sx={{ color: "green" }}>Read More</Typography>
                    <ArrowOutwardIcon sx={{ color: "green" }} />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          my={3}
        >
          <Typography fontSize={24} fontWeight="bold">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, cum?
          </Typography>
          <Box></Box>
        </Box>
        <Box px={4}>
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
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box
                component="img"
                src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=" // Replace with your image URL
                alt="Example"
                sx={{
                  width: "100%", // Set width
                  height: 500, // Set height
                  borderRadius: "8px", // Set border radius
                  boxShadow: 2, // Set shadow
                  objectFit: "cover", // Cover the box while keeping aspect ratio
                  // Add other styles as needed
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box mx={6} mt={4}>
                <Typography fontSize={20} fontWeight="bold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores, laboriosam.
                </Typography>
                <Typography fontSize={16}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores, laboriosam. Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Labore, corrupti.
                </Typography>
              </Box>
              <Box mx={6} mt={4}>
                <Typography fontSize={20} fontWeight="bold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores, laboriosam.
                </Typography>
                <Typography fontSize={16}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores, laboriosam. Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Labore, corrupti.
                </Typography>
              </Box>
              <Box mx={6} mt={4}>
                <Typography fontSize={20} fontWeight="bold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores, laboriosam.
                </Typography>
                <Typography fontSize={16}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores, laboriosam. Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Labore, corrupti.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box mx={4}>
          <Paper
            elevation={3}
            sx={{ borderRadius: "24px", backgroundColor: "white" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              py={2}
            >
              <Typography fontSize={20} fontWeight="bold">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, soluta!
              </Typography>
            </Box>
            <Box>
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
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Box px={2}>
                    <Paper
                      elevation={3}
                      sx={{ borderRadius: "24px", backgroundColor: "#f0efef" }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                        }}
                        py={2}
                        px={4}
                      >
                        <Box
                          component="img"
                          src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=" // Replace with your image URL
                          alt="Example"
                          sx={{
                            width: 60, // Set width
                            height: 60, // Set height
                            borderRadius: "8px", // Set border radius
                            boxShadow: 2, // Set shadow
                            objectFit: "cover", // Cover the box while keeping aspect ratio
                            // Add other styles as needed
                          }}
                        />
                        <Box mx={2}>
                          <Typography fontSize={20} fontWeight="bold">
                            Lorem ipsum dolor sit amet consectetur
                          </Typography>
                          <Typography fontSize={16}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                          mt={2}
                          px={4}
                        >
                          <TaskAltIcon />
                          <Typography mx={1}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit.
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                          mt={2}
                          px={4}
                        >
                          <TaskAltIcon />
                          <Typography mx={1}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit.
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                          mt={2}
                          px={4}
                        >
                          <TaskAltIcon />
                          <Typography mx={1}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit.
                          </Typography>
                        </Box>
                      </Box>
                      <Box my={3} px={4} py={2}>
                        <Button variant="contained">Contained</Button>
                      </Box>
                    </Paper>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Box px={2}>
                    <Paper
                      elevation={3}
                      sx={{ borderRadius: "24px", backgroundColor: "#f0efef" }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                        }}
                        py={2}
                        px={4}
                      >
                        <Box
                          component="img"
                          src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=" // Replace with your image URL
                          alt="Example"
                          sx={{
                            width: 60, // Set width
                            height: 60, // Set height
                            borderRadius: "8px", // Set border radius
                            boxShadow: 2, // Set shadow
                            objectFit: "cover", // Cover the box while keeping aspect ratio
                            // Add other styles as needed
                          }}
                        />
                        <Box mx={2}>
                          <Typography fontSize={20} fontWeight="bold">
                            Lorem ipsum dolor sit amet consectetur
                          </Typography>
                          <Typography fontSize={16}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                          mt={2}
                          px={4}
                        >
                          <TaskAltIcon />
                          <Typography mx={1}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit.
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                          mt={2}
                          px={4}
                        >
                          <TaskAltIcon />
                          <Typography mx={1}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit.
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                          mt={2}
                          px={4}
                        >
                          <TaskAltIcon />
                          <Typography mx={1}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit.
                          </Typography>
                        </Box>
                      </Box>
                      <Box my={3} px={4} py={2}>
                        <Button variant="contained">Contained</Button>
                      </Box>
                    </Paper>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Grid
                container
                spacing={2}
                flexDirection={{
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                  xl: "row",
                }}
              >
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Box px={2}>
                    <Paper
                      elevation={3}
                      sx={{ borderRadius: "24px", backgroundColor: "#f0efef" }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                        }}
                        py={2}
                        px={4}
                      >
                        <Box
                          component="img"
                          src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=" // Replace with your image URL
                          alt="Example"
                          sx={{
                            width: 60, // Set width
                            height: 60, // Set height
                            borderRadius: "8px", // Set border radius
                            boxShadow: 2, // Set shadow
                            objectFit: "cover", // Cover the box while keeping aspect ratio
                            // Add other styles as needed
                          }}
                        />
                        <Box mx={2}>
                          <Typography fontSize={20} fontWeight="bold">
                            Lorem ipsum dolor sit amet consectetur
                          </Typography>
                          <Typography fontSize={16}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                          mt={2}
                          px={4}
                        >
                          <TaskAltIcon />
                          <Typography mx={1}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit.
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                          mt={2}
                          px={4}
                        >
                          <TaskAltIcon />
                          <Typography mx={1}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit.
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                          mt={2}
                          px={4}
                        >
                          <TaskAltIcon />
                          <Typography mx={1}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit.
                          </Typography>
                        </Box>
                      </Box>
                      <Box my={3} px={4} py={2}>
                        <Button variant="contained">Contained</Button>
                      </Box>
                    </Paper>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Box px={2}>
                    <Paper
                      elevation={3}
                      sx={{ borderRadius: "24px", backgroundColor: "#f0efef" }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                        }}
                        py={2}
                        px={4}
                      >
                        <Box
                          component="img"
                          src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=" // Replace with your image URL
                          alt="Example"
                          sx={{
                            width: 60, // Set width
                            height: 60, // Set height
                            borderRadius: "8px", // Set border radius
                            boxShadow: 2, // Set shadow
                            objectFit: "cover", // Cover the box while keeping aspect ratio
                            // Add other styles as needed
                          }}
                        />
                        <Box mx={2}>
                          <Typography fontSize={20} fontWeight="bold">
                            Lorem ipsum dolor sit amet consectetur
                          </Typography>
                          <Typography fontSize={16}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                          mt={2}
                          px={4}
                        >
                          <TaskAltIcon />
                          <Typography mx={1}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit.
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                          mt={2}
                          px={4}
                        >
                          <TaskAltIcon />
                          <Typography mx={1}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit.
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                          mt={2}
                          px={4}
                        >
                          <TaskAltIcon />
                          <Typography mx={1}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit.
                          </Typography>
                        </Box>
                      </Box>
                      <Box my={3} px={4} py={2}>
                        <Button variant="contained">Contained</Button>
                      </Box>
                    </Paper>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          mx={4}
          my={2}
        >
          <Typography fontSize={20} fontWeight="bold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </Typography>
          <Button variant="contained">Contained</Button>
        </Box>
        <Box>
          <Grid container spacing={2} px={2} py={2}>
            <Grid xs={12} sm={12} md={4} lg={4} xl={4} px={2}>
              <Paper
                elevation={3}
                sx={{
                  borderRadius: "24px",
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=" // Replace with your image URL
                  alt="Example"
                  sx={{
                    width: "50%", // Set width
                    height: 200, // Set height
                    borderRadius: "50%", // Set border radius
                    boxShadow: 2, // Set shadow
                    objectFit: "cover", // Cover the box while keeping aspect ratio
                    // Add other styles as needed
                  }}
                  mt={2}
                  mb={1}
                />
                <Box sx={{ width: "100%" }} px={2} my={2}>
                  <Paper
                    elevation={3}
                    sx={{
                      borderRadius: "24px",
                      backgroundColor: "#f0efef",
                      width: "100%",
                    }}
                    px={2}
                  >
                    <Box px={2} py={2}>
                      <Typography fontSize={20} fontWeight="bold">
                        Lorem ipsum dolor sit.
                      </Typography>
                      <Typography fontSize={16}>
                        Lorem ipsum dolor sit.
                      </Typography>
                      <ArrowCircleLeftRoundedIcon />
                    </Box>
                  </Paper>
                </Box>
              </Paper>
            </Grid>
            <Grid xs={12} sm={12} md={4} lg={4} xl={4} px={2}>
              <Paper
                elevation={3}
                sx={{
                  borderRadius: "24px",
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=" // Replace with your image URL
                  alt="Example"
                  sx={{
                    width: "50%", // Set width
                    height: 200, // Set height
                    borderRadius: "50%", // Set border radius
                    boxShadow: 2, // Set shadow
                    objectFit: "cover", // Cover the box while keeping aspect ratio
                    // Add other styles as needed
                  }}
                  mt={2}
                  mb={1}
                />
                <Box sx={{ width: "100%" }} px={2} my={2}>
                  <Paper
                    elevation={3}
                    sx={{
                      borderRadius: "24px",
                      backgroundColor: "#f0efef",
                      width: "100%",
                    }}
                    px={2}
                  >
                    <Box px={2} py={2}>
                      <Typography fontSize={20} fontWeight="bold">
                        Lorem ipsum dolor sit.
                      </Typography>
                      <Typography fontSize={16}>
                        Lorem ipsum dolor sit.
                      </Typography>
                      <ArrowCircleLeftRoundedIcon />
                    </Box>
                  </Paper>
                </Box>
              </Paper>
            </Grid>
            <Grid xs={12} sm={12} md={4} lg={4} xl={4} px={2}>
              <Paper
                elevation={3}
                sx={{
                  borderRadius: "24px",
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=" // Replace with your image URL
                  alt="Example"
                  sx={{
                    width: "50%", // Set width
                    height: 200, // Set height
                    borderRadius: "50%", // Set border radius
                    boxShadow: 2, // Set shadow
                    objectFit: "cover", // Cover the box while keeping aspect ratio
                    // Add other styles as needed
                  }}
                  mt={2}
                  mb={1}
                />
                <Box sx={{ width: "100%" }} px={2} my={2}>
                  <Paper
                    elevation={3}
                    sx={{
                      borderRadius: "24px",
                      backgroundColor: "#f0efef",
                      width: "100%",
                    }}
                    px={2}
                  >
                    <Box px={2} py={2}>
                      <Typography fontSize={20} fontWeight="bold">
                        Lorem ipsum dolor sit.
                      </Typography>
                      <Typography fontSize={16}>
                        Lorem ipsum dolor sit.
                      </Typography>
                      <ArrowCircleLeftRoundedIcon />
                    </Box>
                  </Paper>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <Box mt={3} ml={2}>
          <Paper
            elevation={3}
            sx={{
              borderTopLeftRadius: "24px",
              borderBottomLeftRadius: "24px",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              backgroundColor: "black",
            }}
          >
            <Box py={3} px={2}>
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
                <Grid item xs={12} sm={12} md={9} lg={9} xl={9} mt={6}>
                  <Box px={6}>
                    <Typography fontSize={24} fontWeight="bold" color="white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odit, aliquam. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Nesciunt, perspiciatis.
                    </Typography>
                    <Typography fontSize={16} color="white" mt={4}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odit, aliquam.
                    </Typography>
                  </Box>
                  <Box
                    my={4}
                    px={6}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Button variant="contained">Contained</Button>
                    <Box mx={3} display="flex" alignItems="center">
                      <Button sx={{ color: "white" }}>Contained</Button>
                      <ArrowOutwardIcon sx={{ color: "white" }} />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                  <Box
                    component="img"
                    src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=" // Replace with your image URL
                    alt="Example"
                    sx={{
                      width: "90%", // Set width
                      height: 350, // Set height
                      borderRadius: "8px", // Set border radius
                      boxShadow: 2, // Set shadow
                      objectFit: "cover", // Cover the box while keeping aspect ratio
                      // Add other styles as needed
                    }}
                  />
                </Grid>
              </Grid>
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
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} mt={2}>
                  <Box px={6}>
                    <Typography fontSize={16} color="green" mt={2}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odit, aliquam.
                    </Typography>
                    <Typography fontSize={16} color="green" mt={1}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odit, aliquam.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={2} lg={2} xl={2} px={2}>
                  <Typography
                    sx={{
                      border: "1px solid white",
                      color: "white",
                      borderRadius: "24px",
                    }}
                    px={4}
                    py={6}
                    textAlign="center"
                  >
                    jkdsnjfe
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={2} lg={2} xl={2} px={2}>
                  <Typography
                    sx={{
                      border: "1px solid white",
                      color: "white",
                      borderRadius: "24px",
                    }}
                    px={4}
                    py={6}
                    textAlign="center"
                  >
                    jkdsnjfe
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={2} lg={2} xl={2} px={2}>
                  <Typography
                    sx={{
                      border: "1px solid white",
                      color: "white",
                      borderRadius: "24px",
                    }}
                    px={4}
                    py={6}
                    textAlign="center"
                  >
                    jkdsnjfe
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
        <Box mt={3} px={4}>
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
            <Grid item xs={12} sm={12} md={4.5} lg={4.5} xl={4.5}>
              <Typography fontSize={16} fontWeight="bold" color="green">
                Omify
              </Typography>
              <Typography fontSize={16} mt={2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                est reiciendis commodi officiis quibusdam quaerat ad, nostrum
                modi vel neque?
              </Typography>
              <Box mt={3}>
                <Paper
                  elevation={3}
                  sx={{ borderRadius: "12px", backgroundColor: "white" }}
                >
                  <Box
                    sx={{ display: "flex", alignItems: "center" }}
                    px={4}
                    py={1}
                  >
                    <EmailIcon sx={{ color: 'green' }} />
                    <Typography fontWeight="bold" mx={1}>Omify24@gmail.com</Typography>
                  </Box>
                </Paper>
              </Box>
              <Box mt={2}>
                <Paper
                  elevation={3}
                  sx={{ borderRadius: "12px", backgroundColor: "white" }}
                >
                  <Box
                    sx={{ display: "flex", alignItems: "center" }}
                    px={4}
                    py={1}
                  >
                    <LocalPhoneIcon sx={{ color: 'green' }} />
                    <Typography fontWeight="bold" mx={1}>+919999999999</Typography>
                  </Box>
                </Paper>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={2.5} lg={2.5} xl={2.5}>
              <Box px={4}>
            <Typography
           fontSize={20}
           fontWeight="bold"
          >
           Company
          </Typography>
            <Typography
           fontSize={16}
           mt={1}
          >
           Company
          </Typography>
            <Typography
           fontSize={16}
           mt={1}
          >
           Company
          </Typography>
            <Typography
           fontSize={16}
           mt={1}
          >
           Company
          </Typography>
            <Typography
           fontSize={16}
           mt={1}
          >
           Company
          </Typography>
            <Typography
           fontSize={16}
           mt={1}
          >
           Company
          </Typography>
            <Typography
           fontSize={16}
           mt={1}
          >
           Company
          </Typography>
          </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={2.5} lg={2.5} xl={2.5}>
              <Box px={4}>
            <Typography
           fontSize={20}
           fontWeight="bold"
          >
           Company
          </Typography>
            <Typography
           fontSize={16}
           mt={1}
          >
           Company
          </Typography>
            <Typography
           fontSize={16}
           mt={1}
          >
           Company
          </Typography>
            <Typography
           fontSize={16}
           mt={1}
          >
           Company
          </Typography>
            <Typography
           fontSize={16}
           mt={1}
          >
           Company
          </Typography>
            <Typography
           fontSize={16}
           mt={1}
          >
           Company
          </Typography>
            <Typography
           fontSize={16}
           mt={1}
          >
           Company
          </Typography>
          </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={2.5} lg={2.5} xl={2.5}>
              <Box px={4}>
            <Typography
           fontSize={20}
           fontWeight="bold"
          >
           Company
          </Typography>
            <Typography
           fontSize={16}
           mt={1}
          >
           Company
          </Typography>
            <Typography
           fontSize={16}
           mt={1}
          >
           Company
          </Typography>
            <Typography
           fontSize={16}
           mt={1}
          >
           Company
          </Typography>
            <Typography
           fontSize={16}
           mt={1}
          >
           Company
          </Typography>
            <Typography
           fontSize={16}
           mt={1}
          >
           Company
          </Typography>
            <Typography
           fontSize={16}
           mt={1}
          >
           Company
          </Typography>
          </Box>
            </Grid>
          </Grid>
        </Box>
        <Box mt={3}>
          <Divider />
          <Typography textAlign="center" mt={2}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, nam?</Typography>
        </Box>
      </Box>
    </>
  );
};

export default MainPage;
