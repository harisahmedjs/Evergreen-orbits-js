import { Box, Button, Card, List, Typography } from '@mui/material'
import React from 'react'
import backgroundImage from '../assets/treecanopy.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faFilePen, faSeedling } from '@fortawesome/free-solid-svg-icons';
import Air from '../assets/air.png'
import Loved from '../assets/loved.png'
import reforestation from '../assets/reforestation.png'
import Sectwo from '../assets/secimage.png'
import GreenTree from '../assets/greentree.png'


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
      <Box sx={styles.container}>

        {/* text btn start */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '10px', marginTop: '50px' }}  >
          <Typography variant='h3' fontSize={'48px'} fontFamily={'Didot LT Pro, Bold'}>
            Plant Trees with Every Obituary
          </Typography>
          <Typography variant='p' sx={{ width: '44%', textAlign: 'center', fontSize: '18px' }}>
            Beautiful, sustainable, shareable obituaries that support forests in need, starting at $30
          </Typography>
          <Typography>
            <Button sx={{ background: '#378752', ":hover": { background: '#333333' }, borderRadius: '20px', }} variant="contained">Create Obituary</Button>
          </Typography>
        </Box>
        {/* text btn end */}

        {/* image sec strat */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginTop: '30px' }}>
          <Box>
            <img src={Air} alt="Your Image" style={{ width: '220px' }} />
          </Box>
          <Box>
            <img src={Loved} alt="Your Image" style={{ width: '464px' }} />
          </Box>
          <Box>
            <img src={reforestation} alt="Your Image" style={{ width: '220px' }} />
          </Box>
        </Box>
        {/* image sec end */}
      </Box>

      {/* Section 2nd Start */}
      <Box >
        {/* heading */}
        <Typography variant='h2' textAlign={'center'} fontSize={'40px'} fontFamily={'Didot LT Pro, Bold'} marginTop={5}>
          How Does EvergreenObits Work
        </Typography>
        {/* heading end */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', padding: '20px' }}>
          {/* Box one start */}
          <Box sx={{ width: '30%' }}>
            <Box sx={{ textAlign: 'center' }}>
              <FontAwesomeIcon fontSize={'38px'} color='#378752' icon={faFilePen} />
            </Box>
            <Typography variant='h2' textAlign={'center'} fontSize={'40px'} fontFamily={'Didot LT Pro, Bold'} >Publish</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
              <Box sx={{ textAlign: 'center', width: '85%' }}>
                <Typography variant='p'>
                  Create an obituary page with you loved one’s story and a treasured photo
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* Box one end */}

          {/* Box 2 start  */}
          <Box sx={{ width: '30%' }}>
            <Box sx={{ textAlign: 'center' }}>
              <FontAwesomeIcon fontSize={'38px'} color='#378752' icon={faSeedling} />

            </Box>
            <Typography variant='h2' textAlign={'center'} fontSize={'40px'} fontFamily={'Didot LT Pro, Bold'} >Plant</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
              <Box sx={{ textAlign: 'center', width: '85%' }}>
                <Typography variant='p'>
                  Plant memorial trees in their honor and receive a certificate from our internationally recognized reforestation partners
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* Box 2 end */}


          {/* Box 3 start  */}
          <Box sx={{ width: '30%' }}>
            <Box sx={{ textAlign: 'center' }}>
              <FontAwesomeIcon fontSize={'38px'} color='#378752' icon={faArrowUpFromBracket} />
            </Box>
            <Typography variant='h2' textAlign={'center'} fontSize={'40px'} fontFamily={'Didot LT Pro, Bold'} >Share</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
              <Box sx={{ textAlign: 'center', width: '85%' }}>
                <Typography variant='p'>
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
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'} padding={10} gap={5}>

        {/* middle Box Start */}
        <Box className="middleBox">
          <Typography variant='h2' fontSize={'40px'} fontFamily={'Didot LT Pro, Bold'} fontWeight={'bold'} >
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
            <Typography display={'flex'} gap={3}>
              <Button sx={{ background: '#378752', ":hover": { background: '#333333' }, borderRadius: '20px', }} variant="contained">Create Obituary</Button>

              <Button sx={{ background: 'white', ":hover": { background: '#333333', color: 'white' }, borderRadius: '20px', color: '#378752', border: '1px solid #378752 ' }} variant="contained">View Example</Button>
            </Typography>

          </Box>
        </Box>

        {/* middle Box End */}

        {/* middle 2 box start */}
        <Box  >
          <img src={Sectwo} alt="" style={{ width: '585px' }} />
        </Box>
        {/* middle 2 box end */}
      </Box>
      {/* sec two End */}

      {/* Sec three start */}
      {/* Sec three start */}
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={2} padding={1} >
        <Typography textAlign={'center'} variant='h2' fontSize={'40px'} >Affordable and Eco-Friendly, <br /> Reinventing Traditional Obituaries</Typography>
        <Typography variant='p' fontSize={'16px'}>Create an Evergreen Obituary for only $30</Typography>
        <Button sx={{ background: '#378752', ":hover": { background: '#333333' }, borderRadius: '20px', }} variant="contained">Create Obituary</Button>
      </Box>
      {/* Sec three end */}

      {/* Sec three III Start */}
      <Box className='mainBox'sx={{display : "flex" , marginLeft: "50px" , marginBottom:"20px" , marginTop:"20px"}} >
        <Box sx={{marginRight : "35px" }}> <img src={GreenTree}  className='imagetree'/> </Box>

        <Box className='Box2'>

          <Card  className='mt-3' sx={{ border: '1px solid lightgray', borderRadius: '15px'}} >
            <Box sx={{  marginTop: '6px', cursor: 'pointer' , width:"850px", padding:"20px" , display :"inline-block"}}>
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
          <Card  className='mt-3' sx={{ border: '1px solid lightgray', borderRadius: '15px' , marginTop:"10px" }} >
            <Box sx={{  marginTop: '6px', cursor: 'pointer' , width:"850px", padding:"20px"}}>
              <Box>
                <Typography fontSize={20} fontWeight={700} fontFamily={'Didot LT Pro, Bold'}>
                Eco-friendly
                </Typography>
                <Typography fontSize={16} marginTop={2} fontFamily={'Didot LT Pro, Bold'}>
                Traditional obituaries, including those generated through leading obituary websites and funeral homes, often find their way into printed newspapers, perpetuating an endless cycle of waste and deforestation
                </Typography>
              </Box>
            </Box>
          </Card><Card  className='mt-3' sx={{ border: '1px solid lightgray', borderRadius: '15px' , marginTop:"10px" }} >
            <Box sx={{  marginTop: '6px', cursor: 'pointer' , width:"850px", padding:"20px"}}>
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
      {/* Sec three III end */}




    </>
  )
}

export default Homepage