/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import MyIcon from "./MyIcon";
import { Flex } from "@aws-amplify/ui-react";
export default function CloseBar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="1438px"
      height="unset"
      justifyContent="center"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="3px 5px 3px 5px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "CloseBar")}
      {...rest}
    >
      <MyIcon
        width="48px"
        height="48px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        type="close"
        {...getOverrideProps(overrides, "MyIcon")}
      ></MyIcon>
    </Flex>
  );
}
