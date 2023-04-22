import { Box, Typography } from "@mui/material";
import React from 'react';
import { FeaturedDescText, FeaturedTitleText, LfDescBoxSx, LfImageBoxSx, LfOverlayBoxSx, LfRootBoxSx, LfTitleBoxSx } from "../../Styles/Components/FeaturedSectionStyles";
import ILeftFeaturedSection from "../../Interfaces/ILeftFeaturedSection";

export function LfRootBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  return (
    <>
      <Box
        sx={LfRootBoxSx}
      >
        {children}
      </Box>
    </>
  );
}

export function LfImageBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  return (
    <>
      <Box
        sx={LfImageBoxSx}
        style={{ position: "relative" }}
      >
        {children}
      </Box>
    </>
  );
}

export function LfOverlayBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  return (
    <>
      <Box
        sx={LfOverlayBoxSx}
        style={{ position: "absolute" }}
      >
        {children}
      </Box>
    </>
  );
}

export function LfTitleBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  return (
    <>
      <Box
        sx={LfTitleBoxSx}
      >
        {children}
      </Box>
    </>
  );
}

export function LfDescBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  return (
    <>
      <Box
        sx={LfDescBoxSx}
      >
        {children}
      </Box>
    </>
  );
}

export function LfSection(props: ILeftFeaturedSection) {
  const { lfTitle, lfImg, lfDesc } = props
  return (
    <>
      <LfRootBox>
        <LfImageBox>
          <img
            src={lfImg}
            alt=""
            style={{
              width: '100%',
              display: 'block',
            }}></img>
        </LfImageBox>
        <LfOverlayBox>
          <Box
            sx={{
              width: 0.5,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <LfTitleBox>
              <Typography
              sx={FeaturedTitleText}
              >
                {lfTitle}
              </Typography>
            </LfTitleBox>
            <LfDescBox>
              <Typography
              sx={FeaturedDescText}
              >
                {lfDesc}
              </Typography>
            </LfDescBox>
          </Box>
        </LfOverlayBox>
      </LfRootBox>
    </>
  );
}