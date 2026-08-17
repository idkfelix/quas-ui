import type {
	APISchema,
	PropSchema,
	PropObj,
	DataAttrSchema,
	EnumString,
	UnionString,
} from "./types.ts";

/** Takes a list of types and returns a string representing them as a union */
function unionOf(...types: string[]) {
	return types.join(" | ") as UnionString;
}

/** Takes a list of values and returns a string representing them as a union of strings */
function enumOf(...values: string[]) {
	return values.map((value) => `"${value}"`).join(" | ") as EnumString;
}

/** Defines a prop schema */
function definePropSchema(schema: PropSchema) {
	return schema;
}

/** Defines a data attribute schema */
function defineDataAttrSchema(schema: DataAttrSchema) {
	return schema;
}

export function defineAPISchema<T>(
	schema: Omit<APISchema<T>, "props" | "dataAttrs"> & {
		props?: PropObj<T>;
		dataAttrs?: DataAttrSchema[];
	}
) {
	return {
		...schema,
		props: schema.props ?? ({} as PropObj<T>),
		dataAttrs: schema.dataAttrs ?? [],
	} satisfies APISchema<T>;
}

export function defineSimpleProp<T extends "number" | "boolean" | string>(
	schema: Omit<PropSchema, "variant" | "required" | "bindable" | "default"> & {
		type: T;
		required?: boolean;
		bindable?: boolean;
		default?: T extends "number" ? number : T extends "boolean" ? boolean : string;
	}
) {
	return definePropSchema({
		variant: "simple",
		required: false,
		bindable: false,
		...schema,
		default: schema.default?.toString?.(),
	});
}

export function defineFunctionProp(
	schema: Omit<PropSchema, "variant" | "type" | "type" | "required" | "bindable"> & {
		required?: boolean;
		bindable?: boolean;
		definition: `(${string}) => ${string}`;
	}
) {
	return definePropSchema({
		variant: "complex",
		type: "function",
		required: false,
		bindable: false,
		...schema,
	});
}

export function defineEnumProp(
	schema: Omit<PropSchema, "variant" | "type" | "required" | "bindable"> & {
		required?: boolean;
		bindable?: boolean;
		options: string[];
	}
) {
	return definePropSchema({
		variant: "complex",
		type: "enum",
		required: false,
		bindable: false,
		definition: enumOf(...schema.options),
		...schema,
	});
}

export function defineUnionProp(
	schema: Omit<PropSchema, "variant" | "required" | "bindable"> & {
		required?: boolean;
		bindable?: boolean;
		options: string[];
	}
) {
	return definePropSchema({
		variant: "complex",
		required: false,
		bindable: false,
		definition: unionOf(...schema.options),
		...schema,
	});
}

export function defineSimpleDataAttr(schema: Omit<DataAttrSchema, "variant">) {
	return defineDataAttrSchema({
		variant: "simple",
		...schema,
	});
}

export function defineEnumDataAttr(
	schema: Omit<DataAttrSchema, "variant" | "value"> & {
		options: string[];
	}
) {
	return defineDataAttrSchema({
		variant: "enum",
		value: enumOf(...schema.options),
		...schema,
	});
}
