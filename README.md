# Qubinator-Cli
[NPM](https://www.npmjs.com/package/qubinator-cli) command-line client for the [Qubinator](https://github.com/jean-lourenco/Qubinator) C# library using [Edge.js](https://github.com/tjanczuk/edge).

```
  $ npm install qubinator-cli -g
```

## Usage
```
  $ quber --help;
```
```
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
      A\      H\
      T \     N \
      A  BATATINHA
      T  A    T  H
      I  T    A  N
      N  A    T  I
      H  T    A  T
      AHNITATAB  A
       \ N     \ T
        \H      \A
         AHNITATAB
```

## Features

### - Simple 2D

```
  $ quber BATATINHA --2dsimple
  OR
  $ quber BATATINHA -s
```

```
BATATINHA
A
T
A
T
I
N
H
A
```

### - Full 2D

```
  $ quber BATATINHA --2dfull
  OR
  $ quber BATATINHA -f
```

```
BATATINHA
A       H
T       N
A       I
T       T
I       A
N       T
H       A
AHNITATAB
```

### - 3D

```
  $ quber BATATINHA --3d
  OR
  $ quber BATATINHA -d
```

```
BATATINHA
A\      H\
T \     N \
A  BATATINHA
T  A    T  H
I  T    A  N
N  A    T  I
H  T    A  T
AHNITATAB  A
 \ N     \ T
  \H      \A
   AHNITATAB
```

### - Full 2D

```
  $ quber BATATINHA --fulltext
  OR
  $ quber BATATINHA -t
```

```
BATATINHA
ATATINHAB
TATINHABA
ATINHABAT
TINHABATA
INHABATAT
NHABATATI
HABATATIN
ABATATINH
```
