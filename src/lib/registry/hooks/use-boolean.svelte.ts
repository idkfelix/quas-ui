export class UseBoolean {
	#current = $state(false);

	constructor(defaultValue = false) {
		this.#current = defaultValue;
		this.toggle = this.toggle.bind(this);
		this.setTrue = this.setTrue.bind(this);
		this.setFalse = this.setFalse.bind(this);
	}

	toggle() {
		this.#current = !this.#current;
	}

	setTrue() {
		this.#current = true;
	}

	setFalse() {
		this.#current = false;
	}

	get current() {
		return this.#current;
	}

	set current(val) {
		this.#current = val;
	}
}
