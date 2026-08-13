export type Component<T> = {
	name: string;
	description: string;
	props: PropsReference<T>;
	dataAttrs: Record<string, DataAttrReference>;
};

export type PropReference = {
	type: string;
	description: string;
	required: boolean;
	bindable: boolean;
	defaultValue?: string;
	tooltip?: string;
};

export type PropsReference<T> = {
	[K in keyof T]-?: Omit<PropReference, "type">;
};

export type DataAttrReference = {
	value?: string;
	description: string;
	tooltip?: string;
};

export function defineComponent<T extends Record<string, unknown>>(config: {
	name: string;
	description: string;
	props: PropsReference<T>;
	dataAttrs: Record<string, DataAttrReference>;
}) {
	return config satisfies Component<T>;
}

export function defineDataAttr(config: { value?: string; description: string; tooltip?: string }) {
	return config satisfies DataAttrReference;
}

export function defineProp({
	type,
	description,
	required = false,
	bindable = false,
	defaultValue,
	tooltip,
}: {
	type: string;
	description: string;
	required?: boolean;
	bindable?: boolean;
	defaultValue?: string;
	tooltip?: string;
}) {
	return {
		type,
		description,
		required,
		bindable,
		defaultValue,
		tooltip,
	} satisfies PropReference;
}

export function defineBooleanProp({
	description,
	required = false,
	bindable = false,
	defaultValue,
}: {
	description: string;
	required?: boolean;
	bindable?: boolean;
	defaultValue?: boolean;
}) {
	return {
		type: "boolean" as const,
		description,
		required,
		bindable,
		defaultValue: defaultValue?.toString(),
	} satisfies PropReference;
}

export function defineNumberProp({
	description,
	required = false,
	bindable = false,
	defaultValue,
}: {
	description: string;
	required?: boolean;
	bindable?: boolean;
	defaultValue?: number;
}) {
	return {
		type: "number" as const,
		description,
		required,
		bindable,
		defaultValue: defaultValue?.toString(),
	} satisfies PropReference;
}

export function defineStringProp({
	description,
	required = false,
	bindable = false,
	defaultValue,
}: {
	description: string;
	required?: boolean;
	bindable?: boolean;
	defaultValue?: string;
}) {
	return {
		type: "string" as const,
		description,
		required,
		bindable,
		defaultValue,
	} satisfies PropReference;
}

export function defineUnionProp({
	type,
	description,
	required = false,
	bindable = false,
	defaultValue,
}: {
	type: `"${string}" | "${string}"${string extends infer _R ? "" : ` | "${string}"`}`;
	description: string;
	required?: boolean;
	bindable?: boolean;
	defaultValue?: string;
}) {
	return {
		type: "enum" as const,
		description,
		required,
		bindable,
		defaultValue,
		tooltip: type,
	} satisfies PropReference;
}

export function defineFunctionProp({
	type,
	description,
	required = false,
	bindable = false,
	defaultValue,
}: {
	type: string;
	description: string;
	required?: boolean;
	bindable?: boolean;
	defaultValue?: string;
}) {
	return {
		type: "function" as const,
		description,
		required,
		bindable,
		defaultValue,
		tooltip: type,
	} satisfies PropReference;
}
