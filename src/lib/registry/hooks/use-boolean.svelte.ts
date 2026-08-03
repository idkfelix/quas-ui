/**
 * A hook for working with boolean state.
 * ```svelte
 * <script lang='ts'>
 *   const open = new UseBoolean();
 * </script>
 *
 * <p>{open.current}</p>
 * <button onclick={open.toggle}/>
 * ```
 */
export class UseBoolean {
	#current = $state(false);

	constructor(defaultValue = false) {
		this.#current = defaultValue;
		this.toggle = this.toggle.bind(this);
		this.setTrue = this.setTrue.bind(this);
		this.setFalse = this.setFalse.bind(this);
	}

	/** Toggle the current state */
	toggle() {
		this.#current = !this.#current;
	}

	/** Set the current state to true */
	setTrue() {
		this.#current = true;
	}

	/** Set the current state to false */
	setFalse() {
		this.#current = false;
	}

	get current() {
		return this.#current;
	}

	set current(value) {
		this.#current = value;
	}
}
