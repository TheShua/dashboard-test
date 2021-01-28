import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import TaskTimer from './TaskTimer';

// Actions
import { editState } from '../store/databaseActions';
import { endTask } from '../store/taskActions';

// Style
import { TaskWorld, Tasklist, Icon } from '../styles/Tasks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks } from '@fortawesome/free-solid-svg-icons'

const TaskViewer = () => {
    const [showTask, setShowTask] = useState(true);
    const tasks = useSelector(state => state.task);
    const dispatch = useDispatch();

    // Toggle task visibility
    const showTasks = () => {
        setShowTask(!showTask);
    }

    // Complete the task
    const doDiagnostic = (task) => {
        // Edit the state of the user
        dispatch(editState({ id: task.user.id, state: 'Diagnostic' }));
        // Remove the task
        dispatch(endTask(task.id))
    }

    return (
        <TaskWorld>
            <Icon className={showTask ? '' : 'faded'}><FontAwesomeIcon icon={faTasks} onClick={showTasks} /></Icon>
            <Tasklist>
                {tasks.map((task, i) => <TaskTimer task={task} key={i} show={showTask} cb={doDiagnostic} />)}
            </Tasklist>
        </TaskWorld>
    );
}

export default TaskViewer;