<script lang="ts" module>
	export type ComponentRef = {
		name: string;
		description: string;
		props: Record<string, PropRef>;
	};

	export type PropRef = {
		type: string;
		tooltip?: string | string[];
		required?: boolean;
		bindable?: boolean;
		defaultVal?: string;
	};
</script>

<script lang="ts">
	let { name, description, props }: ComponentRef = $props();
</script>

<h2 class="mt-12 text-xl font-medium tracking-tight">{name}</h2>
<p class="leading-relaxed">{description}</p>
<table class="w-full">
	<thead>
		<tr>
			<th>Prop</th>
			<th>Type</th>
			<th>Default</th>
		</tr>
	</thead>
	<tbody>
		{#each Object.entries(props) as [prop, ref] (prop)}
			<tr>
				<td class="flex gap-2 *:not-first:text-muted-foreground">
					<span>{prop}</span>
					{#if ref.required}
						<span>[required]</span>
					{/if}
					{#if ref.bindable}
						<span>[bindable]</span>
					{/if}
				</td>
				<td>{ref.type}</td>
				<td>{ref.defaultVal || "-"}</td>
			</tr>
		{/each}
	</tbody>
</table>
