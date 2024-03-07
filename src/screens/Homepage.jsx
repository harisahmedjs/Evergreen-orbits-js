import { Box, Button, Card, CardMedia, List, Typography } from '@mui/material'
import React from 'react'
import backgroundImage from '../assets/treecanopy.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faFilePen, faSeedling } from '@fortawesome/free-solid-svg-icons';
import Air from '../assets/air.png'
import Loved from '../assets/loved.png'
import reforestation from '../assets/reforestation.png'
import Sectwo from '../assets/secimage.png'
import GreenTree from '../assets/greentree.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { pink } from '@mui/material/colors';



const Homepage = () => {



  const styles = {
    container: {
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(250, 250, 250, 10)), url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat', // Corrected to camelCase
      backgroundSize: 'cover',
      width: '100%',
      height: '100%',
      opacity: '1',
    },
  };

  return (
    <>
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

        <Typography textAlign={'center'} variant='h2' fontSize={'40px'} sx={{
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

        <Typography textAlign={'center'} variant='h2' fontSize={'40px'} fontFamily={'Didot LT Pro, Bold'} fontWeight={600}>Affordable and Eco-Friendly, <br /> Reinventing Traditional Obituaries</Typography>
        <Typography variant='p' fontSize={'16px'} fontFamily={'Didot LT Pro, Bold'}>Create an Evergreen Obituary for only $30</Typography>
        <Button sx={{ background: '#378752', ":hover": { background: '#333333' }, borderRadius: '20px', }} variant="contained">Create Obituary</Button>

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
      {/* sec four IV start */}
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={2} padding={1} >
        <Typography textAlign={'center'} variant='h2' fontSize={'40px'} fontFamily={'Didot LT Pro, Bold'} >Celebrate Life and  Nature</Typography>
      </Box>
      <Box className="main-container">
        <Box width={222} height={477} >
          <Typography>
            hello world
          </Typography>
        </Box>
      </Box>
      {/* sec four IV end */}

<Box className='mainBox' sx={{ display: 'flex', marginLeft: '50px', marginBottom: '20px', marginTop: '20px' }}>
  <Box sx={{ marginRight: '35px' }}> <img src={GreenTree} className='imagetree' /> </Box>

  <Box className='Box2'>

    <Card className='mt-3' sx={{ border: '1px solid lightgray', borderRadius: '15px' }}>
      <Box sx={{ marginTop: '6px', cursor: 'pointer', width: '850px', padding: '20px', display: "inline-block" }}>
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
    <Card className='mt-3' sx={{ border: '1px solid lightgray', borderRadius: '15px', marginTop: "10px" }}>
      <Box sx={{ marginTop: '6px', cursor: 'pointer', width: '850px', padding: '20px' }}>
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
    <Card className='mt-3' sx={{ border: '1px solid lightgray', borderRadius: '15px', marginTop: "10px" }}>
      <Box sx={{ marginTop: '6px', cursor: 'pointer', width: '850px', padding: '20px' }}>
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
{/* Sec three  end */}

{/* sec four IV start */}
<Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={2} padding={1} marginTop={8}>
  <Typography textAlign={'center'} variant='h2' fontSize={'40px'} fontFamily={'Didot LT Pro, Bold'} fontWeight={600}>
    Celebrate Life and Nature
  </Typography>

  <Box width={1196} height={512} bgcolor={"#FFFFFF"}>
    <Box sx={{
      display: "flex",
      marginTop: "330px",
      marginLeft: "200px",
    }}>
      <button className='btn'>Support Reforestation</button>
      <button className='btn'>Air Quality Improvement</button>
      <button className='btn'>Enhance Biodiversity</button>
      <button className='btn'>Cultivate a Better Future</button>
    </Box>
    <hr/>
  <Box sx={{ textAlign: 'center',marginTop: "30px" }}>
    <Typography>
      Add your text here
    </Typography>
    <Typography>
      Add your text here
    </Typography>
  </Box>
  </Box>
</Box>


{/* sec four IV end */}

{/* sec five V start */}
<Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={2} padding={1}  marginTop={10}>
        <Typography textAlign={'center'} variant='h2' fontSize={'40px'} fontFamily={'Didot LT Pro, Bold'} fontWeight={600}>Affordable Obituaries with Purpose </Typography>
        <Typography variant='p' fontSize={'16px'} fontFamily={'Didot LT Pro, Bold'}>Only $5 per tree + a modest obituary setup fee</Typography>
        <Typography variant='p' fontSize={'16px'} fontFamily={'Didot LT Pro, Bold'}>Lower or eliminate your setup fee by planting more trees</Typography>
      </Box>

<Box className = "main-container" display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'row'} padding={3} gap={3}>
<Box
      width={280}
      height={477}
      bgcolor={'#FFFFFF'}
      border={'none'}
      padding={2}
      marginRight={"70px"}
    >
      <Typography variant='h6' fontWeight={600} >
        All Evergreen Obituaries include:
      </Typography>

      <Typography marginTop={"25px"}>
      <CheckCircleIcon
          style={{ color: '#378752', marginRight : "10px"}}
        />Memorial Trees
      </Typography> 
      
      <Typography marginTop={"25px"}>
      <CheckCircleIcon
          style={{ color: '#378752',  marginRight : "10px"}}
        />Ability to customize and <span className='sec4-span'> add treasured photos</span>
      </Typography>
      
       <Typography marginTop={"25px"}>
      <CheckCircleIcon
          style={{ color: '#378752', marginRight : "10px" }}
        />Interactive sharing where <span className='sec4-span'>others can post messages <span className='sec4-span'>and dedicate trees</span></span>
      </Typography>
      
       <Typography marginTop={"25px"}>
      <CheckCircleIcon
          style={{ color: '#378752',  marginRight : "10px"}}
        />Funeral and event info
      </Typography> 
    </Box>

    <Box width={230}  height={477} bgcolor={'#FFFFFF'}   border={'2px solid #E6E6E6'}>
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
          marginLeft : "45px",
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
          style={{ color: '#378752',  marginLeft : "20px" , marginRight : "10px"}}
        />Personalize
      </Typography>  <Typography marginTop={"12px"} fontSize={13}>
      <CheckCircleIcon
          style={{ color: '#378752',  marginLeft : "20px" , marginRight : "10px"}}
        />Share
      </Typography>  <Typography marginTop={"12px"} fontSize={13}>
      <CheckCircleIcon
          style={{ color: '#378752',  marginLeft : "20px", marginRight : "10px" }}
        />Funeral and Event Info
      </Typography> 
  </Typography>
</Box>
<Box width={230}  height={477} bgcolor={'#FFFFFF'} border={'2px solid #E6E6E6'}>
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
          marginLeft : "45px",
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
          style={{ color: '#378752',  marginLeft : "20px" , marginRight : "10px"}}
        />Personalize
      </Typography>  <Typography marginTop={"12px"} fontSize={13}>
      <CheckCircleIcon
          style={{ color: '#378752',  marginLeft : "20px" , marginRight : "10px"}}
        />Share
      </Typography>  <Typography marginTop={"12px"} fontSize={13}>
      <CheckCircleIcon
          style={{ color: '#378752',  marginLeft : "20px", marginRight : "10px" }}
        />Funeral and Event Info
      </Typography> 
  </Typography>
</Box>
<Box width={230}  height={477} bgcolor={'#FFFFFF'} border={'2px solid #E6E6E6'}>
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
          marginLeft : "45px",
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
          style={{ color: '#378752',  marginLeft : "20px" , marginRight : "10px"}}
        />Personalize
      </Typography>  <Typography marginTop={"12px"} fontSize={13}>
      <CheckCircleIcon
          style={{ color: '#378752',  marginLeft : "20px" , marginRight : "10px"}}
        />Share
      </Typography>  <Typography marginTop={"12px"} fontSize={13}>
      <CheckCircleIcon
          style={{ color: '#378752',  marginLeft : "20px", marginRight : "10px" }}
        />Funeral and Event Info
      </Typography> 
  </Typography>
</Box>


<Box display={'flex'} flexDirection={"column"} marginBottom={3} bgcolor={"#378752"} paddingTop={2}  borderRadius={"15px 15px 0 0"} >
  <Typography color={"#FFFFFF"} textAlign={"center"}>No Setup Fee</Typography>
  
<Box width={230}  height={477} bgcolor={'#FFFFFF'} border={'2px solid #E6E6E6'}>
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
          marginLeft : "45px",
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
          style={{ color: '#378752',  marginLeft : "20px" , marginRight : "10px"}}
        />Personalize
      </Typography>  <Typography marginTop={"12px"} fontSize={13}>
      <CheckCircleIcon
          style={{ color: '#378752',  marginLeft : "20px" , marginRight : "10px"}}
        />Share
      </Typography>  <Typography marginTop={"12px"} fontSize={13}>
      <CheckCircleIcon
          style={{ color: '#378752',  marginLeft : "20px", marginRight : "10px" }}
        />Funeral and Event Info
      </Typography> 
  </Typography>
</Box>
</Box>
</Box>
{/* sec five V end */}


    </>
  )
}

export default Homepage