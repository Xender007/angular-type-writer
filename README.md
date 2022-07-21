<p align="center">
<img src="https://img.shields.io/badge/language-typescript-green?style=round-square&logo=typescript" /> 
<img src="https://img.shields.io/badge/angular-v14.0.0-%2361DBFB?style=round-square&logo=angular" />
<a href="https://github.com/Xender007/angular-type-writer" target="_blank">
<img src="https://img.shields.io/badge/version-v1.0.5-green?style=flat-round&logo=github" />
</a>
<a href="https://www.npmjs.com/package/type-writer-xs" target="_blank">
<img src="https://img.shields.io/badge/package-npm-red?style=flat-square&logo=npm" />
</a>

<img src="./type-writer-main.gif" />
</p>
Angular Typewriter made with typescript language.

## Installation

```sh
npm i type-writer-xs
```

## Example usage

```tsx
import { TypeWriterXsComponent } from 'type-writer-xs';

export default function InsideYourComponent() {

    //TypeWriterXsComponent -> (HTMLElement, loop = false (default), typeSpeed = 50 (default), DeleteSpeed = 50 (default))
    //Note All speeds in milliseconds.
    const writer = new TypeWriterXsComponent(document.querySelector(".whitespace") as HTMLDivElement ,true, 130, 150);

    writer.typeString('hello there').typeString(' its type writer ').typeString(' Made by XeNDeR ').pauseFor(2000).deleteUpto(12).typeString(' visit : www.ixender.com').deleteAll().typeString('Bye').deleteAll().start();
}
```

## Inside Details

<table>
<thead>
    <tr><td><b>Name</b></td><td><b>Type</b></td><td><b>Description</b></td><td><b>Required</b></td><td><b>Default</b></td></tr>
</thead>
<tbody>
    <tr><td>userInput</td><td>string</td><td>Text to display as string </td><td>true</td><td></td></tr>
    <tr><td>loop</td><td>boolean</td><td>Set to true if the typewriter should loop after finishing typing the string(s)</td><td>false</td><td>false</td></tr>
    <tr><td>typeSpeed</td><td>number</td><td>How long (in ms) does the the typewriter wait after typing one character</td><td>false</td><td>30ms</td></tr>
    <tr><td>deleteSpeed</td><td>number</td><td>How long (in ms) does the the typewriter wait after deleting one character</td><td>false</td><td>30ms</td></tr>
    <tr><td>typeString(userInput: string)</td><td>function()</td><td>It will start the typing animation</td><td></td><td></td></tr>
    <tr><td>pauseFor(duration: number)</td><td>function()</td><td>It will start pause the typing animation upto "duration"</td><td></td><td></td></tr>
    <tr><td>deleteUpto(chars : number)</td><td>function()</td><td>It will delete upto "chars" given by user.</td><td></td><td></td></tr>
    <tr><td>deleteAll()</td><td>function()</td><td>It will delete complete text.</td><td></td><td></td></tr>
</tbody>
</table>
