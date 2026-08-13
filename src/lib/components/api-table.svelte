<script lang="ts" module>
	export type PropReference = {
		name: string;
		type: string;
		required?: boolean;
		bindable?: boolean;
		default?: string;
		tooltip?: string;
	};

	export type ComponentReference = {
		name: string;
		description: string;
		props: PropReference;
	};
</script>

<script lang="ts">
	let { name, description, props }: ComponentReference = $props();
</script>

<div>
	<h2>{name}</h2>
	<p>{description}</p>
	{JSON.stringify(props)};
</div>
