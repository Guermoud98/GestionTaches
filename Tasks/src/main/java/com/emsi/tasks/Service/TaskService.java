package com.emsi.tasks.Service;

import com.emsi.tasks.Entity.Task;
import com.emsi.tasks.Exception.ResourceNotFoundException;
import com.emsi.tasks.Repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public Task createTask(Task task) {
        return taskRepository.save(task);
    }
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }
    public Optional<Task> getTaskById(Long id) {
        if(taskRepository.existsById(id)) {
            return taskRepository.findById(id);
        }
        else {
            throw new ResourceNotFoundException("Task Not Found");
        }
    }
    public Task updateTask(Task task, Long id) {
        if(taskRepository.existsById(id)) {
            task.setId(Math.toIntExact(id));
            return taskRepository.save(task);
        }
        else {
            throw new ResourceNotFoundException("task doesn't exit");
        }
    }
    public void deleteTask(Long id) {
        if(taskRepository.existsById(id)) {
            taskRepository.deleteById(id);
        }
        else {
            throw new ResourceNotFoundException("task doesn't exit");
        }

    }
}
