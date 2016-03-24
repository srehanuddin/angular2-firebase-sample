import { bootstrap } from "angular2/platform/browser" ;
import { Component } from "angular2/core" ;
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire, FirebaseListObservable} from 'angularfire2';
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
            
            <button (click)="addTask(newTask)" class=" ui positive right button" >
                Add
            </button>        
        </form>  
    `
})
class App {  

    tasks: FirebaseListObservable<any[]>;
    //tasks: Observable<any[]>;
    constructor(af: AngularFire){
        this.tasks = af.list('/tasks');
    } 
    
    addTask(task : HTMLInputElement): void {
    
        console.log(`Adding article title: ${task.value} `);
        
        this.tasks.add(task.value);

    }
}

bootstrap(App, [
    FIREBASE_PROVIDERS,
    defaultFirebase('https://angular2-firebase-sample.firebaseio.com'),
]);

