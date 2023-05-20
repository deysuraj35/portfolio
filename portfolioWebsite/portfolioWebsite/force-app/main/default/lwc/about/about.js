import { LightningElement,api,track } from 'lwc';

export default class About extends LightningElement {
    @api aboutUser;
    @track aboutSecBtn=[{"index":0,"value":"Skills","skillSet":{"value": "UI/UX" ,"desc":"Designing web interfaces"}},{"index":1,"value":"Experience","skillSet":{"value": "UI/UX" ,"desc":"Designing web interfaces"}},{"index":2,"value":"Education","skillSet":{"value": "UI/UX" ,"desc":"Designing web interfaces"}}];
    @track Experience;
    @track Skills=true;
    @track Education
    handleClick(event){
        let id=event.target.data;
        console.log(event.target.data)
        if(id==="Skills"){
        this.Skills=true;
        this.Experience=false
        this.Education=false
    }
    else if(id==="Experience"){
        this.Skills=false;
        this.Experience=true
        this.Education=false
    }
    else if(id==="Education"){
        this.Skills=false;
        this.Experience=false
        this.Education=true
    }
    }
}
