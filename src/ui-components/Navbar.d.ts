/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
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
export declare type NavbarOverridesProps = {
    Navbar?: PrimitiveOverrideProps<FlexProps>;
    "Frame 322"?: PrimitiveOverrideProps<FlexProps>;
    LogoSlot?: PrimitiveOverrideProps<ViewProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    Books?: PrimitiveOverrideProps<TextProps>;
    "Your Books"?: PrimitiveOverrideProps<TextProps>;
    "Redeem Code"?: PrimitiveOverrideProps<TextProps>;
    "Contact us"?: PrimitiveOverrideProps<TextProps>;
    "Frame 321"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    "Frame 440"?: PrimitiveOverrideProps<FlexProps>;
    User?: PrimitiveOverrideProps<TextProps>;
    actions?: PrimitiveOverrideProps<FlexProps>;
    Button39493466?: PrimitiveOverrideProps<ButtonProps>;
    Button4457599?: PrimitiveOverrideProps<ButtonProps>;
    Button39493467?: PrimitiveOverrideProps<ButtonProps>;
    Button4456836?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NavbarProps = React.PropsWithChildren<Partial<FlexProps> & {
    logoSlot?: React.ReactNode;
} & {
    overrides?: NavbarOverridesProps | undefined | null;
}>;
export default function Navbar(props: NavbarProps): React.ReactElement;
