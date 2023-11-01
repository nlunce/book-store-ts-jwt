/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type HeroLayoutOverridesProps = {
    HeroLayout?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<FlexProps>;
    "Solar Shopping, Your Way, No Salespeople"?: PrimitiveOverrideProps<TextProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    "Say goodbye to the frustrations of Sales Reps and Utility companies \u2013 a thing of the past. Embrace Luxorum's AI-powered solar revolution. With our intuitive system, you're in control, effortlessly navigating smart design and pricing for savings that stand out."?: PrimitiveOverrideProps<TextProps>;
    Button39061846?: PrimitiveOverrideProps<FlexProps>;
    Button39061847?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type HeroLayoutProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HeroLayoutOverridesProps | undefined | null;
}>;
export default function HeroLayout(props: HeroLayoutProps): React.ReactElement;
