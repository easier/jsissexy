#!/usr/bin/env node
var arr = ['index.html',
			'some.html',
			'muy.txt',
			'work.css',
			'a12.txt',
			'page.html']

function filterhtml(element){
	return element.split('.').pop() === 'html'
}


var new_arr = arr.filter(filterhtml);
console.log(new_arr);
