1. Create a Task (POST /tasks)

Accepts a task title and description.
Assigns a unique ID to each task.
Returns the created task as a response.

2. Get All Tasks (GET /tasks)

Returns a list of all tasks in JSON format.

3. Get a Single Task (GET /tasks/:id)

Returns details of a specific task by ID.
Returns a 404 error if the task is not found.

4. Update a Task (PUT /tasks/:id)


Allows updating a task's title or description.
Returns the updated task as a response.

5. Delete a Task (DELETE /tasks/:id)

Deletes a task from the list.
Returns a success message.
