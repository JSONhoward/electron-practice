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