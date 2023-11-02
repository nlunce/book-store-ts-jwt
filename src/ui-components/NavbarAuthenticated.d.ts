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
export declare type NavbarAuthenticatedOverridesProps = {
    NavbarAuthenticated?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32129767076"?: PrimitiveOverrideProps<FlexProps>;
    LogoSlot?: PrimitiveOverrideProps<ViewProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    Books?: PrimitiveOverrideProps<TextProps>;
    "Your Books"?: PrimitiveOverrideProps<TextProps>;
    "Redeem Code"?: PrimitiveOverrideProps<TextProps>;
    "Contact us"?: PrimitiveOverrideProps<TextProps>;
    "Frame 32129767081"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    "Frame 440"?: PrimitiveOverrideProps<FlexProps>;
    User?: PrimitiveOverrideProps<TextProps>;
    actions?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NavbarAuthenticatedProps = React.PropsWithChildren<Partial<FlexProps> & {
    logoSlot?: React.ReactNode;
} & {
    overrides?: NavbarAuthenticatedOverridesProps | undefined | null;
}>;
export default function NavbarAuthenticated(props: NavbarAuthenticatedProps): React.ReactElement;
