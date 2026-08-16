import type {
	ComponentAPISchema,
	PropSchema,
	PropObj,
	DataAttrSchema,
	EnumString,
	UnionString,
	PropBaseSchema,
	DataAttrSimpleSchema,
	DataAttrEnumSchema,
} from "./types.ts";

/** Takes a list of types and returns a string representing them as a union */
export function unionOf(...types: string[]) {
	return types.join(" | ") as UnionString;
}

/** Takes a list of values and returns a string representing them as a union of strings */
export function enumOf(...values: string[]) {
	return values.map((value) => `"${value}"`).join(" | ") as EnumString;
}

/** Defines a component API schema */
export function defineComponentAPISchema<T>(
	schema: Omit<ComponentAPISchema<T>, "props" | "dataAttrs"> & {
		props?: PropObj<T>;
		dataAttrs?: DataAttrSchema[];
	}
) {
	return {
		...schema,
		props: schema.props ?? ({} as PropObj<T>),
		dataAttrs: schema.dataAttrs ?? [],
	} satisfies ComponentAPISchema<T>;
}

/** Defines a prop schema */
function definePropSchema(schema: PropSchema) {
	return schema;
}

export function defineSimpleProp<T extends "number" | "boolean" | string>(
	schema: Omit<PropBaseSchema, "required" | "bindable" | "default"> & {
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

export function defineComplexProp<T extends "function" | "enum" | string>(
	schema: Omit<PropBaseSchema, "required" | "bindable"> & {
		type: T;
		required?: boolean;
		bindable?: boolean;
		default?: T extends "enum" ? `"${string}"` : string;
		definition: T extends "function"
			? `(${string}) => ${string}`
			: T extends "enum"
				? EnumString
				: UnionString;
	}
) {
	return definePropSchema({
		variant: "complex",
		required: false,
		bindable: false,
		...schema,
	});
}

/** Defines a data attribute schema */
function defineDataAttrSchema(schema: DataAttrSchema) {
	return schema;
}

export function defineSimpleDataAttr(schema: Omit<DataAttrSimpleSchema, "variant">) {
	return defineDataAttrSchema({
		variant: "simple",
		...schema,
	});
}

export function defineEnumDataAttr(schema: Omit<DataAttrEnumSchema, "variant">) {
	return defineDataAttrSchema({
		variant: "enum",
		...schema,
	});
}
