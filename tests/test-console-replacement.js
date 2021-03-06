console = log;
QUnit.test("picolog", function( assert ) {
	assert.ok(typeof console == 'object', '`console` exists and is an object');
	assert.ok(typeof console.level == 'number', '`console.level` exists and is a number');
	assert.ok(console.TRACE === 6, '`console.TRACE` exists and is 6');
	assert.ok(console.DEBUG === 5, '`console.DEBUG` exists and is 5');
	assert.ok(console.LOG === 4, '`console.LOG` exists and is 4');
	assert.ok(console.INFO === 3, '`console.INFO` exists and is 3');
	assert.ok(console.WARN === 2, '`console.WARN` exists and is 2');
	assert.ok(console.ERROR === 1, '`console.ERROR` exists and is 1');
	assert.ok(console.NONE === 0, '`console.NONE` exists and is 0');
	assert.ok(typeof console.trace == 'function', '`console.trace` exists and is a function');
	assert.ok(typeof console.debug == 'function', '`console.debug` exists and is a function');
	assert.ok(typeof console.log == 'function', '`console.log` exists and is a function');
	assert.ok(typeof console.info == 'function', '`console.info` exists and is a function');
	assert.ok(typeof console.warn == 'function', '`console.warn` exists and is a function');
	assert.ok(typeof console.error == 'function', '`console.error` exists and is a function');
	assert.ok(console.level === console.WARN, 'log level defaults to WARN');
	console.info('This info message should NOT appear in the logs.');
	assert.ok(true, 'Console should show NO info messages yet');
	console.warn('Setting log level to DEBUG...');
	assert.ok(true, 'Console should show a warning message about changing the log level');
	console.level = console.DEBUG;
	assert.ok(console.level === console.DEBUG, 'log level set to DEBUG');
	console.info('This info message SHOULD appear in the logs.');
	assert.ok(true, 'Console should now show ONE info message.');
	console.debug('This debug message SHOULD appear in the logs.');
	assert.ok(true, 'Console should now show ONE debug message.');
	console.trace('This trace message should NOT appear in the logs.');
	assert.ok(true, 'Console should not show any trace messages yet.');
	console.level = console.TRACE;
	console.error('Setting log level to TRACE...');
	assert.ok(true, 'Console should show an error message about changing the log level');
	assert.ok(console.level === console.TRACE, 'log level set to TRACE');
	console.trace('This trace message SHOULD appear in the logs.');
});

