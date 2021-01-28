import React from 'react';

// Store
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../store/taskActions';
import { editState } from '../store/databaseActions';
import { increment } from '../store/counterActions.js';

// Components
import Loader from '../components/Loader';

// Utils
import { config } from '../utils/config';

// Styles
import { Card } from '../styles/User';

const User = ({match}) => {
    const db = useSelector(state => state.db);
    const tasks = useSelector(state => state.task);
    const idCount = useSelector(state => state.count);
    const user = db.find(u => u.id === Number(match.params.id));
    const dispatch = useDispatch();

    const generateDiagnostic = () => {
        let timer = Math.floor(Math.random() * (config.timerMax - config.timerMin + 1) + config.timerMin);
        timer = Math.floor(timer / 60);
        let date = new Date();
        date.setSeconds(date.getSeconds() + timer);
        let secs = Math.floor((new Date(date).getTime() - new Date()) / 1000);
        dispatch(editState({ id: user.id, state: 'Ongoing treatment...' }));
        dispatch(addTask({id: idCount, user, timer: secs}));
        dispatch(increment());
    }

    return (
        <Card>
            <h2>Ressource card</h2>
            <h3>{user.firstname} {user.lastname}</h3>
            <section>
                <div>
                    <ul>
                        <li><strong>Firstname:</strong> {user.firstname}</li>
                        <li><strong>Lastname:</strong> {user.lastname}</li>
                        <li><strong>State:</strong> {user.state}</li>
                    </ul>
                </div>
                <div>
                    {tasks.find(x => x.user.firstname === user.firstname && x.user.lastname === user.lastname) ?
                        <span>Calculating diagnostic... <Loader /></span>
                        : <button onClick={() => generateDiagnostic()}><p><span className="bg"></span><span className="base"></span><span className="text">Diagnostic</span></p></button>}
                </div>
            </section>
        </Card>
    );
}

export default User;