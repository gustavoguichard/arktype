export { ArkError, ArkErrors as ArkErrors } from "@arktype/schema"
export type { Ark, ArkConfig, Out } from "@arktype/schema"
export { ambient, ark, declare, define, match, type } from "./ark.js"
export { Module } from "./module.js"
export {
	scope,
	type Scope,
	type inferScope,
	type validateScope
} from "./scope.js"
export { Type, type inferTypeRoot, type validateTypeRoot } from "./type.js"
