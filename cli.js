#!/usr/bin/env node
'use strict';

const meow = require("meow");
const quber = require('./qubinator-methods');

const cli = meow(`
    Usage
        $ quber <input>

    Options
        --2dsimple,  -s  Simple Cube
        --2dfull,    -f  Full Cube
        --3d,        -d  Full 3D Cube
        --fulltext,  -t  Full Text with Offset

    Examples
        $ quber BATATINHA --3d

        BATATINHA   
        A\\      H\\  
        T \\     N \\ 
        A  BATATINHA
        T  A    T  H
        I  T    A  N
        N  A    T  I
        H  T    A  T
        AHNITATAB  A
         \\ N     \\ T
          \\H      \\A
           AHNITATAB
`, {
    alias: {
        s: '2dsimple',
        f: '2dfull',
        d: '3d',
        t: 'fulltext'
    }
});

const input = cli.input[0];
const flags = cli.flags;

if (!input) {
    console.log("An input should be provided as parameter. See 'quber --help' for examples.");
    return;
}

if (input.length < 3) {
    console.log('The input should have at least 3 characters.');
    return;
}

if (flags['2dsimple'])
    quber.to2DSimple(input);
else if (flags['2dfull']) 
    quber.to2DFull(input);
else if (flags['3d']) 
    quber.to3D(input);
else if (flags['fulltext'])
    quber.toFullTextOffset(input);
else if (objectHasAnyProperty(flags))
	console.log('The flag provided is invalid.');
else
    console.log('At least one flag should be provided.');

function objectHasAnyProperty(obj) {
	for (var prop in obj) {
		if (obj.hasOwnProperty(prop))
			return true;
	}
	
	return false;
}


