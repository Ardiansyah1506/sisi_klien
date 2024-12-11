/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const Stepper = (props) => {
    const { desc } = props;

    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <>
        <div>{desc[activeStep]}</div>
        <MobileStepper
            variant="dots"
            steps={desc.length}
            position="static"
            activeStep={activeStep}
            sx={{ maxWidth: "100%", flexGrow: 1,"* .MuiMobileStepper-dot":{backgroundColor:"#darkgray",},"& .MuiMobileStepper-dotActive":{backgroundColor: "#299D01"} }}
            nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === desc.length - 1} sx={{ color:"black",fontWeight:"bold" }}>
                    Next
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowLeft />
                    ) : (
                        <KeyboardArrowRight />
                    )}
                </Button>
            }
            backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0} sx={{ color:"black",fontWeight:"bold" }}>
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowRight />
                    ) : (
                        <KeyboardArrowLeft />
                    )}
                    Back
                </Button>
            }
        />
        </>
    );
}

export default Stepper