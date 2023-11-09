export class Todo{
    constructor(selector, columns){
        this.selector = selector;
        this.columns = columns;
        this.DOM = null;
        this.columnsDOM = [];
        this.tasks= [];
        this.lastUsedTaskId = 0;

        this.init();
    }

    init(){
        this.updateDOMelement();
        this.render();

        this.loadInitialData();
    }
    updateDOMelement(){
        if(typeof this.selector !== 'string' || this.selector === ''){
            throw new Error('Netinkamas selektorius');
        }
        this.DOM = document.querySelector(this.selector);
    }
    render(){

        let HTML = '';

        for(const column of this.columns){
            HTML += `
            <div class="column">
                <h2 class="title">${column}</h2>
                <ul class="task-list"></ul>
                </div>`
            }

        this.DOM.classList.add('todo');
        this.DOM.innerHTML = HTML;
        this.DOM.style.gridTemplateColumns = `repeat${this.columns.length}, 1fr)`;

        this.columnsDOM = this.DOM.querySelectorAll('.task-list');
    }

    taskCardHTML(){
        let tagsHTML = '';

        for(const tag of task.tags){
            tagsHTML += `<div class="tag" style="color: ${tag.color};">${tag.text}</div>`;
        }

        return `
        <li id="task_${taskID}" class="task-card">
            <div class="task-action">
            <button class="fa fa-trash"></button>
            </div>
            <div class="task-title">${task.title}</div>
            <div class="task-desc">${task.desc}</div>
            <div class="task-tags">${tagsHTML}</div>
            <div class="task-deadline">${task.deadline}</div>
        </li>`;
    }



    addTask(task){
        this.renderTask(task);
        localStorage.setItem('46g-tasks-list', JSON.stringify(this.tasks));
        
    }
    
    renderTask(){
        const taskID = ++this.lastUsedTaskId;
        this.tasks.push({
            ...task,
            isDeleted: false,
        });
        
        // this.columnsDOM[task.columnIndex].innerHTML += HTML;
        this.columnsDOM[task.columnIndex].insertAdjacentHTML('beforeend', this.taskCardHTML(taskID, task));
    
        const taskDOM = document.getElementById(`task_${taskID}`);
        const deleteButtonDOM = taskDOM.querySelector(`.fa-trash`)
        
        deleteButtonDOM.addEventListener('click', () => {
            this.tasks[taskID - 1].isDeleted = true;
            taskDOM.remove();
        });

    }

    loadInitialData(){
        const localData = localStorage.getItem('46g-task-list');
        const data = JSON.parse(localData);

        for(const task of data){
            this.renderTask(task);
        }
    }
}
