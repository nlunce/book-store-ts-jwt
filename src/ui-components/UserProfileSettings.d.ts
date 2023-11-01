/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, PasswordFieldProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserProfileSettingsOverridesProps = {
    UserProfileSettings?: PrimitiveOverrideProps<FlexProps>;
    Header?: PrimitiveOverrideProps<FlexProps>;
    Name387710999?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    Profile387711027?: PrimitiveOverrideProps<FlexProps>;
    "Frame 444387711032"?: PrimitiveOverrideProps<FlexProps>;
    Profile387711033?: PrimitiveOverrideProps<TextProps>;
    Name387711045?: PrimitiveOverrideProps<FlexProps>;
    Name387711047?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Password387711028?: PrimitiveOverrideProps<FlexProps>;
    "Frame 444387711054"?: PrimitiveOverrideProps<FlexProps>;
    "Change password"?: PrimitiveOverrideProps<TextProps>;
    "Frame 445"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 446"?: PrimitiveOverrideProps<FlexProps>;
    Password387711112?: PrimitiveOverrideProps<TextProps>;
    PasswordField387711076?: PrimitiveOverrideProps<PasswordFieldProps>;
    "Frame 447"?: PrimitiveOverrideProps<FlexProps>;
    "Password confirmation"?: PrimitiveOverrideProps<TextProps>;
    PasswordField387711116?: PrimitiveOverrideProps<PasswordFieldProps>;
} & EscapeHatchProps;
export declare type UserProfileSettingsProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: UserProfileSettingsOverridesProps | undefined | null;
}>;
export default function UserProfileSettings(props: UserProfileSettingsProps): React.ReactElement;
