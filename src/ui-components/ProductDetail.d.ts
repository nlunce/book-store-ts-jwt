/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, DividerProps, FlexProps, ImageProps, RatingProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type ProductDetailOverridesProps = {
    ProductDetail?: PrimitiveOverrideProps<FlexProps>;
    "Frame 450"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 449"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 401"?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Frame 6"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 729766954"?: PrimitiveOverrideProps<FlexProps>;
    Title29766955?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat."?: PrimitiveOverrideProps<TextProps>;
    Divider29766961?: PrimitiveOverrideProps<DividerProps>;
    "Frame 74065430"?: PrimitiveOverrideProps<FlexProps>;
    Details?: PrimitiveOverrideProps<TextProps>;
    "ISBN - 1283189237891723"?: PrimitiveOverrideProps<TextProps>;
    Divider29766957?: PrimitiveOverrideProps<DividerProps>;
    "Frame 729766958"?: PrimitiveOverrideProps<FlexProps>;
    "Author(s)"?: PrimitiveOverrideProps<TextProps>;
    "author 1 author 2 author 3 author 4"?: PrimitiveOverrideProps<TextProps>;
    "Frame 402"?: PrimitiveOverrideProps<FlexProps>;
    Title29766967?: PrimitiveOverrideProps<TextProps>;
    $192?: PrimitiveOverrideProps<TextProps>;
    "Frame 2729766968"?: PrimitiveOverrideProps<FlexProps>;
    Rating?: PrimitiveOverrideProps<RatingProps>;
    "12 reviews"?: PrimitiveOverrideProps<TextProps>;
    "Frame 2729766971"?: PrimitiveOverrideProps<FlexProps>;
    Rental?: PrimitiveOverrideProps<TextProps>;
    "Term:"?: PrimitiveOverrideProps<TextProps>;
    "Frame 28"?: PrimitiveOverrideProps<FlexProps>;
    Button29766975?: PrimitiveOverrideProps<ButtonProps>;
    Button29766977?: PrimitiveOverrideProps<ButtonProps>;
    Button29766972?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ProductDetailProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ProductDetailOverridesProps | undefined | null;
}>;
export default function ProductDetail(props: ProductDetailProps): React.ReactElement;
