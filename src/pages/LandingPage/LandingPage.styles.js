import { makeStyles } from "@material-ui/styles";
import landingBanner from "../../assets/images/Medsi_TandaAhorro_Banner_Landing_Page.svg";

export const LandingPageStyles = makeStyles({
  landingWrapper: {

  },
  bannerImageContainer: {
    backgroundImage: `url(${landingBanner})`, 
    backgroundPosition: "center", 
    backgroundSize: "cover",
    minHeight: 501,
    width: "100%",
  },
  requestSaveButton: {
    width: 398,
    height: 40,
    background: "linear-gradient(90.13deg, #1B63DB 0.23%, #0ACC97 100.05%)",
  },
});
