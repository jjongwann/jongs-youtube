import React from 'react'
import { Link } from 'react-router-dom';
import { snsLink } from "../../data/header.js";

const Sns = () => {
  return (
    <div className='header__sns'>
                <ul>
                        {snsLink.map((sns, key)=>(
                            <li key={key}>
                                <Link to={sns.url} aria-label={sns.title}>
                                    {sns.icon}
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
  )
}

export default Sns