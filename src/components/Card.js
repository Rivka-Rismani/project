import React, { useState, useRef, useEffect } from 'react'
import "../styles/Card.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { setAllData } from '../services/ApiService'
import validator from 'validator'
const Card = (props) => {
    const [data, setData] = useState(props.item)
    const value = useRef("")
    useEffect(() => {
        value.current.value = props.item.Title
    }, [])
    const setCard =  () => {
        let card = data
        card = {...props.item}
         setData(card)
    }
    const changeValue=()=>{
        setAllData(  value.current.value)
    }
    return (
        <>
                <div class="p-3 border bg-light rounded-3">
                    <div class='row'>
                        <div class='col-6 rounded-3'>
                            <img class="img-thumbnail rounded-3" onClick={setCard} src={validator.isURL(props.item.Poster)&&props.item.Poster} data-toggle="modal" data-target={`#${props.item.imdbID}`} ></img>
                        </div>
                        <div class='col-4'>
                            <textarea class='mt-3 mb-4' ref={value} onChange={changeValue}></textarea>
                            <div class='mt-5'>{props.item.Year.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}</div></div>
                    </div>

                </div>
            {/* modal */}
            <div>
                <div class="modal" id={props.item.imdbID} >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">{`${data.Title}(${data.Type})`}</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                <img src={data.Poster}></img>
                            </div>
                            <div >
                                imdbID:{data.imdbID}
                            </div>
                            <div>
                                {data.Year.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">back</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card




