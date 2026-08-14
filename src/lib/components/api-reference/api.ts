export type ComponentReference<T = unknown> = {
	name: string;
	components: Record<string, Component<T>>;
};

export type Component<T> = {
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
	[K in keyof T]-?: PropReference;
};

export type DataAttrReference = {
	value?: string;
	description: string;
	tooltip?: string;
};

type Union = `${string} | ${string}${string extends infer _R ? "" : ` | ${string}`}`;
type StringUnion = `"${string}" | "${string}"${string extends infer _R ? "" : ` | "${string}"`}`;

export function defineReference<T = unknown>(config: {
	name: string;
	components: Record<string, Component<T>>;
}) {
	return config as ComponentReference;
}

export function defineComponent<T extends Record<string, unknown>>(config: {
	props: PropsReference<T>;
	dataAttrs: Record<string, DataAttrReference>;
}) {
	return config satisfies Component<T>;
}

export function defineProp<K extends "function" | "number" | "boolean" | string>(
	type: K,
	config: {
		description: string;
		defaultValue?: K extends "number" ? number : K extends "boolean" ? boolean : string;
		tooltip?: K extends "function" ? `(${string}) => ${string}` : string;
		required?: boolean;
		bindable?: boolean;
	}
): PropReference {
	return {
		required: false,
		bindable: false,
		type,
		...config,
		defaultValue: config.defaultValue?.toString?.(),
	} satisfies PropReference;
}

export function defineUnionProp<K extends "string" | string>(
	type: K,
	config: {
		description: string;
		defaultValue?: K extends "string" ? `"${string}"` : string;
		tooltip: K extends "string" ? StringUnion : Union;
		required?: boolean;
		bindable?: boolean;
	}
) {
	return {
		required: false,
		bindable: false,
		type: type === "string" ? ("enum" as const) : type,
		...config,
	} satisfies PropReference;
}

export function defineDataAttr(config: { value?: string; description: string; tooltip?: string }) {
	return config satisfies DataAttrReference;
}
