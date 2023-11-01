/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import {
  Button,
  Flex,
  PasswordField,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
export default function UserProfileSettings(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="1457px"
      height="1164px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(0,0,0,0.1)"
      borderRadius="2px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(246,246,249,1)"
      {...getOverrideProps(overrides, "UserProfileSettings")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        overflow="hidden"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 70px 0px 70px"
        {...getOverrideProps(overrides, "Header")}
      >
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="800"
          color="rgba(0,0,0,1)"
          lineHeight="60px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Name"
          {...getOverrideProps(overrides, "Name387710999")}
        ></Text>
        <Button
          width="unset"
          height="unset"
          justifyContent="flex-end"
          alignItems="flex-start"
          shrink="0"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Save"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
      <Flex
        gap="50px"
        direction="column"
        width="unset"
        height="1000px"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 70px 70px 70px"
        {...getOverrideProps(overrides, "Body")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="226px"
          justifyContent="flex-start"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Profile387711027")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="40px 40px 40px 40px"
            {...getOverrideProps(overrides, "Frame 444387711032")}
          >
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="600"
              color="rgba(50,50,77,1)"
              lineHeight="20px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Profile"
              {...getOverrideProps(overrides, "Profile387711033")}
            ></Text>
          </Flex>
          <Flex
            gap="20px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 40px 40px 40px"
            {...getOverrideProps(overrides, "Name387711045")}
          >
            <TextField
              width="unset"
              height="73px"
              label="Name"
              gap="9px"
              justifyContent="space-between"
              grow="1"
              shrink="1"
              basis="0"
              placeholder="Placeholder"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "Name387711047")}
            ></TextField>
            <TextField
              width="unset"
              height="72px"
              label="Email"
              justifyContent="space-between"
              grow="1"
              shrink="1"
              basis="0"
              placeholder="Placeholder"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "Email")}
            ></TextField>
          </Flex>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="220px"
          justifyContent="flex-start"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Password387711028")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="40px 40px 40px 40px"
            {...getOverrideProps(overrides, "Frame 444387711054")}
          >
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="600"
              color="rgba(50,50,77,1)"
              lineHeight="20px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Change password"
              {...getOverrideProps(overrides, "Change password")}
            ></Text>
          </Flex>
          <Flex
            gap="20px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 40px 40px 40px"
            {...getOverrideProps(overrides, "Frame 445")}
          >
            <Flex
              gap="9px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 446")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="500"
                color="rgba(50,50,77,1)"
                lineHeight="20px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Password"
                {...getOverrideProps(overrides, "Password387711112")}
              ></Text>
              <PasswordField
                width="unset"
                height="unset"
                grow="1"
                shrink="1"
                basis="0"
                alignSelf="stretch"
                placeholder=""
                size="default"
                isDisabled={false}
                labelHidden={true}
                variation="default"
                hideShowPassword={false}
                {...getOverrideProps(overrides, "PasswordField387711076")}
              ></PasswordField>
            </Flex>
            <Flex
              gap="9px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 447")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="500"
                color="rgba(50,50,77,1)"
                lineHeight="20px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Password confirmation"
                {...getOverrideProps(overrides, "Password confirmation")}
              ></Text>
              <PasswordField
                width="unset"
                height="64px"
                shrink="0"
                alignSelf="stretch"
                placeholder=""
                size="default"
                isDisabled={false}
                labelHidden={true}
                variation="default"
                hideShowPassword={false}
                {...getOverrideProps(overrides, "PasswordField387711116")}
              ></PasswordField>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
