'use strict';

let edge = require('edge');

const path = require('path').join(__dirname, 'Qubinator-Edge.dll')
const typeName = 'Qubinator_Edge.QubinatorWrapper';

let to2DSimpleFunc = edge.func({
	assemblyFile: path,
	typeName: typeName,
	methodName: 'To2DSimple'
});

let to2DFullFunc = edge.func({
	assemblyFile: path,
	typeName: typeName,
	methodName: 'To2DFull'
});

let to3DFunc = edge.func({
	assemblyFile: path,
	typeName: typeName,
	methodName: 'To3D'
});

let toFullTextOffsetFunc = edge.func({
	assemblyFile: path,
	typeName: typeName,
	methodName: 'ToFullTextOffset'
});

let defaultHandler = function(error, result) {
	if (error)
		throw error;

	console.log(result);
}

function to2DSimple(word) {
	to2DSimpleFunc(word, defaultHandler);
}

function to2DFull(word) {
	to2DFullFunc(word, defaultHandler);
}

function to3D(word) {
	to3DFunc(word, defaultHandler);
}

function toFullTextOffset(word) {
	toFullTextOffsetFunc(word, defaultHandler);
}

exports.to2DSimple = to2DSimple;
exports.to2DFull = to2DFull;
exports.to3D = to3D;
exports.toFullTextOffset = toFullTextOffset;