import { Box, Typography } from "@mui/material";
import React from 'react';
import { FeaturedDescText, FeaturedTitleText, LfDescBoxSx, LfImageBoxSx, LfOverlayBoxSx, LfRootBoxSx, LfTitleBoxSx, RfDescBoxSx, RfImageBoxSx, RfOverlayBoxSx, RfRootBoxSx, RfTitleBoxSx } from "../../Styles/Home/FeaturedSectionStyles";
import { FeaturedSectionProps } from "../../Interfaces/IFeaturedSection";

function LfRootBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
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

function LfImageBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
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

function LfOverlayBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
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

function LfTitleBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
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

function LfDescBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
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

export function RfSection(props: FeaturedSectionProps) {
  const { Title, Img, Desc } = props
  return (
    <>
      <RfRootBox>
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
                {Title}
              </Typography>
            </RfTitleBox>
            <RfDescBox>
              <Typography
                sx={FeaturedDescText}
              >
                {Desc}
              </Typography>
            </RfDescBox>
          </Box>
        </RfOverlayBox>
        <RfImageBox>
          <img
            src={Img}
            alt=""
            style={{
              width: '100%',
              borderRadius: 3,
            }}></img>
        </RfImageBox>
      </RfRootBox>
    </>
  );
}

export function LfSection(props: FeaturedSectionProps) {
  const { Title, Img, Desc } = props
  return (
    <>
      <LfRootBox>
        <LfImageBox>
          <img
            src={Img}
            alt=""
            style={{
              width: '100%',
              borderRadius: 3,
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
                {Title}
              </Typography>
            </LfTitleBox>
            <LfDescBox>
              <Typography
                sx={FeaturedDescText}
              >
                {Desc}
              </Typography>
            </LfDescBox>
          </Box>
        </LfOverlayBox>
      </LfRootBox>
    </>
  );
}

