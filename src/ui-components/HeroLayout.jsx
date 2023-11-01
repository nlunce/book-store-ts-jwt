/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function HeroLayout(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="975px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(233,249,252,1)"
      {...getOverrideProps(overrides, "HeroLayout")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="80px 80px 10px 80px"
        {...getOverrideProps(overrides, "Heading")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="600"
          color="rgba(13,26,38,1)"
          lineHeight="30px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Solar Shopping, Your Way, No Salespeople"
          {...getOverrideProps(
            overrides,
            "Solar Shopping, Your Way, No Salespeople"
          )}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="20px 80px 20px 80px"
        {...getOverrideProps(overrides, "Body")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Say goodbye to the frustrations of Sales Reps and Utility companies – a thing of the past. Embrace Luxorum's AI-powered solar revolution. With our intuitive system, you're in control, effortlessly navigating smart design and pricing for savings that stand out."
          {...getOverrideProps(
            overrides,
            "Say goodbye to the frustrations of Sales Reps and Utility companies \u2013 a thing of the past. Embrace Luxorum's AI-powered solar revolution. With our intuitive system, you're in control, effortlessly navigating smart design and pricing for savings that stand out."
          )}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 80px 40px 80px"
        {...getOverrideProps(overrides, "Button39061846")}
      >
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Get started"
          {...getOverrideProps(overrides, "Button39061847")}
        ></Button>
      </Flex>
    </Flex>
  );
}
