import { bootstrap } from "angular2/platform/browser" ;
import { Component } from "angular2/core" ;
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';


@Component({
    selector: 'app' ,
        host : {
            class : "myClass"
        },
    template: `    
        <form class=" ui large form segment" >
            
            <h3 class=" ui header" >Add task</h3>

            <div class=" field" >
                <label for=" title" >Task: </label >
                <input name=" title" #newTask >
            </div>
            
            <button (click)="addTask(newtitle)" class=" ui positive right button" >
                Add
            </button>        
        </form>  
    `
})
class App {  

    items: Observable<any[]>;
    constructor(af: AngularFire){
           
    } 

}

bootstrap(RedditApp, [
    FIREBASE_PROVIDERS,
    defaultFirebase('https://angular2-firebase-sample.firebaseio.com'),
]);

