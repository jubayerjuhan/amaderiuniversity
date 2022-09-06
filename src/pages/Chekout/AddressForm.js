import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function AddressForm({ setCustomerInfo }) {
  const fields = [
    { name: "Name", fieldName: "name" },
    { name: "Street", fieldName: "street" },
    { name: "City", fieldName: "city" },
    { name: "Postcode", fieldName: "postcode" },
  ];

  const handleChange = (e) => {
    setCustomerInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        {fields.map((field, key) => (
          <Grid item xs={12} sm={6} key={key}>
            <TextField
              required
              onChange={handleChange}
              id={field.fieldName}
              name={field.fieldName}
              label={field.name}
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
