import React, { useEffect, useState } from 'react';

import Loader from './Loader';

// Styles
import { Element } from '../styles/Tasks';

const TaskTimer = ({ task, cb, show }) => {
    const [timeleft, setTimeleft] = useState(task.timer);
    const [classN, setClassN] = useState("");

    useEffect(() => { 
        setTimeout(() => {
            setClassN("show")
        }, 10);
        const interval = setInterval(() => {
            setTimeleft(timeleft => timeleft - 1);
        }, 1000);
       return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (timeleft <= 0) {
            cb(task);
        }
    }, [timeleft])
    
    return <Element className={`${show && classN}`}>
            <Loader /> {task.user.firstname} {task.user.lastname} {timeleft}</Element>
}

export default TaskTimer;