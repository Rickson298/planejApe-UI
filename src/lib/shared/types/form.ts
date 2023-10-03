export type EventWithCurrentTarget = Event & {
	currentTarget: EventTarget & HTMLInputElement;
};
