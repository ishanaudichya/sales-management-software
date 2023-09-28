import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const Ticket = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Tickets" subtitle="Daily tickets generated managed by admin" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Customer Inquiry
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A customer is inquiring about our latest product offerings. Provide them with detailed information and assist in scheduling a product demonstration if needed.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Sales Meeting Request
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A potential client has expressed interest in meeting to discuss their specific needs. Please arrange a meeting with the sales team to explore opportunities.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Price Quotation
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Generate a price quotation for a client's order request. Ensure that all relevant pricing details and product specifications are accurately included.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Follow-Up Call
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          It's time for a follow-up call with a prospect who showed interest in our services a week ago. Reach out, address any questions or concerns, and assess their readiness to make a decision.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Lead Qualification
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Review and qualify leads from the recent marketing campaign. Identify prospects with the highest potential and distribute them to the appropriate sales representatives.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Customer Support Request
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A valued customer is facing an issue with our product. Open a support ticket, prioritize the issue, and assign it to the relevant support team for resolution. </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Ticket;
