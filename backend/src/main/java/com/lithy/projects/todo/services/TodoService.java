/**
 * @author ahmed lithy
 */
package com.lithy.projects.todo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lithy.projects.todo.entities.Todo;
import com.lithy.projects.todo.repositories.TodoRepository;

@Service
public class TodoService {
	
	@Autowired
	TodoRepository todoRepository;

	public List<Todo> findByUsername(String username) {
		return todoRepository.findByUsername(username);
	}

	public Todo findById(long id) {
		return todoRepository.findById(id).get();
	}

	public void deleteById(long id) {
		todoRepository.deleteById(id);
	}

	public Todo save(Todo todo) {
		return todoRepository.save(todo);
	}

}
