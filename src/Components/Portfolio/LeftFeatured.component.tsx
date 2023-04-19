import { Box, Typography } from "@mui/material";
import React from 'react';
import { LfDescBoxSx, LfImageBoxSx, LfOverlayBoxSx, LfRootBoxSx, LfTitleBoxSx } from "../../Styles/Components/FeaturedSectionStyles";
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
              visibility: 'hidden',
              maxWidth: '100%',
              maxHeight: '100%',
              margin: 'auto',
              display: 'block',
            }}></img>
        </LfImageBox>
        <LfOverlayBox>
          <LfTitleBox>
            <Typography>
              {lfTitle}
            </Typography>
          </LfTitleBox>
          <LfDescBox>
            <Typography>
              {lfDesc}
            </Typography>
          </LfDescBox>
        </LfOverlayBox>
      </LfRootBox>
    </>
  );
}