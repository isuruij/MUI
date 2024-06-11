import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Typography from "@mui/material/Typography";
import { Box, Button, Container, Paper } from "@mui/material";

function App() {
  const serviceList = ["s1", "s2", "s3"];

  return (
    <>
      <Container>
        <Typography
          variant="h1"
          sx={{ my: 4, textAlign: "center", color: "main.primary" }}
        >
          Services
        </Typography>
        <Typography variant="h2">Overview</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          {serviceList.map((service) => (
            <Paper elevation={3}>
              <Box sx={{m:3}}>
                <Typography variant="h3">{service}</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam necessitatibus pariatur ab voluptas, aliquid
                  dignissimos corrupti iusto sapiente? Voluptatem alias mollitia
                  quis obcaecati maiores quaerat illum dolor, ratione cumque
                  magnam.
                </Typography>
                <Button variant="contained" color="secondary" sx={{mt:3}} >Learn More</Button>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </>
  );
}

export default App;
