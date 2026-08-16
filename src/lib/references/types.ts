export type UnionString = `${string} | ${string}${string extends infer _R ? "" : ` | ${string}`}`;
export type EnumString =
	`"${string}" | "${string}"${string extends infer _R ? "" : ` | "${string}"`}`;

export type PropSchema = {
	required: boolean;
	bindable: boolean;
	default?: string;
	description: string;
} & (
	| {
			variant: "simple";
			type: string;
	  }
	| {
			variant: "complex";
			type: string;
			definition: string;
	  }
);

export type PropObj<T> = {
	[K in keyof T]-?: PropSchema;
};

export type DataAttrSchema = {
	name: `data-${string}`;
	description: string;
} & (
	| {
			variant: "simple";
			value?: string;
	  }
	| {
			variant: "enum";
			value: EnumString;
	  }
);

export type APISchema<T = Record<string, unknown>> = {
	title: string;
	props: PropObj<T>;
	dataAttrs: DataAttrSchema[];
};
