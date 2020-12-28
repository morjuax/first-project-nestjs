import { Controller, Delete, Get, Post, Put, Body, Param } from "@nestjs/common";
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/Task';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getTasks(): Task[] {
    return this.taskService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id): Task {
    return this.taskService.getTask(parseInt(id));
  }

  @Post()
  createTask(@Body() task: CreateTaskDto): string {
    console.log(task);
    return 'Creating a task';
  }

  @Put(':id')
  updateTask(@Body() task: CreateTaskDto, @Param('id') id): string {
    console.log(task);
    return `Updating a task number: ${id}`;
  }

  @Delete(':id')
  deleteTask(@Param('id') id): string {
    console.log(id);
    return `Deleting a task  number: ${id}`;
  }
}
