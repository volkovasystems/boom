/*:
	@module-configuration:
		{
			"packageName": "boom",
			"fileName": "boom.js",
			"moduleName": "boom",
			"authorName": "Richeve S. Bebedor",
			"authorEMail": "richeve.bebedor@gmail.com",
			"repository": "git@github.com:volkovasystems/boom.git",
			"testCase": "boom-test.js",
			"isGlobal": true
		}
	@end-module-configuration

	@module-documentation:

	@end-module-documentation
*/
var boom = function boom( method, URL, catcher, requestOverride ){
	/*:
		@meta-configuration:
			{
				"method:required": "string",
				"URL:required": "string",
				"catcher:optional": "function",
				"requestOverride:optional": "function" 
			}
		@end-meta-configuration
	*/

	if( ( /requestOverride$/i ).test( catcher.name ) ){
		requestOverride = catcher;
		catcher = null;
	}

	if( typeof catcher != "undefined" ){
		return bump( method, URL, catcher, requestOverride );
	}else{
		return bang( method, URL, requestOverride );
	}
};