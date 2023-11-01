/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Book } from "../API.ts";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BookUpdateFormInputValues = {
    title?: string;
    author?: string[];
    description?: string;
    bookCover?: string;
    price?: number;
    ISBN10?: string;
    stock?: number;
    available?: boolean;
};
export declare type BookUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    author?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    bookCover?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    ISBN10?: ValidationFunction<string>;
    stock?: ValidationFunction<number>;
    available?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BookUpdateFormOverridesProps = {
    BookUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    author?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    bookCover?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    ISBN10?: PrimitiveOverrideProps<TextFieldProps>;
    stock?: PrimitiveOverrideProps<TextFieldProps>;
    available?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type BookUpdateFormProps = React.PropsWithChildren<{
    overrides?: BookUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    book?: Book;
    onSubmit?: (fields: BookUpdateFormInputValues) => BookUpdateFormInputValues;
    onSuccess?: (fields: BookUpdateFormInputValues) => void;
    onError?: (fields: BookUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BookUpdateFormInputValues) => BookUpdateFormInputValues;
    onValidate?: BookUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BookUpdateForm(props: BookUpdateFormProps): React.ReactElement;
