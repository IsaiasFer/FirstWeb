import React from 'react'

import '../styles/pageError.css'

import '../styles/pageLoading.css'
function PageError(props){
    return <div className="PageError">
        {props.error.message}
        <img src="https://plantillasdememes.com/img/plantillas/spider-man-triste11579073223.jpg" height='100' width='134' alt=""/>
    </div>
}

export default PageError;