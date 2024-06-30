import React from 'react';
import { Avatar, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const TimelineComponent = () => {
  return (
    <Box
      sx={{
        // backgroundColor: '#14162b',
        padding: '16px',
        borderRadius: '16px',
        // width: '300px',
        color: 'white',
        position: 'relative',
      }}
    >
      {/* Main vertical line with curve */}
      <svg
        height="100%"
        width="100%"
        style={{ position: 'absolute', top: '10px', left: '30px', zIndex: 1 }}
      >
        <path
          d="M 2 0 L 2 200 Q 2 250 42 250"
          stroke="white"
          fill="transparent"
          strokeWidth="2"
        />
      </svg>

      <List sx={{ paddingLeft: '36px', position: 'relative', zIndex: 2 }}>
        {[
          { primary: 'Fast, easy loan application', secondary: '' },
          { primary: 'Flexible repayment options', secondary: '' },
          { primary: 'Competitive interest rates', secondary: '' }
        ].map((item, index) => (
          <ListItem key={index} sx={{ paddingLeft: '0', paddingRight: '0', position: 'relative' }}>
            {/* Green dot */}
            <Box
              sx={{
                width: '12px',
                height: '12px',
                backgroundColor: '#00FF00',
                borderRadius: '50%',
                position: 'absolute',
                left: '-26px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 3,
              }}
            />
            <ListItemText
              primary={item.primary}
              secondary={item.secondary}
              primaryTypographyProps={{ style: { fontSize: '1rem', color: 'white' } }}
              secondaryTypographyProps={{ style: { fontSize: '0.875rem', color: 'white' } }}
            />
          </ListItem>
        ))}
      </List>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '65px',
          paddingLeft: '70px',
          colors: 'white'
        }}
      >
        {/* <svg
  height="100%"
  width="100%"
  style={{ position: 'relative', top: '10px', left: '30px', zIndex: 1 }}
  viewBox="0 0 100 300" // Adjust the viewBox to match the path dimensions
>
  <path
    d="M 2 0 L 2 200 Q 2 250 42 250"
    stroke="white"
    fill="transparent"
    strokeWidth="2"
    transform="rotate(180 22 125)" // Rotate 180 degrees around the center
  />
</svg> */}

        <Avatar
          alt="User 1"
          src="/static/images/avatar/1.jpg"
          sx={{ width: '32px', height: '32px' }}
        />
        <Avatar
          alt="User 2"
          src="/static/images/avatar/2.jpg"
          sx={{ width: '32px', height: '32px', marginLeft: '-8px' }}
        />
        <Avatar
          alt="User 3"
          src="/static/images/avatar/3.jpg"
          sx={{ width: '32px', height: '32px', marginLeft: '-8px' }}
        />
        <Typography variant="body2" sx={{ marginLeft: '8px', color: 'white' }}>
          12M Active Users
        </Typography>
      </Box>
    </Box>
  );
};

export default TimelineComponent;
