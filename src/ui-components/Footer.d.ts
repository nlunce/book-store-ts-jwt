/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type FooterOverridesProps = {
    Footer?: PrimitiveOverrideProps<FlexProps>;
    Divider39413816?: PrimitiveOverrideProps<DividerProps>;
    "Frame 405"?: PrimitiveOverrideProps<FlexProps>;
    About?: PrimitiveOverrideProps<FlexProps>;
    "About us"?: PrimitiveOverrideProps<TextProps>;
    Contact3886704?: PrimitiveOverrideProps<FlexProps>;
    Contact39413975?: PrimitiveOverrideProps<TextProps>;
    Blog3886712?: PrimitiveOverrideProps<FlexProps>;
    Blog39413976?: PrimitiveOverrideProps<TextProps>;
    Privacy?: PrimitiveOverrideProps<FlexProps>;
    "Privacy Policy"?: PrimitiveOverrideProps<TextProps>;
    Terms?: PrimitiveOverrideProps<FlexProps>;
    "Terms & Conditions"?: PrimitiveOverrideProps<TextProps>;
    Divider39413869?: PrimitiveOverrideProps<DividerProps>;
    Copyright?: PrimitiveOverrideProps<FlexProps>;
    "Frame 448"?: PrimitiveOverrideProps<ViewProps>;
    "\u00A9 2023 Luxorum LLC. All rights reserved."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FooterProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FooterOverridesProps | undefined | null;
}>;
export default function Footer(props: FooterProps): React.ReactElement;
