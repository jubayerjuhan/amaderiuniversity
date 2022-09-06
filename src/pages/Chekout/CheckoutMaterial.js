import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import Header from "../../components/Shared/Header/Header.js";
import { useParams } from "react-router-dom";
import client from "../../client.js";
import { useSelector } from "react-redux";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Admission Helpline
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Shipping address", "Payment details", "Review your order"];

function getStepContent(step, setCustomerInfo, book, customerInfo) {
  switch (step) {
    case 0:
      return <AddressForm setCustomerInfo={setCustomerInfo} />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review book={book} customerInfo={customerInfo} />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [customerInfo, setCustomerInfo] = React.useState({});
  const [book, setBook] = React.useState({});
  console.log(customerInfo, "customer");
  const { id } = useParams();
  const { user } = useSelector((state) => state.user);

  React.useEffect(() => {
    client.get(`/item/${id}`).then((book) => {
      console.log(book);
      setBook(book.data);
    });
  }, []);

  const handleNext = async () => {
    if (activeStep === 2) {
      const order = {
        user: {
          userId: user.id,
          username: user.name,
        },
        ordredBook: book,
        subtotal: parseInt(book.price),
        shipping: 50,
        total: 50 + parseInt(book.price),
        address: `${customerInfo?.street},${customerInfo?.city},${customerInfo?.postcode}`,
      };
      const res = await client.post("/addOrder", order);
      if (res.data) return setActiveStep(activeStep + 1);
    } else setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  if (
    activeStep === 1 &&
    !(customerInfo.name || customerInfo.street || customerInfo.postcode)
  ) {
    alert("Please Add Customer Info");
    return setActiveStep(0);
  }

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      ></AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order has been confirmed
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(
                  activeStep,
                  setCustomerInfo,
                  book,
                  customerInfo
                )}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
