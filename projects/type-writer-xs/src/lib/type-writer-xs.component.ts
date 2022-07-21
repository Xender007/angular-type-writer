import { NgIf } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Resolve } from '@angular/router';


type QueueItem = () => Promise<void>

export class TypeWriterModules {
  private loop : boolean = false;
  private typeSpeed : number = 80;
  private deleteSpeed : number = 80;
}


@Component({
  selector: 'lib-type-writer-xs',
  template: `
    <p>
      type-writer-xs works!
    </p>
  `,
  styles: [

  ]
})


export class TypeWriterXsComponent {

  public twModules : TypeWriterModules | undefined;
    private queue : QueueItem[] = [];
    private loop: boolean;
    private typeSpeed : number;
    private deleteSpeed: number
    private ele : HTMLElement;


  constructor(parent: HTMLElement, @Inject(TypeWriterModules) loop = false, @Inject(TypeWriterModules) typeSpeed = 50, @Inject(TypeWriterModules) deleteSpeed = 50) {
    this.ele = document.createElement('div');
    this.ele.className = 'type-writer';
    this.ele.setAttribute("style", "color: red; font-size: 30px; float: left;");
    parent.append(this.ele);

    let x = document.createElement('span');
    x.className = 'cursor-blink';
    x.innerHTML = "|";
    x.setAttribute("style", "font-weight: 100;font-size: 30px; color: #2E3D48; animation: 1s blink step-end infinite;")
    parent.appendChild(x);


    const cursor = document.querySelector('.cursor-blink');
    const keyFrames = document.createElement("style");
    keyFrames.innerHTML = `
    @keyframes blink {
        from, to {
          color: transparent;
        }
        50% {
          color: black;
        }
      } 
    `;
    cursor!.appendChild(keyFrames);
    this.loop = loop;
    this.typeSpeed = typeSpeed;
    this.deleteSpeed = deleteSpeed;
   }



   typeString(userInput: string) {

    this.addQueue((resolve: any)=> {
        let i = 0;
        const typeingInterval = setInterval(() => {
        this.ele.append(userInput[i]);
        console.log("after going inside", userInput);
        i++;
        if(i >= userInput.length) {
          clearInterval(typeingInterval);
          resolve();
        }
      }, this.typeSpeed);
      
    });
    return this;
  }


  deleteUpto(charsCount : number) {


    this.addQueue((resolve: any)=> {
        let i = 0;
        const typeingInterval = setInterval(() => {
        this.ele.innerText = this.ele.innerText.substring(0, this.ele.innerText.length - 1)
        i++;
        if(i >= charsCount) {
          clearInterval(typeingInterval);
          resolve();
        }
      }, this.deleteSpeed);

    });
    return this;

  }


  deleteAll(deleteSpeed = this.deleteSpeed) {

    this.addQueue((resolve: any)=> {
        const typeingInterval = setInterval(() => {

        this.ele.innerText = this.ele.innerText.substring(0, this.ele.innerText.length - 1);
        if(this.ele.innerText.length === 0) {
          clearInterval(typeingInterval);
          resolve();
        }

      }, deleteSpeed);

    });
    return this;
  }

  pauseFor(duration: number) {
    this.addQueue((resolve: any)=> {
        setTimeout(resolve,duration);
    });
    return this;
  }

  async start () {
    let cb = this.queue.shift();
    while(cb != null) {
        await cb();
        if(this.loop) this.queue.push(cb);
        cb = this.queue.shift();
    }
    return this;
  }

  addQueue(cb : any) {
    this.queue.push(()=> {
      return new Promise(cb);
    });
  }

}
