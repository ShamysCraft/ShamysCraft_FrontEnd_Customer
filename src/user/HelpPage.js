import React, {useState} from "react";

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles((theme) => ({
    root: {
      width: '90%',
      margin: '5%',
      
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }));

const HelpPage = (props)=>{
    const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
    return(
        <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>General Questions</Typography>
          <Typography className={classes.secondaryHeading}>What is ShamysCraft?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is an online platform to display and sell handicrafts of different categories.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Users</Typography>
          <Typography className={classes.secondaryHeading}>
            How to add an Item to the cart?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Click the add to the cart button.
            Your item will be added to your cart.
          </Typography>
        </AccordionDetails>
      </Accordion>

      
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Users</Typography>
          <Typography className={classes.secondaryHeading}>
          How to remove an Item from the cart?

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Click the remove from the cart button.
            Your item will be removed from your cart.
          </Typography>
        </AccordionDetails>
      </Accordion>

      
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Purchasing a product</Typography>
          <Typography className={classes.secondaryHeading}>
          How to place an order?

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          User need to sign up to the system.
          User will be redirected to the sign in page and once the entered credentials are verified user can place an order.
          </Typography>
        </AccordionDetails>
      </Accordion>



      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Your personal data is protected.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>My Orders</Typography>
          <Typography className={classes.secondaryHeading}>
          How to view the placed order?

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          User can view orders by clicking the profile tab.
          A menu will open which displays the option to visit "My Orders"
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Item Displayed</Typography>
          <Typography className={classes.secondaryHeading}>
          Is the items that are displyed accurate to the original item?

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, the handcrafts are accurate. 
          If you face any issues please reach us 
          @ shamyscraft@gmail.com
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  
    )
}

export default HelpPage;