export const taskSelectionActiveToggle = () => {
    const taskItems = document.querySelectorAll('#tasks li')

    taskItems.forEach(task => {
        task.addEventListener('click', () => {
            if (!task.classList.contains('active-task')) {
                taskItems.forEach(task2 => {
                    task2.classList.remove('active-task')
                    task2.classList.add('not-active-task')
                })
                task.classList.add('active-task')
            }
        })
    })
}

export const toggleNameList = () => {
    document.getElementById('tasks')?.addEventListener('click', (e: MouseEvent | KeyboardEvent) => {
        const names = document.getElementById('name-list')
        const target = e.target as HTMLElement

        if (target.id === 'task-names' && names!.style.display !== 'flex') {
            names!.style.display = 'flex'
        } else if(target.id === 'tasks' && names!.style.display === 'flex') {
            names!.style.display = 'flex'
        }else {
            names!.style.display = 'none'
        }
    })
}