export class UseClipboard {
	#delay: number;
	#copiedStatus = $state<boolean>();
	#timeout: ReturnType<typeof setTimeout> | undefined = undefined;

	constructor(delay: number = 500) {
		this.#delay = delay;
	}

	async copy(text: string) {
		if (this.#timeout) {
			this.#copiedStatus = undefined;
			clearTimeout(this.#timeout);
		}

		this.#copiedStatus = await copyText(text);

		this.#timeout = setTimeout(() => {
			this.#copiedStatus = undefined;
		}, this.#delay);

		return this.#copiedStatus;
	}

	get copied() {
		return this.#copiedStatus;
	}
}

export async function copyText(text: string): Promise<boolean> {
	try {
		await navigator.clipboard.writeText(text);
		return true;
	} catch {
		return false;
	}
}
