//// [extjsDefaultClass.ts]

/**
 * File comments
 */

// TODO: Find out what will Sencha CMD do if the first line is not Ext.define(...)
//var someValue: string = "abc";
// class Boo {

// }

// export default class A extends Boo {
// 	public publicProp: string;
// 	private privateProp: string;
// 	static staticProp: string = "abc";
// 	static static2: number = 3;
// 	constructor(public publicParam: string) {
// 		super();
// 	}
// }


export default class A {
	constructor(public name?: string)
	{
			
	};
}

//// [extjsDefaultClass.js]
/**
 * File comments
 */
// TODO: Find out what will Sencha CMD do if the first line is not Ext.define(...)
//var someValue: string = "abc";
// class Boo {
// }
// export default class A extends Boo {
// 	public publicProp: string;
// 	private privateProp: string;
// 	static staticProp: string = "abc";
// 	static static2: number = 3;
// 	constructor(public publicParam: string) {
// 		super();
// 	}
// }
Ext.define('Tests.cases.compiler.extjsDefaultClass', {
    // constructor section. Length: 1
    constructor: function A(name) {
        this.name = name;
    }});
