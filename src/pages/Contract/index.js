import {
  Box,
  Card,
  CardContent,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Container } from "@mui/system";
import CenteredContent from "../../components/CenteredContent";
import checkboxNotChecked from "../../assets/icons/checkboxNotChecked.svg";
import checkboxChecked from "../../assets/icons/checkedCheckbox.svg";
import { contratPageStyles } from "./ContractPage.styles";
import { FONTS } from "../../constants/fontsConstants";
import { MAIN_COLORS } from "../../constants/colorConstants";
import CanvaContainer from "./CanvaContainer";
import Layout from "../../components/Layout";

const Contract = () => {
  const classes = contratPageStyles();
  const [open, setOpen] = useState(false);
  const [checkContractOption, setCheckContractOption] = useState(false);

  const handleOpenContractCanva = () => {
    setCheckContractOption(!checkContractOption);
    setOpen(!open);
  };

  const checkboxContent = checkContractOption ? (
    <img
      src={checkboxChecked}
      alt="openCheckboxIcn"
      onClick={handleOpenContractCanva}
    />
  ) : (
    <img
      src={checkboxNotChecked}
      alt="notOpenCheckboxIcn"
      onClick={handleOpenContractCanva}
    />
  );

  return (
    <Layout>
      <Box sx={{ marginBottom: 50 }}>
        <CenteredContent>
          <Card
            sx={{
              width: "80%",
              minHeight: 50,
              marginTop: 5,
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              sx={{ height: 50, backgroundColor: MAIN_COLORS.BLUE_CONTRAST }}
            >
              <div className={classes.checkboxArea}> {checkboxContent} </div>
              <div className={classes.headerArea}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "urbanistSemiBold",
                    fontSize: 20,
                  }}
                >
                  {" "}
                  Firmar el contrato
                </Typography>
              </div>
              <div>
                <IconButton
                  onClick={() => setOpen(!open)}
                  aria-label="expand"
                  size="small"
                >
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
              </div>
            </Box>

            <div style={{ backgroundColor: "rgba(211,211,211,0.4)" }}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <CardContent sx={{ backgroundColor: "white" }}>
                  <Container sx={{ height: "auto", lineHeight: 2 }}>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        marginTop: 2,
                        marginBottom: 5,
                        fontSize: 22,
                        fontFamily: FONTS.URBANISMEDIUM,
                        color: MAIN_COLORS.MAIN_PURPLE,
                      }}
                    >
                      Firma el contrato de préstamos Tanda Ahorro
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "urbanistRegular",
                        fontSize: 20,
                      }}
                    >
                      Al firmar, aceptas las condiciones y los términos de este
                      contrato, así como las condiciones de pago y comisiones e
                      intereses establecidos.{" "}
                    </Typography>
                    <CenteredContent direction="column">
                      <CanvaContainer />
                    </CenteredContent>
                  </Container>
                </CardContent>
              </Collapse>
            </div>
          </Card>
        </CenteredContent>
      </Box>
    </Layout>
  );
};

export default Contract;