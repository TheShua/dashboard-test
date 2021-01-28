import React, { useEffect, useState } from 'react';

// Components
import Loader from './Loader';

// Styles
import { Element } from '../styles/Tasks';

const TaskTimer = ({ task, cb, show }) => {
    const [timeleft, setTimeleft] = useState(Math.floor((new Date(task.timer).getTime() - new Date()) / 1000));
    const [classN, setClassN] = useState("");
    const debug = false;

    useEffect(() => { 
        // Little delay for animation
        setTimeout(() => {
            setClassN("show")
        }, 10);

        // SetInterval for the timer
        const interval = setInterval(() => {
            setTimeleft(timeleft - 1);
        }, 1000);

        // Check if the timer is finished to complete the task
        if (timeleft <= 0) {
            cb(task);
        }
       return () => clearInterval(interval);
    }, [timeleft, cb, task]);

    
    return (
        <Element className={`${show && classN}`}>
            {task.user.firstname} {task.user.lastname} {debug && timeleft} <Loader />
        </Element>
    );
}

export default TaskTimer;