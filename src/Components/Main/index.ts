import './index.css'
import { getNames } from '../NameList/name-list';

const nameList = document.getElementById('names')

const fakeNames = [{first: 'John', last: 'Doe'}, {first: 'Howard', last: 'Haws'}, {first: 'Maggie', last: 'Lane'}]

getNames(nameList, fakeNames)