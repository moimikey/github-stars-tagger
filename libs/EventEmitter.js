/**
 * @class EventEmitter
 */
function EventEmitter() {
	this._listeners = [];
}

EventEmitter.prototype = {

	constructor: EventEmitter,

	on: function(eventName, callback) {
		this._listeners.push({
			name: eventName,
			callback: callback
		});
		return this;
	},

	off: function(eventName, callback) {
		this._listeners.forEach(function(listener, index) {
			if (listener.name === eventName && listener.callback === callback) {
				this._listeners.splice(index, 1);
			}
		}, this);
		return this;
	},

	emit: function(eventName, data) {
		this._listeners
			.filter(function(listener) { return listener.name === eventName; }, this)
			.forEach(function(listener) { listener.callback(data, this, eventName); }, this);
		return this;
	}

};
