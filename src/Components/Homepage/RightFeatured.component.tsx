import { Box, Typography } from "@mui/material";
import React from 'react';
import { FeaturedDescText, FeaturedTitleText, RfDescBoxSx, RfImageBoxSx, RfOverlayBoxSx, RfRootBoxSx, RfTitleBoxSx } from "../../Styles/Components/FeaturedSectionStyles";
import { rfSectionProps } from "../../Interfaces/IFeaturedSection";

function RfRootBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  return (
    <>
      <Box
        sx={RfRootBoxSx}
      >
        {children}
      </Box>
    </>
  );
}

function RfImageBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  return (
    <>
      <Box
        sx={RfImageBoxSx}
        style={{ position: "relative" }}
      >
        {children}
      </Box>
    </>
  );
}

function RfOverlayBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  return (
    <>
      <Box
        sx={RfOverlayBoxSx}
        style={{ position: "absolute" }}
      >
        {children}
      </Box>
    </>
  );
}

function RfTitleBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  return (
    <>
      <Box
        sx={RfTitleBoxSx}
      >
        {children}
      </Box>
    </>
  );
}

function RfDescBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  return (
    <>
      <Box
        sx={RfDescBoxSx}
      >
        {children}
      </Box>
    </>
  );
}

export function RfSection(props: rfSectionProps) {
  const { rfTitle, rfImg, rfDesc } = props
  return (
    <>
      <RfRootBox>
        <RfImageBox>
          <img
            src={rfImg}
            alt=""
            style={{
              width: '100%',
              display: 'block',
              borderRadius: 3,
            }}></img>
        </RfImageBox>
        <RfOverlayBox>
          <Box
            sx={{
              width: 0.5,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <RfTitleBox>
              <Typography
                sx={FeaturedTitleText}
              >
                {rfTitle}
              </Typography>
            </RfTitleBox>
            <RfDescBox>
              <Typography
                sx={FeaturedDescText}
              >
                {rfDesc}
              </Typography>
            </RfDescBox>
          </Box>
        </RfOverlayBox>
      </RfRootBox>
    </>
  );
}