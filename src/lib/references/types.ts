export type UnionString = `${string} | ${string}${string extends infer _R ? "" : ` | ${string}`}`;
export type EnumString =
	`"${string}" | "${string}"${string extends infer _R ? "" : ` | "${string}"`}`;

export type PropBaseSchema = {
	required: boolean;
	bindable: boolean;
	default?: string;
	description: string;
};

export type PropSimpleSchema = PropBaseSchema & {
	variant: "simple";
	type: string;
};

export type PropComplexSchema = PropBaseSchema & {
	variant: "complex";
	type: string;
	definition: string;
};

export type PropSchema = PropSimpleSchema | PropComplexSchema;

export type PropObj<T> = {
	[K in keyof T]-?: PropSchema;
};

export type DataAttrSimpleSchema = {
	variant: "simple";
	name: `data-${string}`;
	value?: string;
	description: string;
};

export type DataAttrEnumSchema = {
	variant: "enum";
	name: `data-${string}`;
	value: EnumString;
	description: string;
};

export type DataAttrSchema = DataAttrSimpleSchema | DataAttrEnumSchema;

export type ComponentAPISchema<T = Record<string, unknown>> = {
	title: string;
	props: PropObj<T>;
	dataAttrs: DataAttrSchema[];
};

export type APISchema<T = Record<string, unknown>> = ComponentAPISchema<T>;
