export class UseClipboard {
	#delay: number;
	#copiedStatus = $state<boolean>();
	#timeout: ReturnType<typeof setTimeout> | undefined = undefined;

	constructor(delay: number = 500) {
		this.#delay = delay;
	}

	/** Copies text to clipboard */
	async copy(text: string) {
		if (this.#timeout) {
			this.#copiedStatus = undefined;
			clearTimeout(this.#timeout);
		}

		this.#copiedStatus = await navigator.clipboard.writeText(text).then(
			() => true,
			() => false
		);

		this.#timeout = setTimeout(() => {
			this.#copiedStatus = undefined;
		}, this.#delay);

		return this.#copiedStatus;
	}

	/** Whether the copy was successful */
	get copied() {
		return this.#copiedStatus;
	}
}
