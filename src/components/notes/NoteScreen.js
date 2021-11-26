import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input type="text" placeholder="Some awesome title" className="notes__title-input" autoComplete="off" />
                <textarea placeholder="What happend today" className="notes__textarea"></textarea>
                <div className="notes__image">
                    <img src="https://cdn.mos.cms.futurecdn.net/FRLZyoFp8gr9rApDDsx8mg.jpg" alt="imagen" />
                </div>
            </div>
        </div>
    )
}
