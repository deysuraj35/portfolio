import { LightningElement ,track} from 'lwc';

export default class Service extends LightningElement {
    @track myWorks=[{"title":"Web Development","desc":"I have developed this website","link":""},
    {"title":"Android Development","desc":"I have developed this app using kotlin","link":""},
    {"title":"Java Development","desc":"i have developed this java app","link":""}];
}