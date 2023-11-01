/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type StatsOverridesProps = {
    Stats?: PrimitiveOverrideProps<FlexProps>;
    "Type Lock Up"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43638551314"?: PrimitiveOverrideProps<ViewProps>;
    "image 138551216"?: PrimitiveOverrideProps<ImageProps>;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    Projects?: PrimitiveOverrideProps<TextProps>;
    "200+"?: PrimitiveOverrideProps<TextProps>;
    "Frame 439"?: PrimitiveOverrideProps<ViewProps>;
    "Group 1"?: PrimitiveOverrideProps<ViewProps>;
    "kWh of energy saved"?: PrimitiveOverrideProps<TextProps>;
    "500M+"?: PrimitiveOverrideProps<TextProps>;
    "image 2"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 43638551413"?: PrimitiveOverrideProps<ViewProps>;
    "Group 3"?: PrimitiveOverrideProps<ViewProps>;
    "Metric tons of CO2 saved"?: PrimitiveOverrideProps<TextProps>;
    "200M+"?: PrimitiveOverrideProps<TextProps>;
    "image 138551414"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type StatsProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: StatsOverridesProps | undefined | null;
}>;
export default function Stats(props: StatsProps): React.ReactElement;
