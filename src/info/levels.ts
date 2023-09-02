interface ILevels {
    level: number;
    whatToDo: string;
    correctAnswer: string;
    clue: string;
    markup: string;
}

export const levels: ILevels[] = [
    {
        level: 1,
        whatToDo: 'Select a plate with a triangle',
        correctAnswer: 'plate triangle',
        clue: 'plate triangle',
        markup: `
        <div class="table">
        <plate/>
        <plate>
          <triangle/>
        </plate>
        </div>
        `
    },
    {
        level: 2,
        whatToDo: 'Select the plates',
        correctAnswer: 'plate',
        clue: 'plate',
        markup: `
        <div class="table">
        <plate/>
        <box/>
        <plate/>
        </div>
        `
    },
    {
        level: 3,
        whatToDo: 'Select the striped parallelogram',
        correctAnswer: '.striped',
        clue: '.striped',
        markup: `
        <div class="table">
        <parallelogram class="striped"/>
        <plate/>
        <box/>
        </div>
        `
    },
    {
        level: 4,
        whatToDo: 'Select an oval on the box',
        correctAnswer: 'box oval',
        clue: 'box oval',
        markup: `
        <div class="table">
        <plate/>
        <box>
          <oval/>
        </box>
        <oval/>
        </div>
        `
    },
    {
        level: 5,
        whatToDo: 'Select a triangle on a striped parallelogram',
        correctAnswer: '.striped triangle',
        clue: '.striped triangle',
        markup: `
        <div class="table">
        <box>
          <triangle/>
        </box>
        <plate>
          <oval/>
        </plate>
        <parallelogram class="striped">
          <triangle/>
        </parallelogram>
        </div>
        `
    },
    {
        level: 6,
        whatToDo: 'Select small triangles',
        correctAnswer: 'triangle.small',
        clue: 'triangle.small',
        markup: `
        <div class="table">
        <triangle/>
        <triangle class="small"/>
        <parallelogram>
          <oval/>
        </parallelogram>
        <oval class="small"/>
        <plate>
          <triangle class="small"/>
        </plate>
        </div>
        `
    },
    {
        level: 7,
        whatToDo: 'Select the small ovals in the box',
        correctAnswer: 'box oval.small',
        clue: 'box oval.small',
        markup: `
        <div class="table">
        <box>
          <oval/>
        </box>
        <oval class="small"/>
        <box>
          <oval class="small"/>
        </box>
        <box>
          <triangle/>
        </box>
        <box>
          <oval class="small"/>
        </box>
        </div>
        `
    },
    {
        level: 8,
        whatToDo: 'Select all boxes and plates',
        correctAnswer: 'box, plate',
        clue: 'box, plate',
        markup: `
        <div class="table">
        <triangle/>
        <triangle class="small"/>
        <box>
          <triangle/>
        </box>
        <plate>
          <triangle/>
        </plate>
        <box>
          <triangle/>
        </box>
        <triangle class="small"/>
        <triangle/>
        </div>
        `
    },
    {
        level: 9,
        whatToDo: 'Select everything on a plate',
        correctAnswer: 'plate *',
        clue: 'plate *',
        markup: `
        <div class="table">
        <parallelogram class="striped"/>
        <plate>
          <triangle/>
        </plate>
        <plate>
          <oval/>
        </plate>
        <plate>
          <oval/>
        </plate>
        </div>
        `
    },
    {
        level: 10,
        whatToDo: 'Select all the things',
        correctAnswer: '*',
        clue: '*',
        markup: `
        <div class="table">
        </plate>
        </plate>
        <box>
          <oval/>
        </box>
        <parallelogram class="striped"/>
        <plate>
          <triangle/>
        </plate>
        </div>
        `
    },
];