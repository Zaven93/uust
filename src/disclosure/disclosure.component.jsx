import React, { useState } from 'react'
import './styles.scss'

export const Disclosure = () => {
    const [open, setOpen] = useState(false)

    const handleDisclosure = () => setOpen(!open)
    return (
        <div className='disclosure-container'>
            <div className='disclosure-container__summary' onClick={handleDisclosure}>
                <h1 className='disclosure-container__summary-content'>
                    Open Contracting Data Standard
                </h1>
                <i className={`fas fa-chevron-down ${open ? 'opened' : 'closed'}`}></i>
                <i className={`fas fa-chevron-down clone ${open ? 'opened' : 'closed'}`}></i>
            </div>
            <div className={`disclosure-container__details ${open ? 'opened' : 'closed'}`}>
                Governments around the world spend an estimated US$9.5 trillion through contracts
                every year. Yet, contracting information is often unavailable for public scrutiny.{' '}
                <br />
                <br />
                The Open Contracting Data Standard (OCDS) enables disclosure of data and documents
                at all stages of the contracting process <br /> by defining a common data model. It
                was created to support organizations to increase contracting transparency, <br />{' '}
                and allow deeper analysis of contracting data by a wide range of users.
            </div>
        </div>
    )
}
