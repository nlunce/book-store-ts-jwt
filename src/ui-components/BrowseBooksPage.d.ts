/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { NavbarProps } from "./Navbar";
import { FlexProps } from "@aws-amplify/ui-react";
import { FooterProps } from "./Footer";
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
export declare type BrowseBooksPageOverridesProps = {
    BrowseBooksPage?: PrimitiveOverrideProps<FlexProps>;
    Navbar?: NavbarProps;
    BookCollectionSlot?: PrimitiveOverrideProps<FlexProps>;
    Footer?: FooterProps;
} & EscapeHatchProps;
export declare type BrowseBooksPageProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: BrowseBooksPageOverridesProps | undefined | null;
}>;
export default function BrowseBooksPage(props: BrowseBooksPageProps): React.ReactElement;
