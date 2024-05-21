$(document).ready(() => {
    $('.add-task').click(ev => {
        ev.preventDefault()

        const taskList = $('#tasks')
        const task = $('#task-name').val()
        const newTask = $(`<li style="cursor: pointer">${task}</li>`)
        $(newTask).click(() => {
            if ($(newTask).is(".done")) {
                console.log('tem done')
                $(newTask).removeClass('done')
            } else {
                $(newTask).addClass('done')
                console.log(newTask)
            }
        })
        $(newTask).appendTo(taskList)
        $(task).val('')
    })
})
