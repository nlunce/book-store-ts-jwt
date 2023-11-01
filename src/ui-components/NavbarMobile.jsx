/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, View } from "@aws-amplify/ui-react";
export default function NavbarMobile(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="389px"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      overflow="hidden"
      position="relative"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      padding="16px 10px 16px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NavbarMobile")}
      {...rest}
    >
      <Flex
        gap="20px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 10px 0px 0px"
        {...getOverrideProps(overrides, "Frame 5")}
      >
        <View
          width="66px"
          height="55px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "LogoSlot")}
        ></View>
        <Flex
          gap="4px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Options")}
        >
          <View
            width="40px"
            height="5px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="5px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(217,217,217,1)"
            {...getOverrideProps(overrides, "Rectangle 1164")}
          ></View>
          <View
            width="40px"
            height="5px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="5px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(217,217,217,1)"
            {...getOverrideProps(overrides, "Rectangle 1165")}
          ></View>
          <View
            width="40px"
            height="5px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="5px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(217,217,217,1)"
            {...getOverrideProps(overrides, "Rectangle 1166")}
          ></View>
          <View
            width="40px"
            height="5px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="5px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(217,217,217,1)"
            {...getOverrideProps(overrides, "Rectangle 1167")}
          ></View>
        </Flex>
      </Flex>
    </Flex>
  );
}
