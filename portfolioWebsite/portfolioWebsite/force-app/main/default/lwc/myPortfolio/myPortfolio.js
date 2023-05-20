import { LightningElement } from 'lwc';
import logo from '@salesforce/resourceUrl/logo';
import background from '@salesforce/resourceUrl/background';

export default class MyPortfolio extends LightningElement {
myPortfolioImg=background;
// logo=`${portfolio}/logo.jpg`;
aboutUser=logo
  menus=[{"label":"Home",value:'custom:custom107'},{"label":'About',value:'custom:custom55'},{"label":"Projects",value:'custom:custom18'},{"label":"Contact",value:'custom:custom22'},{"label":'Service',value:'custom:custom55'}];
  home=true
about
projects
contact
  // close=close;
  // closeIcon=false;
  // handleClickham(){
  //   this.template.querySelector('.sideBar').classList.toggle('sideBarGo');
  //   setTimeout(() => {
  //     this.closeIcon=true;
  //   }, 210);
  //   this.template.querySelector('.ham').style.display='none';
    
  // }
  // handleClickclose(){
  //   this.template.querySelector('.ham').style.display='flex';
  //   this.template.querySelector('.sideBar').classList.toggle('sideBarGo');
  //   this.closeIcon=false;

  // }
  section;
  scrollToSection(event){
console.log("id",event.target.dataset.section);
this.section=`#${event.target.dataset.section}`;
let value=event.target.dataset.section;
    // const sectionElement = this.template.querySelector(`#${value}`);
    // console.log("sectionElement",sectionElement)
    // sectionElement.scrollIntoView({ behavior: 'smooth' });
let cloneMenu=[...this.menus];
cloneMenu.forEach(element => {
  let a=element===value
});
if(value==='Home'){
this.home=true;
this.about=false; 
this.projects=false;
this.contact=false;

}
if(value==='About'){
  this.home=false;
  this.about=true; 
  this.projects=false;
  this.contact=false;}
if(value==='Projects'){
  this.home=false;
  this.about=false; 
  this.projects=true;
  this.contact=false;}
if(value==='Contact'){
  this.home=false;
  this.about=false; 
  this.projects=false;
  this.contact=true;}



  }

}