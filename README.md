# dragon-quest-NGRX

1) Update angular to the latest version (17)
2) Created the project
3) Installed RXjs,NGRX,Bootstrap


# Overview 
I'm currently developing an Angular application named "Dragons Quest" that involves a hero on a quest to slay a dragon with three companions (Knight, Sorcerer, Paladin, and Druid). Each class follows a unique path with specific steps until they reach the final goal of killing the dragon. The application starts with a class selection screen, and based on the chosen class, the user goes through a series of steps.

I need assistance in creating a main (smart) component that renders tiles containing images and subtitles representing choices for each step. Additionally, the component should include buttons for navigating to the previous or next step, and a stepper at the top to display the all the steps and which step the user is. Also, the amount of steps could vary dpeneding on the coices. The entire application should be seamlessly integrated with NGRX.

Could you provide guidance on structuring the main component, handling state management with NGRX, and ensuring a smooth flow through the different steps for each class?

Answear:
Certainly! Let's break down the steps to create the main (smart) component and integrate it seamlessly with NgRx for state management. I'll provide a high-level overview, and you can adapt it based on your specific requirements.

### 1. Set up NgRx Store and Actions:

Create actions, reducers, and a store for managing the application state. Actions will include events such as selecting a class, navigating to the next or previous step, etc.

### 2. Define Application State:

Define a state structure in your NgRx store to hold information like the selected class, current step, and any other relevant data.

### 3. Create Smart Component:

#### MainComponent (Smart Component)
```typescript
// main.component.ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { SelectClass, NextStep, PreviousStep } from './store/actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // Add necessary properties
  selectedClass$ = this.store.select(state => state.selectedClass);
  currentStep$ = this.store.select(state => state.currentStep);
  totalSteps$ = this.store.select(state => state.totalSteps);
  // Add other necessary state properties

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    // Dispatch an action to initialize the state or load initial data
  }

  onSelectClass(className: string) {
    this.store.dispatch(new SelectClass({ className }));
  }

  onNextStep() {
    this.store.dispatch(new NextStep());
  }

  onPreviousStep() {
    this.store.dispatch(new PreviousStep());
  }
}
```

### 4. Create Presentation Components:

#### TileComponent (Dumb Component)
```typescript
// tile.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent {
  @Input() imagePath: string;
  @Input() subtitle: string;
  @Output() tileClicked = new EventEmitter<void>();
}
```

#### StepperComponent (Dumb Component)
```typescript
// stepper.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {
  @Input() currentStep: number;
  @Input() totalSteps: number;
}
```

### 5. Create HTML Templates:

#### main.component.html
```html
<div class="container">
  <app-stepper [currentStep]="currentStep$ | async" [totalSteps]="totalSteps$ | async"></app-stepper>
  <div class="class-selection" *ngIf="!(selectedClass$ | async)">
    <!-- Render class selection options -->
  </div>
  <div class="main-content" *ngIf="selectedClass$ | async">
    <app-tile [imagePath]="..." [subtitle]="..." (tileClicked)="onNextStep()"></app-tile>
    <!-- Render other tiles based on the current step -->
    <button (click)="onPreviousStep()">Previous</button>
    <button (click)="onNextStep()">Next</button>
  </div>
</div>
```

#### tile.component.html
```html
<div class="tile" (click)="tileClicked.emit()">
  <img [src]="imagePath" alt="Tile Image">
  <p>{{ subtitle }}</p>
</div>
```

#### stepper.component.html
```html
<div class="stepper">
  Step {{ currentStep }} / {{ totalSteps }}
</div>
```

### 6. CSS Styling:

Style your components using CSS to achieve the desired layout and appearance.

### 7. NgRx Effects:

Consider using NgRx Effects to handle asynchronous operations, such as loading data for each step.

### 8. Adapt for Multiple Steps:

Since the number of steps can vary, dynamically generate tiles and manage the flow based on the selected class and current step.

### 9. Routing (Optional):

Consider using Angular Router for better navigation between different views or steps.

This is a basic structure to get you started. Adapt it according to your specific application requirements, and ensure that you integrate NgRx actions, reducers, and selectors effectively to manage the state seamlessly across your application.   

# Challenges:

Creaating the initial configuration for NGRx.
On each choice made the amount and content of the steps will change. How to handle this withou getting a 1600 line file with lots of nested Ifs.

# Images:
The images were generated by AI using Pixlr and GenCraft. 
I wrote the following prompts using chatgpt as well:


### Knight (Gen Craft):
"Craft a captivating Studio Ghibli-style illustration featuring a noble knight immersed in a world of red hues. Envision a character adorned in rich, red armor, standing against a backdrop that exudes warmth and valor. The scene should evoke a sense of passion, courage, and the fiery spirit of a gallant knight."
### Archer (Gen Craft):
"Generate a mesmerizing Studio Ghibli-inspired image of a skilled archer surrounded by the golden glow of a magical forest. Envision a character with a bow, clad in attire highlighting shades of yellow. Capture the play of sunlight filtering through the foliage, creating an atmosphere of serenity and the archer's connection with the vibrant, sunlit surroundings."
### Sorcerer (Pixlr):
Create a captivating Studio Ghibli-style illustration of a powerful sorcerer. Envision a character with flowing robes, surrounded by mystical energy. The sorcerer should exude an aura of ancient wisdom and arcane power. Pay attention to the details of the magical elements in the scene."
### Druid(Pixlr):
Generate a whimsical Studio Ghibli-inspired image of a druid deeply connected to nature. Picture a character adorned with leaves, accompanied by forest creatures, and surrounded by vibrant flora. Capture the essence of harmony between the druid and the natural world.



