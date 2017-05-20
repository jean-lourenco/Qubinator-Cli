'use strict';

let edge = require('edge');

let to2DSimpleFunc = edge.func({
	assemblyFile: 'Qubinator-Edge.dll',
	typeName: 'Qubinator_Edge.QubinatorWrapper',
	methodName: 'To2DSimple'
});

let to2DFullFunc = edge.func({
	assemblyFile: 'Qubinator-Edge.dll',
	typeName: 'Qubinator_Edge.QubinatorWrapper',
	methodName: 'To2DFull'
});

let to3DFunc = edge.func({
	assemblyFile: 'Qubinator-Edge.dll',
	typeName: 'Qubinator_Edge.QubinatorWrapper',
	methodName: 'To3D'
});

let toFullTextOffsetFunc = edge.func({
	assemblyFile: 'Qubinator-Edge.dll',
	typeName: 'Qubinator_Edge.QubinatorWrapper',
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