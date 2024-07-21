import { Typography } from "@mui/material";

function Footer() {
  return (
    <footer className="footer">
      <Typography
        variant="body2"
        align="center"
        sx={{ color: "#000 !important" }}
      >
        This site is protected by reCAPTCHA and the Google
        <br />
        <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a>{" "}
        apply.
      </Typography>
    </footer>
  );
}

export default Footer;
