/**
 * @author ahmed lithy
 */
package com.lithy.projects.todo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lithy.projects.todo.entities.Todo;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long>{
	List<Todo> findByUsername(String username);
}
