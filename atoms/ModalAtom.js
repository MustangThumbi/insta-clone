//this is like a slice in redux
import {atom} from 'recoil';


export const modalState = atom({
   key:'modalState' ,
   default:false,
})