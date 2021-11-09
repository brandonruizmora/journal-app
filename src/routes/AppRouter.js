import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="auth/*" element={<AuthRouter />} />
                    <Route exact path="/" element={<JournalScreen />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
