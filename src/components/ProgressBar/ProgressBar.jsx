import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = ['Feeling', 'Understanding', 'Support', 'Comments'];

const ProgressBar = ({ step }) => {
    return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={1} alternativeLabel>
          <Step>
            <StepLabel>Step {step} of 4</StepLabel>
          </Step>
      </Stepper>
    </Box>
    );
}

export default ProgressBar;