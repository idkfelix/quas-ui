export type HookRef<T extends object = object> = {
	name: string;
	props?: Partial<PropsReference<T>>;
	methods?: MethodsReference<T>;
};

export type ParentRef = {
	name: string;
	components: Record<string, ComponentRef>;
};

export type ComponentRef<T extends object = object> = {
	props?: PropsReference<T>;
	dataAttrs?: DataAttrsReference<T>;
};

export type PropReference = {
	type: string;
	description: string;
	required: boolean;
	bindable: boolean;
	defaultValue?: string;
	tooltip?: string;
};

export type PropsReference<T extends object> = {
	[K in keyof T]-?: PropReference;
};

export type DataAttrReference = {
	description: string;
	value?: string;
	tooltip?: string;
};

export type DataAttrsReference<T extends object> = {
	[K in keyof T as K extends `data-${string}` ? K : never]-?: DataAttrReference;
} & {
	[D in `data-${string}`]: DataAttrReference;
};

export type MethodReference = {
	type: `(${string}) => ${string}`;
	description: string;
};

export type MethodsReference<T extends object> = {
	[K in keyof T as T[K] extends (...args: unknown[]) => unknown ? K : never]: MethodReference;
};

export function defineHookRef<T extends object>(
	name: string,
	config: {
		props?: Partial<PropsReference<T>>;
		methods?: MethodsReference<T>;
	}
) {
	return { name, ...config } satisfies HookRef<T>;
}

export function defineParentRef(name: string, components: Record<string, ComponentRef>) {
	return {
		name,
		components,
	} satisfies ParentRef;
}

export function defineComponentRef<T extends object>(config: {
	props?: PropsReference<T>;
	dataAttrs?: DataAttrsReference<T>;
}) {
	return config satisfies ComponentRef<T>;
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
		tooltip: K extends "string"
			? `"${string}" | "${string}"${string extends infer _R ? "" : ` | "${string}"`}`
			: `${string} | ${string}${string extends infer _R ? "" : ` | ${string}`}`;
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
