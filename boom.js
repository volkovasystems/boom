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
var boom = function boom( method, URL, catcher ){
	/*:
		@meta-configuration:
			{
				"method:required": "string",
				"URL:required": "string",
				"catcher:optional": "function"
			}
		@end-meta-configuration
	*/

	if( typeof catcher != "undefined" ){
		return boom( method, url, catcher );
	}else{
		return bang( method, url );
	}
};