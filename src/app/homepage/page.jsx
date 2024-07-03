"use client";
import TimelineComponent from "@/components/TimeLinecomponent";
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import DrawerAppBar from "../home/page";
import Slider from "react-slick";
import { useEffect, useState } from "react";

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
    // slidesToShow: 1,
    // slidesToScroll: 3,
    // lazyLoad: true,
    // autoplay: true,
    // autoplaySpeed: 2000
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

        {/* <Box sx={{ width: '50%', my: 4 }}>
      <Slider {...settings}>
        <Box
          component="img"
          src="https://th.bing.com/th/id/OIP.urA1OQAvQeHrnmTB7e_o3AHaE7?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Image 1"
          sx={{
            width: "400px",
            height: "300px",
            borderRadius: "30px",
            boxShadow: 2,
            margin: 2,
          }}
        />
        <Box
          component="img"
          src="https://th.bing.com/th/id/OIP.AQWbN0mvvCj_T-QNxndQAgHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Image 2"
          sx={{
            width: "400px",
            height: "300px",
            borderRadius: "30px",
            boxShadow: 2,
            margin: 2,
          }}
        />
        <Box
          component="img"
          src="https://th.bing.com/th/id/OIP.PyFNiTk-edap7LADnaw9IQHaEA?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Image 3"
          sx={{
            width: "400px",
            height: "300px",
            borderRadius: "30px",
            boxShadow: 2,
            margin: 2,
          }}
        />
        <Box
          component="img"
          src="https://th.bing.com/th/id/OIP.upVp_8A0fM4h63Ds_jE57AHaEL?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Image 4"
          sx={{
            width: "400px",
            height: "300px",
            borderRadius: "30px",
            boxShadow: 2,
            margin: 2,
          }}
        />
        <Box
          component="img"
          src="https://th.bing.com/th/id/OIP.A-_MbAsFQhWV_KdZ9xPUjAHaFH?w=249&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Image 5"
          sx={{
            width: "400px",
            height: "300px",
            borderRadius: "30px",
            boxShadow: 2,
            margin: 2,
          }}
        />
        <Box
          component="img"
          src="https://th.bing.com/th/id/OIP.PyFNiTk-edap7LADnaw9IQHaEA?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Image 6"
          sx={{
            width: "400px",
            height: "300px",
            borderRadius: "30px",
            boxShadow: 2,
            margin: 2,
          }}
        />
      </Slider>
    </Box> */}
        <Box
          style={{
            backgroundColor: "black",
            borderRadius: "12px",
            padding: 12,
          }}
          mt={2}
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
           <Paper elevation={3} style={{ borderRadius: '24px' }}>
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
                <Typography fontWeight="bold" fontSize={20} p={2}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, consequatur cum. Obcaecati, vel. Magni necessitatibus aspernatur voluptate dolor totam culpa.</Typography>
           </Paper>
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={4} xl={4} px={2}>
           <Paper elevation={3} style={{ borderRadius: '24px', marginBottom: '12px' }}>
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
                <Typography fontWeight="bold" fontSize={20} p={2}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, quisquam.</Typography>
           </Paper>
           <Paper elevation={3} style={{ borderRadius: '24px' }}>
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
                <Typography fontWeight="bold" fontSize={20} p={2}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, quisquam.</Typography>
           </Paper>
          </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default MainPage;
