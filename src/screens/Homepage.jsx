import React, { useState } from 'react';
import backgroundImage from "../assets/treecanopy.svg";
import { Box, Button, Card, CardMedia, List, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faFilePen, faSeedling } from '@fortawesome/free-solid-svg-icons';
import Air from '../assets/air.png'
import Air1 from "../assets/air1.jpg"
import Loved from '../assets/loved.png'
import reforestation from '../assets/reforestation.png'
import Plant1 from '../assets/plant1.jpg'
import BIrd from '../assets/bird1.jpg'
import Student from '../assets/student1.jpg'
import Sectwo from '../assets/secimage.png'
import GreenTree from '../assets/greentree.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Navbar from '../componenets/navbar';
import Footer from '../componenets/Footer';
import Midbannerone from '../assets/midbanner1.png'
import Midbannertwo from '../assets/midbanner2.svg'
import Midbannerthree from '../assets/midbanner3.svg'



const Homepage = () => {
  const phrases = [
    "Every Evergreen Obituary is an investment in the restoration of our environment.",
    "Trees are nature’s powerful air purifiers, absorbing harmful pollutants and releasing fresh, oxygen-rich air.",
    "Our reforestation partners ensure that your memorial trees are part of carefully planned ecosystems.",
    "Creating an Evergreen Obituary isn’t just about honoring the past; it’s about securing a brighter future for the next generation.",
  ];

  const additionalPhrases = [
    "We partner with internationally recognized reforestation partners who work tirelessly to replant trees in deforested areas, reviving lush green landscapes.",
    "By choosing to plant trees in honor of your loved ones, you’re not only creating a living tribute but actively contributing to a healthier environment.",
    "These trees create havens for birds, insects, and wildlife, contributing to a more balanced environment.",
    "Every memorial tree you plant becomes a legacy of hope, ensuring that the Earth we pass on is healthier, greener, and more vibrant.",
  ];
  const buttonImages = {
    1: Plant1,
    2: Air1,
    3: BIrd,
    4: Student,
  };

  const [selectedButton, setSelectedButton] = useState(1);
  const handleButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };
  const styles = {
    container: {
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(250, 250, 250, 1)), url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat', // Corrected to camelCase
      backgroundSize: 'cover',
      width: '100%',
      height: '100%',
      opacity: 1, // Removed quotes around 1
    },
  };


  return (
    <>

      <Navbar />
      <Box >


        <Box className='bgbanner' sx={styles.container}>

          {/* text btn start */}
          <Box className='mainboxtext' sx={{
            '@media screen and (max-width: 750px)': {
              display: 'flex',
              flexDirection: 'column-reverse'
            },
            '@media screen and (max-width:288px)': {
              width: '100%',

            },
          }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '10px',
              marginTop: '50px',

            }}  >
              <Typography variant='h3' sx={{
                '@media screen and (max-width: 750px)': {
                  fontSize: '38px',
                  textAlign: 'center'
                },
              }} fontSize={'48px'} fontFamily={'Didot LT Pro, Bold'}>
                Plant Trees with Every Obituary
              </Typography>
              <Typography variant='p' sx={{
                width: '44%', textAlign: 'center', fontSize: '18px', '@media screen and (max-width: 750px)': {
                  fontSize: '20px',
                  textAlign: 'center',
                  width: '100%',
                  padding: '5px'
                },
              }}>
                Beautiful, sustainable, shareable obituaries that support forests in need, starting at $30
              </Typography>
              <Typography>
                <Button sx={{ background: '#378752', ":hover": { background: '#333333' }, borderRadius: '20px', }} variant="contained">Create Obituary</Button>
              </Typography>
            </Box>
            {/* text btn end */}

            {/* image sec strat */}
            <Box className='imagesTop' sx={{
              display: 'flex',
              alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', gap: '15px', marginTop: '30px',
              '@media screen and (max-width: 750px)': {


              },
            }}>
              <Box sx={{
                '@media screen and (max-width: 750px)': {
                  display: 'none'

                },
              }}>
                <CardMedia
                  component="img"
                  image={Air}
                  alt="Your Image"
                  sx={{ width: '220px' }}
                />


              </Box>
              <Box>
                <CardMedia
                  component="img"
                  image={Loved}
                  alt="Your Image"
                  width='464px'
                  sx={{
                    width: '464px', '@media screen and (max-width:468px)': {
                      width: '300px',
                      margin: '0 auto'

                    }, '@media screen and (max-width:288px)': {
                      width: '260px',

                    },
                  }}
                />
              </Box>
              <Box>
                <CardMedia
                  component="img"
                  image={reforestation}
                  alt="Your Image"
                  sx={{
                    width: '220px', '@media screen and (max-width:468px)': {
                      width: '160px',
                      margin: '0 auto'

                    }, '@media screen and (max-width:288px)': {
                      width: '120px',

                    },
                  }}
                />
              </Box>
              <Box sx={{
                '@media screen and (max-width:1300px)': {
                  display: 'none'

                }, '@media screen and (max-width:750px)': {
                  display: 'block'

                },
              }}>
                <CardMedia
                  component="img"
                  image={Air}
                  alt="Your Image"
                  sx={{
                    width: '220px', '@media screen and (max-width:468px)': {
                      width: '160px',
                      margin: '0 auto'

                    }, '@media screen and (max-width:288px)': {
                      width: '120px',

                    },
                  }}
                />
              </Box>
            </Box>
          </Box>
          {/* image sec end */}
        </Box>

        {/* Section 2nd Start */}
        <Box >
          {/* heading */}
          <Typography variant='h2' textAlign={'center'} fontSize={'40px'} fontFamily={'Didot LT Pro, Bold'} marginTop={5} sx={{
            '@media screen and (max-width:900px)': {
              fontSize: '28px'

            },
          }}>
            How Does EvergreenObits Work
          </Typography>
          {/* heading end */}
          <Box className='planes' sx={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-evenly', padding: '20px',
            '@media screen and (max-width:900px)': {
              display: 'flex',
              gap: '50px',
              flexDirection: 'column'

            },
          }}>
            {/* Box one start */}
            <Box sx={{
              width: '30%', '@media screen and (max-width:900px)': {
                width: 'auto'

              },
            }}>
              <Box sx={{ textAlign: 'center' }}>
                <FontAwesomeIcon fontSize={'38px'} color='#378752' icon={faFilePen} />
              </Box>
              <Typography variant='h2' textAlign={'center'} fontSize={'40px'} fontFamily={'Didot LT Pro, Bold'} >Publish</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                <Box sx={{
                  textAlign: 'center', width: '85%',

                }}>
                  <Typography variant='p' sx={{

                  }}>
                    Create an obituary page with you loved one’s story and a treasured photo
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/* Box one end */}

            {/* Box 2 start  */}
            <Box sx={{
              width: '30%', '@media screen and (max-width:900px)': {
                width: 'auto'

              },
            }}>
              <Box sx={{ textAlign: 'center' }}>
                <FontAwesomeIcon fontSize={'38px'} color='#378752' icon={faSeedling} />

              </Box>
              <Typography variant='h2' textAlign={'center'} fontSize={'40px'} fontFamily={'Didot LT Pro, Bold'} >Plant</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                <Box sx={{ textAlign: 'center', width: '85%' }}>
                  <Typography variant='p' clas>
                    Plant memorial trees in their honor and receive a certificate from our internationally recognized reforestation partners
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/* Box 2 end */}


            {/* Box 3 start  */}
            <Box sx={{
              width: '30%', '@media screen and (max-width:900px)': {
                width: 'auto'

              },
            }}>
              <Box sx={{ textAlign: 'center' }}>
                <FontAwesomeIcon fontSize={'38px'} color='#378752' icon={faArrowUpFromBracket} />
              </Box>
              <Typography variant='h2' textAlign={'center'} fontSize={'40px'} fontFamily={'Didot LT Pro, Bold'} >Share</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                <Box sx={{ textAlign: 'center', width: '85%' }}>
                  <Typography variant='p' clas>
                    Share the obituary page, inviting others to post messages, photos, and plant additional memorial trees
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/* Box 3 end */}
          </Box>



          <Typography display={'flex'} alignItems={'center'} justifyContent={'center'} padding={2}>
            <Button sx={{ background: '#378752', ":hover": { background: '#333333' }, borderRadius: '20px', }} variant="contained">Create Obituary</Button>
          </Typography>
        </Box>
        {/* Section 2nd End */}

        {/* sec two start */}
        <Box className='scrImage' display={'flex'} alignItems={'center'}
          justifyContent={'center'} padding={10} gap={5} sx={{
            '@media screen and (max-width:1000px)': {
              display: 'flex',
              flexDirection: 'column-reverse',
              padding: '20px'

            },
          }} >

          {/* middle Box Start */}
          <Box className="middleBox">
            <Typography variant='h2' fontSize={'40px'}
              fontFamily={'Didot LT Pro, Bold'} fontWeight={'bold'} sx={{
                '@media screen and (max-width:750px)': {
                  fontSize: '24px',
                  width: 'auto'

                },
              }} >
              Obituaries Rooted in Love and Memorial Trees
            </Typography>
            <List>
              <ul style={{ listStyleType: 'disc', fontSize: '18px' }}>
                <li>Each Evergreen Obituary is a dynamic canvas where memories come to life and an ever-growing forest of trees begins to flourish.</li>
                <li>Celebrate their life, share their story, add cherished photos, and plant memorial trees that serve as a living symbol of their legacy.</li>
                <li>Invite friends and family to contribute memories, photos, and even plant additional trees.

                  Start crafting your Evergreen Obituary today..</li>
              </ul>

            </List>
            <Box>
              <Typography display={'flex'} gap={3} sx={{
                '@media screen and (max-width:480px)': {
                  display: 'flex',
                  flexDirection: 'column',



                },
              }}>
                <Button sx={{ background: '#378752', ":hover": { background: '#333333' }, borderRadius: '20px', }} variant="contained">Create Obituary</Button>




                <Button sx={{ background: 'white', ":hover": { background: '#333333', color: 'white' }, borderRadius: '20px', color: '#378752', border: '1px solid #378752 ' }} variant="contained">View Example</Button>
              </Typography>

            </Box>
          </Box>
          {/* middle 2 box start */}
          <Box  >
            <CardMedia
              component="img"
              image={Sectwo}
              alt="Your Image"
              sx={{
                width: '585px', '@media screen and (max-width:750px)': {
                  width: '358px',
                  margin: '0 auto'

                }, '@media screen and (max-width:288px)': {
                  width: '100%',

                },
              }}
            />
          </Box>
          {/* middle 2 box end */}
        </Box>

        {/* middle Box End */}


        {/* sec two End */}

        {/* Sec three start */}

        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={2} padding={1} >

          <Typography textAlign={'center'} variant='h2' fontSize={'40px'} fontFamily={'Didot LT Pro, Bold'} fontWeight={600} sx={{
            '@media screen and (max-width:900px)': {
              fontSize: '24px'

            },
          }} >Affordable and Eco-Friendly, <br /> Reinventing Traditional Obituaries</Typography>
          <Typography variant='p' fontSize={'16px'}>Create an Evergreen Obituary for only $30</Typography>
          <Button sx={{
            background: '#378752', ":hover": { background: '#333333' }, borderRadius: '20px', '@media screen and (max-width:366px)': {
              width: '100%'

            },
          }} variant="contained">Create Obituary</Button>
        </Box>




        {/* Sec three III Start */}


        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} padding={5}>
          <Box className='d-flex align-items-center justify-content-center gap-5' sx={{
            '@media screen and (max-width:900px)': {
              display: 'flex',
              flexDirection: 'column'

            },
          }}>
            <Box>
              <CardMedia
                component="img"
                image={GreenTree}
                alt="Your Image"
                sx={{
                  width: '464px', '@media screen and (max-width:462px)': {
                    width: '358px'

                  }, '@media screen and (max-width: 356px)': {
                    width: '320px'
                  },
                  '@media screen and (max-width:288px)': {
                    width: '275px',

                  },
                }}
              />

            </Box>
            <Box>
              <Box>
                <Card className='' sx={{ border: '1px solid lightgray', borderRadius: '15px', width: '100%' }}>
                  <Box sx={{ marginTop: '6px', cursor: 'pointer', padding: '20px', }}>
                    <Box>
                      <Typography fontSize={20} fontWeight={700} fontFamily={'Didot LT Pro, Bold'}>
                        Affordable
                      </Typography>
                      <Typography fontSize={16} marginTop={2} fontFamily={'Didot LT Pro, Bold'}>
                        Don’t spend hundreds or thousands of dollars on obituaries that often contribute to paper waste and the unnecessary sacrifice of trees
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Box>
              <Box>
                <Card className='' sx={{ border: '1px solid lightgray', borderRadius: '15px', marginTop: "10px", width: '100%' }}>
                  <Box sx={{ marginTop: '6px', cursor: 'pointer', width: '100%', padding: '20px' }}>
                    <Box>
                      <Typography fontSize={20} fontWeight={700} fontFamily={'Didot LT Pro, Bold'}>
                        Eco-friendly
                      </Typography>
                      <Typography fontSize={16} marginTop={2} fontFamily={'Didot LT Pro, Bold'}>
                        Traditional obituaries, including those generated through leading obituary websites and funeral homes, often find their way into printed newspapers, perpetuating an endless cycle of waste and deforestation
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Box>
              <Box>
                <Card className='' sx={{ border: '1px solid lightgray', borderRadius: '15px', marginTop: "10px", width: '100%' }}>
                  <Box sx={{ marginTop: '6px', cursor: 'pointer', width: '100%', padding: '20px' }}>
                    <Box>
                      <Typography fontSize={20} fontWeight={700} fontFamily={'Didot LT Pro, Bold'}>
                        Sustainable
                      </Typography>
                      <Typography fontSize={16} marginTop={2} fontFamily={'Didot LT Pro, Bold'}>
                        By offering a digital-only solution that plants memorial trees with every obituary, we’re redefining the way loved ones are honored and remembered. At EvergreenObits, we believe in a better way to commemorate life, one that respects both your budget and our planet Earth
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* sec four IV end */}

        {/* mid Banner Start */}


        <Box display={'flex'} alignItems={'center'}
          justifyContent={'center'} flexDirection={'column'} >
          <Box >
            <Box bgcolor={'#F7F7F7'} padding={4} sx={{
              '@media (max-width: 700px)': {
                width: '100%',
              },
              '@media (max-width: 410px)': {
                width: 'auto',
                padding: '10px'
              },
            }}>
              <Box textAlign={'center'} sx={{ opacity: 0.5, }} >
                <Typography variant='p' sx={{
                  '@media (max-width: 375px)': {
                    fontSize: '12px'
                  }
                }}>
                  Our National Reforestation Partners
                </Typography>


                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={15} sx={{
                  '@media (max-width: 1180px)': {
                    gap: '20px' // Adjust width at smaller screen sizes
                  },
                }}>
                  <Typography>
                    <CardMedia
                      component="img"
                      image={Midbannertwo}
                      alt="Your Image"
                      sx={{
                        opacity: 0.5, filter: 'Grayscale(100%)', width: '114.94px', '@media (max-width: 375px)': {
                          width: '90px'
                        }, '@media (max-width: 280px)': {
                          width: '100%'
                        },
                      }}
                    />
                  </Typography>
                  <Typography>
                    <CardMedia
                      component="img"
                      image={Midbannerone}
                      alt="Your Image"
                      sx={{
                        opacity: 0.5, filter: 'Grayscale(100%)', width: '322px', '@media (max-width: 530px)': {
                          width: '200px'
                        },
                        '@media (max-width: 280px)': {
                          width: '100%'
                        },
                      }}
                    />
                  </Typography>
                  <Typography sx={{

                  }}>
                    <CardMedia
                      component="img"
                      image={Midbannerthree}
                      alt="Your Image"
                      sx={{
                        opacity: 0.5, filter: 'Grayscale(100%)', width: '164px', '@media (max-width: 682px)': {
                          display: 'none'
                        }
                      }}
                    />
                  </Typography>
                </Box>


              </Box>
            </Box>
          </Box>
        </Box>



        {/* mid Banner End */}



        {/* sec four IV start */}


        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={2} padding={1} marginTop={8}>
          <Typography textAlign={'center'} variant='h2' fontSize={'40px'} fontFamily={'Didot LT Pro, Bold'} fontWeight={600}>
            Celebrate Life and Nature
          </Typography>

          <Box bgcolor={'#FFFFFF'}
            sx={{
              '@media (max-width: 1100px)': {
                width: 'auto',

              },
            }}
          >
            <Box sx={{ margin: '0 auto' }}>
              <CardMedia
                component="img"
                image={selectedButton ? buttonImages[selectedButton] : ''}
                alt="Your Image"
                sx={{
                  borderRadius: '10px', marginBottom: '40px', '@media (max-width: 1100px)': {
                    margin: '0 auto',
                    width: '800px',

                  }, '@media (max-width: 801px)': {

                    width: '750px',

                  }, '@media (max-width: 735px)': {

                    width: '600px',

                  }, '@media (max-width: 600px)': {

                    width: '500px',

                  }, '@media (max-width: 500px)': {

                    width: '450px',

                  },
                  '@media (max-width: 454px)': {

                    width: '350px',

                  },



                }}
              />
              <Box sx={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Button

                  onClick={() => handleButtonClick(1)}
                  sx={{
                    color: selectedButton === 1 ? 'black' : 'initial',
                    borderBottom: selectedButton === 1 ? '2px solid black' : 'initial',
                    fontWeight: selectedButton === 1 ? '500' : 'initial',
                    '@media (max-width: 926px)': {
                      fontSize: '15px'

                    },
                  }}
                >
                  <Box sx={{
                    '@media (max-width: 926px)': {
                      display: 'none'

                    },
                  }}>
                    Support Reforestation
                  </Box>

                  <Box sx={{
                    display: 'none', '@media (max-width: 926px)': {
                      display: 'block'

                    },
                  }}>
                    1
                  </Box>



                </Button>
                <Button
                  onClick={() => handleButtonClick(2)}
                  sx={{
                    color: selectedButton === 1 ? 'black' : 'initial',
                    borderBottom: selectedButton === 1 ? '2px solid black' : 'initial',
                    fontWeight: selectedButton === 1 ? '500' : 'initial',
                    '@media (max-width: 926px)': {
                      fontSize: '15px'

                    },
                  }}
                >
                  <Box sx={{
                    '@media (max-width: 926px)': {
                      display: 'none'

                    },
                  }}>
                    Air Quality Improvement
                  </Box>

                  <Box sx={{
                    display: 'none', '@media (max-width: 926px)': {
                      display: 'block'

                    },
                  }}>
                    2
                  </Box>

                </Button>
                <Button
                  onClick={() => handleButtonClick(3)}
                  sx={{
                    color: selectedButton === 1 ? 'black' : 'initial',
                    borderBottom: selectedButton === 1 ? '2px solid black' : 'initial',
                    fontWeight: selectedButton === 1 ? '500' : 'initial',
                    '@media (max-width: 926px)': {
                      fontSize: '15px',


                    },
                  }}
                >

                  <Box sx={{
                    '@media (max-width: 926px)': {
                      display: 'none'

                    },
                  }}>
                    Enhance Biodiversity
                  </Box>

                  <Box sx={{
                    display: 'none', '@media (max-width: 926px)': {
                      display: 'block'

                    },
                  }}>
                    3
                  </Box>



                </Button>
                <Button
                  onClick={() => handleButtonClick(4)}
                  sx={{
                    color: selectedButton === 1 ? 'black' : 'initial',
                    borderBottom: selectedButton === 1 ? '2px solid black' : 'initial',
                    fontWeight: selectedButton === 1 ? '500' : 'initial',
                    '@media (max-width: 926px)': {
                      fontSize: '15px'

                    },
                  }}
                >
                  <Box sx={{
                    '@media (max-width: 926px)': {
                      display: 'none'

                    },
                  }}>Cultivate a Better Future</Box>
                  <Box sx={{
                    display: 'none', '@media (max-width: 926px)': {
                      display: 'block'

                    },
                  }}>
                    4
                  </Box>
                </Button>
              </Box>
            </Box>

            <Box sx={{ textAlign: 'center', marginTop: '30px' }}>
              <Typography variant="h6" color="#333333" fontSize="16px">
                {selectedButton ? phrases[selectedButton - 1] : phrases[0]}
              </Typography>
              <Typography variant="body1" color="#333333" marginTop="9px"
                sx={{
                  fontSize: '17px',
                  '@media (max-width: 280px)': {
                    width: '100%'
                  },
                }}
              >
                {selectedButton ? additionalPhrases[selectedButton - 1] : additionalPhrases[0]}
              </Typography>
            </Box>
          </Box>
        </Box>


        {/* sec four IV end */}

        {/* sec five V start */}

        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={2} padding={1} marginTop={10}>
          <Typography textAlign={'center'} variant='h2' fontSize={'40px'} fontFamily={'Didot LT Pro, Bold'} fontWeight={600}>Affordable Obituaries with Purpose </Typography>
          <Typography variant='p' fontSize={'16px'} fontFamily={'Didot LT Pro, Bold'}>Only $5 per tree + a modest obituary setup fee</Typography>
          <Typography variant='p' fontSize={'16px'} fontFamily={'Didot LT Pro, Bold'}>Lower or eliminate your setup fee by planting more trees</Typography>
        </Box>

        <Box className="main-container" display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'row'} padding={3} gap={3} sx={{
          '@media (max-width: 1250px)': {
            display: 'flex',
            flexDirection: 'column'
          },
        }}>
          <Box
            width={280}
            height={477}
            bgcolor={'#FFFFFF'}
            border={'none'}
            padding={2}
            sx={{
              '@media (max-width: 1250px)': {
                width: '50%'
              },
            }}

          >
            <Typography variant='h6' fontWeight={600} sx={{
              '@media (max-width: 1250px)': {
                fontSize: '30px'
              },
            }}  >
              All Evergreen Obituaries include:
            </Typography>


            <Box sx={{
              '@media (max-width:1250)': {
                display: 'flex', flexDirection: 'column', justifyContent: 'center'
              },
              textAlign: 'cenetr'
            }}>
              <Typography marginTop={"25px"}>
                <CheckCircleIcon
                  style={{ color: '#378752' }}
                />Memorial Trees
              </Typography>

              <Typography marginTop={"25px"}>
                <CheckCircleIcon
                  style={{ color: '#378752' }}
                />Ability to customize and  add treasured photos
              </Typography>

              <Typography marginTop={"25px"}>
                <CheckCircleIcon
                  style={{ color: '#378752' }}
                />Interactive sharing whereothers can post messages and dedicate trees
              </Typography>

              <Typography marginTop={"25px"}>
                <CheckCircleIcon
                  style={{ color: '#378752' }}
                />Funeral and event info
              </Typography>
            </Box>





          </Box>

          <Box width={230} height={477} bgcolor={'#FFFFFF'} border={'2px solid #E6E6E6'}  >
            <Typography color={"#333333"} fontWeight={600} marginTop={15} marginLeft={6}  >
              1 Memorial Tree
            </Typography>
            <Typography variant='h4' fontWeight={700} marginTop={3} marginLeft={10}>
              $30
            </Typography>
            <Typography marginTop={1} marginLeft={4}>
              Includes $25 Setup Fee
            </Typography>
            <Button
              sx={{
                background: '#378752',
                borderRadius: '20px',
                marginLeft: "45px",
                marginTop: "10px",
                '&:hover': {
                  background: '#333333',
                },
              }}
              variant="contained"
            >
              Get started
            </Button>
            <Typography marginTop={6}>
              <Typography marginTop={"12px"} fontSize={13}>
                <CheckCircleIcon
                  style={{ color: '#378752', marginLeft: "20px", marginRight: "10px" }}
                />Personalize
              </Typography>  <Typography marginTop={"12px"} fontSize={13}>
                <CheckCircleIcon
                  style={{ color: '#378752', marginLeft: "20px", marginRight: "10px" }}
                />Share
              </Typography>  <Typography marginTop={"12px"} fontSize={13}>
                <CheckCircleIcon
                  style={{ color: '#378752', marginLeft: "20px", marginRight: "10px" }}
                />Funeral and Event Info
              </Typography>
            </Typography>
          </Box>
          <Box width={230} height={477} bgcolor={'#FFFFFF'} border={'2px solid #E6E6E6'}>
            <Typography color={"#333333"} fontWeight={600} marginTop={15} marginLeft={6}>
              5 Memorial Tree
            </Typography>
            <Typography variant='h4' fontWeight={700} marginTop={3} marginLeft={10}>
              $45
            </Typography>
            <Typography marginTop={1} marginLeft={4}>
              Includes $20 Setup Fee
            </Typography>
            <Button
              sx={{
                background: '#378752',
                borderRadius: '20px',
                marginLeft: "45px",
                marginTop: "10px",
                '&:hover': {
                  background: '#333333',
                },
              }}
              variant="contained"
            >
              Get started
            </Button>
            <Typography marginTop={6}>
              <Typography marginTop={"12px"} fontSize={13}>
                <CheckCircleIcon
                  style={{ color: '#378752', marginLeft: "20px", marginRight: "10px" }}
                />Personalize
              </Typography>  <Typography marginTop={"12px"} fontSize={13}>
                <CheckCircleIcon
                  style={{ color: '#378752', marginLeft: "20px", marginRight: "10px" }}
                />Share
              </Typography>  <Typography marginTop={"12px"} fontSize={13}>
                <CheckCircleIcon
                  style={{ color: '#378752', marginLeft: "20px", marginRight: "10px" }}
                />Funeral and Event Info
              </Typography>
            </Typography>
          </Box>
          <Box width={230} height={477} bgcolor={'#FFFFFF'} border={'2px solid #E6E6E6'}>
            <Typography color={"#333333"} fontWeight={600} marginTop={15} marginLeft={6}>
              10 Memorial Tree
            </Typography>
            <Typography variant='h4' fontWeight={700} marginTop={3} marginLeft={10}>
              $60
            </Typography>
            <Typography marginTop={1} marginLeft={4}>
              Includes $10 Setup Fee
            </Typography>
            <Button
              sx={{
                background: '#378752',
                borderRadius: '20px',
                marginLeft: "45px",
                marginTop: "10px",
                '&:hover': {
                  background: '#333333',
                },
              }}
              variant="contained"
            >
              Get started
            </Button>
            <Typography marginTop={6}>
              <Typography marginTop={"12px"} fontSize={13}>
                <CheckCircleIcon
                  style={{ color: '#378752', marginLeft: "20px", marginRight: "10px" }}
                />Personalize
              </Typography>  <Typography marginTop={"12px"} fontSize={13}>
                <CheckCircleIcon
                  style={{ color: '#378752', marginLeft: "20px", marginRight: "10px" }}
                />Share
              </Typography>  <Typography marginTop={"12px"} fontSize={13}>
                <CheckCircleIcon
                  style={{ color: '#378752', marginLeft: "20px", marginRight: "10px" }}
                />Funeral and Event Info
              </Typography>
            </Typography>
          </Box>


          <Box display={'flex'} flexDirection={"column"} marginBottom={3} bgcolor={"#378752"} paddingTop={2} borderRadius={"15px 15px 0 0"} >
            <Typography color={"#FFFFFF"} textAlign={"center"}>No Setup Fee</Typography>

            <Box width={230} height={477} bgcolor={'#FFFFFF'} border={'2px solid #E6E6E6'}>
              <Typography color={"#333333"} fontWeight={600} marginTop={15} marginLeft={6}>
                15 Memorial Tree
              </Typography>
              <Typography variant='h4' fontWeight={700} marginTop={3} marginLeft={10}>
                $75
              </Typography>
              <Typography marginTop={1} marginLeft={8}>
                no Setup Fee
              </Typography>
              <Button
                sx={{
                  background: '#378752',
                  borderRadius: '20px',
                  marginLeft: "45px",
                  marginTop: "10px",
                  '&:hover': {
                    background: '#333333',
                  },
                }}
                variant="contained"
              >
                Get started
              </Button>
              <Typography marginTop={6}>
                <Typography marginTop={"12px"} fontSize={13}>
                  <CheckCircleIcon
                    style={{ color: '#378752', marginLeft: "20px", marginRight: "10px" }}
                  />Personalize
                </Typography>  <Typography marginTop={"12px"} fontSize={13}>
                  <CheckCircleIcon
                    style={{ color: '#378752', marginLeft: "20px", marginRight: "10px" }}
                  />Share
                </Typography>  <Typography marginTop={"12px"} fontSize={13}>
                  <CheckCircleIcon
                    style={{ color: '#378752', marginLeft: "20px", marginRight: "10px" }}
                  />Funeral and Event Info
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box >
      {/* sec five V end */}
      < Footer />
    </>
  )
}

export default Homepage