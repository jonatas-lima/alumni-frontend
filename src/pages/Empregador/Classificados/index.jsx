import React, {useEffect,useState} from 'react'
import {backend} from '../../../services/api'
import {Pagination, SelectPicker, Input, InputGroup } from 'rsuite'
import {Table} from 'rsuite'
import './style.css'

const { Column, HeaderCell, Cell } = Table;


const Classificados = (props) => {
    const [page, setPage] = useState(0)
    const [data, setData] = useState([])
    const [dataMaster, setDataMaster] = useState({})
    
    useEffect(()=>{
        handleClassificados()
    },[])

    const handleClassificados = async() =>{
        const res = await backend.get('employer/' + page,{headers:{'Authentication-Token': localStorage.getItem('token')}})
        .then(res =>{
            setData(res.content)
            setDataMaster(res)
            console.log(res)
        })
        .catch(err =>{
            console.log(err)

        })
    }

    return (
        <div className={'classificados'}>
            <Table
            height={480}
            width={800}
            data={props.data}
            onRowClick={data => {
                console.log(data);
            }}
            >
            <Column width={300} >
                <HeaderCell >Nome da Empresa</HeaderCell>
                <Cell dataKey="name">
                
                </Cell>
            </Column>
            <Column width={300}>
                <HeaderCell>Tipo</HeaderCell>
                <Cell dataKey={'tipo'}>

                </Cell>
            </Column>
            <Column width={120} >
                <HeaderCell>Linkedin</HeaderCell>

                <Cell>
                {rowData => {
                    return (
                    <span>
                        <a target={'_blank'} href={rowData.linkedinID}>Link</a> 
                        
                    </span>
                    );
                }}
                </Cell>
            </Column>
            </Table>
        </div>
    )
}
export default Classificados
