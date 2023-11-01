/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { ButtonProps, FlexProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type RedeemCodeOverridesProps = {
    RedeemCode?: PrimitiveOverrideProps<FlexProps>;
    "Frame 44082800"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 44082802"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type RedeemCodeProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: RedeemCodeOverridesProps | undefined | null;
}>;
export default function RedeemCode(props: RedeemCodeProps): React.ReactElement;
