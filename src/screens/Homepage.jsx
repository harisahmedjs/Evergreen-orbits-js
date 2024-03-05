import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import backgroundImage from '../assets/treecanopy.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faFilePen, faSeedling } from '@fortawesome/free-solid-svg-icons';
import Air from '../assets/air.png'
import Loved from '../assets/loved.png'
import reforestation from '../assets/reforestation.png'




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
    </>
  )
}

export default Homepage