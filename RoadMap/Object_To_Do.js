document.querySelector("#Object_To_Do").onclick = function() {
    const STATUS = {
        IN_PROGRESS: 'In Progress',
        TO_DO: 'To Do',
        DONE: 'Done',
    }

    const list = {
    }
    

  function changeStatus(task,status){
    if(list[task]){
    list[task] = status;}
    else {
        console.log('Задача отстутсвует')
    }
    };

    function addTask(task,status){
        list[task] = status;
    };

    function deleteTask(task){
        delete list[task];
     
    };

    function showList(){
        let consoleTodo = STATUS.TO_DO + ': \n', 
        consoleInProgress = STATUS.IN_PROGRESS +': \n',
        consoleDone = STATUS.DONE + ': \n';
        if(Object.keys(list).length == 0){
            console.log('Недобавлено ни одной задачи')
         } else {
        }
        for(let key in list){
            if(list[key] == STATUS.TO_DO) {
            consoleTodo += key + '\n';
        }    
          else  if ((list[key]) === '') {
            consoleTodo = '-' + '\n';
            }  
        } 
        for(let key in list){
            if ((list[key]) == '') {
                consoleInProgress = '-' + '\n';
                }  if(list[key] == STATUS.IN_PROGRESS) {
            consoleInProgress += key + '\n'; 
        }
          else if ((list[key]) === '') {
            consoleInProgress = '-' + '\n';
            }
        }
        for(let key in list){
         if(list[key] == STATUS.DONE) {
            consoleDone += key + '\n';
        } 
          else if ((list[key]) === '') {
            consoleDone = '-' + '\n';
        }
      }
    
    console.log(consoleTodo);
    console.log(consoleInProgress);
    console.log(consoleDone);
    };
    
    /*showList();
    addTask("Coding", "In Progress")
    changeStatus("make a bed","Done")
    showList();
    addTask("Farm", "In Progress")
    addTask("Game", "To Do")
    addTask("Cooking", "Done")
    showList();*/
    showList();
    changeStatus(' Farm',STATUS.DONE)
    changeStatus(' Game',STATUS.DONE)
    changeStatus(' Coding',STATUS.DONE)
    changeStatus(' create a new practice task',STATUS.DONE) 
    changeStatus(' write a post',STATUS.DONE)
    
    addTask(' Farm',STATUS.DONE)
    addTask(' Game',STATUS.DONE)
    addTask(' Coding',STATUS.DONE)
    addTask(' create a new practice task',STATUS.DONE) 
    addTask(' write a post',STATUS.DONE)
    showList();
 }

 