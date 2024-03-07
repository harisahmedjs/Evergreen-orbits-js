import { Box, Button, Card, List, Typography , CardMedia} from '@mui/material'
import React , {useState}from 'react'
import backgroundImage from "../assets/treecanopy.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faFilePen, faSeedling } from '@fortawesome/free-solid-svg-icons';
import Air from '../assets/air.png'
import Air1 from '../assets/air1.jpg'
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
    <Navbar />
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
      
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={2} padding={1} >
        <Typography textAlign={'center'} variant='h2' fontSize={'40px'} fontFamily={'Didot LT Pro, Bold'} fontWeight={600}>Affordable and Eco-Friendly, <br /> Reinventing Traditional Obituaries</Typography>
        <Typography variant='p' fontSize={'16px'} fontFamily={'Didot LT Pro, Bold'}>Create an Evergreen Obituary for only $30</Typography>
        <Button sx={{ background: '#378752', ":hover": { background: '#333333' }, borderRadius: '20px', }} variant="contained">Create Obituary</Button>
      </Box>
     


     
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

  <Box width={1196} height={512} bgcolor={'#FFFFFF'}>
  <Box sx={{ marginLeft: '170px' }}>
    <CardMedia
      component="img"
      image={selectedButton ? buttonImages[selectedButton] : ''} // Empty string when no button is selected
      alt="Your Image"
      style={{ width: '900px', marginBottom: '40px' }} // Add margin at top and bottom
    />
    <Box>
      <Button
        onClick={() => handleButtonClick(1)}
        sx={{
          color: selectedButton === 1 ? 'black' : 'initial',
          borderBottom: selectedButton === 1 ? '2px solid black' : 'initial',
          fontWeight: selectedButton === 1 ? '600' : 'initial',
          marginRight: '10px',
          
        }}
      >
        Support Reforestation
      </Button>
      <Button
        onClick={() => handleButtonClick(2)}
        sx={{
          color: selectedButton === 2 ? 'black' : 'initial',
          borderBottom: selectedButton === 2 ? '2px solid black' : 'initial',
          fontWeight: selectedButton === 2 ? '600' : 'initial',
          marginRight: '10px',
        }}
      >
        Air Quality Improvement
      </Button>
      <Button
        onClick={() => handleButtonClick(3)}
        sx={{
          color: selectedButton === 3 ? 'black' : 'initial',
          borderBottom: selectedButton === 3 ? '2px solid black' : 'initial',
          fontWeight: selectedButton === 3 ? '600' : 'initial',
          marginRight: '10px',
        }}
      >
        Enhance Biodiversity
      </Button>
      <Button
        onClick={() => handleButtonClick(4)}
        sx={{
          color: selectedButton === 4 ? 'black' : 'initial',
          borderBottom: selectedButton === 4 ? '2px solid black' : 'initial',
          fontWeight: selectedButton === 4 ? '600' : 'initial',
          marginRight: '30px',
        }}
      >
        Cultivate a Better Future
      </Button>
    </Box>
  </Box>

  <Box sx={{ textAlign: 'center', marginTop: '30px' }}>
    <Typography variant="h6" color="#333333" fontSize="16px">
      {selectedButton ? phrases[selectedButton - 1] : phrases[0]}
    </Typography>
    <Typography variant="body1" color="#333333" fontSize="16px" marginTop="9px">
      {selectedButton ? additionalPhrases[selectedButton - 1] : additionalPhrases[0]}
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
<Footer />
    </>
  )
}

export default Homepage