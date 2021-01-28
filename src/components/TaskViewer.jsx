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

    console.log(tasks);

    const showTasks = () => {
        setShowTask(!showTask);
    }

    const doDiagnostic = (task) => {
        dispatch(editState({ id: task.user.id, state: 'Diagnostic' }));
        dispatch(endTask(task.id))
    }

    const showList = () => {
        return (
            <Tasklist>
                {tasks.map((task, i) => <TaskTimer task={task} key={i} show={showTask} cb={doDiagnostic} />)}
            </Tasklist>
        )
    }

    return (
        <TaskWorld>
            <Icon className={showTask ? '' : 'faded'}><FontAwesomeIcon icon={faTasks} onClick={showTasks} /></Icon>
            {showList()}
        </TaskWorld>
    );
}

export default TaskViewer;